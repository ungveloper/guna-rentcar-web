"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BRAND, services } from "../../_lib/site-data";
import Icon from "../ui/icon";
import { useConsult } from "../ui/consult-provider";

const nav = [...services.map(s=>({label:s.title,href:`/services/${s.key}`})),{label:"전체 차량",href:"/cars"}];
const extra = [{label:"회사 소개",href:"/about"},{label:"고객 후기",href:"/reviews"},{label:"자주 묻는 질문",href:"/faq"},{label:"오시는 길",href:"/contact"}];
export default function Header(){
 const pathname=usePathname();
 const {openChooser,openInquiry}=useConsult();
 const [menuOpen,setMenuOpen]=useState(false);
 const [consultOpen,setConsultOpen]=useState(false);
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape"){setMenuOpen(false);setConsultOpen(false);}};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey);},[]);
 return <>
  <header className="sticky top-0 z-50 border-b border-[#e9ece9] bg-white/95 backdrop-blur-xl">
   <div className="mx-auto flex h-[74px] max-w-[1360px] items-center justify-between gap-4 px-5 sm:px-8 lg:h-[86px]">
    <Link href="/" aria-label="건아렌트카 메인페이지" className="flex shrink-0 items-center gap-2.5">
     <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#1b2929] text-[23px] font-black tracking-[-.07em] text-white">G<span className="text-[#c5a376]">.</span></span>
     <span className="flex flex-col leading-none"><strong className="text-[20px] font-black tracking-[-.075em] text-[#1b2929]">GUNA</strong><span className="mt-1.5 text-[9px] font-extrabold tracking-[.3em] text-[#9d805b]">RENTCAR</span></span>
    </Link>
    <nav aria-label="주 메뉴" className="hidden items-center gap-1 lg:flex xl:gap-2">{nav.map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href?"page":undefined} className={`rounded-full px-4 py-2.5 text-[13px] font-bold transition-colors xl:text-sm ${pathname===item.href?"bg-[#f3eee7] text-[#99754a]":"text-[#4f5b57] hover:bg-[#f4f5f2] hover:text-[#1d2928]"}`}>{item.label}</Link>)}</nav>
    <div className="hidden items-center gap-3 lg:flex"><a href={BRAND.tel} aria-label={`${BRAND.phone} 전화 연결`} className="hidden text-xs font-bold text-[#68716c] xl:block"><span className="block text-[10px] font-semibold text-[#a1aaa4]">24시간 전화 상담</span>{BRAND.phone}</a><div className="relative"><button type="button" aria-expanded={consultOpen} aria-haspopup="true" onClick={()=>setConsultOpen(o=>!o)} className="inline-flex items-center gap-3 rounded-full bg-[#1b2929] px-6 py-3.5 text-[13px] font-bold text-white transition hover:bg-[#AA895B]">상담하기 <Icon name="arrow-up" size={17}/></button>{consultOpen&&<div className="absolute right-0 top-full mt-3 w-60 overflow-hidden rounded-[22px] border border-[#e9ebe7] bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,.13)]"><a href={BRAND.tel} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold hover:bg-[#f5f6f3]"><Icon name="phone" size={18}/> 전화로 상담하기</a><button type="button" className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-[#f5f6f3]" onClick={()=>{setConsultOpen(false);openInquiry();}}><Icon name="mail" size={18}/> 상담 요청 남기기</button></div>}</div></div>
    <button type="button" aria-label={menuOpen?"메뉴 닫기":"메뉴 열기"} aria-expanded={menuOpen} aria-controls="guna-mobile-nav" onClick={()=>setMenuOpen(v=>!v)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e4e9e5] text-[#1b2929] lg:hidden"><Icon name={menuOpen?"close":"menu"} size={22}/></button>
   </div>
   {menuOpen&&<nav id="guna-mobile-nav" aria-label="모바일 메뉴" className="max-h-[75vh] overflow-y-auto border-t border-[#ebeeea] bg-white px-5 py-5 lg:hidden"><div className="mx-auto max-w-[1320px]"><div className="mb-3 text-[11px] font-bold tracking-[.2em] text-[#AA895B]">RENTAL SERVICES</div>{nav.map(item=><Link key={item.href} href={item.href} onClick={()=>setMenuOpen(false)} className={`flex items-center justify-between border-b border-[#eef0ed] py-3.5 text-[16px] font-bold ${pathname===item.href?"text-[#AA895B]":"text-[#24302e]"}`}>{item.label}<Icon name="arrow-up" size={17}/></Link>)}<div className="mb-3 mt-7 text-[11px] font-bold tracking-[.2em] text-[#AA895B]">EXPLORE GUNA</div><div className="grid grid-cols-2 gap-2">{extra.map(item=><Link key={item.href} href={item.href} onClick={()=>setMenuOpen(false)} className="rounded-xl bg-[#f5f6f3] px-4 py-3 text-sm font-semibold text-[#3a4843]">{item.label}</Link>)}</div></div></nav>}
  </header>
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e2e8e3] bg-white/95 px-4 py-3 shadow-[0_-8px_35px_rgba(0,0,0,.06)] backdrop-blur-md lg:hidden"><div className="mx-auto flex max-w-[600px] gap-2"><a href={BRAND.tel} className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-[#d9ded9] text-[13px] font-bold text-[#1b2929]"><Icon name="phone" size={17}/> 전화 상담</a><button type="button" onClick={()=>openChooser()} className="flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-full bg-[#1b2929] text-[13px] font-bold text-white">상담하기 <Icon name="arrow-up" size={16}/></button></div></div>
 </>;
}
