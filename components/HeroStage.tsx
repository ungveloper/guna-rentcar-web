"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PhoneLink } from "@/components/PhoneLink";
import { vehicles } from "@/data/vehicles";

const moments = [
  { id:"city", kicker:"01 / CITY DRIVE", name:"필요한 차량을,", highlight:"합리적인 요금으로.", line:"일상과 출장에 필요한 차량을 비교해 보세요.", vehicleId:"g80", alt:"제네시스 G80 차량 이미지", short:"CITY" },
  { id:"weekend", kicker:"02 / WEEKEND MODE", name:"주말 여행도,", highlight:"SUV로 편안하게.", line:"여행 일정과 인원에 맞는 차종을 선택하세요.", vehicleId:"gv80", alt:"제네시스 GV80 차량 이미지", short:"WEEKEND" },
  { id:"together", kicker:"03 / GO TOGETHER", name:"가족·단체 이동,", highlight:"넉넉한 승합차.", line:"가족 나들이와 단체 이동을 위한 차량 안내.", vehicleId:"carnival", alt:"기아 더뉴카니발 9인승 차량 이미지", short:"TOGETHER" },
] as const;

export function HeroStage() {
  const [active, setActive] = useState(0);
  const moment = moments[active];
  const getImage = (id: string) => vehicles.find((car) => car.id === id)?.image ?? "/images/hero/studio-sedan.webp";
  return <section className="kinetic-hero" id="top" aria-labelledby="hero-title">
    <div className="kinetic-hero__visual" aria-hidden="true">
      {moments.map((item,i)=><div className={`kinetic-hero__frame ${i===active ? "is-active" : ""}`} key={item.id}>
        <Image src={getImage(item.vehicleId)} fill priority={i===0} sizes="100vw" alt="" className="kinetic-hero__image" />
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
          <Link className="kinetic-hero__primary" href="/cars">차량·요금 확인 <Icon name="arrowRight" size={19}/></Link>
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
