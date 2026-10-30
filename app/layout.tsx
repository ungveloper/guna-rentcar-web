import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Header from "./_components/_header";
import Footer from "./_components/_footer";
import ConsultProvider from "./_components/ui/consult-provider";
import EventSection from "./_components/ui/event-section";
import { pretendard } from "./_lib/fonts";
import { isPublicLaunch, siteUrl } from "./_lib/seo";
import "./globals.css";
export const metadata: Metadata = {
 metadataBase:new URL(siteUrl),
 title:{default:"건아렌트카 | GUNA RENTCAR",template:"%s | 건아렌트카"},
 description:"부산 건아렌트카. 월렌트·단기렌트·장기렌트·사고대차, 전체 차량 안내 및 24시간 전화 상담.",
 applicationName:"GUNA RENTCAR",
 robots:isPublicLaunch?{index:true,follow:true}:{index:false,follow:false},
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#1b2929"};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="ko" className={pretendard.className}><body className="bg-white text-[#1b2929] antialiased"><ConsultProvider><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[200] focus:rounded-md focus:bg-white focus:p-3">본문으로 건너뛰기</a><Header/><main id="main-content" className="min-h-[65vh]">{children}</main><EventSection/><Footer/></ConsultProvider></body></html>}
