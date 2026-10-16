import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");
const routes = [
  ["차량·요금", "/cars"],
  ["단기렌트", "/services/short-term"],
  ["월렌트", "/services/monthly"],
  ["장기렌트", "/services/long-term"],
  ["사고대차", "/services/accident"],
  ["이벤트", "/events"],
  ["이용안내", "/guide"],
  ["오시는 길", "/contact"],
];
const source = read("data/site.ts");
const block = source.match(/export const navigation\s*=\s*\[([\s\S]*?)\]\s*as const;/)?.[1];
assert(block, "data/site.ts: navigation 배열 없음");
const actual = [...block.matchAll(/\{\s*href:\s*["']([^"']+)["'],\s*label:\s*["']([^"']+)["']\s*\}/g)]
  .map(([,href,label]) => [label,href]);
assert.deepEqual(actual,routes,"메뉴 8개의 URL 또는 라벨이 잘못됨");
const header = read("components/Header.tsx");
assert.equal((header.match(/navigation\.map/g) ?? []).length,2,"PC/모바일 모두 공통 메뉴 데이터를 사용해야 함");
assert.equal((header.match(/openPage\(event, n\.href\)/g) ?? []).length,2,"PC/모바일 헤더의 독립 페이지 강제 이동이 빠짐");
assert(header.includes("window.location.assign(href)"),"헤더가 실제 독립 문서로 이동하지 않음");
assert(!/href\s*=\s*["']\/?#/.test(header),"헤더에 # 스크롤 링크 존재");
for(const [label,href] of routes){
  assert(href.startsWith("/") && !href.includes("#") && href!=="/", `${label}이 독립 URL이 아님`);
  const path=`app${href}/page.tsx`;
  assert(existsSync(join(root,path)), `페이지 파일이 없습니다: ${path}`);
  const page=read(path);
  assert(page.includes("export default"), `${label} 페이지 구성 요소가 없음: ${path}`);
  assert(read("app/sitemap.ts").includes(`path: "${href}"`), `사이트맵 누락: ${href}`);
}
for(const slug of ["short-term","monthly","long-term","accident"]){
  const page=read(`app/services/${slug}/page.tsx`);
  assert(page.includes(`serviceMetadata("${slug}")`), `${slug} 독립 SEO 메타데이터가 없음`);
  assert(page.includes(`slug="${slug}"`), `${slug} 서비스 전용 콘텐츠가 없음`);
}
assert(read("app/page.tsx").includes("<Link href={s.href}"),"메인의 서비스 카드가 독립 상세 페이지를 가리키지 않음");
assert(read("components/DrivePicker.tsx").includes('href="/cars"'),"차량 추천 링크에 페이지가 아닌 앵커가 남음");
assert(!read("components/FleetPreview.tsx").includes("/cars#"),"차량 카드 링크에 # 스크롤이 남음");
console.log("✅ PC/모바일 메뉴 8개는 모두 독립 페이지, 메인 서비스 링크와 SEO 메타데이터까지 확인");
console.table(routes.map(([menu,url])=>({menu,url})));
