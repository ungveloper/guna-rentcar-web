import Image from "next/image";
import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";

type Props = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  imageAlt: string;
  detailLabel: string;
};

export function DetailHero({ eyebrow, title, accent, description, image, imageAlt, detailLabel }: Props) {
  return <>
    <nav className="detail-breadcrumb container" aria-label="현재 위치"><Link href="/">홈</Link><span aria-hidden="true">/</span><span>{detailLabel}</span></nav>
    <section className="detail-hero" aria-labelledby="detail-hero-title">
      <div className="detail-hero__photo"><Image src={image} alt={imageAlt} fill priority sizes="100vw" /></div>
      <div className="detail-hero__scrim" />
      <div className="container detail-hero__inner">
        <div className="detail-hero__copy"><p className="micro-label micro-label--light">{eyebrow}</p><h1 id="detail-hero-title">{title}<br /><span>{accent}</span></h1><p>{description}</p>
          <div className="detail-hero__links"><a href="#details" className="detail-action detail-action--light">내용 확인 <Icon name="arrowRight" size={17}/></a><PhoneLink placement="detail_hero" className="detail-action detail-action--outline">전화 문의 <Icon name="phone" size={16}/></PhoneLink></div>
        </div>
        <span className="detail-hero__marker">GUN-A RENTCAR / BUSAN</span>
      </div>
    </section>
  </>;
}
