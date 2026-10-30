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
    subtitle: "한 달의 이동도, 더 편안하게.",
    summary: "출퇴근부터 장기간의 일상까지. 필요한 기간과 상황을 듣고 적합한 차량과 조건을 함께 안내합니다.",
    recommend: ["한 달 단위로 차량이 필요한 분", "출퇴근이나 업무용 차량을 찾는 분", "차량 구매 전에 일정 기간 이용하고 싶은 분"],
    benefits: [
      { title: "일정에 맞춘 상담", text: "인수·반납 일정과 이용 기간을 개별적으로 조율합니다." },
      { title: "청결한 차량 관리", text: "고객의 편안한 이동을 위해 차량 상태와 청결을 중요하게 생각합니다." },
      { title: "조건별 맞춤 견적", text: "월렌트 요금 및 보증금 유무는 차량과 계약 조건에 따라 안내합니다." },
    ],
    steps: [ { title: "상담 문의", detail: "희망 차종과 기간, 이용 지역을 알려주세요." }, { title: "차량·조건 확인", detail: "이용 가능 차량과 월렌트 조건을 안내합니다." }, { title: "인수 일정 협의", detail: "장소 및 일정 확정 후 차량을 인수합니다." } ],
  },
  {
    key: "short-term", title: "단기렌트", kicker: "SHORT-TERM RENTAL",
    subtitle: "필요한 순간, 가볍게 떠나세요.",
    summary: "여행, 출장, 갑작스러운 일정까지. 6시간부터 확인 가능한 시간별 참고 요금과 다양한 차종을 둘러보세요.",
    recommend: ["부산 여행이나 주말 나들이가 계획된 분", "하루 또는 며칠간 업무 차량이 필요한 분", "짧은 기간 운전할 차량을 찾는 분"],
    benefits: [ { title: "다양한 차종", text: "경차부터 승합차까지 목적에 맞게 확인할 수 있습니다." }, { title: "간편한 전화 상담", text: "최종 요금과 이용 가능 여부를 빠르게 확인해 드립니다." }, { title: "일반 단기 보증금 없음", text: "통상적인 단기렌트에는 보증금이 없습니다. 최종 조건은 상담 시 확인합니다." } ],
    steps: [ { title: "차량 탐색", detail: "이용 시간과 차종별 참고 요금을 확인합니다." }, { title: "전화 상담", detail: "실제 이용 날짜, 가능 차량 및 최종 금액을 확인합니다." }, { title: "차량 인수", detail: "협의된 장소와 시간에 차량을 인수합니다." } ],
  },
  {
    key: "long-term", title: "장기렌트", kicker: "LONG-TERM RENTAL",
    subtitle: "오래 함께할 차량, 꼼꼼하게 선택하세요.",
    summary: "업무와 생활의 변화에 맞춘 장기 이용을 안내합니다. 이용 목적과 기간에 적합한 조건은 전화로 상담해 주세요.",
    recommend: ["여러 달 이상 차량 이용을 계획한 분", "업무·법인 차량을 찾는 분", "상황에 맞춰 장기 운용 조건을 상담받고 싶은 분"],
    benefits: [ { title: "개별 조건 안내", text: "이용 기간과 차종에 따라 견적을 상담합니다." }, { title: "폭넓은 차량 선택", text: "전체 등록 차종을 둘러보고 희망 차량을 상담할 수 있습니다." }, { title: "운행 일정 협의", text: "인수와 반납 방법은 사전 상담을 통해 확인합니다." } ],
    steps: [ { title: "이용 계획 공유", detail: "기간, 차량, 운행 목적을 상담합니다." }, { title: "맞춤 견적 확인", detail: "장기렌트 금액과 보증금 등 조건을 개별 확인합니다." }, { title: "차량 인수", detail: "계약 및 인수 일정을 협의합니다." } ],
  },
  {
    key: "accident", title: "사고대차", kicker: "ACCIDENT REPLACEMENT",
    subtitle: "갑작스러운 상황에도, 이동은 이어지도록.",
    summary: "사고대차와 보험대차를 함께 안내합니다. 사고 처리 상황과 보험 조건을 확인하여 가능한 대차 방법을 상담합니다.",
    recommend: ["사고로 차량 이용이 어려워진 분", "보험 처리 중 대체 차량이 필요한 분", "사고대차 절차를 잘 몰라 상담이 필요한 분"],
    benefits: [ { title: "사고·보험대차 통합 상담", text: "상황을 듣고 대차 가능 여부와 절차를 안내합니다." }, { title: "24시간 전화 상담", text: "사고·고장 관련 전화 상담을 연중무휴 지원합니다." }, { title: "조건에 맞춘 차량 안내", text: "보험 및 대차 가능 조건을 확인해 차량을 안내합니다." } ],
    steps: [ { title: "상황 상담", detail: "사고 내용, 보험 처리 현황 및 위치를 알려주세요." }, { title: "대차 조건 확인", detail: "보험 조건, 대여 가능 여부와 차량을 안내합니다." }, { title: "인수 방법 협의", detail: "가능한 인수 시간과 장소를 협의합니다." } ],
  },
];

