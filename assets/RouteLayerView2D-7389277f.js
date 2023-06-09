import{j as l,eW as d,R as o,h as u,$ as _,l as g,e as n,y as c,a as w}from"./calcite-c5ae4991.js";import{b as y,h as f,O as k,g as M,f as v,a as I,D as V}from"./Stop-878a30b0.js";import{f as G}from"./LayerView2D-88fd32e8.js";import{i as F}from"./GraphicContainer-fb73dd69.js";import{a as H}from"./GraphicsView2D-8c34d0d6.js";import{u as C}from"./LayerView-d2d47806.js";import"./index-9a6385f7.js";import"./Container-c668494e.js";import"./DisplayObject-b5071d0a.js";import"./definitions-3ddd14a8.js";import"./enums-e2e92c86.js";import"./Texture-3d2bcec7.js";import"./MapView-c3d00f71.js";import"./unitBezier-881ac1eb.js";import"./TileStrategy-6e83933b.js";import"./TileStore-bec0a021.js";import"./TileInfoView-c5645cd8.js";import"./ClipRect-c491bd72.js";import"./enums-b1d611e3.js";import"./BaseGraphicContainer-aa1bc280.js";import"./FeatureContainer-679297bc.js";import"./AttributeStoreView-1b0e85f6.js";import"./TiledDisplayObject-0268aa47.js";import"./visualVariablesUtils-7d174a95.js";import"./color-b3c5ad11.js";import"./enums-4b2a86a0.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-b10bd8f5.js";import"./visualVariablesUtils-42287514.js";import"./FramebufferObject-d9042b3f.js";import"./TileContainer-dabd955d.js";import"./WGLContainer-02cfa21d.js";import"./WGLBrushVTLSymbol-67363b39.js";import"./DefaultVertexAttributeLayouts-5f20d8dd.js";import"./StyleDefinition-7d58136b.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-f39983cc.js";import"./Program-2221c2b1.js";import"./MaterialKey-1f5dd6e2.js";import"./alignmentUtils-ae955d28.js";import"./utils-d084e5dc.js";import"./heatmapTextureUtils-7a5994f1.js";import"./earcut-61f7b102.js";import"./vec3f32-01c06d8d.js";import"./cimAnalyzer-d4821ac0.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-94cb1131.js";import"./quantizationUtils-a15bd53f.js";import"./floatRGBA-2dd25736.js";import"./normalizeUtilsSync-f9670301.js";import"./projectionSupport-c2c1f4b7.js";import"./json-48e3ea08.js";import"./Matcher-5075bcf0.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-33c077a4.js";import"./ExpandedCIM-e70c558e.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-0cd2ddb2.js";import"./util-96b92fc2.js";import"./ComputedAttributeStorage-fb7b7196.js";import"./arcadeTimeUtils-96d04d57.js";import"./executionError-fb3f283a.js";import"./centroid-b9acbfa6.js";import"./GraphicsView-6e05d316.js";const b=Object.freeze({remove(){},pause(){},resume(){}}),U=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],a={graphic:null,property:null,oldValue:null,newValue:null};function m(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof v||t instanceof I||t instanceof V}function $(t){return l.isCollection(t)&&t.length&&m(t.getItemAt(0))}function O(t){return Array.isArray(t)&&t.length>0&&m(t[0])}let h=class extends G(C){constructor(){super(...arguments),this._graphics=new l,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new d({getCollections:()=>o(this.layer)&&!this.destroyed?[o(this.layer.routeInfo)?new l([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]:[]})}initialize(){this.updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(e=>!!e.popupTemplate)}highlight(t){let e;e=m(t)?[this._getNetworkFeatureUid(t)]:O(t)?t.map(r=>this._getNetworkFeatureUid(r)):$(t)?t.map(r=>this._getNetworkFeatureUid(r)).toArray():[t.uid];const i=e.filter(o);return i.length?(this._addHighlight(i),{remove:()=>this._removeHighlight(i)}):b}async hitTest(t,e){if(this.suspended)return null;const i=this._graphicsView.hitTest(t).filter(o).map(s=>this._networkGraphicMap.get(s));if(!i.length)return null;const{layer:r}=this;return i.reverse().map(s=>({type:"route",layer:r,mapPoint:t,networkFeature:s}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_createGraphic(t){const e=t.toGraphic();return e.layer=this.layer,e.sourceLayer=this.layer,e}_createGraphicsView(){const t=this.view,e=()=>this.requestUpdate(),i=new F(t.featuresTilingScheme);this._graphicsView=new H({container:i,graphics:this._graphics,requestUpdateCallback:e,view:t}),this.container.addChild(i),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const e=this._networkGraphicMap.get(t);return U.indexOf(e.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const e of t)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;i===0?this._highlightIds.delete(e):this._highlightIds.set(e,i)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(e=>{const i=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(i),i}));for(const e of t.removed)this.removeHandles(e)}if(t.added.length){this._graphics.addMany(t.added.map(e=>{const i=this._createGraphic(e);return _(i.symbol)?null:(this._networkFeatureMap.set(e,i),this._networkGraphicMap.set(i,e),i)}).filter(o));for(const e of t.added)this.addHandles([g(()=>e.geometry,(i,r)=>{this._updateGraphic(e,"geometry",i,r)}),g(()=>e.symbol,(i,r)=>{this._updateGraphic(e,"symbol",i,r)})],e);this._graphics.sort((e,i)=>this._getDrawOrder(e)-this._getDrawOrder(i))}}_updateGraphic(t,e,i,r){if(!this._networkFeatureMap.has(t)){const p=this._createGraphic(t);return this._networkFeatureMap.set(t,p),this._networkGraphicMap.set(p,t),void this._graphics.add(p)}const s=this._networkFeatureMap.get(t);s[e]=i,a.graphic=s,a.property=e,a.oldValue=r,a.newValue=i,this._graphicsView.graphicUpdateHandler(a)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};n([c()],h.prototype,"_graphics",void 0),n([c()],h.prototype,"_routeItems",null),h=n([w("esri.views.2d.layers.RouteLayerView2D")],h);const Wt=h;export{Wt as default};