import{c6 as ee,I as te,f as $,Q as L,b$ as pe,ep as de,mO as me,mP as ye,aJ as be,fc as ge,R as M,$ as q,a1 as g,mQ as Se,g1 as we,G as ne,dX as Me,dV as P,eR as B,c2 as I,o as E,q as U,f1 as Te,aW as Ee,f0 as ae,k as j,u as ve,B as Ie,cB as Q,bH as H,O as v,ec as A,cG as xe}from"./calcite-c5ae4991.js";import{e as Re}from"./mat3f64-50f3b9f6.js";import{e as K}from"./mat4f64-abdda1bb.js";import{B as re,y as qe,S as oe}from"./quat-8dcd84de.js";import{e as Ce}from"./quatf32-51a323b8.js";import{c as x}from"./spatialReferenceEllipsoidUtils-87122df3.js";import{I as Ne}from"./I3SBinaryReader-266f8da8.js";import{m as ze,N as Oe,Q as se,t as ie,p as We}from"./orientedBoundingBox-d2c06194.js";import{n as $e,r as J,s as Ue}from"./symbolColorUtils-14fb8f64.js";function ke(e,t,n,a){const r=De(e,t,n),o=K();return ee(n,r,o,a),o}const ce=1,Z=5-ce;function De(e,t,n){const a=$(),r=e[3],o=2**(Math.ceil(Math.log(r)*Math.LOG2E/Z)*Z+ce);if(n.isGeographic){const c=o/te(n).radius*180/Math.PI,u=Math.round(e[1]/c),p=Math.max(-90,Math.min(90,u*c)),h=c/Math.cos((Math.abs(p)-c/2)/180*Math.PI),m=Math.round(e[0]/h)*h;a[0]=m,a[1]=p}else{const c=Math.round(e[0]/o),u=Math.round(e[1]/o);a[0]=c*o,a[1]=u*o}const s=e[2]+t,i=Math.round(s/o);return a[2]=i*o,a}function le(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function gt(e){var t;if(be("disable-feature:i3s-draco")||!e)return!1;for(const n of e)for(const a of n.geometryBuffers)if(((t=a.compressedAttributes)==null?void 0:t.encoding)==="draco")return!0;return!1}function St(e,t,n,a){n.traverse(t,r=>{const o=r.mbs;return(o!=null&&Ae(e,o))!==T.OUTSIDE&&(a(r),!0)})}function wt(e,t,n){let a=0,r=0;for(let o=0;o<t.length&&a<e.length;o++)e[a]===t[o]&&(n(o)&&(e[r]=e[a],r++),a++);e.length=r}function Mt(e,t,n){let a=0,r=0;for(;a<n.length;)ge(e,n[a])>=0===t&&(n[r]=n[a],r++),a++;n.length=r}const R=L();function Tt(e,t){if(t.rotationScale[1]===0&&t.rotationScale[2]===0&&t.rotationScale[3]===0&&t.rotationScale[5]===0&&t.rotationScale[6]===0&&t.rotationScale[7]===0)return R[0]=(e[0]-t.position[0])/t.rotationScale[0],R[1]=(e[1]-t.position[1])/t.rotationScale[4],R[2]=(e[2]-t.position[0])/t.rotationScale[0],R[3]=(e[3]-t.position[1])/t.rotationScale[4],R}var T;function Ae(e,t){const n=t[0],a=t[1],r=t[3],o=e[0]-n,s=n-e[2],i=e[1]-a,c=a-e[3],u=Math.max(o,s,0),p=Math.max(i,c,0),h=u*u+p*p;return h>r*r?T.OUTSIDE:h>0?T.INTERSECTS_CENTER_OUTSIDE:-Math.max(o,s,i,c)>r?T.INSIDE:T.INTERSECTS_CENTER_INSIDE}function Fe(e,t,n){const a=[],r=n&&n.missingFields,o=n&&n.originalFields;for(const s of e){const i=s.toLowerCase();let c=!1;for(const u of t)if(i===u.name.toLowerCase()){a.push(u.name),c=!0,o&&o.push(s);break}!c&&r&&r.push(s)}return a}async function Et(e,t,n,a,r){if(t.length===0)return[];const o=e.attributeStorageInfo;if(M(e.associatedLayer))try{return await _e(e.associatedLayer,t,n,a)}catch(s){if(e.associatedLayer.loaded)throw s}if(o){const s=Ge(t,n,r);if(q(s))throw new g("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const i=e.parsedUrl.path;return(await Promise.all(s.map(c=>Le(i,o,c.node,c.indices,a).then(u=>{for(let p=0;p<c.graphics.length;p++){const h=c.graphics[p],m=u[p];if(h.attributes)for(const f in h.attributes)f in m||(m[f]=h.attributes[f]);h.attributes=m}return c.graphics})))).flat()}throw new g("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function Ge(e,t,n){const a=new Map,r=[],o=n();for(const s of e){const i=s.attributes[t];for(let c=0;c<o.length;c++){const u=o[c],p=u.featureIds.indexOf(i);if(p>=0){let h=a.get(u.node);h||(h={node:u.node,indices:[],graphics:[]},r.push(h),a.set(u.node,h)),h.indices.push(p),h.graphics.push(s);for(let m=c;m>0;m--)o[m]=o[m-1];o[0]=u;break}}}return r}async function _e(e,t,n,a){t.sort((c,u)=>c.attributes[n]-u.attributes[n]);const r=t.map(c=>c.attributes[n]),o=[],s=Fe(a,e.fields,{originalFields:o}),i=await ue(e,r,s);for(let c=0;c<t.length;c++){const u=t[c],p=i[c],h={};if(u.attributes)for(const m in u.attributes)h[m]=u.attributes[m];for(let m=0;m<o.length;m++)h[o[m]]=p[s[m]];u.attributes=h}return t}function ue(e,t,n){const a=e.capabilities.query.maxRecordCount;if(a!=null&&t.length>a){const o=Se(t,a);return Promise.all(o.map(s=>ue(e,s,n))).then(s=>s.flat())}const r=new we({objectIds:t,outFields:n,orderByFields:[e.objectIdField]});return e.queryFeatures(r).then(o=>{if(o&&o.features&&o.features.length===t.length)return o.features.map(s=>s.attributes);throw new g("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")})}function Le(e,t,n,a,r){return Ke(e,t,n.resources.attributes,a,r)}function Ke(e,t,n,a,r){const o=[];for(const s of t)if(s&&r.includes(s.name)){const i=`${e}/nodes/${n}/attributes/${s.key}/0`;o.push({url:i,storageInfo:s})}return pe(o.map(s=>de(s.url,{responseType:"array-buffer"}).then(i=>Ne(s.storageInfo,i.data)))).then(s=>{const i=[];for(const c of a){const u={};for(let p=0;p<s.length;p++){const h=s[p].value;h!=null&&(u[o[p].storageInfo.name]=je(h,c))}i.push(u)}return i})}(function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"})(T||(T={}));const Pe=-32768,Be=-(2**31);function je(e,t){if(!e)return null;const n=e[t];return me(e)?n===Pe?null:n:ye(e)?n===Be?null:n:n!=n?null:n}function Qe(e){const t=e.store,n=t.indexCRS||t.geographicCRS,a=n===void 0?t.indexWKT:void 0;if(a){if(!e.spatialReference)throw new g("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(a!==e.spatialReference.wkt)throw new g("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const r=n?new ne(le(n)):e.spatialReference;return r.equals(e.spatialReference)?e.spatialReference:r}function He(e){const t=e.store,n=t.vertexCRS||t.projectedCRS,a=n===void 0?t.vertexWKT:void 0;if(a){if(!e.spatialReference)throw new g("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(a!==e.spatialReference.wkt)throw new g("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const r=n?new ne(le(n)):e.spatialReference;return r.equals(e.spatialReference)?e.spatialReference:r}function vt(e,t){return q(t)?"@null":t===x(t)?"@ECEF":e.equals(t)?"":t.wkid!=null?"@"+t.wkid:null}function G(e,t,n){if(!Me(e,t))throw new g("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if(n==="local"&&!Je(e,t))throw new g("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function It(e,t,n){var a,r;if(((a=e.serviceUpdateTimeStamp)==null?void 0:a.lastUpdate)!==((r=t.serviceUpdateTimeStamp)==null?void 0:r.lastUpdate)||!n.isEmpty||P(e.associatedLayer,o=>o.url)!==P(t.associatedLayer,o=>o.url))throw new g("layerview:recycle-failed")}function Je(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function Ze(e,t,n){const a=Qe(e),r=He(e);G(a,t,n),G(r,t,n)}function Ve(e){return(e.geometryType==null||e.geometryType==="triangles")&&(e.topology==null||e.topology==="PerAttributeArray")&&e.vertexAttributes!=null&&e.vertexAttributes.position!=null}function xt(e){if(e.store==null||e.store.defaultGeometrySchema==null||!Ve(e.store.defaultGeometrySchema))throw new g("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function Rt(e,t){Ze(e,t.spatialReference,t.viewingMode)}function Xe(e){return e.geometryType!=null&&e.geometryType==="points"&&(e.topology==null||e.topology==="PerAttributeArray")&&(e.encoding==null||e.encoding===""||e.encoding==="lepcc-xyz")&&e.vertexAttributes!=null&&e.vertexAttributes.position!=null}function qt(e){if(e.store==null||e.store.defaultGeometrySchema==null||!Xe(e.store.defaultGeometrySchema))throw new g("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function Ct(e,t){G(e.spatialReference,t.spatialReference,t.viewingMode)}function Ye(e){return e.type==="simple"||e.type==="class-breaks"||e.type==="unique-value"}function et(e){return e.type==="mesh-3d"}function Nt(e){if(e==null||!Ye(e)||(e.type==="unique-value"||e.type==="class-breaks")&&e.defaultSymbol==null)return!0;const t=e.getSymbols();if(t.length===0)return!0;for(const n of t){if(!et(n)||n.symbolLayers.length===0)return!0;for(const a of n.symbolLayers.items)if(a.type!=="fill"||q(a.material)||q(a.material.color)||a.material.colorMixMode!=="replace")return!0}return!1}const zt=ze({color:[0,0,0,0],opacity:0});class tt{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function Ot(e){const t=new tt;let n=!1,a=!1;for(const r of e.symbolLayers.items)if(r.type==="fill"&&r.enabled){const o=r.material,s=r.edges;if(M(o)&&!n){const i=o.color,c=$e(o.colorMixMode);M(i)?t.material={color:[i.r/255,i.g/255,i.b/255],alpha:i.a,colorMixMode:c}:t.material={color:[1,1,1],alpha:1,colorMixMode:J.Multiply},t.castShadows=r.castShadows,n=!0}M(s)&&!a&&(t.edgeMaterial=We(s,{}),a=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:J.Multiply}),t}function Wt(e,t){return(0|e)+(0|t)|0}function nt(e,t,n,a,r=0){a===x(a)?t.isGeographic?ct(e,n,t,r):it(e,n,t,r):t.isWGS84&&(a.isWebMercator||B(a))?at(t,e,a,n,r):t.isWebMercator&&B(a)?st(t,e,a,n,r):e===n?(n.center[2]+=r,I(n.center,t,0,n.center,a,0,1)):(E(n.center,e.center[0],e.center[1],e.center[2]+r),I(n.center,t,0,n.center,a,0,1),re(n.quaternion,e.quaternion),U(n.halfSize,e.halfSize))}function at(e,t,n,a,r){U(w,t.center),w[2]+=r;const o=x(n);I(w,e,0,w,o,0,1),fe(o,t,w,n,a)}const W=new Array(24),rt=new Ue(W,3,!0),V=$(),w=$(),ot=Re();function st(e,t,n,a,r){U(w,t.center),w[2]+=r,fe(e,t,w,n,a)}function fe(e,t,n,a,r){const o=Te(ot,t.quaternion);for(let s=0;s<8;++s){for(let i=0;i<3;++i)V[i]=t.halfSize[i]*(s&1<<i?-1:1);for(let i=0;i<3;++i){let c=n[i];for(let u=0;u<3;++u)c+=V[u]*o[3*u+i];W[3*s+i]=c}}I(W,e,0,W,a,0,8),se(rt,r)}function it(e,t,n,a){ie(e,_),E(t.center,e.center[0],e.center[1],e.center[2]+a),ee(n,t.center,b,x(n)),E(t.center,b[12],b[13],b[14]);const r=2*Math.sqrt(1+b[0]+b[5]+b[10]);S[0]=(b[6]-b[9])/r,S[1]=(b[8]-b[2])/r,S[2]=(b[1]-b[4])/r,S[3]=.25*r,qe(t.quaternion,S,e.quaternion),oe(S,t.quaternion);let o=0,s=0,i=0;for(const c of _)c[2]+=a,I(c,n,0,c,x(n),0,1),Ee(l,c,t.center),ae(l,l,S),o=Math.max(o,Math.abs(l[0])),s=Math.max(s,Math.abs(l[1])),i=Math.max(i,Math.abs(l[2]));E(t.halfSize,o,s,i)}function ct(e,t,n,a){const r=te(n),o=1+Math.max(0,a)/(r.radius+e.center[2]);E(t.center,e.center[0],e.center[1],e.center[2]+a),I(t.center,n,0,t.center,x(n),0,1),re(t.quaternion,e.quaternion),oe(S,e.quaternion),E(l,0,0,1),ae(l,l,S),E(l,e.halfSize[0]*Math.abs(l[0]),e.halfSize[1]*Math.abs(l[1]),e.halfSize[2]*Math.abs(l[2])),j(l,l,r.inverseFlattening),ve(t.halfSize,e.halfSize,l),j(t.halfSize,t.halfSize,o)}function $t(e,t,n,a,r,o){if(!o||o.length===0||q(t)||!e.mbs)return null;const s=ke(e.mbs,r,n,t);Ie(O,s);let i=null;const c=()=>{if(!i)if(i=_,Q(z),M(e.serviceObb)){nt(e.serviceObb,n,X,t,r),ie(X,i);for(const f of i)v(f,f,O),A(z,f)}else{const f=e.mbs;if(!f)return;const d=f[3];H(f,n,l,t),v(l,l,O),l[2]+=r;for(let y=0;y<8;++y){const C=1&y?d:-d,k=2&y?d:-d,D=4&y?d:-d,N=i[y];U(N,[l[0]+C,l[1]+k,l[2]+D]),A(z,N)}}};let u=1/0,p=-1/0;const h=f=>{if(f.type!=="replace")return;const d=f.geometry;if(!(d!=null&&d.hasZ))return;Q(F);const y=d.spatialReference||a,C=d.rings.reduce((k,D)=>D.reduce((N,he)=>(H(he,y,l,t),v(l,l,O),A(F,l),Math.min(l[2],N)),k),1/0);c(),xe(z,F)&&(u=Math.min(u,C),p=Math.max(p,C))};if(o.forEach(f=>h(f)),u===1/0)return null;const m=(f,d,y)=>{v(l,y,s),f[d+0]=l[0],f[d+1]=l[1],f[d+2]=l[2],d+=24,y[2]=u,v(l,y,s),f[d+0]=l[0],f[d+1]=l[1],f[d+2]=l[2],d+=24,y[2]=p,v(l,y,s),f[d+0]=l[0],f[d+1]=l[1],f[d+2]=l[2]};for(let f=0;f<8;++f)m(Y.data,3*f,i[f]);return se(Y)}function Ut(e){return M(e)&&e.halfSize[0]>=0}function kt(e){return e[3]>=0}function Dt(e){M(e)&&(e.halfSize[0]=-1)}function At(e){M(e)&&(e[3]=-1)}const b=K(),S=Ce(),_=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],F=L(),z=L(),X=Oe(),l=$(),Y={data:new Array(72),size:3,exclusive:!0,stride:3},O=K();export{Ut as $,Ot as C,xt as E,At as H,qt as I,gt as J,Wt as N,$t as P,kt as Q,Ct as R,zt as U,St as V,wt as X,Mt as Y,Dt as Z,Et as a,G as b,De as c,Ae as d,He as e,It as g,Qe as h,je as m,ke as n,Fe as o,Nt as q,T as r,Tt as t,Ke as u,Rt as v,Ze as w,vt as y,nt as z};