import{R as h}from"./calcite-8912bd40.js";import{t as i}from"./NestedMap-1b5db22e.js";import{h as a}from"./Program-77209250.js";class p{constructor(r){this._rctx=r,this._store=new i}dispose(){this._store.forEach(r=>r.forEach(t=>t.dispose())),this._store.clear()}acquire(r,t,e,c){const s=this._store.get(r,t);if(h(s))return s.ref(),s;const o=new a(this._rctx,r,t,e,c);return o.ref(),this._store.set(r,t,o),o}get test(){let r=0;return this._store.forEach(t=>t.forEach(e=>r+=e.hasGLName?2:1)),{cachedWebGLObjects:r}}}export{p as s};