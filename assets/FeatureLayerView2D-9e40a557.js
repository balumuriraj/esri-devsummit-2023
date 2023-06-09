import{ac as o,ad as h,af as x,aA as L,ah as Y,Q as S,N as F,cK as Z,aM as Q,bl as ee,r as p,ai as M,bO as te,cL as ie,D as re,cM as w,cN as se,bI as ae,aL as j,cO as ne,aQ as oe,cP as le,a3 as N,aT as ue,W as P,cQ as J,aF as ce,aR as he,a4 as de,a1 as B,ak as I,cR as pe,cS as D,ap as O,cT as ye,cU as ge,X as fe,cV as _e,cW as me,cX as ve,cJ as we,v as Re,bd as be,cY as Se}from"./index-70f3b4f7.js";import{a as G}from"./Container-201dc79a.js";import{S as qe}from"./definitions-3ddd14a8.js";import{f as xe}from"./LayerView2D-11475a48.js";import{I as Ee,h as Ce}from"./schemaUtils-9a1a4186.js";import{e as Ie}from"./util-f29114ae.js";import{A as Oe}from"./FeatureLayerView-a990428c.js";import{u as Te}from"./LayerView-dbe7c0ba.js";import{i as Fe}from"./RefreshableLayerView-2be8182d.js";import"./enums-b1d611e3.js";import"./color-67661bc2.js";import"./enums-4b2a86a0.js";import"./number-b10bd8f5.js";import"./utils-c558dfba.js";import"./MaterialKey-9c9a57fe.js";import"./alignmentUtils-ae955d28.js";import"./visualVariablesUtils-014e4cf2.js";import"./cimAnalyzer-ee052f2c.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./ExpandedCIM-fb542f69.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-ca174fea.js";let $=class extends L{constructor(){super(...arguments),this.isAggregate=!0}getEffectivePopupTemplate(t=!1){if(this.popupTemplate)return this.popupTemplate;const i=this.sourceLayer&&this.sourceLayer.featureReduction;return i&&"popupTemplate"in i&&i.popupEnabled?i.popupTemplate:null}getObjectId(){return this.attributes.aggregateId}};o([h({type:Boolean})],$.prototype,"isAggregate",void 0),$=o([x("esri.AggregateGraphic")],$);const z=$;let m=class extends Y{constructor(e){super(e),this._filter=null,this.duration=S("mapview-transitions-duration"),this._excludedEffectView=new G(e),this._includedEffectView=new G(e)}get excludedEffects(){return this._excludedEffectView.effects}set featureEffect(e){this._get("featureEffect")!==e&&this._transitionTo(e)}get filter(){var e;return this._filter||((e=F(this.featureEffect))==null?void 0:e.filter)||null}get hasEffects(){return this._excludedEffectView.hasEffects||this._includedEffectView.hasEffects}get includedEffects(){return this._includedEffectView.effects}set scale(e){this._set("scale",e),this._excludedEffectView.scale=e,this._includedEffectView.scale=e}get transitioning(){return this._excludedEffectView.transitioning||this._includedEffectView.transitioning}transitionStep(e,t){this._set("scale",t),this.transitioning?(this._includedEffectView.transitionStep(e,t),this._excludedEffectView.transitionStep(e,t),this.transitioning||(this._filter=null)):(this._excludedEffectView.scale=t,this._includedEffectView.scale=t)}endTransitions(){this._includedEffectView.endTransitions(),this._excludedEffectView.endTransitions(),this._filter=null}_transitionTo(e){const t=this._get("featureEffect"),i=F(e),r=F(i==null?void 0:i.includedEffect),s=F(i==null?void 0:i.excludedEffect),n=this._includedEffectView.canTransitionTo(r)&&this._excludedEffectView.canTransitionTo(s);this._includedEffectView.effect=r,this._excludedEffectView.effect=s,this._set("featureEffect",i),this._filter=(i==null?void 0:i.filter)||(t==null?void 0:t.filter)||null,n||this.endTransitions()}};o([h()],m.prototype,"_filter",void 0),o([h()],m.prototype,"_excludedEffectView",void 0),o([h()],m.prototype,"_includedEffectView",void 0),o([h()],m.prototype,"duration",void 0),o([h()],m.prototype,"excludedEffects",null),o([h()],m.prototype,"featureEffect",null),o([h()],m.prototype,"filter",null),o([h()],m.prototype,"hasEffects",null),o([h()],m.prototype,"includedEffects",null),o([h({value:0})],m.prototype,"scale",null),o([h()],m.prototype,"transitioning",null),m=o([x("esri.layers.effects.FeatureEffectView")],m);const Ue=m;let U=class extends Q{constructor(){super(...arguments),this.features=[]}readFeatures(e,t){var s;const i=ee.fromJSON(t.spatialReference),r=[];for(let n=0;n<e.length;n++){const a=e[n],c=z.fromJSON(a),l=a.geometry&&a.geometry.spatialReference;p(c.geometry)&&!l&&(c.geometry.spatialReference=i);const y=a.aggregateGeometries,u=c.aggregateGeometries;if(y&&p(u))for(const g in u){const d=u[g],_=(s=y[g])==null?void 0:s.spatialReference;p(d)&&!_&&(d.spatialReference=i)}r.push(c)}return r}};o([h({type:[z],json:{write:!0}})],U.prototype,"features",void 0),o([Z("features")],U.prototype,"readFeatures",null),U=o([x("esri.rest.support.AggregateFeatureSet")],U);const ke=U;async function Ve(e,t){if(!e)return null;switch(e.type){case"symbol":return new(await M(()=>import("./SymbolTileRenderer-ded3cd68.js"),["assets/SymbolTileRenderer-ded3cd68.js","assets/index-70f3b4f7.js","assets/index-557f70a3.css","assets/CircularArray-55d71a71.js","assets/enums-b1d611e3.js","assets/color-67661bc2.js","assets/enums-4b2a86a0.js","assets/number-b10bd8f5.js","assets/AttributeStoreView-1e548269.js","assets/definitions-3ddd14a8.js","assets/visualVariablesUtils-9bf46d17.js","assets/visualVariablesUtils-014e4cf2.js","assets/BufferPool-f718bacc.js","assets/schemaUtils-9a1a4186.js","assets/utils-c558dfba.js","assets/MaterialKey-9c9a57fe.js","assets/alignmentUtils-ae955d28.js","assets/cimAnalyzer-ee052f2c.js","assets/BidiEngine-836b7ef6.js","assets/GeometryUtils-53652037.js","assets/Rect-ea14f53a.js","assets/ExpandedCIM-fb542f69.js","assets/util-f29114ae.js","assets/BaseTileRenderer-1f55c14e.js","assets/WGLContainer-4968865e.js","assets/WGLBrushVTLSymbol-669de8ac.js","assets/StyleDefinition-7d58136b.js","assets/GeometryUtils-dd03fc25.js","assets/ShaderCompiler-77d0dcb6.js","assets/ProgramTemplate-9e2d966e.js","assets/heatmapTextureUtils-f433008f.js","assets/Container-201dc79a.js","assets/FeatureContainer-e6b4658b.js","assets/TileContainer-b5185df6.js"])).default(t);case"heatmap":return new(await M(()=>import("./HeatmapTileRenderer-77c52e7c.js"),["assets/HeatmapTileRenderer-77c52e7c.js","assets/index-70f3b4f7.js","assets/index-557f70a3.css","assets/BitmapTileContainer-f5574d64.js","assets/Bitmap-234327e1.js","assets/WGLContainer-4968865e.js","assets/definitions-3ddd14a8.js","assets/WGLBrushVTLSymbol-669de8ac.js","assets/enums-b1d611e3.js","assets/number-b10bd8f5.js","assets/StyleDefinition-7d58136b.js","assets/enums-4b2a86a0.js","assets/GeometryUtils-dd03fc25.js","assets/color-67661bc2.js","assets/ShaderCompiler-77d0dcb6.js","assets/ProgramTemplate-9e2d966e.js","assets/MaterialKey-9c9a57fe.js","assets/alignmentUtils-ae955d28.js","assets/utils-c558dfba.js","assets/heatmapTextureUtils-f433008f.js","assets/Container-201dc79a.js","assets/TileContainer-b5185df6.js","assets/BaseTileRenderer-1f55c14e.js"])).default(t)}}function H(e){return e.some(t=>t.globalId)}function T(e){return e.filter(t=>!t.error).map(t=>t.objectId??t.globalId).filter(t=>t!=null)}function K(e,t){const i=new Set(e);for(const r of t.values())i.add(r);return i}function W(e,t){const i=new Set(e);for(const r of t.values())i.delete(r);return i}let k=class extends Y{constructor(t){super(t),this._hasGlobalIds=!1,this._notifyUpdating=()=>{this.notifyChange("updating")}}normalizeCtorArgs(t){return this._queueProcessor=new te({concurrency:1,process:t.process}),{}}destroy(){this.clear()}get updating(){return this._queueProcessor.length>0}clear(){this._queueProcessor.clear()}push(t){const i=this._queueProcessor,r=i.last();switch(t.type){case"update":case"refresh":if((r==null?void 0:r.type)===t.type)return;i.push(t).then(this._notifyUpdating,this._notifyUpdating);break;case"edit":{const s=(r==null?void 0:r.type)==="processed-edit"?r:null;s&&i.popLast();const n=this._mergeEdits(s,t);for(const a of n)a&&i.push(a).then(this._notifyUpdating,this._notifyUpdating);break}}this.notifyChange("updating")}_mergeEdits(t,i){const{addedFeatures:r,deletedFeatures:s,updatedFeatures:n}=i.edits;if(this._hasGlobalIds=this._hasGlobalIds||H(r)||H(n)||H(s),this._hasGlobalIds)return[t,{type:"processed-edit",edits:{addOrModified:[...r,...n],removed:s}}];const a=new Set(T((t==null?void 0:t.edits.addOrModified)??[])),c=new Set(T((t==null?void 0:t.edits.removed)??[])),l=new Set([...T(r),...T(n)]),y=new Set(T(s));return[{type:"processed-edit",edits:{addOrModified:Array.from(K(W(a,y),l)).map(u=>({objectId:u})),removed:Array.from(K(W(c,l),y)).map(u=>({objectId:u}))}}]}};o([h({readOnly:!0})],k.prototype,"updating",null),o([h()],k.prototype,"process",void 0),k=o([x("esri.views.2d.layers.support.FeatureCommandQueue")],k);const Ae=k;function $e(e){return Array.isArray(e)}let q=class extends ie{constructor(e){super(e),this._startupResolver=re(),this.isReady=!1}initialize(){this._controller=new AbortController,this.addResolvingPromise(this._startWorker(this._controller.signal))}destroy(){this._controller.abort(),this._connection&&this._connection.close()}set tileRenderer(e){this.client.tileRenderer=e}get closed(){return this._connection.closed}async startup(e,t,i,r){await this.when();const s=this._controller.signal,n=$e(i.source)?{transferList:i.source,signal:s}:void 0,a={service:i,config:t,tileInfo:e.tileInfo.toJSON(),tiles:r};await this._connection.invoke("startup",a,n),this._startupResolver.resolve(),this._set("isReady",!0)}async updateTiles(e){return await this._startupResolver.promise,w(this._connection.invoke("updateTiles",e))}async update(e){const t={config:e};return await this._startupResolver.promise,this._connection.invoke("update",t)}async applyUpdate(e){return await this._startupResolver.promise,this._connection.invoke("applyUpdate",e)}async setHighlight(e){return await this._startupResolver.promise,w(this._connection.invoke("controller.setHighlight",e))}async stop(){if(await this._startupResolver.promise,!this.closed)return w(this._connection.invoke("stop"))}async refresh(e){return await this._startupResolver.promise,w(this._connection.invoke("controller.refresh",e))}async querySummaryStatistics(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.querySummaryStatistics",{query:e.toJSON(),params:t},i)}async queryAggregateSummaryStatistics(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregateSummaryStatistics",{query:e.toJSON(),params:t},i)}async queryUniqueValues(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryUniqueValues",{query:e.toJSON(),params:t},i)}async queryAggregateUniqueValues(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregateUniqueValues",{query:e.toJSON(),params:t},i)}async queryClassBreaks(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryClassBreaks",{query:e.toJSON(),params:t},i)}async queryAggregateClassBreaks(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregateClassBreaks",{query:e.toJSON(),params:t},i)}async queryHistogram(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryHistogram",{query:e.toJSON(),params:t},i)}async queryAggregateHistogram(e,t,i){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregateHistogram",{query:e.toJSON(),params:t},i)}async queryFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatures",e==null?void 0:e.toJSON(),t)}async queryVisibleFeatures(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryVisibleFeatures",e==null?void 0:e.toJSON(),t)}async queryObjectIds(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryObjectIds",e==null?void 0:e.toJSON(),t)}async queryFeatureCount(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryFeatureCount",e==null?void 0:e.toJSON(),t)}async queryExtent(e,t){return this._connection.invoke("controller.queryExtent",e.toJSON(),t)}async queryLatestObservations(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryLatestObservations",e.toJSON(),t)}async queryStatistics(e){return await this._startupResolver.promise,this._connection.invoke("controller.queryStatistics",e)}async queryAggregates(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregates",e==null?void 0:e.toJSON(),t)}async queryAggregateCount(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregateCount",e==null?void 0:e.toJSON(),t)}async queryAggregateIds(e,t){return await this._startupResolver.promise,this._connection.invoke("controller.queryAggregateIds",e==null?void 0:e.toJSON(),t)}async getObjectId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getObjectId",e)}async getDisplayId(e){return await this._startupResolver.promise,this._connection.invoke("controller.getDisplayId",e)}async getFeatures(e){return await this._startupResolver.promise,this._connection.invoke("controller.getFeatures",e)}async getAggregates(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregates")}async getAggregateValueRanges(){return await this._startupResolver.promise,this._connection.invoke("controller.getAggregateValueRanges")}async mapValidDisplayIds(e){return await this._startupResolver.promise,this._connection.invoke("controller.mapValidDisplayIds",e)}async onEdits(e){return await this._startupResolver.promise,w(this._connection.invoke("controller.onEdits",e))}async enableEvent(e,t){return await this._startupResolver.promise,w(this._connection.invoke("controller.enableEvent",{name:e,value:t}))}async pauseStream(){return await this._startupResolver.promise,w(this._connection.invoke("controller.pauseStream"))}async resumeStream(){return await this._startupResolver.promise,w(this._connection.invoke("controller.resumeStream"))}async sendMessageToSocket(e){return await this._startupResolver.promise,w(this._connection.invoke("controller.sendMessageToSocket",e))}async sendMessageToClient(e){return await this._startupResolver.promise,w(this._connection.invoke("controller.sendMessageToClient",e))}async updateCustomParameters(e){return await this._startupResolver.promise,w(this._connection.invoke("controller.updateCustomParameters",e))}async _startWorker(e){try{this._connection=await se("Pipeline",{client:this.client,strategy:"dedicated",signal:e})}catch(t){ae(t)}}};o([h()],q.prototype,"isReady",void 0),o([h({constructOnly:!0})],q.prototype,"client",void 0),o([h()],q.prototype,"tileRenderer",null),q=o([x("esri.views.2d.layers.support.FeatureLayerProxy")],q);const Ne=q,Pe=1e-6;class Je{constructor(t){this._tiles=new Map,this.buffer=0,this.acquireTile=t.acquireTile,this.releaseTile=t.releaseTile,this.tileInfoView=t.tileInfoView,this.buffer=t.buffer}destroy(){}clear(){this._tiles.forEach(t=>this._releaseTile(t))}tileKeys(){const t=[];return this._tiles.forEach((i,r)=>t.push(r)),t}update(t){const i=this.tileInfoView.getTileCoverage(t.state,this.buffer,"closest"),{spans:r,lodInfo:s}=i,{level:n}=s,a=[],c=[],l=new Set,y=new Set;for(const{row:u,colFrom:g,colTo:d}of r)for(let _=g;_<=d;_++){const R=j.getId(n,u,s.normalizeCol(_),s.getWorldForColumn(_)),v=this._getOrAcquireTile(a,R);l.add(R),v.isReady?v.visible=!0:y.add(v.key)}return y.forEach(u=>this._addPlaceholders(l,u)),this._tiles.forEach(u=>{l.has(u.key.id)||(c.push(u.key.id),this._releaseTile(u))}),ne.pool.release(i),{hasMissingTiles:y.size>0,added:a,removed:c}}_getOrAcquireTile(t,i){if(!this._tiles.has(i)){const r=this.acquireTile(new j(i));t.push(i),this._tiles.set(i,r),r.visible=!1}return this._tiles.get(i)}_getTile(t){return this._tiles.get(t)}_releaseTile(t){this._tiles.delete(t.key.id),this.releaseTile(t)}_addPlaceholders(t,i){const r=this._addPlaceholderChildren(t,i);Math.abs(1-r)<Pe||this._addPlaceholderParent(t,i)||(this._getTile(i.id).visible=!0)}_addPlaceholderChildren(t,i){let r=0;return this._tiles.forEach(s=>{r+=this._addPlaceholderChild(t,s,i)}),r}_addPlaceholderChild(t,i,r){return i.key.level<=r.level||!i.hasData||!r.contains(i.key)?0:(i.visible=!0,t.add(i.key.id),1/(1<<2*(i.key.level-r.level)))}_addPlaceholderParent(t,i){let r=i.getParentKey(),s=0,n=null;for(;p(r);){if(t.has(r.id))return!0;const a=this._getTile(r.id);if(a!=null&&a.isReady){for(const c of t){const l=this._getTile(c);l&&r.contains(l.key)&&(l.visible=!1)}return a.visible=!0,t.add(a.key.id),!0}a!=null&&a.hasData&&a.patchCount>s&&(s=a.patchCount,n=a),r=r.getParentKey()}return!!n&&(n.visible=!0,t.add(n.key.id),!0)}}function X(e){return e&&"openPorts"in e}let f=class extends Oe(Fe(xe(Te))){constructor(){super(...arguments),this._pipelineIsUpdating=!0,this._commandsQueue=new Ae({process:e=>{switch(e.type){case"processed-edit":return this._doEdit(e);case"refresh":return this._doRefresh(e.dataChanged);case"update":return this._doUpdate()}}}),this._visibilityOverrides=new Set,this._highlightIds=new Map,this._updateHighlight=oe(async()=>this._proxy.setHighlight(Array.from(this._highlightIds.keys()))),this._uploadsLocked=!1,this._needsClusterSizeUpdate=!1,this.featureEffectView=new Ue,this._lastDefinitionExpression=null}destroy(){var e;le(this._updateClusterSizeTask,t=>t.remove()),(e=this._proxy)==null||e.destroy(),this._commandsQueue.destroy()}initialize(){this.addResolvingPromise(Promise.all([this._initProxy(),this._initServiceOptions()])),this.addHandles([this.on("valueRangesChanged",e=>{this._set("_aggregateValueRanges",e.valueRanges)}),N(()=>this.featureEffect,e=>{this.featureEffectView.featureEffect=e},ue)],"constructor"),this.featureEffectView.endTransitions()}async _initProxy(){var i;const e=this.layer;if("isTable"in e&&e.isTable)throw new P("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:this.layer});if((e.type==="feature"||e.type==="subtype-group")&&!((i=J(e))!=null&&i.operations.supportsQuery))throw new P("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e});this._proxy&&this._proxy.destroy();const t=this._createClientOptions();return this._set("_proxy",new Ne({client:t})),this._proxy.when()}async _initServiceOptions(){return this._set("_serviceOptions",await this._createServiceOptions()),this._serviceOptions}get _effectiveFeatureReduction(){if(!("featureReduction"in this.layer))return null;const e=this.layer.featureReduction;return e&&(!("maxScale"in e)||!e.maxScale||e.maxScale<this.view.scale)?e:null}get orderByFields(){var e,t;return((e=this._serviceOptions)==null?void 0:e.type)!=="stream"?(t=this._serviceOptions)==null?void 0:t.orderByFields:void 0}get labelsVisible(){const e=this.layer.type==="subtype-group"?this.layer.sublayers.items:[this.layer];return!this.suspended&&e.some(t=>t.labelingInfo&&t.labelsVisible)}get queryMode(){var e;return(e=this._serviceOptions)==null?void 0:e.type}get renderingConfigHash(){var E,C;if(!this.layer)return null;const e=this.availableFields,t=this.layer,i=this.view.floors,{definitionExpression:r}=t,s=this.layer.type!=="subtype-group"&&this.layer.labelsVisible&&this.layer.labelingInfo,n="renderer"in t&&t.renderer,a="gdbVersion"in t?t.gdbVersion:void 0,c="historicMoment"in t?(E=t.historicMoment)==null?void 0:E.getTime():void 0,{timeExtent:l}=this,y="customParameters"in t?JSON.stringify(t.customParameters):void 0,u="apiKey"in t?t.apiKey:void 0,g=t.type==="stream"?`${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}`:null,d=JSON.stringify(this.clips),_=(C=this._effectiveFeatureReduction)==null?void 0:C.toJSON(),R="orderBy"in this.layer&&JSON.stringify(this.layer.orderBy),v="sublayers"in this.layer&&this.layer.sublayers.items.reduce((b,A)=>b+`${A.visible?1:0}.${JSON.stringify(A.renderer)}.${A.labelsVisible}
.${JSON.stringify(A.labelingInfo)}`,""),V="subtypeCode"in this.layer&&this.layer.subtypeCode;return JSON.stringify({orderBy:R,sublayerHash:v,subtypeCode:V,filterHash:p(this.filter)&&this.filter.toJSON(),effectHash:p(this.featureEffect)&&this.featureEffect.toJSON(),streamFilter:g,gdbVersion:a,definitionExpression:r,historicMoment:c,availableFields:e,renderer:n,labelingInfo:s,timeExtent:l,floors:i,clipsHash:d,featureReduction:_,customParameters:y,apiKey:u})}highlight(e){let t;e instanceof L?t=[e.getObjectId()]:typeof e=="number"||typeof e=="string"?t=[e]:ce.isCollection(e)&&e.length>0?t=e.map(r=>r==null?void 0:r.getObjectId()).toArray():Array.isArray(e)&&e.length>0&&(t=typeof e[0]=="number"||typeof e[0]=="string"?e:e.map(r=>r==null?void 0:r.getObjectId()));const i=t==null?void 0:t.filter(p);return i&&i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):{remove:()=>{}}}hasHighlight(){return!!this._highlightIds.size}async hitTest(e,t){if(!this.tileRenderer)return null;const i=await this.tileRenderer.hitTest(t);if(i.length===0)return null;const{features:r,aggregates:s}=await this._proxy.getFeatures(i);return[...s.map(n=>this._createGraphicHit(e,z.fromJSON(n))),...r.map(n=>this._createGraphicHit(e,L.fromJSON(n)))]}queryStatistics(){return this._proxy.queryStatistics()}async querySummaryStatistics(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.querySummaryStatistics(this._cleanUpQuery(e),r,i)}async queryAggregateSummaryStatistics(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryAggregateSummaryStatistics(this._cleanUpAggregateQuery(e),r,i)}async queryUniqueValues(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryUniqueValues(this._cleanUpQuery(e),r,i)}async queryAggregateUniqueValues(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryAggregateUniqueValues(this._cleanUpAggregateQuery(e),r,i)}async queryClassBreaks(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryClassBreaks(this._cleanUpQuery(e),r,i)}async queryAggregateClassBreaks(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryAggregateClassBreaks(this._cleanUpAggregateQuery(e),r,i)}async queryHistogram(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryHistogram(this._cleanUpQuery(e),r,i)}async queryAggregateHistogram(e,t,i){const r={...t,scale:this.view.scale};return this._proxy.queryAggregateHistogram(this._cleanUpAggregateQuery(e),r,i)}queryFeatures(e,t){return this.queryFeaturesJSON(e,t).then(i=>{const r=Q.fromJSON(i);return r.features.forEach(s=>this._setLayersForFeature(s)),r})}queryVisibleFeatures(e,t){return this._proxy.queryVisibleFeatures(this._cleanUpQuery(e),t).then(i=>{const r=Q.fromJSON(i);return r.features.forEach(s=>this._setLayersForFeature(s)),r})}async queryAggregates(e,t){const i=await this._proxy.queryAggregates(this._cleanUpAggregateQuery(e),t),r=ke.fromJSON(i);return r.features.forEach(s=>this._setLayersForFeature(s)),r}queryAggregateIds(e,t){return this._proxy.queryAggregateIds(this._cleanUpAggregateQuery(e),t)}queryAggregateCount(e,t){return this._proxy.queryAggregateCount(this._cleanUpAggregateQuery(e),t)}queryAggregateJSON(e,t){return this._proxy.queryAggregates(this._cleanUpAggregateQuery(e),t)}queryFeaturesJSON(e,t){return this._proxy.queryFeatures(this._cleanUpQuery(e),t)}queryObjectIds(e,t){return this._proxy.queryObjectIds(this._cleanUpQuery(e),t)}queryFeatureCount(e,t){return this._proxy.queryFeatureCount(this._cleanUpQuery(e),t)}queryExtent(e,t){return this._proxy.queryExtent(this._cleanUpQuery(e),t).then(i=>({count:i.count,extent:he.fromJSON(i.extent)}))}setVisibility(e,t){t?this._visibilityOverrides.delete(e):this._visibilityOverrides.add(e),this._update()}update(e){if(!this._tileStrategy||!this.tileRenderer)return;const{hasMissingTiles:t,added:i,removed:r}=this._tileStrategy.update(e);(i.length||r.length)&&this._proxy.updateTiles({added:i,removed:r}),t&&this.requestUpdate(),this.notifyChange("updating")}attach(){this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`),this._tileStrategy=new Je({acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme,buffer:0}),this.addAttachHandles(N(()=>this.renderingConfigHash,()=>this._update(),de)),this.layer.type!=="stream"&&this.addAttachHandles(this.layer.on("edits",e=>this._edit(e)))}detach(){var e,t;this._commandsQueue.clear(),(e=this._proxy)==null||e.stop(),this.container.removeAllChildren(),(t=this.tileRenderer)==null||t.uninstall(this.container),this.tileRenderer=null,this._tileStrategy=B(this._tileStrategy),this._tileRendererHash=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}isUpdating(){var c;const e="renderer"in this.layer&&this.layer.renderer!=null,t=this._commandsQueue.updating,i=this._updatingRequiredFieldsPromise!=null,r=!this._proxy||!this._proxy.isReady,s=this._pipelineIsUpdating,n=this.tileRenderer==null||((c=this.tileRenderer)==null?void 0:c.updating),a=e&&(t||i||r||s||n);return S("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${e}
  -> hasPendingCommand ${t}
  -> updatingRequiredFields ${i}
  -> updatingProxy ${r}
  -> updatingPipeline ${s}
  -> updatingTileRenderer ${n}
`),a}_createClientOptions(){return{setUpdating:e=>{this._set("_pipelineIsUpdating",e)},emitEvent:e=>{this.emit(e.name,e.event)}}}async _detectQueryMode(e){var c;const t="path"in e,{layer:i}=this,r="editingInfo"in i&&((c=i.editingInfo)==null?void 0:c.lastEditDate),s="refreshInterval"in i&&!!i.refreshInterval,n=!r&&s,a=J(i);if(t&&(i.type==="feature"||i.type==="subtype-group")&&i.geometryType==="point"&&(a!=null&&a.query.supportsPagination)&&!(a!=null&&a.operations.supportsEditing)&&!n&&S("featurelayer-snapshot-enabled"))try{const l=await i.queryFeatureCount();if(l<=S("featurelayer-snapshot-point-min-threshold"))return{mode:"snapshot",featureCount:l};const y=S("featurelayer-snapshot-point-max-threshold"),u=S("featurelayer-snapshot-point-coverage"),g=this.view.extent,d=F(i.fullExtent),_=d==null?void 0:d.clone().intersection(g),R=p(_)?_.width*_.height:0,v=(d==null?void 0:d.width)*(d==null?void 0:d.height);if(l<=y&&(v===0?0:R/v)>=u)return{mode:"snapshot",featureCount:l}}catch(l){I.getLogger(this.declaredClass).warn("mapview-feature-layer","Encountered an error when querying for featureCount",{error:l})}return{mode:"on-demand"}}async _createServiceOptions(){var V,E,C;const e=this.layer;if(e.type==="stream")return null;const t=J(e),{capabilities:i,objectIdField:r}=e,s=e.fields.map(b=>b.toJSON()),n=p(e.fullExtent)?e.fullExtent.toJSON():null,a=Ie(e.geometryType),c="timeInfo"in e&&e.timeInfo&&e.timeInfo.toJSON()||null,l=e.spatialReference?e.spatialReference.toJSON():null,y=e.type==="feature"?e.globalIdField:null;let u;e.type==="ogc-feature"?u=e.source.getSource():X(e.source)?u=await e.source.openPorts():e.parsedUrl&&(u=pe(e.parsedUrl),"dynamicDataSource"in e&&e.dynamicDataSource&&(u.query={layer:JSON.stringify({source:e.dynamicDataSource})}));const g="datesInUnknownTimezone"in this.layer&&this.layer.datesInUnknownTimezone,d=("subtypeField"in this.layer?this.layer.subtypeField:null)??null,{mode:_,featureCount:R}=await this._detectQueryMode(u);let v=this.layer.objectIdField;if(this.layer.type==="feature"&&p(this.layer.orderBy)&&this.layer.orderBy.length){const b=!this.layer.orderBy[0].valueExpression&&this.layer.orderBy[0].field;b&&(v=b)}return{type:_,timeReferenceUnknownClient:g,subtypeField:d,featureCount:R,globalIdField:y,maxRecordCount:i.query.maxRecordCount,tileMaxRecordCount:i.query.tileMaxRecordCount,capabilities:i,effectiveCapabilities:t,fields:s,fullExtent:n,geometryType:a,objectIdField:r,source:u,timeInfo:c,spatialReference:l,orderByFields:v,datesInUnknownTimezone:g,dateFieldsTimeReference:("dateFieldsTimeReference"in this.layer?(V=this.layer.dateFieldsTimeReference)==null?void 0:V.toJSON():null)||null,preferredTimeReference:("preferredTimeReference"in this.layer?(E=this.layer.preferredTimeReference)==null?void 0:E.toJSON():null)||null,editFieldsInfo:"editFieldsInfo"in this.layer?(C=this.layer.editFieldsInfo)==null?void 0:C.toJSON():null}}async _createMemoryServiceOptions(e){const t=await e.openPorts();return{...this._createServiceOptions(),type:"memory",source:t}}_cleanUpQuery(e){const t=D.from(e)||this.createQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}_cleanUpAggregateQuery(e){const t=D.from(e)||this.createAggregateQuery();return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t}async _update(){return this._commandsQueue.push({type:"update"})}async _edit(e){return this.suspended?void this._clearTiles():this._validateEdit(e)?this._commandsQueue.push({type:"edit",edits:e}):void 0}async doRefresh(e){if(this.attached&&this._tileStrategy.tileKeys().length)return this.suspended&&e?void this._clearTiles():this._commandsQueue.push({type:"refresh",dataChanged:e})}_clearTiles(){this._tileStrategy.tileKeys().length&&(this._proxy.updateTiles({added:[],removed:this._tileStrategy.tileKeys()}),this._tileStrategy.clear(),this.requestUpdate(),this._commandsQueue.clear(),this._update())}_validateEdit(e){const t="globalIdField"in this.layer&&this.layer.globalIdField,i=e.deletedFeatures.some(s=>s.objectId===-1||!s.objectId),r=t&&this.availableFields.includes(t);return i&&!r?(I.getLogger(this.declaredClass).error(new P("mapview-apply-edits",`Editing the specified service requires the layer's globalIdField, ${t} to be included the layer's outFields for updates to be reflected on the map`)),null):e}async _doUpdate(){var e,t;try{if(this.destroyed||!this._hasRequiredSupport(this.layer)||!this._tileStrategy)return;const{featureEffectView:i,filter:r}=this;if(await this._updateRequiredFields(),this.destroyed)return;const{renderer:s}=this._getEffectiveRenderer();this._set("_effectiveRenderer",s);const n=this._createSchemaConfig(),a=this._createConfiguration(n,r,i.filter),c=this._lastDefinitionExpression!==a.schema.source.definitionExpression;this._lastDefinitionExpression=a.schema.source.definitionExpression;const l=a.schema.tileRenderer,y=this._createTileRendererHash(l);if(this._serviceOptions.type==="snapshot"&&(a.schema.source.initialFeatureCount=this._serviceOptions.featureCount),y!==this._tileRendererHash){await this._initTileRenderer(l,s);const u=this.layer,g=u.type==="stream"?await this._initServiceOptions():this._serviceOptions;this.tileRenderer.onConfigUpdate(s),u.type!=="stream"&&X(u.source)&&(g.source=await u.source.openPorts());const d={added:this._tileStrategy.tileKeys(),removed:[]};await this._proxy.startup(this.view.featuresTilingScheme,a,g,d),this.hasHighlight()&&await this._proxy.setHighlight(Array.from(this._highlightIds.keys())),await this._onceTilesUpdated(),this.tileRenderer.onConfigUpdate(s)}else{this._serviceOptions.type==="snapshot"&&c&&(a.schema.source.changedFeatureCount=await this.layer.queryFeatureCount());const u=await this._proxy.update(a);(u.mesh||(e=u.targets)!=null&&e.aggregate)&&this._lockGPUUploads();try{await this._proxy.applyUpdate(u)}catch(g){O(g)||I.getLogger(this.declaredClass).error(g)}(u.mesh||(t=u.targets)!=null&&t.aggregate)&&this._unlockGPUUploads(),this.tileRenderer.onConfigUpdate(s),this._updateClusterSizeVariable(),this._forceAttributeTextureUpload()}this._tileRendererHash=y,this.tileRenderer.invalidateLabels(),this.requestUpdate()}catch{}}async _doEdit(e){try{await this._proxy.onEdits(e)}catch(t){O(t)}}async _doRefresh(e){this._lockGPUUploads();try{let t;e&&this.queryMode==="snapshot"&&"queryFeatureCount"in this.layer&&(t=await this.layer.queryFeatureCount()),await this._proxy.refresh({dataChanged:e,featureCount:t})}catch(t){O(t)}this._unlockGPUUploads(),this._effectiveFeatureReduction&&this._updateClusterSizeVariable()}_updateClusterSizeVariable(){this._needsClusterSizeUpdate&&(this.tileRenderer.onConfigUpdate(this._effectiveRenderer),this._needsClusterSizeUpdate=!1)}_createUpdateClusterSizeTask(e,t){return N(()=>this._aggregateValueRanges,i=>{this._updateClusterEffectiveRendererSizeVariable(e,t,i),this._needsClusterSizeUpdate=!0,this._uploadsLocked||this._updateClusterSizeVariable()})}async _updateClusterEffectiveRendererSizeVariable(e,t,i){if(e.dynamicClusterSize&&"visualVariables"in e&&e.visualVariables){const r=ye(e.visualVariables);if(p(r)&&r.field==="cluster_count"){const s=e.visualVariables.indexOf(r);e.visualVariables[s]=ge(t,i);const n=e.clone();n.dynamicClusterSize=!0,this._set("_effectiveRenderer",n)}}}_getEffectiveRenderer(){var r;const e=this.layer,t="renderer"in e?e.renderer:null,i=this._effectiveFeatureReduction;if(this._updateClusterSizeTask=fe(this._updateClusterSizeTask),i&&"renderer"in i&&i.renderer&&!((r=i.renderer.authoringInfo)!=null&&r.isAutoGenerated)){const s=i.fields;if(i.type==="cluster"){const{renderer:n,didInject:a}=_e(i.renderer,i,this._aggregateValueRanges);return a&&(this._updateClusterSizeTask=this._createUpdateClusterSizeTask(n,i)),{renderer:n,aggregateFields:s,featureReduction:i}}return{renderer:i.renderer,aggregateFields:s,featureReduction:i}}if(i&&i.type==="cluster"&&t&&me(t)){const s=i,n=[],a=ve(n,t,s,this._aggregateValueRanges,!0);return this._updateClusterSizeTask=this._createUpdateClusterSizeTask(a,s),{renderer:a,aggregateFields:n,featureReduction:i}}return{renderer:t,aggregateFields:[],featureReduction:null}}_acquireTile(e){const t=this.tileRenderer.acquireTile(e);return t.once("attach",()=>{this.requestUpdate()}),t}_releaseTile(e){this.tileRenderer.releaseTile(e)}async _initTileRenderer(e,t){const i=await Ve(e,{layerView:this,tileInfoView:this.view.featuresTilingScheme,layer:this.layer});return this.tileRenderer&&(this._tileStrategy.clear(),this.tileRenderer.uninstall(this.container),this.tileRenderer=B(this.tileRenderer)),this.destroyed?null:(this._proxy.tileRenderer=i,this._set("tileRenderer",i),this.tileRenderer.install(this.container),this.tileRenderer.onConfigUpdate(t),this.requestUpdate(),this.tileRenderer)}_createTileRendererHash(e){return`${e.type}`}get hasFilter(){const e=!!("floorInfo"in this.layer&&this.layer.floorInfo&&this.view.floors&&this.view.floors.length);return!!this.filter||e||!!this._visibilityOverrides.size||!!this.timeExtent}_injectOverrides(e){const t=p(e)?e.timeExtent:null,i=p(this.timeExtent)&&p(t)?this.timeExtent.intersection(t):this.timeExtent||t;let r=null;const s="floorInfo"in this.layer&&this.layer.floorInfo;if(s){const a=p(e)?e.where:null;r=this._addFloorFilterClause(a)}if(!this._visibilityOverrides.size&&!i&&!s)return p(e)?e.toJSON():null;(e=p(e)&&e.clone()||new we).timeExtent=i,r&&(e.where=r);const n=e.toJSON();return n.hiddenIds=Array.from(this._visibilityOverrides),n}_addFloorFilterClause(e){var r;const t=this.layer;let i=e||"";if("floorInfo"in t&&t.floorInfo){let s=this.view.floors;if(!s||!s.length)return i;(r=t.floorInfo.viewAllLevelIds)!=null&&r.length&&(s=t.floorInfo.viewAllLevelIds);const n=s.filter(l=>l!=="").map(l=>"'"+l+"'");n.push("''");const a=t.floorInfo.floorField;let c="("+a+" IN ({ids}) OR "+a+" IS NULL)";if(c=c.replace("{ids}",n.join(", ")),p(i)&&i.includes(a)){let l=new RegExp("AND \\("+a+".*NULL\\)","g");i=i.replace(l,""),l=new RegExp("\\("+a+".*NULL\\)","g"),i=i.replace(l,""),i=i.replace(/\s+/g," ").trim()}i=i!==""?"("+i+") AND "+c:c}return i!==""?i:null}_createConfiguration(e,t,i){const r=this.layer.type==="feature"&&this.layer.historicMoment?this.layer.historicMoment.getTime():void 0,s=this.layer.type==="feature"?this.layer.gdbVersion??void 0:void 0,n=new Array(qe),a=this._injectOverrides(t);n[0]=a,n[1]=p(i)?i.toJSON():null;const c=Ee(e);if(Re(c))return null;const l=be("2d");return{availableFields:this.availableFields,gdbVersion:s,historicMoment:r,devicePixelRatio:window.devicePixelRatio||1,filters:n,schema:c,supportsTextureFloat:l.supportsTextureFloat,maxTextureSize:l.maxTextureSize}}_hasRequiredSupport(e){return!("renderer"in e)||Ce(e.renderer)}_onceTilesUpdated(){return this.requestUpdate(),Se(()=>!this._pipelineIsUpdating)}_lockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!0,this.tileRenderer.lockGPUUploads())}_unlockGPUUploads(){this.tileRenderer&&(this._uploadsLocked=!1,this.tileRenderer.unlockGPUUploads())}_forceAttributeTextureUpload(){this.tileRenderer&&this.tileRenderer.forceAttributeTextureUpload()}_createSchemaConfig(){const e=this.layer;return{renderer:"renderer"in e?e.renderer:null,spatialReference:e.spatialReference,timeExtent:"timeExtent"in e?e.timeExtent:null,definitionExpression:e.definitionExpression,featureReduction:this._effectiveFeatureReduction,fields:e.fields,geometryType:e.geometryType,historicMoment:"historicMoment"in e?e.historicMoment:null,labelsVisible:"labelsVisible"in e&&e.labelsVisible,labelingInfo:"labelingInfo"in e?e.labelingInfo:null,availableFields:this.availableFields,featureEffect:this.featureEffect,filter:this.filter,gdbVersion:"gdbVersion"in e?e.gdbVersion:null,pixelBuffer:0,orderBy:"orderBy"in e&&e.orderBy?e.orderBy:null,customParameters:{..."customParameters"in e?e.customParameters:void 0,token:"apiKey"in e?e.apiKey??void 0:void 0},subtypeCode:"subtypeCode"in e?e.subtypeCode:void 0,subtypeField:"subtypeField"in e?e.subtypeField:void 0}}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t);this._highlightIds.set(t,i+1)}else this._highlightIds.set(t,1);this._updateHighlight().catch(t=>{O(t)||I.getLogger(this.declaredClass).error(t)})}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const i=this._highlightIds.get(t)-1;i===0?this._highlightIds.delete(t):this._highlightIds.set(t,i)}this._updateHighlight().catch(t=>{O(t)||I.getLogger(this.declaredClass).error(t)})}_setLayersForFeature(e){const t=this.layer;e.layer=t,e.sourceLayer=t}_createGraphicHit(e,t){return this._setLayersForFeature(t),p(t.geometry)&&(t.geometry.spatialReference=this.view.spatialReference),{type:"graphic",graphic:t,layer:this.layer,mapPoint:e}}};o([h()],f.prototype,"_serviceOptions",void 0),o([h()],f.prototype,"_proxy",void 0),o([h()],f.prototype,"_pipelineIsUpdating",void 0),o([h()],f.prototype,"_effectiveRenderer",void 0),o([h()],f.prototype,"_effectiveFeatureReduction",null),o([h()],f.prototype,"_aggregateValueRanges",void 0),o([h()],f.prototype,"_commandsQueue",void 0),o([h()],f.prototype,"featureEffectView",void 0),o([h()],f.prototype,"labelsVisible",null),o([h({readOnly:!0})],f.prototype,"queryMode",null),o([h()],f.prototype,"renderingConfigHash",null),o([h()],f.prototype,"tileRenderer",void 0),o([h()],f.prototype,"updating",void 0),f=o([x("esri.views.2d.layers.FeatureLayerView2D")],f);const dt=f;export{dt as default};