// Personal email domains to reject
const PERSONAL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "ymail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "proton.me",
  "protonmail.com",
  "icloud.com",
  "aol.com",
  "zoho.com",
  "mail.com",
  "gmx.com",
  "yandex.com"
]);

/**
 * Extracts the primary domain from an email or a website URL, stripping protocol, query parameters, path and 'www.' prefix.
 */
export const extractDomain = (input) => {
  if (!input) return "";
  let clean = input.trim().toLowerCase();

  // If it's an email
  if (clean.includes("@")) {
    return clean.split("@")[1];
  }

  // If it's a website URL
  if (!/^https?:\/\//i.test(clean)) {
    clean = "https://" + clean;
  }

  try {
    const url = new URL(clean);
    let hostname = url.hostname;
    if (hostname.startsWith("www.")) {
      hostname = hostname.substring(4);
    }
    return hostname;
  } catch (e) {
    // Fallback if URL parsing fails
    let domain = clean.replace(/^(https?:\/\/)?(www\.)?/, "");
    domain = domain.split("/")[0];
    domain = domain.split(":")[0];
    return domain;
  }
};

/**
 * Validates whether the email domain is a business domain (not personal).
 */
export const isBusinessEmail = (email) => {
  const domain = extractDomain(email);
  if (!domain) return false;
  return !PERSONAL_DOMAINS.has(domain);
};

/**
 * Checks if the email domain matches the website domain.
 */
export const domainsMatch = (email, website) => {
  const emailDomain = extractDomain(email);
  const websiteDomain = extractDomain(website);
  if (!emailDomain || !websiteDomain) return false;
  return emailDomain === websiteDomain;
};

/**
 * Validates domain using Cloudflare DNS over HTTPS API to check for MX records.
 */
export const verifyDomainMX = async (domain) => {
  if (!domain) {
    return { success: false, error: "Domain is empty." };
  }

  const cleanDomain = extractDomain(domain);

  // Validate format basic check
  const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!domainRegex.test(cleanDomain)) {
    return { success: false, error: "Invalid domain format." };
  }

  try {
    const response = await fetch(`https://cloudflare-dns.com/dns-query?name=${cleanDomain}&type=MX`, {
      headers: {
        Accept: "application/dns-json"
      }
    });

    if (!response.ok) {
      throw new Error(`DNS request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    // Status 0 represents NOERROR (DNS successfully queried)
    if (data.Status === 0 && data.Answer && data.Answer.length > 0) {
      return { 
        success: true, 
        records: data.Answer.map(ans => ans.data) 
      };
    }
    
    return { 
      success: false, 
      error: `No mail exchange (MX) records found for domain '${cleanDomain}'. Signups require a domain with configured email routing.` 
    };
  } catch (err) {
    console.error("DNS lookup error:", err);
    // Fallback for offline or blocked requests (simulated check if request blocked by CORS or network error)
    // In standard environments Cloudflare DoH is open, but we handle exception gracefully
    return { 
      success: false, 
      error: "Unable to verify mail server (MX) configuration. Please ensure your domain is active and can receive emails." 
    };
  }
};

/**
 * Validates password strength according to policy.
 */
export const validatePassword = (password) => {
  const checks = {
    length: password.length >= 12,
    hasUpper: /[A-Z]/.test(password),
    hasLower: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[^A-Za-z0-9]/.test(password)
  };

  const score = Object.values(checks).filter(Boolean).length;
  
  return {
    valid: score === 5,
    checks,
    score // 0 to 5
  };
};
