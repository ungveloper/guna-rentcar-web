"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { PhoneLink } from "@/components/PhoneLink";

const moments = [
  { id:"city", kicker:"01 / CITY DRIVE", name:"도시의 하루도,", highlight:"나답게 달려.", line:"가볍게 떠나는 일상부터 새로운 주말까지.", image:"/images/vehicles/g80.webp", alt:"제네시스 G80 차량 이미지", short:"CITY" },
  { id:"weekend", kicker:"02 / WEEKEND MODE", name:"이번 주말은,", highlight:"조금 더 멀리.", line:"계획이 바뀌어도, 드라이브의 선택지는 넓게.", image:"/images/vehicles/gv80.webp", alt:"제네시스 GV80 차량 이미지", short:"WEEKEND" },
  { id:"together", kicker:"03 / GO TOGETHER", name:"함께라서,", highlight:"더 특별하게.", line:"친구들과의 여행도, 가족과의 이동도 편안하게.", image:"/images/vehicles/carnival.webp", alt:"기아 더뉴카니발 9인승 차량 이미지", short:"TOGETHER" },
] as const;

export function HeroStage() {
  const [active, setActive] = useState(0);
  const moment = moments[active];
  return <section className="kinetic-hero" id="top" aria-labelledby="hero-title">
    <div className="kinetic-hero__visual" aria-hidden="true">
      {moments.map((item,i)=><div className={`kinetic-hero__frame ${i===active ? "is-active" : ""}`} key={item.id}>
        <Image src={item.image} fill priority={i===0} sizes="100vw" alt="" className="kinetic-hero__image" />
      </div>)}
      <div className="kinetic-hero__overlay" />
      <div className="kinetic-hero__grain" />
    </div>
    <div className="container kinetic-hero__content">
      <div className="kinetic-hero__eyebrow"><span className="pulse-dot" /> GUN-A RENTCAR <span className="separator">/</span> BUSAN</div>
      <div className="kinetic-hero__head" key={moment.id}>
        <p className="kinetic-hero__index">{moment.kicker}</p>
        <h1 id="hero-title">{moment.name}<br/><em>{moment.highlight}</em></h1>
        <p className="kinetic-hero__lead">{moment.line}<br/>다양한 선택, 합리적인 부산 렌터카.</p>
        <div className="kinetic-hero__actions">
          <a className="kinetic-hero__primary" href="#fleet">내 차 찾아보기 <Icon name="arrowRight" size={19}/></a>
          <PhoneLink placement="hero" className="kinetic-hero__secondary">바로 전화하기 <Icon name="arrow" size={19}/></PhoneLink>
        </div>
      </div>
      <div className="kinetic-hero__bottom">
        <div className="kinetic-hero__tabs" role="group" aria-label="메인 차량 장면 선택">
          {moments.map((item,i)=><button key={item.id} type="button" onClick={()=>setActive(i)} aria-pressed={i===active} className={`kinetic-hero__tab ${i===active?"is-active":""}`}><span className="kinetic-hero__tab-line"/><span>{String(i+1).padStart(2,"0")}</span>{item.short}</button>)}
        </div>
        <a className="kinetic-hero__scroll" href="#intro">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
      </div>
    </div>
  </section>;
}
