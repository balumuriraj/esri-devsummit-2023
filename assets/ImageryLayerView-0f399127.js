import{e as s,y as p,kr as v,a as x,a1 as m,$ as E,g1 as b,M as c,R as F}from"./calcite-c5ae4991.js";import{s as T}from"./popupUtils-bf43aa1c.js";const q=w=>{let e=class extends w{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(t,n){const{layer:o}=this;if(!t)throw new m("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:u}=o,a=T(o,n);if(!u||E(a))throw new m("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:u,popupTemplate:a});const y=await a.getRequiredFields(),r=new b;r.timeExtent=this.timeExtent,r.geometry=t,r.outFields=y,r.outSpatialReference=t.spatialReference;const{resolution:i,spatialReference:l}=this.view,d=this.view.type==="2d"?new c(i,i,l):new c(.5*i,.5*i,l),{returnTopmostRaster:h,showNoDataRecords:R}=a.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:d,showNoDataRecords:R,signal:F(n)?n.signal:null};return o.queryVisibleRasters(r,f).then(g=>g)}canResume(){var t;return!!super.canResume()&&!((t=this.timeExtent)!=null&&t.isEmpty)}};return s([p()],e.prototype,"layer",void 0),s([p()],e.prototype,"suspended",void 0),s([p(v)],e.prototype,"timeExtent",void 0),s([p()],e.prototype,"view",void 0),e=s([x("esri.views.layers.ImageryLayerView")],e),e};export{q as m};