export type FaqCategory = "대여 자격" | "요금·보증금" | "보험·사고" | "인수·반납" | "기간·변경";
export type Faq = { id: string; category: FaqCategory; question: string; answer: string; services: ServiceKey[]; home?: boolean };
export const faqs: Faq[] = [
  { id:"license",category:"대여 자격",question:"렌터카 대여 자격은 어떻게 되나요?",answer:"일반 승용차는 만 21세 이상 및 운전면허 취득 후 1년 이상, 승합차는 만 21세 이상 및 운전경력 2년 이상이 기본 기준입니다. 운전 경력이 부족한 경우에도 전화로 가능 여부를 문의할 수 있으나 대여가 보장되지는 않습니다.",services:["monthly","short-term","long-term","accident"],home:true },
  { id:"insurance",category:"보험·사고",question:"완전자차보험이 기본으로 포함되나요?",answer:"기본 대여 요금에 완전자차보험이 포함됩니다. 단, 사고 조건에 따라 자기부담금 20만 원 또는 50만 원이 발생할 수 있고, 수리 기간에는 1일 대여료의 50%에 해당하는 휴차료가 발생할 수 있습니다. 음주·무면허 운전 등 약관상 면책 사고는 보상되지 않을 수 있습니다. 정확한 보험 적용 조건은 상담 및 계약서로 확인해 주세요.",services:["monthly","short-term","long-term","accident"],home:true },
  { id:"price",category:"요금·보증금",question:"차량 요금과 최종 견적은 어떻게 확인하나요?",answer:"단기렌트는 일부 차량의 시간별 참고 요금을 확인할 수 있습니다. 월렌트·장기렌트·사고대차는 개별 전화 견적을 안내합니다. 최종 금액은 차종, 날짜, 대여 조건에 따라 달라질 수 있으므로 전화로 확인해 주세요.",services:["monthly","short-term","long-term","accident"],home:true },
  { id:"delivery",category:"인수·반납",question:"차량 인수 및 반납 장소를 조율할 수 있나요?",answer:"사무실 방문과 고객 지정 장소의 차량 배차·회수를 상담할 수 있습니다. 가능 지역·시간·추가 비용 등 세부 조건은 사전에 전화로 확인해 주세요.",services:["monthly","short-term","long-term","accident"],home:true },
  { id:"availability",category:"인수·반납",question:"원하는 차량을 바로 이용할 수 있나요?",answer:"홈페이지의 차량 목록은 등록 차종 안내용이며 실시간 예약 가능 여부를 나타내지 않습니다. 희망 날짜와 차종을 전화로 알려주시면 가능 여부를 확인해 드립니다.",services:["monthly","short-term","long-term","accident"],home:true },
  { id:"cancellation",category:"기간·변경",question:"대여 기간 변경이나 취소는 가능한가요?",answer:"안내된 일반 기준상 차량 인수 전 취소·변경은 무료로 협의할 수 있습니다. 다만 구체적인 계약 상황과 적용 조건에 따라 달라질 수 있으므로 실제 예약·계약 내용을 우선 확인해 주세요.",services:["monthly","short-term","long-term"],home:true },
  { id:"deposit",category:"요금·보증금",question:"보증금이 필요한가요?",answer:"일반 단기렌트에는 보증금이 없으며, 월렌트 및 장기렌트는 계약 조건에 따라 보증금이 필요할 수 있습니다. 정확한 조건을 전화 상담으로 확인해 주세요.",services:["monthly","short-term","long-term"] },
  { id:"driver",category:"대여 자격",question:"추가 운전자를 등록할 수 있나요?",answer:"추가 운전자 등록은 무료로 안내하고 있습니다. 운전자의 대여 자격 및 등록에 필요한 사항은 차량 인수 전 확인해 주세요.",services:["monthly","short-term","long-term"] },
  { id:"fuel",category:"인수·반납",question:"차량 반납 시 연료는 어떻게 해야 하나요?",answer:"차량 인수 당시의 연료량과 동일하게 채워 반납해 주시면 됩니다. 반납 방법은 실제 계약 조건과 함께 확인해 주세요.",services:["monthly","short-term","long-term"] },
  { id:"breakdown",category:"보험·사고",question:"운행 중 사고나 고장이 발생하면 어떻게 하나요?",answer:"대표번호로 전화해 상황을 알려주세요. 24시간 전화 상담 및 사고 접수를 지원하고, 필요에 따라 보험사 긴급출동과 대체 차량 안내 등을 협의합니다.",services:["monthly","short-term","long-term","accident"] },
  { id:"accident",category:"보험·사고",question:"사고대차와 보험대차는 다른 서비스인가요?",answer:"이 홈페이지에서는 사고대차 메뉴에서 두 가지 상황을 통합해 안내합니다. 적용 가능 여부와 보험사 처리 조건은 사고 상황에 따라 다를 수 있으니 전화로 상담해 주세요.",services:["accident"] },
  { id:"term",category:"기간·변경",question:"대여 기간 연장이 가능한가요?",answer:"이용 기간 연장은 차량 일정 및 계약 조건에 따라 협의할 수 있습니다. 연장이 필요하면 가능한 한 미리 전화해 주세요.",services:["monthly","short-term","long-term"] },
];

export type EventItem = { id: string; title: string; benefitGuide: string; startDate: string; endDate: string; isEnabled: boolean; services: ServiceKey[] };
// No publicly verified active promotion dates or terms yet. Empty = event section hidden.
export const events: EventItem[] = [];

export const reviewPlaceholders = ["차량 청결", "친절한 상담", "유연한 일정", "차량 상태", "재방문 경험", "이용 편의성"];

export const formatPrice = (value: number) => `${new Intl.NumberFormat("ko-KR").format(value)}원~`;
export const durationLabel = (duration: DurationKey) => durations.find((item) => item.key === duration)?.label ?? "6시간";
export const getService = (key: string) => services.find((item) => item.key === key);
