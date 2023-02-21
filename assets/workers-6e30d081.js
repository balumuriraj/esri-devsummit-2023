import{_ as J}from"./preload-helper-3bce6601.js";import{s as D,b as g,a as W}from"./Error-ec6249b9.js";import{h as a}from"./string-a318751c.js";import{d as F,C as x,j as T,f as $}from"./promiseUtils-1e54421e.js";import{t as m,f as P,w as E,e as q,a as z,s as N,o as K,r as V,h as B}from"./Connection-9a1cf8da.js";import{Q as h,a as G,r as Q}from"./request-6fc81c4c.js";import{h as M}from"./typedArrayUtil-4d7bb04c.js";import{a as X}from"./assets-8d3e737a.js";import"./intl-65a3e389.js";import{t as L}from"./nextTick-3ee5a785.js";import{l as A}from"./locale-30120714.js";const C={};function Y(r,e){for(const t of r)if(t.name===e.name)return;r.push(e)}function Z(r){var t;const e={async:r.async,isDebug:r.isDebug,locale:r.locale,baseUrl:r.baseUrl,has:{...r.has},map:{...r.map},packages:r.packages&&r.packages.concat()||[],paths:{...r.paths}};return r.hasOwnProperty("async")||(e.async=!0),r.hasOwnProperty("isDebug")||(e.isDebug=!1),r.baseUrl||(e.baseUrl=C.baseUrl),(t=C.packages)==null||t.forEach(o=>{Y(e.packages??[],o)}),e}class ee{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(t=>{this[t]=(...o)=>e[t](...o)})}}let y=class{constructor(){this._dispatcher=new ee,this._workerPostMessage({type:m.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){L(()=>{this._workerMessageHandler(new MessageEvent("message",{data:e}))})}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,t,o){this._dispatcher.addEventListener(e,t,o)}removeEventListener(e,t,o){this._dispatcher.removeEventListener(e,t,o)}_workerPostMessage(e){L(()=>{this.dispatchEvent(new MessageEvent("message",{data:e}))})}async _workerMessageHandler(e){const t=P(e);if(t&&t.type===m.OPEN){const{modulePath:o,jobId:s}=t;let n=await E.loadWorker(o);n||(n=await J(()=>import(o),[]));const i=E.connect(n);this._workerPostMessage({type:m.OPENED,jobId:s,data:i})}}};const _=D.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:re}=m,te='let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,version:r}=configuration.kernelInfo,{revision:t,version:n}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS API for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\\nModules version: ${r}\\nAssets version: ${n}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let n;function t(e){const o=n.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const i=outgoing.get(r);outgoing.delete(r),o.error?i.reject(JSON.parse(o.error)):i.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});';let p,w;const j="Failed to create Worker. Fallback to execute module in main thread";async function oe(){if(!a("esri-workers")||(a("mozilla"),0))return S(new y);if(!p&&!w)try{const e=te.split('"{CONFIGURATION}"').join(`'${se()}'`);p=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){w=e||{}}let r;if(p)try{r=new Worker(p,{name:"esri-worker-"+ae++})}catch{_.warn(j,w),r=new y}else _.warn(j,w),r=new y;return S(r)}async function S(r){return new Promise(e=>{function t(s){const n=P(s);n&&n.type===re&&(r.removeEventListener("message",t),r.removeEventListener("error",o),e(r))}function o(s){s.preventDefault(),r.removeEventListener("message",t),r.removeEventListener("error",o),_.warn("Failed to create Worker. Fallback to execute module in main thread",s),(r=new y).addEventListener("message",t),r.addEventListener("error",o)}r.addEventListener("message",t),r.addEventListener("error",o)})}function se(){let r;if(g.default!=null){const s={...g};delete s.default,r=JSON.parse(JSON.stringify(s))}else r=JSON.parse(JSON.stringify(g));r.assetsPath=h(r.assetsPath),r.defaultAssetsPath=r.defaultAssetsPath?h(r.defaultAssetsPath):void 0,r.request.interceptors=[],r.log.interceptors=[],r.locale=A(),r.has={"esri-csp-restrictions":a("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":a("esri-2d-update-debug"),"featurelayer-pbf":a("featurelayer-pbf"),"featurelayer-simplify-thresholds":a("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":a("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":a("featurelayer-simplify-mobile-factor"),"esri-atomics":a("esri-atomics"),"esri-shared-array-buffer":a("esri-shared-array-buffer"),"esri-tiles-debug":a("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":a("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":a("feature-polyline-generalization-factor"),"host-webworker":1,"polylabel-placement-enabled":a("polylabel-placement-enabled")},r.workers.loaderUrl&&(r.workers.loaderUrl=h(r.workers.loaderUrl)),r.workers.workerPath?r.workers.workerPath=h(r.workers.workerPath):r.workers.workerPath=h(X("esri/core/workers/RemoteClient.js")),r.workers.useDynamicImport=!1;const e=g.workers.loaderConfig,t=Z({baseUrl:e==null?void 0:e.baseUrl,locale:A(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...e==null?void 0:e.has},map:{...e==null?void 0:e.map},paths:{...e==null?void 0:e.paths},packages:(e==null?void 0:e.packages)||[]});return JSON.stringify({esriConfig:r,loaderConfig:t,kernelInfo:{version:G,buildDate:q,revision:z}})}let ae=0;const{ABORT:H,INVOKE:ne,OPEN:ie,OPENED:le,RESPONSE:u}=m;class I{constructor(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",o=>{o.preventDefault(),D.getLogger("esri.core.workers.WorkerOwner").error(o)})}static async create(e){const t=await oe();return new I(t,e)}terminate(){this.worker.terminate()}async open(e,t={}){const{signal:o}=t,s=V();return new Promise((n,i)=>{const c={resolve:n,reject:i,abortHandle:F(o,()=>{this._outJobs.delete(s),this._post({type:H,jobId:s})})};this._outJobs.set(s,c),this._post({type:ie,jobId:s,modulePath:e})})}_onMessage(e){const t=P(e);if(t)switch(t.type){case le:this._onOpenedMessage(t);break;case u:this._onResponseMessage(t);break;case H:this._onAbortMessage(t);break;case ne:this._onInvokeMessage(t)}}_onAbortMessage(e){const t=this._inJobs,o=e.jobId,s=t.get(o);s&&(s.controller&&s.controller.abort(),t.delete(o))}_onInvokeMessage(e){const{methodName:t,jobId:o,data:s,abortable:n}=e,i=n?new AbortController:null,c=this._inJobs,O=Q[t];let f;try{if(typeof O!="function")throw new TypeError(`${t} is not a function`);f=O.call(null,s,{signal:i?i.signal:null})}catch(l){return void this._post({type:u,jobId:o,error:N(l)})}x(f)?(c.set(o,{controller:i,promise:f}),f.then(l=>{c.has(o)&&(c.delete(o),this._post({type:u,jobId:o},l))},l=>{c.has(o)&&(c.delete(o),l||(l={message:"Error encountered at method"+t}),T(l)||this._post({type:u,jobId:o,error:N(l||{message:`Error encountered at method ${t}`})}))})):this._post({type:u,jobId:o},f)}_onOpenedMessage(e){const{jobId:t,data:o}=e,s=this._outJobs.get(t);s&&(this._outJobs.delete(t),M(s.abortHandle),s.resolve(o))}_onResponseMessage(e){const{jobId:t,error:o,data:s}=e,n=this._outJobs.get(t);n&&(this._outJobs.delete(t),M(n.abortHandle),o?n.reject(W.fromJSON(JSON.parse(o))):n.resolve(s))}_post(e,t,o){return K(this.worker,e,t,o)}}let d=a("esri-workers-debug")?1:a("esri-mobile")?Math.min(navigator.hardwareConcurrency-1,3):a("host-browser")?navigator.hardwareConcurrency-1:0;d||(d=a("safari")&&a("mac")||a("trident")?7:2);let R=0;const v=[];function ve(){U()}async function b(r,e){const t=new B;return await t.open(r,e),t}async function Ee(r,e={}){if(typeof r!="string")throw new W("workers:undefined-module","modulePath is missing");let t=e.strategy||"distributed";if(a("host-webworker")&&!a("esri-workers")&&(t="local"),t==="local"){let o=await E.loadWorker(r);o||(o=await J(()=>import(r),[])),$(e.signal);const s=e.client||o;return b([E.connect(o)],{...e,client:s})}if(await U(),$(e.signal),t==="dedicated"){const o=R++%d;return b([await v[o].open(r,e)],e)}if(e.maxNumWorkers&&e.maxNumWorkers>0){const o=Math.min(e.maxNumWorkers,d);if(o<d){const s=new Array(o);for(let n=0;n<o;++n){const i=R++%d;s[n]=v[i].open(r,e)}return b(s,e)}}return b(v.map(o=>o.open(r,e)),e)}let k=null;async function U(){if(k)return k;new AbortController;const r=[];for(let e=0;e<d;e++){const t=I.create(e).then(o=>(v[e]=o,o));r.push(t)}return k=Promise.all(r),k}export{ve as l,Ee as u};
