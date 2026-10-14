# 상단 프로모션 / 이용 안내 캐러셀

## 위치

홈페이지 히어로(`HeroStage`) 바로 아래에 `PromotionCarousel` 컴포넌트가 표시됩니다. PC에서는 화살표 버튼, 모바일에서는 손가락 스와이프로 카드를 넘길 수 있습니다.

## 실제 이벤트 등록

1. `data/promotions.ts`의 `promotions` 배열에 이벤트 객체를 추가합니다.
2. 제목, 기간, 할인 조건, 대상 차종 등 **실제로 운영 중인 내용만** 작성합니다.
3. `image`에 `/public/images/` 이하의 이미지를 사용할 경우 `/images/...`로 표기합니다.
4. `enabled: true`로 설정하면 이벤트가 상시 안내 카드보다 **앞에** 표시됩니다.
5. 이벤트가 종료되면 `enabled: false`로 변경하고 **재배포**합니다.

별도 관리자/DB가 없으므로 현재 버전은 자동 기간 종료를 구현하지 않았습니다. 이벤트 시작·종료는 소스 데이터 변경 및 배포로 관리하세요. 만료된 행사를 계속 노출하지 않도록 관리가 필요합니다.

```ts
// data/promotions.ts의 promotions 배열에 추가할 실제 이벤트 예시 형태.
// 아래 내용은 입력 형식을 설명하기 위한 임시 텍스트이며 진행 중인 행사가 아닙니다.
{
  id: "event-unique-id",
  kind: "promotion",
  eyebrow: "EVENT / 실제 진행 기간",
  title: "실제 행사 제목",
  description: "대상 및 상세 조건",
  finePrint: "할인/기간/제외 사항",
  image: "/images/vehicles/ray.webp",
  imageAlt: "더뉴레이 차량",
  href: "#fleet",
  actionLabel: "관련 차량 확인",
  enabled: false,
}
```

## 카드 동작 및 접근성

- `#fleet`, `#services`, `#contact`로 이동하는 링크는 예약 기능이 아닙니다.
- 캐러셀은 native horizontal scroll + CSS scroll-snap 기반으로 작동합니다.
- PC 화살표와 하단 인디케이터로 이동할 수 있습니다.
- 모션 감소 OS 설정 시 스크롤 애니메이션을 최소화합니다.
- FAQ, 차량 상세 모달 및 기존 전화 CTA에는 변경이 없습니다.

## 요금 출처

건아렌트카에서 제공한 `건아렌트카 이용 요금 안내` PDF 기준:
- 더뉴모닝 / 더뉴레이: 6시간 40,000원
- 더뉴모닝 / 더뉴레이: 7일 이상 1일 35,000원

요금이 변동될 경우 `data/vehicles.ts`와 `data/promotions.ts`를 **함께 갱신**하세요.
