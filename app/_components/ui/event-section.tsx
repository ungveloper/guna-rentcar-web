"use client";
import {useEffect,useRef,useState,useSyncExternalStore} from "react";
import {events,type EventItem,type ServiceKey} from "../../_lib/site-data";
import SectionHeading from "./section-heading";
import {useConsult} from "./consult-provider";
import Icon from "./icon";
import {BRAND} from "../../_lib/site-data";
const seoulFormatter=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit"});
const readSeoulDate=()=>seoulFormatter.format(new Date());
const readServerDate=()=>"";
const subscribeClock=(listener:()=>void)=>{const id=setInterval(listener,60_000);return()=>clearInterval(id);};
export default function EventSection({service}:{service?:ServiceKey}){
  const [active,setActive]=useState<EventItem|null>(null);const {openInquiry}=useConsult();const dismissRef=useRef<HTMLButtonElement|null>(null);
  const current=useSyncExternalStore(subscribeClock,readSeoulDate,readServerDate);
  const visible=events.filter(e=>e.isEnabled&&e.startDate<=current&&e.endDate>=current&&(!service||e.services.includes(service)));
  useEffect(()=>{if(!active)return;
    const old=document.body.style.overflow;document.body.style.overflow="hidden";dismissRef.current?.focus();
    const key=(e:KeyboardEvent)=>{
      if(e.key==="Escape"){e.preventDefault();setActive(null);}
      if(e.key!=="Tab")return;
      const dialog=document.querySelector<HTMLElement>("[data-event-dialog]");
      const focusables=dialog?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');
      if(!focusables?.length)return;
      if(e.shiftKey&&document.activeElement===focusables[0]){e.preventDefault();focusables[focusables.length-1].focus();}
      if(!e.shiftKey&&document.activeElement===focusables[focusables.length-1]){e.preventDefault();focusables[0].focus();}
    };
    window.addEventListener("keydown",key);return()=>{document.body.style.overflow=old;window.removeEventListener("keydown",key);};
  },[active]);
  if(visible.length===0)return null;
  return <section className="section event-section"><div className="container"><SectionHeading eyebrow="CURRENT BENEFITS" title="지금 확인할 수 있는 혜택" description="이벤트 기간과 세부 이용 조건은 전화 상담으로 확인해 주세요."/><div className="event-grid">{visible.map(e=><button key={e.id} type="button" className="event-card" onClick={()=>setActive(e)}><span className="eyebrow">GUNA EVENT</span><h3>{e.title}</h3><span>혜택 이용 안내 보기 <Icon name="arrow" size={17}/></span></button>)}</div></div>
    {active&&<div className="dialog-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setActive(null);}}><div className="consult-dialog" role="dialog" aria-modal="true" aria-label={`${active.title} 이벤트 상세`} data-event-dialog><div className="dialog-top"><span className="eyebrow">EVENT</span><button className="icon-button" type="button" ref={dismissRef} onClick={()=>setActive(null)} aria-label="닫기"><Icon name="close"/></button></div><h2>{active.title}</h2><h3>혜택 이용 안내</h3><p>{active.benefitGuide}</p><p>{active.startDate} ~ {active.endDate}</p><button className="button button-primary full" type="button" onClick={()=>{openInquiry({event:active.title,service});setActive(null);}}>상담 요청 남기기 <Icon name="arrow"/></button><a className="button button-outline full" href={BRAND.tel}><Icon name="phone"/> 전화로 상담하기</a></div></div>}
  </section>;
}
