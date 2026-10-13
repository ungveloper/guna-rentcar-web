"use client";

import { useEffect, useState } from "react";
import { Brand } from "@/components/Brand";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";
import { navigation } from "@/data/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <PhoneLink placement="header" className="header-call">전화 상담 <Icon name="arrow" size={17} /></PhoneLink>
          <button className="mobile-menu-trigger" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"} onClick={() => setMenuOpen((value) => !value)}>
            <Icon name={menuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`} aria-label="모바일 주요 메뉴" aria-hidden={!menuOpen}>
        <div className="container mobile-nav__inner">
          {navigation.map((item, i) => <a key={item.href} tabIndex={menuOpen ? 0 : -1} href={item.href} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{item.label}<Icon name="arrow" size={16}/></a>)}
          <PhoneLink placement="mobile_menu" tabIndex={menuOpen ? 0 : -1} className="button button--dark" onClick={() => setMenuOpen(false)} withIcon>전화로 문의하기</PhoneLink>
        </div>
      </nav>
    </header>
  );
}
