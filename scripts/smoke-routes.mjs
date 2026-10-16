/** Launch the built production Next.js server and assert every route is a distinct HTTP 200 document. */
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { join } from "node:path";

const routes = [
  "/", "/cars", "/services", "/services/short-term", "/services/monthly",
  "/services/long-term", "/services/accident", "/events", "/guide", "/contact",
];
const listener = createServer();
listener.listen(0, "127.0.0.1");
await new Promise((resolve,reject) => {listener.once("listening",resolve);listener.once("error",reject);});
const port = listener.address().port;
await new Promise(resolve=>listener.close(resolve));
const bin=join(process.cwd(),"node_modules","next","dist","bin","next");
const child=spawn(process.execPath,[bin,"start","-H","127.0.0.1","-p",String(port)], {
  cwd:process.cwd(), env:{...process.env,NEXT_TELEMETRY_DISABLED:"1"},stdio:["ignore","pipe","pipe"]
});
let stderr="";
child.stdout.on("data",chunk=>{stderr+=(chunk.toString());stderr=stderr.slice(-3000);});
child.stderr.on("data",chunk=>{stderr+=(chunk.toString());stderr=stderr.slice(-3000);});
const base=`http://127.0.0.1:${port}`;
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms));
try {
  let ready=false;
  for(let i=0;i<80;i++){
    if(child.exitCode!==null)throw new Error(`Next.js 서버가 종료됨: ${stderr}`);
    try{const r=await fetch(base,{signal:AbortSignal.timeout(2000)});if(r.ok){ready=true;break;}}catch{}
    await wait(300);
  }
  if(!ready)throw new Error(`프로덕션 서버가 준비되지 않음: ${stderr}`);
  const heads=new Map();
  for(const url of routes){
    const res=await fetch(base+url,{redirect:"manual",signal:AbortSignal.timeout(10000)});
    if(res.status!==200)throw new Error(`${url}: HTTP ${res.status} (독립 페이지 응답 아님)`);
    const html=await res.text();
    const raw=html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
    if(!raw)throw new Error(`${url}: 고유한 h1 제목을 찾을 수 없음`);
    const title=raw.replace(/<[^>]+>/g,"").replace(/&[^;]+;/g," ").trim();
    if(!title)throw new Error(`${url}: 빈 h1`);
    heads.set(url,title);
    console.log(`✅ ${res.status} ${url} — ${title}`);
  }
  for(const a of ["/services/short-term","/services/monthly","/services/long-term","/services/accident"]){
    for(const b of ["/services/short-term","/services/monthly","/services/long-term","/services/accident"]){
      if(a!==b && heads.get(a)===heads.get(b))throw new Error(`${a} 와 ${b} 의 h1이 동일함`);
    }
  }
  console.log("✅ 10개 페이지의 HTTP 200 및 4개 독립 서비스 제목 확인 완료");
} catch(e){console.error("[라우팅 검사 실패]",e);process.exitCode=1;}
finally {child.kill("SIGTERM");await wait(500);if(child.exitCode===null)child.kill("SIGKILL");}
