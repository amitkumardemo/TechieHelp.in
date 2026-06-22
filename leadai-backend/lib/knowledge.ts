import { prisma } from "./prisma";

function cleanHtml(html: string): { title: string; text: string } {
  // 1. Remove non-content blocks
  let text = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<head[^>]*>[\s\S]*?<\/head>/gi, "")
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "")
    .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");

  // 2. Extract title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";

  // 3. Strip tags
  text = text.replace(/<\/?[^>]+(>|$)/g, " ");

  // 4. Decode entities
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  // 5. Normalise spacing
  text = text.replace(/\s+/g, " ").trim();

  return { title, text };
}

function extractLinks(html: string, baseUrl: string): string[] {
  const links: string[] = [];
  const baseObj = new URL(baseUrl);
  const regex = /href="([^"]+)"/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    try {
      const rawUrl = match[1];
      const absoluteUrl = new URL(rawUrl, baseUrl).toString();
      const urlObj = new URL(absoluteUrl);

      // Same domain only
      if (urlObj.host === baseObj.host) {
        urlObj.hash = "";
        urlObj.search = "";
        const cleaned = urlObj.toString();

        // Skip assets/files
        if (!/\.(png|jpe?g|gif|pdf|zip|mp4|css|js|webp|svg|xml)$/i.test(cleaned)) {
          links.push(cleaned);
        }
      }
    } catch {
      // Ignore invalid URLs
    }
  }

  return Array.from(new Set(links));
}

export async function crawlWebsite(workspaceId: string, websiteUrl: string) {
  let startUrl = websiteUrl.trim();
  if (!/^https?:\/\//i.test(startUrl)) {
    startUrl = `https://${startUrl}`;
  }

  // Get or create CompanyKnowledge record
  const companyKnowledge = await prisma.companyKnowledge.upsert({
    where: { workspaceId },
    create: {
      workspaceId,
      websiteUrl: startUrl,
      status: "CRAWLING",
    },
    update: {
      websiteUrl: startUrl,
      status: "CRAWLING",
    },
  });

  console.log(`[CRAWLER] Starting async crawl for workspace ${workspaceId} on URL: ${startUrl}`);

  // Run crawling in a separate execution flow
  (async () => {
    try {
      const visited = new Set<string>();
      const queue = [startUrl];
      const maxPages = 25;
      const pagesCrawled: Array<{ url: string; title: string; content: string }> = [];

      while (queue.length > 0 && visited.size < maxPages) {
        const currentUrl = queue.shift()!;
        if (visited.has(currentUrl)) continue;
        visited.add(currentUrl);

        try {
          console.log(`[CRAWLER] Syncing: ${currentUrl}`);
          const res = await fetch(currentUrl, {
            headers: {
              "User-Agent": "Mozilla/5.0 (compatible; LeadAICrawler/1.0)",
            },
            signal: AbortSignal.timeout(5000), // 5 seconds per request
          });

          if (!res.ok) continue;

          const contentType = res.headers.get("content-type") || "";
          if (!contentType.includes("text/html")) continue;

          const html = await res.text();
          const { title, text } = cleanHtml(html);

          if (text.length > 50) {
            pagesCrawled.push({
              url: currentUrl,
              title: title || currentUrl,
              content: text,
            });
          }

          const newLinks = extractLinks(html, currentUrl);
          for (const link of newLinks) {
            if (!visited.has(link) && !queue.includes(link)) {
              queue.push(link);
            }
          }
        } catch (crawlError) {
          console.error(`[CRAWLER] Page fetch failed ${currentUrl}:`, crawlError);
        }
      }

      // Delete existing indexed pages
      await prisma.crawledPage.deleteMany({
        where: { companyKnowledgeId: companyKnowledge.id },
      });

      // Save crawled content
      let totalSize = 0;
      for (const page of pagesCrawled) {
        await prisma.crawledPage.create({
          data: {
            companyKnowledgeId: companyKnowledge.id,
            url: page.url,
            title: page.title,
            content: page.content,
          },
        });
        totalSize += page.content.length;
      }

      // Mark synced
      await prisma.companyKnowledge.update({
        where: { id: companyKnowledge.id },
        data: {
          status: "SYNCED",
          pagesIndexed: pagesCrawled.length,
          knowledgeSize: totalSize,
          lastSyncAt: new Date(),
        },
      });
      console.log(`[CRAWLER] Finished successfully. Indexed ${pagesCrawled.length} pages, size: ${totalSize} chars.`);
    } catch (err) {
      console.error("[CRAWLER] Fatal crawler background execution failure:", err);
      await prisma.companyKnowledge.update({
        where: { id: companyKnowledge.id },
        data: { status: "ERROR" },
      });
    }
  })().catch(console.error);

  return companyKnowledge;
}

/**
 * Searches crawled pages for relevance matching an incoming inquiry body text.
 */
export async function searchKnowledgeContext(workspaceId: string, emailBody: string): Promise<string> {
  try {
    const knowledge = await prisma.companyKnowledge.findUnique({
      where: { workspaceId },
      include: { pages: true },
    });

    if (!knowledge || knowledge.pages.length === 0) {
      return "";
    }

    const queryTerms = emailBody
      .toLowerCase()
      .split(/\W+/)
      .filter((w) => w.length > 3);

    const scoredPages = knowledge.pages.map((page) => {
      let score = 0;
      const contentLower = (page.content || "").toLowerCase();
      const titleLower = (page.title || "").toLowerCase();

      for (const term of queryTerms) {
        if (contentLower.includes(term)) score += 1;
        if (titleLower.includes(term)) score += 5; // title match heavier weight
      }

      return {
        url: page.url,
        title: page.title,
        content: page.content,
        score,
      };
    });

    // Select top 3 matched pages
    const matches = scoredPages
      .filter((p) => p.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    if (matches.length === 0) {
      // Fallback: return home page or first page
      return knowledge.pages.slice(0, 2).map(p => `[Page: ${p.title} - ${p.url}]: ${p.content?.slice(0, 1500)}`).join("\n\n");
    }

    return matches
      .map((p) => `[Relevant Page Match: ${p.title} (${p.url})]:\n${p.content?.slice(0, 2000)}`)
      .join("\n\n");
  } catch (err) {
    console.error("[RAG] Knowledge search context matching failed:", err);
    return "";
  }
}
