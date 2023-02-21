import{e as o,y as p,n as v}from"./cast-fcb46737.js";import{a as u}from"./Error-ec6249b9.js";import{t as g,r as x}from"./typedArrayUtil-4d7bb04c.js";import"./ArrayPool-a8ee9378.js";import{w as l}from"./Extent-da876e26.js";import{g as E}from"./OperationalLayer-97084f13.js";import{x as F}from"./Query-b96bcde0.js";import{s as T}from"./popupUtils-af06d391.js";const z=c=>{let e=class extends c{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(t,n){const{layer:s}=this;if(!t)throw new u("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:m}=s,i=T(s,n);if(!m||g(i))throw new u("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:m,popupTemplate:i});const w=await i.getRequiredFields(),r=new F;r.timeExtent=this.timeExtent,r.geometry=t,r.outFields=w,r.outSpatialReference=t.spatialReference;const a=this.view.resolution,y=this.view.type==="2d"?new l(a,a,this.view.spatialReference):new l(.5*a,.5*a,this.view.spatialReference),{returnTopmostRaster:h,showNoDataRecords:d}=i.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:h,pixelSize:y,showNoDataRecords:d,signal:x(n)?n.signal:null};return s.queryVisibleRasters(r,f).then(R=>R)}canResume(){var t;return!!super.canResume()&&!((t=this.timeExtent)!=null&&t.isEmpty)}};return o([p()],e.prototype,"layer",void 0),o([p()],e.prototype,"suspended",void 0),o([p(E)],e.prototype,"timeExtent",void 0),o([p()],e.prototype,"view",void 0),e=o([v("esri.views.layers.ImageryLayerView")],e),e};export{z as m};
