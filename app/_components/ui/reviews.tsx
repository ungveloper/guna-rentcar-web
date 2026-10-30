"use client";

import Link from "next/link";
import { useState } from "react";
import {
  customerReviews,
  featuredReviewIds,
  featuredReviewTopics,
  type CustomerReview,
} from "../../_lib/site-data";
import Icon from "./icon";

const featuredReviews = featuredReviewIds
  .map((id) => customerReviews.find((review) => review.id === id))
  .filter((review): review is CustomerReview => review !== undefined);

function ReviewCard({ review }: { review: CustomerReview }) {
  const [expanded, setExpanded] = useState(false);
  const longReview = review.text.length > 180;
  const topic = featuredReviewTopics[review.id];
  return (
    <article className="flex min-h-[300px] flex-col justify-between rounded-[26px] border border-[#e3e9e2] bg-white p-7 transition-shadow hover:shadow-[0_16px_50px_rgba(28,45,35,.07)] sm:p-8">
      <div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] font-extrabold tracking-[.12em] text-[#AA895B]">
            {topic ?? "네이버 플레이스 후기"}
          </span>
          <Icon name="quote" size={23} className="shrink-0 text-[#d4c4aa]" />
        </div>
        <blockquote className={`mt-6 whitespace-pre-line break-keep text-[15px] leading-[1.9] text-[#34433a] ${expanded ? "" : "line-clamp-6"}`}>
          {review.text}
        </blockquote>
        {longReview && (
          <button type="button" onClick={() => setExpanded((value) => !value)} className="mt-3 text-xs font-bold text-[#96764e] hover:underline">
            {expanded ? "후기 접기" : "후기 전체 읽기"}
          </button>
        )}
      </div>
      <div className="mt-7 border-t border-[#edf0eb] pt-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="break-all text-sm font-bold text-[#24342b]">{review.author}</p>
            <p className="mt-1 text-xs text-[#849086]">네이버 플레이스 · {review.dateLabel}</p>
          </div>
          <a
            href={review.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${review.author} 작성자의 네이버 리뷰 프로필 열기`}
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-[#97764d] hover:underline"
          >
            작성자 리뷰 프로필 <Icon name="arrow-up" size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Reviews({ compact = false }: { compact?: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const [limit, setLimit] = useState(18);
  const reviews = compact
    ? featuredReviews.slice(0, 3)
    : showAll
      ? customerReviews.slice(0, limit)
      : featuredReviews;
  const hasMore = showAll && limit < customerReviews.length;

  return (
    <section className="bg-[#f5f7f4] px-5 py-20 sm:px-8 sm:py-28" data-reviews-content="true">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="text-xs font-extrabold tracking-[.2em] text-[#AA895B]">CUSTOMER REVIEWS</span>
            <h2 className="mt-5 text-[clamp(32px,4vw,52px)] font-black tracking-[-.065em] text-[#1b2929]">
              직접 이용한 분들이<br />남겨주신 이야기
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#7d897f]">
              차량 상태부터 상담과 반납까지, 고객이 네이버 플레이스에 남긴 후기를 모았습니다.
            </p>
          </div>
          {!compact && (
            <span className="rounded-full border border-[#dce4d9] bg-white px-4 py-2 text-xs font-bold text-[#617267]">
              제공된 후기 {customerReviews.length}건
            </span>
          )}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
        </div>
        <p className="mt-5 text-xs leading-6 text-[#869187]">
          후기는 작성 당시의 고객 경험입니다. 긴 후기는 ‘후기 전체 읽기’를 눌러 볼 수 있습니다. 링크는 개별 후기 주소가 아닌 작성자의 네이버 리뷰 프로필로 연결됩니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {compact ? (
            <Link href="/reviews" className="inline-flex items-center gap-2 rounded-full bg-[#1b2929] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#AA895B]">
              고객 후기 더 보기 <Icon name="arrow-up" size={17} />
            </Link>
          ) : showAll ? (
            <>
              {hasMore && (
                <button type="button" onClick={() => setLimit((value) => Math.min(value + 18, customerReviews.length))} className="rounded-full border border-[#d1ddd2] bg-white px-6 py-3 text-sm font-bold text-[#29392e] transition hover:border-[#AA895B]">
                  후기 18건 더 보기
                </button>
              )}
              <button type="button" onClick={() => { setShowAll(false); setLimit(18); }} className="rounded-full border border-[#d1ddd2] bg-white px-6 py-3 text-sm font-bold text-[#29392e] transition hover:border-[#AA895B]">
                대표 후기만 보기
              </button>
            </>
          ) : (
            <button type="button" onClick={() => { setShowAll(true); setLimit(18); }} className="rounded-full bg-[#1b2929] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#AA895B]">
              전체 후기 {customerReviews.length}건 보기
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
