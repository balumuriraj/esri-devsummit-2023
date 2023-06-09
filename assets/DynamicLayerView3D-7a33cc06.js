import{cD as S,cE as E,cG as W,h2 as k,bd as M,p as x,eA as K,$ as P,eE as B,Q as D,b$ as J,w as N,dg as Q,cw as Y,aj as H,ca as Z,ak as X,ae as U,dk as b,R as j,c4 as ee,cU as z,mK as te,eI as ae,cb as ie,e as _,y as R,a as re}from"./calcite-8912bd40.js";import{K as se,L as ne,e as oe,C as he,M as C,T as v,O as le}from"./MediaLayerVideo-42e60ea8.js";import{n as de}from"./LayerView3D-4128a20f.js";import{s as O}from"./symbolColorUtils-c9d24716.js";import{n as ce}from"./MeshComponent-788e605a.js";import{J as me,$ as ge}from"./objectResourceUtils-782953c3.js";import{O as p}from"./VertexAttribute-15d1866a.js";import{l as ue}from"./projectExtentUtils-e8c7cde0.js";import{c as fe}from"./ImageMaterial-e77d3ec9.js";import{u as pe}from"./LayerView-abbb3570.js";import{i as we}from"./RefreshableLayerView-e4d9e9c9.js";import{D as V}from"./enums-e2e92c86.js";function ye(a,e,t){const r=S(a)/E(a),i={width:t,height:t};return r>1.0001?i.height=t/r:r<.9999&&(i.width=t*r),i.width=Math.round(i.width/(S(a)/S(e))),i.height=Math.round(i.height/(E(a)/E(e))),i}function q(a,e){return se(a,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function _e(a,e,t){if(!W(e,t))return q(a,t);const r=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],i=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],h=t[2]-t[0],n=t[3]-t[1],s=i[0]>0&&i[2]>0?3:2,o=r[0]>0&&r[2]>0?3:2,l=(o+1)*(s+1),c=ce(3*l),m=ne(2*l),d=new Array(6*(o*s-1));let I=0,A=0,L=0,g=0,f=0;for(let w=0;w<4;w++){const T=r[w];if(T<=0)continue;let $=0;for(let y=0;y<4;y++){const G=i[y];G<=0||(c[A++]=t[0]+$,c[A++]=t[1]+I,c[A++]=-1,m[L++]=$/h,m[L++]=I/n,y<3&&w<3&&(y!==1||w!==1)&&(d[f++]=g,d[f++]=g+1,d[f++]=g+s+1,d[f++]=g+1,d[f++]=g+s+2,d[f++]=g+s+1),g++,$+=G)}I+=T}const F=new Array(d.length);return new me(a,[[p.POSITION,new O(c,3,!0)],[p.NORMAL,new O(xe,3,!0)],[p.UV0,new O(m,2,!0)]],[[p.POSITION,d],[p.NORMAL,F],[p.UV0,d]])}const xe=[0,0,1];let u=class extends we(de(pe)){constructor(){super(...arguments),this.drapeSourceType=oe.RasterImage,this.updatePolicy=he.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=k(async a=>{this.destroyed||await this._doRefresh(a).catch(e=>{M(e)||x.getLogger(this.declaredClass).error(e)})},2e3)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.handles.add(K(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(ue(this).then(a=>this._set("fullExtentInLocalViewSpatialReference",a))),this.updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler()),this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{})),this._isScaleRangeLayer()&&this.updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this.notifyChange("suspended"))}destroy(){this.clear()}setDrapingExtent(a,e){this._spatialReference=e,a.forEach(t=>{this._overlays[t.index]=t,this._updateImageExtent(t)})}_updateImageExtent(a){const e=this._clippedExtent(a.extent,Re);if(P(e))return;const t=ye(a.extent,e,a.resolution);let r=a.pixelRatio*this.view.state.pixelRatio;const{layer:i}=this;if("imageMaxWidth"in i&&i.imageMaxWidth!=null||"imageMaxHeight"in i&&i.imageMaxHeight!=null){const n=i.imageMaxWidth,s=i.imageMaxHeight;if(t.width>n){const o=n/t.width;t.height=Math.floor(t.height*o),t.width=n,r*=o}if(t.height>s){const o=s/t.height;t.width=Math.floor(t.width*o),t.height=s,r*=o}}const h=this._extents[a.index];h&&B(h.extent,e)&&this._imageSizeEquals(e,h.imageSize,t)||(this._extents[a.index]={extent:D(e),imageSize:t,pixelRatio:r},this.suspended||this._fetch(a.index).catch(n=>{M(n)||x.getLogger(this.declaredClass).error(n)}))}clear(){for(let a=0;a<this._images.length;a++)this._clearImage(a)}async doRefresh(){return this._doRefresh()}async _doRefresh(a){if(this.suspended)return;const e=[];for(let t=0;t<this._extents.length;t++)this._extents[t]&&e.push(this._fetch(t,a));await J(e)}canResume(){if(!super.canResume())return!1;const a=this.layer;if(this._isScaleRangeActive()){const{minScale:e,maxScale:t}=a.effectiveScaleRange,r=this.view.scale;if(r<t||e>0&&r>e)return!1}return!0}isUpdating(){return this._images.some(a=>!!a.loadingPromise)}async processResult(a,e,t){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(a.image=e)}findExtentInfoAt(a){for(const e of this._extents){const t=e.extent;if(new N(t[0],t[1],t[2],t[3],this._spatialReference).contains(a))return e}return null}getFetchOptions(){}async redraw(a,e){await Q(this._images,async(t,r)=>{t&&(await a(t,e),await this._createStageObjects(r,t.image,e))})}_imageSizeEquals(a,e,t){if(!this.maximumDataResolution)return!1;const r=S(a)/this.maximumDataResolution.x,i=E(a)/this.maximumDataResolution.y,h=r/e.width,n=i/e.height,s=r/t.width,o=i/t.height,l=Math.abs(h-s),c=Math.abs(n-o),m=Y.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return l<=m&&c<=m}async _fetch(a,e){if(this.suspended)return;const t=this._extents[a],r=t.extent;this._images[a]||(this._images[a]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:D(r)});const i=this._images[a];i.loadingAbortController=H(i.loadingAbortController);const h=new N(r[0],r[1],r[2],r[3],this._spatialReference);if(h.width===0||h.height===0)return void this._clearImage(a);const n=new AbortController;i.loadingAbortController=n,Z(e,()=>n.abort());const s=n.signal,o=this._waitFetchReady(s).then(async()=>{const l={requestAsImageElement:!0,pixelRatio:this._overlays[a].pixelRatio,...this.getFetchOptions(),signal:s},{height:c,width:m}=t.imageSize;return this.layer.fetchImage(h,m,c,l)}).then(l=>{if(X(s))throw x.getLogger(this.declaredClass).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),U();return this.processResult(i,l)}).then(()=>{b(i.renderExtent,r)}).finally(()=>{o===i.loadingPromise&&(i.loadingPromise=null,i.loadingAbortController=null)});i.loadingPromise=o,this.notifyChange("updating"),await o.then(async()=>{if(s.aborted)throw U();await this._createStageObjects(a,i.image,s),this.notifyChange("updating")}).catch(l=>{throw l&&!M(l)&&x.getLogger(this.declaredClass).error(l),this.notifyChange("updating"),l})}_clearImage(a){const e=this._images[a];if(e){j(e.renderGeometry)&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],C.UPDATE),e.renderGeometry=null);const t=this.view._stage;t.remove(e.texture),e.texture=null,t.remove(e.material),e.material=null,e.loadingAbortController=H(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}async _createStageObjects(a,e,t){const r=this.view._stage,i=this._images[a],h=()=>{r.remove(i.texture),i.texture=null,j(i.renderGeometry)&&(this._drapeSourceRenderer.removeGeometries([i.renderGeometry],C.UPDATE),i.renderGeometry=null)};if(e){const n=new ge(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:V.CLAMP_TO_EDGE,t:V.CLAMP_TO_EDGE}});let s;if(await ee(this._images[a===v.INNER?v.OUTER:v.INNER].loadingPromise),z(t),h(),r.add(n),await r.loadImmediate(n),i.texture=n,P(i.material)?(i.material=new fe({transparent:!0,textureId:n.id}),r.add(i.material)):i.material.setParameters({textureId:n.id}),a===v.INNER)s=q(i.material,i.renderExtent);else{const o=this._images[0].renderExtent;if(!o)return void h();s=_e(i.material,o,i.renderExtent)}i.renderGeometry=new le(s),i.renderGeometry.localOrigin=this._overlays[a].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([i.renderGeometry],C.UPDATE)}else h(),r.remove(i.material),i.material=null}_isScaleRangeLayer(){return"effectiveScaleRange"in this.layer}_isScaleRangeActive(){const a=this.layer;if(!this._isScaleRangeLayer())return!1;const{minScale:e,maxScale:t}=a.effectiveScaleRange;return te(e,t)}_clippedExtent(a,e){if(this.view.viewingMode!=="local")return b(e,a);const t=this.view.basemapTerrain;return t.ready?ae(a,t.extent,e):b(e,a)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(a){await ie(()=>this.view.stationary,a),z(a)}};_([R()],u.prototype,"layer",void 0),_([R()],u.prototype,"suspended",void 0),_([R({readOnly:!0})],u.prototype,"fullExtentInLocalViewSpatialReference",void 0),_([R()],u.prototype,"updating",void 0),u=_([re("esri.views.3d.layers.DynamicLayerView3D")],u);const Te=u,Re=D();export{Te as q};