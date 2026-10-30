import type {ReactNode} from "react";
/** Dedicated route layout: /services/monthly */
export default function ServiceLayout({children}:{children:ReactNode}){
  return <div data-page-layout="services/monthly" className="min-h-[65vh] bg-[#F8F7F4]">{children}</div>;
}
