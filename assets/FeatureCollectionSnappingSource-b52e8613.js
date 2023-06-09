import{v as $,R as a,l as c,h,b as E,n$ as F,a3 as V,cU as l,e as p,y as n,a as C,ey as D}from"./calcite-c5ae4991.js";import{y as A}from"./elevationInfoUtils-def3e352.js";import{f as I,b as R}from"./DimensionAnalysisView3D-afedf533.js";import{i as q,p as x}from"./queryEngineUtils-0c823715.js";import{r as v,a as G,n as d}from"./symbologySnappingCandidates-80133064.js";import"./index-9a6385f7.js";import"./LineVisualElement-520cb14e.js";import"./MediaLayerVideo-b25b4fca.js";import"./sphere-5ce3b13c.js";import"./mat3f64-50f3b9f6.js";import"./mat4f64-abdda1bb.js";import"./quatf64-f8f1c132.js";import"./Util-2b929b00.js";import"./plane-6ecad71b.js";import"./spatialReferenceEllipsoidUtils-87122df3.js";import"./scaleUtils-a8d07219.js";import"./ElevationSamplerData-41a54d7d.js";import"./objectResourceUtils-8fb711c9.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-bc307796.js";import"./vec33-164586fc.js";import"./DefaultMaterial_COLOR_GAMMA-941dbf6c.js";import"./types-e1c0a5bf.js";import"./enums-e2e92c86.js";import"./Version-e2fa8281.js";import"./quat-8dcd84de.js";import"./resourceUtils-527631ac.js";import"./basicInterfaces-7449a8bf.js";import"./Indices-84de656e.js";import"./NestedMap-1b5db22e.js";import"./requestImageUtils-67552ee5.js";import"./symbolColorUtils-14fb8f64.js";import"./VertexAttribute-15d1866a.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./OrderIndependentTransparency-5f7257d7.js";import"./Texture-3d2bcec7.js";import"./FramebufferObject-d9042b3f.js";import"./VertexElementDescriptor-2925c6af.js";import"./InterleavedLayout-45bbbdfe.js";import"./vec3f32-01c06d8d.js";import"./Octree-65a3a6a2.js";import"./edgeProcessing-fca251f2.js";import"./deduplicate-54cc928a.js";import"./MeshComponent-9e26db57.js";import"./earcut-61f7b102.js";import"./imageUtils-c2d0d1ae.js";import"./projection-425e8064.js";import"./ZoomMomentumEstimator-f0d7cb62.js";import"./floatRGBA-2dd25736.js";import"./dehydratedFeatures-ce9ee959.js";import"./quantizationUtils-a15bd53f.js";import"./labelFormatUtils-2486d06e.js";import"./orientedBoundingBox-d2c06194.js";import"./quatf32-51a323b8.js";import"./SnappingCandidate-970faec6.js";import"./callExpressionWithFeature-94cb1131.js";import"./DefaultVertexAttributeLayouts-5f20d8dd.js";import"./geometryServiceUtils-b1997a16.js";import"./project-0e0370f9.js";import"./LercDecoder-25ed2639.js";import"./VectorTile-ade0a955.js";import"./enums-fb086c25.js";import"./config-1337d16e.js";import"./TiledDisplayObject-0268aa47.js";import"./DisplayObject-b5071d0a.js";import"./rasterUtils-0aabb0e8.js";import"./resources-4ce48b80.js";import"./workerHelper-33dafb63.js";import"./webgl-debug-7f880832.js";import"./RenderingContext-f0258ff2.js";import"./ProgramCache-ddf14e3e.js";import"./Program-2221c2b1.js";import"./MediaLayer-faedb24a.js";import"./MediaElementView-92573d58.js";import"./normalizeUtilsSync-f9670301.js";import"./resourceExtension-a1892050.js";import"./BoundsStore-32c0ea98.js";import"./PooledRBush-52d39e88.js";import"./prism-line-numbers-713161a8.js";import"./label2-e5a29f4c.js";import"./interactive-1de2e238.js";import"./loadable-6afd516d.js";import"./t9n-b59ffad1.js";import"./observers-c89705b8.js";import"./icon-179b3e31.js";import"./loader-dc9b20b1.js";import"./guid-51402ee7.js";import"./LengthDimension-f30ab776.js";import"./Segment-dbfb173b.js";import"./analysisViewUtils-ad794640.js";import"./ImageMaterial-b8486f1d.js";import"./Factory-7ff71f8e.js";import"./RightAngleQuadVisualElement-2c22a714.js";import"./VisualElementResources-de04f9e5.js";import"./PointVisualElement-e21f219e.js";import"./colorUtils-c0f43caf.js";import"./EditGeometryOperations-59135cd9.js";import"./QueryEngineResult-7bb9e34b.js";import"./WhereClause-19168e5f.js";import"./executionError-fb3f283a.js";import"./utils-d04d4fee.js";import"./generateRendererUtils-0781e0f0.js";import"./projectionSupport-c2c1f4b7.js";import"./json-48e3ea08.js";import"./utils-d27f2aa1.js";import"./dehydratedFeatureComparison-52788bbf.js";import"./RenderTexture-4c0a650d.js";import"./VertexSnappingCandidate-a79ea0a5.js";let e=class extends ${get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:t}=this,{layer:i}=this.layerSource,o=a(t)&&t.type==="3d";if(!o||i.type==="subtype-group")return v();const r=async(m,s)=>(await D(t.whenLayerView(i),s)).elevationAlignPointsInFeatures(m,s);return v(o,{elevationInfo:i.elevationInfo,alignPointsInFeatures:r,spatialReference:t.spatialReference})}get _snappingElevationFilter(){const{view:t}=this,i=a(t)&&t.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return G(i)}get _symbologySnappingFetcher(){const{view:t}=this,{layer:i}=this.layerSource;return a(t)&&t.type==="3d"&&i.type!=="subtype-group"?d(this._symbologySnappingSupported,async(o,r)=>{const m=await t.whenLayerView(i);return l(r),m.queryForSymbologySnapping({candidates:o,spatialReference:t.spatialReference},r)}):d()}get _symbologySnappingSupported(){return a(this._layerView3D)&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:t}=this,{layer:i}=this.layerSource;a(t)&&t.type==="3d"&&i.type!=="subtype-group"&&(t.whenLayerView(i).then(o=>this._layerView3D=o),this.addHandles([t.elevationProvider.on("elevation-change",({context:o})=>{const{elevationInfo:r}=i;A(o,r)&&this._snappingElevationAligner.notifyElevationSourceChange()}),c(()=>i.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),h),c(()=>{var o;return a(this._layerView3D)?(o=this._layerView3D.processor)==null?void 0:o.renderer:null},()=>this._symbologySnappingFetcher.notifySymbologyChange(),h),E(()=>{var o;return(o=F(this._layerView3D))==null?void 0:o.layer},["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())]))}constructor(t){super(t),this.view=null,this._layerView3D=null}refresh(){}async fetchCandidates(t,i){var u;const{layer:o}=this.layerSource,r=o.source;if(!(r!=null&&r.querySnapping))return[];const m=I(o),s=R(t,((u=V(this.view))==null?void 0:u.type)??"2d",m),S=await r.querySnapping(s,{signal:i});l(i);const y=await this._snappingElevationAligner.alignCandidates(S.candidates,i);l(i);const g=await this._symbologySnappingFetcher.fetch(y,i);l(i);const w=g.length===0?y:[...y,...g],f=this._snappingElevationFilter.filter(s,w),_=this._getGroundElevation;return f.map(b=>q(b,_))}get _getGroundElevation(){return x(this.view)}};p([n({constructOnly:!0})],e.prototype,"layerSource",void 0),p([n({constructOnly:!0})],e.prototype,"view",void 0),p([n()],e.prototype,"_snappingElevationAligner",null),p([n()],e.prototype,"_snappingElevationFilter",null),p([n()],e.prototype,"_symbologySnappingFetcher",null),p([n()],e.prototype,"_layerView3D",void 0),p([n()],e.prototype,"_symbologySnappingSupported",null),p([n()],e.prototype,"_getGroundElevation",null),e=p([C("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],e);export{e as FeatureCollectionSnappingSource};