import type {Metadata} from "next";
import PageHero from "../_components/ui/page-hero";
import FaqDirectory from "../_components/ui/faq-directory";
import CtaBand from "../_components/ui/cta-band";
import Icon from "../_components/ui/icon";
import {pageMetadata} from "../_lib/seo";
export const metadata:Metadata=pageMetadata("자주 묻는 질문 | 대여 자격·보험·요금", "건아렌트카 이용 전 알아두실 대여 자격, 완전자차보험, 자기부담금, 휴차료, 보증금, 차량 인수·반납 조건을 확인하세요.", "/faq");
export default function FaqPage(){return <><PageHero eyebrow="FREQUENTLY ASKED QUESTIONS" title={<>궁금했던 점을<br/><em>쉽게 확인해 보세요.</em></>} description="처음 이용하시는 분도 걱정 없도록. 대여 자격부터 보험과 반납까지 자주 묻는 질문을 모았습니다."/><section className="section faq-directory-section"><div className="container narrow-container"><FaqDirectory/><div className="faq-final-note"><Icon name="info" size={18}/> 이 안내는 일반적인 운영 기준입니다. 실제 적용 조건 및 예외는 전화 상담과 계약 내용을 기준으로 최종 확인해 주세요.</div></div></section><CtaBand compact/></>}
