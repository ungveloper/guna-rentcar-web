"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/data/faqs";
import { Icon } from "@/components/Icon";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  return <section className="section faq-section" id="faq" aria-labelledby="faq-title"><div className="container faq-layout">
    <div className="faq-intro"><span className="eyebrow"><span className="eyebrow-line"/> FREQUENTLY ASKED</span><h2 id="faq-title">자주 묻는<br/><em>질문들.</em></h2><p>렌터카 이용 전 알아두면 좋은 내용을 정리했습니다. 궁금한 내용은 언제든 전화로 문의해 주세요.</p><Link href="/contact" className="text-link">위치 및 연락처 보기 <Icon name="arrow" size={17}/></Link></div>
    <div className="faq-list">{faqs.map((faq, i) => {const isOpen = openId === faq.id; return <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={faq.id}><h3><button type="button" aria-expanded={isOpen} aria-controls={`faq-panel-${faq.id}`} onClick={() => setOpenId(isOpen ? null : faq.id)}><span className="faq-index">{String(i + 1).padStart(2, "0")}</span><span>{faq.question}</span><span className="faq-toggle"><Icon name={isOpen ? "minus" : "plus"} size={18}/></span></button></h3><div id={`faq-panel-${faq.id}`} className="faq-answer" hidden={!isOpen}><p>{faq.answer}</p></div></div>;})}</div>
  </div></section>;
}
