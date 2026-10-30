# 라우팅 및 스타일 업데이트

이전 동적 서비스 라우팅 방식은 제거했습니다. 개별 서비스 폴더의 layout.tsx와 page.tsx로 구현합니다.

CSS 스타일은 컴포넌트 JSX에서 Tailwind 유틸리티로 설정합니다. `app/globals.css`는 Tailwind 불러오기만 포함합니다.

구체적인 페이지 목록과 검증 방법은 `docs/ROUTING_TAILWIND_V4.md`를 참고하세요.
