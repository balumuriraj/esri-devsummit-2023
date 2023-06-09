import{g9 as v,e as t,y as r,ar as d,g8 as b,mR as c,a as g,f_ as L,p as w,fX as F,ga as S,ka as I,R as l,g0 as f,mS as O,ep as x,g1 as j,ks as T,a1 as y,c1 as $,$ as q,w as Q,G as E,lB as P,mT as R,mU as U,g$ as A,au as D,fY as N,mV as _}from"./calcite-c5ae4991.js";import{t as B}from"./capabilities-a18453f6.js";import{n as C}from"./I3SIndexInfo-7faf7567.js";import{s as M,l as K,u as k,m as V}from"./I3SLayerDefinitions-5c9d71e0.js";import{u as Z}from"./I3SUtil-cbb80728.js";import{d as G,s as H}from"./popupUtils-bf43aa1c.js";let n=class extends v(L){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:-1}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],n.prototype,"title",void 0),t([d("service","title",["alias","name"])],n.prototype,"readTitle",null),t([r()],n.prototype,"layer",void 0),t([r({type:b,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],n.prototype,"id",void 0),t([d("service","id")],n.prototype,"readIdOnlyOnce",null),t([r(c(String))],n.prototype,"modelName",void 0),t([r(c(Boolean))],n.prototype,"isEmpty",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],n.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],n.prototype,"opacity",void 0),n=t([g("esri.layers.buildingSublayers.BuildingSublayer")],n);const X=n,m="esri.layers.buildingSublayers.BuildingComponentSublayer",Y=w.getLogger(m),h=_();let i=class extends F.LoadableMixin(S(X)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,s;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(s=this.layer.parsedUrl)==null?void 0:s.query}:{path:""}}get fieldsIndex(){return new I(this.fields)}readAssociatedLayer(e,s){const a=this.layer.associatedFeatureServiceItem,o=s.associatedLayerID;return l(a)&&typeof o=="number"?new f({portalItem:a,layerId:o}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return l(this.associatedLayer)?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const s=l(e)?e.signal:null,a=this._fetchService(s).then(()=>{this.indexInfo=C(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,Y,s)});return this.addResolvingPromise(a),Promise.resolve(this)}createPopupTemplate(e){return O(this,e)}async _fetchService(e){const s=(await x(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(s,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){var o,p,u;const a=(p=(o=this.getFeatureType(s==null?void 0:s.feature))==null?void 0:o.domains)==null?void 0:p[e];return a&&a.type!=="inherited"?a:((u=this.getField(e))==null?void 0:u.domain)??null}getFeatureType(e){return e&&l(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return l(this.associatedLayer)?this.associatedLayer.types??[]:[]}get typeIdField(){return l(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=l(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:B,{query:s,data:{supportsZ:a,supportsM:o,isVersioned:p}}=e;return{query:s,data:{supportsZ:a,supportsM:o,isVersioned:p}}}createQuery(){const e=new j;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(a=>a.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(a=>a.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(a=>a.queryFeatures(e||this.createQuery(),s)).then(a=>{if(a!=null&&a.features)for(const o of a.features)o.layer=this.layer,o.sourceLayer=this;return a})}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(a=>a.queryObjectIds(e||this.createQuery(),s))}async queryCachedAttributes(e,s){const a=T(this.fieldsIndex,await G(this,H(this)));return Z(this.parsedUrl.path,this.attributeStorageInfo,e,s,a)}async queryCachedFeature(e,s){const a=await this.queryCachedAttributes(e,[s]);if(!a||a.length===0)throw new y("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new $;return o.attributes=a[0],o.layer=this,o.sourceLayer=this,o}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:l(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return l(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),q(this.associatedLayer))throw new y("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new y("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],i.prototype,"parsedUrl",null),t([r({type:M,readOnly:!0})],i.prototype,"nodePages",void 0),t([r({type:[K],readOnly:!0})],i.prototype,"materialDefinitions",void 0),t([r({type:[k],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),t([r({type:[V],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],i.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],i.prototype,"rootNode",void 0),t([r({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),t([r(h.fields)],i.prototype,"fields",void 0),t([r({readOnly:!0})],i.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:f})],i.prototype,"associatedLayer",void 0),t([d("service","associatedLayer",["associatedLayerID"])],i.prototype,"readAssociatedLayer",null),t([r(h.outFields)],i.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],i.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),t([r({readOnly:!0,type:String})],i.prototype,"apiKey",null),t([r({readOnly:!0,type:Q})],i.prototype,"fullExtent",null),t([r({readOnly:!0,type:E})],i.prototype,"spatialReference",null),t([r({readOnly:!0})],i.prototype,"version",null),t([r({readOnly:!0,type:P})],i.prototype,"elevationInfo",null),t([r({readOnly:!0,type:Number})],i.prototype,"minScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"maxScale",null),t([r({readOnly:!0,type:Number})],i.prototype,"effectiveScaleRange",null),t([r({type:["hide","show"],json:{write:!0}})],i.prototype,"listMode",void 0),t([r({types:R,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r(U)],i.prototype,"popupEnabled",void 0),t([r({type:A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),t([r()],i.prototype,"types",null),t([r()],i.prototype,"typeIdField",null),t([r({json:{write:!1}}),D(new N({"3DObject":"3d-object",Point:"point"}))],i.prototype,"layerType",void 0),t([r()],i.prototype,"geometryType",null),t([r()],i.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),i=t([g(m)],i);const ie=i;export{ie as M,X as n};
