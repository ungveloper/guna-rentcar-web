"use client";
import { useState } from "react";
import type { Faq } from "../../_lib/site-data";
import Icon from "./icon";
export default function FaqList({items}:{items:Faq[]}){const [open,setOpen]=useState<string|null>(null);return <div className="divide-y divide-[#e9e4dc] border-y border-[#e9e4dc]">{items.map(item=><article key={item.id}><button className="flex w-full items-center justify-between gap-5 py-5 text-left hover:text-[#AA895B]" type="button" aria-expanded={open===item.id} onClick={()=>setOpen(open===item.id?null:item.id)}><span className="text-[15px] font-semibold leading-6 sm:text-lg">{item.question}</span><Icon name={open===item.id?"minus":"plus"} size={19}/></button>{open===item.id&&<div className="pb-6 pr-9 text-sm leading-8 text-[#716d65]">{item.answer}</div>}</article>)}</div>}
