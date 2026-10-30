import type {MetadataRoute} from "next";
import {isPublicLaunch,siteUrl} from "./_lib/seo";
import {services} from "./_lib/site-data";
export default function sitemap():MetadataRoute.Sitemap{
  if(!isPublicLaunch)return [];
  const paths=["/","/cars","/about","/faq","/contact","/privacy",...services.map(s=>`/services/${s.key}`)];
  return paths.map(path=>({url:`${siteUrl}${path}`,changeFrequency:"weekly" as const,priority:path==="/"?1:path==="/cars"?0.9:0.7}));
}
