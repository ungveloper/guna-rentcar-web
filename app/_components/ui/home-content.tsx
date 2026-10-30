"use client";
import Link from "next/link";
import Image from "next/image";
import { BRAND, cars, services, faqs } from "../../_lib/site-data";
import { useConsult } from "./consult-provider";
import Icon from "./icon";
import FaqList from "./faq-list";

const benefits=[
  {number:"01",icon:"sparkle" as const,title:"타기 전부터 챙기는 청결",text:"차량은 평소에 점검하고 실내도 깨끗하게 관리합니다."},
  {number:"02",icon:"heart" as const,title:"궁금한 건 편하게 물어보세요",text:"어떤 차가 필요한지 듣고 대여 조건을 설명해 드립니다."},
  {number:"03",icon:"calendar" as const,title:"이른 출발도 미리 상담",text:"다음 날 새벽에 출발해야 한다면 전날 저녁 인수도 상담해 보세요."},
];
const featured=[cars[2],cars[4],cars[7]];
export default function HomeContent(){
 const {openChooser}=useConsult();
 return <div data-page="home" data-page-layout="home" className="bg-white">
   <section className="relative isolate overflow-hidden bg-[#f6f6f3] px-5 pt-11 pb-10 sm:px-8 sm:pt-16 lg:pt-20">
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[65%] bg-[radial-gradient(ellipse_at_82%_15%,#e8dcc9_0%,transparent_55%)]" />
    <div className="relative mx-auto grid max-w-[1320px] gap-10 lg:min-h-[550px] lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-4">
     <div className="relative z-10 pt-5 lg:py-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#dddfdb] bg-white/80 px-4 py-2 text-[11px] font-bold tracking-[.12em] text-[#5b5e5c] sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-[#AA895B]"/> BUSAN · SINCE 2006</div>
      <h1 className="mt-8 text-[clamp(46px,5.8vw,88px)] font-black leading-[1.075] tracking-[-.077em] text-[#1b2425]">깨끗한 차량,<br/>당신의 일정에<br/><span className="text-[#AA895B]">맞춘 렌트.</span></h1>
      <p className="mt-7 max-w-[480px] text-[15px] leading-[1.9] text-[#626967] sm:text-[17px]">차는 필요한 날짜에, 일정에 맞춰 빌리세요.<br className="hidden sm:block"/> 부산 건아렌트카가 차종과 인수 시간을 함께 확인해 드립니다.</p>
      <div className="mt-9 flex flex-wrap gap-3">
       <Link href="/cars" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#192526] px-7 py-4 text-[14px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#AA895B]">차량 둘러보기 <Icon name="arrow-up" size={18}/></Link>
       <button type="button" onClick={()=>openChooser()} className="inline-flex items-center justify-center gap-3 rounded-full border border-[#cbd0cd] bg-white px-7 py-4 text-[14px] font-bold text-[#24302e] transition duration-300 hover:border-[#AA895B] hover:text-[#AA895B]">대여 문의하기 <Icon name="arrow" size={18}/></button>
      </div>
      <p className="mt-6 text-[12px] font-medium text-[#7d837f]">전화 상담은 24시간 가능합니다. 실제 대여 가능 여부는 문의해 주세요.</p>
     </div>
     <div className="relative min-h-[350px] overflow-hidden rounded-[30px] bg-[#e2e5e1] sm:min-h-[510px] lg:h-[610px] lg:rounded-[38px]">
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(145deg,#e9ece9_0%,#d8ddda_50%,#c7cbc6_100%)]" />
      <div aria-hidden="true" className="absolute -right-14 top-9 h-[310px] w-[310px] rounded-full border-[64px] border-white/30 lg:h-[470px] lg:w-[470px]" />
      <span className="absolute left-7 top-7 z-10 text-[11px] font-bold tracking-[.23em] text-[#374441]/70 sm:left-10 sm:top-10">GUNA / YOUR DRIVE</span>
      <span className="absolute top-[28%] -left-3 z-0 text-[clamp(85px,15vw,200px)] font-black leading-none tracking-[-.12em] text-white/45">GO.</span>
      <Image src="/images/cars/avante.webp" priority fill sizes="(max-width: 1024px) 100vw, 50vw" alt="아반떼 CN7 차량 참고 사진" className="relative z-[1] object-cover object-center sm:object-cover" />
      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4 rounded-[18px] border border-white/30 bg-[#152222]/75 px-5 py-4 text-white backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:px-7 sm:py-5">
       <div><p className="text-[10px] font-bold tracking-[.2em] text-white/60">MADE FOR YOUR MOMENT</p><p className="mt-1 text-xl font-bold tracking-[-.035em] sm:text-2xl">이른 아침 출발도,<br/>미리 상의해 주세요.</p></div>
       <span className="max-w-[95px] text-right text-[10px] leading-4 text-white/70">차종 참고 사진<br/>실제 차량 확인 필요</span>
      </div>
     </div>
    </div>
    <div className="relative mx-auto mt-8 grid max-w-[1320px] gap-4 border-t border-[#d9ddda] pt-6 sm:grid-cols-3 sm:gap-8 lg:mt-12">
     {[{n:"2006",title:"2006년부터 영업 중",sub:"2006년 11월부터"},{n:"24H",title:"24시간 전화 상담",sub:"차량·요금은 전화 확인"},{n:"16",title:"등록 차종 16종",sub:"경차부터 승합차까지"}].map(v=><div className="flex items-center gap-4" key={v.n}><strong className="text-[29px] font-black tracking-[-.07em] text-[#AA895B] sm:text-[34px]">{v.n}</strong><div className="border-l border-[#d0d5d1] pl-4"><p className="text-[13px] font-bold text-[#263130]">{v.title}</p><p className="mt-1 text-xs text-[#858b87]">{v.sub}</p></div></div>)}
    </div>
   </section>

   <section className="px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="services-heading">
    <div className="mx-auto max-w-[1320px]">
     <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><span className="text-[12px] font-extrabold tracking-[.23em] text-[#AA895B]">01 / OUR SERVICES</span><h2 id="services-heading" className="mt-5 text-[clamp(32px,4.2vw,57px)] font-black leading-[1.22] tracking-[-.06em] text-[#1d2828]">차가 필요한 기간은<br/>얼마나 되나요?</h2></div><p className="max-w-[410px] text-[15px] leading-8 text-[#737b78]">몇 시간만 쓸 차부터 몇 달간 탈 차까지.<br/>원하는 기간에 맞는 서비스를 골라보세요.</p></div>
     <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{services.map((s,i)=><Link key={s.key} href={`/services/${s.key}`} className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-[24px] border border-[#e7e9e5] bg-[#f5f6f3] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#AA895B]/50 hover:bg-[#1c2829] hover:shadow-[0_20px_60px_rgba(20,30,30,.12)] sm:p-8"><span className="relative z-10 flex items-center justify-between text-[11px] font-extrabold tracking-[.2em] text-[#909894] group-hover:text-white/50">RENTAL / 0{i+1}<span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cdd2cf] text-[#293431] transition-colors group-hover:border-white/30 group-hover:bg-[#AA895B] group-hover:text-white"><Icon name="arrow-up" size={19}/></span></span><div className="relative z-10 mt-auto"><h3 className="text-[29px] font-black tracking-[-.065em] text-[#1c2828] group-hover:text-white">{s.title}</h3><p className="mt-3 line-clamp-2 text-sm leading-7 text-[#77817b] group-hover:text-white/65">{s.summary}</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#AA895B] group-hover:text-[#ddc099]">내용 확인하기 <Icon name="arrow" size={14}/></span></div></Link>)}</div>
    </div>
   </section>

   <section className="bg-[#f6f7f5] px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="featured-heading"><div className="mx-auto max-w-[1320px]">
    <div className="flex flex-wrap items-end justify-between gap-6"><div><span className="text-[12px] font-extrabold tracking-[.23em] text-[#AA895B]">02 / FIND YOUR CAR</span><h2 id="featured-heading" className="mt-5 text-[clamp(32px,4.2vw,57px)] font-black tracking-[-.065em] text-[#192727]">빌릴 차부터<br/>골라볼까요?</h2></div><Link href="/cars" className="inline-flex items-center gap-3 rounded-full border border-[#bcc5bf] px-6 py-3.5 text-sm font-bold text-[#263330] transition hover:border-[#AA895B] hover:text-[#AA895B]">차종 16개 모두 보기 <Icon name="arrow-up" size={17}/></Link></div>
    <div className="mt-10 grid gap-5 md:grid-cols-3">{featured.map((car,i)=><Link key={car.id} href="/cars" className="group overflow-hidden rounded-[26px] border border-[#e5e9e5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,30,30,.08)]"><div className="relative h-[235px] overflow-hidden bg-[#e3e7e5] sm:h-[265px]"><Image src={car.image!} fill sizes="(max-width:768px) 100vw, 33vw" alt={`${car.name} 참고 사진`} className="object-cover transition duration-700 group-hover:scale-105"/><span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-2 text-[11px] font-bold text-[#263331]">0{i+1} / PICK</span></div><div className="flex items-center justify-between p-6"><div><span className="text-xs font-semibold text-[#A58761]">{car.category}</span><h3 className="mt-2 text-xl font-black tracking-[-.04em] text-[#1e2a29]">{car.name}</h3></div><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1b2929] text-white transition group-hover:bg-[#AA895B]"><Icon name="arrow-up" size={19}/></span></div></Link>)}</div>
    <p className="mt-5 text-xs leading-6 text-[#88918d]">사진은 차종 참고용입니다. 실제 차량과 최종 요금은 전화로 확인해 주세요.</p>
   </div></section>

   <section className="overflow-hidden bg-[#1c2829] px-5 py-20 text-white sm:px-8 sm:py-28"><div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><span className="text-[12px] font-extrabold tracking-[.22em] text-[#d2b58c]">03 / THE GUNA STANDARD</span><h2 className="mt-6 text-[clamp(36px,4.8vw,67px)] font-black leading-[1.2] tracking-[-.07em]">차는 깨끗하게.<br/><span className="text-[#d8bc92]">문의에는 친절하게.</span></h2><p className="mt-7 max-w-[470px] text-sm leading-8 text-white/60 sm:text-base">차 안이 깨끗했다는 말씀, 상담이 친절했다는 말씀을 자주 듣습니다. 출발 시간이나 인수 장소도 가능한 범위에서 맞춰드리려고 합니다.</p><Link href="/about" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1c2829] transition hover:bg-[#e6d2b5]">건아렌트카 소개 <Icon name="arrow-up" size={16}/></Link></div><div className="divide-y divide-white/15 border-t border-b border-white/15">{benefits.map(b=><div key={b.number} className="flex items-start gap-5 py-7 sm:gap-8 sm:py-9"><span className="pt-1 text-xs font-bold text-[#c9aa80]">{b.number}</span><div className="flex-1"><h3 className="text-xl font-bold tracking-[-.035em] sm:text-2xl">{b.title}</h3><p className="mt-2 text-sm leading-7 text-white/55">{b.text}</p></div><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#d0b38b]"><Icon name={b.icon} size={22}/></span></div>)}</div></div></section>

   <section className="bg-white px-5 pt-20 sm:px-8 sm:pt-28" aria-label="고객 후기 안내"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-6 rounded-[28px] bg-[#eff2ed] p-8 sm:p-12 md:flex-row md:items-center"><div><span className="text-xs font-extrabold tracking-[.18em] text-[#AA895B]">REAL STORIES</span><h2 className="mt-4 text-[clamp(27px,3.4vw,42px)] font-black leading-[1.3] tracking-[-.055em] text-[#1b2929]">이용하신 분들의<br/>후기를 확인해 보세요.</h2><p className="mt-4 text-sm leading-7 text-[#7c877d]">네이버 플레이스에 남겨주신 후기는 원문 확인 후 이곳에도 올리겠습니다.</p></div><Link href="/reviews" className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#1b2929] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#AA895B] md:self-center">고객 후기 보기 <Icon name="arrow-up" size={18}/></Link></div></section>

   <section className="px-5 py-20 sm:px-8 sm:py-24"><div className="mx-auto max-w-[1320px] lg:grid lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><span className="text-xs font-bold tracking-[.2em] text-[#AA895B]">04 / GOOD TO KNOW</span><h2 className="mt-4 text-[clamp(30px,4vw,50px)] font-black leading-[1.25] tracking-[-.06em]">대여 전에<br/>궁금한 점이 있다면</h2><p className="mt-5 text-sm leading-8 text-[#77817b]">보험, 운전경력, 차량 반납 방법을 정리했습니다.</p><Link href="/faq" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#AA895B] hover:underline">FAQ 전체 보기 <Icon name="arrow-up" size={17}/></Link></div><div className="mt-9 lg:mt-0"><FaqList items={faqs.filter(q=>q.home).slice(0,5)}/></div></div></section>

   <section className="bg-[#AA895B] px-5 py-16 text-white sm:px-8 sm:py-20"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 md:flex-row md:items-center"><div><span className="text-xs font-bold tracking-[.22em] text-white/75">YOUR NEXT MOVE</span><h2 className="mt-4 text-3xl font-black tracking-[-.065em] sm:text-[50px]">언제부터 차가 필요하세요?<br/>전화로 알려주세요.</h2><p className="mt-4 text-sm text-white/80">원하는 날짜와 차종을 알려주시면 확인해 드립니다. {BRAND.phone}</p></div><button type="button" onClick={()=>openChooser()} className="inline-flex shrink-0 items-center justify-center gap-4 self-start rounded-full bg-[#1b2929] px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#1b2929] md:self-center">전화·문의 선택하기 <Icon name="arrow-up" size={19}/></button></div></section>
 </div>;
}
