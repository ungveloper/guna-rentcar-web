import type {ReactNode} from "react";
/** Independent Next.js route layout for /contact. */
export default function PageLayout({children}:{children:ReactNode}){
  return <div data-page-layout="contact" className="min-h-[65vh] bg-[#F8F7F4]">{children}</div>;
}
