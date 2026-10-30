"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect,useState} from "react";
import Icon from "../ui/icon";
import {useConsult} from "../ui/consult-provider";
import {BRAND,services} from "../../_lib/site-data";
export default function Header(){
  const pathname=usePathname();const {openChooser,openInquiry}=useConsult();const [menu,setMenu]=useState(false);const [showDesktopChoice,setShowDesktopChoice]=useState(false);
  useEffect(()=>{if(!showDesktopChoice)return;const key=(e:KeyboardEvent)=>{if(e.key==="Escape")setShowDesktopChoice(false);};const outside=(e:MouseEvent)=>{if(!(e.target as Element).closest(".desktop-consult-wrap"))setShowDesktopChoice(false);};window.addEventListener("keydown",key);document.addEventListener("click",outside);return()=>{window.removeEventListener("keydown",key);document.removeEventListener("click",outside);};},[showDesktopChoice]);
  useEffect(()=>{if(!menu)return;const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape")setMenu(false);};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey);},[menu]);
  const nav=[...services.map(s=>({label:s.title,href:`/services/${s.key}`})),{label:"전체 차량",href:"/cars"}];
  return <><header className="site-header"><div className="container header-inner">
    <Link href="/" className="wordmark" aria-label="건아렌트카 홈"><span className="wordmark-symbol" aria-hidden="true">G<span>•</span></span><span className="wordmark-words"><strong>GUNA</strong><small>RENTCAR</small></span></Link>
    <nav className="desktop-nav" aria-label="주 메뉴">{nav.map(item=><Link key={item.href} href={item.href} scroll={true} aria-current={pathname===item.href?"page":undefined} className={pathname===item.href?"active":""}>{item.label}</Link>)}</nav>
    <div className="header-actions"><span className="header-availability"><span className="live-dot"/> 24시간 전화 상담</span><div className="desktop-consult-wrap"><button type="button" onClick={()=>setShowDesktopChoice(v=>!v)} aria-expanded={showDesktopChoice} aria-controls="desktop-consult-menu" className="button button-dark header-consult">상담하기 <Icon name="chevron" size={17}/></button>{showDesktopChoice&&<div className="desktop-consult-dropdown" id="desktop-consult-menu"><span className="eyebrow">HOW CAN WE HELP?</span><a href={BRAND.tel} onClick={()=>setShowDesktopChoice(false)}><Icon name="phone" size={19}/><span>전화로 상담하기<small>{BRAND.phone}</small></span><Icon name="arrow-up" size={16}/></a><button type="button" onClick={()=>{setShowDesktopChoice(false);openInquiry();}}><Icon name="mail" size={19}/><span>상담 요청 남기기<small>검수용 양식 · 실제 접수 미연결</small></span><Icon name="arrow" size={16}/></button></div>}</div><button type="button" className="mobile-menu-trigger icon-button" aria-label={menu?"메뉴 닫기":"메뉴 열기"} aria-expanded={menu} aria-controls="mobile-nav" onClick={()=>setMenu(m=>!m)}><Icon name={menu?"close":"menu"} size={24}/></button></div>
  </div></header>
  <div id="mobile-nav" className={`mobile-nav-wrap ${menu?"is-open":""}`} aria-hidden={!menu}><nav className="mobile-nav container" aria-label="모바일 메뉴"><span className="eyebrow">RENTAL SERVICES</span>{nav.map((item,i)=><Link href={item.href} scroll={true} key={item.href} onClick={()=>setMenu(false)} tabIndex={menu?0:-1} className={pathname===item.href?"current":""}><span className="mobile-nav-number">0{i+1}</span>{item.label}<Icon name="arrow-up" size={17}/></Link>)}<span className="eyebrow mobile-nav-subtitle">MORE INFORMATION</span>{[{label:"회사 소개",href:"/about"},{label:"자주 묻는 질문",href:"/faq"},{label:"고객 후기",href:"/reviews"},{label:"상담 및 오시는 길",href:"/contact"}].map(item=><Link tabIndex={menu?0:-1} onClick={()=>setMenu(false)} className="mobile-nav-secondary" href={item.href} key={item.href}>{item.label}<Icon name="arrow" size={16}/></Link>)}<a tabIndex={menu?0:-1} href={BRAND.tel} className="mobile-nav-phone">{BRAND.phone} <Icon name="phone" size={17}/></a></nav></div>
  <div className="mobile-bottom-bar"><button type="button" className="button button-primary" onClick={()=>openChooser()}><Icon name="phone" size={18}/> 상담하기 <Icon name="arrow-up" size={18}/></button></div>
  </>;
}
