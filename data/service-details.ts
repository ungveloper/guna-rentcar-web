/**
 * 서비스 상세 페이지의 단일 콘텐츠 출처.
 * 출처: 건아렌트카 제공 서비스 목록·차량 요금표·기존 운영 안내.
 * 미확인 계약 정책/보험 혜택/가격을 보장하지 않습니다.
 * 장점은 선택 시 고려할 수 있는 특성, 주의사항은 상담 확인 항목입니다.
 */
export type ServiceKey = "short-term" | "monthly" | "long-term" | "accident";

type Point = { title: string; description: string };
type Answer = { question: string; answer: string };
export type RentalServiceDetail = {
  slug: ServiceKey;
  path: `/services/${string}`;
  name: string;
  seoTitle: string;
  seoDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroAccent: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  intro: string;
  appropriateFor: Point[];
  advantages: Point[];
  cautions: Point[];
  steps: Point[];
  faqs: Answer[];
};

export const serviceOrder = ["short-term", "monthly", "long-term", "accident"] as const;

export const serviceDetails: Record<ServiceKey, RentalServiceDetail> = {
  "short-term": {
    slug: "short-term", path: "/services/short-term", name: "단기렌트",
    seoTitle: "부산 단기렌트·일일렌트 요금 안내 | 건아렌트카",
    seoDescription: "부산 단기렌트 차량별 6시간·12시간 및 일일 대여 요금표. 경차부터 SUV·승합차까지 대여 기간에 따른 기준 요금과 상담 방법을 확인하세요.",
    heroEyebrow: "01 / SHORT-TERM RENTAL", heroTitle: "부산 단기렌트,", heroAccent: "시간별·일일 요금 안내.",
    heroDescription: "6시간·12시간 또는 며칠간 차량이 필요한 경우. 제공받은 차량별 요금표와 이용 전 확인할 내용을 안내합니다.",
    image: "/images/vehicles/avante-cn7.webp", imageAlt: "부산 단기렌트 안내를 위한 현대 아반떼 CN7 차량 사진",
    intro: "단기렌트는 여행·출장·대체 이동처럼 짧은 기간 차량이 필요할 때 검토할 수 있는 방식입니다. 건아렌트카는 차종별 6시간·12시간 및 기간별 1일 기준 요금을 안내합니다.",
    appropriateFor: [
      { title: "당일·반나절 일정", description: "몇 시간만 필요한 이동이라면 차량별 6시간·12시간 기준 요금을 비교할 수 있습니다." },
      { title: "부산 여행·출장", description: "하루 또는 며칠간 필요한 경우 차량 크기와 짐의 양을 고려해 차종을 고를 수 있습니다." },
      { title: "일시적인 차량 이용", description: "개인 차량 이용이 어려운 기간에 맞춰 대여 일정과 인수·반납 장소를 문의할 수 있습니다." },
    ],
    advantages: [
      { title: "기간별 요금 비교", description: "동일 차종의 6·12시간, 1~2일, 3~6일, 7일 이상 기준 요금을 확인할 수 있습니다." },
      { title: "다양한 차급", description: "경차·세단·SUV·승합차 중 목적에 맞는 차종을 살펴볼 수 있습니다." },
      { title: "기간에 맞춘 상담", description: "필요한 시간과 차량을 알려주면 해당 조건의 대여 가능 여부를 전화로 확인할 수 있습니다." },
    ],
    cautions: [
      { title: "시간 요금이 없는 차종", description: "카니발·스타리아는 원본 요금표에 6시간·12시간 금액이 없어 별도 문의가 필요합니다." },
      { title: "실제 적용 금액", description: "표시 요금은 제공된 기준표이며 보험·운전자 조건과 차량 이용 가능 여부에 따라 확인이 필요합니다." },
      { title: "인수·반납 일정", description: "기본 장소는 건아렌트카 주차장이며, 영업시간 외 일정과 별도 장소는 미리 협의해야 합니다." },
    ],
    steps: [
      { title: "차량과 시간 선택", description: "차량별 요금표에서 필요한 기간과 차종을 확인합니다." },
      { title: "전화로 조건 확인", description: "날짜, 인원, 운전자 자격, 보험 조건을 상담합니다." },
      { title: "차량 인수·반납", description: "협의된 장소와 시간에 맞춰 인수하고 반납합니다." },
    ],
    faqs: [
      { question: "부산에서 6시간만 렌터카를 이용할 수 있나요?", answer: "건아렌트카 요금표에는 일부 차종의 6시간 기준 요금이 있습니다. 해당 날짜의 실제 대여 가능 여부와 운전자·보험 조건은 전화로 확인해야 합니다." },
      { question: "단기렌트 1~2일 요금은 하루 기준인가요?", answer: "네. 차량 안내에 표기한 1~2일, 3~6일, 7일 이상 금액은 각각 1일 기준입니다. 총 대여료와 적용 조건은 상담 시 확인해 주세요." },
      { question: "카니발과 스타리아도 6시간 대여 요금이 있나요?", answer: "제공받은 요금표에는 해당 승합차의 시간별 요금이 없습니다. 시간 단위 이용 가능 여부와 금액은 전화로 문의해 주세요." },
      { question: "운전면허와 보험 조건은 어떻게 확인하나요?", answer: "차량 및 이용 조건에 따라 기준이 다를 수 있습니다. 운전자 나이·면허 취득 기간·보험·면책 조건을 대여 전에 상담해 주세요." },
    ],
  },
  monthly: {
    slug: "monthly", path: "/services/monthly", name: "월렌트",
    seoTitle: "부산 월렌트·한달렌트 이용 안내 | 건아렌트카",
    seoDescription: "부산 월렌트·한달렌트 상담 안내. 한 달 안팎 차량 이용이 필요한 경우 차종 선택, 기간 연장·반납, 비용·보험 확인 항목과 FAQ를 살펴보세요.",
    heroEyebrow: "02 / MONTHLY RENTAL", heroTitle: "부산 월렌트,", heroAccent: "한 달 이용을 계획한다면.",
    heroDescription: "한 달 안팎으로 차량이 필요한 상황에 맞춰 희망 차종과 이용 기간, 계약 시 확인할 항목을 정리했습니다.",
    image: "/images/vehicles/k5.webp", imageAlt: "부산 월렌트 안내를 위한 기아 더뉴K5 차량 사진",
    intro: "월렌트는 짧은 일일 대여보다 긴, 한 달 안팎의 차량 이용을 고려할 때 상담할 수 있는 방식입니다. 계약 기간과 월 단위 비용, 보험 포함 여부 등은 실제 계약 조건을 확인한 후 결정해야 합니다.",
    appropriateFor: [
      { title: "한 달 안팎의 출장", description: "부산 체류 기간이 정해져 있다면 이용 시작일과 반납 예정일을 기준으로 상담할 수 있습니다." },
      { title: "한시적인 업무용 차량", description: "특정 프로젝트나 임시 근무 기간에 필요한 차급·이용 인원을 정리하기 좋습니다." },
      { title: "차량 교체·수리 기간", description: "개인 차량을 이용하기 어려운 기간이 길어질 때 일일렌트와 월렌트 조건을 비교해 볼 수 있습니다." },
    ],
    advantages: [
      { title: "한 달 단위로 계획", description: "일정이 비교적 명확한 경우 이용 기간 전체를 기준으로 차량과 조건을 상담할 수 있습니다." },
      { title: "차종과 이용 목적을 함께 고려", description: "일상·출장·업무 등 사용 목적에 따라 필요한 차급을 검토할 수 있습니다." },
      { title: "일일 대여와 비교 가능", description: "하루 단위 기준 요금과 별도로 월렌트 견적을 문의해 자신의 일정에 맞춰 비교할 수 있습니다." },
    ],
    cautions: [
      { title: "월 요금 미공개", description: "홈페이지의 7일 이상 1일 요금은 월렌트의 확정 계약 요금이 아닙니다. 월렌트 견적은 별도 확인이 필요합니다." },
      { title: "연장·중도 반납 조건", description: "실제 계약 시 기간 연장 가능 여부와 조기 반납·정산 기준을 반드시 확인해야 합니다." },
      { title: "보험·보증금·정비", description: "포함 비용과 면책 조건, 보증금 여부 및 정비 부담은 계약별로 다를 수 있어 확인해야 합니다." },
    ],
    steps: [
      { title: "이용 기간 정하기", description: "차량이 필요한 시작일·예상 종료일과 연장 가능성을 정리합니다." },
      { title: "차종 및 견적 문의", description: "희망 차량, 운전자 정보, 보험·비용 포함 항목을 전화로 확인합니다." },
      { title: "계약·인수 조건 확인", description: "반납·연장·인수 장소 등 세부 조건에 동의한 후 진행합니다." },
    ],
    faqs: [
      { question: "부산에서 한 달만 렌터카를 이용할 수 있나요?", answer: "건아렌트카는 월렌트를 상담하고 있습니다. 희망 시작일과 이용 기간을 알려주시면 해당 조건의 이용 가능 여부를 확인해 드립니다." },
      { question: "월렌트 요금은 일일렌트 요금에 30을 곱하면 되나요?", answer: "아닙니다. 홈페이지에 표시된 일일 기준 요금과 월렌트 계약 견적은 별개입니다. 월렌트 요금과 포함 항목은 전화 상담으로 확인해 주세요." },
      { question: "월렌트 기간을 연장하거나 조기 반납할 수 있나요?", answer: "가능 여부와 정산 방식은 개별 계약 조건에 따라 달라집니다. 신청 전에 기간 연장과 중도 반납 조건을 문의해 주세요." },
      { question: "월렌트에 보험료와 차량 정비가 포함되나요?", answer: "보험·면책·정비 관련 비용이 어떻게 적용되는지는 확인된 공통 조건이 없습니다. 견적 상담 시 포함 항목과 별도 부담금을 확인해야 합니다." },
    ],
  },
  "long-term": {
    slug: "long-term", path: "/services/long-term", name: "장기렌트",
    seoTitle: "부산 장기렌트 계약·이용 조건 안내 | 건아렌트카",
    seoDescription: "부산 장기렌트 상담 안내. 장기간 개인·업무용 차량 이용을 고려할 때 계약 기간, 차량 선택, 보험·보증금·중도 반납 확인 사항과 FAQ를 정리했습니다.",
    heroEyebrow: "03 / LONG-TERM RENTAL", heroTitle: "부산 장기렌트,", heroAccent: "계약 조건부터 확인하세요.",
    heroDescription: "지속적으로 차량이 필요한 개인·사업자 고객을 위해 이용 목적, 계약 기간과 확인할 조건을 안내합니다.",
    image: "/images/vehicles/g80.webp", imageAlt: "부산 장기렌트 안내를 위한 제네시스 G80 차량 사진",
    intro: "장기렌트는 한 달 안팎의 월렌트보다 장기간 차량 이용을 계획할 때 검토할 수 있는 방식입니다. 장기 계약의 실제 기간·차량 공급·요금 체계는 상담 후 확인해야 하며, 이 페이지는 계약을 비교하고 준비할 정보를 안내합니다.",
    appropriateFor: [
      { title: "지속적인 업무용 이동", description: "정기적인 업무 이동이 있다면 필요한 차급과 계약 기간을 미리 검토할 수 있습니다." },
      { title: "개인 차량 이용 계획", description: "차량 이용 계획이 장기적이라면 보유와 대여 중 어떤 방식이 적합한지 조건을 비교할 수 있습니다." },
      { title: "장기간 부산 체류", description: "거주·근무 일정이 길어질 때 차량 인수·반납 및 계약 종료 시점을 함께 검토할 수 있습니다." },
    ],
    advantages: [
      { title: "장기 이용 계획 수립", description: "예상 사용 기간과 이용 목적을 기준으로 차량 이용에 필요한 조건을 한 번에 검토할 수 있습니다." },
      { title: "계약 항목별 비교", description: "견적 시 비용 구성, 주행거리, 보험·정비 등의 항목을 서로 비교할 수 있습니다." },
      { title: "업무용 차량 검토", description: "개인·업무용 여부, 운전자 수와 적재·탑승 조건을 고려해 차종을 상담할 수 있습니다." },
    ],
    cautions: [
      { title: "실제 계약 기간과 비용", description: "계약 기간·요금·보증금 여부는 확정된 공개 공통표가 없어 차량 및 계약별로 확인해야 합니다." },
      { title: "약정 변경과 중도 종료", description: "기간 중 해지·조기 반납·차량 변경·추가 비용 기준은 계약 전 서면으로 확인하는 것이 중요합니다." },
      { title: "보험·정비·주행거리", description: "보험 적용 범위, 정비 책임, 운전자 범위 및 주행거리 제한 여부는 개별 계약 조건에 따라 확인해야 합니다." },
    ],
    steps: [
      { title: "사용 목적·기간 정리", description: "개인·업무용 여부, 예상 이용 기간, 희망 차급을 알려주세요." },
      { title: "계약 항목 확인", description: "금액과 보증금 여부, 보험·정비·주행거리·중도 종료 조건을 확인합니다." },
      { title: "이용·반납 방식 협의", description: "차량 인수·반납 장소와 종료 일정까지 상담 후 진행합니다." },
    ],
    faqs: [
      { question: "장기렌트는 월렌트와 어떻게 다른가요?", answer: "월렌트는 한 달 안팎 이용을 중심으로 상담하고 장기렌트는 더 긴 차량 이용 계획과 계약 조건을 중심으로 살펴봅니다. 정확한 최소 기간은 건아렌트카에 문의해 주세요." },
      { question: "장기렌트 계약 기간과 월 금액이 정해져 있나요?", answer: "현재 홈페이지에 공개된 장기렌트 공통 계약 기간이나 월 요금표는 없습니다. 희망 기간과 차종을 알려주시면 개별 상담으로 확인할 수 있습니다." },
      { question: "계약 중 차량 변경이나 중도 반납은 가능한가요?", answer: "변경·중도 종료 가능 여부 및 추가 비용은 계약에 따라 달라질 수 있습니다. 계약 전에 관련 조건을 반드시 확인해 주세요." },
      { question: "장기렌트 시 보험·정비·주행거리 제한을 확인해야 하나요?", answer: "네. 차량별 계약에서 보험·면책, 정비 부담, 운전자 범위, 주행거리 제한 여부를 확인하는 것이 좋습니다. 포함 여부를 일괄적으로 보장하지는 않습니다." },
    ],
  },
  accident: {
    slug: "accident", path: "/services/accident", name: "보험사고대차",
    seoTitle: "부산 사고대차·보험대차 상담 절차 | 건아렌트카",
    seoDescription: "부산 교통사고 후 보험사고대차·보험대차 상담 안내. 보험 접수 상황, 수리 기간, 대체 차량 조건, 비용 부담과 인수 절차 및 FAQ를 확인하세요.",
    heroEyebrow: "04 / ACCIDENT REPLACEMENT", heroTitle: "부산 보험사고대차,", heroAccent: "보험 처리부터 확인하세요.",
    heroDescription: "사고 또는 차량 수리로 이동이 어려운 상황에 필요한 상담 정보와 보험 확인 절차를 안내합니다.",
    image: "/images/vehicles/tucson.webp", imageAlt: "부산 사고대차·보험대차 안내를 위한 현대 투싼 차량 사진",
    intro: "보험사고대차는 교통사고 후 보험 처리 상황 등에 따라 대체 차량을 검토하는 서비스입니다. 모든 사고에 보험대차가 자동 제공되는 것은 아니며, 보험사·사고 경위·계약 조건에 따라 이용 가능 여부가 달라질 수 있습니다.",
    appropriateFor: [
      { title: "사고로 차량 운행이 어려운 경우", description: "교통사고 접수 후 차량을 사용하기 어려운 상황이라면 대차 가능 여부를 상담할 수 있습니다." },
      { title: "수리 기간 이동이 필요한 경우", description: "차량 수리 일정과 예상 이용 기간을 미리 정리해 상담할 수 있습니다." },
      { title: "보험 처리 조건을 확인해야 하는 경우", description: "보험사 담당자·접수 정보와 비용 부담 범위를 확인한 후 대체 이동 방법을 비교할 수 있습니다." },
    ],
    advantages: [
      { title: "상담 항목 정리", description: "사고 접수·예상 수리 기간·필요 차량을 기준으로 필요한 정보를 순서대로 확인할 수 있습니다." },
      { title: "차량 선택 상담", description: "실제 이용 가능 여부가 확인되면 이동 인원과 용도에 맞는 차종을 협의할 수 있습니다." },
      { title: "인수·반납 조건 문의", description: "기본 차량 인수 장소와 별도 픽업 또는 반납 협의 가능 여부를 상담할 수 있습니다." },
    ],
    cautions: [
      { title: "보험 적용은 별도 판단", description: "과실비율, 보험 계약, 보상 가능 범위에 따라 대차 제공과 비용 부담이 달라질 수 있습니다." },
      { title: "대여 가능 차종", description: "동급 차량·특정 차종 제공을 보장하지 않습니다. 보험 처리 조건 및 실제 차량 상황을 확인해야 합니다." },
      { title: "보험 확인 전 비용", description: "보험 처리 전 대여 진행이나 비용 관련 내용은 보험사와 건아렌트카에 각각 확인해야 합니다." },
    ],
    steps: [
      { title: "사고 접수 정보 정리", description: "보험사·사고 접수 여부와 차량 운행 가능 상태를 확인합니다." },
      { title: "수리·대차 기간 확인", description: "예상 수리 기간과 이동 필요 일정을 정리합니다." },
      { title: "대차 및 비용 조건 상담", description: "보험 처리 가능 여부, 대상 차급과 비용·인수 조건을 확인합니다." },
    ],
    faqs: [
      { question: "교통사고가 나면 누구나 보험사고대차를 이용할 수 있나요?", answer: "반드시 그런 것은 아닙니다. 보험사고대차 제공 여부는 사고 내용과 보험 보상·계약 조건에 따라 달라집니다. 보험사 및 건아렌트카에 사전 확인이 필요합니다." },
      { question: "보험사고대차를 상담할 때 어떤 정보가 필요한가요?", answer: "사고 접수 및 보험 처리 상황, 보험사 정보, 차량 수리 여부와 예상 기간, 필요한 차량 종류를 알려주시면 상담에 도움이 됩니다." },
      { question: "사고대차로 원하는 차종을 받을 수 있나요?", answer: "차종은 보험 처리 조건과 실제 이용 가능 차량에 따라 달라집니다. 동급 또는 특정 차량 제공을 일률적으로 보장하지 않습니다." },
      { question: "사고대차 비용은 보험사에서 모두 부담하나요?", answer: "비용 부담 범위는 사고 및 보험 계약에 따라 다릅니다. 부담 주체와 적용 기간, 별도 비용이 있는지 보험사와 렌터카 업체에 확인해야 합니다." },
    ],
  },
};
