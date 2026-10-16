import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DetailHero } from "@/components/DetailHero";
import { InnerPageShell } from "@/components/InnerPageShell";
import { ShortTermRates } from "@/components/ShortTermRates";

export const metadata: Metadata = {
  title: "부산 단기렌트 | 6시간·12시간·일일 요금 안내 | 건아렌트카",
  description: "부산 연제구 건아렌트카 단기렌트 안내. 더뉴모닝·더뉴레이부터 SUV·승합차까지 15개 차량의 6시간·12시간·일일 대여 기준 요금과 문의 방법을 확인하세요.",
  alternates: { canonical: "/services/short-term" },
  openGraph: { title: "부산 단기렌트 요금 안내 | 건아렌트카", description: "실제 제공된 요금표를 바탕으로 시간별·기간별 요금을 정리했습니다.", url: "/services/short-term", images: ["/images/og/cover.png"] },
};

export default function ShortTermPage() {
  return <InnerPageShell>
    <DetailHero eyebrow="01 / SHORT-TERM RENTAL" title="필요한 시간만큼," accent="단기렌트." description="6시간·12시간부터 일 단위 대여까지. 실제 차량별 기준 요금을 확인하고 필요한 일정에 맞춰 전화로 상담하세요." image="/images/vehicles/avante-cn7.webp" imageAlt="아반떼 CN7 차량 이미지" detailLabel="단기렌트" />
    <section className="detail-section" id="details"><div className="container">
      <div className="detail-heading"><span className="micro-label">SHORT-TERM / PRICE GUIDE</span><h2>차량별 단기 대여 요금</h2><p>건아렌트카에서 제공한 요금표 기준입니다. 시간별 대여료와 1~2일·3~6일 대여 시 하루 기준 요금을 한눈에 확인할 수 있습니다.</p></div>
      <ShortTermRates />
      <div className="detail-notebox"><strong>요금 확인 안내</strong><p>1~2일과 3~6일 칸의 금액은 <b>1일 기준</b>입니다. 카니발·스타리아의 6시간·12시간 요금은 원본 요금표에 없어 ‘전화 문의’로 표시했습니다. 보험 조건, 대여 가능 여부 및 최종 금액은 상담 시 확인해 주세요.</p></div>
    </div></section>
    <section className="detail-section detail-section--soft"><div className="container detail-split"><div><span className="micro-label">HOW TO USE</span><h2>이용 전 확인할 사항</h2><p className="detail-lead">일정과 차량이 정해졌다면 전화로 필요한 내용을 확인해 주세요.</p><ol className="detail-numbered"><li><strong>이용 날짜와 시간</strong><span>희망하는 인수·반납 일정, 6시간·12시간 또는 일 단위 이용 여부</span></li><li><strong>희망 차량</strong><span>차종, 인원, 짐의 양과 차량 이용 목적</span></li><li><strong>운전자·보험 조건</strong><span>면허 및 운전자 자격, 보험·면책 조건 등은 개별 확인</span></li></ol></div><div className="detail-split__visual"><Image src="/images/vehicles/ray.webp" fill sizes="(max-width: 800px) 100vw, 45vw" alt="더뉴레이 차량 이미지" /></div></div></section>
    <section className="detail-section"><div className="container"><div className="detail-heading"><span className="micro-label">ALSO AVAILABLE</span><h2>7일 이상 대여도 안내합니다</h2><p>차량별 7일 이상 적용되는 1일 기준 요금도 별도로 확인할 수 있습니다. 월렌트나 장기계약 요금과는 구분되며, 한 달 이상 이용 조건은 별도 상담으로 안내합니다.</p><div className="detail-inline-links"><Link href="/cars">전체 차량·7일 이상 요금 보기 →</Link><Link href="/services/long-term">월·장기렌트 안내 →</Link></div></div></div></section>
  </InnerPageShell>;
}
