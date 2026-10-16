import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const project = process.cwd();
const read = (path) => readFileSync(join(project, path), "utf8");
const expected = [
  ["차량·요금", "/cars"],
  ["단기렌트", "/services/short-term"],
  ["월·장기렌트", "/services/long-term"],
  ["사고대차", "/services/accident"],
  ["이벤트", "/events"],
  ["이용안내", "/guide"],
  ["오시는 길", "/contact"],
];
const navigation = read("data/site.ts").match(/export const navigation\s*=\s*\[([\s\S]*?)\]\s*as const;/)?.[1];
assert(navigation, "data/site.ts에 navigation 배열이 없습니다.");
const links = [...navigation.matchAll(/\{\s*href:\s*["']([^"']+)["'],\s*label:\s*["']([^"']+)["']\s*\}/g)]
  .map(([, href, label]) => [label, href]);
assert.deepEqual(links, expected, "헤더의 7개 메뉴가 독립 경로를 가리키지 않습니다.");
for (const [label, href] of expected) {
  assert(href.startsWith("/") && !href.includes("#") && href !== "/", `${label}이 독립 URL이 아닙니다: ${href}`);
  assert(existsSync(join(project, `app${href}/page.tsx`)), `${label} 상세 페이지 파일 없음: ${href}`);
}
const header = read("components/Header.tsx");
assert(header.includes('from "next/link"'), "헤더에 Next.js Link가 없습니다.");
assert((header.match(/navigation\.map/g) ?? []).length === 2, "PC/모바일 메뉴가 공통 navigation을 사용하지 않습니다.");
assert(!/href\s*=\s*["']\/?#/.test(header), "헤더에 스크롤 앵커 링크가 남아 있습니다.");
assert(read("components/MobileCallBar.tsx").includes('href="/cars"'), "모바일 하단 차량 버튼이 상세 페이지로 이동하지 않습니다.");
for (const [, href] of expected) {
  assert(read("app/sitemap.ts").includes(`path: "${href}"`), `사이트맵에 ${href}가 없습니다.`);
}
console.log("✅ 헤더 PC/모바일 7개 메뉴 → 독립 상세 페이지 확인 완료");
console.table(links.map(([menu, destination]) => ({ menu, destination })));
