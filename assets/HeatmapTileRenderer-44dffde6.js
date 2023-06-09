import{oi as a,e as m,a as p,i0 as l}from"./calcite-8912bd40.js";import{n as h}from"./BitmapTileContainer-2aeebe21.js";import{o as d}from"./BaseTileRenderer-073a95dc.js";import"./index-00759e4a.js";import"./Bitmap-b524c69a.js";import"./DisplayObject-87c37b69.js";import"./enums-e2e92c86.js";import"./Texture-563cf5e5.js";import"./TiledDisplayObject-419c008b.js";import"./WGLContainer-9a32a1e6.js";import"./definitions-3ddd14a8.js";import"./FramebufferObject-8b18fc0c.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLBrushVTLSymbol-a588e1a9.js";import"./DefaultVertexAttributeLayouts-5f20d8dd.js";import"./enums-b1d611e3.js";import"./number-b10bd8f5.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./color-e324e445.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-646e3fe5.js";import"./Program-77209250.js";import"./MaterialKey-2c87dd06.js";import"./alignmentUtils-ae955d28.js";import"./utils-8b171ac3.js";import"./heatmapTextureUtils-56fc7bff.js";import"./Container-0797c889.js";import"./earcut-61f7b102.js";import"./TileContainer-13a45e9d.js";class c{constructor(){this.gradient=null,this.height=512,this.intensities=null,this.width=512}render(i){a(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let o=class extends d{constructor(t){super(t),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new h(t.tileInfoView)}createTile(t){const i=this._container.createTile(t);return this.tileInfoView.getTileCoords(i.bitmap,t),i.bitmap.resolution=this.tileInfoView.getTileResolution(t),i}onConfigUpdate(){const t=this.layer.renderer;if(t.type==="heatmap"){const{minDensity:i,maxDensity:r,colorStops:n}=t;this._intensityInfo.minDensity=i,this._intensityInfo.maxDensity=r,this._gradient=l(n),this.tiles.forEach(s=>{const e=s.bitmap.source;e&&(e.minDensity=i,e.maxDensity=r,e.gradient=this._gradient,s.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(t){t.addChild(this._container)}uninstall(t){this._container.removeAllChildren(),t.removeChild(this._container)}disposeTile(t){this._container.removeChild(t),t.destroy()}supportsRenderer(t){return t&&t.type==="heatmap"}onTileData(t){const i=this.tiles.get(t.tileKey);if(!i)return;const r=t.intensityInfo,{minDensity:n,maxDensity:s}=this._intensityInfo,e=i.bitmap.source||new c;e.intensities=r&&r.matrix||null,e.minDensity=n,e.maxDensity=s,e.gradient=this._gradient,i.bitmap.source=e,this._container.addChild(i),this._container.requestRender(),this.requestUpdate()}onTileError(t){console.error(t)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(t,i){return console.error(t),Promise.reject()}};o=m([p("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const M=o;export{M as default};