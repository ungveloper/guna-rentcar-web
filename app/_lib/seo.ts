import type { Metadata } from "next";

export const isPublicLaunch = process.env.NEXT_PUBLIC_PUBLIC_LAUNCH === "true";
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const siteUrl = configuredUrl && /^https:\/\//.test(configuredUrl) ? configuredUrl.replace(/\/$/, "") : "http://localhost:3000";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: isPublicLaunch ? { canonical: `${siteUrl}${path}` } : undefined,
    openGraph: { title: `${title} | 건아렌트카`, description, locale: "ko_KR", type: "website", siteName: "GUNA RENTCAR" },
    robots: isPublicLaunch ? { index: true, follow: true } : { index: false, follow: false, googleBot: { index: false, follow: false } },
  };
}
