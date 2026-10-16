# 건아렌트카 서비스별 SEO 운영 가이드

## 페이지 구성

- `/` : 부산 렌터카 브랜드 및 개요
- `/services` : 서비스 종류 비교
- `/services/short-term` : 단기·일일렌트(차종별 확인된 요금표)
- `/services/monthly` : 월렌트·한달렌트
- `/services/long-term` : 장기렌트
- `/services/accident` : 사고대차·보험대차
- `/cars` : 전체 차량·요금
- `/events` : 실제 등록된 이벤트와 이용 안내
- `/guide` : 이용 안내 및 일반 FAQ
- `/contact` : 실제 주소·위치·전화

## 한 곳에서 수정하는 데이터

| 파일 | 역할 |
| --- | --- |
| `data/service-details.ts` | 네 서비스의 고유 H1/소개/장점/주의사항/절차/FAQ 및 SEO 제목·설명 |
| `data/services.ts` | 메인 서비스 카드 요약·경로 |
| `data/site.ts` | 헤더·푸터 메뉴, 사업장 주소·전화·기본 정보 |
| `data/vehicles.ts` | 실제 차량·시간별 및 일별 대여 요금 |
| `data/promotions.ts` | 프로모션 카드·이용 안내 및 실제 이벤트 등록 |
| `app/sitemap.ts` | 공개 URL 목록 |

서비스별 페이지는 `components/ServiceDetailsPage.tsx`로 일관되게 렌더링되고, SEO 메타데이터와 `Service` / `BreadcrumbList` / `FAQPage` JSON-LD는 같은 `data/service-details.ts`에서 생성됩니다. `AutoRental` 사업자 정보는 `app/layout.tsx`의 공통 JSON-LD와 `@id`로 연결됩니다.

**검색엔진 노출 보장 불가:** 구글의 FAQ 리치 결과는 일반 렌터카 사이트에 거의 제공되지 않습니다. FAQ는 실제 사용자를 돕는 목적이며, 구조화 데이터가 검색 결과 상단 노출이나 별도 표시를 보장하지 않습니다. 할인·보증금·보험료·계약기간 등 확인되지 않은 조건을 임의로 추가하지 마세요.

## 실제 배포 전 필수

1. 사용할 정식 도메인 취득 후 환경 변수 `NEXT_PUBLIC_SITE_URL=https://실제도메인` 설정; Canonical / OG URL / sitemap / JSON-LD 사업자 ID와 일관성 확인.
2. Vercel 프로덕션에서 `robots.txt`, `sitemap.xml`, 서비스 5개 URL이 정상 200 응답인지 확인하고 테스트·미리보기 도메인을 검색엔진에 제출하지 않기.
3. Google Search Console과 네이버 서치어드바이저에서 정식 도메인을 인증해 사이트맵 제출. 네이버 플레이스·Google 비즈니스 프로필 업체 정보와 주소·전화번호 일치.
4. Google Rich Results Test와 Schema Markup Validator로 스키마 확인. `Service`는 Google의 별도 리치 결과를 보장하지 않음.
5. 실제 상담에서 반복되는 질문, 계약 가능 기간 및 보험·면책·정비 조건을 검증한 뒤 각 상세 페이지에 추가. 허위 후기·허위 요금·과도한 지역 키워드 나열 금지.
6. 검색 인덱스 생성 후 각 서비스별 검색어·클릭·문의 전환을 모니터링하여 콘텐츠 보완.

## 운영상 주의

- 현재 7일 이상 **1일 요금**을 월렌트/장기렌트 **월 요금**으로 재사용하지 않습니다.
- 보험사고대차 비용과 지원 여부는 사고 및 보험 계약별로 달라질 수 있습니다.
- 페이지별 고유 SEO 제목·설명은 `serviceDetails[slug]`에서 수정하면 메타데이터와 화면에 함께 반영됩니다.
- `NEXT_PUBLIC_SITE_URL`을 사용하지 않으면 배포 환경의 Vercel URL로 Canonical 등이 생성될 수 있습니다. 정식 도메인이 정해지면 반드시 설정하세요.
