"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { vehicles } from "@/data/vehicles";

const picks=[
  {id:"ray",mood:"가볍게",sub:"THE CITY EDIT",line:"오늘의 이동을 더 자유롭게.",caption:"도시의 매일에 어울리는 선택"},
  {id:"k5",mood:"스타일 있게",sub:"THE DAILY EDIT",line:"일상에도, 취향을 더해.",caption:"적당히 여유롭고, 충분히 감각적으로"},
  {id:"gv80",mood:"특별하게",sub:"THE SIGNATURE EDIT",line:"기억에 남을 드라이브.",caption:"조금 더 특별한 날을 위한 선택"},
] as const;

export function DrivePicker(){
  const [selected,setSelected]=useState(0);
  const current=picks[selected];
  const vehicle=vehicles.find(v=>v.id===current.id);
  if(!vehicle) return null;
  return <section className="drive-picker" aria-labelledby="drive-picker-title">
    <div className="container drive-picker__container">
      <div className="drive-picker__intro" data-reveal><span className="micro-label">THE DRIVE EDIT / 2026</span><h2 id="drive-picker-title">기분에 따라,<br/><span>골라 타는 재미.</span></h2><p>한 번의 탭으로 취향에 맞는 차량을 만나보세요.</p></div>
      <div className="drive-picker__tabs" role="group" aria-label="추천 차량 선택">
        {picks.map((p,i)=><button type="button" key={p.id} onClick={()=>setSelected(i)} aria-pressed={i===selected} className={i===selected?"is-active":""}><span>0{i+1}</span>{p.mood}</button>)}
      </div>
      <div className="drive-picker__stage">
        <div className="drive-picker__media" key={vehicle.id}><Image src={vehicle.image} alt={`${vehicle.model} 차량 사진`} fill sizes="(max-width: 760px) 100vw, 65vw" /></div>
        <div className="drive-picker__detail"><span>{current.sub}</span><h3>{current.line}</h3><p>{current.caption}</p><div className="drive-picker__meta"><span>{vehicle.model}</span><strong>{vehicle.rates.days1to2.toLocaleString("ko-KR")}원 <small>/ 1일</small></strong><small>1~2일 대여 기준</small></div><a href={`#vehicle-${vehicle.id}`}>이 차 자세히 보기 <Icon name="arrowRight" size={18}/></a></div>
      </div>
    </div>
  </section>;
}
