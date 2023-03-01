import{a3 as w,aT as d,r as e,W as o,a6 as V,a1 as _,a2 as c,v as p,eh as u,ai as A,ac as t,ad as l,af as f}from"./index-51930907.js";import{n as v}from"./LayerView3D-68bdf258.js";import{u as T}from"./LayerView-db7ff94b.js";const h="analysis-view-handles";let a=class extends v(T){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.handles.add(w(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),e(s)&&this._createAnalysisView(s)},d),h)}destroy(){this.handles.remove(h),this._destroyAnalysisView()}async whenAnalysisView(){if(e(this.analysisView))return this.analysisView;if(e(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new o("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return e(this._createAnalysisViewTask)||e(this.analysisView)&&this.analysisView.updating}_createAnalysisView(s){const n=V(async i=>(this.analysisView=await this._createAnalysisViewPromise(s,i),this._createAnalysisViewTask===n&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=n}_destroyAnalysisView(){this.analysisView=_(this.analysisView),this._createAnalysisViewTask=c(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,n){let i=this._analysisModule;if(p(i)){const y=await this._loadAnalysisModule();this._analysisModule=y,i=y}const r=new i.default({analysis:s,view:this.view,parent:this});if(await r.when(),u(n))throw r.destroy(),new o("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return r}_loadAnalysisModule(){return A(()=>import("./LineOfSightAnalysisView3D-dd29f638.js"),["assets/LineOfSightAnalysisView3D-dd29f638.js","assets/index-51930907.js","assets/index-cf6fcb4b.css","assets/LineVisualElement-0fb6f749.js","assets/LineOfSightAnalysisTarget-19283a24.js","assets/persistable-257e439a.js","assets/elevationInfoUtils-5a8f681c.js","assets/analysisViewUtils-f44c5db2.js","assets/ImageMaterial-9dd7dfbf.js","assets/PointVisualElement-1fa72e4f.js","assets/VisualElementResources-bec0225b.js"])}};t([l()],a.prototype,"type",void 0),t([l()],a.prototype,"layer",void 0),t([l()],a.prototype,"analysisView",void 0),t([l()],a.prototype,"_createAnalysisViewTask",void 0),a=t([f("esri.views.3d.layers.LineOfSightLayerView3D")],a);const g=a;export{g as default};
