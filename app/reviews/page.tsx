import PageHero from "../_components/ui/page-hero";
import Reviews from "../_components/ui/reviews";
import CtaBand from "../_components/ui/cta-band";
import {pageMetadata} from "../_lib/seo";

export const metadata=pageMetadata(
  "고객 후기 | 부산 건아렌트카",
  "건아렌트카의 고객 후기 안내 페이지입니다. 실제 네이버 플레이스 후기 원문 확인 후 게시합니다.",
  "/reviews",
);
export default function ReviewsPage(){
  return <>
    <PageHero eyebrow="CUSTOMER REVIEWS" title={<>고객의 경험으로<br/><em>확인하는 건아렌트카.</em></>} description="실제 이용 고객들의 리뷰는 원문·작성자·작성일을 확인한 후 게시합니다." compact />
    <Reviews/>
    <CtaBand compact/>
  </>;
}
