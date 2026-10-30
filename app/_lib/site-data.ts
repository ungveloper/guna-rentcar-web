/**
 * PHASE 1 PREVIEW DATA
 * Only source-backed business facts are treated as factual.
 * Image crops come from the user-provided vehicle reference screenshot, NOT verified fleet photography.
 * Prices for eight models are transcribed from that screenshot, and require final owner confirmation.
 * Other models intentionally have no price or image.
 * Replace with verified Firebase published data in phase 2.
 */
export const BRAND = {
  name: "건아렌트카",
  english: "GUNA RENTCAR",
  phone: "051-866-1124",
  tel: "tel:0518661124",
  address: "부산 연제구 반송로 68",
  since: "2006.11",
  color: "#AA895B",
} as const;

export type Category = "경차" | "준중형·중형" | "대형·고급" | "SUV" | "승합차";
export type ServiceKey = "monthly" | "short-term" | "long-term" | "accident";
export type DurationKey = "6h" | "12h" | "1-2d" | "3-6d" | "7d+";
export type Car = {
  id: string;
  name: string;
  category: Category;
  seats?: number;
  image?: string;
  referenceRate?: Partial<Record<DurationKey, number>>;
};

export const durations: { key: DurationKey; label: string }[] = [
  { key: "6h", label: "6시간" },
  { key: "12h", label: "12시간" },
  { key: "1-2d", label: "1~2일 · 1일 요금" },
  { key: "3-6d", label: "3~6일 · 1일 요금" },
  { key: "7d+", label: "7일 이상 · 1일 요금" },
];
export const categories: ("전체" | Category)[] = ["전체", "경차", "준중형·중형", "대형·고급", "SUV", "승합차"];
export const cars: Car[] = [
  { id: "morning", name: "더뉴모닝", category: "경차", image: "/images/cars/morning.webp", referenceRate: { "6h": 40000, "1-2d": 50000, "3-6d": 40000, "7d+": 35000, "12h": 45000 } },
  { id: "ray", name: "더뉴레이", category: "경차", image: "/images/cars/ray.webp", referenceRate: { "6h": 40000, "1-2d": 50000, "3-6d": 40000, "7d+": 35000, "12h": 45000 } },
  { id: "avante", name: "아반떼 CN7", category: "준중형·중형", image: "/images/cars/avante.webp", referenceRate: { "6h": 50000, "1-2d": 70000, "3-6d": 60000, "7d+": 50000, "12h": 60000 } },
  { id: "k3", name: "더뉴K3", category: "준중형·중형", image: "/images/cars/k3.webp", referenceRate: { "6h": 50000, "1-2d": 70000, "3-6d": 60000, "7d+": 50000, "12h": 60000 } },
  { id: "k5", name: "더뉴K5", category: "준중형·중형", image: "/images/cars/k5.webp", referenceRate: { "6h": 60000, "1-2d": 80000, "3-6d": 70000, "7d+": 60000, "12h": 70000 } },
  { id: "malibu", name: "더뉴말리부", category: "준중형·중형", image: "/images/cars/malibu.webp", referenceRate: { "6h": 60000, "1-2d": 80000, "3-6d": 70000, "7d+": 60000, "12h": 70000 } },
  { id: "sonata", name: "쏘나타 DN8", category: "준중형·중형", image: "/images/cars/sonata.webp", referenceRate: { "6h": 60000, "1-2d": 80000, "3-6d": 70000, "7d+": 60000, "12h": 70000 } },
  { id: "sonata-edge", name: "쏘나타 DN8 디엣지", category: "준중형·중형", image: "/images/cars/sonata-edge.webp", referenceRate: { "6h": 70000, "1-2d": 90000, "3-6d": 80000, "7d+": 70000, "12h": 80000 } },
  { id: "grandeur", name: "그랜저 GN7", category: "대형·고급" },
  { id: "g80", name: "G80", category: "대형·고급" },
  { id: "seltos", name: "셀토스", category: "SUV" },
  { id: "tucson", name: "투싼", category: "SUV" },
  { id: "gv80", name: "GV80", category: "SUV" },
  { id: "carnival", name: "더뉴카니발 9인승", category: "승합차", seats: 9 },
  { id: "staria-9", name: "스타리아 9인승", category: "승합차", seats: 9 },
  { id: "staria-11", name: "스타리아 11인승", category: "승합차", seats: 11 },
];

