import{ip as E,iq as R,gY as D,e as i,y as n,lB as W,fL as q,a as C,is as j,ji as P,mm as K,oL as U,km as M,mn as Q,ir as X,m4 as Y,fU as V,G as w,j as L,g0 as Z,ax as J,cB as _,R as m,cF as x,ic as v,eE as G,ek as B,a7 as F,c1 as ee,$ as g,a1 as te,g5 as re,da as ie,dX as oe,gT as ae,gH as ne,bP as le,kk as se,gR as I,ar as b,as as ye,w as pe}from"./calcite-8912bd40.js";import{n as ue}from"./objectIdUtils-789e911a.js";import"./index-00759e4a.js";let c=class extends E(R(j)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new D,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};i([n({type:W})],c.prototype,"elevationInfo",void 0),i([n(q(D,"graphics"))],c.prototype,"graphics",void 0),i([n({type:["show","hide"]})],c.prototype,"listMode",void 0),i([n()],c.prototype,"screenSizePerspectiveEnabled",void 0),i([n({readOnly:!0})],c.prototype,"type",void 0),i([n({constructOnly:!0})],c.prototype,"internal",void 0),c=i([C("esri.layers.GraphicsLayer")],c);const de=c;function O(e){return e.featureCollectionType==="markup"||e.layers.some(t=>t.layerDefinition.visibilityField!=null||!k(t))}function k({layerDefinition:e,featureSet:t}){const r=e.geometryType??t.geometryType;return T.find(o=>{var a,s,y;return r===o.geometryTypeJSON&&((y=(s=(a=e.drawingInfo)==null?void 0:a.renderer)==null?void 0:s.symbol)==null?void 0:y.type)===o.identifyingSymbol.type})}function A(){return new pe({xmin:-180,ymin:-90,xmax:180,ymax:90})}const $=new P({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ce=new P({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let u=class extends de{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get fullExtent(){var r;const e=(r=this.layer)==null?void 0:r.spatialReference,t=this.fullBounds;return e?g(t)?v(A(),e).geometry:F(t,e):null}get fullBounds(){var r;const e=(r=this.layer)==null?void 0:r.spatialReference;if(!e)return null;const t=_();return this.graphics.forEach(o=>{const a=m(o.geometry)?v(o.geometry,e).geometry:null;m(a)&&x(t,a.type==="point"?a:a.extent,t)}),G(t,B)?null:t}get sublayers(){return this.graphics}};i([n({readOnly:!0})],u.prototype,"fullExtent",null),i([n({readOnly:!0})],u.prototype,"fullBounds",null),i([n({readOnly:!0})],u.prototype,"sublayers",null),i([n()],u.prototype,"layer",void 0),i([n()],u.prototype,"layerId",void 0),i([n({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=i([C("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const T=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new K().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new U().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new M().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new M().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new Q().toJSON()}];let l=class extends E(R(X(Y(V(j))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=w.WGS84,this.sublayers=new L(T.map(t=>new u({id:t.id,layerId:t.layerId,title:t.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!O(t)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(e,t,r){if(!O(t))return null;const o=t.layers.map(a=>{const s=new Z;return s.read(a,r),s});return new L({items:o})}readLegacyfeatureCollectionJSON(e,t){return O(t)?J(t.featureCollection):null}get fullExtent(){var r;const e=this.spatialReference,t=_();return m(this.sublayers)?this.sublayers.forEach(({fullBounds:o})=>m(o)?x(t,o,t):t,t):(r=this.featureCollectionJSON)!=null&&r.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const a=v(o.layerDefinition.extent,e).geometry;m(a)&&x(t,a,t)}),G(t,B)?v(A(),e).geometry:F(t,e)}readMinScale(e,t){for(const r of t.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?w.fromJSON(t.layers[0].layerDefinition.spatialReference):w.WGS84}readSublayers(e,t,r){if(O(t))return null;const o=[];let a=t.layers.reduce((s,y)=>Math.max(s,y.layerDefinition.id??-1),-1)+1;for(const s of t.layers){const{layerDefinition:y,featureSet:p}=s,d=y.id??a++,f=k(s);if(m(f)){const h=new u({id:f.id,title:y.name,layerId:d,layer:this,graphics:p.features.map(({geometry:S,symbol:N,attributes:z,popupInfo:H})=>ee.fromJSON({attributes:z,geometry:S,symbol:N,popupTemplate:H}))});o.push(h)}}return new L(o)}writeSublayers(e,t,r,o){var f;const{minScale:a,maxScale:s}=this;if(g(e))return;const y=e.some(h=>h.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&((f=o==null?void 0:o.messages)==null?void 0:f.push(new te("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let d=this.spatialReference.toJSON();e:for(const h of e)for(const S of h.graphics)if(m(S.geometry)){d=S.geometry.spatialReference.toJSON();break e}for(const h of T){const S=e.find(N=>h.id===N.id);this._writeMapNoteSublayer(p,S,h,a,s,d,o)}re("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=J(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(g(this.sublayers))return;let e=null;const t=[];for(const o of this.sublayers)for(const a of o.graphics)if(m(a.geometry)){const s=a.geometry;e?ie(s.spatialReference,e)||(oe(s.spatialReference,e)||ae()||await ne(),a.geometry=le(s,e)):e=s.spatialReference,t.push(a)}const r=await se(t.map(o=>o.geometry));t.forEach((o,a)=>o.geometry=r[a])}_findSublayer(e){var t;return g(this.sublayers)?null:((t=this.sublayers)==null?void 0:t.find(r=>r.id===e))??null}_writeMapNoteSublayer(e,t,r,o,a,s,y){const p=[];if(!g(t)){for(const d of t.graphics)this._writeMapNote(p,d,r.geometryType,y);this._normalizeObjectIds(p,$),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:J(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:a,objectIdField:"OBJECTID",fields:[$.toJSON(),ce.toJSON()],spatialReference:s},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){var d,f;if(g(t))return;const{geometry:a,symbol:s,popupTemplate:y}=t;if(g(a))return;if(a.type!==r)return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new I("map-notes-layer:invalid-geometry-type",`Geometry "${a.type}" cannot be saved in "${r}" layer`,{graphic:t})));if(g(s))return void((f=o==null?void 0:o.messages)==null?void 0:f.push(new I("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const p={attributes:{...t.attributes},geometry:a.toJSON(),symbol:s.toJSON()};m(y)&&(p.popupInfo=y.toJSON()),e.push(p)}_normalizeObjectIds(e,t){const r=t.name;let o=ue(r,e)+1;const a=new Set;for(const s of e){s.attributes||(s.attributes={});const{attributes:y}=s;(y[r]==null||a.has(y[r]))&&(y[r]=o++),a.add(y[r])}}};i([n({readOnly:!0})],l.prototype,"capabilities",void 0),i([b(["portal-item","web-map"],"capabilities",["layers"])],l.prototype,"readCapabilities",null),i([n({readOnly:!0})],l.prototype,"featureCollections",void 0),i([b(["web-map","portal-item"],"featureCollections",["layers"])],l.prototype,"readFeatureCollections",null),i([n({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],l.prototype,"featureCollectionJSON",void 0),i([b(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],l.prototype,"readLegacyfeatureCollectionJSON",null),i([n({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],l.prototype,"featureCollectionType",void 0),i([n({readOnly:!0})],l.prototype,"fullExtent",null),i([n({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],l.prototype,"legendEnabled",void 0),i([n({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),i([n({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"minScale",void 0),i([b(["web-map","portal-item"],"minScale",["layers"])],l.prototype,"readMinScale",null),i([n({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"maxScale",void 0),i([b(["web-map","portal-item"],"maxScale",["layers"])],l.prototype,"readMaxScale",null),i([n({readOnly:!0})],l.prototype,"multipointLayer",null),i([n({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],l.prototype,"operationalLayerType",void 0),i([n({readOnly:!0})],l.prototype,"pointLayer",null),i([n({readOnly:!0})],l.prototype,"polygonLayer",null),i([n({readOnly:!0})],l.prototype,"polylineLayer",null),i([n({type:w})],l.prototype,"spatialReference",void 0),i([b(["web-map","portal-item"],"spatialReference",["layers"])],l.prototype,"readSpatialReference",null),i([n({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],l.prototype,"sublayers",void 0),i([b("web-map","sublayers",["layers"])],l.prototype,"readSublayers",null),i([ye("web-map","sublayers")],l.prototype,"writeSublayers",null),i([n({readOnly:!0})],l.prototype,"textLayer",null),i([n()],l.prototype,"title",void 0),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),l=i([C("esri.layers.MapNotesLayer")],l);const ge=l;export{ge as default};