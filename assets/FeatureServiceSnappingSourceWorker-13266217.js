import{ac as o,ad as l,af as b,ah as B,bb as k,a6 as w,k6 as R,v as g,dq as A,cr as x,aS as Q,r as h,nl as Z,aU as J,km as W,qj as X,cS as T,aR as Y,cw as K,ak as ee,eU as te,N as se,qk as ie,ql as re,qm as ne,lp as ae,ek as oe,db as le,j6 as ue,lw as he,lx as ce,qn as de,bf as S,kG as pe,kH as H,g4 as L,dt as fe,bS as _e,fG as P,a0 as ge,ab as D,e as y,bl as N,iS as ye,a3 as $,cY as me}from"./index-b4cf3b73.js";import{g as Ee}from"./FeatureStore-eeff7998.js";import{e as Fe}from"./QueryEngine-855ad4b6.js";import{r as U,a as M,n as j}from"./symbologySnappingCandidates-7504a7b6.js";import"./optimizedFeatureQueryEngineAdapter-9feeb8c0.js";import"./centroid-86b8ef29.js";import"./utils-a40a33db.js";import"./projectionSupport-62879cb5.js";import"./json-48e3ea08.js";import"./QueryEngineResult-0ed25b0c.js";import"./WhereClause-c3db6fed.js";import"./executionError-fb3f283a.js";import"./utils-712dddbb.js";import"./generateRendererUtils-418ba299.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-c22bea60.js";let v=class extends B{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(t,e){this._pending.push({promise:t,callback:e}),this._pending.length===1&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const t=this._pending[0];t.promise.then(e=>t.callback(e)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};o([l()],v.prototype,"updating",void 0),v=o([b("esri.core.AsyncSequence")],v);class Ce{constructor(e,s){this.data=e,this.resolution=s,this.state={type:a.CREATED},this.alive=!0}process(e){switch(this.state.type){case a.CREATED:return this.state=this._gotoFetchCount(this.state,e),this.state.task.promise.then(e.resume,e.resume);case a.FETCH_COUNT:break;case a.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,e),this.state.task.promise.then(e.resume,e.resume);case a.FETCH_FEATURES:break;case a.FETCHED_FEATURES:this.state=this._goToDone(this.state,e);case a.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case a.CREATED:case a.FETCH_COUNT:return 0;case a.FETCHED_COUNT:return this.state.featureCount;case a.FETCH_FEATURES:return this.state.previous.featureCount;case a.FETCHED_FEATURES:return this.state.features.length;case a.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case a.CREATED:return"created";case a.FETCH_COUNT:return"fetch-count";case a.FETCHED_COUNT:return"fetched-count";case a.FETCH_FEATURES:return"fetch-features";case a.FETCHED_FEATURES:return"fetched-features";case a.DONE:return"done"}}_gotoFetchCount(e,s){return{type:a.FETCH_COUNT,previous:e,task:w(async i=>{const r=await R(s.fetchCount(this,i));this.state.type===a.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,r.ok?r.value:1/0))})}}_gotoFetchedCount(e,s){return{type:a.FETCHED_COUNT,featureCount:s,previous:e}}_gotoFetchFeatures(e,s){return{type:a.FETCH_FEATURES,previous:e,task:w(async i=>{const r=await R(s.fetchFeatures(this,e.featureCount,i));this.state.type===a.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,r.ok?r.value:[]))})}}_gotoFetchedFeatures(e,s){return{type:a.FETCHED_FEATURES,previous:e,features:s}}_goToDone(e,s){return s.finish(this,e.features),{type:a.DONE,previous:e}}reset(){const e=this.state;switch(this.state={type:a.CREATED},e.type){case a.CREATED:case a.FETCHED_COUNT:case a.FETCHED_FEATURES:case a.DONE:break;case a.FETCH_COUNT:case a.FETCH_FEATURES:e.task.abort()}}intersects(e){return!(!g(e)&&this.data.extent)||(A(e,z),x(this.data.extent,z))}}var a;(function(t){t[t.CREATED=0]="CREATED",t[t.FETCH_COUNT=1]="FETCH_COUNT",t[t.FETCHED_COUNT=2]="FETCHED_COUNT",t[t.FETCH_FEATURES=3]="FETCH_FEATURES",t[t.FETCHED_FEATURES=4]="FETCHED_FEATURES",t[t.DONE=5]="DONE"})(a||(a={}));const z=k();let c=class extends Q{get _minimumVerticesPerFeature(){var e;switch((e=this.store)==null?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const s=this._get("filter"),i=this._filterProperties(e);JSON.stringify(s)!==JSON.stringify(i)&&this._set("filter",i)}set customParameters(e){const s=this._get("customParameters");JSON.stringify(s)!==JSON.stringify(e)&&this._set("customParameters",e)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const s=this._get("tileInfo");s!==e&&(h(e)&&h(s)&&JSON.stringify(e)===JSON.stringify(s)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this.updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._pendingEdits=new v,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this.updatingHandles.add(()=>this._configuration,()=>this.refresh()),this.updatingHandles.add(()=>this.tilesOfInterest,(e,s)=>{Z(e,s,({id:i},{id:r})=>i===r)||this._process()},J)}destroy(){this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null}refresh(){this.store.refresh(),this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}applyEdits(e){this._pendingEdits.push(e,async s=>{if(s.addedFeatures.length===0&&s.updatedFeatures.length===0&&s.deletedFeatures.length===0)return;for(const[,r]of this._pendingTiles)r.reset();const i={...s,deletedFeatures:s.deletedFeatures.map(({objectId:r,globalId:n})=>r&&r!==-1?r:this._lookupObjectIdByGlobalId(n))};await this.updatingHandles.addPromise(this.store.processEdits(i,(r,n)=>this._queryFeaturesById(r,n),this._pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!W(this.url))return;const e=w(async s=>{var i;try{const r=await X(this.url,new T({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this._configuration.customParameters,signal:s});this.store.extent=Y.fromJSON((i=r.data)==null?void 0:i.extent)}catch(r){K(r),ee.getLogger(this.declaredClass).warn("Failed to fetch data extent",r)}});this.updatingHandles.addPromise(e.promise.then(()=>this._process())),this.handles.add(te(()=>e.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,e]of this._pendingTiles)e.alive=!1}_createPendingTiles(){const e=this._collectMissingTilesInfo();if(this._setAvailability(g(e)?1:e.coveredArea/e.fullArea),!g(e))for(const{data:s,resolution:i}of e.missingTiles){const r=this._pendingTiles.get(s.id);r?(r.resolution=i,r.alive=!0):this._createPendingTile(s,i)}}_collectMissingTilesInfo(){let e=null;for(let s=this.tilesOfInterest.length-1;s>=0;s--){const i=this.tilesOfInterest[s],r=this.store.process(i,(n,u)=>this._verifyTileComplexity(n,u));g(e)?e=r:e.prepend(r)}return e}_deletePendingTiles(){for(const[,e]of this._pendingTiles)e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(s,i)=>this._fetchCount(s,i),fetchFeatures:(s,i,r)=>this._fetchFeatures(s,i,r),finish:(s,i)=>this._finishPendingTile(s,i),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,s]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(s.data),s.resolution)&&this.updatingHandles.addPromise(s.process(e))}_verifyTileComplexity(e,s){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,s)}_verifyVertexComplexity(e){return e*this._minimumVerticesPerFeature<ve}_verifyFeatureDensity(e,s){if(g(this.tileInfo))return!1;const i=this.tileSize*s;return e*(Se/(i*i))<be}_ensureFetchAllCounts(e){let s=!0;for(const[,i]of this._pendingTiles)i.state.type<a.FETCHED_COUNT&&this.updatingHandles.addPromise(i.process(e)),i.state.type<=a.FETCH_COUNT&&(s=!1);return s}_finishPendingTile(e,s){this.store.add(e.data,s),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability(g(e)?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,s){const i=new Ce(e,s);return this._pendingTiles.set(e.id,i),i}_deletePendingTile(e){e.reset(),this._pendingTiles.delete(e.data.id)}async _fetchCount(e,s){return this.store.fetchCount(e.data,this.url,this._createCountQuery(e),{query:this.customParameters,timeout:I,signal:s})}async _fetchFeatures(e,s,i){let r=0;const n=[];let u=0,f=s;for(;;){const d=this._createFeaturesQuery(e),p=this._setPagingParameters(d,r,f),{features:_,exceededTransferLimit:G}=await this._queryFeatures(d,i);p&&(r+=se(d.num)),u+=_.length;for(const V of _)n.push(V);if(f=s-u,!p||!G||f<=0)return n}}_filterProperties(e){return g(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const s=this.globalIdField,i=this.objectIdField;if(g(s))throw new Error("Expected globalIdField to be defined");let r=null;if(this.store.featureStore.forEach(n=>{e===n.attributes[s]&&(r=n.objectId??n.attributes[i])}),g(r))throw new Error(`Expected to find a feature with globalId ${e}`);return r}_queryFeaturesById(e,s){const i=this._createFeaturesQuery();return i.objectIds=e,this._queryFeatures(i,s)}_queryFeatures(e,s){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,s):this._queryFeaturesJSON(e,s)}async _queryFeaturesPBF(e,s){const{sourceSpatialReference:i}=this,{data:r}=await ie(this.url,e,new re({sourceSpatialReference:i}),{query:this._configuration.customParameters,timeout:I,signal:s});return ne(r)}async _queryFeaturesJSON(e,s){const{sourceSpatialReference:i}=this,{data:r}=await ae(this.url,e,i,{query:this._configuration.customParameters,timeout:I,signal:s});return oe(r,this.objectIdField)}_createCountQuery(e){const s=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(s.cacheHint=!0),s}_createFeaturesQuery(e=null){const s=this._createBaseQuery(e);return s.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],s.returnGeometry=!0,h(e)&&(this.capabilities.query.supportsResultType?s.resultType="tile":this.capabilities.query.supportsCacheHint&&(s.cacheHint=!0)),s}_createBaseQuery(e){const s=new T({returnZ:this.hasZ,returnM:!1,geometry:h(this.tileInfo)&&h(e)?le(e.data.extent,this.tileInfo.spatialReference):void 0}),i=this._configuration.filter;return h(i)&&(s.where=i.where,s.gdbVersion=i.gdbVersion,s.timeExtent=i.timeExtent),s.outSpatialReference=this.spatialReference,s}_setPagingParameters(e,s,i){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:r,supportsCacheHint:n,tileMaxRecordCount:u,maxRecordCount:f,supportsResultType:d}=this.capabilities.query,p=r?T.MAX_MAX_RECORD_COUNT_FACTOR:1,_=p*((d||n)&&u?u:f||Te);return e.start=s,r?(e.maxRecordCountFactor=Math.min(p,Math.ceil(i/_)),e.num=Math.min(i,e.maxRecordCountFactor*_)):e.num=Math.min(i,_),!0}};o([l({constructOnly:!0})],c.prototype,"url",void 0),o([l({constructOnly:!0})],c.prototype,"objectIdField",void 0),o([l({constructOnly:!0})],c.prototype,"globalIdField",void 0),o([l({constructOnly:!0})],c.prototype,"capabilities",void 0),o([l({constructOnly:!0})],c.prototype,"sourceSpatialReference",void 0),o([l({constructOnly:!0})],c.prototype,"spatialReference",void 0),o([l({constructOnly:!0})],c.prototype,"store",void 0),o([l({readOnly:!0})],c.prototype,"_minimumVerticesPerFeature",null),o([l()],c.prototype,"filter",null),o([l()],c.prototype,"customParameters",null),o([l({readOnly:!0})],c.prototype,"_configuration",null),o([l()],c.prototype,"tileInfo",null),o([l()],c.prototype,"tileSize",null),o([l()],c.prototype,"tilesOfInterest",void 0),o([l({readOnly:!0})],c.prototype,"updating",null),o([l({readOnly:!0})],c.prototype,"updatingExcludingEdits",null),o([l({readOnly:!0})],c.prototype,"availability",void 0),o([l()],c.prototype,"hasZ",null),c=o([b("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],c);const Te=2e3,I=6e5,ve=1e6,Se=25,be=1;class Ie{constructor(){this._store=new Map,this._byteSize=0}set(e,s){this.delete(e),this._store.set(e,s),this._byteSize+=s.byteSize}delete(e){const s=this._store.get(e);return!!this._store.delete(e)&&(s!=null&&(this._byteSize-=s.byteSize),!0)}get(e){return this._used(e),this._store.get(e)}has(e){return this._used(e),this._store.has(e)}clear(){this._store.clear()}applyByteSizeLimit(e,s){for(const[i,r]of this._store){if(this._byteSize<=e)break;this.delete(i),s(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(e){const s=this._store.get(e);s&&(this._store.delete(e),this._store.set(e,s))}}let F=class extends B{constructor(t){super(t),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*ue.MEGABYTES,this._tileBounds=new he,this._tiles=new Ie,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=k()}add(t,e){const s=[];for(const i of e)this._referenceFeature(i.objectId)===E.ADDED&&s.push(i);this._addTileStorage(t,new Set(e.map(i=>i.objectId)),we(e)),this.featureStore.addMany(s),this._tiles.applyByteSizeLimit(this.maximumByteSize,i=>this._removeTileStorage(i))}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(t,e,s){return this._processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)),this._processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures),e,s)}_addTileStorage(t,e,s){const i=t.id;this._tiles.set(i,new xe(t,e,s)),this._tileBounds.set(i,t.extent),this._tileFeatureCounts.set(i,e.size)}_remove({id:t}){const e=this._tiles.get(t);e&&this._removeTileStorage(e)}_removeTileStorage(t){const e=[];for(const i of t.objectIds)this._unreferenceFeature(i)===E.REMOVED&&e.push(i);this.featureStore.removeManyById(e);const s=t.data.id;this._tiles.delete(s),this._tileBounds.delete(s)}_processEditsDelete(t){this.featureStore.removeManyById(t);for(const[,e]of this._tiles){for(const s of t)e.objectIds.delete(s);this._tileFeatureCounts.set(e.data.id,e.objectIds.size)}for(const e of t)this._refCounts.delete(e)}async _processEditsRefetch(t,e,s){const i=(await e(t,s)).features,{hasZ:r,hasM:n}=this.featureStore;for(const u of i){const f=ce(this._tmpBoundingRect,u.geometry,r,n);g(f)||this._tileBounds.forEachInBounds(f,d=>{const p=this._tiles.get(d);this.featureStore.add(u);const _=u.objectId;p.objectIds.has(_)||(p.objectIds.add(_),this._referenceFeature(_),this._tileFeatureCounts.set(p.data.id,p.objectIds.size))})}}process(t,e=()=>!0){if(g(this.tileInfo)||!t.extent||h(this.extent)&&!x(A(this.extent,this._tmpBoundingRect),t.extent))return new O(t);if(this._tiles.has(t.id))return new O(t);const s=this._createTileTree(t,this.tileInfo);return this._simplify(s,e,null,0,1),this._collectMissingTiles(t,s,this.tileInfo)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:t})=>({data:t,featureCount:this._tileFeatureCounts.get(t.id)||0}))}getFeatureCount(t){return this._tileFeatureCounts.get(t.id)??0}async fetchCount(t,e,s,i){const r=this._tileFeatureCounts.get(t.id);if(r!=null)return r;const n=await de(e,s,i);return this._tileFeatureCounts.set(t.id,n.data.count),n.data.count}_createTileTree(t,e){const s=new q(t.level,t.row,t.col);return e.updateTileInfo(s,S.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(t.extent,i=>{var n;const r=(n=this._tiles.get(i))==null?void 0:n.data;r&&this._tilesAreRelated(t,r)&&this._populateChildren(s,r,e,this._tileFeatureCounts.get(r.id)||0)}),s}_tilesAreRelated(t,e){if(!t||!e)return!1;if(t.level===e.level)return t.row===e.row&&t.col===e.col;const s=t.level<e.level,i=s?t:e,r=s?e:t,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}_populateChildren(t,e,s,i){const r=e.level-t.level-1;if(r<0)return void(t.isLeaf=!0);const n=e.row>>r,u=e.col>>r,f=t.row<<1,d=u-(t.col<<1)+(n-f<<1),p=t.children[d];if(h(p))this._populateChildren(p,e,s,i);else{const _=new q(t.level+1,n,u);s.updateTileInfo(_,S.ExtrapolateOptions.POWER_OF_TWO),t.children[d]=_,this._populateChildren(_,e,s,i)}}_simplify(t,e,s,i,r){const n=r*r;if(t.isLeaf)return e(this.getFeatureCount(t),r)?0:(this._remove(t),h(s)&&(s.children[i]=null),n);const u=r/2,f=u*u;let d=0;for(let p=0;p<t.children.length;p++){const _=t.children[p];d+=h(_)?this._simplify(_,e,t,p,u):f}return d===0?this._mergeChildren(t):1-d/n<He&&(this._purge(t),h(s)&&(s.children[i]=null),d=n),d}_mergeChildren(t){const e=new Set;let s=0;this._forEachLeaf(t,i=>{const r=this._tiles.get(i.id);if(r){s+=r.byteSize;for(const n of r.objectIds)e.has(n)||(e.add(n),this._referenceFeature(n));this._remove(i)}}),this._addTileStorage(t,e,s),t.isLeaf=!0,t.children[0]=t.children[1]=t.children[2]=t.children[3]=null,this._tileFeatureCounts.set(t.id,e.size)}_forEachLeaf(t,e){for(const s of t.children)g(s)||(s.isLeaf?e(s):this._forEachLeaf(s,e))}_purge(t){if(!g(t))if(t.isLeaf)this._remove(t);else for(let e=0;e<t.children.length;e++){const s=t.children[e];this._purge(s),t.children[e]=null}}_collectMissingTiles(t,e,s){const i=new Re(s,t,this.extent);return this._collectMissingTilesRecurse(e,i,1),i.info}_collectMissingTilesRecurse(t,e,s){if(t.isLeaf)return;if(!t.hasChildren)return void e.addMissing(t.level,t.row,t.col,s);const i=s/2;for(let r=0;r<t.children.length;r++){const n=t.children[r];g(n)?e.addMissing(t.level+1,(t.row<<1)+((2&r)>>1),(t.col<<1)+(1&r),i):this._collectMissingTilesRecurse(n,e,i)}}_referenceFeature(t){const e=(this._refCounts.get(t)||0)+1;return this._refCounts.set(t,e),e===1?E.ADDED:E.UNCHANGED}_unreferenceFeature(t){const e=(this._refCounts.get(t)||0)-1;return e===0?(this._refCounts.delete(t),E.REMOVED):(e>0&&this._refCounts.set(t,e),E.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map(t=>`${t.data.id}:[${Array.from(t.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(t=>`${t}:${this._refCounts.get(t)}`)}}};function we(t){return t.reduce((e,s)=>e+Oe(s),0)}function Oe(t){return 32+Ae(t.geometry)+pe(t.attributes)}function Ae(t){if(g(t))return 0;const e=H(t.lengths,4);return 32+H(t.coords,8)+e}o([l({constructOnly:!0})],F.prototype,"featureStore",void 0),o([l()],F.prototype,"tileInfo",void 0),o([l()],F.prototype,"extent",void 0),o([l()],F.prototype,"maximumByteSize",void 0),F=o([b("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],F);class xe{constructor(e,s,i){this.data=e,this.objectIds=s,this.byteSize=i}}class q{constructor(e,s,i){this.level=e,this.row=s,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(h(this.children[0])||h(this.children[1])||h(this.children[2])||h(this.children[3]))}}class O{constructor(e,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=L(e.extent),this.coveredArea=this.fullArea}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea}}let Re=class{constructor(e,s,i){this._tileInfo=e,this._extent=null,this.info=new O(s),h(i)&&(this._extent=A(i))}addMissing(e,s,i,r){const n=new fe(null,e,s,i);this._tileInfo.updateTileInfo(n,S.ExtrapolateOptions.POWER_OF_TWO),g(n.extent)||h(this._extent)&&!x(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=L(n.extent))}};const He=.18751;var E;(function(t){t[t.ADDED=0]="ADDED",t[t.REMOVED=1]="REMOVED",t[t.UNCHANGED=2]="UNCHANGED"})(E||(E={}));let C=class extends _e.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=P(),this._elevationAligner=U(),this._elevationFilter=M(),this._symbologyCandidatesFetcher=j(),this._handles=new ge,this._updatingHandles=new D,this._editsUpdatingHandles=new D,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(t,e)=>{const s={points:t},i=await this.remoteClient.invoke("alignElevation",s,{signal:e});return y(e),i},this._getSymbologyCandidates=async(t,e)=>{const s={candidates:t,spatialReference:this._spatialReference.toJSON()},i=await this.remoteClient.invoke("getSymbologyCandidates",s,{signal:e});return y(e),i}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){var t,e,s,i;(t=this._featureFetcher)==null||t.destroy(),(e=this._queryEngine)==null||e.destroy(),(s=this._featureStore)==null||s.clear(),(i=this._handles)==null||i.destroy()}async setup(t){if(this.destroyed)return{result:{}};const{geometryType:e,objectIdField:s,timeInfo:i,fields:r}=t.serviceInfo,{hasZ:n}=t,u=N.fromJSON(t.spatialReference);this._spatialReference=u,this._featureStore=new Ee({...t.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new Fe({spatialReference:t.spatialReference,featureStore:this._featureStore,geometryType:e,fields:r,hasZ:n,hasM:!1,objectIdField:s,timeInfo:i}),this._featureFetcher=new c({store:new F({featureStore:this._featureStore}),url:t.serviceInfo.url,objectIdField:t.serviceInfo.objectIdField,globalIdField:t.serviceInfo.globalIdField,capabilities:t.serviceInfo.capabilities,spatialReference:u,sourceSpatialReference:N.fromJSON(t.serviceInfo.spatialReference)});const f=t.configuration.viewType==="3d";return this._elevationAligner=U(f,{elevationInfo:h(t.elevationInfo)?ye.fromJSON(t.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures,spatialReference:u}),this._elevationFilter=M(f),this._handles.add([$(()=>this._featureFetcher.availability,d=>this.emit("notify-availability",{availability:d}),J),$(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(t.configuration)}async configure(t){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(t),{result:{}}}async fetchCandidates(t,e){await this._whenSetup.promise,y(e);const s=Pe(t),i=h(e)?e.signal:null,r=await this._queryEngine.executeQueryForSnapping(s,i);y(i);const n=await this._elevationAligner.alignCandidates(r.candidates,i);y(i);const u=await this._symbologyCandidatesFetcher.fetch(n,i);y(i);const f=u.length===0?n:n.concat(u);return{result:{candidates:this._elevationFilter.filter(s,f)}}}async updateTiles(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(e),this._featureFetcher.tileSize=t.tileSize,this._featureFetcher.tilesOfInterest=t.tiles,this._featureFetcher.tileInfo=h(t.tileInfo)?S.fromJSON(t.tileInfo):null,m}async refresh(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(e),this._featureFetcher.refresh(),m}async whenNotUpdating(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),y(e),await me(()=>!this.updatingExcludingEdits,e),y(e),m}async getDebugInfo(t,e){return y(e),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(t,e){this._updatingHandles.addPromise(this._whenSetup.promise),y(e);const s=P();return this._pendingApplyEdits.set(t.id,s),this._featureFetcher.applyEdits(s.promise),this._editsUpdatingHandles.addPromise(s.promise),m}async endApplyEdits(t,e){const s=this._pendingApplyEdits.get(t.id);return s&&s.resolve(t.edits),y(e),m}async notifyElevationSourceChange(t,e){return this._elevationAligner.notifyElevationSourceChange(),m}async notifySymbologyChange(t,e){return this._symbologyCandidatesFetcher.notifySymbologyChange(),m}async setSymbologySnappingSupported(t){return this._symbologyCandidatesFetcher=j(t,this._getSymbologyCandidates),m}_updateFeatureFetcherConfiguration(t){this._featureFetcher.filter=h(t.filter)?T.fromJSON(t.filter):null,this._featureFetcher.customParameters=t.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};o([l({readOnly:!0})],C.prototype,"updating",null),o([l({readOnly:!0})],C.prototype,"updatingExcludingEdits",null),o([l()],C.prototype,"_isInitializing",void 0),C=o([b("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],C);const Ye=C;function Pe(t){return{point:t.point,mode:t.mode,distance:t.distance,types:t.types,query:h(t.filter)?t.filter:{where:"1=1"}}}const m={result:{}};export{Ye as default};