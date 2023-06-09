import{h,ab as u,ai as c,eW as y,R as g,j as l,l as d,a3 as f,e as o,y as s,a as b}from"./calcite-c5ae4991.js";import{b as v,h as O,O as I,g as _,f as w,a as V,D as G}from"./Stop-878a30b0.js";import{n as S}from"./LayerView3D-1f5cccf1.js";import{A as $}from"./GraphicsProcessor-26b9588e.js";import{l as C}from"./projectExtentUtils-c85d0d8b.js";import{r as R}from"./EventedSet-916d5a8d.js";import{C as P}from"./MediaLayerVideo-b25b4fca.js";import{u as j}from"./LayerView-d2d47806.js";import"./index-9a6385f7.js";import"./Graphics3DObjectStates-b5c5b0ef.js";import"./dehydratedFeatures-ce9ee959.js";import"./quantizationUtils-a15bd53f.js";import"./optimizedFeatureQueryEngineAdapter-5d25bc4d.js";import"./centroid-b9acbfa6.js";import"./PooledRBush-52d39e88.js";import"./basicInterfaces-7449a8bf.js";import"./geometryServiceUtils-b1997a16.js";import"./project-0e0370f9.js";import"./sphere-5ce3b13c.js";import"./mat3f64-50f3b9f6.js";import"./mat4f64-abdda1bb.js";import"./quatf64-f8f1c132.js";import"./Util-2b929b00.js";import"./plane-6ecad71b.js";import"./spatialReferenceEllipsoidUtils-87122df3.js";import"./scaleUtils-a8d07219.js";import"./ElevationSamplerData-41a54d7d.js";import"./objectResourceUtils-8fb711c9.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-bc307796.js";import"./vec33-164586fc.js";import"./DefaultMaterial_COLOR_GAMMA-941dbf6c.js";import"./types-e1c0a5bf.js";import"./enums-e2e92c86.js";import"./Version-e2fa8281.js";import"./quat-8dcd84de.js";import"./resourceUtils-527631ac.js";import"./Indices-84de656e.js";import"./NestedMap-1b5db22e.js";import"./requestImageUtils-67552ee5.js";import"./symbolColorUtils-14fb8f64.js";import"./VertexAttribute-15d1866a.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./OrderIndependentTransparency-5f7257d7.js";import"./Texture-3d2bcec7.js";import"./FramebufferObject-d9042b3f.js";import"./VertexElementDescriptor-2925c6af.js";import"./InterleavedLayout-45bbbdfe.js";import"./vec3f32-01c06d8d.js";import"./Octree-65a3a6a2.js";import"./edgeProcessing-fca251f2.js";import"./deduplicate-54cc928a.js";import"./MeshComponent-9e26db57.js";import"./earcut-61f7b102.js";import"./imageUtils-c2d0d1ae.js";import"./projection-425e8064.js";import"./ZoomMomentumEstimator-f0d7cb62.js";import"./floatRGBA-2dd25736.js";import"./labelFormatUtils-2486d06e.js";import"./orientedBoundingBox-d2c06194.js";import"./quatf32-51a323b8.js";import"./SnappingCandidate-970faec6.js";import"./callExpressionWithFeature-94cb1131.js";import"./DefaultVertexAttributeLayouts-5f20d8dd.js";import"./LercDecoder-25ed2639.js";import"./VectorTile-ade0a955.js";import"./enums-fb086c25.js";import"./config-1337d16e.js";import"./TiledDisplayObject-0268aa47.js";import"./DisplayObject-b5071d0a.js";import"./rasterUtils-0aabb0e8.js";import"./resources-4ce48b80.js";import"./workerHelper-33dafb63.js";import"./webgl-debug-7f880832.js";import"./RenderingContext-f0258ff2.js";import"./ProgramCache-ddf14e3e.js";import"./Program-2221c2b1.js";import"./MediaLayer-faedb24a.js";import"./MediaElementView-92573d58.js";import"./normalizeUtilsSync-f9670301.js";import"./resourceExtension-a1892050.js";import"./BoundsStore-32c0ea98.js";import"./prism-line-numbers-713161a8.js";import"./label2-e5a29f4c.js";import"./interactive-1de2e238.js";import"./loadable-6afd516d.js";import"./t9n-b59ffad1.js";import"./observers-c89705b8.js";import"./icon-179b3e31.js";import"./loader-dc9b20b1.js";import"./guid-51402ee7.js";function D(t){return t instanceof v||t instanceof O||t instanceof I||t instanceof _||t instanceof w||t instanceof V||t instanceof G}let i=class extends S(j){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new R,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new $({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),h),this.addResolvingPromise(C(this).then(t=>this.fullExtentInLocalViewSpatialReference=t)),this.handles.add(u(()=>{var t,e;return(e=(t=this.view)==null?void 0:t.basemapTerrain)==null?void 0:e.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){var t;this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",c(this.processor)),(t=this._get("_routeItems"))==null||t.destroy()}get _routeItems(){return new y({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,g(this.layer.routeInfo)?new l([this.layer.routeInfo]):null]})}_routeItemsChanged(t){if(t.removed.length){this.loadedGraphics.removeMany(t.removed.map(e=>{const r=this._byObjectID.get(e);return this._byObjectID.delete(e),r}));for(const e of t.removed)this.handles.remove(e)}if(t.added.length){this.loadedGraphics.addMany(t.added.map(e=>{const r=e.toGraphic();return this._byObjectID.set(e,r),r}));for(const e of t.added)this.handles.add([d(()=>e.geometry,(r,p)=>{this._updateGraphic(e,"geometry",r,p)}),d(()=>e.symbol,(r,p)=>{this._updateGraphic(e,"symbol",r,p)})],e)}}get legendEnabled(){var t;return this.canResume()&&!((t=this.processor)!=null&&t.frustumVisibilitySuspended)}getSuspendInfo(){var e,r;const t=super.getSuspendInfo();return t.outsideScaleRange=((e=this.processor)==null?void 0:e.scaleVisibilitySuspended)??!1,t.outsideOfView=((r=this.processor)==null?void 0:r.frustumVisibilitySuspended)??!1,t}async fetchPopupFeatures(t,e){var r;return((r=f(e))==null?void 0:r.clientGraphics)??[]}getHit(t){return this.processor.getHit(t)}whenGraphicBounds(t,e){return this.processor.whenGraphicBounds(t,e)}computeAttachmentOrigin(t,e){var r;return(r=this.processor)==null?void 0:r.computeAttachmentOrigin(t,e)}getSymbolLayerSize(t,e){return this.processor.getSymbolLayerSize(t,e)}async queryGraphics(){return new l(this.loadedGraphics.toArray())}maskOccludee(t){return this.processor.maskOccludee(t)}highlight(t){return D(t)&&(t=this._byObjectID.get(t)),this.processor.highlight(t)}get updatePolicy(){var t;return((t=this.processor)==null?void 0:t.graphicsCore.effectiveUpdatePolicy)||P.SYNC}canResume(){var t;return super.canResume()&&!((t=this.processor)!=null&&t.scaleVisibilitySuspended)}isUpdating(){var t,e,r;return!(!((t=this.processor)!=null&&t.updating)&&((r=(e=this.view)==null?void 0:e.basemapTerrain)!=null&&r.ready))}get performanceInfo(){var t,e;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:((t=this.processor)==null?void 0:t.elevationAlignment.updating)??!1,visibilityFrustum:!((e=this.processor)!=null&&e.frustumVisibilitySuspended)}}_updateGraphic(t,e,r,p){var m;const n=this._byObjectID.get(t);n[e]=r,a.graphic=n,a.property=e,a.oldValue=p,a.newValue=r,(m=this.processor)==null||m.graphicsCore.graphicUpdateHandler(a)}};o([s()],i.prototype,"_routeItems",null),o([s()],i.prototype,"loadedGraphics",void 0),o([s({readOnly:!0})],i.prototype,"legendEnabled",null),o([s()],i.prototype,"layer",void 0),o([s({readOnly:!0})],i.prototype,"processor",void 0),o([s({type:Boolean})],i.prototype,"slicePlaneEnabled",void 0),i=o([b("esri.views.3d.layers.RouteLayerView3D")],i);const a={graphic:null,property:null,oldValue:null,newValue:null},ge=i;export{ge as default};
