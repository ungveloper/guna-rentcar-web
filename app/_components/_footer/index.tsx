import Link from "next/link";
import Icon from "../ui/icon";
import {BRAND,services} from "../../_lib/site-data";
export default function Footer(){return <footer className="site-footer"><div className="container">
  <div className="footer-main"><div className="footer-brand"><Link href="/" className="footer-wordmark"><span>GUNA<span className="footer-wordmark-dot">.</span></span><small>RENTCAR</small></Link><p>깨끗한 차량, 당신의 일정에 맞춘 렌트.<br/>부산에서 이어온 믿을 수 있는 이동 파트너.</p><a className="footer-call" href={BRAND.tel}><Icon name="phone" size={21}/>{BRAND.phone}</a><span className="footer-help">연중무휴 · 24시간 전화 상담</span></div>
  <div className="footer-links"><div><h3>렌트 서비스</h3>{services.map(s=><Link key={s.key} href={`/services/${s.key}`}>{s.title}</Link>)}</div><div><h3>고객 지원</h3><Link href="/cars">전체 차량</Link><Link href="/faq">자주 묻는 질문</Link><Link href="/reviews">고객 후기</Link><Link href="/contact">상담 및 오시는 길</Link></div><div><h3>회사 정보</h3><Link href="/about">건아렌트카 소개</Link><Link href="/privacy">개인정보처리방침</Link><span>네이버 채널 링크 준비 중</span></div></div></div>
  <div className="footer-bottom"><span>상호: {BRAND.name} <i/> 주소: {BRAND.address} <i/> 대표전화: {BRAND.phone}</span><span>© 2026 GUNA RENTCAR. All rights reserved.</span></div>
  <p className="footer-disclaimer">이 사이트는 1차 개발 검수 중입니다. 차량 이미지·요금 등 일부 콘텐츠는 참고 자료 기반의 시안이며, 실제 대여 조건은 전화 상담으로 확인해 주세요. 문의 양식은 아직 실제 접수되지 않습니다.</p>
</div></footer>}
