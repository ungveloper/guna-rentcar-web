"use client";

import { useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { events } from "../../_lib/site-data";
import { useConsult } from "./consult-provider";
import Icon from "./icon";

// Client date rather than rendering new Date() in a cached Next.js server component.
// Keep the day boundary accurate in Korea, even when the user's device is overseas.
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Seoul",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
function getKoreanDate() {
  const parts = dateFormatter.formatToParts(new Date());
  const value = (part: string) => parts.find((p) => p.type === part)?.value ?? "";
  return `${value("year")}-${value("month")}-${value("day")}`;
}
function subscribe(listener: () => void) {
  const interval = window.setInterval(listener, 60_000);
  window.addEventListener("focus", listener);
  return () => {
    window.clearInterval(interval);
    window.removeEventListener("focus", listener);
  };
}

export default function EventSection() {
  const pathname = usePathname();
  const { openInquiry } = useConsult();
  const [opened, setOpened] = useState<string | null>(null);
  const today = useSyncExternalStore(subscribe, getKoreanDate, () => "");

  // The general promotion is shared across EVERY route. The fuel benefit is accident-only.
  // Before hydration the date is unknown: show the scheduled offers with accurate dates,
  // then switch to "진행 중" on 11/1 and hide expired offers after 12/31 (KST).
  const visible = events.filter(
    (event) =>
      event.isEnabled &&
      (!today || today <= event.endDate) &&
      (event.target === "all" || (event.target === "accident" && pathname === "/services/accident")),
  );
  if (visible.length === 0) return null;

  const selected = visible.find((event) => event.id === opened);
  const hasStarted = (startDate: string) => Boolean(today && today >= startDate);
  const anyLive = visible.some((event) => hasStarted(event.startDate));
  const heading = !today ? "이벤트 안내" : anyLive ? "진행 중인 이벤트" : "곧 시작하는 이벤트";

  return (
    <section data-guna-events="true" aria-label="건아렌트카 이벤트" className="bg-[#f4f6f2] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="text-xs font-extrabold tracking-[.2em] text-[#AA895B]">SPECIAL OFFER / GUNA RENTCAR</span>
            <h2 className="mt-4 text-[clamp(30px,4vw,50px)] font-black tracking-[-.06em] text-[#1b2929]">{heading}</h2>
          </div>
          <p className="text-sm leading-7 text-[#748078]">이용 기간과 혜택 적용 조건은 상담 시 확인해 주세요.</p>
        </div>
        <div className={`grid gap-5 ${visible.length > 1 ? "md:grid-cols-2" : "lg:grid-cols-2"}`}>
          {visible.map((event) => (
            <button
              type="button"
              key={event.id}
              data-event-id={event.id}
              onClick={() => setOpened(event.id)}
              className="group flex min-h-[235px] flex-col items-start justify-between rounded-[26px] border border-[#e2e8e0] bg-white p-7 text-left transition hover:-translate-y-1 hover:border-[#AA895B]/50 hover:shadow-[0_20px_55px_rgba(25,40,35,.09)] sm:p-9"
            >
              <div className="flex w-full items-center justify-between gap-3">
                <span className="text-xs font-extrabold tracking-[.18em] text-[#AA895B]">{event.target === "all" ? "ALL VEHICLES" : "ACCIDENT REPLACEMENT"}</span>
                <span className="rounded-full bg-[#f1e7d9] px-3 py-1.5 text-[11px] font-bold text-[#947044]">
                  {!today ? "기간 안내" : hasStarted(event.startDate) ? "진행 중" : "진행 예정"}
                </span>
              </div>
              <div className="mt-9">
                <h3 className="text-[clamp(21px,2.5vw,29px)] font-black leading-[1.35] tracking-[-.045em] text-[#1b2929]">{event.title}</h3>
                <p className="mt-3 text-sm font-medium text-[#738078]">{event.startDate} ~ {event.endDate}</p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#AA895B]">혜택 자세히 보기 <Icon name="arrow-up" size={17} /></span>
            </button>
          ))}
        </div>
      </div>
      {selected && (
        <div
          className="fixed inset-0 z-[110] flex items-end justify-center bg-[#0b1718]/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onMouseDown={(event) => { if (event.target === event.currentTarget) setOpened(null); }}
        >
          <div role="dialog" aria-modal="true" aria-label={selected.title} className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-[28px] bg-white p-7 shadow-2xl sm:rounded-[28px] sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <span className="text-xs font-bold tracking-[.2em] text-[#AA895B]">GUNA SPECIAL OFFER</span>
              <button type="button" onClick={() => setOpened(null)} aria-label="닫기" className="rounded-full p-2 hover:bg-[#f4f6f2]"><Icon name="close" /></button>
            </div>
            <h2 className="mt-5 text-[28px] font-black leading-[1.35] tracking-[-.055em] text-[#1b2929]">{selected.title}</h2>
            <p className="mt-6 text-sm leading-8 text-[#647168]">{selected.benefitGuide}</p>
            <p className="mt-5 rounded-xl bg-[#f4f6f2] px-4 py-3 text-sm font-semibold text-[#46574b]">이벤트 기간: {selected.startDate} ~ {selected.endDate}</p>
            <button
              type="button"
              className="mt-7 w-full rounded-full bg-[#1b2929] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#AA895B]"
              onClick={() => {
                setOpened(null);
                openInquiry({event: selected.title, service: selected.target === "accident" ? "accident" : undefined});
              }}
            >
              혜택 상담 요청하기
            </button>
            <p className="mt-3 text-center text-xs leading-6 text-[#869188]">온라인 양식은 검수용으로 실제 접수되지 않습니다. 전화 상담을 이용해 주세요.</p>
          </div>
        </div>
      )}
    </section>
  );
}
