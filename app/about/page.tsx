import type {Metadata} from "next";
import PageHero from "../_components/ui/page-hero";
import CtaBand from "../_components/ui/cta-band";
import Reviews from "../_components/ui/reviews";
import Icon from "../_components/ui/icon";
import SectionHeading from "../_components/ui/section-heading";
import {pageMetadata} from "../_lib/seo";
export const metadata:Metadata=pageMetadata("회사 소개 | 2006년부터 이어온 건아렌트카", "2006년 11월부터 부산에서 운영해 온 건아렌트카. 청결한 차량 관리와 친절한 고객 상담, 일정에 맞춘 서비스에 대해 알아보세요.", "/about");
export default function AboutPage(){return <><PageHero eyebrow="OUR STORY" title={<>이동의 모든 순간에,<br/><em>기본을 더 중요하게.</em></>} description="깨끗한 차량, 친절한 응대, 고객 일정에 대한 배려. 건아렌트카가 오랫동안 중요하게 생각해 온 가치입니다."/>
  <section className="section about-manifesto"><div className="container about-manifesto-inner"><div><span className="eyebrow"><span className="eyebrow-line"/> OUR PROMISE</span><h2>차량을 빌리는<br/>그 이상을 생각합니다.</h2></div><div><p>누군가에게 렌터카는 특별한 여행의 시작이고, 또 누군가에게는 매일의 출퇴근을 위한 꼭 필요한 이동 수단입니다.</p><p>건아렌트카는 이용 목적과 상황이 모두 다르다는 점을 이해하고, 고객에게 적합한 차종과 이용 방법을 친절하게 안내하고자 합니다.</p></div></div></section>
  <section className="section about-values"><div className="container"><SectionHeading eyebrow="WHAT MATTERS" title="기본을 꾸준히 지켜갑니다." description="실제 서비스 경험에서 중요하게 생각하는 세 가지 가치를 소개합니다."/><div className="about-value-grid"><article><span className="about-value-number">01</span><Icon name="sparkle" size={36}/><h3>차량의 청결함</h3><p>차량을 받는 순간부터 기분 좋게 출발하실 수 있도록 차량 상태와 관리에 신경 씁니다.</p></article><article><span className="about-value-number">02</span><Icon name="heart" size={36}/><h3>상담의 친절함</h3><p>일률적인 안내보다 고객의 상황을 먼저 듣고 가능한 이용 방법을 함께 찾아갑니다.</p></article><article><span className="about-value-number">03</span><Icon name="calendar" size={36}/><h3>일정에 대한 배려</h3><p>차량 인수·반납 방법은 사전에 협의하여 가능한 범위에서 유연하게 조율합니다.</p></article></div></div></section>
  <section className="about-history"><div className="container about-history-inner"><div><span className="eyebrow light">A LONG WAY TOGETHER</span><h2>2006<span>.</span>11</h2></div><div><h3>부산에서 시작된<br/>건아렌트카의 이야기</h3><p>2006년 11월부터 이어온 운영 경험을 바탕으로 오늘도 고객의 이동을 돕고 있습니다. 오랜 경험이 언제나 좋은 서비스로 이어질 수 있도록 기본에 충실하겠습니다.</p><small>실제 사무실·차량 관리 현장 사진은 촬영 후 추가 예정입니다.</small></div></div></section>
  <Reviews compact/><CtaBand compact/>
</>}
