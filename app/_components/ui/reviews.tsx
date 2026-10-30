"use client";
import {useState} from "react";
import Icon from "./icon";
import SectionHeading from "./section-heading";
const labels=["차량 청결","친절한 응대","이용 편의성","차량 관리","고객 일정 배려","재방문 경험","여행 이용","장기 이용","상담 과정","차량 상태","인수·반납","고객 후기"];
export default function Reviews({compact=false}:{compact?:boolean}){
  const [count,setCount]=useState(compact?3:6);const available=compact?labels.slice(0,3):labels;
  return <section className="section reviews-section" id="reviews"><div className="container"><SectionHeading eyebrow="REAL CUSTOMER STORIES" title={<>고객의 경험이<br/>말해주는 건아렌트카.</>} description="실제 네이버 플레이스 후기를 확인한 후 원문과 작성자·작성일을 게시할 예정입니다."/>
    <div className="preview-ribbon"><Icon name="info" size={16}/> 후기 콘텐츠 검수 전 · 아래 카드는 디자인 확인용이며 실제 고객 후기가 아닙니다.</div>
    <div className="review-grid">{available.slice(0,count).map((title,i)=><article key={`${title}-${i}`} className="review-card"><span className="review-number">REVIEW {String(i+1).padStart(2,"0")}</span><Icon name="quote" size={28} className="review-quote"/><span className="review-topic">{title}</span><p>실제 고객 후기 원문을 확인한 후 이 영역에 게시합니다.</p><div className="review-bottom"><span>작성자 확인 후 표시<br/><small>작성일 확인 후 표시</small></span><span className="review-source">NAVER PLACE</span></div></article>)}</div>
    <div className="review-actions">{!compact&&count<available.length&&<button type="button" onClick={()=>setCount(c=>Math.min(c+6,available.length))} className="button button-outline">후기 6개 더보기 <Icon name="plus" size={17}/></button>}{compact&&<a className="text-link" href="/reviews">고객 후기 페이지로 이동 <Icon name="arrow" size={17}/></a>}<span className="source-pending"><Icon name="external" size={17}/> 네이버 플레이스 원본 링크는 확인 후 연결됩니다.</span></div>
  </div></section>;
}
