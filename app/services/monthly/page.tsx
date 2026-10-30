import type {Metadata} from "next";
import ServicePageContent from "../../_components/ui/service-page-content";
import {getService} from "../../_lib/site-data";
import {pageMetadata} from "../../_lib/seo";
const service=getService("monthly")!;
export const metadata:Metadata=pageMetadata(`${service.title} | 건아렌트카`,service.summary,"/services/monthly");
export default function ServicePage(){return <div data-page="service-monthly"><ServicePageContent service={service}/></div>}
