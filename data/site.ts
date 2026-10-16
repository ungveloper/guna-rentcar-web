export const site = {
  name: "건아렌트카",
  legalName: "(주)건아렌트카",
  englishName: "GUN-A RENTCAR",
  phoneDisplay: "051-866-1124",
  phoneHref: "tel:0518661124",
  address: "부산광역시 연제구 반송로 68",
  region: "부산광역시 연제구 연산동",
  stationNote: "연산역에서 도보 약 7분",
  experience: "20년",
  fleetCount: "약 50대",
  hoursNote: "연중무휴 운영 · 영업시간 외 차량 인수·반납은 사전 협의",
  pickupNote: "기본 인수·반납 장소는 건아렌트카 주차장입니다. 그 외 픽업·반납은 상담 후 협의 가능합니다.",
  serviceArea: "부산 전 지역 · 김해·양산·창원 등 인근 지역은 협의 가능",
} as const;

/** 헤더·푸터·모바일 메뉴의 단일 출처. 모든 메뉴는 고유한 페이지 URL을 사용합니다. */
export const navigation = [
  { href: "/cars", label: "차량·요금" },
  { href: "/services/short-term", label: "단기렌트" },
  { href: "/services/monthly", label: "월렌트" },
  { href: "/services/long-term", label: "장기렌트" },
  { href: "/services/accident", label: "사고대차" },
  { href: "/events", label: "이벤트" },
  { href: "/guide", label: "이용안내" },
  { href: "/contact", label: "오시는 길" },
] as const;

