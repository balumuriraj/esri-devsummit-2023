import{l4 as g,ka as q,a1 as _,g7 as O,l2 as D,af as Q,bd as v,p as G,da as M,R as E,dd as P,k1 as Z,ep as A,ht as S,k2 as N,k4 as z,lC as B}from"./calcite-8912bd40.js";import{g as L}from"./FeatureStore-b2e1c75d.js";import{f as F,g as b}from"./projectionSupport-d23d7a2d.js";import{e as U}from"./QueryEngine-dd47d379.js";import{L as J,I as V,T as W}from"./geojson-3db68a0d.js";import{o as H,a as Y,i as K}from"./clientSideDefaults-bdf4d568.js";import{w as X,m as w,f as T,a as I,g as R}from"./sourceUtils-1e8bd01e.js";import"./index-00759e4a.js";import"./BoundsStore-00da37da.js";import"./PooledRBush-5a11bc7e.js";import"./optimizedFeatureQueryEngineAdapter-b6d8def7.js";import"./centroid-bf48eee6.js";import"./utils-046b23b4.js";import"./json-48e3ea08.js";import"./QueryEngineResult-dfcfeac3.js";import"./quantizationUtils-b3b2ae2a.js";import"./WhereClause-8339ee75.js";import"./executionError-fb3f283a.js";import"./utils-e5a50699.js";import"./generateRendererUtils-5b0c1ef7.js";import"./SnappingCandidate-970faec6.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-a3b9e468.js";const ee={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class je{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[];await this._checkProjection(e.spatialReference);let i=null;e.url&&(i=await this._fetch(t==null?void 0:t.signal));const r=J(i,{geometryType:e.geometryType}),a=e.fields||r.fields||[],u=e.hasZ!=null?e.hasZ:r.hasZ,d=r.geometryType;let c=e.objectIdField||r.objectIdFieldName||"__OBJECTID";const y=e.spatialReference||g;let s=e.timeInfo;a===r.fields&&r.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}});let l=new q(a).get(c);l?(l.type!=="esriFieldTypeString"&&(l.type="esriFieldTypeOID"),l.editable=!1,l.nullable=!1,c=l.name):(l={alias:c,name:c,type:r.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},a.unshift(l));const h={};for(const o of a){if(o.name==null&&(o.name=o.alias),o.alias==null&&(o.alias=o.name),!o.name)throw new _("geojson-layer:invalid-field-name","field name is missing",{field:o});if(!O.jsonValues.includes(o.type))throw new _("geojson-layer:invalid-field-type",`invalid type for field "${o.name}"`,{field:o});if(o.name!==l.name){const f=D(o);f!==void 0&&(h[o.name]=f)}}this._fieldsIndex=new q(a);const p=this._fieldsIndex.requiredFields.indexOf(l);if(p>-1&&this._fieldsIndex.requiredFields.splice(p,1),s){if(s.startTimeField){const o=this._fieldsIndex.get(s.startTimeField);o?(s.startTimeField=o.name,o.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const o=this._fieldsIndex.get(s.endTimeField);o?(s.endTimeField=o.name,o.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const o=this._fieldsIndex.get(s.trackIdField);o?s.trackIdField=o.name:(s.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.startTimeField||s.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=null)}const k=d?H(d):void 0,m={warnings:n,featureErrors:[],layerDefinition:{...ee,drawingInfo:k??void 0,templates:Y(h),extent:void 0,geometryType:d,objectIdField:c,fields:a,hasZ:!!u,timeInfo:s}};this._queryEngine=new U({fields:a,geometryType:d,hasM:!1,hasZ:u,objectIdField:c,spatialReference:y,timeInfo:s,featureStore:new L({geometryType:d,hasM:!1,hasZ:u}),cacheSpatialQueries:!0}),this._createDefaultAttributes=K(h,c);const j=await this._createFeatures(i);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const $=this._normalizeFeatures(j,m.warnings,m.featureErrors);this._queryEngine.featureStore.addMany($);const{fullExtent:C,timeExtent:x}=await this._queryEngine.fetchRecomputedExtents();if(m.layerDefinition.extent=C,x){const{start:o,end:f}=x;m.layerDefinition.timeInfo.timeExtent=[o,f]}return m}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([X(t,n),F(e.adds,t),F(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var i;this._loadOptions.customParameters=e,(i=this._snapshotTask)==null||i.abort(),this._snapshotTask=Q(this._snapshotFeatures),this._snapshotTask.promise.then(r=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,r);const a=this._normalizeFeatures(r);a&&this._queryEngine.featureStore.addMany(a)},r=>{this._queryEngine.featureStore.clear(),v(r)||G.getLogger("esri.layers.GeoJSONLayer").error(new _("geojson-layer:refresh","An error occurred during refresh",{error:r}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:n,objectIdField:i}=this._queryEngine,r=V(e,{geometryType:t,hasZ:n,objectIdField:i});if(!M(this._queryEngine.spatialReference,g))for(const a of r)E(a.geometry)&&(a.geometry=P(b(Z(a.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),g,this._queryEngine.spatialReference)));return r}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,i=(await A(t,{responseType:"json",query:{...n},signal:e})).data;return await W(i),i}_normalizeFeatures(e,t,n){const{objectIdField:i}=this._queryEngine,r=[];for(const a of e){const u=this._createDefaultAttributes(),d=w(this._fieldsIndex,u,a.attributes,!0,t);d?n==null||n.push(d):(this._assignObjectId(u,a.attributes,!0),a.attributes=u,a.objectId=u[i],r.push(a))}return r}async _applyEdits(e){const{adds:t,updates:n,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),n&&n.length&&this._applyUpdateEdits(r,n),i&&i.length){for(const d of i)r.deleteResults.push(T(d));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:a,timeExtent:u}=await this._queryEngine.fetchRecomputedExtents();return{extent:a,timeExtent:u,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:r,hasZ:a,objectIdField:u,spatialReference:d,featureStore:c}=this._queryEngine,y=[];for(const s of t){if(s.geometry&&i!==S(s.geometry)){n.push(I("Incorrect geometry type."));continue}const l=this._createDefaultAttributes(),h=w(this._fieldsIndex,l,s.attributes);if(h)n.push(h);else{if(this._assignObjectId(l,s.attributes),s.attributes=l,s.uid!=null){const p=s.attributes[u];e.uidToObjectId[s.uid]=p}if(E(s.geometry)){const p=s.geometry.spatialReference??d;s.geometry=b(R(s.geometry,p),p,d)}y.push(s),n.push(T(s.attributes[u]))}}c.addMany(N([],y,i,a,r,u))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:i,hasZ:r,objectIdField:a,spatialReference:u,featureStore:d}=this._queryEngine;for(const c of t){const{attributes:y,geometry:s}=c,l=y&&y[a];if(l==null){e.push(I(`Identifier field ${a} missing`));continue}if(!d.has(l)){e.push(I(`Feature with object id ${l} missing`));continue}const h=z(d.getFeature(l),n,r,i);if(E(s)){if(n!==S(s)){e.push(I("Incorrect geometry type."));continue}const p=s.spatialReference??u;h.geometry=b(R(s,p),p,u)}if(y){const p=w(this._fieldsIndex,h.attributes,y);if(p){e.push(p);continue}}d.add(B(h,n,r,i,a)),e.push(T(l))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if(n.type==="esriFieldTypeString")return()=>n.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const r of t)r.objectId&&(i=Math.max(i,r.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t,n=!1){const i=this._queryEngine.objectIdField;e[i]=n&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await F(g,e)}catch{throw new _("geojson-layer","Projection not supported")}}}export{je as default};