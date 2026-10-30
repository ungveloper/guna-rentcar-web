"use client";
import { useState } from "react";
import { faqs,type FaqCategory } from "../../_lib/site-data";
import FaqList from "./faq-list";
const categories=["전체","대여 자격","요금·보증금","보험·사고","인수·반납","기간·변경"] as const;
export default function FaqDirectory(){const [selected,setSelected]=useState<"전체"|FaqCategory>("전체");return <><div className="mb-9 flex flex-wrap gap-2">{categories.map(c=><button key={c} type="button" aria-pressed={selected===c} onClick={()=>setSelected(c)} className={`rounded-full border px-4 py-2.5 text-sm font-semibold ${selected===c?"border-[#AA895B] bg-[#AA895B] text-white":"border-[#e6e0d6] bg-white text-[#625e58] hover:border-[#AA895B]"}`}>{c}</button>)}</div><FaqList items={selected==="전체"?faqs:faqs.filter(q=>q.category===selected)}/></>}