export type Service = {
  key: ServiceKey;
  title: string;
  kicker: string;
  subtitle: string;
  summary: string;
  recommend: string[];
  benefits: { title: string; text: string }[];
  steps: { title: string; detail: string }[];
};
export const services: Service[] = [
  {
    key: "monthly", title: "월렌트", kicker: "MONTHLY RENTAL",
    subtitle: "한 달 동안 쓸 차가 필요하신가요?",
    summary: "출퇴근용으로 한 달만 차가 필요할 때도 있죠. 원하시는 차종과 기간을 알려주시면 가능한 조건을 확인해 드립니다.",
    recommend: ["한 달 정도 차를 이용해야 할 때", "출퇴근이나 업무에 쓸 차가 필요할 때", "차를 구매하기 전에 먼저 타보고 싶을 때"],
    benefits: [
      { title: "인수·반납 일정 조율", text: "언제 차를 받고 반납할지 전화로 상의해 주세요." },
      { title: "차량 청결 관리", text: "차량 상태를 점검하고 실내도 꾸준히 청소합니다." },
      { title: "차종·기간별 견적", text: "월 대여료와 보증금은 차종과 이용 기간에 따라 달라집니다." },
    ],
    steps: [ { title: "상담 문의", detail: "원하는 차와 이용 기간, 지역을 알려주세요." }, { title: "차량·조건 확인", detail: "해당 기간에 빌릴 수 있는 차와 요금을 확인합니다." }, { title: "인수 일정 정하기", detail: "장소와 시간을 정한 뒤 차량을 받으시면 됩니다." } ],
  },
  {
    key: "short-term", title: "단기렌트", kicker: "SHORT-TERM RENTAL",
    subtitle: "몇 시간만 필요해도 괜찮아요.",
    summary: "부산 여행이나 출장처럼 잠깐 차가 필요할 때 이용하는 단기렌트입니다. 일부 차종은 6시간 기준 요금부터 확인할 수 있습니다.",
    recommend: ["부산 여행이나 주말 나들이를 갈 때", "출장으로 하루나 며칠 차가 필요할 때", "몇 시간만 차를 빌리고 싶을 때"],
    benefits: [ { title: "경차부터 승합차까지", text: "전체 차량 목록에서 필요한 차종을 찾아보세요." }, { title: "전화로 가능 여부 확인", text: "이용 날짜와 차종을 알려주시면 가능 여부와 실제 요금을 확인해 드립니다." }, { title: "일반 단기렌트 보증금 없음", text: "일반적인 단기 대여에는 보증금이 없습니다. 단, 예약 전 적용 조건은 확인해 주세요." } ],
    steps: [ { title: "차종과 요금 보기", detail: "원하는 차종과 이용 시간에 맞춰 참고 요금을 살펴보세요." }, { title: "전화 상담", detail: "전화로 날짜와 대여 가능 차량, 최종 요금을 확인합니다." }, { title: "차량 인수", detail: "미리 정한 시간과 장소에서 차량을 받습니다." } ],
  },
  {
    key: "long-term", title: "장기렌트", kicker: "LONG-TERM RENTAL",
    subtitle: "몇 달 이상 필요하다면, 장기렌트.",
    summary: "업무용 차량이나 몇 달 이상 탈 차를 찾고 계신가요? 차종과 계약 기간에 따라 견적이 달라져 전화로 안내해 드립니다.",
    recommend: ["몇 달 이상 차량이 필요할 때", "업무용·법인용 차량을 알아볼 때", "계약 기간과 보증금을 미리 확인하고 싶을 때"],
    benefits: [ { title: "기간에 맞는 견적", text: "차종과 이용 기간을 알려주시면 요금을 확인해 드립니다." }, { title: "차종 선택", text: "등록된 차종을 살펴본 뒤 원하는 차량을 말씀해 주세요." }, { title: "인수·반납 일정", text: "차량을 받는 곳과 반납하는 시간도 미리 상의할 수 있습니다." } ],
    steps: [ { title: "기간·차종 알려주기", detail: "얼마나 오래, 어떤 용도로 차가 필요한지 알려주세요." }, { title: "견적 확인", detail: "대여료와 보증금 등 계약 조건을 확인합니다." }, { title: "차량 인수", detail: "계약 내용을 확인한 뒤 인수 일정을 정합니다." } ],
  },
  {
    key: "accident", title: "사고대차", kicker: "ACCIDENT REPLACEMENT",
    subtitle: "사고로 차를 못 쓴다면 연락 주세요.",
    summary: "사고로 내 차를 쓸 수 없을 때 대체 차량을 안내합니다. 보험 처리 상황에 따라 조건이 달라지니 먼저 전화로 확인해 주세요.",
    recommend: ["사고로 당장 차를 쓸 수 없을 때", "보험 처리 기간에 대체 차량이 필요할 때", "사고대차를 어떻게 신청해야 할지 모를 때"],
    benefits: [ { title: "사고대차·보험대차 상담", text: "사고 상황을 알려주시면 대차 가능 여부부터 확인해 드립니다." }, { title: "24시간 전화 상담", text: "사고·고장 관련 문의는 시간에 관계없이 전화로 받습니다." }, { title: "보험 조건부터 확인", text: "보험 조건과 대여 가능 여부를 확인한 뒤 차종을 안내합니다." } ],
    steps: [ { title: "사고 상황 알려주기", detail: "사고 상황과 보험 처리 여부, 현재 위치를 말씀해 주세요." }, { title: "보험·대차 조건 확인", detail: "보험 조건을 확인하고 빌릴 수 있는 차량을 안내합니다." }, { title: "차량 받을 곳 정하기", detail: "차량을 받을 수 있는 시간과 장소를 상의합니다." } ],
  },
];

