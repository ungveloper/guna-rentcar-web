import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@/components/Analytics";
import { getSiteUrl } from "@/lib/seo";
import { site } from "@/data/site";
import "./globals.css";

const url = getSiteUrl();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11141a",
};

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "부산 렌터카 건아렌트카 | 단기·월·장기렌트·사고대차",
  description: "부산 연제구 연산동 건아렌트카. 약 20년 운영 경험, 15개 차종의 기준 대여 요금과 단기렌트, 월렌트, 장기렌트, 보험사고대차를 안내합니다. 차량 및 요금 문의 051-866-1124.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: { index: process.env.VERCEL_ENV !== "preview", follow: process.env.VERCEL_ENV !== "preview" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: site.name,
    url: "/",
    title: "부산 렌터카, 다양한 선택의 시작 | 건아렌트카",
    description: "부산 연산동 20년 운영 경험. 단기·월·장기렌트와 사고대차를 전화로 상담하세요.",
    images: [{ url: "/images/og/cover.png", width: 1200, height: 630, alt: "건아렌트카 부산 렌터카 안내" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/cover.png"] },
  icons: { icon: "/favicon.ico", apple: "/apple-icon.png" },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  "@id": `${url}/#business`,
  name: site.legalName,
  alternateName: [site.name, site.englishName],
  url,
  telephone: "+82-51-866-1124",
  description: "부산 연제구 연산동에서 단기렌트, 월렌트, 장기렌트 및 보험사고대차를 안내하는 렌터카 업체",
  address: {
    "@type": "PostalAddress",
    streetAddress: "반송로 68",
    addressLocality: "연제구",
    addressRegion: "부산광역시",
    addressCountry: "KR",
  },
  areaServed: ["부산광역시", "김해시", "양산시", "창원시"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "렌터카 서비스",
    itemListElement: ["단기렌트", "월렌트", "장기렌트", "보험사고대차"].map((name) => ({ "@type": "OfferCatalog", name })),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="ko"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }} />
    {children}
    <Analytics />
  </body></html>;
}
