import type { MetadataRoute } from "next";
import { getSiteUrl, isPreview } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isPreview ? [{ userAgent: "*", disallow: "/" }] : [{ userAgent: "*", allow: "/" }],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
    host: getSiteUrl(),
  };
}
