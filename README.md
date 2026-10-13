# 건아렌트카 / GUN-A RENTCAR

Next.js 16 App Router, React 19, Tailwind CSS 4 기반의 **부산 건아렌트카 원페이지 랜딩**입니다.

Apple 제품 소개 웹사이트의 스토리텔링·대형 비주얼·타이포그래피를 참고한 독립적인 프리미엄 자동차 쇼케이스 컨셉입니다. 온라인 예약·회원가입·관리자 기능은 없습니다.

## 로컬 실행

```bash
npm ci
npm run dev
npm run lint
npm run build
```

## 실제 차량 및 이미지

- `data/vehicles.ts`: 제공 PDF의 15개 모델 / 6·12시간 / 1~2일·3~6일·7일 이상 일일 요금
- `public/images/vehicles/`: 사용자가 전달한 동일 모델 사진 WebP 15개
- `components/Fleet.tsx`: 차량 필터, 이미지 그리드, `<dialog>` 기반 상세 요금표, 전화 문의
- **사진은 차량 모델 홍보 이미지로 실제 대여 차량과 색상·연식·트림이 다를 수 있습니다.**
- `docs/VEHICLE_DATA_SOURCE.md`: 자료 출처 및 라이선스·요금 유지보수 안내

## 페이지 및 콘텐츠

- `app/page.tsx`: 히어로, 경험 수치, 차량 비주얼, 서비스 4종, 라인업, 운영 경험, 이용 절차, 후기, FAQ, 위치, 전화 CTA
- `app/globals.css`: 디자인 토큰 및 모바일 대응 (추가 애니메이션 패키지 없음)
- `data/reviews.ts`: 허락받은 실제 네이버 플레이스 후기만 직접 등록
- `data/site.ts`, `data/services.ts`, `data/faqs.ts`: 콘텐츠 관리

## SEO / 배포

`.env.example`에 따라 `NEXT_PUBLIC_SITE_URL`을 최종 도메인으로 설정하고 Vercel에 배포합니다. Google Search Console·네이버 서치어드바이저에 등록 후 수집 상태 확인. 페이지 메타데이터, OG 이미지, `robots.txt`, `sitemap.xml`, AutoRental 구조화 데이터를 유지합니다. GA4의 `phone_click`는 클릭만 측정합니다.
