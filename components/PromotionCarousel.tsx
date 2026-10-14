"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { visiblePromoCards } from "@/data/promotions";
import styles from "./PromotionCarousel.module.css";

export function PromotionCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(visiblePromoCards.length > 1);

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-promo-slide]"));
    const left = track.getBoundingClientRect().left;
    let nearestIndex = 0;
    let nearestDistance = Infinity;
    cards.forEach((card, index) => {
      const distance = Math.abs(card.getBoundingClientRect().left - left);
      if (distance < nearestDistance) {
        nearestIndex = index;
        nearestDistance = distance;
      }
    });
    setActiveIndex(nearestIndex);
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
  }, []);

  useEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(updatePosition) : null;
    if (trackRef.current) observer?.observe(trackRef.current);
    return () => {
      window.removeEventListener("resize", updatePosition);
      observer?.disconnect();
    };
  }, [updatePosition]);

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-promo-slide]"));
    if (cards.length === 0) return;
    const target = Math.max(0, Math.min(index, cards.length - 1));
    track.scrollTo({
      left: cards[target].offsetLeft - cards[0].offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  if (visiblePromoCards.length === 0) return null;

  const activePromotions = visiblePromoCards.filter((card) => card.kind === "promotion").length;

  return (
    <section className={styles.section} id="promotions" aria-labelledby="promotions-title">
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <div>
            <div className={styles.kicker}><span className={styles.dot} /> WHAT&apos;S ON AT GUN-A</div>
            <h2 id="promotions-title">이벤트와 이용 안내<span className={styles.titlePoint}>.</span></h2>
            <p>차량을 선택하기 전 알아두면 좋은 소식과 이용 정보를 확인하세요.</p>
          </div>
          <div className={styles.toolbar}>
            <span className={styles.counter} aria-live="polite"><strong>{String(activeIndex + 1).padStart(2, "0")}</strong> / {String(visiblePromoCards.length).padStart(2, "0")}</span>
            <button className={styles.arrow} type="button" aria-label="이전 안내 카드" onClick={() => scrollToCard(activeIndex - 1)} disabled={!canPrev}><span aria-hidden="true">←</span></button>
            <button className={styles.arrow} type="button" aria-label="다음 안내 카드" onClick={() => scrollToCard(activeIndex + 1)} disabled={!canNext}><span aria-hidden="true">→</span></button>
          </div>
        </div>
        <div className={styles.viewport} ref={trackRef} onScroll={updatePosition} tabIndex={0} aria-label="프로모션 및 차량 이용 안내 카드 목록">
          {visiblePromoCards.map((card, index) => (
            <a className={styles.card} href={card.href} key={card.id} data-promo-slide aria-label={`${card.title.replace("\n", " ")} - ${card.actionLabel}`}>
              <Image className={styles.image} src={card.image} fill sizes="(max-width: 650px) 78vw, (max-width: 1050px) 43vw, 330px" alt={card.imageAlt} style={{ objectPosition: card.imagePosition ?? "center" }} />
              <span className={styles.shade} aria-hidden="true" />
              <span className={styles.badge}>{card.kind === "promotion" ? "EVENT" : "GUIDE"}</span>
              <span className={styles.serial}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.cardContent}>
                <span className={styles.eyebrow}>{card.eyebrow}</span>
                <strong className={styles.cardTitle}>{card.title}</strong>
                <span className={styles.description}>{card.description}</span>
                {card.finePrint ? <span className={styles.finePrint}>{card.finePrint}</span> : null}
                <span className={styles.action}>{card.actionLabel} <span aria-hidden="true">↗</span></span>
              </span>
            </a>
          ))}
          <div className={styles.endSpacer} aria-hidden="true" />
        </div>
        <div className={styles.footer}>
          <div className={styles.dots} aria-label="안내 카드 바로가기">
            {visiblePromoCards.map((card, index) => <button type="button" key={card.id} aria-label={`${index + 1}번째 카드로 이동`} aria-current={index === activeIndex ? "true" : undefined} className={index === activeIndex ? styles.dotActive : ""} onClick={() => scrollToCard(index)} />)}
          </div>
          <span className={styles.hint}>좌우로 넘겨 더 확인하세요 <span aria-hidden="true">↔</span></span>
        </div>
        {activePromotions === 0 ? <p className={styles.disclaimer}>현재 별도로 등록된 할인 이벤트는 없으며, 위 내용은 차량별 기준 요금 및 서비스 안내입니다.</p> : null}
      </div>
    </section>
  );
}
