import{_ as $}from"./preload-helper-3bce6601.js";import{e as r,y as i,n as b}from"./cast-fcb46737.js";import"./geometry-b7901087.js";import{k as j}from"./PopupTemplate-40f3c9aa.js";import"./UniqueValueRenderer-08f8851c.js";import{b as J,n as N}from"./jsonUtils-f5674613.js";import{r as O,t as R}from"./typedArrayUtil-4d7bb04c.js";import{O as P}from"./MultiOriginJSONSupport-aae3bc0c.js";import{x as q,w as k}from"./promiseUtils-1e54421e.js";import{j as y}from"./request-6fc81c4c.js";import"./ArrayPool-a8ee9378.js";import{i as I}from"./typeUtils-35750739.js";import{b as T}from"./Layer-5ffe0eda.js";import{s as D,a as f}from"./Error-ec6249b9.js";import{h as G}from"./string-a318751c.js";import{m as L}from"./Loadable-268c900a.js";import{u as Q}from"./workers-6e30d081.js";import{l as Z}from"./clientSideDefaults-8609abb2.js";import z from"./FeatureSet-d32b0eb8.js";import{a as x,k as F}from"./Extent-da876e26.js";import{v as C}from"./Polyline-ff2d7c6b.js";import{n as V}from"./BlendLayer-20d0571b.js";import{o as A}from"./CustomParametersMixin-47aab0a6.js";import{n as U,p as W}from"./FeatureReductionLayer-d69dae71.js";import{c as B,d as M,j as H,m as K,a as X,w as Y,p as tt,l as et,f as rt}from"./OperationalLayer-97084f13.js";import{c as ot}from"./OrderedLayer-af7a6030.js";import{v as it}from"./PortalLayer-b2643f87.js";import{p as st}from"./RefreshableLayer-7f154951.js";import{t as nt}from"./ScaleRangeLayer-4be07229.js";import{a as at}from"./TemporalLayer-61549309.js";import{p as pt}from"./FeatureTemplate-c1d0bb70.js";import{n as lt}from"./FeatureType-34d71ade.js";import{y as ut}from"./Field-61ec9870.js";import{s as dt}from"./fieldProperties-e2eeb1d5.js";import{F as g,b as mt}from"./fieldUtils-7f54c4b1.js";import{j as ht,i as ct}from"./labelingInfo-607e66b8.js";import{x as h}from"./Query-b96bcde0.js";import{p as yt}from"./popupUtils-86dc6b94.js";import"./nextTick-3ee5a785.js";import"./Clonable-545593ce.js";import"./Collection-910b6f71.js";import"./Evented-a45c8b0f.js";import"./SimpleObservable-23231131.js";import"./jsonMap-7b8332c9.js";import"./enumeration-3a03bd31.js";import"./number-27cf8195.js";import"./locale-30120714.js";import"./Identifiable-bfe1ff30.js";import"./symbols-f8232671.js";import"./CIMSymbol-539bd447.js";import"./Symbol-f93ed9fd.js";import"./Color-fb64d77d.js";import"./colorUtils-639f4d25.js";import"./mathUtils-b4bb77e2.js";import"./vec3-e93e648f.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-1f7f5126.js";import"./symbolLayerUtils3D-76acc268.js";import"./aaBoundingBox-657a9b82.js";import"./aaBoundingRect-193543b5.js";import"./persistableUrlUtils-5f719c3b.js";import"./Symbol3DAnchorPosition2D-5726d999.js";import"./collectionUtils-803d9ba8.js";import"./Portal-2bb189b3.js";import"./PortalGroup-8e41557a.js";import"./PortalUser-659cc1d2.js";import"./Ellipsoid-89682c5e.js";import"./LegendOptions-010d0873.js";import"./arcadeOnDemand-281a01eb.js";import"./reactiveUtils-4dabbb80.js";import"./diffUtils-68b89c71.js";import"./colorRamps-9dac42c1.js";import"./sizeVariableUtils-d4870b0d.js";import"./Graphic-f0e54e86.js";import"./jsonUtils-229211af.js";import"./compilerUtils-18d58939.js";import"./lengthUtils-fa751420.js";import"./unitUtils-45d1147c.js";import"./jsonUtils-0ff4ff96.js";import"./styleUtils-22b14a8b.js";import"./DictionaryLoader-1cbfea53.js";import"./LRUCache-64ec42ee.js";import"./MemCache-18a255ed.js";import"./deprecate-035b199e.js";import"./heatmapUtils-aaea3f32.js";import"./vec4f64-e407da96.js";import"./Promise-376ab9f6.js";import"./Connection-9a1cf8da.js";import"./Queue-b7d3cd48.js";import"./assets-8d3e737a.js";import"./intl-65a3e389.js";import"./messages-2289086c.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-59981e75.js";import"./fieldType-f31285f7.js";import"./parser-498c8be0.js";import"./mat4f32-77b3d8ac.js";import"./mat4-44a0988f.js";import"./TimeExtent-23e282b9.js";import"./ElevationInfo-215614d8.js";import"./asyncUtils-437defc4.js";import"./PortalItem-bb7e98a6.js";import"./TimeInfo-1d30dc7c.js";import"./FieldsIndex-f104cc5f.js";import"./labelUtils-3108e8d7.js";const E="esri.layers.graphics.sources.GeoJSONSource",v=D.getLogger(E);let d=class extends L{constructor(){super(...arguments),this.type="geojson",this.refresh=q(async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=O(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;(t=this._connection)==null||t.close(),this._connection=null}applyEdits(t){return this.load().then(()=>this._applyEdits(t))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e)).then(o=>z.fromJSON(o))}queryFeaturesJSON(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e))}queryFeatureCount(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e))}queryObjectIds(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryObjectIds",t?t.toJSON():null,e))}queryExtent(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryExtent",t?t.toJSON():null,e)).then(o=>({count:o.count,extent:x.fromJSON(o.extent)}))}querySnapping(t,e={}){return this.load(e).then(()=>this._connection.invoke("querySnapping",t,e))}_applyEdits(t){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const e=this.layer.objectIdField,o=[],n=[],u=[];if(t.addFeatures)for(const a of t.addFeatures)o.push(this._serializeFeature(a));if(t.deleteFeatures)for(const a of t.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[e]!=null&&n.push(a.attributes[e]);if(t.updateFeatures)for(const a of t.updateFeatures)u.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:o,updates:u,deletes:n}).then(({extent:a,timeExtent:p,featureEditResults:l})=>(this.sourceJSON.extent=a,p&&(this.sourceJSON.timeInfo.timeExtent=[p.start,p.end]),this._createEditsResult(l)))}_createEditsResult(t){return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new f("geojson-layer-source:edit-failure",e.description,{code:e.code}):null}}_serializeFeature(t){const{attributes:e}=t,o=this._geometryForSerialization(t);return o?{geometry:o.toJSON(),attributes:e}:{attributes:e}}_geometryForSerialization(t){const{geometry:e}=t;return R(e)?null:e.type==="mesh"||e.type==="extent"?C.fromExtent(e.extent):e}async _startWorker(t){this._connection=await Q("GeoJSONSourceWorker",{strategy:G("feature-layers-workers")?"dedicated":"local",signal:t});const{fields:e,spatialReference:o,hasZ:n,geometryType:u,objectIdField:a,url:p,timeInfo:l,customParameters:S}=this.layer,_=this.layer.originOf("spatialReference")==="defaults",w={url:p,customParameters:S,fields:e&&e.map(c=>c.toJSON()),geometryType:I.toJSON(u),hasZ:n,objectIdField:a,timeInfo:l?l.toJSON():null,spatialReference:_?null:o&&o.toJSON()},m=await this._connection.invoke("load",w,{signal:t});for(const c of m.warnings)v.warn(c.message,{layer:this.layer,warning:c});m.featureErrors.length&&v.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=Z(this.sourceJSON.hasZ,!0)}};r([i()],d.prototype,"capabilities",void 0),r([i()],d.prototype,"type",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"sourceJSON",void 0),d=r([b(E)],d);const ft=dt();let s=class extends ot(A(U(W(V(at(nt(st(B(it(P(T))))))))))){constructor(t){super(t),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=F.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var t;(t=this.source)==null||t.destroy()}load(t){const e=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},t).catch(k).then(()=>this.source.load(t)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),mt(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(e),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?y(this.url):null}set renderer(t){g(t,this.fieldsIndex),this._set("renderer",t)}set url(t){if(!t)return void this._set("url",t);const e=y(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async applyEdits(t,e){const o=await $(()=>import("./editingSupport-5076f2ca.js"),["assets/editingSupport-5076f2ca.js","assets/Graphic-f0e54e86.js","assets/cast-fcb46737.js","assets/typedArrayUtil-4d7bb04c.js","assets/string-a318751c.js","assets/Error-ec6249b9.js","assets/ArrayPool-a8ee9378.js","assets/nextTick-3ee5a785.js","assets/promiseUtils-1e54421e.js","assets/geometry-b7901087.js","assets/Extent-da876e26.js","assets/Ellipsoid-89682c5e.js","assets/Polyline-ff2d7c6b.js","assets/typeUtils-35750739.js","assets/jsonMap-7b8332c9.js","assets/PopupTemplate-40f3c9aa.js","assets/Clonable-545593ce.js","assets/Collection-910b6f71.js","assets/Evented-a45c8b0f.js","assets/SimpleObservable-23231131.js","assets/fieldUtils-7f54c4b1.js","assets/preload-helper-3bce6601.js","assets/arcadeOnDemand-281a01eb.js","assets/enumeration-3a03bd31.js","assets/number-27cf8195.js","assets/locale-30120714.js","assets/Identifiable-bfe1ff30.js","assets/symbols-f8232671.js","assets/CIMSymbol-539bd447.js","assets/Symbol-f93ed9fd.js","assets/Color-fb64d77d.js","assets/colorUtils-639f4d25.js","assets/mathUtils-b4bb77e2.js","assets/vec3-e93e648f.js","assets/vec3f64-2f9cef06.js","assets/common-c186b691.js","assets/vec4-790471c0.js","assets/screenUtils-410d12c0.js","assets/opacityUtils-1f7f5126.js","assets/symbolLayerUtils3D-76acc268.js","assets/aaBoundingBox-657a9b82.js","assets/aaBoundingRect-193543b5.js","assets/request-6fc81c4c.js","assets/persistableUrlUtils-5f719c3b.js","assets/Symbol3DAnchorPosition2D-5726d999.js","assets/collectionUtils-803d9ba8.js","assets/Portal-2bb189b3.js","assets/Loadable-268c900a.js","assets/Promise-376ab9f6.js","assets/PortalGroup-8e41557a.js","assets/PortalUser-659cc1d2.js","assets/jsonUtils-229211af.js","assets/uuid-73213768.js","assets/normalizeUtils-27e29a72.js","assets/EditBusLayer-e750b15b.js"]);await this.load();const n=await o.applyEdits(this,this.source,t,e);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(t,e){return super.on(t,e)}createPopupTemplate(t){return yt(this,t)}createQuery(){const t=new h,e=this.get("capabilities.data");t.returnGeometry=!0,e&&e.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:o,timeExtent:n}=this;return t.timeExtent=o!=null&&n!=null?n.offset(-o.value,o.unit):n||null,t}getFieldDomain(t,e){let o,n=!1;const u=e&&e.feature,a=u&&u.attributes,p=this.typeIdField&&a&&a[this.typeIdField];return p!=null&&this.types&&(n=this.types.some(l=>l.id==p&&(o=l.domains&&l.domains[t],o&&o.type==="inherited"&&(o=this._getLayerDomain(t)),!0))),n||o||(o=this._getLayerDomain(t)),o}getField(t){return this.fieldsIndex.get(t)}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(h.from(t)||this.createQuery(),e)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(h.from(t)||this.createQuery(),e))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(h.from(t)||this.createQuery(),e))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(h.from(t)||this.createQuery(),e))}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return O(e)&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_getLayerDomain(t){if(!this.fields)return null;let e=null;return this.fields.some(o=>(o.name===t&&(e=o.domain),!!e)),e}};r([i({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",null),r([i({type:String})],s.prototype,"copyright",void 0),r([i({readOnly:!0})],s.prototype,"createQueryVersion",null),r([i({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),r([i({type:String})],s.prototype,"displayField",void 0),r([i({type:Boolean})],s.prototype,"editingEnabled",void 0),r([i(M)],s.prototype,"elevationInfo",void 0),r([i({type:[ut],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),r([i(ft.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([i({type:x,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],s.prototype,"geometryType",void 0),r([i({type:Boolean})],s.prototype,"hasZ",void 0),r([i(H)],s.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),r([i(K)],s.prototype,"labelsVisible",void 0),r([i({type:[ht],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ct},write:!0}})],s.prototype,"labelingInfo",void 0),r([i(X)],s.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],s.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],s.prototype,"objectIdField",void 0),r([i(Y)],s.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],s.prototype,"operationalLayerType",void 0),r([i({readOnly:!0})],s.prototype,"parsedUrl",null),r([i(tt)],s.prototype,"popupEnabled",void 0),r([i({type:j,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),r([i({types:J,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:N}}}})],s.prototype,"renderer",null),r([i(et)],s.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],s.prototype,"source",void 0),r([i({type:F})],s.prototype,"spatialReference",void 0),r([i({type:[pt]})],s.prototype,"templates",void 0),r([i()],s.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),r([i({type:String,readOnly:!0})],s.prototype,"typeIdField",void 0),r([i({type:[lt]})],s.prototype,"types",void 0),r([i(rt)],s.prototype,"url",null),s=r([b("esri.layers.GeoJSONLayer")],s);const gr=s;export{gr as default};
