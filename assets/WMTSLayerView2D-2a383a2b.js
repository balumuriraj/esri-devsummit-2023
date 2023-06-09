import{l as w,gZ as f,bd as o,da as m,p as g,e as n,y as d,a as I}from"./calcite-c5ae4991.js";import{t as S,n as y}from"./imageUtils-ebb6795b.js";import{f as T}from"./LayerView2D-88fd32e8.js";import{h as V}from"./TileInfoView-c5645cd8.js";import{y as v,r as q}from"./TileStrategy-6e83933b.js";import{u as x}from"./LayerView-d2d47806.js";import{i as M}from"./RefreshableLayerView-3999328b.js";import"./index-9a6385f7.js";import"./BitmapTileContainer-0e6fbf5d.js";import"./Bitmap-e270b20f.js";import"./DisplayObject-b5071d0a.js";import"./enums-e2e92c86.js";import"./Texture-3d2bcec7.js";import"./TiledDisplayObject-0268aa47.js";import"./WGLContainer-02cfa21d.js";import"./definitions-3ddd14a8.js";import"./FramebufferObject-d9042b3f.js";import"./VertexElementDescriptor-2925c6af.js";import"./WGLBrushVTLSymbol-67363b39.js";import"./DefaultVertexAttributeLayouts-5f20d8dd.js";import"./enums-b1d611e3.js";import"./number-b10bd8f5.js";import"./StyleDefinition-7d58136b.js";import"./enums-4b2a86a0.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./color-b3c5ad11.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-f39983cc.js";import"./Program-2221c2b1.js";import"./MaterialKey-1f5dd6e2.js";import"./alignmentUtils-ae955d28.js";import"./utils-d084e5dc.js";import"./heatmapTextureUtils-7a5994f1.js";import"./Container-c668494e.js";import"./earcut-61f7b102.js";import"./TileContainer-dabd955d.js";import"./MapView-c3d00f71.js";import"./unitBezier-881ac1eb.js";import"./TileStore-bec0a021.js";import"./ClipRect-c491bd72.js";const R=[102113,102100,3857,3785,900913],b=[0,0];let a=class extends M(S(T(x))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this._tileRequests=new Map,this.layer=null}get tileMatrixSet(){const e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(e.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=e.id),e):null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){var t;const e=(t=this.tileMatrixSet)==null?void 0:t.tileInfo;e&&(this._tileInfoView=new V(e),this._fetchQueue=new v({tileInfoView:this._tileInfoView,concurrency:16,process:(i,s)=>this.fetchTile(i,s)}),this._tileStrategy=new q({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(w(()=>{var i,s;return[(s=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:s.styleId,this.tileMatrixSet]},()=>this._refresh())),super.attach())}detach(){var e,t;super.detach(),(e=this._tileStrategy)==null||e.destroy(),(t=this._fetchQueue)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(b,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}async doRefresh(){!this.attached||this.updateRequested||this.suspended||this._refresh()}isUpdating(){var e;return((e=this._fetchQueue)==null?void 0:e.updating)??!1}async fetchTile(e,t={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:s,resamplingLevel:r=0}=t;if(!i)return this._fetchImage(e,s);const l=new f(0,0,0,0);let u;try{await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:s}),u=await this._fetchImage(l,s)}catch(h){if(o(h))throw h;if(r<3){const p=this._tileInfoView.getTileParentId(e.id);if(p){const c=new f(p),_=await this.fetchTile(c,{...t,resamplingLevel:r+1});return y(this._tileInfoView,_,c,e)}}throw h}return y(this._tileInfoView,u,l,e)}canResume(){const e=super.canResume();return e&&this.tileMatrixSet!==null}supportsSpatialReference(e){var t;return((t=this.layer.activeLayer.tileMatrixSets)==null?void 0:t.some(i=>{var s;return m((s=i.tileInfo)==null?void 0:s.spatialReference,e)}))??!1}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){o(t)||g.getLogger(this.declaredClass).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}_refresh(){this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(e=>{if(!e.bitmap.source)return;const t={id:e.key.id,fulfilled:!1,promise:this._fetchQueue.push(e.key).then(i=>{e.bitmap.source=i}).catch(i=>{o(i)||(e.bitmap.source=null)}).finally(()=>{e.requestRender(),t.fulfilled=!0})};this._tileRequests.set(e,t)})}_getTileMatrixSetBySpatialReference(e){const t=this.view.spatialReference;if(!e.tileMatrixSets)return null;let i=e.tileMatrixSets.find(s=>{var r;return m((r=s.tileInfo)==null?void 0:r.spatialReference,t)});return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(s=>{var r;return R.includes(((r=s.tileInfo)==null?void 0:r.spatialReference.wkid)??-1)})),i}};n([d()],a.prototype,"_fetchQueue",void 0),n([d({readOnly:!0})],a.prototype,"tileMatrixSet",null),a=n([I("esri.views.2d.layers.WMTSLayerView2D")],a);const _e=a;export{_e as default};
