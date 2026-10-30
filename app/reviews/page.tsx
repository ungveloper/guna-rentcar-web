import type {Metadata} from "next";
import PageHero from "../_components/ui/page-hero";
import Reviews from "../_components/ui/reviews";
import CtaBand from "../_components/ui/cta-band";
import {pageMetadata} from "../_lib/seo";
export const metadata:Metadata=pageMetadata("고객 후기 | 건아렌트카","네이버 플레이스에 남겨주신 건아렌트카 이용 후기를 모았습니다. 차량 청결, 친절한 상담, 재이용 고객의 실제 경험을 확인하세요.","/reviews");
export default function ReviewsPage(){return <div data-page="reviews"><PageHero eyebrow="CUSTOMER STORIES" title={<>건아렌트카를 이용하신 분들의<br/><span className="text-[#AA895B]">후기를 모았습니다.</span></>} description="차량 관리, 상담, 사고대차, 가족여행까지. 네이버 플레이스에 남겨주신 후기를 읽어보세요."/><Reviews/><CtaBand compact/></div>}
