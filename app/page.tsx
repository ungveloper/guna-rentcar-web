import Image from "next/image";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { PhoneLink } from "@/components/PhoneLink";
import { MobileCallBar } from "@/components/MobileCallBar";
import { FleetPreview } from "@/components/FleetPreview";
import { Reviews } from "@/components/Reviews";
import Link from "next/link";
import { site } from "@/data/site";
import { rentalProcess } from "@/data/process";
import { services } from "@/data/services";
import { HeroStage } from "@/components/HeroStage";
import { ScrollStory } from "@/components/ScrollStory";
import { ScrollEffects } from "@/components/ScrollEffects";
import { DrivePicker } from "@/components/DrivePicker";
import { SiteFooter } from "@/components/SiteFooter";
import { PromotionCarousel } from "@/components/PromotionCarousel";


export default function Home() {
  return <>
    <a className="skip-link" href="#main">본문으로 바로가기</a>
    <Header />
    <ScrollEffects />
    <main id="main">
      <HeroStage />
      <PromotionCarousel />

      <section className="manifesto section-pad" id="intro" aria-labelledby="intro-title">
        <div className="container manifesto__inner">
          <span className="micro-label">THE GUN-A EXPERIENCE</span>
          <h2 id="intro-title">부산에서 렌터카가 필요할 때,<br/><span>건아렌트카.</span></h2>
          <p>부산 렌터카가 필요한 순간. 합리적인 기준과 다양한 차종, 그리고 약 20년간 쌓아온 경험으로 여정에 어울리는 한 대를 안내합니다.</p>
          <div className="manifesto__facts" data-reveal aria-label="건아렌트카 주요 정보">
            <div><strong>{site.experience}</strong><span>렌터카 운영 경험</span></div>
            <div><strong>{site.fleetCount}</strong><span>약 50대 차량 보유</span></div>
            <div><strong>{String(services.length).padStart(2, "0")}</strong><span>맞춤형 렌트 서비스</span></div>
          </div>
        </div>
      </section>

      <ScrollStory />

      <section className="services section-pad" id="services" aria-labelledby="services-title">
        <div className="container">
          <div className="section-intro" data-reveal><span className="micro-label">01 / OUR SERVICES</span><h2 id="services-title">단기부터 사고대차까지,<br/><span>목적에 맞는 렌트.</span></h2><p>필요한 시간만큼, 원하는 방식으로. 부산 단기렌트부터 월렌트·장기렌트·보험사고대차까지 목적에 맞게 안내합니다.</p></div>
          <div className="services-list">{services.map((s) => <article className="service-item" data-reveal key={s.number}><div className="service-item__top"><span className="service-item__no">{s.number} / {s.english}</span><span className="service-item__icon"><Icon name={s.icon} size={27}/></span></div><h3>{s.title}</h3><p>{s.description}</p><Link href={s.href} className="service-item__link">자세히 보기 <Icon name="arrowRight" size={18}/></Link></article>)}</div>
        </div>
      </section>

      <DrivePicker />
      <FleetPreview />

      <section className="dark-story" id="benefits" aria-labelledby="story-title">
        <div className="dark-story__visual" data-scroll-visual><Image src="/images/vehicles/grandeur-gn7.webp" fill sizes="(max-width: 900px) 100vw, 56vw" alt="그랜저 GN7 측면 사진" /></div>
        <div className="dark-story__copy" data-reveal><span className="micro-label micro-label--light">02 / WHY GUN-A</span><h2 id="story-title">오랜 경험은,<br/>작은 차이를 만듭니다.</h2><p>{`약 ${site.experience} 동안`} 부산 연제구 연산동에서 렌터카 서비스를 운영해 왔습니다. 필요한 차량을 찾는 순간부터 인수와 반납까지, 한 번 더 확인하고 더 명확하게 안내합니다.</p><div className="dark-story__lines"><span>연중무휴 운영</span><span>부산 전역 서비스 안내</span><span>김해·양산·창원 등 인근 지역 협의 가능</span></div><PhoneLink placement="story" className="inline-light-link">문의하기 <Icon name="arrowRight" size={19}/></PhoneLink></div>
      </section>

      <section className="how section-pad" id="process" aria-labelledby="process-title"><div className="container"><div className="section-intro" data-reveal><span className="micro-label">03 / HOW IT WORKS</span><h2 id="process-title">렌트는 어렵지 않게.<br/><span>전화 한 통이면 시작.</span></h2><p>온라인 예약 없이 전화로 정확한 조건을 확인합니다. 필요한 차량을 살펴본 뒤 편하게 연락해 주세요.</p></div><div className="how__steps">{rentalProcess.map(s=><article key={s.no} data-reveal><span>{s.no}</span><h3>{s.name}</h3><p>{s.description}</p></article>)}</div><div className="how__note"><Icon name="clock" size={19}/><p>영업시간 외 인수·반납 및 별도 픽업은 사전 협의가 필요합니다.</p></div></div></section>

      <Reviews />
      <section className="home-detail-links section-pad" aria-label="이용 안내 및 위치 바로가기">
        <div className="container home-detail-links__grid">
          <Link href="/guide" className="home-detail-link"><span className="micro-label">RENTAL GUIDE</span><h2>대여 전 알아둘 정보</h2><p>차량 인수·반납, 운전자·보험 안내, 자주 묻는 질문을 확인하세요.</p><span>이용안내 보기 <Icon name="arrowRight" size={19}/></span></Link>
          <Link href="/contact" className="home-detail-link"><span className="micro-label">LOCATION</span><h2>건아렌트카 찾아오기</h2><p>{site.address} · {site.stationNote}. 차량 인수·반납 위치를 확인하세요.</p><span>오시는 길 <Icon name="arrowRight" size={19}/></span></Link>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="cta-title"><div className="container contact-cta__inner"><span className="micro-label micro-label--light">READY FOR THE NEXT DRIVE?</span><h2 id="cta-title">차량·대여 조건,<br/>전화로 확인하세요.</h2><p>필요한 차량과 일정을 알려주세요.<br/>건아렌트카가 전화로 안내해 드립니다.</p><PhoneLink placement="final_cta" className="pill pill--white"><Icon name="phone" size={18}/> 051-866-1124 <Icon name="arrowRight" size={18}/></PhoneLink></div></section>
    </main>
    <SiteFooter />
    <MobileCallBar />
  </>;
}
