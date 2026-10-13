import type { Vehicle } from "@/types/content";

/**
 * 승인된 실제 보유 모델과 요금만 여기에 추가하세요.
 * 제조사 공식 사진은 상업적 홈페이지 사용 권한을 확인한 뒤
 * public/images/vehicles/ 아래에 저장하세요.
 *
 * 차량 한 건 예시(실제 데이터가 아니므로 배열에 등록하지 않음):
 * {
 *   id: "unique-id", brand: "현대", model: "모델명", category: "sedan",
 *   modelYear: "2026", image: "/images/vehicles/model.webp",
 *   imageAlt: "2026년식 차량 정면 3/4 이미지", dailyPriceFromKRW: 50000,
 *   priceUnit: "1일", priceBasis: "실제 요금 기준을 기재", insuranceNote: "실제 조건"
 * }
 */
export const vehicles: Vehicle[] = [];

export const categoryOptions = [
  { value: "all", label: "전체 차량" },
  { value: "compact", label: "경차·준중형" },
  { value: "sedan", label: "중형·대형" },
  { value: "suv", label: "SUV" },
  { value: "van", label: "승합·RV" },
  { value: "other", label: "기타" },
] as const;
