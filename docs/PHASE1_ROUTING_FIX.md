# GUNA RENTCAR 1차 라우팅·빌드 수정

- Next.js 16 `cacheComponents: true`의 현재 시각 접근 제약으로 푸터에서 `new Date()`를 제거하고 연도를 고정값 `2026`으로 표시합니다. 차후 CMS 또는 배포 설정에서 연도 갱신 가능하도록 개선할 수 있습니다.
- 월렌트·단기렌트·장기렌트·사고대차는 각각 `app/services/<slug>/page.tsx`로 구현했습니다. 공통 UI만 `app/_components/ui/service-page-content.tsx`로 재사용합니다.
- 기존 `app/services/[slug]/page.tsx` 파일은 삭제합니다. 적용 스크립트가 안전하게 삭제하도록 관리합니다.
- `/reviews` 고객 후기 목록 페이지를 추가하고, 기존 `/#reviews` 스크롤 링크를 해당 경로로 변경합니다. 리뷰 원문은 미확인 상태이므로 자리표시자로 유지됩니다.
- 메인페이지는 서비스 4종·차량 일부·회사 소개 미리보기와 독립 페이지 이동 링크 중심으로 축소했습니다. 상세 내용은 각 URL에서 확인하며, 후기 전체 목록은 `/reviews`, FAQ 전체는 `/faq`에서 확인합니다. 이벤트 내용은 활성 이벤트가 있을 때 서비스 페이지에서 모달로 표시합니다.
- 페이지 내 스크롤은 일반적인 긴 화면 읽기 및 접근성용 본문 바로가기 이외의 내비게이션 수단으로 사용하지 않습니다.

## URL 확인

- `/`
- `/services/monthly`
- `/services/short-term`
- `/services/long-term`
- `/services/accident`
- `/cars`
- `/about`
- `/reviews`
- `/faq`
- `/contact`
- `/privacy`

## 로컬 테스트

```bash
npm run lint
npm run build
npm run dev
```

`main`에 반영하기 전 현재 브랜치, 기존 작업 트리 상태, 원격 `main` 최신화 여부를 확인하세요. 온라인 문의는 1차 검수용이며 실제 전송하지 않습니다.
