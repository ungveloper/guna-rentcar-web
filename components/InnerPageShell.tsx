import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCallBar } from "@/components/MobileCallBar";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";

export function InnerPageShell({ children }: { children: ReactNode }) {
  return <>
    <a className="skip-link" href="#detail-main">본문으로 바로가기</a>
    <Header />
    <main id="detail-main">{children}</main>
    <div className="detail-bottom-cta">
      <div className="container detail-bottom-cta__inner">
        <div><span className="micro-label micro-label--light">GUN-A RENTCAR · BUSAN</span><h2>필요한 차량과 일정,<br />전화로 문의하세요.</h2><p>대여 가능 여부와 최종 요금·조건은 전화 상담으로 안내해 드립니다.</p></div>
        <PhoneLink placement="service_bottom" className="detail-call-button"><Icon name="phone" size={19} /> 051-866-1124 <Icon name="arrowRight" size={18}/></PhoneLink>
      </div>
    </div>
    <SiteFooter />
    <MobileCallBar />
  </>;
}
