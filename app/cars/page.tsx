import type {Metadata} from "next";
import VehicleExplorer from "../_components/ui/vehicle-explorer";
import PageHero from "../_components/ui/page-hero";
import CtaBand from "../_components/ui/cta-band";
import FaqList from "../_components/ui/faq-list";
import {faqs} from "../_lib/site-data";
import SectionHeading from "../_components/ui/section-heading";
import Icon from "../_components/ui/icon";
import Link from "next/link";
import {pageMetadata} from "../_lib/seo";
export const metadata:Metadata=pageMetadata("전체 차량 | 부산 렌터카 차종 안내", "건아렌트카 전체 차량 모델을 확인해 보세요. 경차·세단·SUV·승합차, 일부 단기렌트 시간별 참고 요금과 전화 상담 안내.", "/cars");
export default function CarsPage(){return <><PageHero eyebrow="ALL VEHICLES" title={<>당신에게 맞는<br/><em>차량을 찾아보세요.</em></>} description="차량 선택부터 이용 방법까지. 원하는 차종을 비교하고 전화로 실제 이용 가능 여부를 확인하세요."/><section className="section listing-section"><div className="container"><SectionHeading eyebrow="EXPLORE THE FLEET" title="한눈에 보는 차량 라인업" description="전체 16개 등록 차종을 살펴보세요. 특정 차종의 대여 가능 여부와 최종 견적은 전화 상담이 필요합니다."/><VehicleExplorer variant="full"/><div className="insurance-brief"><Icon name="shield" size={28}/><div><h3>완전자차 기본 포함 · 보험 조건 확인 필수</h3><p>자기부담금(20만 원 또는 50만 원), 휴차료(1일 요금의 50%) 및 보상 제외 조건 등이 적용될 수 있습니다. 최종 계약 조건은 전화로 확인해 주세요.</p></div><Link href="/faq">자세한 내용 <Icon name="arrow" size={17}/></Link></div></div></section><section className="section faq-preview small-faq"><div className="container"><SectionHeading eyebrow="BEFORE YOU DRIVE" title="이용 전 알아두세요" description="예약 가능 여부와 대여 조건은 상담으로 최종 확인해 주세요."/><FaqList items={faqs.filter(q=>["license","insurance","availability"].includes(q.id))}/></div></section><CtaBand compact/></>}
