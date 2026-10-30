import type {ReactNode} from "react";
/** Dedicated route layout: /services/accident */
export default function ServiceLayout({children}:{children:ReactNode}){
  return <div data-page-layout="services/accident" className="min-h-[65vh] bg-[#F8F7F4]">{children}</div>;
}
