"use client";
import {createContext,useContext,useEffect,useRef,useState} from "react";
import type {ReactNode} from "react";
import {BRAND} from "../../_lib/site-data";
import InquiryForm,{type InquiryContext} from "./inquiry-form";
import Icon from "./icon";

type ConsultApi = {openChooser:(context?:InquiryContext)=>void;openInquiry:(context?:InquiryContext)=>void;close:()=>void};
const ConsultContext=createContext<ConsultApi|null>(null);
export function useConsult(){const value=useContext(ConsultContext);if(!value)throw new Error("ConsultProvider is required");return value;}
export default function ConsultProvider({children}:{children:ReactNode}){
  const [modal,setModal]=useState<"choice"|"inquiry"|null>(null);
  const [context,setContext]=useState<InquiryContext>({});
  const firstRef=useRef<HTMLButtonElement|null>(null);
  const triggerRef=useRef<HTMLElement|null>(null);
  const openChooser=(next:InquiryContext={})=>{triggerRef.current=document.activeElement as HTMLElement;setContext(next);setModal("choice");};
  const openInquiry=(next:InquiryContext={})=>{if(!modal)triggerRef.current=document.activeElement as HTMLElement;setContext(next);setModal("inquiry");};
  const close=()=>{setModal(null);window.setTimeout(()=>triggerRef.current?.focus(),0);};
  useEffect(()=>{
    if(!modal)return;
    const old=document.body.style.overflow;document.body.style.overflow="hidden";
    firstRef.current?.focus();
    const onKey=(event:KeyboardEvent)=>{
      if(event.key==="Escape"){event.preventDefault();setModal(null);triggerRef.current?.focus();}
      if(event.key!=="Tab")return;
      const target=document.querySelector<HTMLElement>("[data-consult-dialog]");
      const focusables=target?.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex="0"]');
      if(!focusables?.length)return;
      const first=focusables[0],last=focusables[focusables.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    };
    window.addEventListener("keydown",onKey);
    return()=>{document.body.style.overflow=old;window.removeEventListener("keydown",onKey);};
  },[modal]);
  return <ConsultContext.Provider value={{openChooser,openInquiry,close}}>{children}
    {modal&&<div className="dialog-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)close();}}>
      <section className={`consult-dialog ${modal==="choice"?"choice-dialog":"form-dialog"}`} role="dialog" aria-modal="true" aria-labelledby="consult-heading" data-consult-dialog>
        <div className="dialog-top"><span className="eyebrow">GUNA RENTCAR · CONTACT</span><button className="icon-button" type="button" aria-label="닫기" ref={firstRef} onClick={close}><Icon name="close"/></button></div>
        {modal==="choice"?<><h2 id="consult-heading">어떤 방법으로<br/>상담하시겠어요?</h2><p className="dialog-lead">차량과 일정에 대해 편하게 문의해 주세요.</p>
          {context.car&&<p className="context-tag"><Icon name="car" size={16}/>{context.car} 차량 문의</p>}
          <a className="consult-option" href={BRAND.tel} onClick={close}><span className="option-icon"><Icon name="phone"/></span><span><strong>전화로 바로 상담하기</strong><small>{BRAND.phone} · 24시간 전화 상담</small></span><Icon name="arrow-up"/></a>
          <button className="consult-option" onClick={()=>setModal("inquiry")} type="button"><span className="option-icon"><Icon name="mail"/></span><span><strong>상담 요청 남기기</strong><small>현재 1차 검수용 · 실제 접수 미연결</small></span><Icon name="arrow"/></button>
        </>:<><h2 id="consult-heading">{context.car?`${context.car} 차량 문의`:context.event?"이벤트 상담 요청":"상담 요청 남기기"}</h2><p className="dialog-lead">간단한 내용을 작성해 주세요. 현재는 화면 검수용입니다.</p><InquiryForm key={`${context.car??""}-${context.event??""}-${context.service??""}`} context={context} modal/></>}
      </section>
    </div>}
  </ConsultContext.Provider>;
}
