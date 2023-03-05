import{ly as n,a4 as p,aA as m,v as l,ac as i,ad as e,hm as d,af as h}from"./index-b4cf3b73.js";import{v as u}from"./I3SMeshView3D-c79c82c5.js";import{n as c}from"./LayerView3D-63bb62b8.js";import{u as g}from"./LayerView-f81022d3.js";import"./I3SOverrides-cc53747c.js";import"./I3SNode-d3e60271.js";import"./I3SUtil-90b73349.js";import"./I3SBinaryReader-dfbeb31b.js";import"./RenderTexture-1e7cf257.js";import"./FeatureLayerView3D-57264e80.js";import"./FeatureLayerViewBase3D-22fe4d49.js";import"./FeatureLikeLayerView3D-c48be25b.js";import"./dehydratedFeatureComparison-dd286337.js";import"./queryForSymbologySnapping-006ad964.js";import"./elevationInfoUtils-795c904c.js";import"./hash-0ddfbf4b.js";import"./Graphics3DObjectStates-d950b2f4.js";import"./optimizedFeatureQueryEngineAdapter-9feeb8c0.js";import"./centroid-86b8ef29.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-855ad4b6.js";import"./QueryEngineResult-0ed25b0c.js";import"./WhereClause-c3db6fed.js";import"./executionError-fb3f283a.js";import"./utils-712dddbb.js";import"./generateRendererUtils-418ba299.js";import"./projectionSupport-62879cb5.js";import"./json-48e3ea08.js";import"./utils-a40a33db.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-c22bea60.js";import"./FeatureStore-eeff7998.js";import"./heatmapTextureUtils-49707d55.js";import"./projectExtentUtils-ed195c7d.js";import"./EventedSet-9ed89cc1.js";import"./FeatureLayerView-8764f7c6.js";import"./popupUtils-35ef43a2.js";import"./RefreshableLayerView-afe3e85c.js";import"./SceneModification-27dcb4c8.js";import"./persistable-bd7be91e.js";import"./SceneLayerWorker-439f0e8f.js";const y=.2;let r=class extends u(c(g)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=n.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var t;return((t=this._controller)==null?void 0:t.updatingProgress)??0}get lodFactor(){var t,o,a,s;return((s=(a=(o=(t=this.view)==null?void 0:t.qualitySettings)==null?void 0:o.sceneService)==null?void 0:a.integratedMesh)==null?void 0:s.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?y:1}get layerPopupEnabled(){return!1}initialize(){this.updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),p),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const t=new m;return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.handles.remove("modifications"),l(this.layer.modifications))return void(this._modifications=[]);const t=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(()=>t,()=>this._modifications=t.toArray(),p),"modifications")}};i([e()],r.prototype,"layer",void 0),i([e()],r.prototype,"i3slayer",null),i([e(d)],r.prototype,"updatingProgress",void 0),i([e()],r.prototype,"updatingProgressValue",null),i([e()],r.prototype,"lodFactor",null),i([e({readOnly:!0})],r.prototype,"progressiveLoadFactor",null),r=i([h("esri.views.3d.layers.SceneLayerView3D")],r);const ot=r;export{ot as default};