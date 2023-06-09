import{h as a,c1 as s,$ as n,e as i,y as o,a as l}from"./calcite-c5ae4991.js";import{v as d}from"./I3SMeshView3D-c279e42f.js";import{aa as h,H as u}from"./MediaLayerVideo-b25b4fca.js";import{n as c}from"./LayerView3D-1f5cccf1.js";import{u as g}from"./LayerView-d2d47806.js";import"./index-9a6385f7.js";import"./mat4f64-abdda1bb.js";import"./quatf64-f8f1c132.js";import"./I3SOverrides-5d999feb.js";import"./dehydratedFeatures-ce9ee959.js";import"./quantizationUtils-a15bd53f.js";import"./I3SNode-8a429489.js";import"./sphere-5ce3b13c.js";import"./mat3f64-50f3b9f6.js";import"./I3SUtil-cbb80728.js";import"./quat-8dcd84de.js";import"./quatf32-51a323b8.js";import"./spatialReferenceEllipsoidUtils-87122df3.js";import"./I3SBinaryReader-266f8da8.js";import"./VertexAttribute-15d1866a.js";import"./orientedBoundingBox-d2c06194.js";import"./vec3f32-01c06d8d.js";import"./plane-6ecad71b.js";import"./symbolColorUtils-14fb8f64.js";import"./RenderTexture-4c0a650d.js";import"./objectResourceUtils-8fb711c9.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-bc307796.js";import"./vec33-164586fc.js";import"./DefaultMaterial_COLOR_GAMMA-941dbf6c.js";import"./types-e1c0a5bf.js";import"./enums-e2e92c86.js";import"./Version-e2fa8281.js";import"./resourceUtils-527631ac.js";import"./basicInterfaces-7449a8bf.js";import"./Indices-84de656e.js";import"./NestedMap-1b5db22e.js";import"./requestImageUtils-67552ee5.js";import"./Util-2b929b00.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./OrderIndependentTransparency-5f7257d7.js";import"./Texture-3d2bcec7.js";import"./FramebufferObject-d9042b3f.js";import"./VertexElementDescriptor-2925c6af.js";import"./InterleavedLayout-45bbbdfe.js";import"./Octree-65a3a6a2.js";import"./featureQueryAll-5c48871f.js";import"./FeatureLayerView3D-917e3f71.js";import"./FeatureLayerViewBase3D-a263e4cc.js";import"./FeatureLikeLayerView3D-a22645de.js";import"./geometryServiceUtils-b1997a16.js";import"./project-0e0370f9.js";import"./dehydratedFeatureComparison-52788bbf.js";import"./queryForSymbologySnapping-155c8564.js";import"./elevationInfoUtils-def3e352.js";import"./hash-0ddfbf4b.js";import"./Graphics3DObjectStates-b5c5b0ef.js";import"./optimizedFeatureQueryEngineAdapter-5d25bc4d.js";import"./centroid-b9acbfa6.js";import"./PooledRBush-52d39e88.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-856a56fe.js";import"./QueryEngineResult-7bb9e34b.js";import"./WhereClause-19168e5f.js";import"./executionError-fb3f283a.js";import"./utils-d04d4fee.js";import"./generateRendererUtils-0781e0f0.js";import"./projectionSupport-c2c1f4b7.js";import"./json-48e3ea08.js";import"./SnappingCandidate-970faec6.js";import"./utils-d27f2aa1.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-bf0170ce.js";import"./scaleUtils-a8d07219.js";import"./FeatureStore-8d653403.js";import"./BoundsStore-32c0ea98.js";import"./heatmapTextureUtils-7a5994f1.js";import"./projectExtentUtils-c85d0d8b.js";import"./LercDecoder-25ed2639.js";import"./EventedSet-916d5a8d.js";import"./FeatureLayerView-14c791ed.js";import"./popupUtils-bf43aa1c.js";import"./RefreshableLayerView-3999328b.js";import"./ElevationSamplerData-41a54d7d.js";import"./edgeProcessing-fca251f2.js";import"./deduplicate-54cc928a.js";import"./MeshComponent-9e26db57.js";import"./earcut-61f7b102.js";import"./imageUtils-c2d0d1ae.js";import"./projection-425e8064.js";import"./ZoomMomentumEstimator-f0d7cb62.js";import"./floatRGBA-2dd25736.js";import"./labelFormatUtils-2486d06e.js";import"./callExpressionWithFeature-94cb1131.js";import"./DefaultVertexAttributeLayouts-5f20d8dd.js";import"./VectorTile-ade0a955.js";import"./enums-fb086c25.js";import"./config-1337d16e.js";import"./TiledDisplayObject-0268aa47.js";import"./DisplayObject-b5071d0a.js";import"./rasterUtils-0aabb0e8.js";import"./resources-4ce48b80.js";import"./workerHelper-33dafb63.js";import"./webgl-debug-7f880832.js";import"./RenderingContext-f0258ff2.js";import"./ProgramCache-ddf14e3e.js";import"./Program-2221c2b1.js";import"./MediaLayer-faedb24a.js";import"./MediaElementView-92573d58.js";import"./normalizeUtilsSync-f9670301.js";import"./resourceExtension-a1892050.js";import"./prism-line-numbers-713161a8.js";import"./label2-e5a29f4c.js";import"./interactive-1de2e238.js";import"./loadable-6afd516d.js";import"./t9n-b59ffad1.js";import"./observers-c89705b8.js";import"./icon-179b3e31.js";import"./loader-dc9b20b1.js";import"./guid-51402ee7.js";import"./SceneModification-58ab3382.js";import"./persistable-aa8e873d.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./SceneLayerWorker-17cd6883.js";const y=.2;let r=class extends d(c(g)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=h.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var t;return((t=this._controller)==null?void 0:t.updatingProgress)??0}get lodFactor(){var t,p,m,e;return((e=(m=(p=(t=this.view)==null?void 0:t.qualitySettings)==null?void 0:p.sceneService)==null?void 0:m.integratedMesh)==null?void 0:e.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?y:1}get layerPopupEnabled(){return!1}initialize(){this.updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),a),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const t=new s;return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.handles.remove("modifications"),n(this.layer.modifications))return void(this._modifications=[]);const t=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(()=>t,()=>this._modifications=t.toArray(),a),"modifications")}};i([o()],r.prototype,"layer",void 0),i([o()],r.prototype,"i3slayer",null),i([o(u)],r.prototype,"updatingProgress",void 0),i([o()],r.prototype,"updatingProgressValue",null),i([o()],r.prototype,"lodFactor",null),i([o({readOnly:!0})],r.prototype,"progressiveLoadFactor",null),r=i([l("esri.views.3d.layers.SceneLayerView3D")],r);const Rr=r;export{Rr as default};
