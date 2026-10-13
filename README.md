# 건아렌트카 / GUN-A RENTCAR

Next.js 16.4 (App Router), React 19, Tailwind CSS 4 기반의 **부산 건아렌트카 원페이지 랜딩**입니다. 예약·회원·관리자 기능 없이 차량과 가격, 서비스, 실제 리뷰, 위치 및 전화 문의 정보를 안내합니다.

## 로컬 실행

```bash
npm ci
npm run dev
npm run lint
npm run build
```

## 데이터 관리

- `data/vehicles.ts`: 첨부된 4페이지 요금표 PDF에서 입력한 15개 차량, 시간별/일별 가격.
- `data/services.ts`: 단기·월·장기·사고대차 서비스 설명.
- `data/reviews.ts`: 운영자가 직접 검증한 네이버 플레이스 실제 리뷰.
- `data/faqs.ts`: FAQ.
- `data/site.ts`: 회사 정보·전화·주소.
- `docs/VEHICLE_DATA_SOURCE.md`: PDF 근거, 이미지 제약 및 유지보수 유의사항.

## 차량 사진 안내

고객 제공 PDF에는 차량별 실물 사진이 없습니다. 카드에 들어간 SVG는 **차급 예시 이미지**이며 실제 차량 사진이 아닙니다. 히어로의 사진은 AI 생성 콘셉트입니다. 제조사 자료를 상업적으로 사용할 수 있는 권한이 확인되면 `public/images/vehicles/`에 추가하고 `data/vehicles.ts`의 `image` 경로를 교체하세요.

## 환경 변수

`.env.example` 참조. 신규 도메인이 정해지면 `NEXT_PUBLIC_SITE_URL`에 최종 공개 도메인을 설정하고 검색엔진에 등록하세요. GA4 키는 선택 사항입니다.

## 배포

Vercel + 신규 도메인 연결. 메타데이터, robots.txt, sitemap.xml, AutoRental JSON-LD 포함. 전화 CTA는 `phone_click` GA4 이벤트로 연결되며 실제 발신·예약 완료를 의미하지 않습니다.
