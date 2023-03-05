import{a3 as l,a4 as h,aM as g,aF as f,aN as w,aO as u,aP as n,ac as d,af as b}from"./index-b4cf3b73.js";import{f as S}from"./LayerView2D-5bc93afe.js";import{i as V}from"./GraphicContainer-df5c9c40.js";import{a as _}from"./GraphicsView2D-bccbc9d8.js";import{u as T}from"./LayerView-f81022d3.js";import"./Container-fab1a2a3.js";import"./definitions-3ddd14a8.js";import"./enums-b1d611e3.js";import"./BaseGraphicContainer-ce839b3f.js";import"./FeatureContainer-7b85c77c.js";import"./AttributeStoreView-81b7af7b.js";import"./visualVariablesUtils-63015825.js";import"./color-752fa5d6.js";import"./enums-4b2a86a0.js";import"./number-b10bd8f5.js";import"./visualVariablesUtils-6b119f5d.js";import"./TileContainer-c168e3c8.js";import"./WGLContainer-bac954ba.js";import"./WGLBrushVTLSymbol-7d080955.js";import"./StyleDefinition-7d58136b.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-a6820367.js";import"./MaterialKey-3da568a0.js";import"./alignmentUtils-ae955d28.js";import"./utils-1eb97cce.js";import"./heatmapTextureUtils-49707d55.js";import"./cimAnalyzer-e65ce43d.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./projectionSupport-62879cb5.js";import"./json-48e3ea08.js";import"./Matcher-25733e01.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-7b039596.js";import"./ExpandedCIM-01182823.js";import"./schemaUtils-e1be7382.js";import"./util-996c5940.js";import"./ComputedAttributeStorage-52cba58c.js";import"./arcadeTimeUtils-b1e1d27e.js";import"./executionError-fb3f283a.js";import"./centroid-86b8ef29.js";import"./GraphicsView-e89b83c3.js";let y=class extends S(T){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(t=>{const i=this._popupTemplates.get(t),s=t.hitTest(e);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=i;return s}).flat().map(t=>({type:"graphic",graphic:t,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:t}of e){const i=g.fromJSON(o),s=new f(i.features),p=t.drawingInfo,c=r?w.fromJSON(r):null,a=u(p.renderer),m=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new V(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=d([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const ge=y;export{ge as default};