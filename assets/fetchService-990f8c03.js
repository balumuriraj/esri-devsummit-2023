import{aa as y}from"./index-51930907.js";async function s(t,e){const{data:r}=await y(t,{responseType:"json",query:{f:"json",...e==null?void 0:e.customParameters,token:e==null?void 0:e.apiKey}});return r}async function u(t,e){const r=await s(t,e);r.layers=r.layers.filter(i);const a={serviceJSON:r};if((r.currentVersion??0)<10.5)return a;const n=await s(t+"/layers",e);return a.layersJSON={layers:n.layers.filter(i),tables:n.tables},a}function i(t){return!t.type||t.type==="Feature Layer"}export{u as r,s as t};
