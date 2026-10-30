import type {Metadata} from "next";
import ServicePageContent from "../../_components/ui/service-page-content";
import {getService} from "../../_lib/site-data";
import {pageMetadata} from "../../_lib/seo";
const service=getService("short-term")!;
export const metadata:Metadata=pageMetadata(`${service.title} | 건아렌트카`,service.summary,"/services/short-term");
export default function ServicePage(){return <div data-page="service-short-term"><ServicePageContent service={service}/></div>}
