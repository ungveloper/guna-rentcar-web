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

const process = [
  { n:"01", title:"차량 선택", en:"SELECT", desc:"차종과 기준 요금을 확인하고 이용 기간을 정해 주세요.", icon:"car" as const },
  { n:"02", title:"전화 상담", en:"CALL", desc:"051-866-1124로 연락해 일정과 대여 조건을 확인합니다.", icon:"phone" as const },
  { n:"03", title:"차량 인수", en:"PICK UP", desc:"협의된 일정에 건아렌트카 주차장에서 인수합니다.", icon:"key" as const },
  { n:"04", title:"이용 후 반납", en:"RETURN", desc:"안내받은 일정과 조건에 맞춰 반납합니다.", icon:"check" as const },
];
const naverMap = `https://map.naver.com/p/search/${encodeURIComponent("건아렌트카 부산 연제구 반송로 68")}`;
const googleMap = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

export default function Home() {
 return <>
   <a href="#main" className="skip-link">본문으로 바로가기</a>
   <Header />
   <main id="main">
     <section className="hero" id="top" aria-labelledby="hero-title">
       <div className="hero__ambient" aria-hidden="true"/>
       <div className="container hero__inner">
         <div className="hero__maincopy"><span className="hero__overline"><span className="hero__star">✳</span> BUSAN · GUN-A RENTCAR</span>
           <h1 id="hero-title">다양한 선택.<br/>합리적인 <span>드라이브.</span></h1>
           <p>부산 렌터카의 새로운 기준을 만나보세요.<br/>다양한 차량, 알기 쉬운 요금 안내, 편리한 전화 상담.</p>
           <div className="hero__buttons"><a className="action action--dark" href="#fleet">차량 & 요금 보기 <Icon name="arrow" size={19}/></a><PhoneLink placement="hero" className="action action--text">전화 상담하기 <Icon name="arrow" size={19}/></PhoneLink></div>
         </div>
         <div className="hero__visual"><div className="hero__visual-heading" aria-hidden="true">THE RIGHT<br/>WAY TO DRIVE</div><Image src="/images/hero/studio-sedan.webp" alt="차량 선택의 분위기를 표현한 스튜디오 촬영 스타일의 콘셉트 세단 이미지" fill priority sizes="(max-width: 900px) 100vw, 62vw" className="hero__vehicle" /></div>
         <div className="hero__bottom"><span><b>G</b> GO BEYOND ORDINARY.</span><span>01 / 15 <i/> SCROLL TO EXPLORE ↓</span></div>
       </div>
     </section>

     <section className="intro-band" id="about" aria-labelledby="intro-title"><div className="container intro-band__inner"><div className="intro-band__headline"><span className="kicker">WELCOME TO GUN-A</span><h2 id="intro-title">이동의 시작부터 끝까지,<br/><i>건아렌트카.</i></h2></div><p>부산 연제구 연산동에서 약 20년의 렌터카 운영 경험을 쌓아왔습니다. 여행부터 출장, 장기 이용과 사고대차까지 필요한 차량을 안내합니다.</p><div className="intro-band__numbers"><div><strong>20<span>YEARS</span></strong><small>운영 경험</small></div><div><strong>50<span>VEHICLES</span></strong><small>약 50대 보유</small></div></div></div></section>

     <section className="services-section section-pad" id="services" aria-labelledby="services-title"><div className="container"><div className="section-head section-head--split"><div><span className="kicker">OUR SERVICES / 렌트 서비스</span><h2 id="services-title">필요한 순간에 맞는<br/><i>네 가지 렌트 솔루션.</i></h2></div><p>잠깐 필요한 차량부터 오랫동안 함께할 차량까지.<br/>기간과 목적에 따라 편안하게 상담해 보세요.</p></div><div className="service-grid">
      {services.map((s,i)=><article className="service-item" key={s.number}><div className="service-item__top"><span>{s.number} / {s.english}</span><Icon name={s.icon} size={25}/></div><div className="service-item__symbol" aria-hidden="true">0{i+1}</div><div className="service-item__bottom"><h3>{s.title}</h3><p>{s.description}</p><PhoneLink placement={`service_${s.number}`} aria-label={`${s.title} 전화 상담`} className="circle-action"><Icon name="arrow" size={22}/></PhoneLink></div></article>)}
     </div></div></section>

     <Fleet />

     <section className="statement-section" id="benefits" aria-labelledby="statement-title"><div className="container statement-inner"><div className="statement-copy"><span className="kicker kicker--light">WHY CHOOSE GUN-A</span><h2 id="statement-title">좋은 차를 고르는 일.<br/><i>좋은 경험을 만드는 일.</i></h2><p>차량 선택부터 인수·반납까지, 건아렌트카는 당신의 이동에 필요한 정보를 명확하게 안내합니다.</p><div className="statement-points"><div><span>01</span><strong>다양한 차량 선택</strong><small>약 50대의 보유 차량</small></div><div><span>02</span><strong>합리적인 요금 안내</strong><small>차량별 기준 요금 공개</small></div><div><span>03</span><strong>유연한 이용 상담</strong><small>부산 전역 및 인근 지역 협의</small></div></div><a href="#contact" className="action action--light">건아렌트카 찾아오기 <Icon name="arrow" size={19}/></a></div><div className="statement-visual"><div className="statement-visual__circle"/><Image src="/images/hero/suv-concept.svg" alt="SUV 차급의 콘셉트 일러스트" width={1100} height={600}/><span>YOUR EVERYDAY DRIVE,<br/>REIMAGINED.</span></div></div></section>

     <section className="process-section section-pad" id="process" aria-labelledby="process-title"><div className="container"><div className="section-head section-head--split"><div><span className="kicker">HOW IT WORKS / 이용 방법</span><h2 id="process-title">쉽게 확인하고,<br/><i>편하게 이용하세요.</i></h2></div><p>복잡한 온라인 예약 없이 전화로 필요한 정보를 안내받고 이용하실 수 있습니다.</p></div><div className="process-grid">{process.map(p=><article key={p.n} className="process-item"><div><span className="process-item__number">{p.n}</span><Icon name={p.icon} size={30}/></div><span className="process-item__en">{p.en}</span><h3>{p.title}</h3><p>{p.desc}</p></article>)}</div><p className="process-footnote"><Icon name="clock" size={18}/> 영업시간 외 차량 인수·반납과 별도 픽업은 사전 협의가 필요합니다.</p></div></section>

     <Reviews />
     <FAQ />

     <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title"><div className="container"><div className="section-head section-head--split"><div><span className="kicker">FIND US / 오시는 길</span><h2 id="contact-title">부산 연산동,<br/><i>당신과 가까운 렌터카.</i></h2></div><p>차량 인수와 반납은 건아렌트카 주차장을 기본으로 합니다.<br/>위치 및 차량 이용 조건은 전화로 안내해 드립니다.</p></div><div className="contact-grid"><div className="contact-grid__card"><span>01 / LOCATION</span><h3>건아렌트카</h3><div className="contact-detail"><Icon name="pin" size={20}/><div><small>ADDRESS</small><strong>{site.address}</strong><p>연산역에서 도보 약 7분</p></div></div><div className="contact-detail"><Icon name="phone" size={20}/><div><small>CALL US</small><strong>{site.phoneDisplay}</strong><p>차량·가격·대여 조건 상담</p></div></div><div className="contact-detail"><Icon name="clock" size={20}/><div><small>BUSINESS HOURS</small><strong>연중무휴 운영</strong><p>영업시간 외 인수·반납은 사전 협의</p></div></div><div className="contact-grid__buttons"><a target="_blank" rel="noopener noreferrer" href={naverMap} className="action action--outline">네이버 지도 보기 <Icon name="arrow" size={19}/></a><a target="_blank" rel="noopener noreferrer" href={googleMap} className="contact-google">Google Maps ↗</a></div></div><div className="contact-grid__visual"><span className="contact-grid__caption">BUSAN<br/>YEONJE-GU</span><div className="contact-grid__big">GUN-A</div><span className="contact-grid__address">35°11′ N / 129°04′ E · BUSAN, KOREA</span><div className="contact-grid__mini"><Icon name="map" size={23}/><span>연제구 반송로 68<br/>차량 인수·반납 장소</span></div></div></div><p className="contact-footnote">{site.serviceArea}. {site.pickupNote}</p></div></section>

     <section className="closing-section" aria-labelledby="closing-title"><div className="container closing-section__inner"><div><span className="kicker kicker--light">LET’S GET MOVING</span><h2 id="closing-title">당신의 다음 이동,<br/><i>건아렌트카와 함께.</i></h2><p>차량과 이용 기간을 알려주시면 전화로 자세히 안내해 드립니다.</p></div><PhoneLink placement="final_cta" className="closing-section__call"><Icon name="phone" size={23}/> {site.phoneDisplay} <Icon name="arrow" size={23}/></PhoneLink></div></section>
   </main>
   <footer className="footer"><div className="container footer-main"><div><Brand light footer/><p>다양한 선택, 합리적인 드라이브.<br/>부산 연산동 건아렌트카.</p></div><nav aria-label="하단 메뉴">{navigation.map(n=><a key={n.href} href={n.href}>{n.label}</a>)}<a href="#faq">자주 묻는 질문</a></nav></div><div className="container footer-bottom"><span>{site.legalName} · {site.address} · {site.phoneDisplay}</span><span>© 2026 GUN-A RENTCAR</span></div></footer>
   <MobileCallBar/>
 </>;
}
