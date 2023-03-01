import{cH as v,ac as t,ad as r,cK as d,iM as b,iN as c,af as f,iO as L,ak as w,iP as S,gf as F,er as I,r as l,iQ as g,iR as O,aa as x,cS as j,gx as T,W as y,aA as $,v as q,aR as Q,bl as P,iS as A,iT as E,iU as N,aN as R,gX as U,d2 as D,iV as _}from"./index-51930907.js";import{t as C}from"./capabilities-a18453f6.js";import{n as M}from"./I3SIndexInfo-bd5d64a7.js";import{s as B,l as K,u as k,m as V}from"./I3SLayerDefinitions-7f8195dd.js";import{u as Z}from"./I3SUtil-fa4e3f4e.js";import{d as H,s as G}from"./popupUtils-0740bfd4.js";let n=class extends v(L){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,a){return typeof a.alias=="string"?a.alias:typeof a.name=="string"?a.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:-1}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],n.prototype,"title",void 0),t([d("service","title",["alias","name"])],n.prototype,"readTitle",null),t([r()],n.prototype,"layer",void 0),t([r({type:b,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],n.prototype,"id",void 0),t([d("service","id")],n.prototype,"readIdOnlyOnce",null),t([r(c(String))],n.prototype,"modelName",void 0),t([r(c(Boolean))],n.prototype,"isEmpty",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],n.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],n.prototype,"opacity",void 0),n=t([f("esri.layers.buildingSublayers.BuildingSublayer")],n);const W=n,m="esri.layers.buildingSublayers.BuildingComponentSublayer",X=w.getLogger(m),h=_();let i=class extends S.LoadableMixin(F(W)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,a;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(a=this.layer.parsedUrl)==null?void 0:a.query}:{path:""}}get fieldsIndex(){return new I(this.fields)}readAssociatedLayer(e,a){const s=this.layer.associatedFeatureServiceItem,o=a.associatedLayerID;return l(s)&&typeof o=="number"?new g({portalItem:s,layerId:o}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return l(this.associatedLayer)?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const a=l(e)?e.signal:null,s=this._fetchService(a).then(()=>{this.indexInfo=M(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,X,a)});return this.addResolvingPromise(s),Promise.resolve(this)}createPopupTemplate(e){return O(this,e)}async _fetchService(e){const a=(await x(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(a,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,a){var o,p,u;const s=(p=(o=this.getFeatureType(a==null?void 0:a.feature))==null?void 0:o.domains)==null?void 0:p[e];return s&&s.type!=="inherited"?s:((u=this.getField(e))==null?void 0:u.domain)??null}getFeatureType(e){return e&&l(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return l(this.associatedLayer)?this.associatedLayer.types??[]:[]}get typeIdField(){return l(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=l(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:C,{query:a,data:{supportsZ:s,supportsM:o,isVersioned:p}}=e;return{query:a,data:{supportsZ:s,supportsM:o,isVersioned:p}}}createQuery(){const e=new j;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,a){return this._getAssociatedLayerForQuery().then(s=>s.queryExtent(e||this.createQuery(),a))}queryFeatureCount(e,a){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatureCount(e||this.createQuery(),a))}queryFeatures(e,a){return this._getAssociatedLayerForQuery().then(s=>s.queryFeatures(e||this.createQuery(),a)).then(s=>{if(s!=null&&s.features)for(const o of s.features)o.layer=this.layer,o.sourceLayer=this;return s})}queryObjectIds(e,a){return this._getAssociatedLayerForQuery().then(s=>s.queryObjectIds(e||this.createQuery(),a))}async queryCachedAttributes(e,a){const s=T(this.fieldsIndex,await H(this,G(this)));return Z(this.parsedUrl.path,this.attributeStorageInfo,e,a,s)}async queryCachedFeature(e,a){const s=await this.queryCachedAttributes(e,[a]);if(!s||s.length===0)throw new y("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new $;return o.attributes=s[0],o.layer=this,o.sourceLayer=this,o}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:l(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return l(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),q(this.associatedLayer))throw new y("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new y("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],i.prototype,"parsedUrl",null),t([r({type:B,readOnly:!0})],i.prototype,"nodePages",void 0),t([r({type:[K],readOnly:!0})],i.prototype,"materialDefinitions",void 0),t([r({type:[k],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),t([r({type:[V],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],i.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],i.prototype,"rootNode",void 0),t([r({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),t([r(h.fields)],i.prototype,"fields",void 0),t([r({readOnly:!0})],i.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:g})],i.prototype,"associatedLayer",void 0),t([d("service","associatedLayer",["associatedLayerID"])],i.prototype,"readAssociatedLayer",null),t([r(h.outFields)],i.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],i.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),t([r({readOnly:!0,type:String})],i.prototype,"apiKey",null),t([r({readOnly:!0,type:Q})],i.prototype,"fullExtent",null),t([r({readOnly:!0,type:P})],i.prototype,"spatialReference",null),t([r({readOnly:!0})],i.prototype,"version",null),t([r({readOnly:!0,type:A})],i.prototype,"elevationInfo",null),t([r({readOnly:!0,type:Number})],i.prototype,"minScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"maxScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"effectiveScaleRange",null),t([r({type:["hide","show"],json:{write:!0}})],i.prototype,"listMode",void 0),t([r({types:E,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r(N)],i.prototype,"popupEnabled",void 0),t([r({type:R,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),t([r()],i.prototype,"types",null),t([r()],i.prototype,"typeIdField",null),t([r({json:{write:!1}}),U(new D({"3DObject":"3d-object",Point:"point"}))],i.prototype,"layerType",void 0),t([r()],i.prototype,"geometryType",null),t([r()],i.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),i=t([f(m)],i);const ie=i;export{ie as M,W as n};
