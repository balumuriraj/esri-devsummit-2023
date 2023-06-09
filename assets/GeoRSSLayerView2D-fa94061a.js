import{l as h,h as l,g_ as g,j as f,g$ as w,h0 as u,h1 as n,e as d,a as b}from"./calcite-c5ae4991.js";import{f as S}from"./LayerView2D-88fd32e8.js";import{i as V}from"./GraphicContainer-fb73dd69.js";import{a as _}from"./GraphicsView2D-8c34d0d6.js";import{u as T}from"./LayerView-d2d47806.js";import"./index-9a6385f7.js";import"./Container-c668494e.js";import"./DisplayObject-b5071d0a.js";import"./definitions-3ddd14a8.js";import"./enums-e2e92c86.js";import"./Texture-3d2bcec7.js";import"./MapView-c3d00f71.js";import"./unitBezier-881ac1eb.js";import"./TileStrategy-6e83933b.js";import"./TileStore-bec0a021.js";import"./TileInfoView-c5645cd8.js";import"./ClipRect-c491bd72.js";import"./enums-b1d611e3.js";import"./BaseGraphicContainer-aa1bc280.js";import"./FeatureContainer-679297bc.js";import"./AttributeStoreView-1b0e85f6.js";import"./TiledDisplayObject-0268aa47.js";import"./visualVariablesUtils-7d174a95.js";import"./color-b3c5ad11.js";import"./enums-4b2a86a0.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-b10bd8f5.js";import"./visualVariablesUtils-42287514.js";import"./FramebufferObject-d9042b3f.js";import"./TileContainer-dabd955d.js";import"./WGLContainer-02cfa21d.js";import"./WGLBrushVTLSymbol-67363b39.js";import"./DefaultVertexAttributeLayouts-5f20d8dd.js";import"./StyleDefinition-7d58136b.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-f39983cc.js";import"./Program-2221c2b1.js";import"./MaterialKey-1f5dd6e2.js";import"./alignmentUtils-ae955d28.js";import"./utils-d084e5dc.js";import"./heatmapTextureUtils-7a5994f1.js";import"./earcut-61f7b102.js";import"./vec3f32-01c06d8d.js";import"./cimAnalyzer-d4821ac0.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-94cb1131.js";import"./quantizationUtils-a15bd53f.js";import"./floatRGBA-2dd25736.js";import"./normalizeUtilsSync-f9670301.js";import"./projectionSupport-c2c1f4b7.js";import"./json-48e3ea08.js";import"./Matcher-5075bcf0.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-33c077a4.js";import"./ExpandedCIM-e70c558e.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-0cd2ddb2.js";import"./util-96b92fc2.js";import"./ComputedAttributeStorage-fb7b7196.js";import"./arcadeTimeUtils-96d04d57.js";import"./executionError-fb3f283a.js";import"./centroid-b9acbfa6.js";import"./GraphicsView-6e05d316.js";let y=class extends S(T){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,e){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(r=>{const t=this._popupTemplates.get(r),s=r.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).flat().map(r=>({type:"graphic",graphic:r,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const e of this.graphicsViews)e.processUpdate(i)}attach(){this.addAttachHandles([h(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:e,featureSet:o,layerDefinition:r}of i){const t=g.fromJSON(o),s=new f(t.features),p=r.drawingInfo,c=e?w.fromJSON(e):null,m=u(p.renderer),a=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:m,container:new V(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=a,this._popupTemplates.set(a,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=m.symbol):this.layer.lineSymbol=m.symbol:this.layer.polygonSymbol=m.symbol,this.graphicsViews.push(a),this.container.addChild(a.container)}},l),h(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},l),h(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},l),h(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},l)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=d([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Li=y;export{Li as default};
