import type {Metadata} from "next";
import {notFound} from "next/navigation";
import PageHero from "../../_components/ui/page-hero";
import VehicleExplorer from "../../_components/ui/vehicle-explorer";
import Icon from "../../_components/ui/icon";
import SectionHeading from "../../_components/ui/section-heading";
import FaqList from "../../_components/ui/faq-list";
import EventSection from "../../_components/ui/event-section";
import CtaBand from "../../_components/ui/cta-band";
import {faqs,getService,services,type ServiceKey} from "../../_lib/site-data";
import {pageMetadata} from "../../_lib/seo";
import Link from "next/link";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return services.map(s=>({slug:s.key}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const item=getService(slug);if(!item)return {};return pageMetadata(`${item.title} | 부산 건아렌트카`,`${item.summary} 부산 건아렌트카 24시간 전화 상담, 이용 가능 여부 및 최종 조건은 전화 문의.`,`/services/${slug}`);}
export default async function ServicePage({params}:Props){
  const {slug}=await params;const service=getService(slug);if(!service)notFound();
  const quoteOnly=service.key!=="short-term";
  const related=faqs.filter(q=>q.services.includes(service.key)).slice(0,6);
  return <><PageHero eyebrow={service.kicker} title={<>{service.title},<br/><em>{service.subtitle}</em></>} description={service.summary}><div className="page-hero-pills"><span><Icon name="phone" size={15}/> 24시간 전화 상담</span><span><Icon name="shield" size={15}/> 완전자차 기본 포함*</span></div></PageHero>
  <section className="section service-intro-section"><div className="container"><SectionHeading eyebrow="FOR YOUR JOURNEY" title={<>이런 상황이라면,<br/>{service.title}를 추천합니다.</>} description="차량이 필요한 이유는 각자 다르니까요. 건아렌트카가 상황을 듣고 안내합니다."/><div className="recommend-grid">{service.recommend.map((text,i)=><div className="recommend-card" key={text}><span>0{i+1}</span><Icon name="check" size={24}/><p>{text}</p></div>)}</div></div></section>
  <section className="section service-benefits-section"><div className="container"><SectionHeading eyebrow="THE GUNA STANDARD" title="건아렌트카가 함께하는 방법" description="청결한 차량, 유연한 일정 상담, 고객을 생각하는 응대."/><div className="benefit-grid">{service.benefits.map((item,i)=><article className="benefit-card" key={item.title}><span className="benefit-index">0{i+1} —</span><div className="benefit-icon"><Icon name={i===0?"heart":i===1?"sparkle":"calendar"} size={28}/></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section>
  <section className="section service-steps-section"><div className="container"><SectionHeading eyebrow="HOW IT WORKS" title="이용 절차는 간단하게." description="차량 인수부터 반납까지, 자세한 조건은 개별 상담으로 안내합니다."/><div className="steps-grid">{service.steps.map((step,i)=><div className="step" key={step.title}><span className="step-number">STEP 0{i+1}</span><h3>{step.title}</h3><p>{step.detail}</p></div>)}</div><p className="step-note"><Icon name="info" size={17}/> 차량 인수·반납 장소, 시간, 비용은 사전 전화 상담을 통해 확인해 주세요.</p></div></section>
  <section className="section listing-section service-cars"><div className="container"><SectionHeading eyebrow="EXPLORE ALL VEHICLES" title="다양한 차량을 둘러보세요." description={quoteOnly?"모든 등록 차종을 살펴보실 수 있으며, 이 서비스의 차량별 금액은 개별 전화 견적으로 안내합니다.":"차량별 시간별 참고 요금을 확인하고, 실제 예약 가능 여부와 최종 요금은 전화로 문의해 주세요."}/><VehicleExplorer variant="service" service={service.key as ServiceKey} quoteOnly={quoteOnly}/><div className="insurance-brief"><Icon name="shield" size={27}/><div><h3>완전자차보험 기본 포함</h3><p>보험은 약관상 예외 및 자기부담금, 휴차료 등 조건이 있으므로 이용 전 자세히 확인해 주세요.</p></div><Link href="/faq">보험 안내 <Icon name="arrow" size={17}/></Link></div></div></section>
  <section className="section faq-preview small-faq"><div className="container"><SectionHeading eyebrow="QUICK ANSWERS" title={`${service.title}, 자주 묻는 질문`} description="더 많은 이용 안내는 FAQ 페이지에서 확인할 수 있습니다."/><FaqList items={related}/><div className="center-action"><Link className="button button-outline" href="/faq">FAQ 전체 보기 <Icon name="arrow" size={18}/></Link></div></div></section>
  <EventSection service={service.key as ServiceKey}/><CtaBand compact/>
</>;
}
