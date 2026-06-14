import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { NextRequest } from "next/server";

let app: App;

function getFirebaseAdmin(): App {
  if (getApps().length === 0) {
    app = initializeApp({
      projectId: process.env.FIREBASE_PROJECT_ID!,
    });
  } else {
    app = getApps()[0]!;
  }
  return app;
}

export interface DecodedToken {
  uid: string;
  email?: string;
  workspaceId?: string;
}

/**
 * Verifies a Firebase ID token from the Authorization header.
 * Returns the decoded token or throws if invalid.
 */
export async function verifyFirebaseToken(req: NextRequest): Promise<DecodedToken> {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    throw new Error("Missing or invalid Authorization header");
  }

  const idToken = authHeader.split("Bearer ")[1];
  if (!idToken) {
    throw new Error("Empty token");
  }

  const admin = getFirebaseAdmin();
  const auth = getAuth(admin);
  const decoded = await auth.verifyIdToken(idToken);

  return {
    uid: decoded.uid,
    email: decoded.email,
    workspaceId: decoded["workspaceId"] as string | undefined,
  };
}

/**
 * Extracts workspaceId from Firebase token custom claims or falls back to uid.
 * In this app, workspaceId is stored as the firebase UID in the User table.
 */
export async function getWorkspaceFromToken(req: NextRequest): Promise<string> {
  const decoded = await verifyFirebaseToken(req);
  // workspaceId is stored in custom claims, or we look it up by uid
  return decoded.workspaceId ?? decoded.uid;
}
