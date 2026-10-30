import type { ReactNode } from "react";
export default function SectionHeading({eyebrow,title,description,aside,center=false}:{eyebrow:string; title:string; description?:string; aside?:ReactNode; center?:boolean}) {
  return <div className={`section-heading ${center?"centered":""}`}>
    <div><span className="eyebrow"><span className="eyebrow-line"/>{eyebrow}</span><h2>{title}</h2>{description&&<p>{description}</p>}</div>{aside&&<div className="section-aside">{aside}</div>}
  </div>;
}
