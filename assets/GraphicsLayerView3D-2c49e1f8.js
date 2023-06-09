import{ab as l,ai as c,a3 as h,$ as a,a1 as d,e as o,y as s,a as u}from"./calcite-c5ae4991.js";import{n as g}from"./LayerView3D-1f5cccf1.js";import{m as y,a as f}from"./queryForSymbologySnapping-155c8564.js";import{A as b}from"./GraphicsProcessor-26b9588e.js";import{l as v}from"./projectExtentUtils-c85d0d8b.js";import{C as S}from"./MediaLayerVideo-b25b4fca.js";import{u as w}from"./LayerView-d2d47806.js";import"./index-9a6385f7.js";import"./dehydratedFeatures-ce9ee959.js";import"./quantizationUtils-a15bd53f.js";import"./elevationInfoUtils-def3e352.js";import"./Graphics3DObjectStates-b5c5b0ef.js";import"./optimizedFeatureQueryEngineAdapter-5d25bc4d.js";import"./centroid-b9acbfa6.js";import"./PooledRBush-52d39e88.js";import"./basicInterfaces-7449a8bf.js";import"./geometryServiceUtils-b1997a16.js";import"./project-0e0370f9.js";import"./sphere-5ce3b13c.js";import"./mat3f64-50f3b9f6.js";import"./mat4f64-abdda1bb.js";import"./quatf64-f8f1c132.js";import"./Util-2b929b00.js";import"./plane-6ecad71b.js";import"./spatialReferenceEllipsoidUtils-87122df3.js";import"./scaleUtils-a8d07219.js";import"./ElevationSamplerData-41a54d7d.js";import"./objectResourceUtils-8fb711c9.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-bc307796.js";import"./vec33-164586fc.js";import"./DefaultMaterial_COLOR_GAMMA-941dbf6c.js";import"./types-e1c0a5bf.js";import"./enums-e2e92c86.js";import"./Version-e2fa8281.js";import"./quat-8dcd84de.js";import"./resourceUtils-527631ac.js";import"./Indices-84de656e.js";import"./NestedMap-1b5db22e.js";import"./requestImageUtils-67552ee5.js";import"./symbolColorUtils-14fb8f64.js";import"./VertexAttribute-15d1866a.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./OrderIndependentTransparency-5f7257d7.js";import"./Texture-3d2bcec7.js";import"./FramebufferObject-d9042b3f.js";import"./VertexElementDescriptor-2925c6af.js";import"./InterleavedLayout-45bbbdfe.js";import"./vec3f32-01c06d8d.js";import"./Octree-65a3a6a2.js";import"./edgeProcessing-fca251f2.js";import"./deduplicate-54cc928a.js";import"./MeshComponent-9e26db57.js";import"./earcut-61f7b102.js";import"./imageUtils-c2d0d1ae.js";import"./projection-425e8064.js";import"./ZoomMomentumEstimator-f0d7cb62.js";import"./floatRGBA-2dd25736.js";import"./labelFormatUtils-2486d06e.js";import"./orientedBoundingBox-d2c06194.js";import"./quatf32-51a323b8.js";import"./SnappingCandidate-970faec6.js";import"./callExpressionWithFeature-94cb1131.js";import"./DefaultVertexAttributeLayouts-5f20d8dd.js";import"./LercDecoder-25ed2639.js";import"./VectorTile-ade0a955.js";import"./enums-fb086c25.js";import"./config-1337d16e.js";import"./TiledDisplayObject-0268aa47.js";import"./DisplayObject-b5071d0a.js";import"./rasterUtils-0aabb0e8.js";import"./resources-4ce48b80.js";import"./workerHelper-33dafb63.js";import"./webgl-debug-7f880832.js";import"./RenderingContext-f0258ff2.js";import"./ProgramCache-ddf14e3e.js";import"./Program-2221c2b1.js";import"./MediaLayer-faedb24a.js";import"./MediaElementView-92573d58.js";import"./normalizeUtilsSync-f9670301.js";import"./resourceExtension-a1892050.js";import"./BoundsStore-32c0ea98.js";import"./prism-line-numbers-713161a8.js";import"./label2-e5a29f4c.js";import"./interactive-1de2e238.js";import"./loadable-6afd516d.js";import"./t9n-b59ffad1.js";import"./observers-c89705b8.js";import"./icon-179b3e31.js";import"./loader-dc9b20b1.js";import"./guid-51402ee7.js";let t=class extends g(w){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new b({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.handles.add(this.layer.on("graphic-update",r=>this.processor.graphicsCore.graphicUpdateHandler(r))),this.addResolvingPromise(v(this).then(r=>this.fullExtentInLocalViewSpatialReference=r)),this.layer.internal?this.notifyChange("updating"):this.handles.add(l(()=>{var r,i;return(i=(r=this.view)==null?void 0:r.basemapTerrain)==null?void 0:i.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",c(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){var r;return this.canResume()&&!((r=this.processor)!=null&&r.frustumVisibilitySuspended)}get slicePlaneEnabled(){const r=this.layer.internal;return this._slicePlaneEnabled&&!r}set slicePlaneEnabled(r){this._slicePlaneEnabled=r}getSuspendInfo(){var i,e;const r=super.getSuspendInfo();return r.outsideScaleRange=((i=this.processor)==null?void 0:i.scaleVisibilitySuspended)??!1,r.outsideOfView=((e=this.processor)==null?void 0:e.frustumVisibilitySuspended)??!1,r}async fetchPopupFeatures(r,i){var e;return((e=h(i))==null?void 0:e.clientGraphics)??[]}getHit(r){return this.processor.getHit(r)}whenGraphicBounds(r,i){return this.processor.whenGraphicBounds(r,i)}computeAttachmentOrigin(r,i){var e;return(e=this.processor)==null?void 0:e.computeAttachmentOrigin(r,i)}getSymbolLayerSize(r,i){return this.processor.getSymbolLayerSize(r,i)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(r){return this.processor.maskOccludee(r)}highlight(r){return this.processor.highlight(r)}async elevationAlignPointsInFeatures(r,i){const{processor:e}=this;if(a(e)||a(e.graphics3DGraphics))throw new d("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:n}=e,m=p=>typeof p=="number"?n.get(p):void 0;return y(this.view,this.layer,m,r,i)}async queryForSymbologySnapping(r,i){return f(this.processor,r,i)}get updatePolicy(){var r;return((r=this.processor)==null?void 0:r.graphicsCore.effectiveUpdatePolicy)||S.SYNC}canResume(){var r;return super.canResume()&&!((r=this.processor)!=null&&r.scaleVisibilitySuspended)}isUpdating(){var r,i,e;return!(!((r=this.processor)!=null&&r.updating)&&(this.layer.internal||(e=(i=this.view)==null?void 0:i.basemapTerrain)!=null&&e.ready))}get performanceInfo(){var r,i;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:((r=this.processor)==null?void 0:r.elevationAlignment.updating)??!1,visibilityFrustum:!((i=this.processor)!=null&&i.frustumVisibilitySuspended)}}getUsedMemory(){var r,i;return((i=(r=this.processor)==null?void 0:r.graphicsCore)==null?void 0:i.usedMemory)??0}getUnloadedMemory(){var r,i;return(i=(r=this.processor)==null?void 0:r.graphicsCore)==null?void 0:i.unprocessedMemoryEstimate}ignoresMemoryFactor(){return!0}};o([s()],t.prototype,"loadedGraphics",null),o([s({readOnly:!0})],t.prototype,"legendEnabled",null),o([s()],t.prototype,"layer",void 0),o([s({readOnly:!0})],t.prototype,"processor",void 0),o([s()],t.prototype,"_slicePlaneEnabled",void 0),o([s({type:Boolean})],t.prototype,"slicePlaneEnabled",null),t=o([u("esri.views.3d.layers.GraphicsLayerView3D")],t);const si=t;export{si as default};
