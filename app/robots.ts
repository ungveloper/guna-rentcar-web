import type {MetadataRoute} from "next";
import {isPublicLaunch,siteUrl} from "./_lib/seo";
export default function robots():MetadataRoute.Robots{
  return isPublicLaunch?{rules:{userAgent:"*",allow:"/",disallow:"/admin/"},sitemap:`${siteUrl}/sitemap.xml`}:{rules:{userAgent:"*",disallow:"/"}};
}
