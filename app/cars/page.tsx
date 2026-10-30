import type { Metadata } from "next";
import VehicleExplorer from "../_components/ui/vehicle-explorer";
import PageHero from "../_components/ui/page-hero";
import CtaBand from "../_components/ui/cta-band";
import FaqList from "../_components/ui/faq-list";
import { faqs } from "../_lib/site-data";
import SectionHeading from "../_components/ui/section-heading";
import Icon from "../_components/ui/icon";
import Link from "next/link";
import { pageMetadata } from "../_lib/seo";

export const metadata: Metadata = pageMetadata("전체 차량 | 부산 렌터카 차종 안내", "건아렌트카 전체 차량 16개 차종을 살펴보세요. 카테고리 필터, 모델명 검색과 선택 시간별 참고 요금을 제공합니다.", "/cars");

/** Accessible directly at http://localhost:3001/cars, regardless of home scroll position. */
export default function CarsPage() {
  return (
    <div data-page="cars">
      <PageHero
        eyebrow="ALL VEHICLES · /cars"
        title={<>전체 차량<br /><em>한눈에 둘러보기.</em></>}
        description="이곳은 메인페이지의 차량 섹션이 아닌 독립적인 전체 차량 페이지입니다. 16개 등록 차종을 검색하고 비교해 보세요."
      />
      <section className="section listing-section">
        <div className="container">
          <SectionHeading eyebrow="EXPLORE THE FLEET" title="건아렌트카 전체 차량 목록" description="차종별 이용 가능 여부와 최종 요금은 전화 상담으로 확인해 주세요." />
          <VehicleExplorer variant="full" />
          <div className="insurance-brief">
            <Icon name="shield" size={28}/>
            <div><h3>완전자차 기본 포함 · 보험 조건 확인 필수</h3><p>자기부담금(20만 원 또는 50만 원), 휴차료(1일 요금의 50%) 및 보상 제외 조건 등이 적용될 수 있습니다. 최종 계약 조건은 전화로 확인해 주세요.</p></div>
            <Link href="/faq">자세한 내용 <Icon name="arrow" size={17}/></Link>
          </div>
        </div>
      </section>
      <section className="section faq-preview small-faq">
        <div className="container">
          <SectionHeading eyebrow="BEFORE YOU DRIVE" title="이용 전 알아두세요" description="예약 가능 여부와 대여 조건은 상담으로 최종 확인해 주세요."/>
          <FaqList items={faqs.filter(q => ["license", "insurance", "availability"].includes(q.id))}/>
        </div>
      </section>
      <CtaBand compact />
    </div>
  );
}
