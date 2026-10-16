import Link from "next/link";
import { DetailHero } from "@/components/DetailHero";
import { InnerPageShell } from "@/components/InnerPageShell";
import { ShortTermRates } from "@/components/ShortTermRates";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";
import { serviceDetails, serviceOrder, type ServiceKey } from "@/data/service-details";
import { escapeJson, serviceStructuredData } from "@/lib/service-seo";

function Points({ items }: { items: readonly { title: string; description: string }[] }) {
  return <div className="service-seo__points">{items.map((point, index) => <article key={point.title} className="service-seo__point"><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3>{point.title}</h3><p>{point.description}</p></article>)}</div>;
}

export function ServiceDetailsPage({ slug }: { slug: ServiceKey }) {
  const item = serviceDetails[slug];
  return <InnerPageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: escapeJson(serviceStructuredData(slug)) }} />
    <DetailHero eyebrow={item.heroEyebrow} title={item.heroTitle} accent={item.heroAccent} description={item.heroDescription} image={item.image} imageAlt={item.imageAlt} detailLabel={item.name} breadcrumbParent={{ href: "/services", label: "렌트 서비스" }} />
    <section className="detail-section service-seo" id="details" aria-labelledby="service-intro-title"><div className="container"><div className="detail-heading"><span className="micro-label">GUN-A RENTCAR / SERVICE GUIDE</span><h2 id="service-intro-title">{item.name} 이용 안내</h2><p>{item.intro}</p></div><h3 className="service-seo__subheading">이런 상황이라면 살펴보세요</h3><Points items={item.appropriateFor}/></div></section>
    {slug === "short-term" && <section className="detail-section detail-section--soft" aria-labelledby="short-term-rates"><div className="container"><div className="detail-heading"><span className="micro-label">ACTUAL RATE GUIDE</span><h2 id="short-term-rates">차량별 단기 대여 기준 요금</h2><p>건아렌트카에서 제공한 요금표입니다. 기간별 1일 금액과 시간별 요금이 다르므로 기준을 확인해 주세요.</p></div><ShortTermRates/><div className="detail-notebox"><strong>대여 요금 안내</strong><p>1~2일·3~6일 등 기간별 표시는 1일 기준 요금입니다. 카니발·스타리아 시간별 요금은 제공된 원본 요금표에 없으므로 전화로 확인해 주세요. 최종 금액과 보험 조건은 상담 시 확정됩니다.</p></div></div></section>}
    <section className={`detail-section ${slug === "short-term" ? "" : "detail-section--soft"}`} aria-labelledby="service-advantages-title"><div className="container"><div className="detail-heading"><span className="micro-label">CONSIDERATIONS</span><h2 id="service-advantages-title">{item.name}의 특징과 장점</h2><p>이용 목적에 따라 고려할 수 있는 특성입니다. 개별 차량의 제공 여부나 비용 혜택을 보장하는 내용은 아닙니다.</p></div><Points items={item.advantages}/></div></section>
    <section className="detail-section" aria-labelledby="service-cautions-title"><div className="container"><div className="detail-heading"><span className="micro-label">BEFORE YOU RENT</span><h2 id="service-cautions-title">계약 전 확인할 사항</h2><p>렌터카 이용 전 확인하면 좋은 제한 사항과 확인 항목입니다.</p></div><Points items={item.cautions}/></div></section>
    <section className="detail-section detail-section--soft" aria-labelledby="service-steps-title"><div className="container"><div className="detail-heading"><span className="micro-label">HOW TO INQUIRE</span><h2 id="service-steps-title">상담 및 이용 절차</h2><p>온라인 예약 대신 전화로 실제 가능한 일정과 조건을 확인합니다.</p></div><div className="service-seo__steps">{item.steps.map((step, index) => <article key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></article>)}</div><PhoneLink placement={`seo_${slug}`} className="detail-inline-button">전화로 대여 조건 문의 <Icon name="arrowRight" size={17}/></PhoneLink></div></section>
    <section className="detail-section" aria-labelledby="service-faq-title"><div className="container"><div className="detail-heading"><span className="micro-label">FREQUENTLY ASKED QUESTIONS</span><h2 id="service-faq-title">{item.name} 자주 묻는 질문</h2><p>답변은 일반적인 안내이며 확정 요금과 계약 조건은 개별 상담을 통해 확인해야 합니다.</p></div><div className="service-seo__faq">{item.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>
    <section className="detail-section detail-section--soft" aria-labelledby="service-related-title"><div className="container"><div className="detail-heading"><span className="micro-label">OTHER RENTAL OPTIONS</span><h2 id="service-related-title">다른 렌트 서비스도 비교하세요</h2><p>이용 기간과 목적이 달라지면 적합한 서비스도 달라질 수 있습니다.</p></div><div className="service-seo__related">{serviceOrder.filter((key) => key !== slug).map((key) => <Link key={key} href={serviceDetails[key].path}><strong>{serviceDetails[key].name}</strong><span>{serviceDetails[key].heroDescription}</span><span className="service-seo__related-arrow" aria-hidden="true">↗</span></Link>)}</div><div className="detail-inline-links"><Link href="/cars">전체 차량·요금 확인 →</Link><Link href="/guide">이용 절차·공통 FAQ →</Link><Link href="/contact">위치·전화번호 →</Link></div></div></section>
  </InnerPageShell>;
}
