import type {ReactNode} from "react";
import Link from "next/link";
import Icon from "./icon";
export default function PageHero({eyebrow,title,description,children,compact=false}:{eyebrow:string;title:ReactNode;description:string;children?:ReactNode;compact?:boolean}){
  return <section className={`page-hero ${compact?"page-hero-compact":""}`}><div className="page-hero-decoration"/><div className="container page-hero-inner"><div><span className="eyebrow"><span className="eyebrow-line"/>{eyebrow}</span><h1>{title}</h1><p>{description}</p>{children}</div><div className="page-hero-aside" aria-hidden="true"><span>THE RIGHT WAY<br/>TO MOVE.</span><span className="page-hero-aside-big">G<span>.</span></span><span>BUSAN · SINCE 2006</span></div></div><div className="container"><div className="hero-breadcrumb"><Link href="/">HOME</Link><Icon name="arrow" size={13}/><span>{eyebrow}</span></div></div></section>;
}
