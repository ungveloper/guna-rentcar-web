import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DetailHero } from "@/components/DetailHero";
import { InnerPageShell } from "@/components/InnerPageShell";

export const metadata: Metadata = {
  title: "부산 월렌트·장기렌트 상담 안내 | 건아렌트카",
  description: "부산 연제구 건아렌트카 월렌트 및 장기렌트 안내. 한 달 이상 또는 장기간 차량 이용 시 상담할 항목, 차량 선택 및 인수·반납 안내를 확인하세요.",
  alternates: { canonical: "/services/long-term" },
  openGraph: { title: "부산 월렌트·장기렌트 | 건아렌트카", description: "이용 기간과 차종에 맞는 월·장기렌트를 전화로 상담하세요.", url: "/services/long-term", images: ["/images/og/cover.png"] },
};

export default function LongTermPage() {
  return <InnerPageShell>
    <DetailHero eyebrow="02 / MONTHLY & LONG-TERM" title="한 달부터 장기간까지," accent="월·장기렌트." description="일상·업무 목적의 장기간 차량 이용을 상담해 드립니다. 계약 기간과 희망 차종을 알려주시면 조건을 확인해 안내합니다." image="/images/vehicles/k5.webp" imageAlt="더뉴K5 차량 이미지" detailLabel="월·장기렌트" />
    <section className="detail-section" id="details"><div className="container"><div className="detail-heading"><span className="micro-label">RENTAL OPTIONS</span><h2>이용 기간에 맞춰 선택하세요</h2><p>월렌트와 장기렌트는 이용 일정과 차량 조건에 따라 실제 계약 내용이 달라질 수 있습니다. 아래 안내는 서비스 구분을 돕기 위한 설명입니다.</p></div>
      <div className="detail-offer-grid"><article className="detail-offer"><span>01 / MONTHLY</span><h3>월렌트</h3><p>한 달 정도 차량이 필요하거나 일정 기간 사용할 차량을 찾는 고객을 위한 상담입니다.</p><ul><li>희망 시작일과 이용 기간</li><li>차종·차급 및 이용 목적</li><li>요금·보험·인수 조건 확인</li></ul></article><article className="detail-offer"><span>02 / LONG-TERM</span><h3>장기렌트</h3><p>보다 긴 기간 동안 차량을 이용하려는 개인 또는 업무용 고객의 요구 사항을 상담합니다.</p><ul><li>예상 계약 기간</li><li>운전자 및 사용 목적</li><li>차량·요금·계약 조건 개별 확인</li></ul></article></div>
      <div className="detail-notebox"><strong>월·장기렌트 요금은 별도 문의</strong><p>현재 공개된 요금표는 시간별 및 대여기간별 <b>1일 요금</b>입니다. 7일 이상 일일 요금이 월렌트 또는 장기계약 월 요금이라는 뜻은 아닙니다. 월·장기렌트의 계약 금액·보증금 여부·보험 조건 등은 전화로 확인해 주세요.</p></div>
    </div></section>
    <section className="detail-section detail-section--soft"><div className="container detail-split"><div><span className="micro-label">BEFORE YOU CALL</span><h2>상담 전에 준비하면<br />좋은 정보</h2><ol className="detail-numbered"><li><strong>희망 이용 기간</strong><span>차량이 필요한 시작일과 예상 반납일</span></li><li><strong>희망 차량 및 사용 목적</strong><span>경차·세단·SUV 등 차종과 개인·업무용 이용 목적</span></li><li><strong>운전자·차량 인수 조건</strong><span>운전자 관련 조건과 차량 인수 장소·시간 협의</span></li></ol><Link href="/#fleet" className="detail-inline-button">보유 차량 보기 →</Link></div><div className="detail-split__visual"><Image src="/images/vehicles/g80.webp" alt="제네시스 G80 차량 이미지" fill sizes="(max-width: 800px) 100vw, 45vw" /></div></div></section>
  </InnerPageShell>;
}
