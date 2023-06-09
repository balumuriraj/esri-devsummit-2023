import{e as p,a as o}from"./calcite-8912bd40.js";import{q as m}from"./DynamicLayerView3D-7a33cc06.js";import{p as e}from"./MapImageLayerView-90b22327.js";import{S as s}from"./MapServiceLayerViewHelper-ee55984a.js";import{a}from"./drapedUtils-08d2401b.js";import"./index-00759e4a.js";import"./MediaLayerVideo-42e60ea8.js";import"./sphere-d0e5285d.js";import"./mat3f64-50f3b9f6.js";import"./mat4f64-abdda1bb.js";import"./quatf64-f8f1c132.js";import"./Util-6d3f024a.js";import"./plane-5e2b046c.js";import"./spatialReferenceEllipsoidUtils-afb35af9.js";import"./scaleUtils-d13015f2.js";import"./ElevationSamplerData-e3118b17.js";import"./objectResourceUtils-782953c3.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-379a78a4.js";import"./vec33-69c9e93b.js";import"./DefaultMaterial_COLOR_GAMMA-6ed76d86.js";import"./types-e1c0a5bf.js";import"./enums-e2e92c86.js";import"./Version-aa0a1d91.js";import"./quat-7b70e9a8.js";import"./resourceUtils-527631ac.js";import"./basicInterfaces-7449a8bf.js";import"./Indices-d8bff7b2.js";import"./NestedMap-1b5db22e.js";import"./requestImageUtils-d1ba3b36.js";import"./symbolColorUtils-c9d24716.js";import"./VertexAttribute-15d1866a.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./OrderIndependentTransparency-5f7257d7.js";import"./Texture-563cf5e5.js";import"./FramebufferObject-8b18fc0c.js";import"./VertexElementDescriptor-2925c6af.js";import"./InterleavedLayout-d57c91d0.js";import"./vec3f32-01c06d8d.js";import"./Octree-499541ed.js";import"./edgeProcessing-20e12367.js";import"./deduplicate-769a6f51.js";import"./MeshComponent-788e605a.js";import"./earcut-61f7b102.js";import"./imageUtils-c2d0d1ae.js";import"./projection-5969b753.js";import"./ZoomMomentumEstimator-ef57e6a4.js";import"./floatRGBA-ca2b39ca.js";import"./dehydratedFeatures-3a140d03.js";import"./quantizationUtils-b3b2ae2a.js";import"./labelFormatUtils-71e1f841.js";import"./orientedBoundingBox-a14b97b5.js";import"./quatf32-51a323b8.js";import"./SnappingCandidate-970faec6.js";import"./callExpressionWithFeature-df1a8f01.js";import"./DefaultVertexAttributeLayouts-5f20d8dd.js";import"./geometryServiceUtils-a536bb19.js";import"./project-909a4219.js";import"./LercDecoder-65586d50.js";import"./VectorTile-d41a1f0f.js";import"./enums-fb086c25.js";import"./config-1337d16e.js";import"./TiledDisplayObject-419c008b.js";import"./DisplayObject-87c37b69.js";import"./rasterUtils-7694cc98.js";import"./resources-7587d8f4.js";import"./workerHelper-6131d203.js";import"./webgl-debug-7f880832.js";import"./RenderingContext-0f21aa0e.js";import"./ProgramCache-f29c900e.js";import"./Program-77209250.js";import"./MediaLayer-4c42fc2f.js";import"./MediaElementView-06baa4d4.js";import"./normalizeUtilsSync-3ea564a9.js";import"./resourceExtension-f31d9f10.js";import"./BoundsStore-00da37da.js";import"./PooledRBush-5a11bc7e.js";import"./prism-line-numbers-eff41b13.js";import"./label2-a2f37e65.js";import"./interactive-1de2e238.js";import"./loadable-6afd516d.js";import"./t9n-81df3a71.js";import"./observers-c89705b8.js";import"./icon-8e47fbec.js";import"./loader-c773e800.js";import"./guid-51402ee7.js";import"./LayerView3D-4128a20f.js";import"./projectExtentUtils-e8c7cde0.js";import"./ImageMaterial-e77d3ec9.js";import"./LayerView-abbb3570.js";import"./RefreshableLayerView-e4d9e9c9.js";import"./ExportImageParameters-99094deb.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-43bc6a74.js";import"./popupUtils-54bd9deb.js";let r=class extends e(m){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add(()=>this.exportImageVersion,()=>this.updatingHandles.addPromise(this.refreshDebounced())),this._popupHighlightHelper=new s({createFetchPopupFeaturesQueryGeometry:(t,i)=>a(t,i,this.view),layerView:this,updatingHandles:this.updatingHandles})}destroy(){var t;(t=this._popupHighlightHelper)==null||t.destroy()}fetchPopupFeatures(t,i){return this._popupHighlightHelper.fetchPopupFeatures(t,i)}getFetchOptions(){return{timeExtent:this.timeExtent}}};r=p([o("esri.views.3d.layers.MapImageLayerView3D")],r);const Wt=r;export{Wt as default};
