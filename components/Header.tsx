"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/Brand";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";
import { navigation } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 30);
    listener();window.addEventListener("scroll",listener,{passive:true});return ()=>window.removeEventListener("scroll",listener);
  },[]);
  useEffect(()=>{
    if(!menuOpen) return;
    const listener = (event: KeyboardEvent) => {if(event.key==="Escape") setMenuOpen(false);};
    window.addEventListener("keydown",listener); return ()=>window.removeEventListener("keydown",listener);
  },[menuOpen]);
  return <header className={`site-header${scrolled?" is-scrolled":""}`}>
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="주요 메뉴">{navigation.map(n=><Link key={n.href} href={n.href} aria-current={pathname === n.href ? "page" : undefined}>{n.label}</Link>)}</nav>
      <div className="header-actions">
        <PhoneLink placement="header" className="header-call"><Icon name="phone" size={16}/> <span>051-866-1124</span> <Icon name="arrow" size={17}/></PhoneLink>
        <button className="mobile-menu-trigger" type="button" aria-label={menuOpen?"메뉴 닫기":"메뉴 열기"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={()=>setMenuOpen(v=>!v)}><Icon name={menuOpen?"close":"menu"} size={24}/></button>
      </div>
    </div>
    <nav className={`mobile-nav${menuOpen?" mobile-nav--open":""}`} id="mobile-navigation" aria-label="모바일 메뉴" aria-hidden={!menuOpen}>
      <div className="container">{navigation.map((n,i)=><Link key={n.href} tabIndex={menuOpen?0:-1} href={n.href} aria-current={pathname === n.href ? "page" : undefined} onClick={()=>setMenuOpen(false)}><span>{String(i+1).padStart(2,"0")}</span>{n.label}<Icon name="arrow" size={18}/></Link>)}
        <PhoneLink tabIndex={menuOpen?0:-1} placement="mobile_menu" onClick={()=>setMenuOpen(false)} className="mobile-nav__call" withIcon>전화 문의하기 <Icon name="arrow" size={17}/></PhoneLink>
      </div>
    </nav>
  </header>;
}
