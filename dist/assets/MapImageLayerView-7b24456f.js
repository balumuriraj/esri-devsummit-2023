import{_ as z}from"./preload-helper-3bce6601.js";import{e as a,y as u,n as N,l as A}from"./cast-fcb46737.js";import{y as B}from"./symbols-f8232671.js";import{a as G}from"./Error-ec6249b9.js";import{h as D}from"./string-a318751c.js";import{v as q,r as Z}from"./ArrayPool-a8ee9378.js";import{r as F,t as W}from"./typedArrayUtil-4d7bb04c.js";import{x as C,E as K}from"./promiseUtils-1e54421e.js";import{a as X}from"./reactiveUtils-4dabbb80.js";import{$ as Y}from"./unitUtils-45d1147c.js";import{a as L,k as ee,o as te,r as re}from"./Extent-da876e26.js";import{i as se,r as ie}from"./scaleUtils-93ad8d0c.js";import{g as oe}from"./OperationalLayer-97084f13.js";import{c as ae}from"./ExportImageParameters-4b588db2.js";import{n as j}from"./floorFilterUtils-080a7cd2.js";import{s as V}from"./clickToleranceUtils-a273d161.js";import{U as ne}from"./request-6fc81c4c.js";import{f as le,v as pe,b as ue,a as ye}from"./normalizeUtils-27e29a72.js";import{t as me}from"./LayerFloorInfo-54b916a2.js";import{c as he,v as ce}from"./jsonUtils-229211af.js";import{i as de}from"./sublayerUtils-96c8a85b.js";import{i as fe}from"./geometry-b7901087.js";import{T as ge}from"./TimeExtent-23e282b9.js";import{g as U}from"./Graphic-f0e54e86.js";import{t as we}from"./typeUtils-35750739.js";import{i as be}from"./arcadeOnDemand-281a01eb.js";import{i as ve}from"./GraphicsCollection-c37a9ffd.js";import{d as xe,s as $e}from"./popupUtils-af06d391.js";const T=p=>p.spatialReference.wkid||JSON.stringify(p.spatialReference);function Pe(p,o){const{dpi:t,gdbVersion:r,geometry:e,geometryPrecision:s,height:m,layerOption:l,mapExtent:i,maxAllowableOffset:n,returnFieldName:y,returnGeometry:h,returnUnformattedValues:g,returnZ:P,spatialReference:x,timeExtent:$,tolerance:d,width:I}=p.toJSON(),{dynamicLayers:w,layerDefs:f,layerIds:b}=Ee(p),O=o&&F(o.geometry)?o.geometry:null,v={geometryPrecision:s,maxAllowableOffset:n,returnFieldName:y,returnGeometry:h,returnUnformattedValues:g,returnZ:P,tolerance:d},_=O&&O.toJSON()||e;if(v.imageDisplay=`${I},${m},${t}`,r&&(v.gdbVersion=r),_&&(delete _.spatialReference,v.geometry=JSON.stringify(_),v.geometryType=he(_)),x?v.sr=x.wkid||JSON.stringify(x):_&&_.spatialReference?v.sr=T(_):i&&i.spatialReference&&(v.sr=T(i)),v.time=$?[$.start,$.end].join(","):null,i){const{xmin:M,ymin:k,xmax:H,ymax:Q}=i;v.mapExtent=`${M},${k},${H},${Q}`}return f&&(v.layerDefs=f),w&&!f&&(v.dynamicLayers=w),v.layers=l==="popup"?"visible":l,b&&!w&&(v.layers+=`:${b.join(",")}`),v}function Ee(p){var x,$;const{mapExtent:o,floors:t,width:r,sublayers:e,layerIds:s,layerOption:m,gdbVersion:l}=p,i=($=(x=e==null?void 0:e.find(d=>d.layer!=null))==null?void 0:x.layer)==null?void 0:$.serviceSublayers,n=m==="popup",y={},h=se({extent:o,width:r,spatialReference:o==null?void 0:o.spatialReference}),g=[],P=d=>{const I=h===0,w=d.minScale===0||h<=d.minScale,f=d.maxScale===0||h>=d.maxScale;if(d.visible&&(I||w&&f))if(d.sublayers)d.sublayers.forEach(P);else{if((s==null?void 0:s.includes(d.id))===!1||n&&(!d.popupTemplate||!d.popupEnabled))return;g.unshift(d)}};if(e==null||e.forEach(P),e&&!g.length)y.layerIds=[];else{const d=de(g,i,l),I=g.map(w=>{const f=j(t,w);return w.toExportImageJSON(f)});if(d)y.dynamicLayers=JSON.stringify(I);else{if(e){let f=g.map(({id:b})=>b);s&&(f=f.filter(b=>s.includes(b))),y.layerIds=f}else s!=null&&s.length&&(y.layerIds=s);const w=Ie(t,g);if(F(w)&&w.length){const f={};for(const b of w)b.definitionExpression&&(f[b.id]=b.definitionExpression);Object.keys(f).length&&(y.layerDefs=JSON.stringify(f))}}}return y}function Ie(p,o){const t=!!(p!=null&&p.length),r=o.filter(e=>e.definitionExpression!=null||t&&e.floorInfo!=null);return r.length?r.map(e=>{const s=j(p,e),m=me(s,e.definitionExpression);return{id:e.id,definitionExpression:m}}):null}var S;let c=S=class extends A{constructor(p){super(p),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}static from(p){return q(S,p)}};a([u({type:Number,json:{write:!0}})],c.prototype,"dpi",void 0),a([u()],c.prototype,"floors",void 0),a([u({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),a([u({types:fe,json:{read:ce,write:!0}})],c.prototype,"geometry",void 0),a([u({type:Number,json:{write:!0}})],c.prototype,"geometryPrecision",void 0),a([u({type:Number,json:{write:!0}})],c.prototype,"height",void 0),a([u({type:[Number],json:{write:!0}})],c.prototype,"layerIds",void 0),a([u({type:["top","visible","all","popup"],json:{write:!0}})],c.prototype,"layerOption",void 0),a([u({type:L,json:{write:!0}})],c.prototype,"mapExtent",void 0),a([u({type:Number,json:{write:!0}})],c.prototype,"maxAllowableOffset",void 0),a([u({type:Boolean,json:{write:!0}})],c.prototype,"returnFieldName",void 0),a([u({type:Boolean,json:{write:!0}})],c.prototype,"returnGeometry",void 0),a([u({type:Boolean,json:{write:!0}})],c.prototype,"returnM",void 0),a([u({type:Boolean,json:{write:!0}})],c.prototype,"returnUnformattedValues",void 0),a([u({type:Boolean,json:{write:!0}})],c.prototype,"returnZ",void 0),a([u({type:ee,json:{write:!0}})],c.prototype,"spatialReference",void 0),a([u()],c.prototype,"sublayers",void 0),a([u({type:ge,json:{write:!0}})],c.prototype,"timeExtent",void 0),a([u({type:Number,json:{write:!0}})],c.prototype,"tolerance",void 0),a([u({type:Number,json:{write:!0}})],c.prototype,"width",void 0),c=S=a([N("esri.rest.support.IdentifyParameters")],c);const J=c;let E=class extends A{constructor(o){super(o),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(o,t){return U.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(o,t){if(!o)return;const{attributes:r,geometry:e}=o;r&&(t.attributes={...r}),F(e)&&(t.geometry=e.toJSON(),t.geometryType=we.toJSON(e.type))}};a([u({type:String,json:{write:!0}})],E.prototype,"displayFieldName",void 0),a([u({type:U})],E.prototype,"feature",void 0),a([te("feature",["attributes","geometry"])],E.prototype,"readFeature",null),a([re("feature")],E.prototype,"writeFeature",null),a([u({type:Number,json:{write:!0}})],E.prototype,"layerId",void 0),a([u({type:String,json:{write:!0}})],E.prototype,"layerName",void 0),E=a([N("esri.rest.support.IdentifyResult")],E);const _e=E;async function Fe(p,o,t){const r=(o=Se(o)).geometry?[o.geometry]:[],e=le(p);return e.path+="/identify",pe(r).then(s=>{const m=Pe(o,{geometry:s&&s[0]}),l=ue({...e.query,f:"json",...m}),i=ye(l,t);return ne(e.path,i).then(Re).then(n=>Ne(n,o.sublayers))})}function Re(p){const o=p.data;return o.results=o.results||[],o.exceededTransferLimit=Boolean(o.exceededTransferLimit),o.results=o.results.map(t=>_e.fromJSON(t)),o}function Se(p){return p=J.from(p)}function Ne(p,o){if(!(o!=null&&o.length))return p;const t=new Map;function r(e){t.set(e.id,e),e.sublayers&&e.sublayers.forEach(r)}o.forEach(r);for(const e of p.results)e.feature.sourceLayer=t.get(e.layerId);return p}let R=null;const at=p=>{let o=class extends p{constructor(){super(...arguments),this._featuresResolutions=new WeakMap,this.highlightGraphics=new ve,this.updateHighlightedFeatures=C(async t=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(t).catch(()=>{}))})}initialize(){this.exportImageParameters=new ae({layer:this.layer}),this.handles.add([X(()=>this.highlightGraphics,"change",t=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(t.added).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)})])}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(t,r){var m,l,i,n;const{layer:e}=this;if(!t)throw new G("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:e});const s=((l=(m=this.layer.capabilities)==null?void 0:m.operations)==null?void 0:l.supportsQuery)??!0;if(!((((n=(i=this.layer.capabilities)==null?void 0:i.operations)==null?void 0:n.supportsIdentify)??!0)&&this.layer.version>=10.5)&&!s)throw new G("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:e});return s?this._fetchPopupFeaturesUsingQueries(t,r):this._fetchPopupFeaturesUsingIdentify(t,r)}canResume(){var t;return!!super.canResume()&&!((t=this.timeExtent)!=null&&t.isEmpty)}async _updateHighlightedFeaturesSymbols(t){for(const r of t){const e="renderer"in r.sourceLayer&&r.sourceLayer.renderer;"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(r).then(async s=>{var i;let m="width"in s&&"height"in s&&s.width!=null&&s.height!=null?Math.max(s.width,s.height):"size"in s?s.size:null;const l="visualVariables"in e&&((i=e.visualVariables)==null?void 0:i.find(n=>n.type==="size"));l&&(R||(R=(await z(()=>import("./UniqueValueRenderer-08f8851c.js").then(n=>n.v),["assets/UniqueValueRenderer-08f8851c.js","assets/cast-fcb46737.js","assets/typedArrayUtil-4d7bb04c.js","assets/string-a318751c.js","assets/Error-ec6249b9.js","assets/ArrayPool-a8ee9378.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-1e54421e.js","assets/symbols-f8232671.js","assets/CIMSymbol-539bd447.js","assets/enumeration-3a03bd31.js","assets/jsonMap-7b8332c9.js","assets/Extent-da876e26.js","assets/Ellipsoid-89682c5e.js","assets/fieldUtils-7f54c4b1.js","assets/preload-helper-3bce6601.js","assets/arcadeOnDemand-281a01eb.js","assets/geometry-b7901087.js","assets/Polyline-ff2d7c6b.js","assets/typeUtils-35750739.js","assets/Symbol-f93ed9fd.js","assets/Color-fb64d77d.js","assets/colorUtils-639f4d25.js","assets/mathUtils-b4bb77e2.js","assets/vec3-e93e648f.js","assets/vec3f64-2f9cef06.js","assets/common-c186b691.js","assets/vec4-790471c0.js","assets/screenUtils-410d12c0.js","assets/opacityUtils-1f7f5126.js","assets/symbolLayerUtils3D-76acc268.js","assets/aaBoundingBox-657a9b82.js","assets/aaBoundingRect-193543b5.js","assets/request-6fc81c4c.js","assets/persistableUrlUtils-5f719c3b.js","assets/Symbol3DAnchorPosition2D-5726d999.js","assets/Collection-910b6f71.js","assets/Evented-a45c8b0f.js","assets/SimpleObservable-23231131.js","assets/collectionUtils-803d9ba8.js","assets/Portal-2bb189b3.js","assets/Loadable-268c900a.js","assets/Promise-376ab9f6.js","assets/locale-30120714.js","assets/PortalGroup-8e41557a.js","assets/PortalUser-659cc1d2.js","assets/Clonable-545593ce.js","assets/LegendOptions-010d0873.js","assets/reactiveUtils-4dabbb80.js","assets/diffUtils-68b89c71.js","assets/colorRamps-9dac42c1.js","assets/sizeVariableUtils-d4870b0d.js","assets/Graphic-f0e54e86.js","assets/PopupTemplate-40f3c9aa.js","assets/number-27cf8195.js","assets/Identifiable-bfe1ff30.js","assets/jsonUtils-229211af.js","assets/compilerUtils-18d58939.js","assets/lengthUtils-fa751420.js","assets/unitUtils-45d1147c.js","assets/jsonUtils-0ff4ff96.js","assets/styleUtils-22b14a8b.js"])).getSize),m=R(l,r,{view:this.view.type,scale:this.view.scale,shape:s.type==="simple-marker"?s.style:null})),this.highlightGraphics.includes(r)&&(r.symbol=new B({style:"square",size:m,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),r.visible=!0,this.highlightGraphicUpdated(r,"symbol"))})}}async _updateHighlightedFeaturesGeometries(t){this._highlightGeometriesResolution=t;const r=this.highlightGraphics;if(!r.length||!this.layer.capabilities.operations.supportsQuery)return;const e=this._getTargetResolution(t),s=new Map;for(const i of r)if(!this._featuresResolutions.has(i)||this._featuresResolutions.get(i)>e){const n=i.sourceLayer;Z(s,n,()=>new Map).set(i.getObjectId(),i)}const m=Array.from(s,([i,n])=>{const y=i.createQuery();return y.objectIds=[...n.keys()],y.outFields=[i.objectIdField],y.returnGeometry=!0,y.maxAllowableOffset=e,y.outSpatialReference=this.view.spatialReference,i.queryFeatures(y)}),l=await Promise.all(m);if(!this.destroyed)for(const{features:i}of l)for(const n of i){const y=n.sourceLayer,h=s.get(y).get(n.getObjectId());h&&this.highlightGraphics.includes(h)&&(h.geometry=n.geometry,this.highlightGraphicUpdated(h,"geometry"),this._featuresResolutions.set(h,e))}}_getTargetResolution(t){const r=t*Y(this.view.spatialReference),e=r/16;return e<=10?0:t/r*e}async _fetchPopupFeaturesUsingIdentify(t,r){const e=await this._createIdentifyParameters(t,r);if(W(e))return[];const{results:s}=await Fe(this.layer.parsedUrl,e);return s.map(m=>m.feature)}async _createIdentifyParameters(t,r){const{floors:e,spatialReference:s,scale:m}=this.view,l=F(r)?r.event:null,i=await this._collectPopupProviders(this.layer.sublayers,m,r);if(!i.length)return null;await Promise.all(i.map(({sublayer:x})=>x.load().catch(()=>{})));const n=Math.min(D("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce((x,$)=>$.renderer?V({renderer:$.renderer,event:l}):x,2)),y=this.createFetchPopupFeaturesQueryGeometry(t,n),h=ie(m,s),g=Math.round(y.width/h),P=new L({xmin:y.center.x-h*g,ymin:y.center.y-h*g,xmax:y.center.x+h*g,ymax:y.center.y+h*g,spatialReference:y.spatialReference});return new J({floors:e,gdbVersion:this.layer.gdbVersion,geometry:t,height:g,layerOption:"popup",mapExtent:P,returnGeometry:!0,spatialReference:s,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:n,width:g})}async _fetchPopupFeaturesUsingQueries(t,r){const e=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,r),s=F(r)?r.event:null,m=e.map(async({sublayer:l,popupTemplate:i})=>{var I,w;await l.load().catch(()=>{});const n=l.createQuery(),y=V({renderer:l.renderer,event:s}),h=this.createFetchPopupFeaturesQueryGeometry(t,y);if(n.geometry=h,n.outFields=await xe(l,i),n.timeExtent=this.timeExtent,"floors"in this.view){const f=(w=(I=this.view)==null?void 0:I.floors)==null?void 0:w.clone(),b=j(f,l);F(b)&&(n.where=n.where?`(${n.where}) AND (${b})`:b)}const g=this._getTargetResolution(h.width/y),P=await this._loadArcadeModules(i),x=l.geometryType==="point"||P&&P.arcadeUtils.hasGeometryOperations(i);x||(n.maxAllowableOffset=g);const{features:$}=await l.queryFeatures(n),d=x?0:g;for(const f of $)this._featuresResolutions.set(f,d);return $});return(await K(m)).reverse().reduce((l,i)=>i.value?[...l,...i.value]:l,[]).filter(l=>l!=null)}async _collectPopupProviders(t,r,e){const s=[],m=async i=>{const n=i.minScale===0||r<=i.minScale,y=i.maxScale===0||r>=i.maxScale;if(i.visible&&n&&y){if(i.sublayers)i.sublayers.forEach(m);else if(i.popupEnabled){const h=$e(i,{...e,defaultPopupTemplateEnabled:!1});F(h)&&s.unshift({sublayer:i,popupTemplate:h})}}},l=t.toArray().reverse().map(m);return await Promise.all(l),s}_loadArcadeModules(t){var r;if((r=t.expressionInfos)!=null&&r.length||Array.isArray(t.content)&&t.content.some(e=>e.type==="expression"))return be()}};return a([u()],o.prototype,"highlightGraphics",void 0),a([u()],o.prototype,"exportImageParameters",void 0),a([u({readOnly:!0})],o.prototype,"exportImageVersion",null),a([u()],o.prototype,"layer",void 0),a([u()],o.prototype,"suspended",void 0),a([u(oe)],o.prototype,"timeExtent",void 0),o=a([N("esri.views.layers.MapImageLayerView")],o),o};export{at as F};
