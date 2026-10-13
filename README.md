# 건아렌트카 — GUN-A RENTCAR

부산 연제구 연산동 건아렌트카의 **원페이지 소개형 랜딩 사이트**입니다. Drivoxe 스타일의 레이아웃을 참고하여 새로 구현했으며, 온라인 예약·결제 없이 전화 상담으로 연결합니다.

## 기술 및 운영

- Next.js 16 App Router / React 19 / TypeScript / Tailwind CSS 4
- 메인 `/` 한 페이지, 섹션 앵커 메뉴, 모바일 전화 버튼
- 차량/요금 데이터 `data/vehicles.ts`, 실제 고객 후기 `data/reviews.ts`
- 정적 페이지 생성, metadata, robots, sitemap, `AutoRental` JSON-LD
- 데이터베이스·관리자·예약 기능 없음

## 실행

```bash
npm ci
npm run dev
# http://localhost:3000
npm run lint
npm run build
```

## 출시 전 꼭 업데이트할 사항

1. **차량과 요금**: `data/vehicles.ts`에 실제 보유 차종·가격·단위·보험 조건만 입력하세요. 현재는 빈 배열로, 모델별 가격을 만들지 않기 위해 콘셉트 차급 카드가 표시됩니다.
2. **공식 차량 사진**: 상업적 재사용 가능 여부를 확인한 사진을 `public/images/vehicles/`에 추가하고 등록하세요. `public/images/hero/*.svg`는 직접 만든 **임시 차량 콘셉트**입니다. 메인 히어로도 실제 보유 차량 이미지로 교체하세요.
3. **고객 후기**: 적법하게 게시 가능한 실제 네이버 플레이스 후기를 `data/reviews.ts`에 추가하세요. `approvedForReuse: true`인 후기만 표시됩니다. 허위 후기·별점은 만들지 않습니다.
4. **로고**: `components/Brand.tsx`는 첨부된 엠보싱 로고를 참고해 만든 **임시 단색 브랜드 표현**입니다. 공식 투명 SVG/PNG 로고를 받으면 교체하세요. 참조 원본은 `public/images/brand/logo-reference.png`입니다.
5. **업체 정책**: 운전자 자격, 보험·면책, 실제 대여 가능 모델/요금, 사업자등록번호·대표자명, 상담 가능 시간을 검증해 `data/faqs.ts`, `data/site.ts`, `app/page.tsx` 등에 반영하세요.
6. **도메인**: Vercel 환경변수 `NEXT_PUBLIC_SITE_URL=https://정식도메인` 설정 후 재배포하세요. 미설정 시 Vercel 제공 도메인을 사용합니다.
7. **검색엔진 등록**: 배포 후 Google Search Console 및 네이버 서치어드바이저에 정식 도메인과 `/sitemap.xml`을 등록하세요. 로컬·프리뷰 배포는 상위 노출 대상이 아닙니다.
8. **분석/개인정보**: GA4와 개인정보 고지 체계가 준비된 경우에만 `NEXT_PUBLIC_GA4_ID=G-...`를 설정하세요. `phone_click`은 전화 버튼 클릭이지 실제 통화 완료 건수가 아닙니다.
9. **위치**: `app/page.tsx`의 네이버 지도 검색 링크를 공식 플레이스 링크로 교체할 수 있습니다. 현재 지도 영역은 **실제 지도가 아닌 장식용 도식**이며 정확한 길 안내는 외부 지도에서 제공합니다.

## 데이터 예시

`data/vehicles.ts`의 주석과 `types/content.ts`를 확인하세요. 기준 대여료를 표시할 때는 *24시간/1일/월* 등 요금 단위를 반드시 넣고, 기간·보험 등 변동 조건도 확인하세요.

`data/reviews.ts`에 실제 후기를 넣을 때는 원문을 임의 각색하지 말고 출처와 작성일을 명시할 것을 권장합니다. 독립된 관리자/실시간 수집 기능은 구현하지 않았습니다.

## 페이지 구조

`app/page.tsx`: Hero → About → Services → Fleet → Benefits → Process → Reviews → FAQ → Contact → Final CTA → Footer.

`app/layout.tsx`: metadata 및 `AutoRental` JSON-LD. `app/sitemap.ts`, `app/robots.ts`: 검색엔진 수집 설정. `components/PhoneLink.tsx`: 전화 전환 이벤트.

## 디자인/저작권 주의

레퍼런스: https://drivoxe.framer.website/ . 원본 상용 템플릿 파일이나 이미지를 복사하지 않았으며 독립 컴포넌트와 자체 제작 SVG 콘셉트 이미지를 사용합니다. 제조사 이미지 사용 시 별도 권한 확인이 필요합니다.
