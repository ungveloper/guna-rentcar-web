"use client";
import {useMemo,useState} from "react";
import {faqs,type FaqCategory} from "../../_lib/site-data";
import FaqList from "./faq-list";
const faqCategories=["전체","대여 자격","요금·보증금","보험·사고","인수·반납","기간·변경"] as const;
export default function FaqDirectory(){const [selected,setSelected]=useState<"전체"|FaqCategory>("전체");const visible=useMemo(()=>selected==="전체"?faqs:faqs.filter(q=>q.category===selected),[selected]);return <><div className="tabs faq-tabs" role="group" aria-label="FAQ 카테고리 선택">{faqCategories.map(item=><button type="button" className={`tab ${selected===item?"selected":""}`} key={item} aria-pressed={selected===item} onClick={()=>setSelected(item)}>{item}</button>)}</div><FaqList items={visible}/></>}
