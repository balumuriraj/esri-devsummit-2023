import{e as s,y as o,a as w,v as B,bd as _,p as P,c1 as x,R as $,h2 as T,w as q,$ as k,ad as D,a3 as A,l as u,ba as V,ep as C,gY as I,ac as S,j as R}from"./calcite-c5ae4991.js";import{m as U,y as z,h as F}from"./RasterVFDisplayObject-f4408de1.js";import{f as M}from"./LayerView2D-88fd32e8.js";import{a as O}from"./GraphicsView2D-8c34d0d6.js";import{n as j}from"./HighlightGraphicContainer-84e51d6f.js";import{T as J,x as G,d as H}from"./dataUtils-483ae467.js";import{a as L}from"./BitmapContainer-d9c6decd.js";import{h as N}from"./Container-c668494e.js";import{l as W}from"./Bitmap-e270b20f.js";import{v as Y}from"./ExportStrategy-e891c937.js";import{J as K}from"./rasterProjectionHelper-40d6d990.js";import{T as E}from"./enums-b1d611e3.js";import{a as Q}from"./WGLContainer-02cfa21d.js";import{m as X}from"./ImageryLayerView-0f399127.js";import{u as Z}from"./LayerView-d2d47806.js";import{i as tt}from"./RefreshableLayerView-3999328b.js";import"./index-9a6385f7.js";import"./FramebufferObject-d9042b3f.js";import"./enums-e2e92c86.js";import"./Texture-3d2bcec7.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLBrushVTLSymbol-67363b39.js";import"./DefaultVertexAttributeLayouts-5f20d8dd.js";import"./definitions-3ddd14a8.js";import"./number-b10bd8f5.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./DisplayObject-b5071d0a.js";import"./color-b3c5ad11.js";import"./MapView-c3d00f71.js";import"./unitBezier-881ac1eb.js";import"./TileStrategy-6e83933b.js";import"./TileStore-bec0a021.js";import"./TileInfoView-c5645cd8.js";import"./ClipRect-c491bd72.js";import"./cimAnalyzer-d4821ac0.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./alignmentUtils-ae955d28.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-94cb1131.js";import"./quantizationUtils-a15bd53f.js";import"./floatRGBA-2dd25736.js";import"./normalizeUtilsSync-f9670301.js";import"./projectionSupport-c2c1f4b7.js";import"./json-48e3ea08.js";import"./AttributeStoreView-1b0e85f6.js";import"./TiledDisplayObject-0268aa47.js";import"./visualVariablesUtils-7d174a95.js";import"./visualVariablesUtils-42287514.js";import"./MaterialKey-1f5dd6e2.js";import"./Matcher-5075bcf0.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-33c077a4.js";import"./earcut-61f7b102.js";import"./ExpandedCIM-e70c558e.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-0cd2ddb2.js";import"./utils-d084e5dc.js";import"./util-96b92fc2.js";import"./ComputedAttributeStorage-fb7b7196.js";import"./arcadeTimeUtils-96d04d57.js";import"./executionError-fb3f283a.js";import"./centroid-b9acbfa6.js";import"./GraphicsView-6e05d316.js";import"./BaseGraphicContainer-aa1bc280.js";import"./FeatureContainer-679297bc.js";import"./TileContainer-dabd955d.js";import"./vec3f32-01c06d8d.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-f39983cc.js";import"./Program-2221c2b1.js";import"./heatmapTextureUtils-7a5994f1.js";import"./popupUtils-bf43aa1c.js";let h=class extends B{constructor(){super(...arguments),this.attached=!1,this.container=new N,this.updateRequested=!1,this.type="imagery",this._bitmapView=new L}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch(e=>{_(e)||P.getLogger(this.declaredClass).error(e)})}hitTest(t){return new x({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,e=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new Y({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:e,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async t=>{const{source:e}=t;if(!e||e instanceof ImageBitmap)return;const i=await this.layer.applyRenderer({extent:e.extent,pixelBlock:e.originalPixelBlock??e.pixelBlock});e.filter=r=>this.layer.pixelFilter?this.layer.applyFilter(r):{...i,extent:e.extent}}).catch(t=>{_(t)||P.getLogger(this.declaredClass).error(t)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(t.length===1&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const e=this.view.extent,i=t.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(e)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),r=J(i,e);return $(r)?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}async _fetchImage(t,e,i,r){var d;(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,r.returnImageBitmap=!0;const a=await this.layer.fetchImage(t,e,i,r);if(a.imageBitmap)return a.imageBitmap;const n=await this.layer.applyRenderer(a.pixelData,{signal:r.signal}),l=new W(n.pixelBlock,(d=n.extent)==null?void 0:d.clone(),a.pixelData.pixelBlock);return l.filter=y=>this.layer.applyFilter(y),l}};s([o()],h.prototype,"attached",void 0),s([o()],h.prototype,"container",void 0),s([o()],h.prototype,"layer",void 0),s([o()],h.prototype,"strategy",void 0),s([o()],h.prototype,"timeExtent",void 0),s([o()],h.prototype,"view",void 0),s([o()],h.prototype,"updateRequested",void 0),s([o()],h.prototype,"updating",null),s([o()],h.prototype,"type",void 0),h=s([w("esri.views.2d.layers.imagery.ImageryView2D")],h);const et=h;class it extends Q{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[U],target:()=>this.children,drawPhase:E.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===E.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let m=class extends B{constructor(t){super(t),this._loading=null,this.update=T((e,i)=>this._update(e,i).catch(r=>{_(r)||P.getLogger(this.declaredClass).error(r)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:a}=t.state,n=new q({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[l,d]=t.state.size;this._loading=this.fetchPixels(n,l,d,i);const y=await this._loading;this._addToDisplay(y,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(k(t.pixelBlock))return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=t,n=new z(a);n.offset=[0,0],n.symbolizerParameters=e,n.rawPixelData=t,n.invalidateVAO(),n.x=r.xmin,n.y=r.ymax,n.pixelRatio=i.pixelRatio,n.rotation=i.rotation,n.resolution=i.resolution,n.width=a.width*e.symbolTileSize,n.height=a.height*e.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(n)}};s([o()],m.prototype,"fetchPixels",void 0),s([o()],m.prototype,"container",void 0),s([o()],m.prototype,"_loading",void 0),s([o()],m.prototype,"updating",null),m=s([w("esri.views.2d.layers.imagery.ImageryVFStrategy")],m);const rt=m;let p=class extends D{constructor(){super(...arguments),this.attached=!1,this.container=new it,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:n}=this.layer.renderer,{extent:l,width:d,height:y}=G(t,e,i,n,a);if($(a)&&!a.intersects(t))return{extent:l,pixelBlock:null};const v={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:n,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(v)){const c=this.getPixelData();if($(c)&&`${c.extent.xmin}, ${c.extent.ymin}, ${c.extent.xmax}, ${c.extent.ymax}`===v.bbox)return c}const{pixelData:f}=await this.layer.fetchImage(l,d,y,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=v;const b=f==null?void 0:f.pixelBlock;return k(b)?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?A(H(b,"vector-uv")):b}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new rt({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(u(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),V),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.handles.remove("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const t=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:i}=t;return{extent:e,pixelBlock:i}}hitTest(t){return new x({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams)}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,a=this._dataParameters.bbox===t.bbox;return e&&i&&r&&a}async _getProjectedFullExtent(t){try{return await K(this.layer.fullExtent,t)}catch{try{const i=(await C(this.layer.url,{query:{option:"footprints",outSR:t.wkid||JSON.stringify(t.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?q.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([o()],p.prototype,"attached",void 0),s([o()],p.prototype,"container",void 0),s([o()],p.prototype,"layer",void 0),s([o()],p.prototype,"timeExtent",void 0),s([o()],p.prototype,"type",void 0),s([o()],p.prototype,"view",void 0),s([o()],p.prototype,"updating",null),p=s([w("esri.views.2d.layers.imagery.VectorFieldView2D")],p);const at=p;let g=class extends X(tt(M(Z))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new I,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}async hitTest(t,e){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(t),layer:this.layer,mapPoint:t}]:null}update(t){var e;(e=this.subview)==null||e.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new O({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new j(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([u(()=>this.layer.blendMode??"normal",t=>this.subview&&(this.subview.container.blendMode=t),V),u(()=>this.layer.effect??null,t=>this.subview&&(this.subview.container.effect=t),V),u(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},S),u(()=>this.timeExtent,t=>{const{subview:e}=this;e&&(e.timeExtent=t,"redraw"in e?this.requestUpdate():e.redrawOrRefetch())},S),this.layer.on("redraw",()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())}),u(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var t,e;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(t=this.subview)==null||t.destroy(),this.subview=null,(e=this._highlightView)==null||e.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:R.isCollection(t)?t.getItemAt(0):t)instanceof x))return{remove:()=>{}};let i=[];return Array.isArray(t)||R.isCollection(t)?i=t.map(r=>r.clone()):t instanceof x&&(i=[t.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var i,r;if(!this.view)return;const t=(i=this.layer.renderer)==null?void 0:i.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:a}=this.subview;if(a===e)return this._attachSubview(this.subview),void(a==="flow"?this.subview.redrawOrRefetch():a==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=e==="imagery"?new et({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new at({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new F({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0),t.container.blendMode=this.layer.blendMode,t.container.effect=this.layer.effect)}_detachSubview(t){t!=null&&t.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};s([o()],g.prototype,"pixelData",null),s([o()],g.prototype,"subview",void 0),g=s([w("esri.views.2d.layers.ImageryLayerView2D")],g);const Re=g;export{Re as default};
