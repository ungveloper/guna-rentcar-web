"use client";
import { events,type ServiceKey } from "../../_lib/site-data";
import { useConsult } from "./consult-provider";
import { useState,useSyncExternalStore } from "react";
import Icon from "./icon";
const subscribe=(listener:()=>void)=>{const t=setInterval(listener,60_000);return()=>clearInterval(t);};
const clientDate=()=>new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
const serverDate=()=>"";
export default function EventSection({service}:{service?:ServiceKey}){
 const {openInquiry}=useConsult();const [opened,setOpened]=useState<string|null>(null);
 const today=useSyncExternalStore(subscribe,clientDate,serverDate);
 if(events.length===0||!today)return null;
 const visible=events.filter(e=>e.isEnabled&&e.startDate<=today&&e.endDate>=today&&(!service||e.services.includes(service)));
 if(!visible.length)return null;
 const selected=visible.find(e=>e.id===opened);
 return <section className="bg-[#f0ece5] px-5 py-16"><div className="mx-auto max-w-[1280px]"><h2 className="mb-8 text-3xl font-bold">진행 중인 이벤트</h2><div className="grid gap-4 md:grid-cols-3">{visible.map(e=><button type="button" key={e.id} onClick={()=>setOpened(e.id)} className="rounded-2xl bg-white p-7 text-left shadow-sm"><span className="text-xs font-bold tracking-widest text-[#AA895B]">GUNA EVENT</span><h3 className="my-5 text-xl font-bold">{e.title}</h3><span className="inline-flex items-center gap-2 text-sm font-semibold">혜택 이용 안내 <Icon name="arrow" size={16}/></span></button>)}</div></div>{selected&&<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4" onClick={e=>{if(e.target===e.currentTarget)setOpened(null)}}><div role="dialog" aria-modal="true" aria-label={selected.title} className="w-full max-w-md rounded-2xl bg-white p-7"><button type="button" className="float-right" onClick={()=>setOpened(null)} aria-label="닫기"><Icon name="close"/></button><h2 className="text-2xl font-bold">{selected.title}</h2><p className="mt-5 text-sm leading-7">{selected.benefitGuide}</p><p className="mt-3 text-sm text-[#6f6b65]">{selected.startDate} ~ {selected.endDate}</p><button type="button" className="mt-7 w-full rounded-xl bg-[#AA895B] p-4 font-bold text-white" onClick={()=>{setOpened(null);openInquiry({event:selected.title,service});}}>상담 요청 남기기</button></div></div>}</section>
}
