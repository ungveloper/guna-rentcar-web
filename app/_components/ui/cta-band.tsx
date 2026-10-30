"use client";
import Icon from "./icon";
import {useConsult} from "./consult-provider";
import {BRAND} from "../../_lib/site-data";
export default function CtaBand({compact=false}:{compact?:boolean}){
  const {openChooser}=useConsult();
  return <section className={`cta-band ${compact?"cta-compact":""}`} aria-label="상담 안내">
    <div className="cta-orb one"/><div className="cta-orb two"/>
    <div className="container cta-body"><div><span className="eyebrow light">LET’S TALK ABOUT YOUR DRIVE</span><h2>어떤 일정이든,<br/><em>편하게 문의해 주세요.</em></h2><p>고객의 상황과 일정에 맞는 차량과 이용 방법을<br className="desktop-only"/> 친절하게 안내해 드립니다.</p></div>
    <div className="cta-actions"><button type="button" className="button button-white" onClick={()=>openChooser()}>상담하기 <Icon name="arrow-up" size={18}/></button><a href={BRAND.tel} className="cta-number" aria-label={`전화 상담 ${BRAND.phone}`}><Icon name="phone" size={16}/>{BRAND.phone}</a><span>연중무휴 · 24시간 전화 상담</span></div></div>
  </section>;
}
