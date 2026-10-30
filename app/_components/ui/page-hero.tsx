import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "./icon";
export default function PageHero({eyebrow,title,description,children,compact=false}:{eyebrow:string;title:ReactNode;description:string;children?:ReactNode;compact?:boolean}){
 return <section className={`relative isolate overflow-hidden bg-[#f4f6f3] px-5 sm:px-8 ${compact?"py-12 sm:py-16":"py-16 sm:py-24"}`}>
  <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 h-[540px] w-[540px] rounded-full border-[95px] border-[#e2e8e0]/70"/>
  <div className="relative mx-auto max-w-[1320px]">
   <div className="flex items-center gap-2 text-[11px] font-bold tracking-[.09em] text-[#82908a]"><Link href="/" className="hover:text-[#AA895B]">HOME</Link><Icon name="arrow" size={12}/><span className="text-[#A4855C]">{eyebrow}</span></div>
   <div className="mt-12 grid items-end gap-8 md:grid-cols-[1fr_auto]"><div><span className="inline-flex items-center gap-2 rounded-full border border-[#d7ddd5] bg-white/80 px-4 py-2 text-[11px] font-extrabold tracking-[.15em] text-[#9a7b55]"><span className="h-1.5 w-1.5 rounded-full bg-[#AA895B]"/>{eyebrow}</span><h1 className="mt-7 text-[clamp(39px,5.6vw,77px)] font-black leading-[1.12] tracking-[-.075em] text-[#1b2929]">{title}</h1><p className="mt-7 max-w-[650px] text-[15px] leading-8 text-[#6f7b73] sm:text-[17px]">{description}</p>{children}</div><div className="hidden items-end gap-3 pb-2 md:flex"><span className="text-[11px] font-bold tracking-[.2em] text-[#87938b]">MOVE WITH GUNA</span><span className="text-[100px] font-black leading-[.8] tracking-[-.13em] text-[#d6ded6]">G.</span></div></div>
  </div>
 </section>;
}
