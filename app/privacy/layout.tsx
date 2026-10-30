import type {ReactNode} from "react";
/** Independent Next.js route layout for /privacy. */
export default function PageLayout({children}:{children:ReactNode}){
  return <div data-page-layout="privacy" className="min-h-[65vh] bg-[#F8F7F4]">{children}</div>;
}
