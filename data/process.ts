/** 메인 페이지와 이용안내 페이지가 공통으로 사용하는 대여 절차 */
export const rentalProcess = [
  { no: "01", name: "차량 둘러보기", description: "차종과 기준 요금을 먼저 비교해 보세요." },
  { no: "02", name: "전화로 상담하기", description: "이용 일정, 대여 기간, 보험 조건을 확인합니다." },
  { no: "03", name: "차량 인수하기", description: "협의한 시간에 건아렌트카 주차장에서 인수합니다." },
  { no: "04", name: "이용 후 반납하기", description: "안내받은 장소와 일정에 맞춰 차량을 반납합니다." },
] as const;
