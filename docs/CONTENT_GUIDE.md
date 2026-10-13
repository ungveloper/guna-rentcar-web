# 콘텐츠 교체 가이드

## 1. 차량 등록 — data/vehicles.ts

`vehicles` 배열에 **실제 등록된 모델만** 추가하세요.

```ts
// 예시 형식입니다. 실제 차종/가격을 확인한 후 사용하세요.
{
  id: "fleet-001",
  brand: "제조사",
  model: "실제 차량 모델명",
  modelYear: "연식",
  category: "sedan",
  image: "/images/vehicles/fleet-001.webp",
  imageAlt: "실제 차량 색상과 연식이 일치하는 차량 사진",
  dailyPriceFromKRW: 0, // 실제 확인한 원화 금액
  priceUnit: "1일", // 실제 과금 단위
  priceBasis: "대여 시간, 세금 등 실제 조건",
  insuranceNote: "보험 포함/미포함 및 면책 기준 확인 문구",
}
```

금액이 확정되지 않으면 `dailyPriceFromKRW` 필드를 생략하면 됩니다. 잘못된 금액 0을 게시하지 마세요.

- 분류: `compact` / `sedan` / `suv` / `van` / `other`
- 차량 이미지는 최적화된 AVIF/WebP/JPG 권장
- `categoryOptions`는 실제 등록 차급만 필터로 자동 노출
- 임시 차량 콘셉트는 실제 보유 모델/사진으로 교체

## 2. 후기 등록 — data/reviews.ts

```ts
{
  id: "naver-review-001",
  authorDisplay: "익명 처리한 표시명",
  text: "사용 허가받은 실제 후기 원문",
  writtenAt: "2026-10-01",
  sourceUrl: "https://실제-리뷰-원문-주소",
  approvedForReuse: true,
}
```

실제 후기가 없으면 자동으로 준비 중 카드만 표시됩니다.

## 3. 기타 확인

- `data/site.ts`: 전화, 주소, 운영 정보
- `data/services.ts`: 실제 서비스 정책에 맞춘 문구
- `data/faqs.ts`: 연령, 면허, 보험, 결제, 픽업 조건 최종 검증
- `app/page.tsx`: Hero, 회사 소개, 지도 링크, 사업자 정보
- `components/Brand.tsx`: 정식 벡터 로고 수급 시 변경
- `.env.example`: 검색엔진 대상 도메인과 GA4 ID

## 4. 검색엔진 및 페이지 정합성

대표 상호, 전화, 주소는 네이버 플레이스·Google 비즈니스 프로필과 일치시켜야 합니다. 단일 원페이지의 앵커는 별도 검색 URL이 아닙니다. 문서에 거짓 가격·후기·재고 정보를 넣지 마세요.
