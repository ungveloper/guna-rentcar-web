"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { categoryOptions, vehicles } from "@/data/vehicles";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";
import type { Vehicle, VehicleCategory } from "@/types/content";

const fmt = (n: number) => `${n.toLocaleString("ko-KR")}원`;

const kinds: Record<VehicleCategory, string> = {
  compact: "COMPACT", sedan: "SEDAN", premium: "PREMIUM", suv: "SUV", van: "VAN & RV",
};

function Rate({ label, price, unit }: { label: string; price?: number; unit?: string }) {
  return <div className="rate-line"><span>{label}</span><strong>{price === undefined ? "별도 문의" : fmt(price)}{unit ? <small>{unit}</small> : null}</strong></div>;
}

function FleetCard({ vehicle, index, onOpen }: { vehicle: Vehicle; index: number; onOpen: (v: Vehicle) => void }) {
  return <article className="fleet-card">
    <div className={`fleet-card__image fleet-card__image--${vehicle.category}`}>
      <span className="fleet-card__number">{String(index + 1).padStart(2, "0")}</span>
      <span className="fleet-card__type">{kinds[vehicle.category]}</span>
      <Image src={vehicle.image} alt={vehicle.imageAlt} width={780} height={450} sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw" />
      <span className="fleet-card__sample">차급 참고 이미지</span>
    </div>
    <div className="fleet-card__details">
      <span className="fleet-card__brand">{vehicle.brand} {vehicle.seats ? `· ${vehicle.seats}` : ""}</span>
      <h3>{vehicle.model}</h3>
      <div className="fleet-card__footer">
        <div><span>1~2일 대여 시 · 1일 요금</span><strong>{fmt(vehicle.rates.days1to2)}</strong></div>
        <button className="fleet-card__view" type="button" onClick={() => onOpen(vehicle)} aria-label={`${vehicle.model} 전체 요금 보기`}><Icon name="arrow" size={23}/></button>
      </div>
    </div>
  </article>;
}

export function Fleet() {
  const [active, setActive] = useState<"all" | VehicleCategory>("all");
  const [selected, setSelected] = useState<Vehicle | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const filtered = useMemo(() => vehicles.filter((v) => active === "all" || v.category === active), [active]);

  function open(v: Vehicle) { setSelected(v); dialogRef.current?.showModal(); }
  function close() { dialogRef.current?.close(); setSelected(null); }

  return <section className="fleet-section section-pad" id="fleet" aria-labelledby="fleet-title">
    <div className="container">
      <div className="section-head section-head--split">
        <div><span className="kicker">OUR FLEET / 차량 안내</span><h2 id="fleet-title">당신의 다음 여정에<br/><i>어울리는 한 대.</i></h2></div>
        <p>경차부터 프리미엄 세단과 SUV, 승합차까지.<br/>15개 차량 모델의 실제 안내 요금을 확인해 보세요.</p>
      </div>
      <div className="fleet-toolbar"><div className="fleet-filters" role="group" aria-label="차량 종류 선택">
        {categoryOptions.map((option) => <button key={option.value} type="button" aria-pressed={active === option.value} className={active === option.value ? "selected" : ""} onClick={() => setActive(option.value)}>{option.label}</button>)}
      </div><span className="fleet-count">{filtered.length.toString().padStart(2,"0")} VEHICLES</span></div>
      <div className="fleet-grid">{filtered.map((v, i) => <FleetCard vehicle={v} index={i} key={v.id} onOpen={open}/>)}</div>
      <div className="fleet-note"><Icon name="check" size={17}/><p>표시 요금은 첨부된 건아렌트카 요금표의 기준 안내 금액입니다. 1~2일·3~6일·7일 이상 구간의 일일 요금과 6·12시간 대여 요금은 차량 상세에서 확인하세요. 실제 이용 가능 여부, 보험 등 세부 조건은 전화로 확인해 주세요. 차량 이미지는 차급 설명용이며 실제 모델 사진이 아닙니다.</p></div>
    </div>
    <dialog ref={dialogRef} className="rate-dialog" onClose={()=>setSelected(null)} onClick={(e)=>{if(e.target===dialogRef.current)close();}} aria-label={selected ? `${selected.model} 대여 요금` : "차량 대여 요금"}>
      {selected && <div className="rate-dialog__content">
        <div className="rate-dialog__top"><span className="kicker">RENTAL PRICE GUIDE</span><button type="button" onClick={close} aria-label="닫기"><Icon name="close" size={22}/></button></div>
        <div className="rate-dialog__visual"><Image src={selected.image} alt={selected.imageAlt} width={850} height={460}/></div>
        <div className="rate-dialog__body"><span className="rate-dialog__brand">{selected.brand} / {kinds[selected.category]}</span><h3>{selected.model}</h3>
        <p>기간에 따른 차량별 대여 요금을 확인하세요. 일일 요금은 해당 대여 기간의 1일 기준 금액입니다.</p>
        <div className="rate-group"><strong>시간별 대여 요금</strong><Rate label="6시간" price={selected.rates.hours6}/><Rate label="12시간" price={selected.rates.hours12}/></div>
        <div className="rate-group"><strong>대여기간별 1일 요금</strong><Rate label="1~2일" price={selected.rates.days1to2} unit=" / 1일"/><Rate label="3~6일" price={selected.rates.days3to6} unit=" / 1일"/><Rate label="7일 이상" price={selected.rates.days7plus} unit=" / 1일"/></div>
        <PhoneLink className="rate-dialog__call" placement="rate_dialog" vehicleId={selected.id} withIcon>{selected.model} 전화 문의 <Icon name="arrow" size={19}/></PhoneLink>
        <small>차량 이미지는 차급 참고용입니다. 실제 연식·트림·보험 및 적용 요금은 전화 상담 시 확인해 주세요.</small>
        </div>
      </div>}
    </dialog>
  </section>;
}
