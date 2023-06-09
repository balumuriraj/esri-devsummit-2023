import{a4 as u,bv as c,a1 as m,cd as y,r as g,aF as p,a3 as h,N as f,eO as b,ac as i,ad as o,af as v}from"./index-70f3b4f7.js";import{b as O,h as I,O as _,g as w,f as V,a as G,D as S}from"./Stop-ab226bb3.js";import{n as $}from"./LayerView3D-89128c5d.js";import{A as C}from"./GraphicsProcessor-7e99374a.js";import{l as P}from"./projectExtentUtils-16361ed0.js";import{r as R}from"./EventedSet-c451b6f5.js";import{u as D}from"./LayerView-dbe7c0ba.js";import"./Graphics3DObjectStates-650068ce.js";import"./optimizedFeatureQueryEngineAdapter-3374f556.js";import"./centroid-64edd0f5.js";function E(e){return e instanceof O||e instanceof I||e instanceof _||e instanceof w||e instanceof V||e instanceof G||e instanceof S}let r=class extends $(D){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new R,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new C({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.updatingHandles.addOnCollectionChange(()=>this._routeItems,e=>this._routeItemsChanged(e),u),this.addResolvingPromise(P(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.handles.add(c(()=>{var e,t;return(t=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:t.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){var e;this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",m(this.processor)),(e=this._get("_routeItems"))==null||e.destroy()}get _routeItems(){return new y({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,g(this.layer.routeInfo)?new p([this.layer.routeInfo]):null]})}_routeItemsChanged(e){if(e.removed.length){this.loadedGraphics.removeMany(e.removed.map(t=>{const s=this._byObjectID.get(t);return this._byObjectID.delete(t),s}));for(const t of e.removed)this.handles.remove(t)}if(e.added.length){this.loadedGraphics.addMany(e.added.map(t=>{const s=t.toGraphic();return this._byObjectID.set(t,s),s}));for(const t of e.added)this.handles.add([h(()=>t.geometry,(s,a)=>{this._updateGraphic(t,"geometry",s,a)}),h(()=>t.symbol,(s,a)=>{this._updateGraphic(t,"symbol",s,a)})],t)}}get legendEnabled(){var e;return this.canResume()&&!((e=this.processor)!=null&&e.frustumVisibilitySuspended)}getSuspendInfo(){var t,s;const e=super.getSuspendInfo();return e.outsideScaleRange=((t=this.processor)==null?void 0:t.scaleVisibilitySuspended)??!1,e.outsideOfView=((s=this.processor)==null?void 0:s.frustumVisibilitySuspended)??!1,e}async fetchPopupFeatures(e,t){var s;return((s=f(t))==null?void 0:s.clientGraphics)??[]}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var s;return(s=this.processor)==null?void 0:s.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}async queryGraphics(){return new p(this.loadedGraphics.toArray())}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return E(e)&&(e=this._byObjectID.get(e)),this.processor.highlight(e)}get updatePolicy(){var e;return((e=this.processor)==null?void 0:e.graphicsCore.effectiveUpdatePolicy)||b.SYNC}canResume(){var e;return super.canResume()&&!((e=this.processor)!=null&&e.scaleVisibilitySuspended)}isUpdating(){var e,t,s;return!(!((e=this.processor)!=null&&e.updating)&&((s=(t=this.view)==null?void 0:t.basemapTerrain)!=null&&s.ready))}get performanceInfo(){var e,t;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:((e=this.processor)==null?void 0:e.elevationAlignment.updating)??!1,visibilityFrustum:!((t=this.processor)!=null&&t.frustumVisibilitySuspended)}}_updateGraphic(e,t,s,a){var d;const l=this._byObjectID.get(e);l[t]=s,n.graphic=l,n.property=t,n.oldValue=a,n.newValue=s,(d=this.processor)==null||d.graphicsCore.graphicUpdateHandler(n)}};i([o()],r.prototype,"_routeItems",null),i([o()],r.prototype,"loadedGraphics",void 0),i([o({readOnly:!0})],r.prototype,"legendEnabled",null),i([o()],r.prototype,"layer",void 0),i([o({readOnly:!0})],r.prototype,"processor",void 0),i([o({type:Boolean})],r.prototype,"slicePlaneEnabled",void 0),r=i([v("esri.views.3d.layers.RouteLayerView3D")],r);const n={graphic:null,property:null,oldValue:null,newValue:null},M=r;export{M as default};