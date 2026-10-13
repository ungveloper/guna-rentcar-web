"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { categoryOptions, vehicles } from "@/data/vehicles";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";
import type { Vehicle, VehicleCategory } from "@/types/content";

const categoryName: Record<VehicleCategory, string> = {
  compact: "경차·준중형", sedan: "중형·대형", suv: "SUV", van: "승합·RV", other: "기타",
};
const previewCategories = [
  { name: "세단", english: "SEDAN", image: "/images/hero/sedan-concept.svg" },
  { name: "SUV", english: "SPORT UTILITY", image: "/images/hero/suv-concept.svg" },
  { name: "승합·RV", english: "MULTI PURPOSE", image: "/images/hero/van-concept.svg" },
];

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const price = vehicle.dailyPriceFromKRW;
  return (
    <article className="vehicle-card">
      <div className="vehicle-card__media">
        <span className="vehicle-card__category">{categoryName[vehicle.category]}</span>
        <Image src={vehicle.image} alt={vehicle.imageAlt} width={720} height={440} sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw" />
      </div>
      <div className="vehicle-card__body">
        <span className="eyebrow muted">{vehicle.brand}{vehicle.modelYear ? ` · ${vehicle.modelYear}년형` : ""}</span>
        <h3>{vehicle.model}{vehicle.trim ? ` ${vehicle.trim}` : ""}</h3>
        <div className="vehicle-card__specs">
          {vehicle.seats ? <span>{vehicle.seats}인승</span> : null}
          {vehicle.fuel ? <span>{vehicle.fuel}</span> : null}
        </div>
        <div className="vehicle-card__bottom">
          <div className="vehicle-card__price">
            <small>{price === undefined ? "대여 요금" : "기준 대여 요금"}</small>
            <strong>{price === undefined ? "전화 문의" : `${price.toLocaleString("ko-KR")}원`}</strong>
            {price !== undefined ? <small>{vehicle.priceUnit || "적용 단위 확인"}</small> : null}
          </div>
          <PhoneLink className="circle-link" placement="fleet" vehicleId={vehicle.id} aria-label={`${vehicle.model} 전화 문의`}><Icon name="arrow" size={22}/></PhoneLink>
        </div>
        {vehicle.priceBasis ? <p className="vehicle-card__note">{vehicle.priceBasis}</p> : null}
        {vehicle.insuranceNote ? <p className="vehicle-card__note">{vehicle.insuranceNote}</p> : null}
      </div>
    </article>
  );
}

export function Fleet() {
  const [activeCategory, setActiveCategory] = useState<(typeof categoryOptions)[number]["value"]>("all");
  const filtered = useMemo(() => vehicles.filter((v) => activeCategory === "all" || v.category === activeCategory), [activeCategory]);

  return (
    <section className="section fleet-section" id="fleet" aria-labelledby="fleet-title">
      <div className="container">
        <div className="section-header fleet-header">
          <div><span className="eyebrow"><span className="eyebrow-line"/> OUR FLEET</span><h2 id="fleet-title">당신의 일정에 맞는<br/><em>차량을 만나보세요.</em></h2></div>
          <p>다양한 렌터카 선택지를 살펴보고, 원하는 차량의 대여 조건과 기준 요금을 확인해 보세요.</p>
        </div>
        {vehicles.length > 0 ? (
          <>
            <div className="category-filters" role="group" aria-label="차급별 차량 필터">
              {categoryOptions.filter((opt) => opt.value === "all" || vehicles.some((v) => v.category === opt.value)).map((opt) => (
                <button key={opt.value} type="button" className={activeCategory === opt.value ? "is-active" : ""} aria-pressed={activeCategory === opt.value} onClick={() => setActiveCategory(opt.value)}>{opt.label}</button>
              ))}
            </div>
            <div className="vehicle-grid" aria-live="polite">
              {filtered.length ? filtered.map((v) => <VehicleCard key={v.id} vehicle={v}/>) : <p className="empty-message">선택한 차급에 등록된 차량이 없습니다.</p>}
            </div>
          </>
        ) : (
          <>
            <div className="fleet-notice"><Icon name="check" size={19} /><p><strong>실제 보유 차량·기준 요금표 업데이트 준비 중</strong><span>아래 이미지는 차량 유형을 설명하는 콘셉트 일러스트입니다. 실제 차종·연식 및 요금은 전화로 확인해 주세요.</span></p></div>
            <div className="vehicle-grid vehicle-grid--preview">
              {previewCategories.map((item, index) => <article className="vehicle-card vehicle-card--preview" key={item.name}>
                <div className="vehicle-card__media"><span className="vehicle-card__category">0{index + 1} / CONCEPT</span><Image src={item.image} alt={`${item.name} 차급을 표현한 콘셉트 일러스트. 실제 보유 모델 이미지가 아닙니다.`} width={720} height={440} sizes="(max-width: 720px) 100vw, 33vw" /></div>
                <div className="vehicle-card__body"><span className="eyebrow muted">{item.english}</span><h3>{item.name}</h3><div className="vehicle-card__bottom"><div className="vehicle-card__price"><small>실제 차종 및 기준 요금</small><strong>전화 문의</strong></div><PhoneLink className="circle-link" placement="fleet_preview" aria-label={`${item.name} 차량 전화 문의`}><Icon name="arrow" size={22}/></PhoneLink></div></div>
              </article>)}
            </div>
          </>
        )}
        <p className="price-disclaimer">※ 차량 이용 가능 여부와 요금은 대여일, 기간, 보험 등 조건에 따라 달라질 수 있습니다. 정확한 적용 조건은 전화 상담 시 확인해 주세요.</p>
      </div>
    </section>
  );
}
