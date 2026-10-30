"use client";
import Image from "next/image";
import { useMemo,useState } from "react";
import { BRAND,cars,categories,durations,formatPrice,durationLabel,type Car,type DurationKey,type ServiceKey } from "../../_lib/site-data";
import { useConsult } from "./consult-provider";
import Icon from "./icon";
type Props={variant?:"full"|"service";service?:ServiceKey;quoteOnly?:boolean};
function CarCard({car,duration,quoteOnly,service}:{car:Car;duration:DurationKey;quoteOnly:boolean;service?:ServiceKey}){
 const [expanded,setExpanded]=useState(false);
 const {openChooser}=useConsult();
 const price=car.referenceRate?.[duration];
 return <article className="group overflow-hidden rounded-[26px] border border-[#e4e9e4] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#c9d2c9] hover:shadow-[0_16px_50px_rgba(20,30,30,.09)]">
  <div className="relative h-[230px] overflow-hidden bg-[#e7ebea] sm:h-[245px]">
   {car.image?<Image fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" src={car.image} alt={`${car.name} 차종 참고 사진`} className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"/>:<div className="flex h-full flex-col items-center justify-center gap-4 bg-[radial-gradient(ellipse_at_70%_30%,#e3e9e4_0%,#f0f2ef_60%)] text-[#9baaa1]"><Icon name="car" size={70}/><span className="text-xs font-semibold">IMAGE COMING SOON</span></div>}
   <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3.5 py-2 text-[11px] font-bold text-[#34443d] backdrop-blur">{car.category}</span>
   <span className="absolute bottom-3 left-4 rounded-full bg-[#182526]/80 px-3 py-1.5 text-[10px] text-white/90">{car.image?"차종 참고 사진":"차량 사진 준비 중"}</span>
  </div>
  <div className="p-6"><div className="flex items-start justify-between gap-3"><div><span className="text-[11px] font-bold tracking-[.13em] text-[#ad8d64]">GUNA FLEET {car.seats?`· ${car.seats}인승`:""}</span><h3 className="mt-2 text-[23px] font-black tracking-[-.055em] text-[#1a2928]">{car.name}</h3></div><button type="button" aria-label={`${car.name} 상세 요금 ${expanded?"접기":"보기"}`} aria-expanded={expanded} onClick={()=>setExpanded(v=>!v)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e2e8e2] text-[#4e6358] transition hover:bg-[#f3f6f2]"><Icon name={expanded?"minus":"plus"} size={17}/></button></div>
   <div className="mt-6 flex items-end justify-between gap-2 border-t border-[#edf0eb] pt-5"><div><p className="text-xs font-medium text-[#89938b]">{quoteOnly?"차종·기간별 견적":price!==undefined?`${durationLabel(duration)} 기준 · 참고 요금`:"선택한 시간의 요금 없음"}</p><p className="mt-1 text-[25px] font-black tracking-[-.055em] text-[#1b2929]">{quoteOnly?"전화로 견적 확인":price!==undefined?formatPrice(price):"전화 문의"}</p></div><span className="text-[10px] text-[#9ba39c]">최종 요금은 전화 확인</span></div>
   {expanded&&<div className="mt-4 rounded-[16px] bg-[#f5f7f3] p-4 text-xs leading-7 text-[#65716a]">{quoteOnly?<p>차종과 기간을 알려주시면 전화로 요금을 확인해 드립니다.</p>:durations.map(d=><div key={d.key} className="flex justify-between gap-3 border-b border-[#e5ebe4] py-1.5"><span>{d.label}</span><strong className="text-[#24332c]">{car.referenceRate?.[d.key]!==undefined?formatPrice(car.referenceRate[d.key]!):"전화 문의"}</strong></div>)}<p className="pt-3">최종 요금과 대여 가능 여부는 전화로 확인해 주세요.</p></div>}
   <button type="button" onClick={()=>openChooser({car:car.name,service,source:"vehicle-card"})} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#1b2929] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#AA895B]">이 차 문의하기 <Icon name="arrow-up" size={17}/></button>
  </div>
 </article>;
}
export default function VehicleExplorer({service,quoteOnly=false}:Props){
 const [category,setCategory]=useState<(typeof categories)[number]>("전체");
 const [search,setSearch]=useState("");
 const [duration,setDuration]=useState<DurationKey>("6h");
 const [sort,setSort]=useState("default");
 const results=useMemo(()=>{const filtered=cars.map((car,i)=>({...car,order:i})).filter(c=>(category==="전체"||c.category===category)&&c.name.toLowerCase().includes(search.trim().toLowerCase()));if(!quoteOnly&&sort!=="default")filtered.sort((a,b)=>{const ap=a.referenceRate?.[duration],bp=b.referenceRate?.[duration];if(ap===undefined)return bp===undefined?a.order-b.order:1;if(bp===undefined)return -1;return (sort==="asc"?ap-bp:bp-ap)||a.order-b.order;});return filtered;},[category,search,duration,sort,quoteOnly]);
 return <div data-vehicle-explorer="true">
  <div className="mb-7 flex gap-2 overflow-x-auto pb-2">{categories.map(c=><button key={c} type="button" aria-pressed={category===c} onClick={()=>setCategory(c)} className={`shrink-0 rounded-full px-5 py-3 text-[13px] font-bold transition-colors ${category===c?"bg-[#1b2929] text-white":"border border-[#e0e7df] bg-white text-[#58665d] hover:border-[#AA895B] hover:text-[#AA895B]"}`}>{c}</button>)}</div>
  <div className="mb-8 grid gap-3 rounded-[23px] border border-[#e3e9e3] bg-white p-3 shadow-[0_8px_28px_rgba(20,30,30,.035)] sm:grid-cols-2 sm:p-4 lg:grid-cols-3">
   <label className="flex items-center gap-3 rounded-[14px] bg-[#f5f7f4] px-4 text-[#8a968c]"><Icon name="search" size={20}/><span className="sr-only">차종명 검색</span><input type="search" placeholder="차종명을 입력하세요" className="min-w-0 w-full bg-transparent py-4 text-sm font-medium text-[#24332b] outline-none placeholder:text-[#95a097]" value={search} onChange={e=>setSearch(e.target.value)}/></label>
   {!quoteOnly&&<><label className="flex items-center gap-3 rounded-[14px] bg-[#f5f7f4] px-4 text-[#8a968c]"><Icon name="clock" size={20}/><span className="sr-only">대여 시간 선택</span><select value={duration} onChange={e=>setDuration(e.target.value as DurationKey)} className="w-full bg-transparent py-4 text-sm font-semibold text-[#25382e] outline-none">{durations.map(d=><option value={d.key} key={d.key}>{d.label} 기준</option>)}</select></label><label className="flex items-center gap-3 rounded-[14px] bg-[#f5f7f4] px-4 text-[#8a968c]"><Icon name="filter" size={20}/><span className="sr-only">정렬</span><select value={sort} onChange={e=>setSort(e.target.value)} className="w-full bg-transparent py-4 text-sm font-semibold text-[#25382e] outline-none"><option value="default">기본 순서</option><option value="asc">요금 낮은 순</option><option value="desc">요금 높은 순</option></select></label></>}
  </div>
  <div className="mb-6 flex items-center justify-between gap-3 text-sm"><p className="text-[#758078]">총 <strong className="font-black text-[#AA895B]">{results.length}</strong>개 차종</p><span className="text-xs text-[#9aa49a]">대여 가능 여부는 전화로 확인해 주세요</span></div>
  {results.length?<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{results.map(c=><CarCard key={c.id} car={c} duration={duration} quoteOnly={quoteOnly} service={service}/>)}</div>:<div className="rounded-[25px] border border-[#e3e9e3] bg-white py-20 text-center"><p className="text-sm text-[#758078]">검색한 차종이 없습니다.</p><button type="button" onClick={()=>{setCategory("전체");setSearch("");}} className="mt-5 rounded-full bg-[#1b2929] px-6 py-3 text-sm font-bold text-white">전체 차종 보기</button></div>}
  <p className="mt-7 text-xs leading-7 text-[#869189]">사진은 차종 참고용입니다. 일부 차종의 요금은 참고 가격이며 실제 차량 대여 가능 여부와 최종 요금은 {BRAND.phone}로 확인해 주세요.</p>
 </div>;
}
