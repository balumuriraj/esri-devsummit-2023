import{u as _,e,y as s,n as g}from"./cast-fcb46737.js";import"./geometry-b7901087.js";import{j as h}from"./Collection-910b6f71.js";import{l as F}from"./CollectionFlattener-8f4d518b.js";import{r as u}from"./typedArrayUtil-4d7bb04c.js";import{O as $}from"./MultiOriginJSONSupport-aae3bc0c.js";import{w as j}from"./promiseUtils-1e54421e.js";import{a as v,U as m,l as S,j as c}from"./reactiveUtils-4dabbb80.js";import{i as M}from"./request-6fc81c4c.js";import{b as I}from"./ArrayPool-a8ee9378.js";import{a as d,o as y,k as w,r as C}from"./Extent-da876e26.js";import{b as K}from"./Layer-5ffe0eda.js";import{n as N}from"./BlendLayer-20d0571b.js";import{c as P,f as R}from"./OperationalLayer-97084f13.js";import{v as T}from"./PortalLayer-b2643f87.js";import{p as J}from"./RefreshableLayer-7f154951.js";import{t as z}from"./ScaleRangeLayer-4be07229.js";import{n as A}from"./Evented-a45c8b0f.js";import{m as W}from"./Loadable-268c900a.js";import{u as H}from"./string-a318751c.js";import{j as U,S as k,g as x,d as E}from"./kmlUtils-83fc7c0c.js";import"./Error-ec6249b9.js";import"./nextTick-3ee5a785.js";import"./Polyline-ff2d7c6b.js";import"./typeUtils-35750739.js";import"./jsonMap-7b8332c9.js";import"./SimpleObservable-23231131.js";import"./preload-helper-3bce6601.js";import"./Ellipsoid-89682c5e.js";import"./Identifiable-bfe1ff30.js";import"./parser-498c8be0.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./mat4f32-77b3d8ac.js";import"./mat4-44a0988f.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./TimeExtent-23e282b9.js";import"./persistableUrlUtils-5f719c3b.js";import"./ElevationInfo-215614d8.js";import"./fieldUtils-7f54c4b1.js";import"./arcadeOnDemand-281a01eb.js";import"./lengthUtils-fa751420.js";import"./unitUtils-45d1147c.js";import"./opacityUtils-1f7f5126.js";import"./asyncUtils-437defc4.js";import"./Portal-2bb189b3.js";import"./locale-30120714.js";import"./PortalGroup-8e41557a.js";import"./PortalUser-659cc1d2.js";import"./PortalItem-bb7e98a6.js";import"./assets-8d3e737a.js";import"./Promise-376ab9f6.js";import"./PopupTemplate-40f3c9aa.js";import"./Clonable-545593ce.js";import"./enumeration-3a03bd31.js";import"./number-27cf8195.js";import"./aaBoundingBox-657a9b82.js";import"./aaBoundingRect-193543b5.js";import"./mathUtils-b4bb77e2.js";import"./vec3-e93e648f.js";import"./vec4-790471c0.js";import"./jsonUtils-f5674613.js";import"./UniqueValueRenderer-08f8851c.js";import"./symbols-f8232671.js";import"./CIMSymbol-539bd447.js";import"./Symbol-f93ed9fd.js";import"./Color-fb64d77d.js";import"./symbolLayerUtils3D-76acc268.js";import"./Symbol3DAnchorPosition2D-5726d999.js";import"./collectionUtils-803d9ba8.js";import"./LegendOptions-010d0873.js";import"./diffUtils-68b89c71.js";import"./colorRamps-9dac42c1.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-f0e54e86.js";import"./jsonUtils-229211af.js";import"./compilerUtils-18d58939.js";import"./jsonUtils-0ff4ff96.js";import"./styleUtils-22b14a8b.js";import"./DictionaryLoader-1cbfea53.js";import"./LRUCache-64ec42ee.js";import"./MemCache-18a255ed.js";import"./deprecate-035b199e.js";import"./heatmapUtils-aaea3f32.js";import"./vec4f64-e407da96.js";import"./FeatureSet-d32b0eb8.js";import"./Field-61ec9870.js";import"./fieldType-f31285f7.js";var n;let p=n=class extends A.EventedMixin(_(W)){constructor(...t){super(...t),this.description=null,this.id=null,this.networkLink=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.fullExtent=null,this.addHandles([v(()=>this.sublayers,"after-add",({item:r})=>{r.parent=this,r.layer=this.layer},m),v(()=>this.sublayers,"after-remove",({item:r})=>{r.layer=r.parent=null},m),S(()=>this.sublayers,(r,i)=>{if(i)for(const o of i)o.layer=o.parent=null;if(r)for(const o of r)o.parent=this,o.layer=this.layer},m)])}initialize(){c(()=>this.networkLink).then(()=>c(()=>this.visible===!0)).then(()=>this.load())}load(t){var o;if(!this.networkLink||this.networkLink.viewFormat)return;const r=u(t)?t.signal:null,i=this._fetchService(((o=this._get("networkLink"))==null?void 0:o.href)??"",r).then(a=>{var f;const L=U(a.sublayers);this.fullExtent=d.fromJSON(L),this.sourceJSON=a;const b=I(h.ofType(n),k(n,a));this.sublayers?this.sublayers.addMany(b):this.sublayers=b,(f=this.layer)==null||f.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(i),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(t){this._get("visible")!==t&&(this._set("visible",t),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(t,r){return!!r.visibility}set layer(t){this._set("layer",t),this.sublayers&&this.sublayers.forEach(r=>r.layer=t)}_fetchService(t,r){return x(t,this.layer.outSpatialReference,this.layer.refreshInterval,r).then(i=>E(i.data))}};e([s()],p.prototype,"description",void 0),e([s()],p.prototype,"id",void 0),e([s({readOnly:!0,value:null})],p.prototype,"networkLink",void 0),e([s({json:{write:{allowNull:!0}}})],p.prototype,"parent",void 0),e([s({type:h.ofType(n),json:{write:{allowNull:!0}}})],p.prototype,"sublayers",void 0),e([s({value:null,json:{read:{source:"name",reader:t=>H(t)}}})],p.prototype,"title",void 0),e([s({value:!0})],p.prototype,"visible",null),e([y("visible",["visibility"])],p.prototype,"readVisible",null),e([s()],p.prototype,"sourceJSON",void 0),e([s({value:null})],p.prototype,"layer",null),e([s({type:d})],p.prototype,"fullExtent",void 0),p=n=e([g("esri.layers.support.KMLSublayer")],p);const O=p,V=["kml","xml"];let l=class extends N(J(z(P(T($(K)))))){constructor(...t){super(...t),this._visibleFolders=[],this.allSublayers=new F({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.sublayers}),this.outSpatialReference=w.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([S(()=>this.sublayers,(t,r)=>{r&&r.forEach(i=>{i.parent=null,i.layer=null}),t&&t.forEach(i=>{i.parent=this,i.layer=this})},m),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(t,r){return typeof t=="string"?{url:t,...r}:t}readSublayersFromItemOrWebMap(t,r){this._visibleFolders=r.visibleFolders}readSublayers(t,r,i){return k(O,r,i,this._visibleFolders)}writeSublayers(t,r){const i=[],o=t.toArray();for(;o.length;){const a=o[0];a.networkLink||(a.visible&&i.push(a.id),a.sublayers&&o.push(...a.sublayers.toArray())),o.shift()}r.visibleFolders=i}get title(){const t=this._get("title");return t&&this.originOf("title")!=="defaults"?t:this.url?M(this.url,V)||"KML":t||""}set title(t){this._set("title",t)}get visibleSublayers(){const t=this.sublayers,r=[],i=o=>{o.visible&&(r.push(o),o.sublayers&&o.sublayers.forEach(i))};return t&&t.forEach(i),r}get fullExtent(){return this._recomputeFullExtent()}load(t){const r=u(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},t).catch(j).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(t){const r=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:x(this.url??"",this.outSpatialReference,this.refreshInterval,t)),i=E(r.data);i&&this.read(i,{origin:"service"})}_recomputeFullExtent(){let t=null;u(this.extent)&&(t=this.extent.clone());const r=i=>{if(i.sublayers)for(const o of i.sublayers.items)r(o),o.visible&&o.fullExtent&&(u(t)?t.union(o.fullExtent):t=o.fullExtent.clone())};return r(this),t}};e([s({readOnly:!0})],l.prototype,"allSublayers",void 0),e([s({type:w})],l.prototype,"outSpatialReference",void 0),e([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],l.prototype,"path",void 0),e([s({readOnly:!0,json:{read:!1,write:!1}})],l.prototype,"legendEnabled",void 0),e([s({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),e([s({type:["KML"]})],l.prototype,"operationalLayerType",void 0),e([s({})],l.prototype,"resourceInfo",void 0),e([s({type:h.ofType(O),json:{write:{ignoreOrigin:!0}}})],l.prototype,"sublayers",void 0),e([y(["web-map","portal-item"],"sublayers",["visibleFolders"])],l.prototype,"readSublayersFromItemOrWebMap",null),e([y("service","sublayers",["sublayers"])],l.prototype,"readSublayers",null),e([C("sublayers")],l.prototype,"writeSublayers",null),e([s({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),e([s({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],l.prototype,"title",null),e([s(R)],l.prototype,"url",void 0),e([s({readOnly:!0})],l.prototype,"visibleSublayers",null),e([s({type:d})],l.prototype,"extent",void 0),e([s()],l.prototype,"fullExtent",null),l=e([g("esri.layers.KMLLayer")],l);const _r=l;export{_r as default};
