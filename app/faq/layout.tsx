import type {ReactNode} from "react";
/** Independent Next.js route layout for /faq. */
export default function PageLayout({children}:{children:ReactNode}){
  return <div data-page-layout="faq" className="min-h-[65vh] bg-[#F8F7F4]">{children}</div>;
}
