import{r as a,v as n,hE as i,hF as u}from"./index-b4cf3b73.js";function f(r){const s=r.view.spatialReference,e=r.layer.fullExtent,t=a(e)&&e.spatialReference;if(n(e)||!t)return Promise.resolve(null);if(t.equals(s))return Promise.resolve(e.clone());const l=i(e,s);return a(l)?Promise.resolve(l):r.view.state.isLocal?u(e,s,r.layer.portalItem).then(o=>!r.destroyed&&o?o:null).catch(()=>null):Promise.resolve(null)}export{f as l};