export type FaqCategory = "대여 자격" | "요금·보증금" | "보험·사고" | "인수·반납" | "기간·변경";
export type Faq = { id: string; category: FaqCategory; question: string; answer: string; services: ServiceKey[]; home?: boolean };
export const faqs: Faq[] = [
  { id:"license",category:"대여 자격",question:"몇 살부터 차를 빌릴 수 있나요?",answer:"승용차는 만 21세 이상, 면허 취득 후 1년 이상이 기본 조건입니다. 승합차는 만 21세 이상에 운전경력 2년 이상이 필요합니다. 경력이 부족하다면 전화로 먼저 문의해 주세요. 다만 대여가 가능하다고 확답드리기는 어렵습니다.",services:["monthly","short-term","long-term","accident"],home:true },
  { id:"insurance",category:"보험·사고",question:"완전자차보험이 요금에 포함돼 있나요?",answer:"네. 기본 대여료에 완전자차보험이 포함돼 있습니다. 다만 사고가 나면 조건에 따라 자기부담금 20만 원 또는 50만 원이 발생할 수 있습니다. 수리 기간에는 1일 대여료의 50%에 해당하는 휴차료가 청구될 수 있고, 음주·무면허 운전 등은 보상에서 제외될 수 있습니다. 자세한 조건은 계약 전 꼭 확인해 주세요.",services:["monthly","short-term","long-term","accident"],home:true },
  { id:"price",category:"요금·보증금",question:"홈페이지에 나온 금액이 최종 요금인가요?",answer:"홈페이지에는 일부 단기렌트 차량의 참고 요금만 나와 있습니다. 실제 금액은 날짜와 차종, 대여 조건에 따라 달라질 수 있습니다. 월렌트·장기렌트·사고대차 요금은 전화로 문의해 주세요.",services:["monthly","short-term","long-term","accident"],home:true },
  { id:"delivery",category:"인수·반납",question:"원하는 곳에서 차를 받고 반납할 수 있나요?",answer:"사무실 방문 외에 지정 장소로 차량을 가져다드리거나 회수하는 방법도 상담할 수 있습니다. 지역과 시간에 따라 가능 여부, 추가 비용이 달라지니 미리 전화해 주세요.",services:["monthly","short-term","long-term","accident"],home:true },
  { id:"availability",category:"인수·반납",question:"홈페이지에 있는 차는 바로 빌릴 수 있나요?",answer:"홈페이지에 보이는 차종이 모두 당장 대여 가능한 것은 아닙니다. 실시간 예약 현황을 표시하지 않으니 원하시는 날짜와 차종을 전화로 확인해 주세요.",services:["monthly","short-term","long-term","accident"],home:true },
  { id:"cancellation",category:"기간·변경",question:"날짜를 바꾸거나 취소할 수 있나요?",answer:"일반적으로 차량 인수 전에는 무료 변경·취소를 협의할 수 있습니다. 다만 계약에 따라 조건이 다를 수 있으니 예약하실 때 확인해 주세요.",services:["monthly","short-term","long-term"],home:true },
  { id:"deposit",category:"요금·보증금",question:"보증금이 필요한가요?",answer:"일반 단기렌트는 보증금이 없습니다. 월렌트·장기렌트는 계약 조건에 따라 보증금이 필요할 수 있으니 전화로 확인해 주세요.",services:["monthly","short-term","long-term"] },
  { id:"driver",category:"대여 자격",question:"운전자를 한 명 더 등록해도 되나요?",answer:"네. 추가 운전자 등록은 무료입니다. 다만 추가 운전자도 대여 자격을 충족해야 하므로 인수 전에 필요한 사항을 확인해 주세요.",services:["monthly","short-term","long-term"] },
  { id:"fuel",category:"인수·반납",question:"기름은 얼마나 채워서 반납하나요?",answer:"차를 받을 때의 연료량만큼 채워서 반납해 주세요. 자세한 반납 방법은 계약 내용을 확인하시면 됩니다.",services:["monthly","short-term","long-term"] },
  { id:"breakdown",category:"보험·사고",question:"운전 중 사고가 나거나 차가 고장 나면요?",answer:"우선 051-866-1124로 전화해 주세요. 24시간 상담을 받고 있으며, 상황에 따라 보험사 긴급출동이나 대체 차량 이용 방법을 안내해 드립니다.",services:["monthly","short-term","long-term","accident"] },
  { id:"accident",category:"보험·사고",question:"사고대차와 보험대차는 어떻게 다른가요?",answer:"홈페이지에서는 사고대차 메뉴 하나로 안내하고 있습니다. 실제 이용 가능 여부는 사고 경위와 보험 처리 조건에 따라 달라지니 전화로 문의해 주세요.",services:["accident"] },
  { id:"term",category:"기간·변경",question:"차를 더 오래 쓰고 싶으면 연장할 수 있나요?",answer:"연장은 차량 예약 상황과 계약 조건에 따라 달라집니다. 기간을 늘려야 한다면 미리 전화해 주세요.",services:["monthly","short-term","long-term"] },
];

