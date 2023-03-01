import{oH as N,dd as d,ac as t,ad as n,iM as m,cZ as w,dQ as j,af as g,oJ as S,aF as v,br as q,a3 as P,aT as R,v as c,r as i,bq as E,N as $,tz as z,aR as x,pz as D,pB as k,gl as C,eR as T}from"./index-51930907.js";import{c as _}from"./Analysis-67c716ff.js";import{u as O}from"./LengthDimension-da2ed2fb.js";let l=class extends N(S){constructor(e){super(e),this.type="simple",this.color=new d("black"),this.lineSize=2,this.fontSize=10,this.textColor=new d("black"),this.textBackgroundColor=new d([255,255,255,.6])}};t([n({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([n({type:d,nonNullable:!0,json:{type:[m],write:{isRequired:!0}}})],l.prototype,"color",void 0),t([n({type:Number,cast:w,nonNullable:!0,range:{min:j(1)},json:{write:{isRequired:!0}}})],l.prototype,"lineSize",void 0),t([n({type:Number,cast:w,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"fontSize",void 0),t([n({type:d,nonNullable:!0,json:{type:[m],write:{isRequired:!0}}})],l.prototype,"textColor",void 0),t([n({type:d,nonNullable:!0,json:{type:[m],write:{isRequired:!0}}})],l.prototype,"textBackgroundColor",void 0),l=t([g("esri.analysis.DimensionSimpleStyle")],l);const f=l,h=v.ofType(O);let a=class extends _{constructor(e){super(e),this.type="dimension",this.style=new f,this.extent=null}initialize(){this.addHandles(P(()=>this._computeExtent(),e=>{(c(e)||c(e.pending))&&this._set("extent",i(e)?e.extent:null)},R))}get dimensions(){return this._get("dimensions")||new h}set dimensions(e){this._set("dimensions",E(e,this.dimensions,h))}get spatialReference(){for(const e of this.dimensions){if(i(e.startPoint))return e.startPoint.spatialReference;if(i(e.endPoint))return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,s)=>(e.push(s.startPoint,s.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return i(e)?$(e.pending):Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(c(e))return{pending:null,extent:null};const s=[];for(const r of this.dimensions)i(r.startPoint)&&s.push(r.startPoint),i(r.endPoint)&&s.push(r.endPoint);const p=z(s,e);if(i(p.pending))return{pending:p.pending,extent:null};let y=null;return i(p.geometries)&&(y=p.geometries.reduce((r,u)=>c(r)?i(u)?x.fromPoint(u):null:i(u)?r.union(x.fromPoint(u)):r,null)),{pending:null,extent:y}}clear(){this.dimensions.removeAll()}};t([n({type:["dimension"]})],a.prototype,"type",void 0),t([n({cast:q,type:h,nonNullable:!0})],a.prototype,"dimensions",null),t([n({readOnly:!0})],a.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:f}},nonNullable:!0})],a.prototype,"style",void 0),t([n({value:null,readOnly:!0})],a.prototype,"extent",void 0),t([n({readOnly:!0})],a.prototype,"requiredPropertiesForEditing",null),a=t([g("esri.analysis.DimensionAnalysis")],a);const b=a;let o=class extends D(k(T)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new b,this.opacity=1,e){const{source:s,style:p}=e;s&&p&&(s.style=p)}}initialize(){this.addHandles([P(()=>this.source,(e,s)=>{i(s)&&s.parent===this&&(s.parent=null),i(e)&&(e.parent=this)},R)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return $(this.source.spatialReference)}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new b)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,s,p,y){s.dimensions=e.filter(({startPoint:r,endPoint:u})=>i(r)&&i(u)).map(r=>r.toJSON(y)).toJSON()}};t([n({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([n({type:["ArcGISDimensionLayer"]})],o.prototype,"operationalLayerType",void 0),t([n({nonNullable:!0})],o.prototype,"source",void 0),t([n({readOnly:!0})],o.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:f}},json:{write:{ignoreOrigin:!0}}})],o.prototype,"style",null),t([n({readOnly:!0})],o.prototype,"fullExtent",null),t([n({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),t([n({type:["show","hide"]})],o.prototype,"listMode",void 0),t([n({type:v.ofType(O),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],o.prototype,"dimensions",null),t([C("web-scene","dimensions")],o.prototype,"writeDimensions",null),o=t([g("esri.layers.DimensionLayer")],o);const B=o;export{B as default};
