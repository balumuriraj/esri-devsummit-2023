import{h2 as R,eA as T,b as y,$ as n,a7 as x,R as m,fE as M,nq as O,eb as G,e as p,y as E,a as S}from"./calcite-c5ae4991.js";import{u as $}from"./MediaElementView-92573d58.js";import{e as z,C as H,M as l,O as I,a6 as P,a5 as d}from"./MediaLayerVideo-b25b4fca.js";import{n as C}from"./LayerView3D-1f5cccf1.js";import{s as f}from"./symbolColorUtils-14fb8f64.js";import{D as A}from"./basicInterfaces-7449a8bf.js";import{J as b,$ as L}from"./objectResourceUtils-8fb711c9.js";import{O as s}from"./VertexAttribute-15d1866a.js";import{c as V}from"./ImageMaterial-b8486f1d.js";import{u as N}from"./LayerView-d2d47806.js";import{D}from"./enums-e2e92c86.js";import"./index-9a6385f7.js";import"./mat3f64-50f3b9f6.js";import"./normalizeUtilsSync-f9670301.js";import"./sphere-5ce3b13c.js";import"./mat4f64-abdda1bb.js";import"./quatf64-f8f1c132.js";import"./Util-2b929b00.js";import"./plane-6ecad71b.js";import"./spatialReferenceEllipsoidUtils-87122df3.js";import"./scaleUtils-a8d07219.js";import"./ElevationSamplerData-41a54d7d.js";import"./OrderIndependentTransparency-5f7257d7.js";import"./vec3f32-01c06d8d.js";import"./FramebufferObject-d9042b3f.js";import"./Texture-3d2bcec7.js";import"./Octree-65a3a6a2.js";import"./edgeProcessing-fca251f2.js";import"./deduplicate-54cc928a.js";import"./Indices-84de656e.js";import"./InterleavedLayout-45bbbdfe.js";import"./BufferView-bc307796.js";import"./types-e1c0a5bf.js";import"./VertexElementDescriptor-2925c6af.js";import"./MeshComponent-9e26db57.js";import"./earcut-61f7b102.js";import"./imageUtils-c2d0d1ae.js";import"./projection-425e8064.js";import"./quat-8dcd84de.js";import"./vec33-164586fc.js";import"./NestedMap-1b5db22e.js";import"./ZoomMomentumEstimator-f0d7cb62.js";import"./floatRGBA-2dd25736.js";import"./dehydratedFeatures-ce9ee959.js";import"./quantizationUtils-a15bd53f.js";import"./labelFormatUtils-2486d06e.js";import"./orientedBoundingBox-d2c06194.js";import"./quatf32-51a323b8.js";import"./SnappingCandidate-970faec6.js";import"./callExpressionWithFeature-94cb1131.js";import"./resourceUtils-527631ac.js";import"./DefaultVertexAttributeLayouts-5f20d8dd.js";import"./geometryServiceUtils-b1997a16.js";import"./project-0e0370f9.js";import"./DefaultMaterial_COLOR_GAMMA-941dbf6c.js";import"./Version-e2fa8281.js";import"./LercDecoder-25ed2639.js";import"./VectorTile-ade0a955.js";import"./enums-fb086c25.js";import"./config-1337d16e.js";import"./TiledDisplayObject-0268aa47.js";import"./DisplayObject-b5071d0a.js";import"./rasterUtils-0aabb0e8.js";import"./requestImageUtils-67552ee5.js";import"./resources-4ce48b80.js";import"./workerHelper-33dafb63.js";import"./webgl-debug-7f880832.js";import"./RenderingContext-f0258ff2.js";import"./ProgramCache-ddf14e3e.js";import"./Program-2221c2b1.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./MediaLayer-faedb24a.js";import"./resourceExtension-a1892050.js";import"./BoundsStore-32c0ea98.js";import"./PooledRBush-52d39e88.js";import"./prism-line-numbers-713161a8.js";import"./label2-e5a29f4c.js";import"./interactive-1de2e238.js";import"./loadable-6afd516d.js";import"./t9n-b59ffad1.js";import"./observers-c89705b8.js";import"./icon-179b3e31.js";import"./loader-dc9b20b1.js";import"./guid-51402ee7.js";import"./devEnvironmentUtils-5002a058.js";let o=class extends C(N){constructor(){super(...arguments),this.type="media-3d",this.drapeSourceType=z.RasterImage,this.updatePolicy=H.ASYNC,this._uidToElement=new Map,this._renderedElements=new Map,this._lastDrapingExtent=null,this._update=R(async(e,t,r)=>{const i=await this._collectMediaElements(e,t,r);this._synchronizeRenderElements(i)},0)}initialize(){this._renderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this);const e=()=>this._updateWithLastDrapingExtent();this.handles.add([T(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)),y(()=>this.layer.effectiveSource,"change",e),y(()=>this.layer.effectiveSource,"refresh",e)]),this.updatingHandles.add(()=>this.suspended,e)}setDrapingExtent(e,t){this._lastDrapingExtent={overlays:e,spatialReference:t},this._updateWithLastDrapingExtent()}getHit(e){const t=this._uidToElement.get(e);return t?{type:"media",element:t,layer:this.layer}:null}_updateWithLastDrapingExtent(){if(n(this._lastDrapingExtent)||this.suspended)return void(this._renderer&&this._synchronizeRenderElements(new Set));const{overlays:e,spatialReference:t}=this._lastDrapingExtent;this.updatingHandles.addPromise(this._update(e,t).catch(()=>{}))}async _collectMediaElements(e,t,r){const i=this.layer.effectiveSource;return n(i)?new Set:new Set((await Promise.all(e.map(a=>i.queryElements(x(a.extent,t),{signal:r})))).flat())}_synchronizeRenderElements(e){this._synchronizeRenderElementsRemove(e),this._synchronizeRenderElementsAdd(e)}_synchronizeRenderElementsRemove(e){const t=new Set,r=[];this._renderedElements.forEach((i,a)=>{e.has(a)||(t.add(a),m(i.renderData)&&r.push(i.renderData.renderGeometry),this._removeElement(a,i))}),this._renderer.removeGeometries(r,l.REMOVE)}_synchronizeRenderElementsAdd(e){for(const t of e)this._renderedElements.has(t)||this._createRenderElement(t)}_removeElement(e,{renderData:t,handle:r}){this._destroyRenderData(t),this._renderedElements.delete(e),this._uidToElement.delete(e.uid),r.remove()}async _createRenderElement(e){const t=new $({spatialReference:this.view.spatialReference,element:e}),r={renderData:null,handle:M([this.updatingHandles.add(()=>e.opacity,i=>{m(r.renderData)&&r.renderData.material.setParameters({opacity:i})}),this.updatingHandles.add(()=>t.coords,i=>{m(r.renderData)?this._updateGeometry(r,r.renderData,i):this._initializeRenderData(t,r)}),this.updatingHandles.add(()=>e.content,()=>this._initializeRenderData(t,r)),O(t)])};this._renderedElements.set(e,r),this._uidToElement.set(e.uid,e),this.updatingHandles.addPromise(e.load().catch(()=>{})),this._initializeRenderData(t,r)}_initializeRenderData(e,t){const{coords:r,element:i}=e;if(n(r)||n(i.content))return void(t.renderData=this._destroyRenderData(t.renderData));if(m(t.renderData))return;const a=this._createTexture(i.content);this.view._stage.add(a);const h=this.view._stage.loadImmediate(a);G(h)&&this.updatingHandles.addPromise(h);const c=new V({initTextureTransparent:!0,textureId:a.id,opacity:i.opacity,transparent:!0}),g=this._positionVertexBufferFromCoordinates(r),v=[0,0,1,0,1,1,0,1],u=[0,1,2,0,2,3],w=new b(c,[[s.POSITION,new f(g,3,!0)],[s.UV0,new f(v,2,!0)]],[[s.POSITION,u],[s.UV0,u]]),_=new I(w,{layerUid:this.layer.uid,graphicUid:i.uid});this._renderer.addGeometries([_],l.ADD),t.renderData={renderGeometry:_,texture:a,material:c}}_updateGeometry(e,t,r){if(n(r))return void(e.renderData=this._destroyRenderData(e.renderData));const i=this._positionVertexBufferFromCoordinates(r);t.renderGeometry.vertexAttributes.get(s.POSITION).data=i,this._renderer.modifyGeometries([t.renderGeometry],P.GEOMETRY)}_positionVertexBufferFromCoordinates(e){const[t,r,i,a]=e.rings[0];return[t[0],t[1],d,a[0],a[1],d,i[0],i[1],d,r[0],r[1],d]}_destroyRenderData(e){return n(e)||(this.view._stage.remove(e.texture),this._renderer.removeGeometries([e.renderGeometry],l.REMOVE),e.material.dispose()),null}_createTexture(e){const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,r=e instanceof HTMLImageElement?e.naturalHeight:e.height;return new L(e,{wrap:{s:D.CLAMP_TO_EDGE,t:D.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:t,height:r,mipmap:!0,powerOfTwoResizeMode:A.STRETCH,updateCallback:()=>this.view.basemapTerrain.overlayManager.setDrawTexturesDirty()})}get test(){const e=this;return{get numberOfElements(){return e._renderedElements.size}}}};p([E({readOnly:!0})],o.prototype,"type",void 0),p([E()],o.prototype,"layer",void 0),o=p([S("esri.views.3d.layers.MediaLayerView3D")],o);const ft=o;export{ft as default};