"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND, services } from "../../_lib/site-data";
import Icon from "../ui/icon";
import { useConsult } from "../ui/consult-provider";

const mainLinks = [...services.map(s=>({label:s.title, href:`/services/${s.key}`})), {label:"전체 차량",href:"/cars"}];
const subLinks = [{label:"회사 소개",href:"/about"},{label:"고객 후기",href:"/reviews"},{label:"자주 묻는 질문",href:"/faq"},{label:"상담 및 오시는 길",href:"/contact"}];

export default function Header() {
  const pathname = usePathname();
  const { openChooser, openInquiry } = useConsult();
  const [menuOpen,setMenuOpen] = useState(false);
  const [consultOpen,setConsultOpen] = useState(false);
  useEffect(()=>{ const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape"){setMenuOpen(false);setConsultOpen(false);}}; window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey);},[]);
  return <>
    <header className="sticky top-0 z-50 border-b border-[#e9e4dc] bg-white/95 backdrop-blur-lg">
      <div className="mx-auto flex h-[78px] max-w-[1280px] items-center justify-between gap-6 px-5 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="건아렌트카 메인으로 이동"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#AA895B] text-[25px] font-black text-white">G</span><span className="flex flex-col leading-none"><strong className="text-[22px] font-black tracking-[-.055em]">GUNA</strong><small className="mt-1 text-[10px] font-semibold tracking-[.26em] text-[#AA895B]">RENTCAR</small></span></Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="주 메뉴">
          {mainLinks.map(link=><Link key={link.href} href={link.href} aria-current={pathname===link.href?"page":undefined} className={`border-b-2 py-2 text-sm font-semibold transition-colors hover:text-[#AA895B] ${pathname===link.href?"border-[#AA895B] text-[#AA895B]":"border-transparent text-[#41413c]"}`}>{link.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex"><span className="text-xs font-medium text-[#6e6b63]">24시간 전화 상담</span><div className="relative"><button type="button" aria-expanded={consultOpen} onClick={()=>setConsultOpen(!consultOpen)} className="flex items-center gap-2 rounded-full bg-[#252622] px-5 py-3 text-sm font-bold text-white hover:bg-[#AA895B]">상담하기 <Icon name="chevron" size={15}/></button>{consultOpen&&<div className="absolute top-[calc(100%+10px)] right-0 w-60 rounded-2xl border border-[#ece7df] bg-white p-2 shadow-xl"><a className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold hover:bg-[#f6f3ed]" href={BRAND.tel}><Icon name="phone" size={18}/> 전화로 상담하기</a><button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-[#f6f3ed]" type="button" onClick={()=>{setConsultOpen(false);openInquiry();}}><Icon name="mail" size={18}/> 상담 요청 남기기</button></div>}</div></div>
        <button type="button" className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e8e2d7] lg:hidden" aria-label={menuOpen?"메뉴 닫기":"메뉴 열기"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={()=>setMenuOpen(!menuOpen)}><Icon name={menuOpen?"close":"menu"} size={23}/></button>
      </div>
      {menuOpen&&<nav id="mobile-navigation" className="max-h-[72vh] overflow-y-auto border-t border-[#eee9e1] bg-white px-5 py-5 lg:hidden" aria-label="모바일 메뉴"><div className="mx-auto flex max-w-[1280px] flex-col">{[...mainLinks,...subLinks].map(link=><Link key={link.href} href={link.href} className={`flex items-center justify-between border-b border-[#f0ece5] px-2 py-3.5 text-[15px] font-semibold ${pathname===link.href?"text-[#AA895B]":"text-[#353530]"}`}>{link.label}<Icon name="arrow-up" size={16}/></Link>)}</div></nav>}
    </header>
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e8e2d7] bg-white/95 px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+12px)] shadow-[0_-8px_30px_rgba(0,0,0,.06)] lg:hidden"><button onClick={()=>openChooser()} type="button" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#AA895B] py-3.5 font-bold text-white"><Icon name="phone" size={18}/> 상담하기 <Icon name="arrow-up" size={16}/></button></div>
  </>;
}
