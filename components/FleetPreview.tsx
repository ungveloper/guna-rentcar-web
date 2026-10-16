import Image from "next/image";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { Icon } from "@/components/Icon";

/** Main and /cars read the SAME data/vehicles.ts. The full filter + price dialog lives on /cars. */
const picks = ["ray", "avante-cn7", "k5", "gv80"];
const featured = picks.map((id) => vehicles.find((car) => car.id === id)).filter((car) => car !== undefined);

export function FleetPreview() {
  return <section className="fleet-preview section-pad" id="fleet" aria-labelledby="fleet-preview-title">
    <div className="container">
      <div className="section-intro" data-reveal><span className="micro-label">GUN-A / VEHICLE COLLECTION</span>
        <h2 id="fleet-preview-title">차량·요금,<br /><span>모델별로 확인하세요.</span></h2>
        <p>실제 제공된 요금표를 기준으로 차량별 금액을 공개합니다. 전체 {vehicles.length}개 차량의 시간별·기간별 요금은 차량 안내 페이지에서 확인할 수 있습니다.</p>
      </div>
      <div className="fleet-grid fleet-grid--preview">{featured.map((car) => <Link className="fleet-card fleet-preview__card" href="/cars" key={car.id}>
        <div className="fleet-card__visual"><Image src={car.image} alt={car.imageAlt} width={1280} height={853} sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 25vw" /><span className="fleet-card__open"><Icon name="arrow" size={20}/></span></div>
        <div className="fleet-card__content"><div><span className="fleet-card__brand">{car.brand}</span><h3>{car.model}</h3></div><div className="fleet-card__price"><span>1~2일 대여 · 1일 기준</span><strong>{car.rates.days1to2.toLocaleString("ko-KR")}원</strong></div></div>
        <span className="fleet-card__details">전체 대여 요금 확인 <Icon name="arrowRight" size={17}/></span>
      </Link>)}</div>
      <div className="fleet-preview__all"><Link href="/cars" className="pill pill--dark">{vehicles.length}개 차량 모두 보기 <Icon name="arrowRight" size={18}/></Link></div>
    </div>
  </section>;
}
