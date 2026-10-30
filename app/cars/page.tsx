import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "../_components/ui/page-hero";
import VehicleExplorer from "../_components/ui/vehicle-explorer";
import FaqList from "../_components/ui/faq-list";
import CtaBand from "../_components/ui/cta-band";
import { faqs } from "../_lib/site-data";
import { pageMetadata } from "../_lib/seo";
export const metadata: Metadata = pageMetadata("전체 차량 | 부산 렌터카 차종 안내","건아렌트카 16개 차종과 이용 시간별 참고 요금, 카테고리 필터를 확인하세요.","/cars");
export default function CarsPage(){return <div data-page="cars"><PageHero eyebrow="ALL VEHICLES / CARS" title={<>전체 차량,<br/><span className="text-[#AA895B]">한눈에 둘러보기.</span></>} description="건아렌트카의 16개 등록 차종을 검색하고 시간별 참고 요금을 비교해 보세요."/><section className="px-5 py-16 sm:py-24"><div className="mx-auto max-w-[1280px]"><h2 className="mb-3 text-3xl font-extrabold sm:text-[44px]">차량 전체 목록</h2><p className="mb-10 text-sm leading-7 text-[#756f67]">실시간 예약 현황이 아닌 등록 차량 안내입니다. 실제 이용 가능 여부는 전화로 확인해 주세요.</p><VehicleExplorer variant="full"/><div className="mt-10 flex flex-col gap-5 rounded-2xl border border-[#e5dfd5] bg-white p-7 md:flex-row md:items-center md:justify-between"><div><h3 className="text-lg font-bold">완전자차보험 기본 포함</h3><p className="mt-2 text-sm leading-7 text-[#756f67]">자기부담금, 휴차료, 보상 제외 조건이 적용될 수 있습니다.</p></div><Link href="/faq" className="shrink-0 rounded-full border border-[#AA895B] px-6 py-3 text-sm font-bold text-[#906d41]">보험 안내 보기 →</Link></div></div></section><section className="bg-white px-5 py-16"><div className="mx-auto max-w-[1280px]"><h2 className="mb-8 text-2xl font-bold">차량 이용 전 확인하세요</h2><FaqList items={faqs.filter(q=>["license","insurance","availability"].includes(q.id))}/></div></section><CtaBand compact/></div>}
