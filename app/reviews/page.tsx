import type {Metadata} from "next";
import PageHero from "../_components/ui/page-hero";
import Reviews from "../_components/ui/reviews";
import CtaBand from "../_components/ui/cta-band";
import {pageMetadata} from "../_lib/seo";
export const metadata:Metadata=pageMetadata("고객 후기 | 건아렌트카","건아렌트카 네이버 플레이스 실제 고객 후기 안내.","/reviews");
export default function ReviewsPage(){return <div data-page="reviews"><PageHero eyebrow="CUSTOMER STORIES" title={<>고객이 전하는<br/><span className="text-[#AA895B]">건아렌트카 이야기.</span></>} description="실제 후기 원문과 작성일·작성자 정보는 출처 확인 후 등록합니다."/><Reviews/><CtaBand compact/></div>}
