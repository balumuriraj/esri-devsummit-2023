import{bb as E,aL as $,ac as p,ad as l,af as W,ah as H,aQ as b,e as w,bD as N,cw as q,aC as C,db as P,bf as T,aH as I}from"./index-51930907.js";import{R as B}from"./Bitmap-d8ac0db6.js";const O=Math.PI/180;function U(e){return e*O}function j(e,i){const s=U(i.rotation),t=Math.abs(Math.cos(s)),r=Math.abs(Math.sin(s)),[o,n]=i.size;return e[0]=Math.round(n*r+o*t),e[1]=Math.round(n*t+o*r),e}function A(e,i,s,t){const[r,o]=i,[n,a]=t,m=.5*s;return e[0]=r-m*n,e[1]=o-m*a,e[2]=r+m*n,e[3]=o+m*a,e}const u=E(),c=[0,0],_=new $(0,0,0,0),y={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let h=class extends H{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=y.hidpi,this.imageMaxWidth=y.imageMaxWidth,this.imageMaxHeight=y.imageMaxHeight,this.imageRotationSupported=y.imageRotationSupported,this.imageNormalizationSupported=y.imageNormalizationSupported,this.update=b(async(i,s)=>{if(w(s),!i.stationary||this.destroyed)return;const t=i.state,r=N(t.spatialReference),o=this.hidpi?i.pixelRatio:1,n=this.imageNormalizationSupported&&t.worldScreenWidth&&t.worldScreenWidth<t.size[0],a=this.imageMaxWidth??0,m=this.imageMaxHeight??0;n?(c[0]=t.worldScreenWidth,c[1]=t.size[1]):this.imageRotationSupported?(c[0]=t.size[0],c[1]=t.size[1]):j(c,t);const S=Math.floor(c[0]*o)>a||Math.floor(c[1]*o)>m,M=r&&(t.extent.xmin<r.valid[0]||t.extent.xmax>r.valid[1]),f=!this.imageNormalizationSupported&&M,v=!S&&!f,x=this.imageRotationSupported?t.rotation:0,z=this.container.children.slice();if(v){const d=n?t.paddedViewState.center:t.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(t,c,d,t.resolution,x,o,s)}else{let d=Math.min(a,m);f&&(d=Math.min(t.worldScreenWidth,d)),this._imagePromise=this._tiledExport(t,d,o,s)}try{const d=await this._imagePromise??[];w(s);const R=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=d;for(const g of z)d.includes(g)||R.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of d)R.push(g.fadeIn());await Promise.all(R)}catch(d){this._imagePromise=null,q(d)}},5e3),this.updateExports=b(async i=>{const s=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;s.push(i(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=C(s).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(e=>e.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(e,i,s,t,r,o){const n=await this.fetchSource(e,Math.floor(i*r),Math.floor(s*r),{rotation:t,pixelRatio:r,signal:o});w(o);const a=new B(null,{immutable:!0,requestRenderOnSourceChangedEnabled:!0});return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/i,a.rotation=t,a.pixelRatio=r,a.opacity=0,this.container.addChild(a),await a.setSourceAsync(n,o),w(o),a}async _singleExport(e,i,s,t,r,o,n){A(u,s,t,i);const a=P(u,e.spatialReference);return[await this._export(a,i[0],i[1],r,o,n)]}_tiledExport(e,i,s,t){const r=T.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),o=new I(r),n=o.getTileCoverage(e);if(!n)return null;const a=[];return n.forEach((m,S,M,f)=>{_.set(m,S,M,0),o.getTileBounds(u,_);const v=P(u,e.spatialReference);a.push(this._export(v,i,i,0,s,t).then(x=>(f!==0&&(_.set(m,S,M,f),o.getTileBounds(u,_),x.x=u[0],x.y=u[3]),x)))}),Promise.all(a)}};p([l()],h.prototype,"_imagePromise",void 0),p([l()],h.prototype,"bitmaps",void 0),p([l()],h.prototype,"container",void 0),p([l()],h.prototype,"fetchSource",void 0),p([l()],h.prototype,"hidpi",void 0),p([l()],h.prototype,"imageMaxWidth",void 0),p([l()],h.prototype,"imageMaxHeight",void 0),p([l()],h.prototype,"imageRotationSupported",void 0),p([l()],h.prototype,"imageNormalizationSupported",void 0),p([l()],h.prototype,"requestUpdate",void 0),p([l()],h.prototype,"updating",null),h=p([W("esri.views.2d.layers.support.ExportStrategy")],h);const Q=h;export{Q as v};
