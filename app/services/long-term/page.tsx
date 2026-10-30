import type {Metadata} from "next";
import ServicePageContent from "../../_components/ui/service-page-content";
import {getService} from "../../_lib/site-data";
import {pageMetadata} from "../../_lib/seo";
const service=getService("long-term")!;
export const metadata:Metadata=pageMetadata(`${service.title} | 건아렌트카`,service.summary,"/services/long-term");
export default function ServicePage(){return <div data-page="service-long-term"><ServicePageContent service={service}/></div>}
