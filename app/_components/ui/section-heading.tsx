import type { ReactNode } from "react";
export default function SectionHeading({eyebrow,title,description,aside,center=false}:{eyebrow:string;title:ReactNode;description?:string;aside?:ReactNode;center?:boolean}){
 return <div className={`mb-9 flex flex-wrap items-end justify-between gap-5 ${center?"text-center justify-center":""}`}><div><span className="mb-4 block text-[11px] font-bold tracking-[.22em] text-[#AA895B]">{eyebrow}</span><h2 className="text-[30px] font-bold leading-[1.3] tracking-[-.055em] sm:text-[42px]">{title}</h2>{description&&<p className="mt-4 max-w-[680px] text-sm leading-7 text-[#716d65] sm:text-base">{description}</p>}</div>{aside&&<div>{aside}</div>}</div>;
}
