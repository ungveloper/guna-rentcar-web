import ServicePageContent from "../../_components/ui/service-page-content";
import {services} from "../../_lib/site-data";
import {pageMetadata} from "../../_lib/seo";

const service = services.find(item => item.key === "short-term")!;
export const metadata = pageMetadata(
  `${service.title} | 부산 건아렌트카`,
  `${service.summary} 부산 건아렌트카 24시간 전화 상담, 이용 가능 여부 및 최종 조건은 전화 문의.`,
  "/services/short-term",
);
export default function Page() {
  return <ServicePageContent service={service}/>;
}