/**
 * Published event rules for the first website release.
 * `target: "all"` appears on every public page.
 * `target: "accident"` is shown ONLY on /services/accident alongside common events.
 * Dates are inclusive, interpreted in Asia/Seoul (KST).
 * Pricing details, stacking and eligibility still require telephone confirmation.
 */
export type EventItem = {
  id: string;
  title: string;
  benefitGuide: string;
  startDate: string;
  endDate: string;
  isEnabled: boolean;
  target: "all" | "accident";
};
export const events: EventItem[] = [
  {
    id: "prelaunch-5000",
    title: "홈페이지 오픈 전, 전 차량 5,000원 할인",
    benefitGuide:
      "2026년 11월 1일~12월 31일, 전 차량 5,000원 할인 이벤트를 진행합니다. 적용 기준과 다른 혜택의 중복 여부, 최종 금액은 예약 전에 전화로 확인해 주세요.",
    startDate: "2026-11-01",
    endDate: "2026-12-31",
    isEnabled: true,
    target: "all",
  },
  {
    id: "accident-fuel-10000",
    title: "사고대차 직접 문의 고객, 유류비 하루 10,000원 지원",
    benefitGuide:
      "2026년 11월 1일~12월 31일, 사고대차를 건아렌트카에 직접 문의하시는 고객에게 1일 유류비 10,000원 지원 혜택을 안내합니다. 지원 대상과 지급 방식, 적용 일수, 보험 조건 및 5,000원 할인과의 중복 여부는 전화로 확인해 주세요.",
    startDate: "2026-11-01",
    endDate: "2026-12-31",
    isEnabled: true,
    target: "accident",
  },
];

export const reviewPlaceholders = ["차량 청결", "친절한 상담", "유연한 일정", "차량 상태", "재방문 경험", "이용 편의성"];

export const formatPrice = (value: number) => `${new Intl.NumberFormat("ko-KR").format(value)}원~`;
export const durationLabel = (duration: DurationKey) => durations.find((item) => item.key === duration)?.label ?? "6시간";
export const getService = (key: string) => services.find((item) => item.key === key);
