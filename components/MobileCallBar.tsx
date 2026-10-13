import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";

export function MobileCallBar() {
  return <div className="mobile-call-bar"><span>상담이 필요하신가요?<strong>051-866-1124</strong></span><PhoneLink placement="mobile_sticky"><Icon name="phone" size={18}/> 전화 문의</PhoneLink></div>;
}
