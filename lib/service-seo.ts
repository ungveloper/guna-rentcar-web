import type { Metadata } from "next";
import { serviceDetails, type ServiceKey } from "@/data/service-details";
import { getSiteUrl } from "@/lib/seo";

const escapeJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
export { escapeJson };

/** 메타데이터와 표시 콘텐츠 모두 data/service-details.ts를 참조합니다. */
export function serviceMetadata(slug: ServiceKey): Metadata {
  const item = serviceDetails[slug];
  return {
    title: item.seoTitle,
    description: item.seoDescription,
    alternates: { canonical: item.path },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: "건아렌트카",
      title: item.seoTitle,
      description: item.seoDescription,
      url: item.path,
      images: [{ url: "/images/og/cover.png", width: 1200, height: 630, alt: "건아렌트카 렌터카 서비스 안내" }],
    },
    twitter: { card: "summary_large_image", title: item.seoTitle, description: item.seoDescription, images: ["/images/og/cover.png"] },
  };
}

/** Service / BreadcrumbList / FAQPage: 화면에 표시되는 실제 내용만 JSON-LD에 기재합니다. */
export function serviceStructuredData(slug: ServiceKey) {
  const item = serviceDetails[slug];
  const siteUrl = getSiteUrl();
  const url = new URL(item.path, siteUrl).toString();
  const breadcrumb = [
    { name: "홈", path: "/" },
    { name: "렌트 서비스", path: "/services" },
    { name: item.name, path: item.path },
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `건아렌트카 ${item.name}`,
        serviceType: item.name,
        description: item.intro,
        url,
        areaServed: { "@type": "AdministrativeArea", name: "부산광역시" },
        provider: { "@id": `${siteUrl}/#business` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: breadcrumb.map((part, index) => ({
          "@type": "ListItem", position: index + 1, name: part.name,
          item: new URL(part.path, siteUrl).toString(),
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: item.faqs.map((faq) => ({
          "@type": "Question", name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}
