import type {Metadata} from "next";
import PageHero from "../_components/ui/page-hero";
import FaqDirectory from "../_components/ui/faq-directory";
import CtaBand from "../_components/ui/cta-band";
import {pageMetadata} from "../_lib/seo";
export const metadata:Metadata=pageMetadata("자주 묻는 질문 | 건아렌트카","렌터카 대여 자격, 완전자차보험, 요금 및 인수·반납 조건 FAQ.","/faq");
export default function FaqPage(){return <div data-page="faq"><PageHero eyebrow="FREQUENTLY ASKED QUESTIONS" title={<>알아두면 좋은<br/><span className="text-[#AA895B]">렌트 이야기.</span></>} description="보험, 대여 자격, 요금, 인수·반납까지. 궁금한 내용을 미리 확인해 보세요."/><section className="bg-[#f5f7f4] px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-[1000px]"><FaqDirectory/></div></section><CtaBand compact/></div>}
