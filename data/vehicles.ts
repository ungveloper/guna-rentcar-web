import type { Vehicle, VehicleCategory, RentalRates } from "@/types/content";

/**
 * 요금 출처: 사용자 제공 "건아렌트카 이용 요금 안내" PDF (4쪽).
 * 이미지 출처: 사용자가 제공한 아카이브(2).zip (모델별 15개 WebP).
 * 사진은 제조사/차량 홍보 이미지로, 실제 대여 차량의 색상·연식·트림과 다를 수 있습니다.
 * 카니발/스타리아 시간별 요금은 원본에 없어 정의하지 않습니다.
 */
function car(id: string, brand: string, model: string, category: VehicleCategory, rates: RentalRates, extra?: Partial<Vehicle>): Vehicle {
  return { id, brand, model, category, rates, image: `/images/vehicles/${id}.webp`, imageAlt: `${model} 차량 소개 이미지`, ...extra };
}

export const vehicles: Vehicle[] = [
  car("morning", "기아", "더뉴모닝", "compact", { hours6: 40000, hours12: 45000, days1to2: 50000, days3to6: 40000, days7plus: 35000 }, { featured: true }),
  car("ray", "기아", "더뉴레이", "compact", { hours6: 40000, hours12: 45000, days1to2: 50000, days3to6: 40000, days7plus: 35000 }),
  car("avante-cn7", "현대", "아반떼 CN7", "compact", { hours6: 50000, hours12: 60000, days1to2: 70000, days3to6: 60000, days7plus: 50000 }, { featured: true }),
  car("k3", "기아", "더뉴K3", "compact", { hours6: 50000, hours12: 60000, days1to2: 70000, days3to6: 60000, days7plus: 50000 }),
  car("k5", "기아", "더뉴K5", "sedan", { hours6: 60000, hours12: 70000, days1to2: 80000, days3to6: 70000, days7plus: 60000 }, { featured: true }),
  car("malibu", "쉐보레", "더뉴말리부", "sedan", { hours6: 60000, hours12: 70000, days1to2: 80000, days3to6: 70000, days7plus: 60000 }),
  car("sonata-dn8", "현대", "쏘나타 DN8", "sedan", { hours6: 60000, hours12: 70000, days1to2: 80000, days3to6: 70000, days7plus: 60000 }),
  car("sonata-edge", "현대", "쏘나타 DN8 디엣지", "sedan", { hours6: 70000, hours12: 80000, days1to2: 90000, days3to6: 80000, days7plus: 70000 }),
  car("grandeur-gn7", "현대", "그랜저 GN7", "premium", { hours6: 130000, hours12: 150000, days1to2: 170000, days3to6: 140000, days7plus: 110000 }),
  car("g80", "제네시스", "G80", "premium", { hours6: 150000, hours12: 200000, days1to2: 250000, days3to6: 200000, days7plus: 150000 }, { featured: true }),
  car("seltos", "기아", "셀토스", "suv", { hours6: 60000, hours12: 70000, days1to2: 80000, days3to6: 70000, days7plus: 60000 }),
  car("tucson", "현대", "투싼", "suv", { hours6: 90000, hours12: 100000, days1to2: 120000, days3to6: 100000, days7plus: 80000 }, { featured: true }),
  car("gv80", "제네시스", "GV80", "suv", { hours6: 250000, hours12: 300000, days1to2: 350000, days3to6: 300000, days7plus: 250000 }),
  car("carnival", "기아", "더뉴카니발 9인승", "van", { days1to2: 150000, days3to6: 140000, days7plus: 120000 }, { seats: "9인승", featured: true }),
  car("staria", "현대", "스타리아 9인승·11인승", "van", { days1to2: 150000, days3to6: 140000, days7plus: 120000 }, { seats: "9인승·11인승" }),
];

export const categoryOptions: { value: "all" | VehicleCategory; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "compact", label: "경차·준중형" },
  { value: "sedan", label: "중형" },
  { value: "premium", label: "대형·프리미엄" },
  { value: "suv", label: "SUV" },
  { value: "van", label: "승합·RV" },
];
