import{vI as P,vJ as _,r as u,vo as G,aa as D,bF as N,vK as g,vL as z,vF as U,dd as C,vE as V,N as T,cP as w,vn as j,q2 as K,q8 as M,bz as B,qa as Q,vM as F,vN as X,vO as Y,vP as Z,vQ as k,vR as A,vS as J,vT as W,vU as S,vV as H,vW as q,vX as ee,vY as te,vZ as ne,v_ as I,oB as O,v$ as re,q5 as oe,w0 as se,w1 as ae,d as E,w2 as ie,w3 as ue,w4 as ce,A as R,jl as le,c2 as fe,v as me,q1 as pe,w5 as de,w6 as $e,w7 as ve}from"./index-b4cf3b73.js";import{_ as xe}from"./georeference-9c9aeffb.js";async function Le(e,t,o){const s=new P(ge(o)),n=(await _(s,t,o,!0)).model,m=n.lods.shift(),c=new Map,l=new Map;n.textures.forEach((x,y)=>c.set(y,he(x))),n.materials.forEach((x,y)=>l.set(y,be(x,c)));const i=we(m);for(const x of i.parts)ye(i,x,l);const{position:d,normal:f,tangent:r,color:a,texCoord0:p}=i.vertexAttributes,v={position:d.typedBuffer,normal:u(f)?f.typedBuffer:null,tangent:u(r)?r.typedBuffer:null,uv:u(p)?p.typedBuffer:null,color:u(a)?a.typedBuffer:null},b=xe(v,e,o);return{transform:b.transform,components:i.components,spatialReference:e.spatialReference,vertexAttributes:new G({position:b.vertexAttributes.position,normal:b.vertexAttributes.normal,tangent:b.vertexAttributes.tangent,color:v.color,uv:v.uv})}}function ge(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(o,s,n)=>{const m=t(o);return(await D(m,{responseType:s==="image"?"image":s==="binary"?"array-buffer":"json",signal:u(n)?n.signal:null})).data}}:null}function h(e,t){if(me(e))return"-";const o=e.typedBuffer;return`${N(t,o.buffer,()=>t.size)}/${o.byteOffset}/${o.byteLength}`}function Te(e){return u(e)?e.toString():"-"}function we(e){let t=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},s=new Map,n=new Map,m=[];for(const c of e.parts){const{attributes:{position:l,normal:i,color:d,tangent:f,texCoord0:r}}=c,a=`
      ${h(l,s)}/
      ${h(i,s)}/
      ${h(d,s)}/
      ${h(f,s)}/
      ${h(r,s)}/
      ${Te(c.transform)}
    `;let p=!1;const v=N(n,a,()=>(p=!0,{start:t,length:l.count}));p&&(t+=l.count),i&&(o.normal=!0),d&&(o.color=!0),f&&(o.tangent=!0),r&&(o.texCoord0=!0),m.push({gltf:c,writeVertices:p,region:v})}return{vertexAttributes:{position:g(pe,t),normal:o.normal?g(O,t):null,tangent:o.tangent?g(S,t):null,color:o.color?g(q,t):null,texCoord0:o.texCoord0?g(de,t):null},parts:m,components:[]}}function he(e){return new z({data:(U(e.data),e.data),wrap:Ce(e.parameters.wrap)})}function be(e,t){const o=new C(Me(e.color,e.opacity)),s=e.emissiveFactor?new C(Be(e.emissiveFactor)):null;return new V({color:o,colorTexture:T(w(e.textureColor,n=>t.get(n))),normalTexture:T(w(e.textureNormal,n=>t.get(n))),emissiveColor:s,emissiveTexture:T(w(e.textureEmissive,n=>t.get(n))),occlusionTexture:T(w(e.textureOcclusion,n=>t.get(n))),alphaMode:Re(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:T(w(e.textureMetallicRoughness,n=>t.get(n))),colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform})}function ye(e,t,o){t.writeVertices&&Ae(e,t);const s=t.gltf,n=Ee(s.indices||s.attributes.position.count,s.primitiveType),m=t.region.start;if(m)for(let c=0;c<n.length;c++)n[c]+=m;e.components.push(new j({faces:n,material:o.get(s.material),trustSourceNormals:!0}))}function Ae(e,t){const{position:o,normal:s,tangent:n,color:m,texCoord0:c}=e.vertexAttributes,l=t.region.start,{attributes:i,transform:d}=t.gltf,f=i.position.count;if(K(o.slice(l,f),i.position,d),u(i.normal)&&u(s)){const r=M(B(),d),a=s.slice(l,f);Q(a,i.normal,r),F(r)&&X(a,a)}else u(s)&&Y(s,0,0,1,{dstIndex:l,count:f});if(u(i.tangent)&&u(n)){const r=M(B(),d),a=n.slice(l,f);Z(a,i.tangent,r),F(r)&&k(a,a)}else u(n)&&A(n,0,0,1,1,{dstIndex:l,count:f});if(u(i.texCoord0)&&u(c)?J(c.slice(l,f),i.texCoord0):u(c)&&W(c,0,0,{dstIndex:l,count:f}),u(i.color)&&u(m)){const r=i.color,a=m.slice(l,f);if(r.elementCount===4)r instanceof S?H(a,r,255):r instanceof q?ee(a,r):r instanceof te&&ne(a,r,8);else{A(a,255,255,255,255);const p=I.fromTypedArray(a.typedBuffer,a.typedBufferStride);r instanceof O?re(p,r,255):r instanceof I?oe(p,r):r instanceof se&&ae(p,r,8)}}else u(m)&&A(m.slice(l,f),255,255,255,255)}function Ee(e,t){switch(t){case E.TRIANGLES:return ce(e,$e);case E.TRIANGLE_STRIP:return ue(e);case E.TRIANGLE_FAN:return ie(e)}}function Re(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ce(e){return{horizontal:L(e.s),vertical:L(e.t)}}function L(e){switch(e){case R.CLAMP_TO_EDGE:return"clamp";case R.MIRRORED_REPEAT:return"mirror";case R.REPEAT:return"repeat"}}function $(e){return e**(1/ve)*255}function Me(e,t){return le($(e[0]),$(e[1]),$(e[2]),t)}function Be(e){return fe($(e[0]),$(e[1]),$(e[2]))}export{Le as loadGLTFMesh};