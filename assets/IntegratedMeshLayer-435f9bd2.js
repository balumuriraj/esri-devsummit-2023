import{oH as S,aF as w,e9 as _,aa as T,fH as m,ac as i,ad as s,af as f,py as O,pz as $,pA as L,tl as x,pB as I,tp as A,a0 as M,bt as N,aU as b,ea as U,cw as j,r as D,v as J,W as d,cK as K,ts as V,eR as P}from"./index-51930907.js";import{g as E}from"./persistable-257e439a.js";import{E as R,L as h}from"./SceneService-35dbb7ec.js";import{s as z,l as F,u as H,m as B}from"./I3SLayerDefinitions-7f8195dd.js";import{f as y}from"./SceneModification-0d6f6e31.js";import"./I3SIndexInfo-bd5d64a7.js";import"./saveUtils-3cf1f639.js";import"./resourceUtils-04f3e5fb.js";var a;let n=a=class extends S(w.ofType(y)){constructor(e){super(e),this.url=null}clone(){return new a({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(o=>o.toJSON(e)).filter(o=>!!o.geometry)}static fromJSON(e,o){const r=new a;for(const p of e)r.add(y.fromJSON(p,o));return r}static async fromUrl(e,o,r){const p={url:_(e),origin:"service"},v=await T(e,{responseType:"json",signal:m(r,"signal")}),g=o.toJSON(),l=[];for(const c of v.data)l.push(y.fromJSON({...c,geometry:{...c.geometry,spatialReference:g}},p));return new a({url:e,items:l})}};i([s({type:String})],n.prototype,"url",void 0),n=a=i([f("esri.layers.support.SceneModifications")],n);const u=n;let t=class extends R(O($(L(x(I(A(P))))))){constructor(...e){super(...e),this._handles=new M,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(N(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,b))}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}readModifications(e,o,r){this._modificationsSource={url:U(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const o=m(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){j(r)}if(await this._fetchService(o),D(this._modificationsSource)){const r=await u.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",r,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,o)}beforeSave(){if(!J(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,o){return this._debouncedSaveOperations(h.SAVE_AS,{...o,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(h.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};i([s({type:String,readOnly:!0})],t.prototype,"geometryType",void 0),i([s({type:["show","hide"]})],t.prototype,"listMode",void 0),i([s({type:["IntegratedMeshLayer"]})],t.prototype,"operationalLayerType",void 0),i([s({json:{read:!1},readOnly:!0})],t.prototype,"type",void 0),i([s({type:z,readOnly:!0})],t.prototype,"nodePages",void 0),i([s({type:[F],readOnly:!0})],t.prototype,"materialDefinitions",void 0),i([s({type:[H],readOnly:!0})],t.prototype,"textureSetDefinitions",void 0),i([s({type:[B],readOnly:!0})],t.prototype,"geometryDefinitions",void 0),i([s({readOnly:!0})],t.prototype,"serviceUpdateTimeStamp",void 0),i([s({type:u}),E({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],t.prototype,"modifications",void 0),i([K(["web-scene","portal-item"],"modifications")],t.prototype,"readModifications",null),i([s(V)],t.prototype,"elevationInfo",void 0),i([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),t=i([f("esri.layers.IntegratedMeshLayer")],t);const Z=t;export{Z as default};
