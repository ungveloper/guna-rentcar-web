"use client";
import {useState} from "react";
import {faqs,type Faq} from "../../_lib/site-data";
import Icon from "./icon";
export default function FaqList({items=faqs}:{items?:Faq[]}){
  const [open,setOpen]=useState<string|null>(null);
  return <div className="faq-list">{items.map((faq,i)=><div key={faq.id} className={`faq-item ${open===faq.id?"is-open":""}`}><h3><button type="button" aria-expanded={open===faq.id} aria-controls={`faq-panel-${faq.id}`} onClick={()=>setOpen(v=>v===faq.id?null:faq.id)}><span className="faq-num">{String(i+1).padStart(2,"0")}</span><span className="faq-question">{faq.question}</span><span className="faq-expand"><Icon name={open===faq.id?"minus":"plus"} size={19}/></span></button></h3>{open===faq.id&&<div className="faq-answer" id={`faq-panel-${faq.id}`}><p>{faq.answer}</p></div>}</div>)}</div>;
}
