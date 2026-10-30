"use client";
import Image from "next/image";
import Link from "next/link";
import {useMemo,useState} from "react";
import {BRAND,cars,categories,durations,durationLabel,formatPrice,type Car,type DurationKey,type ServiceKey} from "../../_lib/site-data";
import {useConsult} from "./consult-provider";
import Icon from "./icon";

type Props={variant?:"home"|"full"|"service";service?:ServiceKey;quoteOnly?:boolean};
function CarCard({car,duration,quoteOnly,service}:{car:Car;duration:DurationKey;quoteOnly:boolean;service?:ServiceKey}){
  const {openChooser}=useConsult();const [expanded,setExpanded]=useState(false);
  const amount=car.referenceRate?.[duration];
  return <article className="car-card">
    <div className={`car-image ${!car.image?"no-car-image":""}`}>{car.image?<Image src={car.image} alt={`${car.name} 차종 참고 이미지`} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"/>:<div className="car-image-empty"><Icon name="car" size={56}/><span>차량 원본 사진 준비 중</span></div>}<span className="car-image-label">{car.image?"차종 참고 이미지":"이미지 준비 중"}</span></div>
    <div className="car-card-body"><div className="car-card-heading"><div><span className="car-type">{car.category}{car.seats?` · ${car.seats}인승`:""}</span><h3>{car.name}</h3></div><span className="car-badge">상담 가능 차종</span></div>
      <div className="car-price-row"><div>{quoteOnly?<><span className="car-price-label">개별 조건별 견적</span><strong className="car-price car-price-quote">전화 견적 문의</strong></>:<><span className="car-price-label">{amount?`${durationLabel(duration)} 기준 · 참고 요금`:"선택 시간 요금 미등록"}</span><strong className="car-price">{amount?formatPrice(amount):"전화 문의"}</strong></>}</div><button type="button" className="car-detail-toggle" aria-label={`${car.name} 요금 정보 ${expanded?"접기":"펼치기"}`} aria-expanded={expanded} onClick={()=>setExpanded(value=>!value)}><Icon name="chevron" size={18}/></button></div>
      {expanded&&<div className="car-rate-panel">{quoteOnly?<p>이 서비스의 대여 요금은 이용 기간과 계약 조건에 따라 개별 상담으로 안내합니다.</p>:<><span className="car-rate-title">참고 시간·기간별 요금</span>{durations.map(d=><div className="car-rate-line" key={d.key}><span>{d.label}</span><strong>{car.referenceRate?.[d.key]?formatPrice(car.referenceRate[d.key]!):"전화 문의"}</strong></div>)}</>}<small>차량 실재고와 최종 요금은 전화 상담으로 확인해 주세요.</small></div>}
      <button className="button car-consult-button" type="button" onClick={()=>openChooser({car:car.name,service,source:"vehicle-card"})}>이 차량 상담하기 <Icon name="arrow-up" size={17}/></button>
    </div>
  </article>;
}
export default function VehicleExplorer({variant="full",service,quoteOnly=false}:Props){
  const [category,setCategory]=useState<(typeof categories)[number]>("전체");
  const [search,setSearch]=useState("");const [duration,setDuration]=useState<DurationKey>("6h");const [sort,setSort]=useState("default");
  const visible=useMemo(()=>{
    const filtered=cars.map((car,index)=>({...car,originalIndex:index})).filter(car=>(category==="전체"||car.category===category)&&car.name.toLocaleLowerCase("ko-KR").includes(search.trim().toLocaleLowerCase("ko-KR")));
    if(sort!=="default"&&!quoteOnly) filtered.sort((a,b)=>{const av=a.referenceRate?.[duration],bv=b.referenceRate?.[duration];if(av===undefined&&bv===undefined)return a.originalIndex-b.originalIndex;if(av===undefined)return 1;if(bv===undefined)return -1;return (sort==="asc"?av-bv:bv-av)||a.originalIndex-b.originalIndex;});
    return variant==="home"?filtered.slice(0,6):filtered;
  },[category,search,duration,sort,quoteOnly,variant]);
  return <div className="explorer">
    <div className="explorer-top"><div className="tabs" role="group" aria-label="차량 카테고리 필터">{categories.map(item=><button type="button" key={item} className={`tab ${category===item?"selected":""}`} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}</div></div>
    {variant!=="home"&&<div className="explorer-tools"><label className="search-box"><Icon name="search" size={20}/><span className="sr-only">차량 모델명 검색</span><input type="search" placeholder="원하는 차량명을 검색해 보세요" value={search} onChange={e=>setSearch(e.target.value)}/></label><div className="explorer-selects">{!quoteOnly&&<label className="select-wrap"><span className="sr-only">요금 기준 시간</span><Icon name="clock" size={17}/><select value={duration} onChange={e=>setDuration(e.target.value as DurationKey)}>{durations.map(item=><option value={item.key} key={item.key}>{item.label} 기준</option>)}</select><Icon name="chevron" size={15}/></label>}{!quoteOnly&&<label className="select-wrap"><span className="sr-only">정렬 기준</span><Icon name="filter" size={17}/><select value={sort} onChange={e=>setSort(e.target.value)}><option value="default">기본 순서</option><option value="asc">요금 낮은 순</option><option value="desc">요금 높은 순</option></select><Icon name="chevron" size={15}/></label>}</div></div>}
    {variant==="home"&&<div className="home-duration"><Icon name="clock" size={15}/> 참고 요금 기준 <label className="home-duration-selector"><span className="sr-only">요금 기준 시간 또는 기간</span><select value={duration} onChange={e=>setDuration(e.target.value as DurationKey)}>{durations.map(item=><option key={item.key} value={item.key}>{item.label}</option>)}</select><Icon name="chevron" size={13}/></label><span className="home-duration-caption">최종 조건은 전화 상담으로 확인</span></div>}
    <div className="results-count"><span>{category==="전체"?"모든 차종":category} <b>{visible.length}</b><span className="muted-count">{variant==="home"?"개 미리보기":"개 차종"}</span></span>{quoteOnly&&<span className="mini-note">서비스별 개별 견적 안내</span>}</div>
    {visible.length?<div className="car-grid">{visible.map(car=><CarCard key={car.id} car={car} duration={duration} quoteOnly={quoteOnly} service={service}/>)}</div>:<div className="empty-state"><Icon name="search" size={28}/><strong>검색 결과가 없습니다.</strong><p>다른 차종명이나 카테고리를 선택해 주세요.</p><button type="button" onClick={()=>{setCategory("전체");setSearch("");}}>필터 초기화</button></div>}
    <p className="pricing-note"><Icon name="info" size={16}/> 차량 사진은 제공된 참고자료 기반의 시안이며, 원본 사진으로 교체 예정입니다. 참고 금액은 제공된 요금표 이미지에서 확인된 차종에 한해 표시합니다. 실제 차량 이용 가능 여부·최종 요금·조건은 {BRAND.phone}로 확인해 주세요.</p>
    {variant==="home"&&<div className="center-action"><Link href="/cars" className="button button-outline">전체 차량 둘러보기 <Icon name="arrow" size={18}/></Link></div>}
  </div>;
}
