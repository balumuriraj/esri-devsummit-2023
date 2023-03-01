import{W as g,cY as u,r as p,N as f,v as y,mg as b,bd as I,ac as o,ad as h,af as v}from"./index-51930907.js";import{n as w}from"./LayerView3D-68bdf258.js";import{c as R}from"./TiledLayerView3D-5ca53d22.js";import{f as T}from"./ImageryTileLayerView-363e3eef.js";import{u as z}from"./LayerView-db7ff94b.js";import{i as x}from"./RefreshableLayerView-8ec9084b.js";import{a as S}from"./drapedUtils-0903c165.js";import"./rasterProjectionHelper-c7164d08.js";import"./popupUtils-0740bfd4.js";let s=class extends T(x(R(w(z)))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),this.fullExtent==null&&this.addResolvingPromise(Promise.reject(new g("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const e=u(()=>{var t,i;return(i=(t=this.view)==null?void 0:t.basemapTerrain)==null?void 0:i.tilingSchemeLocked}).then(()=>{const t=this.view.basemapTerrain.tilingScheme,i=this.layer.tileInfo,r=["png","png24","png32","jpg","mixed"].includes(i.format)&&t.compatibleWith(i);this.isAlignedMapTile=r;const l=r?i:t.toTileInfo();this.tileInfo=l,this.updatingHandles.add(()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition,this.layer.multidimensionalSubset,this.layer.rasterFunction,this.timeExtent],()=>this.refresh())});this.addResolvingPromise(e)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const e=document.createElement("canvas"),t=e.getContext("2d"),[i,r]=this.tileInfo.size;return e.width=i,e.height=r,t.clearRect(0,0,i,r),t.getImageData(0,0,i,r)}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get dataLevelRange(){const e=this.tileInfo.lods,t=this.layer.tileInfo.lods,i=e[0].scale,r=t[t.length-1].scale;return this.levelRangeFromScaleRange(i,r)}_getfullExtent(){return this.projectFullExtent(this.view.basemapTerrain&&p(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(e,t,i,r){const l=this.tileInfo,d=this._canSymbolizeInWebGL(),c={tileInfo:l,requestRawData:d,signal:f(r.signal),timeExtent:this.timeExtent,requestAsImageElement:this.isAlignedMapTile},n=await this.layer.fetchTile(e,t,i,c);if(n instanceof HTMLImageElement)return n;let m=n&&n.pixelBlock;if(y(m))return this._blankTile;if(!d&&(m=await this.layer.applyRenderer(n),y(m)))return this._blankTile;const a=new b([e,t,i],m,l.size[0],l.size[1]);return d?(a.symbolizerRenderer=this.layer.symbolizer.rendererJSON,a.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e)),a.transformGrid=n.transformGrid):a.isRendereredSource=!0,a.interpolation=this.layer.interpolation,a.bandIds=this.layer.bandIds,a}_getSymbolizerOptions(e){const t=this.tileInfo.lodAt(e).resolution;return{pixelBlock:null,isGCS:this.view.basemapTerrain&&p(this.view.basemapTerrain.spatialReference)?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:t,y:t},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(e){this._canSymbolizeInWebGL()&&JSON.stringify(e.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(e.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e.lij[0])))}createFetchPopupFeaturesQueryGeometry(e,t){return S(e,t,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){return I("3d").supportsTextureFloat&&this.layer.symbolizer.canRenderInWebGL}};o([h({readOnly:!0})],s.prototype,"_blankTile",null),o([h({readOnly:!0})],s.prototype,"imageFormatIsOpaque",null),o([h({readOnly:!0})],s.prototype,"hasMixedImageFormats",null),o([h({readOnly:!0})],s.prototype,"dataLevelRange",null),s=o([v("esri.views.3d.layers.ImageryTileLayerView3D")],s);const k=s;export{k as default};
