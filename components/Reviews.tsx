"use client";

import { useState } from "react";
import { reviews } from "@/data/reviews";
import { Icon } from "@/components/Icon";

export function Reviews() {
  const published = reviews.filter((review) => review.approvedForReuse);
  const [activeIndex, setActiveIndex] = useState(0);
  const index = published.length ? activeIndex % published.length : 0;
  const review = published[index];

  return (
    <section className="section review-section" id="reviews" aria-labelledby="review-title">
      <div className="container review-layout">
        <div className="review-intro"><span className="eyebrow"><span className="eyebrow-line"/> REAL STORIES</span><h2 id="review-title">고객의 한마디가<br/><em>우리의 기준입니다.</em></h2><p>직접 이용한 고객의 경험을 소중히 듣고, 더 편안한 차량 이용을 위해 노력합니다.</p><div className="review-decor">“</div></div>
        <div className="review-card">
          {review ? <>
            <div className="review-card__top"><span>네이버 플레이스 실제 후기</span><Icon name="quote" size={30}/></div>
            <blockquote>{review.text}</blockquote>
            <div className="review-card__footer"><div><strong>{review.authorDisplay}</strong><small>{review.writtenAt || "네이버 플레이스"}</small></div>{review.sourceUrl ? <a href={review.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline-link">원문 보기 <Icon name="arrow" size={15}/></a> : null}</div>
            {published.length > 1 ? <div className="review-controls"><span>{String(index + 1).padStart(2, "0")} / {String(published.length).padStart(2, "0")}</span><div><button type="button" onClick={() => setActiveIndex((v) => (v - 1 + published.length) % published.length)} aria-label="이전 후기">←</button><button type="button" onClick={() => setActiveIndex((v) => (v + 1) % published.length)} aria-label="다음 후기">→</button></div></div> : null}
          </> : <div className="review-placeholder"><Icon name="quote" size={42}/><h3>실제 고객 후기를<br/>준비하고 있습니다.</h3><p>네이버 플레이스의 실제 후기 중 재게시가 가능한 내용을 확인해 이곳에 소개할 예정입니다.</p><span>VERIFIED REVIEWS COMING SOON</span></div>}
        </div>
      </div>
    </section>
  );
}
