import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DetailHero } from "@/components/DetailHero";
import { InnerPageShell } from "@/components/InnerPageShell";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "건아렌트카 위치·전화·차량 인수 안내 | 부산 연제구 렌터카",
  description: "부산광역시 연제구 반송로 68 건아렌트카 위치, 전화번호 051-866-1124, 연산역 접근 및 차량 인수·반납 방법 안내.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "오시는 길·전화 문의 | 건아렌트카", description: "부산 연제구 반송로 68, 051-866-1124.", url: "/contact", images: ["/images/og/cover.png"] },
};
const naverMap = `https://map.naver.com/p/search/${encodeURIComponent(`건아렌트카 ${site.address}`)}`;
const googleMap = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

export default function ContactPage() {
  return <InnerPageShell>
    <DetailHero eyebrow="07 / LOCATION & CONTACT" title="건아렌트카 위치," accent="방문·인수 안내." description="부산 연제구 연산동 건아렌트카의 위치와 전화 상담, 차량 인수·반납 방법을 안내합니다." image="/images/vehicles/tucson.webp" imageAlt="현대 투싼 차량 소개 사진" detailLabel="오시는 길" />
    <section id="details" className="detail-section"><div className="container contact-detail__grid"><div><span className="micro-label">VISIT US</span><h2>부산 연제구에서<br/>만나보세요.</h2><p className="detail-lead">{site.address}<br/>{site.stationNote}</p><dl className="contact-detail__facts"><div><dt>대표전화</dt><dd><a href={site.phoneHref}>{site.phoneDisplay}</a></dd></div><div><dt>운영 안내</dt><dd>{site.hoursNote}</dd></div><div><dt>차량 인수·반납</dt><dd>{site.pickupNote}</dd></div><div><dt>서비스 지역</dt><dd>{site.serviceArea}</dd></div></dl><div className="contact-detail__actions"><PhoneLink placement="contact_page" className="pill pill--dark"><Icon name="phone" size={17}/> 전화 문의</PhoneLink><a className="pill contact-detail__map" href={naverMap} target="_blank" rel="noopener noreferrer">네이버 지도 열기 ↗</a><a className="pill contact-detail__map" href={googleMap} target="_blank" rel="noopener noreferrer">Google 지도 열기 ↗</a></div></div><div className="contact-detail__image"><Image src="/images/vehicles/grandeur-gn7.webp" alt="그랜저 GN7 차량 안내 사진" fill sizes="(max-width:900px) 100vw, 45vw"/></div></div></section>
    <section className="detail-section detail-section--soft"><div className="container"><div className="detail-heading"><span className="micro-label">BEFORE YOU VISIT</span><h2>방문 전 확인해 주세요.</h2><p>영업시간 외 인수·반납과 별도 픽업은 사전 상담을 통해 협의해야 합니다. 홈페이지에서는 온라인 예약을 받지 않습니다.</p><div className="detail-inline-links"><Link href="/cars">차량·요금 살펴보기 →</Link><Link href="/guide">대여 이용안내 →</Link></div></div></div></section>
  </InnerPageShell>;
}
