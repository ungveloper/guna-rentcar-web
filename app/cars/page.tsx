import type { Metadata } from "next";
import Link from "next/link";
import { DetailHero } from "@/components/DetailHero";
import { InnerPageShell } from "@/components/InnerPageShell";
import { Fleet } from "@/components/Fleet";
import { vehicles } from "@/data/vehicles";

export const metadata: Metadata = {
  title: "부산 렌터카 차량별 요금·차종 안내 | 건아렌트카",
  description: `건아렌트카 차량 ${vehicles.length}개 항목의 사진과 시간별·기간별 대여 요금을 확인하세요. 경차·중형·SUV·승합차 등 실제 요금표 기준 안내. 상담 051-866-1124.`,
  alternates: { canonical: "/cars" },
  openGraph: { title: "차량·요금 안내 | 건아렌트카", description: `전체 ${vehicles.length}개 차량 항목별 대여 요금과 차종 정보를 확인하세요.`, url: "/cars", images: ["/images/og/cover.png"] },
};
export default function CarsPage() {
  return <InnerPageShell>
    <DetailHero eyebrow="01 / OUR FLEET" title="필요한 차량을," accent="요금과 함께 비교하세요." description="제공된 요금표를 기준으로 차종별 6시간·12시간·기간별 1일 요금을 안내합니다. 사진은 참고용이며 최종 조건은 전화로 확인해 주세요." image="/images/vehicles/g80.webp" imageAlt="제네시스 G80 차량 소개 사진" detailLabel="차량·요금" />
    <Fleet />
    <section className="detail-section detail-section--soft"><div className="container"><div className="detail-heading"><span className="micro-label">RENTAL OPTIONS</span><h2>기간에 맞는 서비스도 확인하세요.</h2><p>차량별 공개 금액은 기준 대여 요금입니다. 월·장기렌트 계약 금액이나 보험사고대차 조건은 별도로 상담합니다.</p></div><div className="detail-inline-links"><Link href="/services/short-term">단기렌트 상세 요금 →</Link><Link href="/services/long-term">월·장기렌트 안내 →</Link><Link href="/services/accident">사고대차 안내 →</Link></div><p className="detail-body-copy">총 {vehicles.length}개 차량 항목을 안내하고 있습니다. 실제 이용 가능한 차종 및 차량 상태는 전화 상담 시 확인해 주세요.</p></div></section>
  </InnerPageShell>;
}
