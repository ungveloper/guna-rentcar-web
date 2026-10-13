/** 실제 도메인이 정해지면 NEXT_PUBLIC_SITE_URL=https://example.com 설정 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    try {
      const value = new URL(configured);
      if (value.protocol === "https:" || value.protocol === "http:") return value.origin;
    } catch {
      // Ignore malformed values and fall back to deployment environment.
    }
  }
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercelUrl) return `https://${vercelUrl.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}

export const isPreview = process.env.VERCEL_ENV === "preview";
