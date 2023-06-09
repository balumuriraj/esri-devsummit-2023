import{ip as y,oj as p,ir as u,m4 as d,iq as h,fU as c,i9 as m,R as S,dO as v,ep as f,n2 as g,s as b,e as o,y as s,ar as C,w,oo as G,oE as $,m5 as _,a as R,oK as n,oL as k,oM as x,km as P,mm as F,is as j}from"./calcite-c5ae4991.js";import"./index-9a6385f7.js";const E=["atom","xml"],L={base:n,key:"type",typeMap:{"simple-line":k},errorContext:"symbol"},M={base:n,key:"type",typeMap:{"picture-marker":x,"simple-marker":P},errorContext:"symbol"},O={base:n,key:"type",typeMap:{"simple-fill":F},errorContext:"symbol"};let t=class extends y(p(u(d(h(c(j)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(i=>{var a;const l=i.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&((a=l.outline)!=null&&a.style.includes("esriSFS"))&&(l.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?m(this.url,E)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const r=S(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(v).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:i}=await f(b.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:g(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return i}_hasGeometry(e){var r;return((r=this.featureCollections)==null?void 0:r.some(i=>{var l,a;return((l=i.featureSet)==null?void 0:l.geometryType)===e&&((a=i.featureSet.features)==null?void 0:a.length)>0}))??!1}};o([s()],t.prototype,"description",void 0),o([s()],t.prototype,"featureCollections",void 0),o([C("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([s({type:w,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([s(G)],t.prototype,"id",void 0),o([s($)],t.prototype,"legendEnabled",void 0),o([s({types:L,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([s({type:["show","hide"]})],t.prototype,"listMode",void 0),o([s({types:M,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([s({types:O,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([s({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([s(_)],t.prototype,"url",void 0),o([s({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([s({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([R("esri.layers.GeoRSSLayer")],t);const D=t;export{D as default};
