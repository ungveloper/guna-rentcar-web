import type { ReactNode, SVGProps } from "react";

type IconName = "arrow"|"arrow-up"|"chevron"|"menu"|"close"|"phone"|"car"|"check"|"shield"|"clock"|"sparkle"|"heart"|"calendar"|"route"|"search"|"filter"|"plus"|"minus"|"external"|"quote"|"pin"|"mail"|"info"|"steering"|"key"|"globe";
const shapes: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  "arrow-up": <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
  chevron: <path d="m6 9 6 6 6-6"/>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="M18 6 6 18M6 6l12 12"/></>,
  phone: <path d="M21.1 16.4v3a2 2 0 0 1-2.2 2A18.5 18.5 0 0 1 2.6 5.1 2 2 0 0 1 4.6 3h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.5 2.3a2 2 0 0 1-.5 2.1L8.3 10.4a15 15 0 0 0 5.3 5.3l1.3-1.3a2 2 0 0 1 2.1-.5c.7.2 1.5.4 2.3.5a2 2 0 0 1 1.8 2.3Z"/>,
  car: <><path d="m5 17-1 2h2m12-2 1 2h-2"/><path d="M4 10h16l-1.7-4.5A2 2 0 0 0 16.4 4H7.6a2 2 0 0 0-1.9 1.5L4 10Z"/><rect x="3" y="10" width="18" height="8" rx="2"/><path d="M7 14h.01M17 14h.01"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  sparkle: <><path d="m12 3 1.9 6.1L20 11l-6.1 1.9L12 19l-1.9-6.1L4 11l6.1-1.9L12 3ZM19 18l.7 1.3L21 20l-1.3.7L19 22l-.7-1.3L17 20l1.3-.7L19 18Z"/></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8 5.5 5.5 0 0 0 0 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></>,
  route: <><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h6a4 4 0 0 0 0-8h-4a4 4 0 0 1 0-8"/></>,
  search: <><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></>,
  filter: <><path d="M4 7h16M7 12h10M10 17h4"/></>,
  plus: <path d="M12 5v14M5 12h14"/>, minus: <path d="M5 12h14"/>,
  external: <><path d="M14 4h6v6M20 4l-9 9"/><path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5"/></>,
  quote: <path d="M10 11H5V7h6v5l-3 5H5l3-5Zm10 0h-5V7h6v5l-3 5h-3l3-5Z"/>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></>,
  steering: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M3.5 9h17M12 14v7"/></>,
  key: <><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9 2 2-2 2 2 2-3 3-2-2-5 5"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18M12 3c-5 5-5 13 0 18"/></>,
};
export default function Icon({name,size=20,...props}: SVGProps<SVGSVGElement> & {name:IconName;size?:number}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>{shapes[name]}</svg>;
}
