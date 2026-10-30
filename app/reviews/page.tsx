import type {Metadata} from "next";
import PageHero from "../_components/ui/page-hero";
import Reviews from "../_components/ui/reviews";
import CtaBand from "../_components/ui/cta-band";
import {pageMetadata} from "../_lib/seo";
export const metadata:Metadata=pageMetadata("고객 후기 | 건아렌트카","건아렌트카 고객 후기 안내. 확인된 네이버 플레이스 후기만 게시합니다.","/reviews");
export default function ReviewsPage(){return <div data-page="reviews"><PageHero eyebrow="CUSTOMER STORIES" title={<>건아렌트카를 이용하신 분들의<br/><span className="text-[#AA895B]">후기를 모으고 있습니다.</span></>} description="네이버 플레이스에 남겨주신 후기의 원문과 작성일을 확인한 뒤 게시하겠습니다."/><Reviews/><CtaBand compact/></div>}
