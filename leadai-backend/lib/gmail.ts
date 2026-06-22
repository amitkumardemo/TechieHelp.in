import { google, Auth } from "googleapis";

const SCOPES = [
  "openid",
  "email",
  "profile",
  "https://www.googleapis.com/auth/gmail.readonly",
  "https://www.googleapis.com/auth/gmail.send",
  "https://www.googleapis.com/auth/gmail.modify",
];

/** Creates a configured Google OAuth2 client */
export function getOAuthClient(): any {
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    process.env.GOOGLE_REDIRECT_URI!
  );
}

/** Generates the Google consent URL. State encodes workspaceId for callback. */
export function getAuthUrl(workspaceId: string): string {
  const oauth2Client = getOAuthClient();
  return oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent select_account",
    scope: SCOPES,
    state: Buffer.from(JSON.stringify({ workspaceId })).toString("base64"),
  });
}

/** Exchanges authorization code for access + refresh tokens */
export async function exchangeCode(
  code: string
): Promise<{ accessToken: string; refreshToken: string; expiry: Date; email: string }> {
  const oauth2Client = getOAuthClient();
  const { tokens } = await oauth2Client.getToken(code);

  if (!tokens.access_token || !tokens.refresh_token) {
    throw new Error("OAuth token exchange failed — missing tokens");
  }

  oauth2Client.setCredentials(tokens);

  // Get the connected email address
  const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });
  const { data } = await oauth2.userinfo.get();

  return {
    accessToken: tokens.access_token,
    refreshToken: tokens.refresh_token,
    expiry: new Date(tokens.expiry_date ?? Date.now() + 3600 * 1000),
    email: data.email ?? "",
  };
}

/** Creates an OAuth2Client already loaded with credentials */
export function getAuthenticatedClient(
  accessToken: string,
  refreshToken: string
): any {
  const oauth2Client = getOAuthClient();
  oauth2Client.setCredentials({
    access_token: accessToken,
    refresh_token: refreshToken,
  });
  return oauth2Client;
}

/** Refreshes the access token and returns the new one */
export async function refreshAccessToken(
  refreshToken: string
): Promise<{ accessToken: string; expiry: Date }> {
  const oauth2Client = getOAuthClient();
  oauth2Client.setCredentials({ refresh_token: refreshToken });
  const { credentials } = await oauth2Client.refreshAccessToken();
  return {
    accessToken: credentials.access_token!,
    expiry: new Date(credentials.expiry_date ?? Date.now() + 3600 * 1000),
  };
}

export interface ParsedAttachment {
  filename: string;
  mimeType: string;
  size: number;
}

export interface ParsedEmail {
  gmailMessageId: string;
  subject: string;
  sender: string;
  recipient: string;
  snippet: string;
  body: string;
  receivedAt: Date;
  isRead: boolean;
  gmailThreadId: string;
  labelIds: string[];
  attachments: ParsedAttachment[];
}

/** Fetches emails matching a query (e.g. "in:inbox" or "label:SENT") */
export async function fetchEmailsForQuery(
  auth: any,
  query: string,
  maxResults = 20
): Promise<ParsedEmail[]> {
  const gmail = google.gmail({ version: "v1", auth });

  const listResponse = await gmail.users.messages.list({
    userId: "me",
    maxResults,
    q: query,
  });

  const messages = listResponse.data.messages ?? [];
  const emails: ParsedEmail[] = [];

  for (const msg of messages) {
    if (!msg.id) continue;

    try {
      const detail = await gmail.users.messages.get({
        userId: "me",
        id: msg.id,
        format: "full",
      });

      const headers = detail.data.payload?.headers ?? [];
      const getHeader = (name: string) =>
        headers.find((h) => h.name?.toLowerCase() === name.toLowerCase())
          ?.value ?? "";

      const subject = getHeader("Subject") || "(No Subject)";
      const sender = getHeader("From");
      const recipient = getHeader("To");
      const dateStr = getHeader("Date");

      // Extract body recursively
      let body = "";
      const findTextBody = (payloadPart: any): string => {
        if (payloadPart.mimeType === "text/plain" && payloadPart.body?.data) {
          return Buffer.from(payloadPart.body.data, "base64").toString("utf-8");
        }
        if (payloadPart.parts) {
          for (const p of payloadPart.parts) {
            const found = findTextBody(p);
            if (found) return found;
          }
        }
        return "";
      };

      body = findTextBody(detail.data.payload ?? {}) || detail.data.snippet || "";

      // Extract attachments
      const attachments: ParsedAttachment[] = [];
      const extractParts = (partsList: any[]) => {
        for (const part of partsList) {
          if (part.filename && part.body && (part.body.attachmentId || part.body.size)) {
            attachments.push({
              filename: part.filename,
              mimeType: part.mimeType || "application/octet-stream",
              size: part.body.size || 0,
            });
          }
          if (part.parts) {
            extractParts(part.parts);
          }
        }
      };

      if (detail.data.payload?.parts) {
        extractParts(detail.data.payload.parts);
      }

      const labelIds = detail.data.labelIds ?? [];
      const isRead = !labelIds.includes("UNREAD");

      emails.push({
        gmailMessageId: msg.id,
        subject,
        sender,
        recipient,
        snippet: detail.data.snippet ?? "",
        body: body.slice(0, 5000), // Limit body size
        receivedAt: dateStr ? new Date(dateStr) : new Date(),
        isRead,
        gmailThreadId: detail.data.threadId ?? "",
        labelIds,
        attachments,
      });
    } catch (e) {
      console.error(`Failed to parse email ${msg.id}:`, e);
      continue;
    }
  }

  return emails;
}

/** Fetches unread emails from Gmail inbox */
export async function fetchInboxEmails(
  auth: any,
  maxResults = 20
): Promise<ParsedEmail[]> {
  return fetchEmailsForQuery(auth, "in:inbox", maxResults);
}

/** Sends an email via Gmail API from the connected account */
export async function sendEmail(
  auth: any,
  to: string,
  subject: string,
  body: string,
  replyToMessageId?: string
): Promise<void> {
  const gmail = google.gmail({ version: "v1", auth });

  // Build RFC 2822 message
  const messageParts = [
    `To: ${to}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=utf-8",
    "",
    body,
  ];

  if (replyToMessageId) {
    messageParts.splice(2, 0, `In-Reply-To: ${replyToMessageId}`);
    messageParts.splice(3, 0, `References: ${replyToMessageId}`);
  }

  const rawMessage = messageParts.join("\r\n");
  const encodedMessage = Buffer.from(rawMessage)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  await gmail.users.messages.send({
    userId: "me",
    requestBody: { raw: encodedMessage },
  });
}

/** Revokes the OAuth token */
export async function revokeToken(accessToken: string): Promise<void> {
  const oauth2Client = getOAuthClient();
  await oauth2Client.revokeToken(accessToken);
}
