import Image from "next/image";
import { Header } from "@/components/Header";
import { Brand } from "@/components/Brand";
import { Icon } from "@/components/Icon";
import { PhoneLink } from "@/components/PhoneLink";
import { MobileCallBar } from "@/components/MobileCallBar";
import { Fleet } from "@/components/Fleet";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { site, navigation } from "@/data/site";
import { services } from "@/data/services";

const strengths = [
  { number: "01", title: "20년의 운영 경험", desc: "부산 연산동에서 오랜 시간 쌓아온 렌터카 운영 경험을 바탕으로 차량 이용을 안내합니다." },
  { number: "02", title: "다양한 보유 차량", desc: "약 50대의 차량을 보유하고 있으며, 일정과 용도에 적합한 차량을 상담할 수 있습니다." },
  { number: "03", title: "이용 목적에 맞춘 상담", desc: "단기부터 장기 이용과 사고대차까지, 필요한 기간과 조건을 먼저 확인합니다." },
];

const processSteps = [
  { number: "01", title: "차량 살펴보기", desc: "차량 안내와 렌트 서비스를 확인하고, 원하는 이용 기간을 정합니다.", icon: "car" as const },
  { number: "02", title: "전화로 상담하기", desc: "전화로 일정, 차종, 요금 및 대여 조건을 상담합니다.", icon: "phone" as const },
  { number: "03", title: "차량 인수하기", desc: "협의한 일정에 건아렌트카 주차장에서 차량을 인수합니다.", icon: "key" as const },
  { number: "04", title: "이용 후 반납하기", desc: "안내받은 계약 조건과 시간에 맞춰 차량을 반납합니다.", icon: "check" as const },
];

const navMapSearch = `https://map.naver.com/p/search/${encodeURIComponent("건아렌트카 부산 연제구 반송로 68")}`;
const googleMapSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

