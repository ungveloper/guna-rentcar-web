import type {Metadata,Viewport} from "next";
import type {ReactNode} from "react";
import Header from "./_components/_header";
import Footer from "./_components/_footer";
import ConsultProvider from "./_components/ui/consult-provider";
import {pretendard} from "./_lib/fonts";
import {isPublicLaunch,siteUrl} from "./_lib/seo";
import "./globals.css";
export const metadata:Metadata={
  metadataBase:new URL(siteUrl),
  title:{default:"건아렌트카 | GUNA RENTCAR",template:"%s | 건아렌트카"},
  description:"부산 연제구 건아렌트카. 월렌트·단기렌트·장기렌트·사고대차 상담, 24시간 전화 상담.",
  applicationName:"GUNA RENTCAR",
  robots:isPublicLaunch?{index:true,follow:true}:{index:false,follow:false},
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#F7F6F2"};
export default function RootLayout({children}:{children:ReactNode}){
  return <html lang="ko" className={pretendard.className}><body><ConsultProvider><a className="skip-link" href="#main-content">본문 바로가기</a><Header/><main id="main-content">{children}</main><Footer/></ConsultProvider></body></html>;
}
