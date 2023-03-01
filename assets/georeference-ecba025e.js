import{ac as u,ad as g,af as Y,gj as G,n as F,pY as b,c2 as S,pZ as k,p_ as C,p$ as V,q0 as Z,iK as z,ir as m,iL as R,q1 as f,iz as L,iq as j,jh as D,q2 as A,g0 as H,q3 as J,q4 as K,q5 as U,be as W,r as w,nL as Q,q6 as X,nb as x,q7 as tt,q8 as B,q9 as nt,v as h,qa as $,oB as y,qb as rt,qc as et,nN as at,qd as ot,qe as it,qf as st,dr as lt,fi as ct,mI as pt,bz as ut,qg as gt,qh as ht,qi as ft}from"./index-51930907.js";var T;let p=T=class extends G{constructor(t){super(t),this.origin=F(),this.translation=F(),this.rotation=b(),this.scale=S(1,1,1),this.geographic=!0}get localMatrix(){const t=m();return k(E,V(this.rotation),C(this.rotation)),Z(t,E,this.translation,this.scale),t}get localMatrixInverse(){return z(m(),this.localMatrix)}applyLocal(t,n){return R(n,t,this.localMatrix)}applyLocalInverse(t,n){return R(n,t,this.localMatrixInverse)}project(t,n){const r=new Float64Array(t.length),e=f.fromTypedArray(r),a=f.fromTypedArray(t);if(this.geographic){const s=L(n),c=m();return j(n,this.origin,c,s),D(c,c,this.localMatrix),A(e,a,c),H(r,s,0,r,n,0,r.length/3),r}const{localMatrix:o,origin:i}=this;J(o,K)?U(e,a):A(e,a,o);for(let s=0;s<r.length;s+=3)r[s+0]+=i[0],r[s+1]+=i[1],r[s+2]+=i[2];return r}getOriginPoint(t){const[n,r,e]=this.origin;return new W({x:n,y:r,z:e,spatialReference:t})}equals(t){return w(t)&&this.geographic===t.geographic&&Q(this.origin,t.origin)&&X(this.localMatrix,t.localMatrix)}clone(){const t={origin:x(this.origin),translation:x(this.translation),rotation:b(this.rotation),scale:x(this.scale),geographic:this.geographic};return new T(t)}};u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"origin",void 0),u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"translation",void 0),u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"rotation",void 0),u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),u([g({type:Boolean,nonNullable:!0,json:{write:!0}})],p.prototype,"geographic",void 0),u([g()],p.prototype,"localMatrix",null),u([g()],p.prototype,"localMatrixInverse",null),p=T=u([Y("esri.geometry.support.MeshTransform")],p);const E=tt(),yt=p;function v(t,n){return t.isGeographic||t.isWebMercator&&((n==null?void 0:n.geographic)??!0)}function P(t,n,r){return v(n.spatialReference,r)?$t(t,n,r):At(t,n,r)}function mt(t,n,r){const{position:e,normal:a,tangent:o}=t;if(h(n))return{position:e,normal:a,tangent:o};const i=n.localMatrix;return P({position:gt(e,new Float64Array(e.length),i),normal:w(a)?ht(a,new Float32Array(a.length),i):null,tangent:w(o)?ft(o,new Float32Array(o.length),i):null},n.getOriginPoint(r),{geographic:n.geographic})}function Et(t,n,r){if(r!=null&&r.useTransform){const{position:e,normal:a,tangent:o}=t;return{vertexAttributes:{position:e,normal:a,tangent:o},transform:new yt({origin:[n.x,n.y,n.z??0],geographic:v(n.spatialReference,r)})}}return{vertexAttributes:P(t,n,r),transform:null}}function N(t,n,r){return v(n.spatialReference,r)?Tt(t,n,r):_(t,n,r)}function Nt(t,n,r,e){if(h(n))return N(t,r,e);const a=mt(t,n,r.spatialReference);return r.equals(n.getOriginPoint(r.spatialReference))?_(a,r,e):N(a,r,e)}function At(t,n,r){const e=new Float64Array(t.position.length),a=t.position,o=n.x,i=n.y,s=n.z||0,{horizontal:c,vertical:q}=M(r?r.unit:null,n.spatialReference);for(let l=0;l<a.length;l+=3)e[l+0]=a[l+0]*c+o,e[l+1]=a[l+1]*c+i,e[l+2]=a[l+2]*q+s;return{position:e,normal:t.normal,tangent:t.tangent}}function $t(t,n,r){const e=n.spatialReference,a=I(n,r,d),o=new Float64Array(t.position.length),i=qt(t.position,a,e,o),s=B(O,a);return{position:i,normal:xt(i,o,t.normal,s,e),tangent:wt(i,o,t.tangent,s,e)}}function qt(t,n,r,e){A(f.fromTypedArray(e),f.fromTypedArray(t),n);const a=new Float64Array(t.length);return nt(e,a,r)}function xt(t,n,r,e,a){if(h(r))return null;const o=new Float32Array(r.length);return $(y.fromTypedArray(o),y.fromTypedArray(r),e),rt(o,t,n,a,o),o}function wt(t,n,r,e,a){if(h(r))return null;const o=new Float32Array(r.length);$(y.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT),y.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),e);for(let i=3;i<o.length;i+=4)o[i]=r[i];return et(o,t,n,a,o),o}function _(t,n,r){const e=new Float64Array(t.position.length),a=t.position,o=n.x,i=n.y,s=n.z||0,{horizontal:c,vertical:q}=M(r?r.unit:null,n.spatialReference);for(let l=0;l<a.length;l+=3)e[l+0]=(a[l+0]-o)/c,e[l+1]=(a[l+1]-i)/c,e[l+2]=(a[l+2]-s)/q;return{position:e,normal:t.normal,tangent:t.tangent}}function Tt(t,n,r){const e=n.spatialReference;I(n,r,d);const a=z(Ft,d),o=new Float64Array(t.position.length),i=dt(t.position,e,a,o),s=B(O,a);return{position:i,normal:vt(t.normal,t.position,o,e,s),tangent:Mt(t.tangent,t.position,o,e,s)}}function I(t,n,r){j(t.spatialReference,[t.x,t.y,t.z||0],r,L(t.spatialReference));const{horizontal:e,vertical:a}=M(n?n.unit:null,t.spatialReference);return at(r,r,[e,e,a]),r}function dt(t,n,r,e){const a=ot(t,n,e),o=f.fromTypedArray(a),i=new Float64Array(a.length),s=f.fromTypedArray(i);return A(s,o,r),i}function vt(t,n,r,e,a){if(h(t))return null;const o=it(t,n,r,e,new Float32Array(t.length)),i=y.fromTypedArray(o);return $(i,i,a),o}function Mt(t,n,r,e,a){if(h(t))return null;const o=st(t,n,r,e,new Float32Array(t.length)),i=y.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT);return $(i,i,a),o}function M(t,n){if(h(t))return bt;const r=n.isGeographic?1:lt(n),e=n.isGeographic?1:ct(n),a=pt(1,t,"meters");return{horizontal:a*r,vertical:a*e}}const d=m(),Ft=m(),O=ut(),bt={horizontal:1,vertical:1};export{yt as L,Nt as M,Et as _,N as b,mt as k,v as r,P as x};
