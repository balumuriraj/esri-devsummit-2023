import{ac as r,af as p}from"./index-45303bea.js";import{q as s}from"./DynamicLayerView3D-ab2e4a04.js";import{p as o}from"./MapImageLayerView-77a4bfac.js";import{S as a}from"./MapServiceLayerViewHelper-9cb626c8.js";import{a as m}from"./drapedUtils-2134a0ac.js";import"./LayerView3D-0ea597b1.js";import"./projectExtentUtils-c2df7c68.js";import"./ImageMaterial-015b7cb9.js";import"./LayerView-c85352ba.js";import"./RefreshableLayerView-5edb9496.js";import"./ExportImageParameters-5e015914.js";import"./floorFilterUtils-080a7cd2.js";import"./sublayerUtils-589242b8.js";import"./popupUtils-13c2c91e.js";let i=class extends o(s){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add(()=>this.exportImageVersion,()=>this.updatingHandles.addPromise(this.refreshDebounced())),this._popupHighlightHelper=new a({createFetchPopupFeaturesQueryGeometry:(t,e)=>m(t,e,this.view),layerView:this,updatingHandles:this.updatingHandles})}destroy(){var t;(t=this._popupHighlightHelper)==null||t.destroy()}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}getFetchOptions(){return{timeExtent:this.timeExtent}}};i=r([p("esri.views.3d.layers.MapImageLayerView3D")],i);const V=i;export{V as default};
