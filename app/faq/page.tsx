import type {Metadata} from "next";
import PageHero from "../_components/ui/page-hero";
import FaqDirectory from "../_components/ui/faq-directory";
import CtaBand from "../_components/ui/cta-band";
import {pageMetadata} from "../_lib/seo";
export const metadata:Metadata=pageMetadata("자주 묻는 질문 | 건아렌트카","렌터카 대여 자격, 완전자차보험, 요금 및 인수·반납 조건 FAQ.","/faq");
export default function FaqPage(){return <div data-page="faq"><PageHero eyebrow="FREQUENTLY ASKED QUESTIONS" title={<>궁금한 점을<br/><span className="text-[#AA895B]">확인해 보세요.</span></>} description="보험·대여 자격·요금·차량 인수 등 자주 문의하시는 내용을 모았습니다."/><section className="bg-white px-5 py-20"><div className="mx-auto max-w-[1000px]"><FaqDirectory/></div></section><CtaBand compact/></div>}
