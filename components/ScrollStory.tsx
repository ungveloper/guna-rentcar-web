"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@/components/Icon";

const stories = [
  { key: "city", index: "01", category: "CITY / COMPACT", title: "가벼운 도심 이동.", description: "가까운 일정과 일상적인 이동에 알맞은 경차를 살펴보세요.", car: "더뉴레이", image: "/images/vehicles/ray.webp", price: "50,000", label: "1~2일 기준 · 1일 요금" },
  { key: "weekend", index: "02", category: "WEEKEND / SUV", title: "주말과 장거리 이동.", description: "여행 일정과 짐의 양에 맞춰 SUV를 선택할 수 있습니다.", car: "투싼", image: "/images/vehicles/tucson.webp", price: "120,000", label: "1~2일 기준 · 1일 요금" },
  { key: "group", index: "03", category: "TOGETHER / VAN", title: "여럿이 함께하는 이동.", description: "가족 나들이와 단체 이동에 적합한 승합차를 확인해 보세요.", car: "더뉴카니발 9인승", image: "/images/vehicles/carnival.webp", price: "150,000", label: "1~2일 기준 · 1일 요금" },
] as const;

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/** Scroll-bound scene changes; images/copy remain in the initial HTML for SEO. */
export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const lastActiveRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    let frame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      frame = 0;
      const topOffset = Number.parseFloat(window.getComputedStyle(sticky).top) || 0;
      const travel = Math.max(1, section.offsetHeight - sticky.offsetHeight);
      const progress = clamp((topOffset - section.getBoundingClientRect().top) / travel);
      const position = Math.min(stories.length - Number.EPSILON, progress * stories.length);
      const nextActive = Math.min(stories.length - 1, Math.floor(position));
      if (nextActive !== lastActiveRef.current) {
        lastActiveRef.current = nextActive;
        setActive(nextActive);
      }
      section.style.setProperty("--story-progress", progress.toFixed(4));

      // Each segment fills progressively as the user scrolls, not only at scene boundaries.
      progressRef.current?.querySelectorAll<HTMLElement>("span").forEach((segment, index) => {
        segment.style.setProperty("--story-segment-fill", `${Math.round(clamp(position - index) * 100)}%`);
      });
      if (!reducedMotion.matches) {
        const local = clamp(position - nextActive);
        section.style.setProperty("--story-image-scale", (1.06 - local * 0.045).toFixed(3));
        section.style.setProperty("--story-image-offset", `${(-11 * local).toFixed(1)}px`);
      }
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="story-scroll" id="about" aria-label="이용 목적별 추천 차량">
      <div className="story-scroll__sticky" ref={stickyRef}>
        <div className="story-scroll__media" aria-hidden="true">
          {stories.map((story, index) => (
            <div key={story.key} className={`story-scroll__scene ${index === active ? "is-active" : ""}`}>
              <Image fill sizes="(max-width: 800px) 100vw, 58vw" src={story.image} alt="" />
            </div>
          ))}
        </div>
        <div className="story-scroll__shade" />
        <div className="container story-scroll__inner">
          <div className="story-scroll__intro">
            <span className="micro-label micro-label--light">CHOOSE YOUR RENTAL</span>
            <span className="story-scroll__tag">이용 목적에 맞춘 차량 안내</span>
          </div>
          <div className="story-scroll__copy" aria-live="off">
            {stories.map((story, index) => (
              <div key={story.key} className={`story-scroll__copy-item ${index === active ? "is-active" : ""}`} aria-hidden={index !== active}>
                <p>{story.index} / {story.category}</p>
                <h2>{story.title}</h2>
                <p className="story-scroll__description">{story.description}</p>
                <a href="#fleet" tabIndex={index === active ? 0 : -1}>
                  전체 차량·요금 확인 <Icon name="arrowRight" size={18} />
                </a>
              </div>
            ))}
          </div>
          <div className="story-scroll__footer">
            <div className="story-scroll__progress" ref={progressRef} aria-label={`차량 추천 ${active + 1}/${stories.length}`}>
              {stories.map((story, index) => <span key={story.key} className={index <= active ? "is-active" : ""} />)}
            </div>
            <div className="story-scroll__vehicle">
              <span>{stories[active].car}</span>
              <strong>{stories[active].price}원 <small>/ 1일</small></strong>
              <small>{stories[active].label}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
