import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DetailHero } from "@/components/DetailHero";
import { InnerPageShell } from "@/components/InnerPageShell";

export const metadata: Metadata = {
  title: "부산 사고대차·보험대차 상담 안내 | 건아렌트카",
  description: "부산 연제구 건아렌트카 사고대차·보험대차 상담 안내. 교통사고 또는 차량 수리로 대체 차량이 필요할 때 확인할 보험 처리 상황과 상담 절차를 안내합니다.",
  alternates: { canonical: "/services/accident" },
  openGraph: { title: "부산 사고대차·보험대차 | 건아렌트카", description: "사고 접수 및 보험 처리 상황에 따른 대체 차량 이용 가능 여부를 상담하세요.", url: "/services/accident", images: ["/images/og/cover.png"] },
};

export default function AccidentPage() {
  return <InnerPageShell>
    <DetailHero eyebrow="03 / ACCIDENT REPLACEMENT" title="사고로 차량이 필요할 때," accent="사고대차 상담." description="교통사고 또는 차량 수리로 이동이 어려운 상황이라면 먼저 전화로 문의하세요. 보험 처리 상황과 차량 조건을 확인해 안내합니다." image="/images/vehicles/tucson.webp" imageAlt="현대 투싼 차량 이미지" detailLabel="사고대차" />
    <section className="detail-section" id="details"><div className="container"><div className="detail-heading"><span className="micro-label">HOW TO INQUIRE</span><h2>사고대차 상담 절차</h2><p>사고대차는 사고 및 보험 처리 상황마다 진행 방식이 다릅니다. 아래 내용은 전화 상담 전 확인하면 좋은 기본 정보입니다.</p></div>
      <div className="detail-steps"><article><span>01</span><h3>사고·수리 상황 확인</h3><p>차량을 이용하기 어려운 사유와 예상 수리 기간을 확인해 주세요.</p></article><article><span>02</span><h3>보험 처리 정보 확인</h3><p>사고 접수 및 보험 처리 여부를 확인한 뒤 상담 시 알려주세요.</p></article><article><span>03</span><h3>차량·대여 조건 상담</h3><p>대체 차량 가능 여부, 차량 종류, 인수·반납 방식과 비용 관련 조건을 확인합니다.</p></article></div>
      <div className="detail-notebox"><strong>보험 적용 여부를 보장하지 않습니다</strong><p>보험사고대차의 제공 가능 여부, 보험 처리 범위, 차량 등급 및 비용 부담은 개별 사고와 계약 조건에 따라 달라질 수 있습니다. 확정된 내용은 전화 상담을 통해 확인해 주세요.</p></div>
    </div></section>
    <section className="detail-section detail-section--soft"><div className="container detail-split"><div><span className="micro-label">GUN-A RENTCAR · BUSAN</span><h2>부산 연제구에서<br />차량 상담을 시작하세요</h2><p className="detail-lead">건아렌트카는 부산광역시 연제구 반송로 68에 있습니다. 기본 차량 인수·반납 장소는 업체 주차장입니다.</p><p className="detail-body-copy">부산 전 지역을 안내하며 김해·양산·창원 등 인근 지역은 일정과 이용 조건에 따라 협의할 수 있습니다. 영업시간 외 차량 인수·반납도 사전 협의가 필요합니다.</p><Link href="/#contact" className="detail-inline-button">위치 및 연락처 확인 →</Link></div><div className="detail-split__visual"><Image src="/images/vehicles/grandeur-gn7.webp" alt="그랜저 GN7 차량 이미지" fill sizes="(max-width: 800px) 100vw, 45vw" /></div></div></section>
  </InnerPageShell>;
}
