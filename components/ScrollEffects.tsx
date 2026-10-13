"use client";

import { useEffect } from "react";

/** Nonessential motion enhancement: the complete content remains server-rendered. */
export function ScrollEffects() {
  useEffect(()=>{
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements=Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!('IntersectionObserver' in window)) return;
    const observer=new IntersectionObserver((entries)=>{
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },{threshold:0.08,rootMargin:"0px 0px -25px 0px"});
    elements.forEach((el)=>{if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;el.classList.add("will-reveal");observer.observe(el);});
    const progress=document.querySelector<HTMLElement>(".reading-progress");
    let raf=0;
    const update=()=>{raf=0;if(progress){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,window.scrollY/max)):0})`;}};
    const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update);};
    window.addEventListener("scroll",onScroll,{passive:true});
    window.addEventListener("resize",onScroll);
    update();
    return ()=>{observer.disconnect();window.removeEventListener("scroll",onScroll);window.removeEventListener("resize",onScroll);if(raf)cancelAnimationFrame(raf);};
  },[]);
  return <div className="reading-progress" aria-hidden="true"/>;
}
