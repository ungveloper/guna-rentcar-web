/**
 * 건아렌트카 홈페이지 상단 프로모션·이용 안내.
 * - 실제 진행하는 프로모션은 promotions 배열에 등록합니다.
 * - 등록한 카드의 enabled를 false로 바꾸면 게시되지 않습니다.
 * - 허위 할인/기간 표기를 방지하기 위해 증빙된 내용만 등록합니다.
 * - 정적 페이지 특성상 노출 종료는 enabled 변경 후 재배포합니다.
 * - 링크는 /#fleet, /services/short-term 등 사이트 루트 기준 URL로 설정합니다.
 */
export type PromoCard = {
  id: string;
  kind: "promotion" | "guide";
  eyebrow: string;
  title: string;
  description: string;
  finePrint?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  href: `/${string}`;
  actionLabel: string;
  enabled: boolean;
};

/** 실제 이벤트가 확정되면 이 배열에 추가합니다. 첫 번째 카드부터 우선 노출됩니다. */
export const promotions: PromoCard[] = [
  // 예시 형식 (실제 이벤트가 아니므로 노출하지 않음):
  // {
  //   id: "october-event", kind: "promotion", eyebrow: "EVENT · 10월 한정",
  //   title: "공식적으로 확정된 이벤트 제목", description: "검증된 혜택과 조건",
  //   finePrint: "적용 기간/차종/제외 조건", image: "/images/vehicles/ray.webp",
  //   imageAlt: "더뉴레이 차량", href: "/#fleet", actionLabel: "대상 차량 확인",
  //   enabled: false,
  // },
];

/** 자료로 확인된 차종·요금·서비스를 안내하는 상시 콘텐츠입니다. */
export const guideCards: PromoCard[] = [
  {
    id: "weekly-rental",
    kind: "guide",
    eyebrow: "PRICE GUIDE / 01",
    title: "7일 이상 대여,\n1일 35,000원부터",
    description: "일정이 길어질수록 달라지는 차량별 기준 요금을 확인하세요.",
    finePrint: "더뉴모닝·더뉴레이 / 7일 이상 기준 · 1일 요금",
    image: "/images/vehicles/ray.webp",
    imageAlt: "더뉴레이 차량",
    imagePosition: "center center",
    href: "/services/short-term",
    actionLabel: "차량별 요금 보기",
    enabled: true,
  },
  {
    id: "short-rental",
    kind: "guide",
    eyebrow: "SHORT-TERM / 02",
    title: "필요할 때,\n6시간부터 이용",
    description: "짧은 이동에도 기간과 차종에 맞는 요금으로 안내합니다.",
    finePrint: "더뉴모닝·더뉴레이 / 6시간 대여 기준 40,000원",
    image: "/images/vehicles/morning.webp",
    imageAlt: "더뉴모닝 차량",
    imagePosition: "center center",
    href: "/services/short-term",
    actionLabel: "단기 대여 요금 확인",
    enabled: true,
  },
  {
    id: "monthly-rental",
    kind: "guide",
    eyebrow: "MONTHLY & LONG / 03",
    title: "한 달 이상도,\n상담으로 간편하게",
    description: "월렌트와 장기렌트는 이용 기간과 조건에 맞춰 안내합니다.",
    image: "/images/vehicles/k5.webp",
    imageAlt: "더뉴K5 차량",
    imagePosition: "center center",
    href: "/services/long-term",
    actionLabel: "월·장기렌트 알아보기",
    enabled: true,
  },
  {
    id: "accident-replacement",
    kind: "guide",
    eyebrow: "REPLACEMENT / 04",
    title: "차량 수리 중이라면,\n사고대차 상담",
    description: "교통사고나 수리로 차량이 필요한 상황을 전화로 상담해 보세요.",
    image: "/images/vehicles/tucson.webp",
    imageAlt: "현대 투싼 차량",
    imagePosition: "center center",
    href: "/services/accident",
    actionLabel: "사고대차 안내",
    enabled: true,
  },
  {
    id: "visit-location",
    kind: "guide",
    eyebrow: "VISIT US / 05",
    title: "부산 연산역에서,\n도보 약 7분",
    description: "차량 인수·반납은 건아렌트카 주차장에서 진행합니다.",
    finePrint: "영업시간 외 인수·반납은 사전 협의 필요",
    image: "/images/vehicles/grandeur-gn7.webp",
    imageAlt: "그랜저 GN7 차량",
    imagePosition: "center center",
    href: "/#contact",
    actionLabel: "오시는 길 확인",
    enabled: true,
  },
];

export const visiblePromoCards = [
  ...promotions.filter((item) => item.enabled),
  ...guideCards.filter((item) => item.enabled),
];
