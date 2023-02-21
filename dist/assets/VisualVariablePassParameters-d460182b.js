import{O as c}from"./VertexAttribute-9c5c630d.js";import{C as M,F as _e,M as fe,P as he,G as pe,L as Oe}from"./enums-64ab819c.js";import{t as F}from"./VertexElementDescriptor-2925c6af.js";import{b as Be,E as Me}from"./FramebufferObject-a3b9c52c.js";import{E as ve}from"./Texture-243be4d7.js";import{U as Ge}from"./request-6fc81c4c.js";import{t as Ye,i as Fe,a as Ee}from"./ShaderBuilder-a7d0da4e.js";import{e as We}from"./mat3f64-c6305894.js";import{n as ne,r as ee}from"./vec3f64-2f9cef06.js";import{r as k,t as ge,x as qe}from"./typedArrayUtil-4d7bb04c.js";import{k as Xe}from"./cast-fcb46737.js";import{h as ce,m as re,a as xe}from"./mathUtils-b4bb77e2.js";import{o as ue,_ as je,z as ke}from"./vec3-e93e648f.js";import{a as He,d as Ze,q as Je}from"./aaBoundingBox-657a9b82.js";import{a as Ke}from"./basicInterfaces-19ed850e.js";import{l as Qe}from"./ViewingMode-5d7d590b.js";import{h as et,e as tt}from"./Util-a48361c6.js";import{u as rt,n as at,h as it,o as nt}from"./mat4-44a0988f.js";import{e as st}from"./mat4f64-1e28eae0.js";const Ae=new Map([[c.POSITION,0],[c.NORMAL,1],[c.UV0,2],[c.COLOR,3],[c.SIZE,4],[c.TANGENT,4],[c.AUXPOS1,5],[c.SYMBOLCOLOR,5],[c.AUXPOS2,6],[c.FEATUREATTRIBUTE,6],[c.INSTANCEFEATUREATTRIBUTE,6],[c.INSTANCECOLOR,7],[c.OBJECTANDLAYERIDCOLOR,7],[c.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[c.MODEL,8],[c.MODELNORMAL,12],[c.MODELORIGINHI,11],[c.MODELORIGINLO,15]]);new F(c.POSITION,3,M.FLOAT,0,12);new F(c.POSITION,3,M.FLOAT,0,20),new F(c.UV0,2,M.FLOAT,12,20);new F(c.POSITION,3,M.FLOAT,0,32),new F(c.NORMAL,3,M.FLOAT,12,32),new F(c.UV0,2,M.FLOAT,24,32);new F(c.POSITION,3,M.FLOAT,0,16),new F(c.COLOR,4,M.UNSIGNED_BYTE,12,16);const Ie=[new F(c.POSITION,2,M.FLOAT,0,8)],ot=[new F(c.POSITION,2,M.FLOAT,0,16),new F(c.UV0,2,M.FLOAT,8,16)];let Le=class extends Be{};function Wt(e,t=Ie,a=Ae,r=-1,i=1){let n=null;return t===ot?n=new Float32Array([r,r,0,0,i,r,1,0,r,i,0,1,i,i,1,1]):n=new Float32Array([r,r,i,r,r,i,i,i]),new Le(e,a,{geometry:t},{geometry:Me.createVertex(e,_e.STATIC_DRAW,n)})}function qt(e,t=Ie,a=Ae){const r=new Float32Array([-1,-1,3,-1,-1,3]);return new Le(e,a,{geometry:t},{geometry:Me.createVertex(e,_e.STATIC_DRAW,r)})}const ye=4;function Xt(e,t=ye){return new ve(e,{target:fe.TEXTURE_2D,pixelFormat:he.RGBA,dataType:pe.UNSIGNED_BYTE,samplingMode:Oe.NEAREST,width:t,height:t})}function jt(e,t,a=ye){const r=new Uint8Array(a*a*4);for(let i=0;i<r.length;i+=4)r[i+0]=255*t[0],r[i+1]=255*t[1],r[i+2]=255*t[2],r[i+3]=255*t[3];return new ve(e,{target:fe.TEXTURE_2D,pixelFormat:he.RGBA,dataType:pe.UNSIGNED_BYTE,samplingMode:Oe.NEAREST,width:a,height:a},r)}function kt(e){return new ve(e,{target:fe.TEXTURE_2D,pixelFormat:he.RGBA,dataType:pe.UNSIGNED_BYTE,samplingMode:Oe.NEAREST,width:1,height:1},new Uint8Array([255,255,255,255]))}let lt=class{constructor(){this.id=Xe()}unload(){}};var de;(function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT"})(de||(de={}));function ct(e,t,a){for(let r=0;r<a;++r)t[2*r]=e[r],t[2*r+1]=e[r]-t[2*r]}function Zt(e,t){const a=e.length;for(let r=0;r<a;++r)H[0]=e[r],t[r]=H[0];return t}function Jt(e,t){const a=e.length;for(let r=0;r<a;++r)H[0]=e[r],H[1]=e[r]-H[0],t[r]=H[1];return t}const H=new Float32Array(2);function Kt(e,t){return ge(e)&&(e=[]),e.push(t),e}function Qt(e,t){if(ge(e))return null;const a=e.filter(r=>r!==t);return a.length===0?null:a}function ut(e){return!!k(e)&&!e.visible}function er(e,t,a){const r=e.origin.vec3;et(oe,-r[0],-r[1],-r[2]),k(e.transformation)?rt(t,oe,e.transformation):at(t,oe),it(a,t),nt(a,a)}function tr(e,t,a,r,i){ae[0]=e.get(t,0),ae[1]=e.get(t,1),ae[2]=e.get(t,2),ct(ae,j,3),a.set(i,0,j[0]),r.set(i,0,j[1]),a.set(i,1,j[2]),r.set(i,1,j[3]),a.set(i,2,j[4]),r.set(i,2,j[5])}const ae=new Float64Array(3),j=new Float32Array(6),oe=st();function rr(e,t){return new se(e,Re,t)}function ar(e,t){const{curvatureDependent:a,scaleStart:r,scaleFallOffRange:i}=Re;return new se(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:le.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:le.curvatureDependent.max.scaleFallOffFactor}},scaleStart:r,scaleFallOffRange:i,minPixelSize:le.minPixelSize},t)}function dt(e){return Math.abs(e*e*e)}function Ce(e,t,a){const r=a.parameters,i=a.paddingPixelsOverride;return te.scale=Math.min(r.divisor/(t-r.offset),1),te.factor=dt(e),te.minPixelSize=r.minPixelSize,te.paddingPixels=i,te}function Ne(e,t){return e===0?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function be(e,t){return Math.max(ce(e*t.scale,e,t.factor),Ne(e,t))}function mt(e,t,a){const r=Ce(e,t,a);return r.minPixelSize=0,r.paddingPixels=0,be(1,r)}function ir(e,t,a,r){r.scale=mt(e,t,a),r.factor=0,r.minPixelSize=a.parameters.minPixelSize,r.paddingPixels=a.paddingPixelsOverride}function nr(e,t,a=[0,0]){const r=Math.min(Math.max(t.scale,Ne(e[1],t)/Math.max(1e-5,e[1])),1);return a[0]=e[0]*r,a[1]=e[1]*r,a}function ft(e,t,a,r){return be(e,Ce(t,a,r))}class se{constructor(t,a,r,i=ht(),n){this._viewingMode=t,this._description=a,this._ellipsoidRadius=r,this.parameters=i,this._paddingPixelsOverride=n,this._viewingMode===Qe.Local?(this._coverageCompensation=this._surfaceCoverageCompensationLocal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this._coverageCompensation=this._surfaceCoverageCompensationGlobal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal)}get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}update(t){return(!this.parameters||this.parameters.camera.fovY!==t.fovY||this.parameters.camera.distance!==t.distance)&&(this._calculateParameters(t,this._ellipsoidRadius,this.parameters),!0)}overridePadding(t){return t!==this.paddingPixelsOverride?new se(this._viewingMode,this._description,this._ellipsoidRadius,this.parameters,t):this}_calculateParameters(t,a,r){const{scaleStart:i,scaleFallOffRange:n,minPixelSize:o}=this._description,{fovY:s,distance:u}=t,l=this._calculateCurvatureDependentParameters(t,a),d=this._coverageCompensation(t,a,l),{tiltAngle:f,scaleFallOffFactor:h}=l,S=Math.sin(f)*u,v=.5*Math.PI-f-s*(.5-i*d),A=S/Math.cos(v),P=v+s*n*d,O=(A-h*(S/Math.cos(P)))/(1-h);return r.camera.fovY=t.fovY,r.camera.distance=t.distance,r.offset=O,r.divisor=A-O,r.minPixelSize=o,r}_calculateCurvatureDependentParametersLocal(t,a,r=Te){return r.tiltAngle=this._description.curvatureDependent.min.tiltAngle,r.scaleFallOffFactor=this._description.curvatureDependent.min.scaleFallOffFactor,r}_calculateCurvatureDependentParametersGlobal(t,a,r=Te){const i=this._description.curvatureDependent,n=1+t.distance/a,o=Math.sqrt(n*n-1),[s,u]=[i.min.curvature,i.max.curvature],l=xe((o-s)/(u-s),0,1),[d,f]=[i.min,i.max];return r.tiltAngle=ce(d.tiltAngle,f.tiltAngle,l),r.scaleFallOffFactor=ce(d.scaleFallOffFactor,f.scaleFallOffFactor,l),r}_surfaceCoverageCompensationLocal(t,a,r){return(t.fovY-r.tiltAngle)/t.fovY}_surfaceCoverageCompensationGlobal(t,a,r){const i=a*a,n=r.tiltAngle+.5*Math.PI,{fovY:o,distance:s}=t,u=s*s+i-2*Math.cos(n)*s*a,l=Math.sqrt(u),d=Math.sqrt(u-i);return(Math.acos(d/l)-Math.asin(a/(l/Math.sin(n)))+.5*o)/o}}const Re={curvatureDependent:{min:{curvature:re(10),tiltAngle:re(12),scaleFallOffFactor:.5},max:{curvature:re(70),tiltAngle:re(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},le={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function ht(){return{camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0}}const te={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Te={tiltAngle:0,scaleFallOffFactor:0},ie=He();function sr(e,t,a,r,i,n,o){if(!ut(t))if(e.boundingInfo){tt(e.primitiveType===Ke.Triangle);const s=a.tolerance;we(e.boundingInfo,r,i,s,n,o)}else{const s=e.indices.get(c.POSITION),u=e.vertexAttributes.get(c.POSITION);ze(r,i,0,s.length/3,s,u,void 0,n,o)}}const pt=ne();function we(e,t,a,r,i,n){if(ge(e))return;const o=vt(t,a,pt);if(Ze(ie,e.getBBMin()),Je(ie,e.getBBMax()),k(i)&&i.applyToAabb(ie),gt(ie,t,o,r)){const{primitiveIndices:s,indices:u,position:l}=e,d=s?s.length:u.length/3;if(d>Tt){const f=e.getChildren();if(f!==void 0){for(let h=0;h<8;++h)f[h]!==void 0&&we(f[h],t,a,r,i,n);return}}ze(t,a,0,d,u,l,s,i,n)}}const De=ne();function ze(e,t,a,r,i,n,o,s,u){if(o)return Ot(e,t,a,r,i,n,o,s,u);const l=n.data,d=n.stride||n.size,f=e[0],h=e[1],S=e[2],v=t[0]-f,A=t[1]-h,P=t[2]-S;for(let O=a,L=3*a;O<r;++O){let p=d*i[L++],m=l[p++],g=l[p++],x=l[p];p=d*i[L++];let T=l[p++],E=l[p++],z=l[p];p=d*i[L++];let U=l[p++],V=l[p++],B=l[p];k(s)&&([m,g,x]=s.applyToVertex(m,g,x,O),[T,E,z]=s.applyToVertex(T,E,z,O),[U,V,B]=s.applyToVertex(U,V,B,O));const D=T-m,y=E-g,C=z-x,N=U-m,b=V-g,R=B-x,G=A*R-b*P,Z=P*N-R*v,J=v*b-N*A,_=D*G+y*Z+C*J;if(Math.abs(_)<=Number.EPSILON)continue;const $=f-m,Y=h-g,W=S-x,I=$*G+Y*Z+W*J;if(_>0){if(I<0||I>_)continue}else if(I>0||I<_)continue;const w=Y*C-y*W,K=W*D-C*$,Q=$*y-D*Y,q=v*w+A*K+P*Q;if(_>0){if(q<0||I+q>_)continue}else if(q>0||I+q<_)continue;const X=(N*w+b*K+R*Q)/_;X>=0&&u(X,Ue(D,y,C,N,b,R,De),O,!1)}}function Ot(e,t,a,r,i,n,o,s,u){const l=n.data,d=n.stride||n.size,f=e[0],h=e[1],S=e[2],v=t[0]-f,A=t[1]-h,P=t[2]-S;for(let O=a;O<r;++O){const L=o[O];let p=3*L,m=d*i[p++],g=l[m++],x=l[m++],T=l[m];m=d*i[p++];let E=l[m++],z=l[m++],U=l[m];m=d*i[p];let V=l[m++],B=l[m++],D=l[m];k(s)&&([g,x,T]=s.applyToVertex(g,x,T,O),[E,z,U]=s.applyToVertex(E,z,U,O),[V,B,D]=s.applyToVertex(V,B,D,O));const y=E-g,C=z-x,N=U-T,b=V-g,R=B-x,G=D-T,Z=A*G-R*P,J=P*b-G*v,_=v*R-b*A,$=y*Z+C*J+N*_;if(Math.abs($)<=Number.EPSILON)continue;const Y=f-g,W=h-x,I=S-T,w=Y*Z+W*J+I*_;if($>0){if(w<0||w>$)continue}else if(w>0||w<$)continue;const K=W*N-C*I,Q=I*y-N*Y,q=Y*C-y*W,X=v*K+A*Q+P*q;if($>0){if(X<0||w+X>$)continue}else if(X>0||w+X<$)continue;const Pe=(b*K+R*Q+G*q)/$;Pe>=0&&u(Pe,Ue(y,C,N,b,R,G,De),L,!1)}}const $e=ne(),Se=ne();function Ue(e,t,a,r,i,n,o){return ue($e,e,t,a),ue(Se,r,i,n),je(o,$e,Se),ke(o,o),o}function vt(e,t,a){return ue(a,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function gt(e,t,a,r){return xt(e,t,a,r,1/0)}function xt(e,t,a,r,i){const n=(e[0]-r-t[0])*a[0],o=(e[3]+r-t[0])*a[0];let s=Math.min(n,o),u=Math.max(n,o);const l=(e[1]-r-t[1])*a[1],d=(e[4]+r-t[1])*a[1];if(u=Math.min(u,Math.max(l,d)),u<0||(s=Math.max(s,Math.min(l,d)),s>u))return!1;const f=(e[2]-r-t[2])*a[2],h=(e[5]+r-t[2])*a[2];return u=Math.min(u,Math.max(f,h)),!(u<0)&&(s=Math.max(s,Math.min(f,h)),!(s>u)&&s<i)}function or(e,t,a,r,i){let n=(a.screenLength||0)*e.pixelRatio;k(i)&&(n=ft(n,r,t,i));const o=n*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return xe(o*t,a.minWorldLength||0,a.maxWorldLength!=null?a.maxWorldLength:1/0)}function Ve(e,t){const a=t?Ve(t):{};for(const r in e){let i=e[r];i&&i.forEach&&(i=Pt(i)),i==null&&r in a||(a[r]=i)}return a}function At(e,t){let a=!1;for(const r in t){const i=t[r];i!==void 0&&(Array.isArray(i)?e[r]===null?(e[r]=i.slice(),a=!0):qe(e[r],i)&&(a=!0):e[r]!==i&&(a=!0,e[r]=i))}return a}function lr(e,t,a,r,i,n){if(!t.options.selectionMode)return;const o=e.vertexAttributes.get(c.POSITION).data,s=e.vertexAttributes.get(c.SIZE),u=s&&s.data[0],l=r[0],d=r[1],f=((u+i)/2+4)*e.screenToWorldRatio;let h=Number.MAX_VALUE,S=0;for(let v=0;v<o.length-5;v+=3){const A=o[v],P=o[v+1],O=l-A,L=d-P,p=o[v+3]-A,m=o[v+4]-P,g=xe((p*O+m*L)/(p*p+m*m),0,1),x=p*g-O,T=m*g-L,E=x*x+T*T;E<h&&(h=E,S=v/3)}h<f*f&&n(a.dist,a.normal,S,!1)}function Pt(e){const t=[];return e.forEach(a=>t.push(a)),t}const cr={multiply:1,ignore:2,replace:3,tint:4},Tt=1e3;class ur extends lt{constructor(t,a){super(),this.type=de.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Ae,this._parameters=Ve(t,a),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(t){return!1}setParameters(t,a=!0){At(this._parameters,t)&&(this.validateParameters(this._parameters),a&&this.parametersChanged())}validateParameters(t){}get visible(){return this._visible}set visible(t){t!==this._visible&&(this._visible=t,this.parametersChanged())}shouldRender(t){return this.isVisible()&&this.isVisibleForOutput(t.output)&&(this.renderOccluded&t.renderOccludedMask)!=0}isVisibleForOutput(t){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(t){t!==this._renderPriority&&(this._renderPriority=t,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(t){t!==this._insertOrder&&(this._insertOrder=t,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){k(this.repository)&&this.repository.materialChanged(this)}}var me;(function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"})(me||(me={}));class $t extends Ye{constructor(){super(...arguments),this.renderOccluded=me.Occlude}}async function dr(e,t){const{data:a}=await Ge(e,{responseType:"image",...t});return a}class mr extends Fe{constructor(t,a,r){super(t,"vec4",Ee.Pass,(i,n,o)=>i.setUniform4fv(t,a(n,o)),r)}}let fr=class extends Fe{constructor(t,a,r){super(t,"float",Ee.Pass,(i,n,o)=>i.setUniform1fv(t,a(n,o)),r)}};class pr extends $t{constructor(){super(...arguments),this.vvSizeEnabled=!1,this.vvSizeMinSize=ee(1,1,1),this.vvSizeMaxSize=ee(100,100,100),this.vvSizeOffset=ee(0,0,0),this.vvSizeFactor=ee(1,1,1),this.vvSizeValue=ee(1,1,1),this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvOpacityEnabled=!1,this.vvOpacityValues=[0,0,0,0,0,0,0,0],this.vvOpacityOpacities=[1,1,1,1,1,1,1,1],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=We()}}const Or=8;export{ot as A,dr as B,Ie as C,qt as D,Ae as E,ct as F,mr as G,Or as H,Zt as I,Jt as J,At as K,or as L,vt as N,gt as O,Ve as S,cr as U,xt as V,ut as a,ir as b,me as c,ur as d,lt as e,nr as f,de as g,Kt as h,Qt as i,$t as j,lr as k,er as l,ze as m,rr as n,be as o,tr as p,ar as q,Le as r,kt as s,fr as t,Wt as u,pr as v,jt as w,sr as x,Xt as y,Ue as z};
