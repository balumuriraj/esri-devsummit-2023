import{eu as h,R as o,j as d,p as l,cb as f,$ as c,e as p,y as a,a as u}from"./calcite-8912bd40.js";import{n as g}from"./LayerView3D-4128a20f.js";import{c as y}from"./TiledLayerView3D-7d5deb80.js";import{u as I}from"./LayerView-abbb3570.js";import{i as x}from"./RefreshableLayerView-e4d9e9c9.js";import"./index-00759e4a.js";import"./MediaLayerVideo-42e60ea8.js";import"./sphere-d0e5285d.js";import"./mat3f64-50f3b9f6.js";import"./mat4f64-abdda1bb.js";import"./quatf64-f8f1c132.js";import"./Util-6d3f024a.js";import"./plane-5e2b046c.js";import"./spatialReferenceEllipsoidUtils-afb35af9.js";import"./scaleUtils-d13015f2.js";import"./ElevationSamplerData-e3118b17.js";import"./objectResourceUtils-782953c3.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-379a78a4.js";import"./vec33-69c9e93b.js";import"./DefaultMaterial_COLOR_GAMMA-6ed76d86.js";import"./types-e1c0a5bf.js";import"./enums-e2e92c86.js";import"./Version-aa0a1d91.js";import"./quat-7b70e9a8.js";import"./resourceUtils-527631ac.js";import"./basicInterfaces-7449a8bf.js";import"./Indices-d8bff7b2.js";import"./NestedMap-1b5db22e.js";import"./requestImageUtils-d1ba3b36.js";import"./symbolColorUtils-c9d24716.js";import"./VertexAttribute-15d1866a.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./OrderIndependentTransparency-5f7257d7.js";import"./Texture-563cf5e5.js";import"./FramebufferObject-8b18fc0c.js";import"./VertexElementDescriptor-2925c6af.js";import"./InterleavedLayout-d57c91d0.js";import"./vec3f32-01c06d8d.js";import"./Octree-499541ed.js";import"./edgeProcessing-20e12367.js";import"./deduplicate-769a6f51.js";import"./MeshComponent-788e605a.js";import"./earcut-61f7b102.js";import"./imageUtils-c2d0d1ae.js";import"./projection-5969b753.js";import"./ZoomMomentumEstimator-ef57e6a4.js";import"./floatRGBA-ca2b39ca.js";import"./dehydratedFeatures-3a140d03.js";import"./quantizationUtils-b3b2ae2a.js";import"./labelFormatUtils-71e1f841.js";import"./orientedBoundingBox-a14b97b5.js";import"./quatf32-51a323b8.js";import"./SnappingCandidate-970faec6.js";import"./callExpressionWithFeature-df1a8f01.js";import"./DefaultVertexAttributeLayouts-5f20d8dd.js";import"./geometryServiceUtils-a536bb19.js";import"./project-909a4219.js";import"./LercDecoder-65586d50.js";import"./VectorTile-d41a1f0f.js";import"./enums-fb086c25.js";import"./config-1337d16e.js";import"./TiledDisplayObject-419c008b.js";import"./DisplayObject-87c37b69.js";import"./rasterUtils-7694cc98.js";import"./resources-7587d8f4.js";import"./workerHelper-6131d203.js";import"./webgl-debug-7f880832.js";import"./RenderingContext-0f21aa0e.js";import"./ProgramCache-f29c900e.js";import"./Program-77209250.js";import"./MediaLayer-4c42fc2f.js";import"./MediaElementView-06baa4d4.js";import"./normalizeUtilsSync-3ea564a9.js";import"./resourceExtension-f31d9f10.js";import"./BoundsStore-00da37da.js";import"./PooledRBush-5a11bc7e.js";import"./prism-line-numbers-eff41b13.js";import"./label2-a2f37e65.js";import"./interactive-1de2e238.js";import"./loadable-6afd516d.js";import"./t9n-81df3a71.js";import"./observers-c89705b8.js";import"./icon-8e47fbec.js";import"./loader-c773e800.js";import"./guid-51402ee7.js";let e=class extends x(y(g(I))){constructor(){super(...arguments),this.type="wmts-3d"}get hasMixedImageFormats(){return!0}_getCompatibleTileInfoMatrixSet(i,t=!1){const r=h(this.layer);if(o(r)){if(d.isCollection(r))return r.find(n=>{const m=i(n);return o(m)&&(t?l.getLogger(this.declaredClass).error("The selected tile matrix set is not compatible with the view",m):this.addResolvingPromise(Promise.reject(m))),m==null});const s=i(r);return o(s)&&(t?l.getLogger(this.declaredClass).error("The selected tile matrix set is not compatible with the view",s):this.addResolvingPromise(Promise.reject(s))),r}return null}initialize(){this._getCompatibleTileInfoMatrixSet(t=>this._getTileInfoSupportError(t.tileInfo,t.fullExtent));const i=f(()=>{var t,r;return(r=(t=this.view)==null?void 0:t.basemapTerrain)==null?void 0:r.tilingSchemeLocked}).then(()=>{const t=this._getCompatibleTileInfoMatrixSet(r=>this._getTileInfoError(r.tileInfo,r.fullExtent));c(t)||(t.id!==null&&this.layer.activeLayer.tileMatrixSetId!==t.id&&(this.layer.activeLayer.tileMatrixSetId=t.id),t.tileInfo&&(this.tileInfo=t.tileInfo),this.layer.fullExtent=t.fullExtent)});this.addResolvingPromise(i),this.when(()=>this._postInitialize())}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const i=this.layer.activeLayer.tileMatrixSet;return o(i)&&!this._getTileInfoError(i.tileInfo,i.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_postInitialize(){this.updatingHandles.add(()=>{var i,t;return(t=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:t.styleId},()=>this.refresh()),this.updatingHandles.add(()=>{var i;return(i=this.layer)==null?void 0:i.activeLayer},i=>{const t=this._getCompatibleTileInfoMatrixSet(r=>this._getTileInfoError(r.tileInfo,r.fullExtent),!0);o(t)&&t.id!==null&&i.tileMatrixSetId!==t.id&&(this.layer.activeLayer.tileMatrixSetId=t.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()})}_getTileInfoError(i,t){return this._getTileInfoSupportError(i,t)||this._getTileInfoCompatibilityError(i,this.view.basemapTerrain.tilingScheme)}};p([a({readOnly:!0})],e.prototype,"hasMixedImageFormats",null),p([a()],e.prototype,"layer",void 0),p([a()],e.prototype,"suspended",void 0),e=p([u("esri.views.3d.layers.WMTSLayerView3d")],e);const Zt=e;export{Zt as default};