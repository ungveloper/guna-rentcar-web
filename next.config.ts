import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 개발 도구 표시만 숨깁니다. 실제 오류 알림과 빌드 검사는 유지됩니다.
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
