import{e as l,y as n,n as u}from"./cast-fcb46737.js";import{a as o}from"./Error-ec6249b9.js";import{t as g,r as d}from"./typedArrayUtil-4d7bb04c.js";import{j as f}from"./reactiveUtils-4dabbb80.js";import"./ArrayPool-a8ee9378.js";import{a9 as y,aa as v,ab as w}from"./index-a864af46.js";const L=m=>{let a=class extends m{get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataLevelRange(){const e=this.tileInfo.lods,i=e[0].scale,t=e[e.length-1].scale;return this.levelRangeFromScaleRange(i,t)}get displayLevelRange(){const e=this.tileInfo.lods,i=this.layer.minScale||e[0].scale,t=this.layer.maxScale||e[e.length-1].scale,r=this.levelRangeFromScaleRange(i,t);return this.layer.maxScale&&r.maxLevel++,r}getTileUrl(e,i,t){return this.layer.getTileUrl(e,i,t)}_addTilingSchemeMatchPromise(){if(g(this.fullExtent))return this.addResolvingPromise(Promise.reject(new o("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(d(e))return this.addResolvingPromise(Promise.reject(e));const i=f(()=>{var t,r;return(r=(t=this.view)==null?void 0:t.basemapTerrain)==null?void 0:r.tilingSchemeLocked}).then(()=>{const t=this.view.basemapTerrain.tilingScheme,r=this._getTileInfoCompatibilityError(this.tileInfo,t);if(r)throw r});this.addResolvingPromise(i)}_getTileInfoSupportError(e,i){const t=w(e,i,this.view.spatialReference,this.view.state.viewingMode);if(t){const r={layer:this.layer,error:t};let s;switch(t.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":s=new o("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",r);break;default:s=new o("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",r)}return s}return null}_getTileInfoCompatibilityError(e,i){return i.compatibleWith(e)?null:new o("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,i){const t={minLevel:0,maxLevel:1/0},r=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!r)return t;const s=r.levels[0],p=c=>{const h=Math.log(s.scale/c)/Math.LN2;return .5-Math.abs(.5-h%1)<1e-9?Math.round(h):Math.ceil(h)};return e!=null&&e>0&&(t.minLevel=Math.max(0,p(e))),i!=null&&i>0&&(t.maxLevel=Math.max(0,p(i))),t}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return l([n({readOnly:!0})],a.prototype,"imageFormatIsOpaque",null),l([n({readOnly:!0})],a.prototype,"updating",void 0),l([n(y)],a.prototype,"updatingProgress",void 0),l([n(v)],a.prototype,"updatingProgressValue",void 0),l([n()],a.prototype,"fullExtent",null),l([n({readOnly:!0})],a.prototype,"isOpaque",null),l([n({readOnly:!0})],a.prototype,"dataLevelRange",null),l([n({readOnly:!0})],a.prototype,"displayLevelRange",null),l([n()],a.prototype,"layer",void 0),l([n()],a.prototype,"tileInfo",void 0),a=l([u("esri.views.3d.layers.TiledLayerView3D")],a),a};export{L as c};
