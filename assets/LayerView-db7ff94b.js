import{bW as l,cH as d,gf as o,bS as p,ah as u,ak as y,c_ as n,ac as s,ad as i,af as h}from"./index-51930907.js";let t=class extends l(d(o(p.EventedMixin(u)))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if(e.name!=="layerview:create-error"){const r=this.layer&&this.layer.id||"no id",a=this.layer&&this.layer.title||"no title";y.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${a}', id: '${r}')`,e)}})}get fullOpacity(){return n(this.get("layer.opacity"),1)*n(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&((e=this.layer)==null?void 0:e.legendEnabled)===!0}get updating(){var e;return!(!((e=this.updatingHandles)!=null&&e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return((e=this.layer)==null?void 0:e.visible)===!0}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,r,a;return this.visible&&((e=this.layer)==null?void 0:e.loaded)&&!((r=this.parent)!=null&&r.suspended)&&((a=this.view)==null?void 0:a.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},r=this;return r.view&&r.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};s([i()],t.prototype,"fullOpacity",null),s([i()],t.prototype,"layer",void 0),s([i()],t.prototype,"parent",void 0),s([i({readOnly:!0})],t.prototype,"suspended",null),s([i({readOnly:!0})],t.prototype,"suspendInfo",null),s([i({readOnly:!0})],t.prototype,"legendEnabled",null),s([i({type:Boolean,readOnly:!0})],t.prototype,"updating",null),s([i({readOnly:!0})],t.prototype,"updatingProgress",null),s([i()],t.prototype,"visible",null),s([i()],t.prototype,"view",void 0),t=s([h("esri.views.layers.LayerView")],t);const v=t;export{v as u};