export default function Home() {
  return <>
    <a className="skip-link" href="#main">본문으로 바로가기</a>
    <Header />
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero__background-text" aria-hidden="true">GUN-A</div>
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow"><span className="eyebrow-line"/> BUSAN RENT A CAR · 20 YEARS OF EXPERIENCE</p>
            <h1 id="hero-title">다양한 선택,<br/><em>합리적인</em><br/>렌터카의 시작.</h1>
            <p className="hero__description">부산 연제구 연산동에서 만나는 건아렌트카.<br/>필요한 기간만큼, 원하는 용도에 맞춰<br className="only-desktop"/> 편안한 이동을 함께합니다.</p>
            <div className="hero__actions"><a href="#fleet" className="button button--dark">차량 살펴보기 <Icon name="arrow" size={20}/></a><PhoneLink placement="hero" className="button button--outline" withIcon>전화 문의하기</PhoneLink></div>
          </div>
          <div className="hero__visual"><div className="hero__visual-glow"/><Image src="/images/hero/sedan-concept.svg" alt="건아렌트카 랜딩 페이지용 대표 차량 콘셉트 일러스트" width={1240} height={620} priority sizes="(max-width: 850px) 110vw, 64vw" className="hero__car"/><div className="hero__visual-caption"><span>GUN-A RENTCAR</span><span>YOUR DRIVE, YOUR CHOICE.</span></div></div>
          <div className="hero__bottom"><span><b>01</b> / WELCOME TO GUN-A</span><a href="#about" aria-label="건아렌트카 소개로 이동">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section className="stats-band" aria-label="건아렌트카 주요 정보"><div className="container stats-band__inner"><div className="stats-band__intro"><span>20 YEARS OF TRUST</span><p>부산에서 이어온<br/>편안한 이동의 경험.</p></div><div className="stat"><strong>20<span>년</span></strong><small>렌터카 운영 경험</small></div><div className="stat"><strong>50<span>대</span></strong><small>약 50대 보유 차량</small></div><div className="stat"><strong>04</strong><small>다양한 렌트 서비스</small></div></div></section>

      <section className="section about-section" id="about" aria-labelledby="about-title"><div className="container about-layout"><div className="about-art"><div className="about-art__frame"><span>GA</span><span>BUILT ON TRUST</span><div className="about-art__line"/></div><span className="about-art__caption">GUN-A RENTCAR · BUSAN</span></div><div className="about-copy"><span className="eyebrow"><span className="eyebrow-line"/> ABOUT US</span><h2 id="about-title">필요한 순간,<br/>믿고 찾을 수 있는<br/><em>부산 렌터카.</em></h2><p className="lead">렌터카가 필요한 이유는 모두 다릅니다. 여행을 떠날 때도, 잠시 차량이 필요할 때도, 오랜 기간 함께할 차를 찾을 때도.</p><p>건아렌트카는 부산 연제구 연산동에서 약 20년 동안 렌터카 서비스를 운영해 왔습니다. 합리적인 조건과 다양한 차량을 바탕으로 이용 목적에 맞는 선택을 돕겠습니다.</p><a className="text-link" href="#services">서비스 살펴보기 <Icon name="arrow" size={19}/></a></div></div></section>

      <section className="section services-section" id="services" aria-labelledby="services-title"><div className="container"><div className="section-header"><div><span className="eyebrow"><span className="eyebrow-line"/> OUR SERVICES</span><h2 id="services-title">필요에 맞게,<br/><em>유연한 렌트 서비스.</em></h2></div><p>짧은 일정부터 장기 이용, 사고로 인한 대체 차량까지.<br/>당신의 상황에 맞게 안내해 드립니다.</p></div><div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-card__top"><span>{service.number} / {service.english}</span><Icon name={service.icon} size={30}/></div><div><h3>{service.title}</h3><p>{service.description}</p></div><div className="service-card__bottom"><span>{service.detail}</span><PhoneLink placement={`service_${service.number}`} className="service-card__action" aria-label={`${service.title} 전화 문의`}><Icon name="arrow" size={21}/></PhoneLink></div></article>)}</div></div></section>

      <Fleet />

      <section className="benefits-section" id="benefits" aria-labelledby="benefits-title"><div className="container benefits-layout"><div className="benefits-copy"><span className="eyebrow eyebrow--light"><span className="eyebrow-line"/> WHY GUN-A</span><h2 id="benefits-title">당신의 이동이<br/>조금 더 <em>편안하도록.</em></h2><p>선택부터 반납까지 중요한 건 복잡한 절차보다 나에게 맞는 안내입니다.</p><div className="benefits-list">{strengths.map((item) => <article key={item.number}><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.desc}</p></div></article>)}</div></div><div className="benefits-visual"><div className="benefits-circle"/><Image src="/images/hero/suv-concept.svg" alt="고급스러운 SUV를 표현한 콘셉트 차량 일러스트" width={1100} height={600} sizes="(max-width: 950px) 100vw, 49vw"/><span className="benefits-visual__label">A BETTER DRIVE<br/>STARTS HERE.</span></div></div></section>

      <section className="section process-section" id="process" aria-labelledby="process-title"><div className="container"><div className="section-header"><div><span className="eyebrow"><span className="eyebrow-line"/> HOW IT WORKS</span><h2 id="process-title">차량 이용,<br/><em>어렵지 않게.</em></h2></div><p>온라인 예약 대신 전화로 일정과 조건을 확인합니다.<br/>필요한 정보를 안내받고 편하게 이용해 보세요.</p></div><div className="process-grid">{processSteps.map((step) => <article key={step.number} className="process-card"><div className="process-card__top"><span>STEP {step.number}</span><Icon name={step.icon} size={30}/></div><h3>{step.title}</h3><p>{step.desc}</p></article>)}</div><p className="process-note"><Icon name="clock" size={18}/> 영업시간 외 인수·반납이나 별도 픽업·반납 장소는 반드시 사전 협의가 필요합니다.</p></div></section>

      <Reviews />
      <FAQ />

      <section className="section contact-section" id="contact" aria-labelledby="contact-title"><div className="container"><div className="section-header contact-heading"><div><span className="eyebrow"><span className="eyebrow-line"/> LOCATION & CONTACT</span><h2 id="contact-title">부산 연산동에서<br/><em>기다리고 있습니다.</em></h2></div><p>연산역에서 도보 약 7분.<br/>차량 인수·반납은 건아렌트카 주차장에서 진행합니다.</p></div><div className="contact-layout"><div className="contact-info"><span className="eyebrow muted">COME VISIT US</span><h3>건아렌트카</h3><div className="contact-info__item"><Icon name="pin" size={22}/><div><span>주소</span><strong>{site.address}</strong><small>{site.stationNote}</small></div></div><div className="contact-info__item"><Icon name="phone" size={22}/><div><span>전화 문의</span><strong>{site.phoneDisplay}</strong><small>차량·요금·대여 조건 상담</small></div></div><div className="contact-info__item"><Icon name="clock" size={22}/><div><span>운영 안내</span><strong>연중무휴</strong><small>영업시간 외 인수·반납은 사전 협의 필요</small></div></div><div className="contact-info__actions"><PhoneLink placement="contact" className="button button--dark" withIcon>전화로 상담하기</PhoneLink><a href={navMapSearch} target="_blank" rel="noopener noreferrer" className="button button--outline">네이버 지도 <Icon name="arrow" size={19}/></a></div></div><div className="contact-map"><div className="contact-map__grid"/><div className="contact-map__street contact-map__street--one"/><div className="contact-map__street contact-map__street--two"/><div className="contact-map__street contact-map__street--three"/><div className="contact-map__marker"><Icon name="pin" size={25}/><strong>건아렌트카</strong><small>부산 연제구 반송로 68</small></div><div className="contact-map__bottom"><span>위치 안내 이미지 · 정확한 경로는 지도로 확인하세요</span><a href={googleMapSearch} target="_blank" rel="noopener noreferrer">Google 지도 열기 <Icon name="arrow" size={17}/></a></div></div></div><p className="contact-note">{site.serviceArea}. {site.pickupNote}</p></div></section>

      <section className="final-cta" aria-labelledby="final-title"><div className="container final-cta__inner"><div><span className="eyebrow eyebrow--light">READY FOR YOUR NEXT DRIVE?</span><h2 id="final-title">지금 필요한 차량,<br/><em>건아렌트카와 함께.</em></h2><p>차량 종류와 이용 기간을 알려주시면<br/>전화 상담으로 자세히 안내해 드립니다.</p></div><PhoneLink placement="final_cta" className="final-cta__button">051-866-1124 <Icon name="arrow" size={27}/></PhoneLink></div></section>
    </main>
    <footer className="footer"><div className="container footer-top"><div><Brand light footer/><p>다양한 선택, 합리적인 렌터카의 시작.<br/>부산 연제구 연산동 건아렌트카</p></div><nav aria-label="하단 메뉴">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}<a href="#faq">자주 묻는 질문</a></nav></div><div className="container footer-bottom"><p><strong>{site.legalName}</strong><span>{site.address}</span><span>대표전화 {site.phoneDisplay}</span></p><small>© 2026 GUN-A RENTCAR. All rights reserved.</small></div></footer>
    <MobileCallBar />
  </>;
}
