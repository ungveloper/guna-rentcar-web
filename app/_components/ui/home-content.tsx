"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "../../_lib/site-data";
import Icon from "./icon";
import { useConsult } from "./consult-provider";
import SectionHeading from "./section-heading";
import CtaBand from "./cta-band";

/**
 * Home is a navigation hub, not a long single-page landing site.
 * The full fleet exists on /cars only (and on dedicated service pages).
 * Do not introduce #cars / scrollIntoView as a substitute for navigation.
 */
const shortcuts = [
  { icon: "calendar" as const, num: "01", detail: "한 달을 위한 맞춤 렌트" },
  { icon: "car" as const, num: "02", detail: "필요한 날, 필요한 만큼" },
  { icon: "route" as const, num: "03", detail: "더 오래, 더 편안하게" },
  { icon: "shield" as const, num: "04", detail: "갑작스러운 순간에도" },
];

const pages = [
  { name: "전체 차량", description: "16개 등록 차종과 참고 요금", href: "/cars", icon: "car" as const },
  { name: "회사 소개", description: "2006년부터 이어온 이야기", href: "/about", icon: "heart" as const },
  { name: "고객 후기", description: "실제 후기와 출처 안내", href: "/reviews", icon: "quote" as const },
  { name: "자주 묻는 질문", description: "보험·대여 조건 확인", href: "/faq", icon: "info" as const },
  { name: "상담 및 오시는 길", description: "전화번호와 위치 안내", href: "/contact", icon: "pin" as const },
];

export default function HomeContent() {
  const { openChooser } = useConsult();

  return (
    <div data-page="home">
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-content">
            <span className="eyebrow"><span className="eyebrow-line" />BUSAN RENTAL MOBILITY · SINCE 2006</span>
            <h1>깨끗한 차량,<br />당신의 일정에<br /><em>맞춘 렌트.</em></h1>
            <p>차량의 청결함부터 세심한 상담까지.<br />건아렌트카는 당신의 이동을 조금 더 편안하게 만듭니다.</p>
            <div className="hero-buttons">
              <Link href="/cars" prefetch={false} className="button button-primary">전체 차량 페이지로 이동 <Icon name="arrow-up" size={19} /></Link>
              <button type="button" className="button button-outline" onClick={() => openChooser()}>상담하기 <Icon name="arrow" size={19} /></button>
            </div>
            <div className="hero-mobile-hint"><span className="live-dot" /> 연중무휴 · 24시간 전화 상담</div>
          </div>
          <div className="hero-art" aria-label="차종 참고 이미지">
            <div className="hero-art-text">DRIVE<br /><em>YOUR</em><br />WAY.</div>
            <div className="hero-vehicle-image"><Image src="/images/cars/avante.webp" alt="아반떼 CN7 참고 이미지. 실제 차량 원본으로 교체 예정" fill sizes="(max-width:768px) 100vw, 50vw" priority /></div>
            <div className="hero-art-corner">GUNA <span>RENTCAR</span></div>
            <div className="hero-art-caption"><span>EVERYDAY, MADE EASIER.</span><span>01 / 01</span></div>
            <span className="image-temp-stamp">차종 참고 이미지 · 원본 교체 예정</span>
          </div>
        </div>
        <div className="container hero-trust">
          <div><Icon name="clock" size={26}/><span><strong>2006년부터 운영</strong><small>부산에서 쌓아온 경험</small></span></div>
          <div><Icon name="phone" size={26}/><span><strong>24시간 전화 상담</strong><small>연중무휴 문의 가능</small></span></div>
          <div><Icon name="shield" size={26}/><span><strong>완전자차 기본 포함</strong><small>자기부담금·휴차료 등 조건 적용</small></span></div>
        </div>
      </section>

      <section className="section service-shortcuts">
        <div className="container">
          <SectionHeading eyebrow="OUR SERVICES" title={<>당신의 이동에 맞는<br/>렌트 서비스를 만나보세요.</>} description="아래에서 서비스를 선택하면 메인페이지를 스크롤하지 않고 각각의 독립 URL로 이동합니다." />
          <div className="shortcut-grid">
            {services.map((service, index) => (
              <Link className="shortcut-card" key={service.key} href={`/services/${service.key}`} prefetch={false}>
                <div className="shortcut-top"><span>{shortcuts[index].num} / 04</span><Icon name="arrow-up" size={20}/></div>
                <div className="shortcut-icon"><Icon name={shortcuts[index].icon} size={30}/></div>
                <div><h3>{service.title}</h3><p>{shortcuts[index].detail}</p><span className="shortcut-more">독립 페이지 열기 <Icon name="arrow" size={16}/></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* No VehicleExplorer on home: /cars is now the only full fleet directory. */}
      <section className="section fleet-route-section" aria-label="전체 차량 페이지 바로가기">
        <div className="container fleet-route-inner">
          <div>
            <span className="eyebrow"><span className="eyebrow-line" />EXPLORE ALL VEHICLES</span>
            <h2>원하는 차량은<br />전체 차량 페이지에서.</h2>
            <p>경차부터 세단, SUV와 승합차까지. 차량 검색과 시간별 참고 요금 비교는 별도 페이지에서 확인하세요.</p>
          </div>
          <Link className="button button-primary fleet-route-button" href="/cars" prefetch={false}>전체 차량 16개 보기 <Icon name="arrow-up" size={19}/></Link>
        </div>
      </section>

      <section className="route-preview-band" aria-label="회사 소개 페이지 바로가기">
        <div className="container route-preview-inner">
          <div><span className="eyebrow light">WHY GUNA RENTCAR</span><h2>차량의 청결함부터,<br/>고객을 향한 세심한 배려까지.</h2><p>2006년부터 부산에서 이어온 이야기는 회사 소개 페이지에서 확인해 보세요.</p></div>
          <Link className="button button-white" href="/about" prefetch={false}>회사 소개 페이지로 이동 <Icon name="arrow-up" size={18}/></Link>
        </div>
      </section>

      <section className="section page-index-section" aria-label="독립 페이지 목록">
        <div className="container">
          <SectionHeading eyebrow="EXPLORE THE WEBSITE" title="정보는 각 페이지에서 확인하세요." description="목록을 누르면 주소가 바뀌며 해당 페이지가 열립니다. 메인페이지 내 섹션 이동이 아닙니다." />
          <div className="page-index-grid">
            {pages.map(page => (
              <Link key={page.href} href={page.href} prefetch={false} className="page-index-card">
                <Icon name={page.icon} size={25}/>
                <span><strong>{page.name}</strong><small>{page.description}</small></span>
                <Icon name="arrow-up" size={17}/>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
