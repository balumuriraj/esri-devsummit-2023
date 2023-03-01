import{iq as ee,g8 as te,ir as G,n as U,bb as K,is as pe,it as de,iu as ye,aC as me,aa as be,iv as Se,iw as ge,Q as we,ix as Me,r as M,v as C,W as S,iy as Te,cS as Ee,bl as ae,fS as ve,cP as P,iz as I,iA as j,g0 as x,k as E,iB as ne,fm as k,iC as Ie,iD as re,iE as oe,iF as xe,iG as se,iH as Re,iI as ie,c0 as B,fK as Ce,iJ as qe,ii as J,ih as Ne,hu as ze,bz as We,iK as De,fo as H,fJ as Q,iL as v,dS as A,cr as Ue}from"./index-51930907.js";import{I as ke}from"./I3SBinaryReader-099159c4.js";function Oe(e,t,a,n){const r=$e(e,t,a),o=G();return ee(a,r,o,n),o}const ce=1,Z=5-ce;function $e(e,t,a){const n=U(),r=e[3],o=2**(Math.ceil(Math.log(r)*Math.LOG2E/Z)*Z+ce);if(a.isGeographic){const c=o/te(a).radius*180/Math.PI,u=Math.round(e[1]/c),p=Math.max(-90,Math.min(90,u*c)),h=c/Math.cos((Math.abs(p)-c/2)/180*Math.PI),y=Math.round(e[0]/h)*h;n[0]=y,n[1]=p}else{const c=Math.round(e[0]/o),u=Math.round(e[1]/o);n[0]=c*o,n[1]=u*o}const s=e[2]+t,i=Math.round(s/o);return n[2]=i*o,n}function le(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function ft(e){var t;if(we("disable-feature:i3s-draco")||!e)return!1;for(const a of e)for(const n of a.geometryBuffers)if(((t=n.compressedAttributes)==null?void 0:t.encoding)==="draco")return!0;return!1}function ht(e,t,a,n){a.traverse(t,r=>{const o=r.mbs;return(o!=null&&Ae(e,o))!==T.OUTSIDE&&(n(r),!0)})}function pt(e,t,a){let n=0,r=0;for(let o=0;o<t.length&&n<e.length;o++)e[n]===t[o]&&(a(o)&&(e[r]=e[n],r++),n++);e.length=r}function dt(e,t,a){let n=0,r=0;for(;n<a.length;)Me(e,a[n])>=0===t&&(a[r]=a[n],r++),n++;a.length=r}const R=K();function yt(e,t){if(t.rotationScale[1]===0&&t.rotationScale[2]===0&&t.rotationScale[3]===0&&t.rotationScale[5]===0&&t.rotationScale[6]===0&&t.rotationScale[7]===0)return R[0]=(e[0]-t.position[0])/t.rotationScale[0],R[1]=(e[1]-t.position[1])/t.rotationScale[4],R[2]=(e[2]-t.position[0])/t.rotationScale[0],R[3]=(e[3]-t.position[1])/t.rotationScale[4],R}var T;function Ae(e,t){const a=t[0],n=t[1],r=t[3],o=e[0]-a,s=a-e[2],i=e[1]-n,c=n-e[3],u=Math.max(o,s,0),p=Math.max(i,c,0),h=u*u+p*p;return h>r*r?T.OUTSIDE:h>0?T.INTERSECTS_CENTER_OUTSIDE:-Math.max(o,s,i,c)>r?T.INSIDE:T.INTERSECTS_CENTER_INSIDE}function Fe(e,t,a){const n=[],r=a&&a.missingFields,o=a&&a.originalFields;for(const s of e){const i=s.toLowerCase();let c=!1;for(const u of t)if(i===u.name.toLowerCase()){n.push(u.name),c=!0,o&&o.push(s);break}!c&&r&&r.push(s)}return n}async function mt(e,t,a,n,r){if(t.length===0)return[];const o=e.attributeStorageInfo;if(M(e.associatedLayer))try{return await _e(e.associatedLayer,t,a,n)}catch(s){if(e.associatedLayer.loaded)throw s}if(o){const s=Le(t,a,r);if(C(s))throw new S("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const i=e.parsedUrl.path;return(await Promise.all(s.map(c=>Ge(i,o,c.node,c.indices,n).then(u=>{for(let p=0;p<c.graphics.length;p++){const h=c.graphics[p],y=u[p];if(h.attributes)for(const f in h.attributes)f in y||(y[f]=h.attributes[f]);h.attributes=y}return c.graphics})))).flat()}throw new S("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function Le(e,t,a){const n=new Map,r=[],o=a();for(const s of e){const i=s.attributes[t];for(let c=0;c<o.length;c++){const u=o[c],p=u.featureIds.indexOf(i);if(p>=0){let h=n.get(u.node);h||(h={node:u.node,indices:[],graphics:[]},r.push(h),n.set(u.node,h)),h.indices.push(p),h.graphics.push(s);for(let y=c;y>0;y--)o[y]=o[y-1];o[0]=u;break}}}return r}async function _e(e,t,a,n){t.sort((c,u)=>c.attributes[a]-u.attributes[a]);const r=t.map(c=>c.attributes[a]),o=[],s=Fe(n,e.fields,{originalFields:o}),i=await ue(e,r,s);for(let c=0;c<t.length;c++){const u=t[c],p=i[c],h={};if(u.attributes)for(const y in u.attributes)h[y]=u.attributes[y];for(let y=0;y<o.length;y++)h[o[y]]=p[s[y]];u.attributes=h}return t}function ue(e,t,a){const n=e.capabilities.query.maxRecordCount;if(n!=null&&t.length>n){const o=Te(t,n);return Promise.all(o.map(s=>ue(e,s,a))).then(s=>s.flat())}const r=new Ee({objectIds:t,outFields:a,orderByFields:[e.objectIdField]});return e.queryFeatures(r).then(o=>{if(o&&o.features&&o.features.length===t.length)return o.features.map(s=>s.attributes);throw new S("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")})}function Ge(e,t,a,n,r){return Ke(e,t,a.resources.attributes,n,r)}function Ke(e,t,a,n,r){const o=[];for(const s of t)if(s&&r.includes(s.name)){const i=`${e}/nodes/${a}/attributes/${s.key}/0`;o.push({url:i,storageInfo:s})}return me(o.map(s=>be(s.url,{responseType:"array-buffer"}).then(i=>ke(s.storageInfo,i.data)))).then(s=>{const i=[];for(const c of n){const u={};for(let p=0;p<s.length;p++){const h=s[p].value;h!=null&&(u[o[p].storageInfo.name]=Be(h,c))}i.push(u)}return i})}(function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"})(T||(T={}));const Pe=-32768,je=-(2**31);function Be(e,t){if(!e)return null;const a=e[t];return Se(e)?a===Pe?null:a:ge(e)?a===je?null:a:a!=a?null:a}function Je(e){const t=e.store,a=t.indexCRS||t.geographicCRS,n=a===void 0?t.indexWKT:void 0;if(n){if(!e.spatialReference)throw new S("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(n!==e.spatialReference.wkt)throw new S("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const r=a?new ae(le(a)):e.spatialReference;return r.equals(e.spatialReference)?e.spatialReference:r}function He(e){const t=e.store,a=t.vertexCRS||t.projectedCRS,n=a===void 0?t.vertexWKT:void 0;if(n){if(!e.spatialReference)throw new S("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(n!==e.spatialReference.wkt)throw new S("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const r=a?new ae(le(a)):e.spatialReference;return r.equals(e.spatialReference)?e.spatialReference:r}function bt(e,t){return C(t)?"@null":t===I(t)?"@ECEF":e.equals(t)?"":t.wkid!=null?"@"+t.wkid:null}function L(e,t,a){if(!ve(e,t))throw new S("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if(a==="local"&&!Qe(e,t))throw new S("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function St(e,t,a){var n,r;if(((n=e.serviceUpdateTimeStamp)==null?void 0:n.lastUpdate)!==((r=t.serviceUpdateTimeStamp)==null?void 0:r.lastUpdate)||!a.isEmpty||P(e.associatedLayer,o=>o.url)!==P(t.associatedLayer,o=>o.url))throw new S("layerview:recycle-failed")}function Qe(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function Ze(e,t,a){const n=Je(e),r=He(e);L(n,t,a),L(r,t,a)}function Ve(e){return(e.geometryType==null||e.geometryType==="triangles")&&(e.topology==null||e.topology==="PerAttributeArray")&&e.vertexAttributes!=null&&e.vertexAttributes.position!=null}function gt(e){if(e.store==null||e.store.defaultGeometrySchema==null||!Ve(e.store.defaultGeometrySchema))throw new S("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function wt(e,t){Ze(e,t.spatialReference,t.viewingMode)}function Xe(e){return e.geometryType!=null&&e.geometryType==="points"&&(e.topology==null||e.topology==="PerAttributeArray")&&(e.encoding==null||e.encoding===""||e.encoding==="lepcc-xyz")&&e.vertexAttributes!=null&&e.vertexAttributes.position!=null}function Mt(e){if(e.store==null||e.store.defaultGeometrySchema==null||!Xe(e.store.defaultGeometrySchema))throw new S("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function Tt(e,t){L(e.spatialReference,t.spatialReference,t.viewingMode)}function Ye(e){return e.type==="simple"||e.type==="class-breaks"||e.type==="unique-value"}function et(e){return e.type==="mesh-3d"}function Et(e){if(e==null||!Ye(e)||(e.type==="unique-value"||e.type==="class-breaks")&&e.defaultSymbol==null)return!0;const t=e.getSymbols();if(t.length===0)return!0;for(const a of t){if(!et(a)||a.symbolLayers.length===0)return!0;for(const n of a.symbolLayers.items)if(n.type!=="fill"||C(n.material)||C(n.material.color)||n.material.colorMixMode!=="replace")return!0}return!1}const vt=pe({color:[0,0,0,0],opacity:0});class tt{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function It(e){const t=new tt;let a=!1,n=!1;for(const r of e.symbolLayers.items)if(r.type==="fill"&&r.enabled){const o=r.material,s=r.edges;if(M(o)&&!a){const i=o.color,c=qe(o.colorMixMode);M(i)?t.material={color:[i.r/255,i.g/255,i.b/255],alpha:i.a,colorMixMode:c}:t.material={color:[1,1,1],alpha:1,colorMixMode:J.Multiply},t.castShadows=r.castShadows,a=!0}M(s)&&!n&&(t.edgeMaterial=Ne(s,{}),n=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:J.Multiply}),t}function xt(e,t){return(0|e)+(0|t)|0}function at(e,t,a,n,r=0){n===I(n)?t.isGeographic?ct(e,a,t,r):it(e,a,t,r):t.isWGS84&&(n.isWebMercator||j(n))?nt(t,e,n,a,r):t.isWebMercator&&j(n)?st(t,e,n,a,r):e===a?(a.center[2]+=r,x(a.center,t,0,a.center,n,0,1)):(E(a.center,e.center[0],e.center[1],e.center[2]+r),x(a.center,t,0,a.center,n,0,1),ne(a.quaternion,e.quaternion),k(a.halfSize,e.halfSize))}function nt(e,t,a,n,r){k(w,t.center),w[2]+=r;const o=I(a);x(w,e,0,w,o,0,1),fe(o,t,w,a,n)}const D=new Array(24),rt=new ze(D,3,!0),V=U(),w=U(),ot=We();function st(e,t,a,n,r){k(w,t.center),w[2]+=r,fe(e,t,w,a,n)}function fe(e,t,a,n,r){const o=Ie(ot,t.quaternion);for(let s=0;s<8;++s){for(let i=0;i<3;++i)V[i]=t.halfSize[i]*(s&1<<i?-1:1);for(let i=0;i<3;++i){let c=a[i];for(let u=0;u<3;++u)c+=V[u]*o[3*u+i];D[3*s+i]=c}}x(D,e,0,D,n,0,8),re(rt,r)}function it(e,t,a,n){oe(e,_),E(t.center,e.center[0],e.center[1],e.center[2]+n),ee(a,t.center,b,I(a)),E(t.center,b[12],b[13],b[14]);const r=2*Math.sqrt(1+b[0]+b[5]+b[10]);g[0]=(b[6]-b[9])/r,g[1]=(b[8]-b[2])/r,g[2]=(b[1]-b[4])/r,g[3]=.25*r,xe(t.quaternion,g,e.quaternion),se(g,t.quaternion);let o=0,s=0,i=0;for(const c of _)c[2]+=n,x(c,a,0,c,I(a),0,1),Re(l,c,t.center),ie(l,l,g),o=Math.max(o,Math.abs(l[0])),s=Math.max(s,Math.abs(l[1])),i=Math.max(i,Math.abs(l[2]));E(t.halfSize,o,s,i)}function ct(e,t,a,n){const r=te(a),o=1+Math.max(0,n)/(r.radius+e.center[2]);E(t.center,e.center[0],e.center[1],e.center[2]+n),x(t.center,a,0,t.center,I(a),0,1),ne(t.quaternion,e.quaternion),se(g,e.quaternion),E(l,0,0,1),ie(l,l,g),E(l,e.halfSize[0]*Math.abs(l[0]),e.halfSize[1]*Math.abs(l[1]),e.halfSize[2]*Math.abs(l[2])),B(l,l,r.inverseFlattening),Ce(t.halfSize,e.halfSize,l),B(t.halfSize,t.halfSize,o)}function Rt(e,t,a,n,r,o){if(!o||o.length===0||C(t)||!e.mbs)return null;const s=Oe(e.mbs,r,a,t);De(W,s);let i=null;const c=()=>{if(!i)if(i=_,H(z),M(e.serviceObb)){at(e.serviceObb,a,X,t,r),oe(X,i);for(const f of i)v(f,f,W),A(z,f)}else{const f=e.mbs;if(!f)return;const d=f[3];Q(f,a,l,t),v(l,l,W),l[2]+=r;for(let m=0;m<8;++m){const q=1&m?d:-d,O=2&m?d:-d,$=4&m?d:-d,N=i[m];k(N,[l[0]+q,l[1]+O,l[2]+$]),A(z,N)}}};let u=1/0,p=-1/0;const h=f=>{if(f.type!=="replace")return;const d=f.geometry;if(!(d!=null&&d.hasZ))return;H(F);const m=d.spatialReference||n,q=d.rings.reduce((O,$)=>$.reduce((N,he)=>(Q(he,m,l,t),v(l,l,W),A(F,l),Math.min(l[2],N)),O),1/0);c(),Ue(z,F)&&(u=Math.min(u,q),p=Math.max(p,q))};if(o.forEach(f=>h(f)),u===1/0)return null;const y=(f,d,m)=>{v(l,m,s),f[d+0]=l[0],f[d+1]=l[1],f[d+2]=l[2],d+=24,m[2]=u,v(l,m,s),f[d+0]=l[0],f[d+1]=l[1],f[d+2]=l[2],d+=24,m[2]=p,v(l,m,s),f[d+0]=l[0],f[d+1]=l[1],f[d+2]=l[2]};for(let f=0;f<8;++f)y(Y.data,3*f,i[f]);return re(Y)}function Ct(e){return M(e)&&e.halfSize[0]>=0}function qt(e){return e[3]>=0}function Nt(e){M(e)&&(e.halfSize[0]=-1)}function zt(e){M(e)&&(e[3]=-1)}const b=G(),g=de(),_=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],F=K(),z=K(),X=ye(),l=U(),Y={data:new Array(72),size:3,exclusive:!0,stride:3},W=G();export{Ct as $,It as C,gt as E,zt as H,Mt as I,ft as J,xt as N,Rt as P,qt as Q,Tt as R,vt as U,ht as V,pt as X,dt as Y,Nt as Z,mt as a,L as b,$e as c,Ae as d,He as e,St as g,Je as h,Be as m,Oe as n,Fe as o,Et as q,T as r,yt as t,Ke as u,wt as v,Ze as w,bt as y,at as z};
