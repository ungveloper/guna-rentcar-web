"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/Icon";

const stories = [
  { key:"city", index:"01", category:"FOR THE CITY", title:"오늘은, 가볍게.", description:"퇴근 후 약속부터 잠깐 필요한 이동까지. 내 일상에 맞는 한 대를 선택하세요.", car:"더뉴레이", image:"/images/vehicles/ray.webp", price:"50,000", label:"1~2일 기준 · 1일 요금" },
  { key:"escape", index:"02", category:"FOR THE WEEKEND", title:"계획보다 더 멀리.", description:"바다로, 산으로, 좋아하는 곳 어디든. 주말의 반경을 넓히는 드라이브.", car:"투싼", image:"/images/vehicles/tucson.webp", price:"120,000", label:"1~2일 기준 · 1일 요금" },
  { key:"group", index:"03", category:"FOR THE CREW", title:"좋은 순간은, 함께.", description:"친구들과의 여행부터 가족 나들이까지. 함께하는 이동에 어울리는 선택.", car:"더뉴카니발 9인승", image:"/images/vehicles/carnival.webp", price:"150,000", label:"1~2일 기준 · 1일 요금" },
] as const;

export function ScrollStory() {
  const sectionRef=useRef<HTMLElement>(null);
  const [active,setActive]=useState(0);
  useEffect(()=>{
    const el=sectionRef.current;
    if(!el) return;
    let frame=0;
    const update=()=>{
      frame=0;
      const rect=el.getBoundingClientRect();
      const travel=Math.max(1,rect.height-window.innerHeight);
      const progress=Math.min(0.999,Math.max(0,-rect.top/travel));
      el.style.setProperty("--story-progress",String(progress));
      setActive(Math.min(stories.length-1,Math.floor(progress*stories.length)));
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
    schedule();
    window.addEventListener("scroll",schedule,{passive:true});
    window.addEventListener("resize",schedule);
    return ()=>{window.removeEventListener("scroll",schedule);window.removeEventListener("resize",schedule);if(frame)cancelAnimationFrame(frame);};
  },[]);
  return <section ref={sectionRef} className="story-scroll" id="about" aria-label="이용 목적별 추천 차량">
    <div className="story-scroll__sticky">
      <div className="story-scroll__media" aria-hidden="true">
        {stories.map((story,i)=><div key={story.key} className={`story-scroll__scene ${i===active?"is-active":""}`}><Image fill sizes="(max-width: 800px) 100vw, 58vw" src={story.image} alt=""/></div>)}
      </div>
      <div className="story-scroll__shade"/>
      <div className="container story-scroll__inner">
        <div className="story-scroll__intro"><span className="micro-label micro-label--light">MADE FOR YOUR MOMENTS</span><span className="story-scroll__tag">어떤 오늘이든, 딱 맞는 드라이브.</span></div>
        <div className="story-scroll__copy" aria-live="off">
          {stories.map((story,i)=><div key={story.key} className={`story-scroll__copy-item ${i===active?"is-active":""}`} aria-hidden={i!==active}>
            <p>{story.index} / {story.category}</p>
            <h2>{story.title}</h2>
            <p className="story-scroll__description">{story.description}</p>
            <a href="#fleet" tabIndex={i===active?0:-1}>전체 차량 살펴보기 <Icon name="arrowRight" size={18}/></a>
          </div>)}
        </div>
        <div className="story-scroll__footer">
          <div className="story-scroll__progress" aria-label={`이용 목적 ${active+1}/${stories.length}`}>
            {stories.map((s,i)=><span key={s.key} className={i<=active?"is-active":""}/>)}
          </div>
          <div className="story-scroll__vehicle"><span>{stories[active].car}</span><strong>{stories[active].price}원 <small>/ 1일~</small></strong><small>{stories[active].label}</small></div>
        </div>
      </div>
    </div>
  </section>;
}
