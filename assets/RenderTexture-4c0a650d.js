import{eb as u,aH as s,R as h}from"./calcite-c5ae4991.js";let _=class{constructor(r,i){this._textureRep=r,this.loadPromise=null,this._disposed=!1;const e=this._textureRep.acquire(i);u(e)?(e.then(t=>{this._disposed?s(t):this._textureRef=t}),this.loadPromise=e):this._textureRef=e}dispose(){this._textureRef=s(this._textureRef),this._disposed=!0}get glTexture(){return h(this._textureRef)?this._textureRef.glTexture:null}};export{_ as r};
