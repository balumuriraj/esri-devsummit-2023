import{_ as n}from"./preload-helper-3bce6601.js";import{e as o,y as i,n as h}from"./cast-fcb46737.js";import"./geometry-b7901087.js";import{j as b,U as c}from"./request-6fc81c4c.js";import{b as f,s as p,a as v}from"./Error-ec6249b9.js";import{n as g}from"./Evented-a45c8b0f.js";import{s as w}from"./Identifiable-bfe1ff30.js";import{m as _}from"./Loadable-268c900a.js";import{j as L}from"./promiseUtils-1e54421e.js";import"./typedArrayUtil-4d7bb04c.js";import"./ArrayPool-a8ee9378.js";import{a as y,k as l}from"./Extent-da876e26.js";async function D(t){const r="portalItem"in t?t:{portalItem:t},d=await n(()=>import("./portalLayers-bc22a371.js"),["assets/portalLayers-bc22a371.js","assets/Error-ec6249b9.js","assets/string-a318751c.js","assets/typedArrayUtil-4d7bb04c.js","assets/lazyLayerLoader-41b90a4f.js","assets/preload-helper-3bce6601.js","assets/PortalItem-bb7e98a6.js","assets/cast-fcb46737.js","assets/ArrayPool-a8ee9378.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-1e54421e.js","assets/assets-8d3e737a.js","assets/request-6fc81c4c.js","assets/Loadable-268c900a.js","assets/Promise-376ab9f6.js","assets/Extent-da876e26.js","assets/Ellipsoid-89682c5e.js","assets/Portal-2bb189b3.js","assets/locale-30120714.js","assets/PortalGroup-8e41557a.js","assets/jsonMap-7b8332c9.js","assets/PortalUser-659cc1d2.js","assets/layersLoader-89454f28.js","assets/arcgisLayerUrl-c09f09b4.js","assets/persistableUrlUtils-5f719c3b.js","assets/jsonContext-a007a25f.js","assets/portalItemUtils-2ccd793f.js","assets/projection-290b739f.js","assets/mathUtils-b4bb77e2.js","assets/vec3-e93e648f.js","assets/vec3f64-2f9cef06.js","assets/common-c186b691.js","assets/vec4-790471c0.js","assets/unitUtils-45d1147c.js","assets/SimpleObservable-23231131.js","assets/mat4-44a0988f.js","assets/Polyline-ff2d7c6b.js","assets/aaBoundingRect-193543b5.js","assets/zscale-89472cba.js","assets/styleUtils-a989c0af.js","assets/asyncUtils-437defc4.js","assets/geometry-b7901087.js","assets/typeUtils-35750739.js","assets/Evented-a45c8b0f.js","assets/Identifiable-bfe1ff30.js"]);try{return await d.fromItem(r)}catch(s){const a=r&&r.portalItem,u=a&&a.id||"unset",m=a&&a.portal&&a.portal.url||f.portalUrl;throw p.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+m+"', id: '"+u+"')",s),s}}let E=0,e=class extends g.EventedMixin(w(_)){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new y(-180,-90,180,90,l.WGS84),this.id=Date.now().toString(16)+"-layer-"+E++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=l.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const r=typeof t=="string"?{url:t}:t;return(await n(()=>import("./arcgisLayers-e1745fb1.js"),["assets/arcgisLayers-e1745fb1.js","assets/preload-helper-3bce6601.js","assets/Error-ec6249b9.js","assets/string-a318751c.js","assets/typedArrayUtil-4d7bb04c.js","assets/request-6fc81c4c.js","assets/promiseUtils-1e54421e.js","assets/arcgisLayerUrl-c09f09b4.js","assets/persistableUrlUtils-5f719c3b.js","assets/fetchService-2100186c.js","assets/lazyLayerLoader-41b90a4f.js"])).fromUrl(r)}static fromPortalItem(t){return D(t)}initialize(){this.when().catch(t=>{L(t)||p.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}')`,{error:t})})}destroy(){if(this.parent){const t=this,r=this.parent;"layers"in r&&r.layers.includes(t)?r.layers.remove(t):"tables"in r&&r.tables.includes(t)?r.tables.remove(t):"baseLayers"in r&&r.baseLayers.includes(t)?r.baseLayers.remove(t):"baseLayers"in r&&r.referenceLayers.includes(t)&&r.referenceLayers.remove(t)}}get hasAttributionData(){return this.attributionDataUrl!=null}get parsedUrl(){return b(this.url)}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t)return(await c(t,{query:{f:"json"},responseType:"json"})).data;throw new v("layer:no-attribution-data","Layer does not have attribution data")}};o([i({type:String})],e.prototype,"attributionDataUrl",void 0),o([i({type:y})],e.prototype,"fullExtent",void 0),o([i({readOnly:!0})],e.prototype,"hasAttributionData",null),o([i({type:String,clonable:!1})],e.prototype,"id",void 0),o([i({type:Boolean,nonNullable:!0})],e.prototype,"legendEnabled",void 0),o([i({type:["show","hide","hide-children"]})],e.prototype,"listMode",void 0),o([i({type:Number,range:{min:0,max:1},nonNullable:!0})],e.prototype,"opacity",void 0),o([i({clonable:!1})],e.prototype,"parent",void 0),o([i({readOnly:!0})],e.prototype,"parsedUrl",null),o([i({type:Boolean})],e.prototype,"popupEnabled",void 0),o([i({type:Boolean})],e.prototype,"attributionVisible",void 0),o([i({type:l})],e.prototype,"spatialReference",void 0),o([i({type:String})],e.prototype,"title",void 0),o([i({readOnly:!0,json:{read:!1}})],e.prototype,"type",void 0),o([i()],e.prototype,"url",void 0),o([i({type:Boolean,nonNullable:!0})],e.prototype,"visible",void 0),e=o([h("esri.layers.Layer")],e);const V=e;export{V as b};
