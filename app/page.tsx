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
import { HeroStage } from "@/components/HeroStage";
import { ScrollStory } from "@/components/ScrollStory";
import { ScrollEffects } from "@/components/ScrollEffects";
import { DrivePicker } from "@/components/DrivePicker";

const process = [
  { no: "01", name: "차량 둘러보기", description: "차종과 기준 요금을 먼저 비교해 보세요." },
  { no: "02", name: "전화로 상담하기", description: "이용 일정, 대여 기간, 보험 조건을 확인합니다." },
  { no: "03", name: "차량 인수하기", description: "협의한 시간에 건아렌트카 주차장에서 인수합니다." },
  { no: "04", name: "편안하게 반납하기", description: "안내받은 장소와 일정에 맞춰 차량을 반납합니다." },
];
const naverMap = `https://map.naver.com/p/search/${encodeURIComponent("건아렌트카 부산 연제구 반송로 68")}`;
const googleMap = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

export default function Home() {
  return <>
    <a className="skip-link" href="#main">본문으로 바로가기</a>
    <Header />
    <ScrollEffects />
    <main id="main">
      <HeroStage />

      <section className="manifesto section-pad" id="intro" aria-labelledby="intro-title">
        <div className="container manifesto__inner">
          <span className="micro-label">THE GUN-A EXPERIENCE</span>
          <h2 id="intro-title">부산에서 렌터카가 필요할 때,<br/><span>건아렌트카.</span></h2>
          <p>부산 렌터카가 필요한 순간. 합리적인 기준과 다양한 차종, 그리고 약 20년간 쌓아온 경험으로 여정에 어울리는 한 대를 안내합니다.</p>
          <div className="manifesto__facts" data-reveal aria-label="건아렌트카 주요 정보">
            <div><strong>20<small>년</small></strong><span>렌터카 운영 경험</span></div>
            <div><strong>50<small>대</small></strong><span>약 50대 차량 보유</span></div>
            <div><strong>04</strong><span>맞춤형 렌트 서비스</span></div>
          </div>
        </div>
      </section>

      <ScrollStory />

      <section className="services section-pad" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-intro" data-reveal><span className="micro-label">01 / OUR SERVICES</span><h2 id="services-title">단기부터 사고대차까지,<br/><span>목적에 맞는 렌트.</span></h2><p>필요한 시간만큼, 원하는 방식으로. 부산 단기렌트부터 월렌트·장기렌트·보험사고대차까지 목적에 맞게 안내합니다.</p></div>
          <div className="services-list">{services.map((s) => <article className="service-item" data-reveal key={s.number}><div className="service-item__top"><span className="service-item__no">{s.number} / {s.english}</span><span className="service-item__icon"><Icon name={s.icon} size={27}/></span></div><h3>{s.title}</h3><p>{s.description}</p><PhoneLink placement={`service_${s.number}`} className="service-item__link">서비스 문의 <Icon name="arrowRight" size={18}/></PhoneLink></article>)}</div>
        </div>
      </section>

      <DrivePicker />
      <Fleet />

      <section className="dark-story" id="benefits" aria-labelledby="story-title">
        <div className="dark-story__visual" data-scroll-visual><Image src="/images/vehicles/grandeur-gn7.webp" fill sizes="(max-width: 900px) 100vw, 56vw" alt="그랜저 GN7 측면 사진" /></div>
        <div className="dark-story__copy" data-reveal><span className="micro-label micro-label--light">02 / WHY GUN-A</span><h2 id="story-title">오랜 경험은,<br/>작은 차이를 만듭니다.</h2><p>약 20년 동안 부산 연제구 연산동에서 렌터카 서비스를 운영해 왔습니다. 필요한 차량을 찾는 순간부터 인수와 반납까지, 한 번 더 확인하고 더 명확하게 안내합니다.</p><div className="dark-story__lines"><span>연중무휴 운영</span><span>부산 전역 서비스 안내</span><span>김해·양산·창원 등 인근 지역 협의 가능</span></div><PhoneLink placement="story" className="inline-light-link">문의하기 <Icon name="arrowRight" size={19}/></PhoneLink></div>
      </section>

      <section className="how section-pad" id="process" aria-labelledby="process-title"><div className="container"><div className="section-intro" data-reveal><span className="micro-label">03 / HOW IT WORKS</span><h2 id="process-title">렌트는 어렵지 않게.<br/><span>전화 한 통이면 시작.</span></h2><p>온라인 예약 없이 전화로 정확한 조건을 확인합니다. 필요한 차량을 살펴본 뒤 편하게 연락해 주세요.</p></div><div className="how__steps">{process.map(s=><article key={s.no} data-reveal><span>{s.no}</span><h3>{s.name}</h3><p>{s.description}</p></article>)}</div><div className="how__note"><Icon name="clock" size={19}/><p>영업시간 외 인수·반납 및 별도 픽업은 사전 협의가 필요합니다.</p></div></div></section>

      <Reviews />
      <FAQ />

      <section className="visit section-pad" id="contact" aria-labelledby="visit-title"><div className="container visit__grid"><div className="visit__copy" data-reveal><span className="micro-label">04 / LOCATION & CONTACT</span><h2 id="visit-title">부산에서,<br/><span>가까운 시작.</span></h2><p>부산광역시 연제구 반송로 68.<br/>연산역에서 도보 약 7분 거리에 있습니다.</p><div className="visit__detail"><strong>차량 인수·반납</strong><span>건아렌트카 주차장 (기본)</span></div><div className="visit__detail"><strong>운영 안내</strong><span>연중무휴 · 영업시간 외 인수·반납은 사전 협의</span></div><div className="visit__links"><a href={naverMap} target="_blank" rel="noopener noreferrer">네이버 지도 <Icon name="arrowRight" size={17}/></a><a href={googleMap} target="_blank" rel="noopener noreferrer">Google 지도 <Icon name="arrowRight" size={17}/></a></div></div><div className="visit__visual" data-scroll-visual><Image src="/images/vehicles/tucson.webp" fill sizes="(max-width: 900px) 100vw, 50vw" alt="건물 앞에 있는 현대 투싼 차량" /><div className="visit__visual-label">BUSAN · YEONSAN-DONG <Icon name="pin" size={16}/></div></div></div></section>

      <section className="contact-cta" aria-labelledby="cta-title"><div className="container contact-cta__inner"><span className="micro-label micro-label--light">READY FOR THE NEXT DRIVE?</span><h2 id="cta-title">차량·대여 조건,<br/>전화로 확인하세요.</h2><p>필요한 차량과 일정을 알려주세요.<br/>건아렌트카가 전화로 안내해 드립니다.</p><PhoneLink placement="final_cta" className="pill pill--white"><Icon name="phone" size={18}/> 051-866-1124 <Icon name="arrowRight" size={18}/></PhoneLink></div></section>
    </main>
    <footer className="footer"><div className="container footer__top"><div><Brand footer light/><p>다양한 선택, 합리적인 렌터카의 시작.<br/>부산 연제구 연산동 건아렌트카</p></div><nav aria-label="하단 메뉴">{navigation.map(n=><a key={n.href} href={n.href}>{n.label}</a>)}<a href="#faq">FAQ</a></nav></div><div className="container footer__bottom"><div><strong>{site.legalName}</strong><span>{site.address}</span><span>대표전화 {site.phoneDisplay}</span></div><small>© 2026 GUN-A RENTCAR. ALL RIGHTS RESERVED.</small></div></footer>
    <MobileCallBar />
  </>;
}
