import type {Metadata} from "next";
import PageHero from "../_components/ui/page-hero";
import {BRAND} from "../_lib/site-data";
import Icon from "../_components/ui/icon";
import Link from "next/link";
import {pageMetadata} from "../_lib/seo";
export const metadata:Metadata=pageMetadata("개인정보처리방침 | 건아렌트카", "건아렌트카 개인정보처리방침 페이지. 1차 개발 검수 단계이며 정식 방침은 실제 운영 정보 확인 후 게시됩니다.", "/privacy");
export default function PrivacyPage(){return <><PageHero eyebrow="PRIVACY POLICY" title={<>개인정보처리방침</>} description="고객의 소중한 정보를 안전하게 다루기 위한 안내입니다." compact/><section className="section privacy-section"><div className="container narrow-container"><div className="privacy-warning"><Icon name="shield" size={28}/><div><h2>정식 개인정보처리방침 입력 예정</h2><p>현재 페이지는 1차 개발 시안입니다. 실제 개인정보 수집·보유·처리위탁과 책임자 정보가 검증되지 않아 법적 효력이 있는 확정 정책을 표시하지 않습니다. <strong>현재 온라인 상담 양식은 개인정보를 전송하거나 저장하지 않습니다.</strong></p></div></div><div className="policy-outline"><span className="eyebrow">PUBLISHING CHECKLIST · TO BE CONFIRMED</span><h3>정식 운영 전 확인 및 게시할 항목</h3>{["개인정보 처리 목적과 수집 항목","개인정보 보유·이용 기간 및 파기 절차","개인정보 제3자 제공 및 처리위탁 해당 여부","정보주체의 권리 행사 및 문의 방법","개인정보 보호책임자와 연락처","Notion 등 실제 연동 서비스의 처리 흐름","정식 방침 시행일 및 변경 이력"].map((item,i)=><div key={item} className="policy-row"><span>{String(i+1).padStart(2,"0")}</span>{item}<span className="policy-pending">확인 예정</span></div>)}</div><div className="privacy-contact"><p>문의가 필요하시면 전화로 연락해 주세요.</p><a href={BRAND.tel}><Icon name="phone" size={18}/> {BRAND.phone}</a><Link href="/contact">오시는 길 확인 <Icon name="arrow" size={16}/></Link></div></div></section></>}
