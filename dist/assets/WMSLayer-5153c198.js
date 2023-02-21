import{e as a,y as u,s as Oe,n as ye,V as $e}from"./cast-fcb46737.js";import{a as Re,b as Le}from"./Error-ec6249b9.js";import{g as Pe}from"./Graphic-f0e54e86.js";import{k as Ue}from"./PopupTemplate-40f3c9aa.js";import{j as Ae,U as X,B as _e,p as Me,y as Te}from"./request-6fc81c4c.js";import{j as z}from"./Collection-910b6f71.js";import{l as je}from"./CollectionFlattener-8f4d518b.js";import{s as Ce}from"./jsonMap-7b8332c9.js";import{y as qe}from"./string-a318751c.js";import{t as R,r as I}from"./typedArrayUtil-4d7bb04c.js";import{S as Ve,O as Be}from"./MultiOriginJSONSupport-aae3bc0c.js";import{w as We}from"./promiseUtils-1e54421e.js";import{a as W,U as L,l as he}from"./reactiveUtils-4dabbb80.js";import{b as ke,T as De}from"./ArrayPool-a8ee9378.js";import{a as P,o as N,k as F,E as Xe,r as G}from"./Extent-da876e26.js";import{i as ne}from"./scaleUtils-93ad8d0c.js";import{b as Ge}from"./Layer-5ffe0eda.js";import{n as He}from"./BlendLayer-20d0571b.js";import{c as Je,a as Qe,f as ze}from"./OperationalLayer-97084f13.js";import{v as Ke}from"./PortalLayer-b2643f87.js";import{p as Ye}from"./RefreshableLayer-7f154951.js";import{t as Ze}from"./ScaleRangeLayer-4be07229.js";import{a as et}from"./TemporalLayer-61549309.js";import{o as J}from"./crsUtils-3bab3d8c.js";import{I as tt}from"./arcgisLayerUrl-c09f09b4.js";import{l as ie}from"./ExportWMSImageParameters-e7eb0d55.js";import{s as rt}from"./Identifiable-bfe1ff30.js";import"./nextTick-3ee5a785.js";import"./geometry-b7901087.js";import"./Polyline-ff2d7c6b.js";import"./typeUtils-35750739.js";import"./symbols-f8232671.js";import"./CIMSymbol-539bd447.js";import"./enumeration-3a03bd31.js";import"./fieldUtils-7f54c4b1.js";import"./preload-helper-3bce6601.js";import"./arcadeOnDemand-281a01eb.js";import"./Symbol-f93ed9fd.js";import"./Color-fb64d77d.js";import"./colorUtils-639f4d25.js";import"./mathUtils-b4bb77e2.js";import"./vec3-e93e648f.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-1f7f5126.js";import"./symbolLayerUtils3D-76acc268.js";import"./aaBoundingBox-657a9b82.js";import"./aaBoundingRect-193543b5.js";import"./persistableUrlUtils-5f719c3b.js";import"./Symbol3DAnchorPosition2D-5726d999.js";import"./collectionUtils-803d9ba8.js";import"./Portal-2bb189b3.js";import"./Loadable-268c900a.js";import"./Promise-376ab9f6.js";import"./locale-30120714.js";import"./PortalGroup-8e41557a.js";import"./PortalUser-659cc1d2.js";import"./Ellipsoid-89682c5e.js";import"./Clonable-545593ce.js";import"./jsonUtils-229211af.js";import"./number-27cf8195.js";import"./Evented-a45c8b0f.js";import"./SimpleObservable-23231131.js";import"./unitUtils-45d1147c.js";import"./parser-498c8be0.js";import"./mat4f32-77b3d8ac.js";import"./mat4-44a0988f.js";import"./TimeExtent-23e282b9.js";import"./ElevationInfo-215614d8.js";import"./lengthUtils-fa751420.js";import"./asyncUtils-437defc4.js";import"./PortalItem-bb7e98a6.js";import"./assets-8d3e737a.js";import"./TimeInfo-1d30dc7c.js";import"./HandleOwner-9b396af1.js";var q;let nt=0,y=q=class extends rt(Ve){constructor(e){super(e),this.dimensions=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.addHandles([W(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},L),W(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},L),he(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=this,n.layer=this.layer},L)])}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?P.fromJSON(e):null}get id(){return this._get("id")??nt++}set id(e){this._set("id",e)}readLegendUrl(e,t){return(t==null?void 0:t.legendUrl)??(t==null?void 0:t.legendURL)??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get name(){return this._get("name")}set name(e){this._set("name",e)}castSublayers(e){return ke(z.ofType(q),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){var t,r;const e=new q;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=((t=this.fullExtents)==null?void 0:t.map(n=>n.clone()))??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(n=>n.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=(r=this.spatialReferences)==null?void 0:r.map(n=>n)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([u()],y.prototype,"description",null),a([u({readOnly:!0})],y.prototype,"dimensions",void 0),a([u({value:null})],y.prototype,"fullExtent",null),a([N("fullExtent",["extent"])],y.prototype,"readExtent",null),a([u()],y.prototype,"fullExtents",void 0),a([u({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],y.prototype,"id",null),a([u({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],y.prototype,"legendUrl",void 0),a([N(["web-document"],"legendUrl")],y.prototype,"readLegendUrl",null),a([u({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],y.prototype,"legendEnabled",void 0),a([u()],y.prototype,"layer",void 0),a([u()],y.prototype,"maxScale",void 0),a([u()],y.prototype,"minScale",void 0),a([u({readOnly:!0})],y.prototype,"effectiveScaleRange",null),a([u({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],y.prototype,"name",null),a([u()],y.prototype,"parent",void 0),a([u({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],y.prototype,"popupEnabled",void 0),a([u({type:Boolean,json:{write:{ignoreOrigin:!0}}})],y.prototype,"queryable",void 0),a([u()],y.prototype,"sublayers",void 0),a([Oe("sublayers")],y.prototype,"castSublayers",null),a([u({type:[Number],json:{read:{source:"spatialReferences"}}})],y.prototype,"spatialReferences",void 0),a([u({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],y.prototype,"title",null),a([u({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],y.prototype,"visible",null),y=q=a([ye("esri.layers.support.WMSSublayer")],y);const Q=y,C={84:4326,83:4269,27:4267};function it(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const w=Array.prototype.slice.call(r.childNodes).map(A=>A.textContent).join(`\r
`);throw new Re("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",w)}const n=b("Capability",r),i=b("Service",r),l=b("Request",n);if(!n||!i||!l)return null;const o=b("Layer",n);if(!o)return null;const f=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",s=v("Title",i,"")||v("Name",i,""),p=v("AccessConstraints",i,""),d=/^none$/i.test(p)?"":p,m=v("Abstract",i,""),g=parseInt(v("MaxWidth",i,"5000"),10),x=parseInt(v("MaxHeight",i,"5000"),10),S=ae(l,"GetMap"),U=se(l,"GetMap"),h=M(o,f,t);let K,k=0;if(Array.prototype.slice.call(n.childNodes).forEach(w=>{w.nodeName==="Layer"&&(k===0?K=w:(k===1&&h.name&&(h.name="",h.sublayers.push(M(K,f,t))),h.sublayers.push(M(w,f,t))),k++)}),!h)return null;let E,T;const ve=h.fullExtents;if(E=h.sublayers,E||(E=[]),E.length===0&&E.push(h),T=h.extent,!T){const w=new P(E[0].extent);h.extent=w.toJSON(),T=h.extent}const Se=h.spatialReferences.length>0?h.spatialReferences:ge(h),Y=se(l,"GetFeatureInfo"),Ee=Y?ae(l,"GetFeatureInfo"):null,Z=be(E),Ie=h.minScale||0,Ne=h.maxScale||0,ee=h.dimensions,Fe=Z.reduce((w,A)=>w.concat(A.dimensions),[]),te=ee.concat(Fe).filter(we);let re=null;if(te.length){const w=te.map(A=>{const{extent:D}=A;return ot(D)?D.map(j=>j.getTime()):D.map(j=>[j.min.getTime(),j.max.getTime()])}).flat(2);re={startTimeField:null,endTimeField:null,trackIdField:null,timeExtent:[Math.min(...w),Math.max(...w)]}}return{copyright:d,description:m,dimensions:ee,extent:T,fullExtents:ve,featureInfoFormats:Ee,featureInfoUrl:Y,mapUrl:U,maxWidth:g,maxHeight:x,maxScale:Ne,minScale:Ie,layers:Z,spatialReferences:Se,supportedImageFormatTypes:S,timeInfo:re,title:s,version:f}}function st(e){const t=e.filter(r=>r.popupEnabled&&r.name&&r.queryable);return t.length?t.map(({name:r})=>r).join():null}function ge(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=ge(t);if(r.length>0)return r}return[]}function be(e){var r;let t=[];for(const n of e)t.push(n),(r=n.sublayers)!=null&&r.length&&(t=t.concat(be(n.sublayers)),delete n.sublayers);return t}function V(e,t,r){return t.getAttribute(e)??r}function at(e,t,r,n){const i=b(e,r);return i?V(t,i,n):n}function b(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(xe(n)&&n.nodeName===e)return n}return null}function B(e,t){const r=[];for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];xe(i)&&i.nodeName===e&&r.push(i)}return r}function v(e,t,r){const n=b(e,t);return n?n.textContent:r}function _(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),i=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),o=parseFloat(e.getAttribute("maxy"));let f,s,p,d;r?(f=isNaN(i)?-Number.MAX_VALUE:i,s=isNaN(n)?-Number.MAX_VALUE:n,p=isNaN(o)?Number.MAX_VALUE:o,d=isNaN(l)?Number.MAX_VALUE:l):(f=isNaN(n)?-Number.MAX_VALUE:n,s=isNaN(i)?-Number.MAX_VALUE:i,p=isNaN(l)?Number.MAX_VALUE:l,d=isNaN(o)?Number.MAX_VALUE:o);const m=new F({wkid:t});return new P({xmin:f,ymin:s,xmax:p,ymax:d,spatialReference:m})}function se(e,t){const r=b(t,e);if(r){const n=b("DCPType",r);if(n){const i=b("HTTP",n);if(i){const l=b("Get",i);if(l){let o=at("OnlineResource","xlink:href",l,null);if(o)return o.indexOf("&")===o.length-1&&(o=o.substring(0,o.length-1)),ut(o,["service","request"])}}}}return null}function ae(e,t){const r=B("Operation",e);if(!r.length)return B("Format",b(t,e)).map(({textContent:i})=>i);const n=[];for(const i of r)if(i.getAttribute("name")===t){const l=B("Format",i);for(const{textContent:o}of l)n.push(o)}return n}function oe(e,t,r){const n=b(t,e);if(!n)return r;const{textContent:i}=n;if(i==null||i==="")return r;const l=Number(i);return isNaN(l)?r:l}function M(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},i=b("LatLonBoundingBox",e),l=b("EX_GeographicBoundingBox",e);let o=null;i&&(o=_(i,4326)),l&&(o=new P(0,0,0,0,new F({wkid:4326})),o.xmin=parseFloat(v("westBoundLongitude",l,"0")),o.ymin=parseFloat(v("southBoundLatitude",l,"0")),o.xmax=parseFloat(v("eastBoundLongitude",l,"0")),o.ymax=parseFloat(v("northBoundLatitude",l,"0"))),i||l||(o=new P(-180,-90,180,90,new F({wkid:4326}))),n.minScale=oe(e,"MaxScaleDenominator",0),n.maxScale=oe(e,"MinScaleDenominator",0);const f=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(s=>{if(s.nodeName==="Name")n.name=s.textContent||"";else if(s.nodeName==="Title")n.title=s.textContent||"";else if(s.nodeName==="Abstract")n.description=s.textContent||"";else if(s.nodeName==="BoundingBox"){const p=s.getAttribute(f);if(p&&p.indexOf("EPSG:")===0){const m=parseInt(p.substring(5),10);m===0||isNaN(m)||o||(o=t==="1.3.0"?_(s,m,J(m)):_(s,m))}const d=p&&p.indexOf(":");if(d&&d>-1){let m=parseInt(p.substring(d+1,p.length),10);m===0||isNaN(m)||(m=C[m]?C[m]:m);const g=t==="1.3.0"?_(s,m,J(m)):_(s,m);n.fullExtents.push(g)}}else if(s.nodeName===f)s.textContent.split(" ").forEach(p=>{const d=p.includes(":")?parseInt(p.split(":")[1],10):parseInt(p,10);if(d!==0&&!isNaN(d)){const m=C[d]?C[d]:d;n.spatialReferences.includes(m)||n.spatialReferences.push(m)}});else if(s.nodeName!=="Style"||n.legendURL){if(s.nodeName==="Layer"){const p=M(s,t,r);p&&(p.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(p))}}else{const p=b("LegendURL",s);if(p){const d=b("OnlineResource",p);d&&(n.legendURL=d.getAttribute("xlink:href"))}}}),n.extent=o==null?void 0:o.toJSON(),n.dimensions=B("Dimension",e).filter(s=>s.getAttribute("name")&&s.getAttribute("units")&&s.textContent).map(s=>{const p=s.getAttribute("name"),d=s.getAttribute("units"),m=s.textContent,g=s.getAttribute("unitSymbol"),x=s.getAttribute("default"),S=V("default",s,"0")!=="0",U=V("nearestValue",s,"0")!=="0",h=V("current",s,"0")!=="0";return we({name:p,units:d})?{name:"time",units:"ISO8601",extent:pe(m),default:pe(x),multipleValues:S,nearestValue:U,current:h}:lt({name:p,units:d})?{name:"elevation",units:d,extent:le(m),unitSymbol:g,default:le(x),multipleValues:S,nearestValue:U}:{name:p,units:d,extent:ue(m),unitSymbol:g,default:ue(x),multipleValues:S,nearestValue:U}}),n}function ot(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function xe(e){return e.nodeType===Node.ELEMENT_NODE}function lt(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function we(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ut(e,t){const r=[],n=Ae(e);for(const i in n.query)n.query.hasOwnProperty(i)&&(t.includes(i.toLowerCase())||r.push(i+"="+n.query[i]));return n.path+(r.length?"?"+r.join("&"):"")}function le(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:parseFloat(i[0]),max:parseFloat(i[1]),resolution:i.length>=3&&i[2]!=="0"?parseFloat(i[2]):void 0}}).filter(n=>n):r.map(n=>parseFloat(n))}function ue(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:i[0],max:i[1],resolution:i.length>=3&&i[2]!=="0"?i[2]:void 0}}).filter(n=>n):r}function pe(e){if(!e)return null;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:new Date(i[0]),max:new Date(i[1]),resolution:i.length>=3&&i[2]!=="0"?pt(i[2]):void 0}}).filter(n=>n):r.map(n=>new Date(n))}function pt(e){const t=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,r=e.match(t);return r?{years:O(r[1]),months:O(r[2]),days:O(r[3]),hours:O(r[4]),minutes:O(r[5]),seconds:O(r[6])}:null}function O(e){if(!e)return 0;const t=/(?:\d+(?:.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function $(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const me=new Set([102100,3857,102113,900913]),mt=new Set([3395,54004]);function ct(e,t){let r=e.wkid;return R(t)?r:(!t.includes(r)&&e.latestWkid&&(r=e.latestWkid),me.has(r)?t.find(n=>me.has(n))||t.find(n=>mt.has(n))||102100:r)}const H=new Ce({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function ce(e){return e==="text/html"}function de(e){return e==="text/plain"}let c=class extends He(et(Ye(Ze(Je(Ke(Be(Ge))))))){constructor(...e){super(...e),this.allSublayers=new je({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.addHandles([W(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},L),W(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},L),he(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=n.layer=this},L)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=I(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(We).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new P({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return R(this.featureInfoFormats)?null:this.featureInfoFormats.find(ce)??this.featureInfoFormats.find(de)??null}set featureInfoFormat(e){I(e)?(ce(e)||de(e))&&this._override("featureInfoFormat",e):(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat"))}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new F(t.spatialReferences[0])}writeSpatialReferences(e,t){var n;const r=(n=this.spatialReference)==null?void 0:n.wkid;e&&r?(t.spatialReferences=e.filter(i=>i!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return fe(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return fe(t.layers,r)}writeSublayers(e,t,r,n){var o,f;t.layers=[];const i=new Map,l=e.flatten(({sublayers:s})=>s);for(const s of l)if(typeof((o=s.parent)==null?void 0:o.id)=="number"){const p=i.get(s.parent.id);p!=null?p.push(s.id):i.set(s.parent.id,[s.id])}for(const s of l){const p={sublayer:s,...n},d=s.write({parentLayerId:typeof((f=s.parent)==null?void 0:f.id)=="number"?s.parent.id:-1},p);if(i.has(s.id)&&(d.sublayerIds=i.get(s.id)),!s.sublayers&&s.name){const m=s.write({},p);delete m.id,t.layers.push(m)}}t.visibleLayers=l.filter(({visible:s,sublayers:p})=>s&&!p).map(({name:s})=>s).toArray()}createExportImageParameters(e,t,r,n){const i=(n==null?void 0:n.pixelRatio)??1,l=ne({extent:e,width:t})*i,o=new ie({layer:this,scale:l}),{xmin:f,ymin:s,xmax:p,ymax:d,spatialReference:m}=e,g=ct(m,this.spatialReferences),x=this.version==="1.3.0"&&J(g)?`${s},${f},${d},${p}`:`${f},${s},${p},${d}`,S=o.toJSON();return{bbox:x,[this.version==="1.3.0"?"crs":"srs"]:isNaN(g)?void 0:"EPSG:"+g,...S}}async fetchImage(e,t,r,n){var d,m;const i=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const g=document.createElement("canvas");return g.width=t,g.height=r,g}const o=(d=n==null?void 0:n.timeExtent)==null?void 0:d.start,f=(m=n==null?void 0:n.timeExtent)==null?void 0:m.end,s=I(o)&&I(f)?o.getTime()===f.getTime()?$(o):`${$(o)}/${$(f)}`:void 0,p={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:s,...this.refreshParameters}),signal:n==null?void 0:n.signal};return X(i??"",p).then(g=>g.data)}async fetchImageBitmap(e,t,r,n){var m,g;const i=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const x=document.createElement("canvas");return x.width=t,x.height=r,x}const o=(m=n==null?void 0:n.timeExtent)==null?void 0:m.start,f=(g=n==null?void 0:n.timeExtent)==null?void 0:g.end,s=I(o)&&I(f)?o.getTime()===f.getTime()?$(o):`${$(o)}/${$(f)}`:void 0,p={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...l,time:s,...this.refreshParameters}),signal:n==null?void 0:n.signal},d=await X(i??"",p).then(x=>x.data);return createImageBitmap(d)}fetchFeatureInfo(e,t,r,n,i){const l=ne({extent:e,width:t}),o=new ie({layer:this,scale:l}),f=st(o.visibleSublayers);if(R(this.featureInfoUrl)||R(f))return Promise.resolve([]);if(R(this.fetchFeatureInfoFunction)&&R(this.featureInfoFormat))return Promise.resolve([]);const s=this.version==="1.3.0"?{I:n,J:i}:{x:n,y:i},p={query_layers:f,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...s},d={...this.createExportImageParameters(e,t,r),...p},m=this._mixCustomParameters(d);return I(this.fetchFeatureInfoFunction)?this.fetchFeatureInfoFunction(m):this._defaultFetchFeatureInfoFunction(_e(this.featureInfoUrl,m))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return tt(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(t=>{const r=t===900913?F.WebMercator:new F({wkid:t});return Xe(r,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=Me(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new Ue({title:this.title,content:t}),n=new Pe({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){if(!this.resourceInfo){const{path:t,query:r}=this.parsedUrl??{};r!=null&&r.service&&(r.SERVICE=r.service,delete r.service),r!=null&&r.request&&(r.REQUEST=r.request,delete r.request);const{data:n}=await X(t??"",{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=it(n)}if(this.parsedUrl){const t=new Te(this.parsedUrl.path),{httpsDomains:r}=Le.request;t.scheme!=="https"||t.port&&t.port!=="443"||!t.host||r.includes(t.host)||r.push(t.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function dt(e,t){return e.some(r=>{for(const n in r)if($e(r,n,null,t))return!0;return!1})}function fe(e,t,r){e=e??[];const n=new Map;e.every(l=>l.id==null)&&(e=qe(e)).forEach((l,o)=>l.id=o);for(const l of e){const o=new Q;o.read(l,t),r&&!r.includes(o.name)&&(o.visible=!1),n.set(o.id,o)}const i=[];for(const l of e){const o=l.id!=null?n.get(l.id):null;if(o)if(l.parentLayerId!=null&&l.parentLayerId>=0){const f=n.get(l.parentLayerId);if(!f)continue;f.sublayers||(f.sublayers=new z),f.sublayers.push(o)}else i.push(o)}return i}a([u({readOnly:!0})],c.prototype,"allSublayers",void 0),a([u({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),a([u({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),a([u({type:String,json:{write:!0}})],c.prototype,"copyright",void 0),a([u()],c.prototype,"description",void 0),a([u({readOnly:!0})],c.prototype,"dimensions",void 0),a([u({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],c.prototype,"fullExtent",void 0),a([N(["web-document","portal-item"],"fullExtent",["extent"])],c.prototype,"readFullExtentFromItemOrMap",null),a([G(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],c.prototype,"writeFullExtent",null),a([u()],c.prototype,"fullExtents",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoFormat",null),a([u({type:[String],readOnly:!0})],c.prototype,"featureInfoFormats",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoUrl",void 0),a([u()],c.prototype,"fetchFeatureInfoFunction",void 0),a([u({type:String,json:{origins:{"web-document":{default:"image/png",type:H.jsonValues,read:{reader:H.read,source:"format"},write:{writer:H.write,target:"format"}}}}})],c.prototype,"imageFormat",void 0),a([N("imageFormat",["supportedImageFormatTypes"])],c.prototype,"readImageFormat",null),a([u({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],c.prototype,"imageMaxHeight",void 0),a([u({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],c.prototype,"imageMaxWidth",void 0),a([u()],c.prototype,"imageTransparency",void 0),a([u(Qe)],c.prototype,"legendEnabled",void 0),a([u({type:["show","hide","hide-children"]})],c.prototype,"listMode",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"mapUrl",void 0),a([u({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),a([u({type:["WMS"]})],c.prototype,"operationalLayerType",void 0),a([u()],c.prototype,"resourceInfo",void 0),a([u({type:F,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],c.prototype,"spatialReference",void 0),a([N(["web-document","portal-item"],"spatialReference",["spatialReferences"])],c.prototype,"readSpatialReferenceFromItemOrDocument",null),a([u({type:[De],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],c.prototype,"spatialReferences",void 0),a([G(["web-document","portal-item"],"spatialReferences")],c.prototype,"writeSpatialReferences",null),a([u({type:z.ofType(Q),json:{write:{target:"layers",overridePolicy(e,t,r){if(dt(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],c.prototype,"sublayers",void 0),a([N(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],c.prototype,"readSublayersFromItemOrMap",null),a([N("service","sublayers",["layers"])],c.prototype,"readSublayers",null),a([G("sublayers",{layers:{type:[Q]},visibleLayers:{type:[String]}})],c.prototype,"writeSublayers",null),a([u({json:{read:!1},readOnly:!0,value:"wms"})],c.prototype,"type",void 0),a([u(ze)],c.prototype,"url",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"version",void 0),c=a([ye("esri.layers.WMSLayer")],c);const jr=c;export{jr as default};
