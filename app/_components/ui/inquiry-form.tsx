"use client";
import {useState,type FormEvent} from "react";
import Link from "next/link";
import Icon from "./icon";
import {BRAND, cars, services, type ServiceKey} from "../../_lib/site-data";

type InquiryContext = {car?:string;event?:string;service?:ServiceKey;source?:string};
export type {InquiryContext};
const isoDate = (value:string) => {
  if(!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d=new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0,10)===value;
};
function DateInput({id,label,value,onChange}:{id:string;label:string;value:string;onChange:(value:string)=>void}){
  return <div className="field date-field"><label htmlFor={`${id}-text`}>{label}<span>선택</span></label><div className="date-control"><input id={`${id}-text`} name={`${id}-text`} type="text" inputMode="numeric" placeholder="YYYY-MM-DD" maxLength={10} value={value} onChange={e=>onChange(e.target.value)} aria-describedby={`${id}-help`}/><input type="date" aria-label={`${label} 달력에서 선택`} className="native-date" value={isoDate(value)?value:""} onChange={e=>onChange(e.target.value)}/></div><small id={`${id}-help`}>날짜를 직접 입력하거나 달력에서 선택하세요.</small></div>;
}
export default function InquiryForm({context={},modal=false}:{context?:InquiryContext;modal?:boolean}){
  const [name,setName]=useState("");const [phone,setPhone]=useState("");
  const [service,setService]=useState<ServiceKey|"">(context.service??"");
  const [car,setCar]=useState(context.car??"");const [start,setStart]=useState("");const [end,setEnd]=useState("");
  const [message,setMessage]=useState("");const [agree,setAgree]=useState(false);
  const [notice,setNotice]=useState("");
  function preview(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(!name.trim()||name.trim().length>60){setNotice("이름을 1~60자로 입력해 주세요.");return;}
    const digits=phone.replace(/\D/g,"");
    if(!/^0\d{8,10}$/.test(digits)){setNotice("유효한 국내 연락처를 입력해 주세요.");return;}
    if(!service){setNotice("렌트 유형을 선택해 주세요.");return;}
    if((start||end)&&(!isoDate(start)||!isoDate(end)||start>end)){setNotice("시작일과 종료일을 모두 유효한 날짜로 입력해 주세요.");return;}
    if(!agree){setNotice("개인정보 안내를 확인하고 체크해 주세요.");return;}
    setNotice("입력 형식 검증 완료. 현재는 1차 디자인 검수 단계로 실제 문의가 접수되지는 않습니다. 전화로 상담해 주세요.");
  }
  return <form className={`inquiry-form ${modal?"inquiry-modal-form":""}`} onSubmit={preview} noValidate>
    <div className="form-preview-notice" role="note"><Icon name="info" size={17}/><span><strong>1차 화면 검수용 양식</strong> · 입력한 정보는 서버로 전송되거나 저장되지 않습니다. 실제 문의는 전화로 부탁드립니다.</span></div>
    {context.event&&<p className="inquiry-source">문의 이벤트: {context.event} <span>(검수용)</span></p>}
    <div className="form-grid">
      <div className="field"><label htmlFor={modal?"modal-name":"contact-name"}>이름 <b>*</b></label><input id={modal?"modal-name":"contact-name"} type="text" autoComplete="name" maxLength={60} placeholder="성함을 입력해 주세요" value={name} onChange={e=>setName(e.target.value)} required/></div>
      <div className="field"><label htmlFor={modal?"modal-phone":"contact-phone"}>연락처 <b>*</b></label><input id={modal?"modal-phone":"contact-phone"} type="tel" autoComplete="tel" placeholder="010-0000-0000" maxLength={20} value={phone} onChange={e=>setPhone(e.target.value)} required/></div>
      <div className="field"><label htmlFor={modal?"modal-service":"contact-service"}>렌트 유형 <b>*</b></label><select id={modal?"modal-service":"contact-service"} value={service} onChange={e=>setService(e.target.value as ServiceKey|"")} required><option value="">선택해 주세요</option>{services.map(item=><option value={item.key} key={item.key}>{item.title}</option>)}</select></div>
      <div className="field"><label htmlFor={modal?"modal-car":"contact-car"}>희망 차량 <span>선택</span></label><select id={modal?"modal-car":"contact-car"} value={car} onChange={e=>setCar(e.target.value)}><option value="">차종 미정 / 상담 필요</option>{cars.map(item=><option value={item.name} key={item.id}>{item.name}</option>)}</select></div>
      <DateInput id={modal?"modal-start":"contact-start"} label="희망 시작일" value={start} onChange={setStart}/><DateInput id={modal?"modal-end":"contact-end"} label="희망 종료일" value={end} onChange={setEnd}/>
    </div>
    <div className="field"><label htmlFor={modal?"modal-note":"contact-note"}>추가 요청 사항 <span>선택</span></label><textarea id={modal?"modal-note":"contact-note"} rows={4} maxLength={1000} value={message} onChange={e=>setMessage(e.target.value)} placeholder="이용 목적, 일정, 차량 인수·반납 관련 요청 사항 등을 남겨주세요."/></div>
    <label className="consent"><input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)}/><span>개인정보 수집·이용 안내를 확인했습니다. <Link href="/privacy" target="_blank" rel="noopener noreferrer">임시 방침 보기 <Icon name="external" size={13}/></Link><small>현재 검수 단계로 실제 개인정보 수집은 진행하지 않습니다. 정식 운영 시 검증된 고지 및 동의 절차가 적용됩니다.</small></span></label>
    {notice&&<p className="form-status" role="status">{notice}</p>}
    <button className="button button-primary full" type="submit">입력 내용 검증하기 <Icon name="arrow" size={18}/></button>
    <a href={BRAND.tel} className="form-phone"><Icon name="phone" size={17}/> 실제 상담은 {BRAND.phone}로 전화해 주세요.</a>
  </form>;
}
