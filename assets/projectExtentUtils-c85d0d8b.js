import{R as a,$ as n,bS as i}from"./calcite-c5ae4991.js";import{projectGeometry as c}from"./geometryServiceUtils-b1997a16.js";function f(r){const t=r.view.spatialReference,e=r.layer.fullExtent,o=a(e)&&e.spatialReference;if(n(e)||!o)return Promise.resolve(null);if(o.equals(t))return Promise.resolve(e.clone());const s=i(e,t);return a(s)?Promise.resolve(s):r.view.state.isLocal?c(e,t,r.layer.portalItem).then(l=>!r.destroyed&&l?l:null).catch(()=>null):Promise.resolve(null)}export{f as l};
