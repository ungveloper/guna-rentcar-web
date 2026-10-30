# GUNA RENTCAR / 독립 라우트 + Tailwind JSX (v4)

- 모든 메뉴는 HTML `<a href="/cars">` 등 명시적인 URL로 이동합니다. `#cars` 같은 섹션 스크롤 링크를 사용하지 않습니다.
- `/`는 `app/layout.tsx` + `app/page.tsx`입니다.
- `/cars`, `/about`, `/reviews`, `/faq`, `/contact`, `/privacy`는 각각 해당 디렉터리의 `layout.tsx`와 `page.tsx`를 사용합니다.
- `/services/monthly`, `/services/short-term`, `/services/long-term`, `/services/accident`는 각각 전용 디렉터리의 `layout.tsx`와 `page.tsx`를 사용합니다.
- 이전의 `app/services/[slug]/page.tsx`는 제거합니다.
- 실제 차량 필터, 검색, 정렬 컴포넌트 `VehicleExplorer`는 `/cars` 및 각각의 서비스 페이지에서 사용합니다. 홈 페이지에는 존재하지 않습니다.
- 모든 활성 UI 컴포넌트 스타일은 JSX Tailwind 유틸리티 클래스에서 지정하고, `app/globals.css`는 `@import "tailwindcss";`만 포함합니다.
- 단기 가격은 참고 금액, 나머지는 전화 견적. 고객 후기 원문과 이벤트 내용은 검증되지 않아 더미 데이터/숨김 상태입니다.
- 개인정보를 온라인 양식에서 전송하지 않습니다. Notion/Firebase 연동은 이후 단계입니다.

## 동작 확인

```bash
npm run lint
npm run build
npm run dev -- -p 3001
```

- http://localhost:3001/ : 브랜드 중심 홈 페이지
- http://localhost:3001/cars : 전체 차량 검색/필터가 있는 전용 페이지
- http://localhost:3001/services/monthly : 월렌트
- http://localhost:3001/services/short-term : 단기렌트
- http://localhost:3001/services/long-term : 장기렌트
- http://localhost:3001/services/accident : 사고대차
- http://localhost:3001/about : 회사 소개
- http://localhost:3001/reviews : 고객 후기
- http://localhost:3001/faq : FAQ
- http://localhost:3001/contact : 문의 및 위치
- http://localhost:3001/privacy : 개인정보처리방침

스크립트는 build 뒤 실제 HTTP 응답 내 `data-page-layout` 속성을 검사하고 해당 경로에 맞지 않으면 git commit/push를 중단합니다.
