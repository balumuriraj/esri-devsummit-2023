import{r as o,aA as f,aF as w,a3 as p,a4 as n,bt as y,v as _,ac as V,af as v}from"./index-70f3b4f7.js";import{h as C}from"./Container-201dc79a.js";import{r as b}from"./GroupContainer-34c1091f.js";import{f as H}from"./LayerView2D-11475a48.js";import{i as g}from"./GraphicContainer-eb9bbc1c.js";import{a as m}from"./GraphicsView2D-298ab5be.js";import{u as $}from"./LayerView-dbe7c0ba.js";import"./definitions-3ddd14a8.js";import"./WGLContainer-4968865e.js";import"./WGLBrushVTLSymbol-669de8ac.js";import"./enums-b1d611e3.js";import"./number-b10bd8f5.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./GeometryUtils-dd03fc25.js";import"./color-67661bc2.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-9e2d966e.js";import"./MaterialKey-9c9a57fe.js";import"./alignmentUtils-ae955d28.js";import"./utils-c558dfba.js";import"./heatmapTextureUtils-f433008f.js";import"./BaseGraphicContainer-f91260ef.js";import"./FeatureContainer-e6b4658b.js";import"./AttributeStoreView-1e548269.js";import"./visualVariablesUtils-9bf46d17.js";import"./visualVariablesUtils-014e4cf2.js";import"./TileContainer-b5185df6.js";import"./cimAnalyzer-ee052f2c.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./projectionSupport-7c49b43b.js";import"./json-48e3ea08.js";import"./Matcher-508ea27b.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-332435a5.js";import"./ExpandedCIM-fb542f69.js";import"./schemaUtils-9a1a4186.js";import"./util-f29114ae.js";import"./ComputedAttributeStorage-2b0cf1ad.js";import"./arcadeTimeUtils-91385090.js";import"./executionError-fb3f283a.js";import"./centroid-64edd0f5.js";import"./GraphicsView-8ca83fa1.js";const d="sublayers",l="layerView",T=Object.freeze({remove(){},pause(){},resume(){}});let c=class extends H($){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new b}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){o(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():o(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(o(this._graphicsViewsFeatureCollectionMap)){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&a.popupTemplate&&(r.popupTemplate=a.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof f?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):w.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(o);return e!=null&&e.length?(this._addHighlight(e),{remove:()=>{this._removeHighlight(e)}}):T}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(o(e)&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new g(this.view.featuresTilingScheme),r=new m({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([p(()=>s.visible,h=>r.container.visible=h,n),p(()=>r.updating,()=>this.notifyChange("updating"),n)],l)}this._updateHighlight()}else o(this.layer.sublayers)&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),d)}detach(){this._destroyGraphicsViews(),this.removeHandles(d)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),_(this.layer.sublayers))return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new C,r=new g(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const h=new m({view:t,graphics:s.graphics,requestUpdateCallback:e,container:r});this.addHandles([s.on("graphic-update",h.graphicUpdateHandler),p(()=>s.visible,u=>h.container.visible=u,n),p(()=>h.updating,()=>this.notifyChange("updating"),n)],l),a.addChild(h.container),this.container.addChild(a),i.push(h)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};c=V([v("esri.views.2d.layers.MapNotesLayerView2D")],c);const yi=c;export{yi as default};