import{a as Ho}from"./devEnvironmentUtils-5002a058.js";import{az as ct,R as f,p as Yr,$ as z,a1 as Xr,aD as Se,d3 as cr,aC as Ht,aI as Ze,cH as ti,aH as Ye,eb as jo,o as q,aE as se,f as w,aB as jt,r as ae,q as pt,bI as Wo,ao as Jr,k as he,u as ce,t as vt,A as dr,aF as Te,e as _,b6 as qo,br as ko,dm as ri,m as Fe,g as Zr,_ as ai,bQ as Yo,O as Tt,a8 as Xo,bv as Br,f0 as ba,B as ii,C as Ta,iJ as Jo,J as Sa,aR as Zo,an as ur,Y as Xt,iK as Ko,cA as Kr,cl as Gr,bR as Qo,z as Qr,cX as es,cY as ts,ff as rs,d0 as oi,iL as si,aM as Sr,fg as as,iM as is,eN as hr,a6 as os,ih as ya,gq as ss,iN as Et,iO as $t,cU as wa,iP as ns,ca as ls,ae as cs,cz as ni,ef as Ma,ah as ds,a3 as st,x as us,dV as Cr,f8 as yt,P as hs,bt as ms,aJ as fs,iQ as ps,iR as vs,iS as Or,h5 as Aa,iT as gs,c4 as li,ep as xs,dO as ci,cc as Ca,bW as di,c3 as mr,dD as _s,dF as Oa,iU as Ea}from"./calcite-c5ae4991.js";import{e as Ve}from"./mat3f64-50f3b9f6.js";import{e as et,o as fr,r as bs}from"./mat4f64-abdda1bb.js";import{c as pr,x as Vt,u as ui,i as gt,L as Ts,O as $a,E as Ss}from"./BufferView-bc307796.js";import{t as ys,r as ws,f as Pa,e as Ms}from"./vec33-164586fc.js";import{m as As,n as Cs,o as dt,r as Ke,a as Os,b as Es,c as Ra,e as $s,t as Ps,i as Rs,f as Ls,d as Is}from"./DefaultMaterial_COLOR_GAMMA-941dbf6c.js";import{t as Er}from"./resourceUtils-527631ac.js";import{t as Fs}from"./NestedMap-1b5db22e.js";import{r as hi}from"./Version-e2fa8281.js";import{t as mi}from"./requestImageUtils-67552ee5.js";import{r as $e,s as mt}from"./symbolColorUtils-14fb8f64.js";import{N as Vr,t as Ns,D as $r,c as Pt,a as Be,u as X,n as Ge,e as Wt}from"./basicInterfaces-7449a8bf.js";import{s as k,v as zs}from"./Util-2b929b00.js";import{s as fi,R as pi}from"./sphere-5ce3b13c.js";import{o as La,n as Ds}from"./Indices-84de656e.js";import{O as m}from"./VertexAttribute-15d1866a.js";import{t as Bs,o as Gs,r as Vs}from"./doublePrecisionUtils-e3c3d0d8.js";import{o as l,n as we,W as ea,_ as ta,a as St,c as Us,A as Hs,h as js,d as Ws,b as qs,f as ks,S as Ys}from"./OrderIndependentTransparency-5f7257d7.js";import{_ as qt}from"./index-9a6385f7.js";import{E as De,C as pe,M as nt,P as de,G as lt,L as ve,F as vi,u as Le,D as tt,Y as gi,V as xi,I as ye,O as K}from"./enums-e2e92c86.js";import{a as Xs,E as ue}from"./Texture-3d2bcec7.js";import{f as Js,E as _i,_ as Zs,x as or,n as bi}from"./FramebufferObject-d9042b3f.js";import{t as ge}from"./VertexElementDescriptor-2925c6af.js";import{T as Ks}from"./InterleavedLayout-45bbbdfe.js";import{r as Qs,n as Ur}from"./vec3f32-01c06d8d.js";import{S as en}from"./quat-8dcd84de.js";import{e as tn}from"./quatf64-f8f1c132.js";var te;function xt(t,e){switch(e.textureCoordinateType){case te.Default:return t.attributes.add(m.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(l`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case te.Compressed:return t.attributes.add(m.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(l`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case te.Atlas:return t.attributes.add(m.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(m.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(l`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:ct(e.textureCoordinateType);case te.None:return void t.vertex.code.add(l`void forwardTextureCoordinates() {}`);case te.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(te||(te={}));function ra(t){t.code.add(l`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function aa(t){t.include(ra),t.code.add(l`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}var D;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(D||(D={}));let Z=class{constructor(e,r,a,i,o=null){this.name=e,this.type=r,this.arraySize=o,this.bind={[D.Pass]:null,[D.Draw]:null},f(a)&&f(i)&&(this.bind[a]=i)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},j=class extends Z{constructor(e,r){super(e,"vec3",D.Pass,(a,i,o)=>a.setUniform3fv(e,r(i,o)))}},re=class extends Z{constructor(e,r){super(e,"float",D.Pass,(a,i,o)=>a.setUniform1f(e,r(i,o)))}};function ia(t){t.uniforms.add(new j("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function yr(t){t.uniforms.add(new j("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function rn(t,e){e.useLegacyTerrainShading?t.uniforms.add(new re("lightingFixedFactor",(r,a)=>a.lighting.noonFactor*(1-a.lighting.globalFactor))):t.constants.add("lightingFixedFactor","float",0)}function Ia(t,e){const r=t.fragment;ia(r),yr(r),rn(r,e),r.code.add(l`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}let fe=class extends Z{constructor(e,r){super(e,"vec2",D.Pass,(a,i,o)=>a.setUniform2fv(e,r(i,o)))}},ee=class extends Z{constructor(e,r){super(e,"vec4",D.Pass,(a,i,o)=>a.setUniform4fv(e,r(i,o)))}},rt=class extends Z{constructor(e,r){super(e,"mat4",D.Pass,(a,i,o)=>a.setUniformMatrix4fv(e,r(i,o)))}};const Ti=Yr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Si=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const a=this._includedModules.get(e);if(a!==r){Ti.error("Trying to include shader module multiple times with different sets of options.");const i=new Set;for(const o of Object.keys(a))a[o]!==e[o]&&i.add(o);for(const o of Object.keys(e))a[o]!==e[o]&&i.add(o);i.forEach(o=>console.error(`  ${o}: current ${a[o]} new ${e[o]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},kt=class extends Si{constructor(){super(...arguments),this.vertex=new Fa,this.fragment=new Fa,this.attributes=new sn,this.varyings=new nn,this.extensions=new Hr,this.constants=new yi}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),a=this.attributes.generateSource(e),i=this.varyings.generateSource(),o=e==="vertex"?this.vertex:this.fragment,s=o.uniforms.generateSource(),n=o.code.generateSource(),c=e==="vertex"?cn:ln,d=this.constants.generateSource().concat(o.constants.generateSource());return`
${r.join(`
`)}

${c}

${d.join(`
`)}

${s.join(`
`)}

${a.join(`
`)}

${i.join(`
`)}

${n.join(`
`)}`}generateBind(e,r){const a=new Map;this.vertex.uniforms.entries.forEach(s=>{const n=s.bind[e];f(n)&&a.set(s.name,n)}),this.fragment.uniforms.entries.forEach(s=>{const n=s.bind[e];f(n)&&a.set(s.name,n)});const i=Array.from(a.values()),o=i.length;return(s,n,c)=>{for(let d=0;d<o;++d)i[d](r,s,n,c)}}},an=class{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(z(e))Ti.error(`Trying to add null Uniform from ${new Error().stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new Xr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map(e=>f(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},on=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},Fa=class extends Si{constructor(){super(...arguments),this.uniforms=new an,this.code=new on,this.constants=new yi}get builder(){return this}},sn=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}},nn=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}},Hr=class jr{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?jr.ALLOWLIST_VERTEX:jr.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(a=>r.includes(a)).map(a=>`#extension ${a} : enable`)}};Hr.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Hr.ALLOWLIST_VERTEX=[];let yi=class H{constructor(){this._entries=new Set}add(e,r,a){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=H._numberToFloatStr(a);break;case"int":i=H._numberToIntStr(a);break;case"bool":i=a.toString();break;case"vec2":i=`vec2(${H._numberToFloatStr(a[0])},                            ${H._numberToFloatStr(a[1])})`;break;case"vec3":i=`vec3(${H._numberToFloatStr(a[0])},                            ${H._numberToFloatStr(a[1])},                            ${H._numberToFloatStr(a[2])})`;break;case"vec4":i=`vec4(${H._numberToFloatStr(a[0])},                            ${H._numberToFloatStr(a[1])},                            ${H._numberToFloatStr(a[2])},                            ${H._numberToFloatStr(a[3])})`;break;case"ivec2":i=`ivec2(${H._numberToIntStr(a[0])},                             ${H._numberToIntStr(a[1])})`;break;case"ivec3":i=`ivec3(${H._numberToIntStr(a[0])},                             ${H._numberToIntStr(a[1])},                             ${H._numberToIntStr(a[2])})`;break;case"ivec4":i=`ivec4(${H._numberToIntStr(a[0])},                             ${H._numberToIntStr(a[1])},                             ${H._numberToIntStr(a[2])},                             ${H._numberToIntStr(a[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(a,o=>H._numberToFloatStr(o)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const ln=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,cn=`precision highp float;
precision highp sampler2D;`,oa="Size",wr="InvSize";function _t(t,e,r=!1,a=0){if(t.hasWebGL2Context){const i=l`vec2(textureSize(${e}, ${l.int(a)}))`;return r?"(1.0 / "+i+")":i}return r?e+wr:e+oa}function dn(t,e,r,a=null,i=0){if(t.hasWebGL2Context)return l`texelFetch(${e}, ivec2(${r}), ${l.int(i)})`;let o=l`texture2D(${e}, ${r} * `;return o+=a?l`(${a}))`:l`${e+wr})`,o}var J;(function(t){t[t.None=0]="None",t[t.Size=1]="Size",t[t.InvSize=2]="InvSize"})(J||(J={}));let oe=class extends Z{constructor(e,r){super(e,"sampler2D",D.Pass,(a,i,o)=>a.bindTexture(e,r(i,o)))}};function at(t,e,r=J.None){const a=[new oe(t,e)];if(r&J.Size){const i=t+oa;a.push(new fe(i,(o,s)=>{const n=e(o,s);return f(n)?Se(Na,n.descriptor.width,n.descriptor.height):cr}))}if(r&J.InvSize){const i=t+wr;a.push(new fe(i,(o,s)=>{const n=e(o,s);return f(n)?Se(Na,1/n.descriptor.width,1/n.descriptor.height):cr}))}return a}const Na=Ht();let Mr=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},sa=class{constructor(e,r,a){this.release=a,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Ze(this._program),this._pipeline=this._configuration=null}reload(e){Ze(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,a){e.setPipelineState(this.getPipelineState(r,a))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return De.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}};const wt=new Map([[m.POSITION,0],[m.NORMAL,1],[m.UV0,2],[m.COLOR,3],[m.SIZE,4],[m.TANGENT,4],[m.AUXPOS1,5],[m.SYMBOLCOLOR,5],[m.AUXPOS2,6],[m.FEATUREATTRIBUTE,6],[m.INSTANCEFEATUREATTRIBUTE,6],[m.INSTANCECOLOR,7],[m.OBJECTANDLAYERIDCOLOR,7],[m.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[m.MODEL,8],[m.MODELNORMAL,12],[m.MODELORIGINHI,11],[m.MODELORIGINLO,15]]);let na=class{constructor(e,r,a){this._context=e,this._locations=a,this._textures=new Map,this._freeTextureUnits=new ti({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),a),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBind(D.Pass,this),this.bindDraw=r.generateBind(D.Draw,this),this._fragmentUniforms=Xs()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(z(r)||r.glName==null){const i=this._textures.get(e);return i&&(this._context.bindTexture(null,i.unit),this._freeTextureUnit(i),this._textures.delete(e)),null}let a=this._textures.get(e);return a==null?(a=this._allocTextureUnit(r),this._textures.set(e,a)):a.texture=r,this._context.useProgram(this),this.setUniform1i(e,a.unit),this._context.bindTexture(r,a.unit),a.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),f(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}},wi=class extends we{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const a of e)r[a]=this[a];return r}};function b(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const a=e._parameterNames.length-1,i=t.count||2,o=Math.ceil(Math.log2(i)),s=e._parameterBits??[0];let n=0;for(;s[n]+o>16;)n++,n>=s.length&&s.push(0);e._parameterBits=s;const c=s[n],d=(1<<o)-1<<c;s[n]+=o,Object.defineProperty(e,r,{get(){return this[a]},set(u){if(this[a]!==u&&(this[a]=u,this._keyDirty=!0,this._parameterBits[n]=this._parameterBits[n]&~d|+u<<c&d,typeof u!="number"&&typeof u!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof u)}})}}}new ge(m.POSITION,3,pe.FLOAT,0,12);new ge(m.POSITION,3,pe.FLOAT,0,20),new ge(m.UV0,2,pe.FLOAT,12,20);new ge(m.POSITION,3,pe.FLOAT,0,32),new ge(m.NORMAL,3,pe.FLOAT,12,32),new ge(m.UV0,2,pe.FLOAT,24,32);new ge(m.POSITION,3,pe.FLOAT,0,16),new ge(m.COLOR,4,pe.UNSIGNED_BYTE,12,16);const Mi=[new ge(m.POSITION,2,pe.FLOAT,0,8)],un=[new ge(m.POSITION,2,pe.FLOAT,0,16),new ge(m.UV0,2,pe.FLOAT,8,16)];let Ai=class extends Js{};function Ci(t,e=Mi,r=wt,a=-1,i=1){let o=null;return e===un?o=new Float32Array([a,a,0,0,i,a,1,0,a,i,0,1,i,i,1,1]):o=new Float32Array([a,a,i,a,a,i,i,i]),new Ai(t,r,{geometry:e},{geometry:_i.createVertex(t,vi.STATIC_DRAW,o)})}function du(t,e=Mi,r=wt){const a=new Float32Array([-1,-1,3,-1,-1,3]);return new Ai(t,r,{geometry:e},{geometry:_i.createVertex(t,vi.STATIC_DRAW,a)})}const Oi=4;function uu(t,e=Oi){return new ue(t,{target:nt.TEXTURE_2D,pixelFormat:de.RGBA,dataType:lt.UNSIGNED_BYTE,samplingMode:ve.NEAREST,width:e,height:e})}function hu(t,e,r=Oi){const a=new Uint8Array(r*r*4);for(let i=0;i<a.length;i+=4)a[i+0]=255*e[0],a[i+1]=255*e[1],a[i+2]=255*e[2],a[i+3]=255*e[3];return new ue(t,{target:nt.TEXTURE_2D,pixelFormat:de.RGBA,dataType:lt.UNSIGNED_BYTE,samplingMode:ve.NEAREST,width:r,height:r},a)}function mu(t){return new ue(t,{target:nt.TEXTURE_2D,pixelFormat:de.RGBA,dataType:lt.UNSIGNED_BYTE,samplingMode:ve.NEAREST,width:1,height:1},new Uint8Array([255,255,255,255]))}function hn(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(l`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function Ei(t,e){switch(t.include(xt,e),t.fragment.code.add(l`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.textureCoordinateType){case te.Default:case te.Compressed:return void t.fragment.code.add(l`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case te.Atlas:return t.include(hn),void t.fragment.code.add(l`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:ct(e.textureCoordinateType);case te.None:case te.COUNT:return}}let xe=class extends Z{constructor(e,r){super(e,"vec3",D.Draw,(a,i,o,s)=>a.setUniform3fv(e,r(i,o,s)))}},Wr=class extends Z{constructor(e,r){super(e,"vec2",D.Draw,(a,i,o,s)=>a.setUniform2fv(e,r(i,o,s)))}},$i=class extends Z{constructor(e,r){super(e,"sampler2D",D.Draw,(a,i,o)=>a.bindTexture(e,r(i,o)))}};function sr(t,e,r=J.None){const a=[new $i(t,e)];if(r&J.Size){const i=t+oa;a.push(new Wr(i,(o,s)=>{const n=e(o,s);return f(n)?Se(za,n.descriptor.width,n.descriptor.height):cr}))}if(r&J.InvSize){const i=t+wr;a.push(new Wr(i,(o,s)=>{const n=e(o,s);return f(n)?Se(za,1/n.descriptor.width,1/n.descriptor.height):cr}))}return a}const za=Ht();let mn=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return Vr.LOADED}},fn=class extends mn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Ye(this._texture),this._textureNormal=Ye(this._textureNormal),this._textureEmissive=Ye(this._textureEmissive),this._textureOcclusion=Ye(this._textureOcclusion),this._textureMetallicRoughness=Ye(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?Vr.LOADED:Vr.LOADING}get textureBindParameters(){return new pn(f(this._texture)?this._texture.glTexture:null,f(this._textureNormal)?this._textureNormal.glTexture:null,f(this._textureEmissive)?this._textureEmissive.glTexture:null,f(this._textureOcclusion)?this._textureOcclusion.glTexture:null,f(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(z(this._texture)||e!==this._texture.id)&&(this._texture=Ye(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(z(e))return void r(null);const a=this._textureRepository.acquire(e);if(jo(a))return++this._numLoading,void a.then(i=>{if(this._disposed)return Ye(i),void r(null);r(i)}).finally(()=>--this._numLoading);r(a)}},pn=class extends we{constructor(e=null,r=null,a=null,i=null,o=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=a,this.textureOcclusion=i,this.textureMetallicRoughness=o}};const bu=Qs(0,.6,.2);var F;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Terrain=5]="Terrain",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(F||(F={}));function Pi(t,e){const r=t.fragment,a=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===F.Normal&&a&&t.include(Ei,e),e.pbrMode!==F.Schematic)if(e.pbrMode!==F.Disabled){if(e.pbrMode===F.Normal){r.code.add(l`vec3 mrr;
vec3 emission;
float occlusion;`);const i=e.supportsTextureAtlas?e.hasWebGL2Context?J.None:J.Size:J.None,o=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(o===D.Pass?at("texMetallicRoughness",s=>s.textureMetallicRoughness,i):sr("texMetallicRoughness",s=>s.textureMetallicRoughness,i)),r.code.add(l`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(o===D.Pass?at("texEmission",s=>s.textureEmissive,i):sr("texEmission",s=>s.textureEmissive,i)),r.code.add(l`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(o===D.Pass?at("texOcclusion",s=>s.textureOcclusion,i):sr("texOcclusion",s=>s.textureOcclusion,i)),r.code.add(l`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(l`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(o===D.Pass?[new j("emissionFactor",s=>s.emissiveFactor),new j("mrrFactors",s=>s.mrrFactors)]:[new xe("emissionFactor",s=>s.emissiveFactor),new xe("mrrFactors",s=>s.mrrFactors)]),r.code.add(l`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?l`vtc.uv = vuv0;`:""}
      ${e.hasMetallicRoughnessTextureTransform?l`vtc.uv = metallicRoughnessUV;`:""}
      ${e.hasMetallicRoughnessTexture?e.supportsTextureAtlas?l`
                vtc.size = ${_t(e,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:l`applyMetallnessAndRoughness(vtc);`:""}
      ${e.hasEmissiveTextureTransform?l`vtc.uv = emissiveUV;`:""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?l`
                vtc.size = ${_t(e,"texEmission")};
                applyEmission(vtc);`:l`applyEmission(vtc);`:""}
      ${e.hasOcclusionTextureTransform?l`vtc.uv = occlusionUV;`:""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?l`
                vtc.size = ${_t(e,"texOcclusion")};
                applyOcclusion(vtc);`:l`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(l`float getBakedOcclusion() { return 1.0; }`);else r.code.add(l`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function vn(t,e){const r=t.fragment,a=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;a===0?(r.uniforms.add(new j("lightingAmbientSH0",(i,o)=>q(Da,o.lighting.sh.r[0],o.lighting.sh.g[0],o.lighting.sh.b[0]))),r.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===1?(r.uniforms.add([new ee("lightingAmbientSH_R",(i,o)=>se(Oe,o.lighting.sh.r[0],o.lighting.sh.r[1],o.lighting.sh.r[2],o.lighting.sh.r[3])),new ee("lightingAmbientSH_G",(i,o)=>se(Oe,o.lighting.sh.g[0],o.lighting.sh.g[1],o.lighting.sh.g[2],o.lighting.sh.g[3])),new ee("lightingAmbientSH_B",(i,o)=>se(Oe,o.lighting.sh.b[0],o.lighting.sh.b[1],o.lighting.sh.b[2],o.lighting.sh.b[3]))]),r.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===2&&(r.uniforms.add([new j("lightingAmbientSH0",(i,o)=>q(Da,o.lighting.sh.r[0],o.lighting.sh.g[0],o.lighting.sh.b[0])),new ee("lightingAmbientSH_R1",(i,o)=>se(Oe,o.lighting.sh.r[1],o.lighting.sh.r[2],o.lighting.sh.r[3],o.lighting.sh.r[4])),new ee("lightingAmbientSH_G1",(i,o)=>se(Oe,o.lighting.sh.g[1],o.lighting.sh.g[2],o.lighting.sh.g[3],o.lighting.sh.g[4])),new ee("lightingAmbientSH_B1",(i,o)=>se(Oe,o.lighting.sh.b[1],o.lighting.sh.b[2],o.lighting.sh.b[3],o.lighting.sh.b[4])),new ee("lightingAmbientSH_R2",(i,o)=>se(Oe,o.lighting.sh.r[5],o.lighting.sh.r[6],o.lighting.sh.r[7],o.lighting.sh.r[8])),new ee("lightingAmbientSH_G2",(i,o)=>se(Oe,o.lighting.sh.g[5],o.lighting.sh.g[6],o.lighting.sh.g[7],o.lighting.sh.g[8])),new ee("lightingAmbientSH_B2",(i,o)=>se(Oe,o.lighting.sh.b[5],o.lighting.sh.b[6],o.lighting.sh.b[7],o.lighting.sh.b[8]))]),r.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==F.Normal&&e.pbrMode!==F.Schematic||r.code.add(l`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Da=w(),Oe=jt();function la(t){t.vertex.code.add(l`const float PI = 3.141592653589793;`),t.fragment.code.add(l`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}let gn=class extends Z{constructor(e,r){super(e,"bool",D.Pass,(a,i,o)=>a.setUniform1b(e,r(i,o)))}};function xn(t){t.code.add(l`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function ca(t,e=!0){t.attributes.add(m.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(l`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?l`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}let Ri=class extends Z{constructor(e,r){super(e,"mat3",D.Draw,(a,i,o)=>a.setUniformMatrix3fv(e,r(i,o)))}};function vr(t,e){e.hasMultipassTerrain&&(t.fragment.include(aa),t.fragment.uniforms.add(new oe("terrainDepthTexture",(r,a)=>a.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new fe("nearFar",(r,a)=>a.camera.nearFar)),t.fragment.uniforms.add(new fe("inverseViewport",(r,a)=>a.inverseViewport)),t.fragment.code.add(l`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}let yu=class{constructor(){this.enabled=!1,this.cullAboveGround=!1}};var ft;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(ft||(ft={}));let _n=class{constructor(e=w()){this.intensity=e}},bn=class{constructor(e=w(),r=ae(.57735,.57735,.57735)){this.intensity=e,this.direction=r}},qr=class{constructor(e=w(),r=ae(.57735,.57735,.57735),a=!0,i=1,o=1){this.intensity=e,this.direction=r,this.castShadows=a,this.specularStrength=i,this.environmentStrength=o}},Li=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};function Tn(t,e,r){(r=r||t).length=t.length;for(let a=0;a<t.length;a++)r[a]=t[a]*e[a];return r}function Pr(t,e,r){(r=r||t).length=t.length;for(let a=0;a<t.length;a++)r[a]=t[a]*e;return r}function bt(t,e,r){(r=r||t).length=t.length;for(let a=0;a<t.length;a++)r[a]=t[a]+e[a];return r}function Ii(t){return(t+1)*(t+1)}function Sn(t){return Jr(Math.floor(Math.sqrt(t)-1),0,2)}function Fi(t,e,r){const a=t[0],i=t[1],o=t[2],s=r||[];return s.length=Ii(e),e>=0&&(s[0]=.28209479177),e>=1&&(s[1]=.4886025119*a,s[2]=.4886025119*o,s[3]=.4886025119*i),e>=2&&(s[4]=1.09254843059*a*i,s[5]=1.09254843059*i*o,s[6]=.31539156525*(3*o*o-1),s[7]=1.09254843059*a*o,s[8]=.54627421529*(a*a-i*i)),s}function yn(t,e){const r=Ii(t),a=e||{r:[],g:[],b:[]};a.r.length=a.g.length=a.b.length=r;for(let i=0;i<r;i++)a.r[i]=a.g[i]=a.b[i]=0;return a}function wn(t,e){const r=Sn(e.r.length);for(const a of t)Wo(kr,a.direction),Fi(kr,r,Pe),Tn(Pe,nr),Pr(Pe,a.intensity[0],ut),bt(e.r,ut),Pr(Pe,a.intensity[1],ut),bt(e.g,ut),Pr(Pe,a.intensity[2],ut),bt(e.b,ut);return e}function Mn(t,e){Fi(kr,0,Pe);for(const r of t)e.r[0]+=Pe[0]*nr[0]*r.intensity[0]*4*Math.PI,e.g[0]+=Pe[0]*nr[0]*r.intensity[1]*4*Math.PI,e.b[0]+=Pe[0]*nr[0]*r.intensity[2]*4*Math.PI;return e}function An(t,e,r,a){yn(e,a),q(r.intensity,0,0,0);let i=!1;const o=Cn,s=On,n=En;o.length=0,s.length=0,n.length=0;for(const c of t)c instanceof qr&&!i?(pt(r.direction,c.direction),pt(r.intensity,c.intensity),r.specularStrength=c.specularStrength,r.environmentStrength=c.environmentStrength,r.castShadows=c.castShadows,i=!0):c instanceof qr||c instanceof bn?o.push(c):c instanceof _n?s.push(c):c instanceof Li&&n.push(c);wn(o,a),Mn(s,a);for(const c of n)bt(a.r,c.r),bt(a.g,c.g),bt(a.b,c.b)}const Cn=[],On=[],En=[],Pe=[0],ut=[0],kr=w(),nr=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];let Ba=class{constructor(){this.color=w(),this.intensity=1}},$n=class{constructor(){this.direction=w(),this.ambient=new Ba,this.diffuse=new Ba}};const Ni=.4;let Pu=class{constructor(){this._shOrder=2,this._legacy=new $n,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new Li,this._mainLight=new qr(w(),ae(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){An(e,this._shOrder,this._mainLight,this._sphericalHarmonics),pt(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,he(this._legacy.diffuse.color,this._mainLight.intensity,r),pt(Jt,this._legacy.diffuse.color),he(Jt,Jt,Ni*this.globalFactor),ce(this._legacy.ambient.color,this._legacy.ambient.color,Jt)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),this._mainLight.direction=vt(e.mainLight.direction),this._mainLight.intensity=vt(e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,r,a){if(dr(this._mainLight.intensity,e.mainLight.intensity,r.mainLight.intensity,a),this._mainLight.environmentStrength=Te(e.mainLight.environmentStrength,r.mainLight.environmentStrength,a),this._mainLight.specularStrength=Te(e.mainLight.specularStrength,r.mainLight.specularStrength,a),pt(this._mainLight.direction,r.mainLight.direction),this._mainLight.castShadows=r.mainLight.castShadows,this.globalFactor=Te(e.globalFactor,r.globalFactor,a),this.noonFactor=Te(e.noonFactor,r.noonFactor,a),e.sh.r.length===r.sh.r.length)for(let i=0;i<r.sh.r.length;i++)this._sphericalHarmonics.r[i]=Te(e.sh.r[i],r.sh.r[i],a),this._sphericalHarmonics.g[i]=Te(e.sh.g[i],r.sh.g[i],a),this._sphericalHarmonics.b[i]=Te(e.sh.b[i],r.sh.b[i],a);else for(let i=0;i<r.sh.r.length;i++)this._sphericalHarmonics.r[i]=r.sh.r[i],this._sphericalHarmonics.g[i]=r.sh.g[i],this._sphericalHarmonics.b[i]=r.sh.b[i]}};const Jt=w();let ze=class extends wi{constructor(){super(...arguments),this.hasWebGL2Context=!1}};_([b({constValue:!0})],ze.prototype,"hasSliceHighlight",void 0),_([b({constValue:!1})],ze.prototype,"hasSliceInVertexProgram",void 0),_([b({constValue:!1})],ze.prototype,"instancedDoublePrecision",void 0),_([b({constValue:!1})],ze.prototype,"useLegacyTerrainShading",void 0),_([b({constValue:!1})],ze.prototype,"hasModelTransformation",void 0),_([b({constValue:D.Pass})],ze.prototype,"pbrTextureBindType",void 0),_([b()],ze.prototype,"hasWebGL2Context",void 0);var M;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(M||(M={}));function da(t){t.attributes.add(m.POSITION,"vec3"),t.vertex.code.add(l`vec3 positionModel() { return position; }`)}function zi({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(l`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(l`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let Ue=class extends Z{constructor(e,r){super(e,"mat3",D.Pass,(a,i,o)=>a.setUniformMatrix3fv(e,r(i,o)))}};function Di(t,e){t.include(da);const r=t.vertex;r.include(zi,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add([new j("transformWorldFromViewTH",a=>a.transformWorldFromViewTH),new j("transformWorldFromViewTL",a=>a.transformWorldFromViewTL),new Ue("transformViewFromCameraRelativeRS",a=>a.transformViewFromCameraRelativeRS),new rt("transformProjFromView",a=>a.transformProjFromView),new Ri("transformWorldFromModelRS",a=>a.transformWorldFromModelRS),new xe("transformWorldFromModelTH",a=>a.transformWorldFromModelTH),new xe("transformWorldFromModelTL",a=>a.transformWorldFromModelTL)]),r.code.add(l`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(l`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?l`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:l`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new j("transformWorldFromViewTL",a=>a.transformWorldFromViewTL)),r.code.add(l`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(l`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Pn=class extends we{constructor(){super(...arguments),this.transformWorldFromViewTH=w(),this.transformWorldFromViewTL=w(),this.transformViewFromCameraRelativeRS=Ve(),this.transformProjFromView=et()}};class Rn extends we{constructor(){super(...arguments),this.transformWorldFromModelRS=Ve(),this.transformWorldFromModelTH=Ur(),this.transformWorldFromModelTL=Ur()}}function Ga(t){t.varyings.add("linearDepth","float")}function Bi(t){t.vertex.uniforms.add(new fe("nearFar",(e,r)=>r.camera.nearFar))}function Gi(t){t.vertex.code.add(l`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Vi(t,e){const{vertex:r}=t;switch(e.output){case M.Color:if(e.receiveShadows)return Ga(t),void r.code.add(l`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case M.Depth:case M.Shadow:case M.ShadowHighlight:case M.ShadowExcludeHighlight:return t.include(Di,e),Ga(t),Bi(t),Gi(t),void r.code.add(l`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(l`void forwardLinearDepth() {}`)}function zt(t,e){if(Gi(t),e.hasModelTransformation)return t.vertex.code.add(l`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void t.vertex.code.add(l`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.vertex.code.add(l`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(l`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}var Ie;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"})(Ie||(Ie={}));function Ln(t){if(t.length<qo)return Array.from(t);if(Array.isArray(t))return Float64Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return Uint16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let In=class Ui{constructor(e,r,a,i){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=a,this.position=i,this._children=void 0,k(e.length>=1),k(a.length%this._numIndexPerPrimitive==0),k(a.length>=e.length*this._numIndexPerPrimitive),k(i.size===3||i.size===4);const{data:o,size:s}=i,n=e.length;let c=s*a[this._numIndexPerPrimitive*e[0]];Xe.clear(),Xe.push(c);const d=ae(o[c],o[c+1],o[c+2]),u=vt(d);for(let p=0;p<n;++p){const g=this._numIndexPerPrimitive*e[p];for(let x=0;x<this._numIndexPerPrimitive;++x){c=s*a[g+x],Xe.push(c);let T=o[c];d[0]=Math.min(T,d[0]),u[0]=Math.max(T,u[0]),T=o[c+1],d[1]=Math.min(T,d[1]),u[1]=Math.max(T,u[1]),T=o[c+2],d[2]=Math.min(T,d[2]),u[2]=Math.max(T,u[2])}}this.bbMin=d,this.bbMax=u;const h=dr(w(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(u[0]-d[0],u[1]-d[1]),u[2]-d[2]);let v=this.radius*this.radius;for(let p=0;p<Xe.length;++p){c=Xe.getItemAt(p);const g=o[c]-h[0],x=o[c+1]-h[1],T=o[c+2]-h[2],S=g*g+x*x+T*T;if(S<=v)continue;const B=Math.sqrt(S),I=.5*(B-this.radius);this.radius=this.radius+I,v=this.radius*this.radius;const C=I/B;h[0]+=g*C,h[1]+=x*C,h[2]+=T*C}this.center=h,Xe.clear()}getChildren(){if(this._children||ko(this.bbMin,this.bbMax)<=1)return this._children;const e=dr(w(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,a=new Uint8Array(r),i=new Array(8);for(let d=0;d<8;++d)i[d]=0;const{data:o,size:s}=this.position;for(let d=0;d<r;++d){let u=0;const h=this._numIndexPerPrimitive*this.primitiveIndices[d];let v=s*this.indices[h],p=o[v],g=o[v+1],x=o[v+2];for(let T=1;T<this._numIndexPerPrimitive;++T){v=s*this.indices[h+T];const S=o[v],B=o[v+1],I=o[v+2];S<p&&(p=S),B<g&&(g=B),I<x&&(x=I)}p<e[0]&&(u|=1),g<e[1]&&(u|=2),x<e[2]&&(u|=4),a[d]=u,++i[u]}let n=0;for(let d=0;d<8;++d)i[d]>0&&++n;if(n<2)return;const c=new Array(8);for(let d=0;d<8;++d)c[d]=i[d]>0?new Uint32Array(i[d]):void 0;for(let d=0;d<8;++d)i[d]=0;for(let d=0;d<r;++d){const u=a[d];c[u][i[u]++]=this.primitiveIndices[d]}this._children=new Array;for(let d=0;d<8;++d)c[d]!==void 0&&this._children.push(new Ui(c[d],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){Xe.prune()}};const Xe=new ti({deallocator:null});let ua=class{constructor(){this.id=ri()}unload(){}};function Fn(t){return t?{p0:vt(t.p0),p1:vt(t.p1),p2:vt(t.p2)}:{p0:w(),p1:w(),p2:w()}}function zu(t,e,r){const a=e[0]-t[0],i=e[1]-t[1],o=r[0]-t[0],s=r[1]-t[1];return .5*Math.abs(a*s-i*o)}function Nn(t,e,r){return Fe(Rr,e,t),Fe(Va,r,t),Zr(ai(Rr,Rr,Va))/2}new fi(zs);new fi(()=>Fn());const Rr=w(),Va=w();function zn(t,e,r){if(!t||!e)return!1;const{size:a,data:i}=t;q(r,0,0,0),q(le,0,0,0);let o=0,s=0;for(let n=0;n<e.length-2;n+=3){const c=e[n+0]*a,d=e[n+1]*a,u=e[n+2]*a;q(Y,i[c+0],i[c+1],i[c+2]),q(Re,i[d+0],i[d+1],i[d+2]),q(Zt,i[u+0],i[u+1],i[u+2]);const h=Nn(Y,Re,Zt);h?(ce(Y,Y,Re),ce(Y,Y,Zt),he(Y,Y,1/3*h),ce(r,r,Y),o+=h):(ce(le,le,Y),ce(le,le,Re),ce(le,le,Zt),s+=3)}return(s!==0||o!==0)&&(o!==0?(he(r,r,1/o),!0):s!==0&&(he(r,le,1/s),!0))}function Dn(t,e,r){if(!t||!e)return!1;const{size:a,data:i}=t;q(r,0,0,0);let o=-1,s=0;for(let n=0;n<e.length;n++){const c=e[n]*a;o!==c&&(r[0]+=i[c+0],r[1]+=i[c+1],r[2]+=i[c+2],s++),o=c}return s>1&&he(r,r,1/s),s>0}function Bn(t,e,r,a){if(!t)return!1;q(a,0,0,0),q(le,0,0,0);let i=0,o=0;const{size:s,data:n}=t,c=e?e.length-1:n.length/s-1,d=c+(r?2:0);for(let u=0;u<d;u+=2){const h=u<c?u:c,v=u<c?u+1:0,p=(e?e[h]:h)*s,g=(e?e[v]:v)*s;Y[0]=n[p],Y[1]=n[p+1],Y[2]=n[p+2],Re[0]=n[g],Re[1]=n[g+1],Re[2]=n[g+2],he(Y,ce(Y,Y,Re),.5);const x=Yo(Y,Re);x>0?(ce(a,a,he(Y,Y,x)),i+=x):i===0&&(ce(le,le,Y),o++)}return i!==0?(he(a,a,1/i),!0):o!==0&&(he(a,le,1/o),!0)}const Y=w(),Re=w(),Zt=w(),le=w();let Gn=class{constructor(e){this.channel=e,this.id=ri()}};function Vn(t,e){return z(t)&&(t=[]),t.push(e),t}function Un(t,e){if(z(t))return null;const r=t.filter(a=>a!==e);return r.length===0?null:r}function Bu(t,e,r,a,i){Kt[0]=t.get(e,0),Kt[1]=t.get(e,1),Kt[2]=t.get(e,2),Bs(Kt,Je,3),r.set(i,0,Je[0]),a.set(i,0,Je[1]),r.set(i,1,Je[2]),a.set(i,1,Je[3]),r.set(i,2,Je[4]),a.set(i,2,Je[5])}const Kt=w(),Je=new Float32Array(6);let Hi=class ji extends ua{constructor(e,r,a=[],i=null,o=Ie.Mesh,s=null,n=-1){super(),this.material=e,this.mapPositions=i,this.type=o,this.objectAndLayerIdColor=s,this.edgeIndicesLength=n,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[c,d]of r)d&&this._vertexAttributes.set(c,{...d});if(a==null||a.length===0){const c=Hn(this._vertexAttributes),d=La(c);this.edgeIndicesLength=this.edgeIndicesLength<0?c:this.edgeIndicesLength;for(const u of this._vertexAttributes.keys())this._indices.set(u,d)}else for(const[c,d]of a)d&&(this._indices.set(c,Ds(d)),c===m.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(c).length:this.edgeIndicesLength))}instantiate(e={}){const r=new ji(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach((a,i)=>{a.exclusive=!1,r._vertexAttributes.set(i,a)}),this._indices.forEach((a,i)=>r._indices.set(i,a)),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:Ln(r.data)},this._vertexAttributes.set(e,r)),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return z(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Ie.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Ie.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(f(this._transformation)&&Tt(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(m.POSITION),a=this.vertexAttributes.get(m.POSITION);return zn(a,r,e)}_computeAttachmentOriginLines(e){const r=this.vertexAttributes.get(m.POSITION),a=this.indices.get(m.POSITION);return Bn(r,a,a&&jn(this.material.parameters,r,a),e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(m.POSITION),a=this.vertexAttributes.get(m.POSITION);return Dn(a,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(m.POSITION),r=this.vertexAttributes.get(m.POSITION);if(!e||e.length===0||!r)return null;const a=this.type===Ie.Mesh?3:1;k(e.length%a==0,"Indexing error: "+e.length+" not divisible by "+a);const i=La(e.length/a);return new In(i,a,e,r)}get transformation(){return Xo(this._transformation,fr)}set transformation(e){this._transformation=e&&e!==fr?bs(e):null}get shaderTransformation(){return f(this._shaderTransformer)?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return f(this._shaderTransformer)}addHighlight(){const e=new Gn(Ns.Highlight);return this.highlights=Vn(this.highlights,e),e}removeHighlight(e){this.highlights=Un(this.highlights,e)}};function Hn(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function jn(t,e,r){return!(!("isClosed"in t)||!t.isClosed)&&(r?r.length>2:e.data.length>6)}let Gu=class{constructor(){this.enabled=!0,this._time=Br(0)}get time(){return this._time}advance({deltaTime:e,fixedTime:r}){return f(r)?this._time!==r&&(this._time=r,!0):(this._time=Br(this._time+e),e!==0)}},Wn=class{constructor(e,r){this.deltaTime=e,this.fixedTime=r}},Hu=class{constructor(){this._transform=et(),this._transformInverse=new Qt({value:this._transform},ii,et),this._transformInverseTranspose=new Qt(this._transformInverse,Ta,et),this._transformTranspose=new Qt({value:this._transform},Ta,et),this._transformInverseRotation=new Qt({value:this._transform},Jo,Ve)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(e){Sa(this._transform,e)}multiplyTransform(e){Zo(this._transform,this._transform,e)}set(e){Sa(this._transform,e),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(e,r){this.setTransformMatrix(e),this.multiplyTransform(r),this._invalidateLazyTransforms()}},Qt=class{constructor(e,r,a){this._original=e,this._update=r,this._dirty=!0,this._transform=a()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}},qn=class{constructor(e=0){this.offset=e,this.tmpVertex=w()}applyToVertex(e,r,a){const i=e+this.localOrigin[0],o=r+this.localOrigin[1],s=a+this.localOrigin[2],n=this.offset/Math.sqrt(i*i+o*o+s*s);return this.tmpVertex[0]=e+i*n,this.tmpVertex[1]=r+o*n,this.tmpVertex[2]=a+s*n,this.tmpVertex}applyToAabb(e){for(let o=0;o<3;++o)Ne[o]=e[0+o]+this.localOrigin[o],er[o]=e[3+o]+this.localOrigin[o],ht[o]=Ne[o];const r=this.applyToVertex(Ne[0],Ne[1],Ne[2]);for(let o=0;o<3;++o)e[o]=r[o],e[o+3]=r[o];const a=o=>{const s=this.applyToVertex(o[0],o[1],o[2]);for(let n=0;n<3;++n)e[n+0]=Math.min(e[n+0],s[n]),e[n+3]=Math.max(e[n+3],s[n])};for(let o=1;o<8;++o){for(let s=0;s<3;++s)ht[s]=o&1<<s?er[s]:Ne[s];a(ht)}let i=0;for(let o=0;o<3;++o)Ne[o]*er[o]<0&&(i|=1<<o);if(i!==0&&i!==7){for(let o=0;o<8;++o)if(!(i&o)){for(let s=0;s<3;++s)i[s]?ht[s]=0:ht[s]=o&1<<s?Ne[s]:er[s];a(ht)}}for(let o=0;o<3;++o)e[o+0]-=this.localOrigin[o],e[o+3]-=this.localOrigin[o];return e}};const Ne=w(),er=w(),ht=w();let kn=class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=w(),this._mbs=pi(),this._obb={center:w(),halfSize:Ur(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,r,a){const i=e,o=r,s=a+this.componentLocalOriginLength,n=this._totalOffset/Math.sqrt(i*i+o*o+s*s);return this._tmpVertex[0]=e+i*n,this._tmpVertex[1]=r+o*n,this._tmpVertex[2]=a+s*n,this._tmpVertex}applyToAabb(e){const r=e[0],a=e[1],i=e[2]+this.componentLocalOriginLength,o=e[3],s=e[4],n=e[5]+this.componentLocalOriginLength,c=r*o<0?0:Math.min(Math.abs(r),Math.abs(o)),d=a*s<0?0:Math.min(Math.abs(a),Math.abs(s)),u=i*n<0?0:Math.min(Math.abs(i),Math.abs(n)),h=Math.sqrt(c*c+d*d+u*u);if(h<this._totalOffset)return e[0]-=r<0?this._totalOffset:0,e[1]-=a<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=o>0?this._totalOffset:0,e[4]+=s>0?this._totalOffset:0,e[5]+=n>0?this._totalOffset:0,e;const v=Math.max(Math.abs(r),Math.abs(o)),p=Math.max(Math.abs(a),Math.abs(s)),g=Math.max(Math.abs(i),Math.abs(n)),x=Math.sqrt(v*v+p*p+g*g),T=this._totalOffset/x,S=this._totalOffset/h;return e[0]+=r*(r>0?T:S),e[1]+=a*(a>0?T:S),e[2]+=i*(i>0?T:S),e[3]+=o*(o<0?T:S),e[4]+=s*(s<0?T:S),e[5]+=n*(n<0?T:S),e}applyToMbs(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),a=this._totalOffset/r;return this._mbs[0]=e[0]+e[0]*a,this._mbs[1]=e[1]+e[1]*a,this._mbs[2]=e[2]+e[2]*a,this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){const r=e.center,a=this._totalOffset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this._obb.center[0]=r[0]+r[0]*a,this._obb.center[1]=r[1]+r[1]*a,this._obb.center[2]=r[2]+r[2]*a,ba(this._obb.halfSize,e.halfSize,e.quaternion),ce(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,Fe(this._obb.halfSize,this._obb.halfSize,e.center),en(Wa,e.quaternion),ba(this._obb.halfSize,this._obb.halfSize,Wa),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}},Yn=class{constructor(e=0){this.offset=e,this.sphere=pi(),this.tmpVertex=w()}applyToVertex(e,r,a){const i=this.objectTransform.transform;let o=i[0]*e+i[4]*r+i[8]*a+i[12],s=i[1]*e+i[5]*r+i[9]*a+i[13],n=i[2]*e+i[6]*r+i[10]*a+i[14];const c=this.offset/Math.sqrt(o*o+s*s+n*n);o+=o*c,s+=s*c,n+=n*c;const d=this.objectTransform.inverse;return this.tmpVertex[0]=d[0]*o+d[4]*s+d[8]*n+d[12],this.tmpVertex[1]=d[1]*o+d[5]*s+d[9]*n+d[13],this.tmpVertex[2]=d[2]*o+d[6]*s+d[10]*n+d[14],this.tmpVertex}applyToMinMax(e,r){const a=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*a,e[1]+=e[1]*a,e[2]+=e[2]*a;const i=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*i,r[1]+=r[1]*i,r[2]+=r[2]*i}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const a=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*a,e[4]+=e[4]*a,e[5]+=e[5]*a,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),a=this.offset/r;return this.sphere[0]=e[0]+e[0]*a,this.sphere[1]=e[1]+e[1]*a,this.sphere[2]=e[2]+e[2]*a,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const Ua=new Yn;function Xn(t){return f(t)?(Ua.offset=t,Ua):null}const Ha=new kn;function Xu(t){return f(t)?(Ha.offset=t,Ha):null}const ja=new qn;function Ju(t){return f(t)?(ja.offset=t,ja):null}const Zu="terrain",Wa=tn();function Ku(t,e){return new Yi(t,Ji,e)}function Qu(t,e){const{curvatureDependent:r,scaleStart:a,scaleFallOffRange:i}=Ji;return new Yi(t,{curvatureDependent:{min:{curvature:r.min.curvature,tiltAngle:r.min.tiltAngle,scaleFallOffFactor:Lr.curvatureDependent.min.scaleFallOffFactor},max:{curvature:r.max.curvature,tiltAngle:r.max.tiltAngle,scaleFallOffFactor:Lr.curvatureDependent.max.scaleFallOffFactor}},scaleStart:a,scaleFallOffRange:i,minPixelSize:Lr.minPixelSize},e)}function Jn(t){return Math.abs(t*t*t)}function Wi(t,e,r){const a=r.parameters,i=r.paddingPixelsOverride;return Rt.scale=Math.min(a.divisor/(e-a.offset),1),Rt.factor=Jn(t),Rt.minPixelSize=a.minPixelSize,Rt.paddingPixels=i,Rt}function qi(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function ki(t,e){return Math.max(Te(t*e.scale,t,e.factor),qi(t,e))}function Zn(t,e,r){const a=Wi(t,e,r);return a.minPixelSize=0,a.paddingPixels=0,ki(1,a)}function eh(t,e,r,a){a.scale=Zn(t,e,r),a.factor=0,a.minPixelSize=r.parameters.minPixelSize,a.paddingPixels=r.paddingPixelsOverride}function th(t,e,r=[0,0]){const a=Math.min(Math.max(e.scale,qi(t[1],e)/Math.max(1e-5,t[1])),1);return r[0]=t[0]*a,r[1]=t[1]*a,r}function Kn(t,e,r,a){return ki(t,Wi(e,r,a))}let Yi=class Xi{get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}constructor(e,r,a,i=Qn(),o){this._viewingMode=e,this._description=r,this._ellipsoidRadius=a,this.parameters=i,this._paddingPixelsOverride=o,this._viewingMode===ur.Local?(this._coverageCompensation=this._surfaceCoverageCompensationLocal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersLocal):(this._coverageCompensation=this._surfaceCoverageCompensationGlobal,this._calculateCurvatureDependentParameters=this._calculateCurvatureDependentParametersGlobal)}update(e){return(!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this._calculateParameters(e,this._ellipsoidRadius,this.parameters),!0)}overridePadding(e){return e!==this.paddingPixelsOverride?new Xi(this._viewingMode,this._description,this._ellipsoidRadius,this.parameters,e):this}_calculateParameters(e,r,a){const{scaleStart:i,scaleFallOffRange:o,minPixelSize:s}=this._description,{fovY:n,distance:c}=e,d=this._calculateCurvatureDependentParameters(e,r),u=this._coverageCompensation(e,r,d),{tiltAngle:h,scaleFallOffFactor:v}=d,p=Math.sin(h)*c,g=.5*Math.PI-h-n*(.5-i*u),x=p/Math.cos(g),T=g+n*o*u,S=(x-v*(p/Math.cos(T)))/(1-v);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=S,a.divisor=x-S,a.minPixelSize=s,a}_calculateCurvatureDependentParametersLocal(e,r,a=qa){return a.tiltAngle=this._description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this._description.curvatureDependent.min.scaleFallOffFactor,a}_calculateCurvatureDependentParametersGlobal(e,r,a=qa){const i=this._description.curvatureDependent,o=1+e.distance/r,s=Math.sqrt(o*o-1),[n,c]=[i.min.curvature,i.max.curvature],d=Jr((s-n)/(c-n),0,1),[u,h]=[i.min,i.max];return a.tiltAngle=Te(u.tiltAngle,h.tiltAngle,d),a.scaleFallOffFactor=Te(u.scaleFallOffFactor,h.scaleFallOffFactor,d),a}_surfaceCoverageCompensationLocal(e,r,a){return(e.fovY-a.tiltAngle)/e.fovY}_surfaceCoverageCompensationGlobal(e,r,a){const i=r*r,o=a.tiltAngle+.5*Math.PI,{fovY:s,distance:n}=e,c=n*n+i-2*Math.cos(o)*n*r,d=Math.sqrt(c),u=Math.sqrt(c-i);return(Math.acos(u/d)-Math.asin(r/(d/Math.sin(o)))+.5*s)/s}};const Ji={curvatureDependent:{min:{curvature:Xt(10),tiltAngle:Xt(12),scaleFallOffFactor:.5},max:{curvature:Xt(70),tiltAngle:Xt(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},Lr={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};function Qn(){return{camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0}}const Rt={scale:0,factor:0,minPixelSize:0,paddingPixels:0},qa={tiltAngle:0,scaleFallOffFactor:0};function el(t){t.vertex.code.add(l`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(l`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(l`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(l`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(l`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(l`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(l`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function rh(t){t.uniforms.add(new ee("screenSizePerspective",e=>Zi(e.screenSizePerspective)))}function tl(t){t.uniforms.add(new ee("screenSizePerspectiveAlignment",e=>Zi(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function Zi(t){return se(rl,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const rl=jt();let al=class extends Z{constructor(e,r){super(e,"mat4",D.Draw,(a,i,o)=>a.setUniformMatrix4fv(e,r(i,o)))}};function Ut(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Kr):t.uniforms.add(new xe("cameraPosition",(r,a)=>q(Ki,a.camera.viewInverseTransposeMatrix[3]-r.origin[0],a.camera.viewInverseTransposeMatrix[7]-r.origin[1],a.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function Dt(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add([new rt("proj",(a,i)=>i.camera.projectionMatrix),new al("view",(a,i)=>Gr(ka,i.camera.viewMatrix,a.origin)),new xe("localOrigin",a=>a.origin)]);const r=a=>q(Ki,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]);t.uniforms.add([new rt("proj",(a,i)=>i.camera.projectionMatrix),new rt("view",(a,i)=>Gr(ka,i.camera.viewMatrix,r(i))),new j("localOrigin",(a,i)=>r(i))])}const ka=Ko(),Ki=w();function il(t){t.uniforms.add(new rt("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}function Qi(t,e){const r=t.vertex;e.hasVerticalOffset?(sl(r),e.hasScreenSizePerspective&&(t.include(el),tl(r),Ut(t.vertex,e)),r.code.add(l`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?l`vec3 worldNormal = normalize(worldPos + localOrigin);`:l`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?l`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:l`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(l`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const ol=jt();function sl(t){t.uniforms.add(new ee("verticalOffset",(e,r)=>{const{minWorldLength:a,maxWorldLength:i,screenLength:o}=e.verticalOffset,s=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;return se(ol,o*n,s,a,i)}))}const tr=Qo();function nl(t,e,r,a,i,o){if(t.visible)if(t.boundingInfo){k(t.type===Ie.Mesh);const s=e.tolerance;eo(t.boundingInfo,r,a,s,i,o)}else{const s=t.indices.get(m.POSITION),n=t.vertexAttributes.get(m.POSITION);ro(r,a,0,s.length/3,s,n,void 0,i,o)}}const ll=w();function eo(t,e,r,a,i,o){if(z(t))return;const s=dl(e,r,ll);if(es(tr,t.bbMin),ts(tr,t.bbMax),f(i)&&i.applyToAabb(tr),ul(tr,e,s,a)){const{primitiveIndices:n,indices:c,position:d}=t,u=n?n.length:c.length/3;if(u>gl){const h=t.getChildren();if(h!==void 0){for(const v of h)eo(v,e,r,a,i,o);return}}ro(e,r,0,u,c,d,n,i,o)}}const to=w();function ro(t,e,r,a,i,o,s,n,c){if(s)return cl(t,e,r,a,i,o,s,n,c);const{data:d,stride:u}=o,h=t[0],v=t[1],p=t[2],g=e[0]-h,x=e[1]-v,T=e[2]-p;for(let S=r,B=3*r;S<a;++S){let I=u*i[B++],C=d[I++],N=d[I++],R=d[I];I=u*i[B++];let P=d[I++],$=d[I++],L=d[I];I=u*i[B++];let O=d[I++],A=d[I++],E=d[I];f(n)&&([C,N,R]=n.applyToVertex(C,N,R,S),[P,$,L]=n.applyToVertex(P,$,L,S),[O,A,E]=n.applyToVertex(O,A,E,S));const G=P-C,W=$-N,U=L-R,Q=O-C,Me=A-N,Ae=E-R,He=x*Ae-Me*T,Mt=T*Q-Ae*g,At=g*Me-Q*x,me=G*He+W*Mt+U*At;if(Math.abs(me)<=Number.EPSILON)continue;const ne=h-C,je=v-N,We=p-R,be=ne*He+je*Mt+We*At;if(me>0){if(be<0||be>me)continue}else if(be>0||be<me)continue;const Ce=je*U-W*We,Ct=We*G-U*ne,Ot=ne*W-G*je,qe=g*Ce+x*Ct+T*Ot;if(me>0){if(qe<0||be+qe>me)continue}else if(qe>0||be+qe<me)continue;const ke=(Q*Ce+Me*Ct+Ae*Ot)/me;ke>=0&&c(ke,ao(G,W,U,Q,Me,Ae,to),S,!1)}}function cl(t,e,r,a,i,o,s,n,c){const{data:d,stride:u}=o,h=t[0],v=t[1],p=t[2],g=e[0]-h,x=e[1]-v,T=e[2]-p;for(let S=r;S<a;++S){const B=s[S];let I=3*B,C=u*i[I++],N=d[C++],R=d[C++],P=d[C];C=u*i[I++];let $=d[C++],L=d[C++],O=d[C];C=u*i[I];let A=d[C++],E=d[C++],G=d[C];f(n)&&([N,R,P]=n.applyToVertex(N,R,P,S),[$,L,O]=n.applyToVertex($,L,O,S),[A,E,G]=n.applyToVertex(A,E,G,S));const W=$-N,U=L-R,Q=O-P,Me=A-N,Ae=E-R,He=G-P,Mt=x*He-Ae*T,At=T*Me-He*g,me=g*Ae-Me*x,ne=W*Mt+U*At+Q*me;if(Math.abs(ne)<=Number.EPSILON)continue;const je=h-N,We=v-R,be=p-P,Ce=je*Mt+We*At+be*me;if(ne>0){if(Ce<0||Ce>ne)continue}else if(Ce>0||Ce<ne)continue;const Ct=We*Q-U*be,Ot=be*W-Q*je,qe=je*U-W*We,ke=g*Ct+x*Ot+T*qe;if(ne>0){if(ke<0||Ce+ke>ne)continue}else if(ke>0||Ce+ke<ne)continue;const _a=(Me*Ct+Ae*Ot+He*qe)/ne;_a>=0&&c(_a,ao(W,U,Q,Me,Ae,He,to),B,!1)}}const Ya=w(),Xa=w();function ao(t,e,r,a,i,o,s){return q(Ya,t,e,r),q(Xa,a,i,o),ai(s,Ya,Xa),Qr(s,s),s}function dl(t,e,r){return q(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function ul(t,e,r,a){return hl(t,e,r,a,1/0)}function hl(t,e,r,a,i){const o=(t[0]-a-e[0])*r[0],s=(t[3]+a-e[0])*r[0];let n=Math.min(o,s),c=Math.max(o,s);const d=(t[1]-a-e[1])*r[1],u=(t[4]+a-e[1])*r[1];if(c=Math.min(c,Math.max(d,u)),c<0||(n=Math.max(n,Math.min(d,u)),n>c))return!1;const h=(t[2]-a-e[2])*r[2],v=(t[5]+a-e[2])*r[2];return c=Math.min(c,Math.max(h,v)),!(c<0)&&(n=Math.max(n,Math.min(h,v)),!(n>c)&&n<i)}function ml(t,e,r,a,i){let o=(r.screenLength||0)*t.pixelRatio;f(i)&&(o=Kn(o,a,e,i));const s=o*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Jr(s*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function io(t,e){const r=e?io(e):{};for(const a in t){let i=t[a];i&&i.forEach&&(i=pl(i)),i==null&&a in r||(r[a]=i)}return r}function fl(t,e){let r=!1;for(const a in e){const i=e[a];i!==void 0&&(Array.isArray(i)?t[a]===null?(t[a]=i.slice(),r=!0):rs(t[a],i)&&(r=!0):t[a]!==i&&(r=!0,t[a]=i))}return r}function pl(t){const e=[];return t.forEach(r=>e.push(r)),e}const vl={multiply:1,ignore:2,replace:3,tint:4},gl=1e3;let xl=class extends ua{constructor(e,r){super(),this.type=Ie.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=wt,this._pp0=ae(0,0,1),this._pp1=ae(0,0,0),this._parameters=io(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){fl(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){f(this.repository)&&this.repository.materialChanged(this)}intersectDraped(e,r,a,i,o,s){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,r,a,this._pp0,this._pp1,o)}},oh=class extends Wn{constructor(e,r,a){super(r,a),this.camera=e}};var gr;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(gr||(gr={}));let _l=class extends we{constructor(){super(...arguments),this.renderOccluded=gr.Occlude}};function lh(t,e,r,a,i=1){const o=r.typedBuffer,s=r.typedBufferStride,n=t.length;if(a*=s,i===1)for(let c=0;c<n;++c)o[a]=e[t[c]],a+=s;else for(let c=0;c<n;++c){const d=e[t[c]];for(let u=0;u<i;u++)o[a]=d,a+=s}}function bl(t,e,r,a){const i=r.typedBuffer,o=r.typedBufferStride,s=t.length;a*=o;for(let n=0;n<s;++n){const c=2*t[n];i[a]=e[c],i[a+1]=e[c+1],a+=o}}function oo(t,e,r,a,i){const o=r.typedBuffer,s=r.typedBufferStride,n=t.length;if(a*=s,i==null||i===1)for(let c=0;c<n;++c){const d=3*t[c];o[a]=e[d],o[a+1]=e[d+1],o[a+2]=e[d+2],a+=s}else for(let c=0;c<n;++c){const d=3*t[c];for(let u=0;u<i;++u)o[a]=e[d],o[a+1]=e[d+1],o[a+2]=e[d+2],a+=s}}function so(t,e,r,a,i=1){const o=r.typedBuffer,s=r.typedBufferStride,n=t.length;if(a*=s,i===1)for(let c=0;c<n;++c){const d=4*t[c];o[a]=e[d],o[a+1]=e[d+1],o[a+2]=e[d+2],o[a+3]=e[d+3],a+=s}else for(let c=0;c<n;++c){const d=4*t[c];for(let u=0;u<i;++u)o[a]=e[d],o[a+1]=e[d+1],o[a+2]=e[d+2],o[a+3]=e[d+3],a+=s}}function ch(t,e,r){const a=t.typedBuffer,i=t.typedBufferStride;e*=i;for(let o=0;o<r;++o)a[e]=0,a[e+1]=0,a[e+2]=0,a[e+3]=0,e+=i}function Tl(t,e,r,a,i,o=1){if(!r)return void oo(t,e,a,i,o);const s=a.typedBuffer,n=a.typedBufferStride,c=t.length,d=r[0],u=r[1],h=r[2],v=r[4],p=r[5],g=r[6],x=r[8],T=r[9],S=r[10],B=r[12],I=r[13],C=r[14];i*=n;let N=0,R=0,P=0;const $=oi(r)?L=>{N=e[L]+B,R=e[L+1]+I,P=e[L+2]+C}:L=>{const O=e[L],A=e[L+1],E=e[L+2];N=d*O+v*A+x*E+B,R=u*O+p*A+T*E+I,P=h*O+g*A+S*E+C};if(o===1)for(let L=0;L<c;++L)$(3*t[L]),s[i]=N,s[i+1]=R,s[i+2]=P,i+=n;else for(let L=0;L<c;++L){$(3*t[L]);for(let O=0;O<o;++O)s[i]=N,s[i+1]=R,s[i+2]=P,i+=n}}function Sl(t,e,r,a,i,o=1){if(!r)return void oo(t,e,a,i,o);const s=r,n=a.typedBuffer,c=a.typedBufferStride,d=t.length,u=s[0],h=s[1],v=s[2],p=s[4],g=s[5],x=s[6],T=s[8],S=s[9],B=s[10],I=!si(s),C=1e-6,N=1-C;i*=c;let R=0,P=0,$=0;const L=oi(s)?O=>{R=e[O],P=e[O+1],$=e[O+2]}:O=>{const A=e[O],E=e[O+1],G=e[O+2];R=u*A+p*E+T*G,P=h*A+g*E+S*G,$=v*A+x*E+B*G};if(o===1)if(I)for(let O=0;O<d;++O){L(3*t[O]);const A=R*R+P*P+$*$;if(A<N&&A>C){const E=1/Math.sqrt(A);n[i]=R*E,n[i+1]=P*E,n[i+2]=$*E}else n[i]=R,n[i+1]=P,n[i+2]=$;i+=c}else for(let O=0;O<d;++O)L(3*t[O]),n[i]=R,n[i+1]=P,n[i+2]=$,i+=c;else for(let O=0;O<d;++O){if(L(3*t[O]),I){const A=R*R+P*P+$*$;if(A<N&&A>C){const E=1/Math.sqrt(A);R*=E,P*=E,$*=E}}for(let A=0;A<o;++A)n[i]=R,n[i+1]=P,n[i+2]=$,i+=c}}function yl(t,e,r,a,i,o=1){if(!r)return void so(t,e,a,i,o);const s=r,n=a.typedBuffer,c=a.typedBufferStride,d=t.length,u=s[0],h=s[1],v=s[2],p=s[4],g=s[5],x=s[6],T=s[8],S=s[9],B=s[10],I=!si(s),C=1e-6,N=1-C;if(i*=c,o===1)for(let R=0;R<d;++R){const P=4*t[R],$=e[P],L=e[P+1],O=e[P+2],A=e[P+3];let E=u*$+p*L+T*O,G=h*$+g*L+S*O,W=v*$+x*L+B*O;if(I){const U=E*E+G*G+W*W;if(U<N&&U>C){const Q=1/Math.sqrt(U);E*=Q,G*=Q,W*=Q}}n[i]=E,n[i+1]=G,n[i+2]=W,n[i+3]=A,i+=c}else for(let R=0;R<d;++R){const P=4*t[R],$=e[P],L=e[P+1],O=e[P+2],A=e[P+3];let E=u*$+p*L+T*O,G=h*$+g*L+S*O,W=v*$+x*L+B*O;if(I){const U=E*E+G*G+W*W;if(U<N&&U>C){const Q=1/Math.sqrt(U);E*=Q,G*=Q,W*=Q}}for(let U=0;U<o;++U)n[i]=E,n[i+1]=G,n[i+2]=W,n[i+3]=A,i+=c}}function wl(t,e,r,a,i,o=1){const s=a.typedBuffer,n=a.typedBufferStride,c=t.length;if(i*=n,r!==e.length||r!==4)if(o!==1)if(r!==4)for(let d=0;d<c;++d){const u=3*t[d];for(let h=0;h<o;++h)s[i]=e[u],s[i+1]=e[u+1],s[i+2]=e[u+2],s[i+3]=255,i+=n}else for(let d=0;d<c;++d){const u=4*t[d];for(let h=0;h<o;++h)s[i]=e[u],s[i+1]=e[u+1],s[i+2]=e[u+2],s[i+3]=e[u+3],i+=n}else{if(r===4){for(let d=0;d<c;++d){const u=4*t[d];s[i]=e[u],s[i+1]=e[u+1],s[i+2]=e[u+2],s[i+3]=e[u+3],i+=n}return}for(let d=0;d<c;++d){const u=3*t[d];s[i]=e[u],s[i+1]=e[u+1],s[i+2]=e[u+2],s[i+3]=255,i+=n}}else{s[i]=e[0],s[i+1]=e[1],s[i+2]=e[2],s[i+3]=e[3];const d=new Uint32Array(a.typedBuffer.buffer,a.start),u=n/4,h=d[i/=4];i+=u;const v=c*o;for(let p=1;p<v;++p)d[i]=h,i+=u}}function Ml(t,e,r,a,i=1){const o=e.typedBuffer,s=e.typedBufferStride;if(a*=s,i===1)for(let n=0;n<r;++n)o[a]=t[0],o[a+1]=t[1],o[a+2]=t[2],o[a+3]=t[3],a+=s;else for(let n=0;n<r;++n)for(let c=0;c<i;++c)o[a]=t[0],o[a+1]=t[1],o[a+2]=t[2],o[a+3]=t[3],a+=s}function Al(t,e,r,a,i,o){for(const s of e.fieldNames){const n=t.vertexAttributes.get(s),c=t.indices.get(s);if(n&&c)switch(s){case m.POSITION:{k(n.size===3);const d=i.getField(s,gt);k(!!d,`No buffer view for ${s}`),d&&Tl(c,n.data,r,d,o);break}case m.NORMAL:{k(n.size===3);const d=i.getField(s,gt);k(!!d,`No buffer view for ${s}`),d&&Sl(c,n.data,a,d,o);break}case m.UV0:{k(n.size===2);const d=i.getField(s,ui);k(!!d,`No buffer view for ${s}`),d&&bl(c,n.data,d,o);break}case m.COLOR:case m.SYMBOLCOLOR:{k(n.size===3||n.size===4);const d=i.getField(s,Vt);k(!!d,`No buffer view for ${s}`),d&&wl(c,n.data,n.size,d,o);break}case m.TANGENT:{k(n.size===4);const d=i.getField(s,pr);k(!!d,`No buffer view for ${s}`),d&&yl(c,n.data,a,d,o);break}case m.PROFILERIGHT:case m.PROFILEUP:case m.PROFILEVERTEXANDNORMAL:case m.FEATUREVALUE:{k(n.size===4);const d=i.getField(s,pr);k(!!d,`No buffer view for ${s}`),d&&so(c,n.data,d,o)}}else if(s===m.OBJECTANDLAYERIDCOLOR&&f(t.objectAndLayerIdColor)){const d=t.indices.get(m.POSITION);if(k(!!d,`No buffer view for ${s}`),d){const u=d.length,h=i.getField(s,Vt);Ml(t.objectAndLayerIdColor,h,u,o)}}}}let no=class extends we{constructor(){super(...arguments),this.color=Sr(1,1,1,1)}};function Cl(){const t=new kt;return t.include(ca),t.fragment.uniforms.add([new oe("tex",e=>e.texture),new ee("uColor",e=>e.color)]),t.fragment.code.add(l`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),t}const uh=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:no,build:Cl},Symbol.toStringTag,{value:"Module"}));function Ol(){if(z(Ir)){const t=e=>as(`esri/libs/basisu/${e}`);Ir=qt(()=>import("./basis_transcoder-e0466ff6.js"),["assets/basis_transcoder-e0466ff6.js","assets/_commonjsHelpers-2f3e7994.js"]).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return Ir}let Ir;var Qe;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(Qe||(Qe={}));let _e=null,rr=null;async function lo(){return z(rr)&&(rr=Ol(),_e=await rr),rr}function El(t,e){if(z(_e))return t.byteLength;const r=new _e.BasisFile(new Uint8Array(t)),a=uo(r)?co(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),a}function $l(t,e){if(z(_e))return t.byteLength;const r=new _e.KTX2File(new Uint8Array(t)),a=ho(r)?co(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),a}function co(t,e,r,a,i){const o=Zs(e?Le.COMPRESSED_RGBA8_ETC2_EAC:Le.COMPRESSED_RGB8_ETC2),s=i&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*a*o*s)}function uo(t){return t.getNumImages()>=1&&!t.isUASTC()}function ho(t){return t.getFaces()>=1&&t.isETC1S()}async function Pl(t,e,r){z(_e)&&(_e=await lo());const a=new _e.BasisFile(new Uint8Array(r));if(!uo(a))return null;a.startTranscoding();const i=mo(t,e,a.getNumLevels(0),a.getHasAlpha(),a.getImageWidth(0,0),a.getImageHeight(0,0),(o,s)=>a.getImageTranscodedSizeInBytes(0,o,s),(o,s,n)=>a.transcodeImage(n,0,o,s,0,0));return a.close(),a.delete(),i}async function Rl(t,e,r){z(_e)&&(_e=await lo());const a=new _e.KTX2File(new Uint8Array(r));if(!ho(a))return null;a.startTranscoding();const i=mo(t,e,a.getLevels(),a.getHasAlpha(),a.getWidth(),a.getHeight(),(o,s)=>a.getImageTranscodedSizeInBytes(o,0,0,s),(o,s,n)=>a.transcodeImage(n,o,0,0,s,0,-1,-1));return a.close(),a.delete(),i}function mo(t,e,r,a,i,o,s,n){const{compressedTextureETC:c,compressedTextureS3TC:d}=t.capabilities,[u,h]=c?a?[Qe.ETC2_RGBA,Le.COMPRESSED_RGBA8_ETC2_EAC]:[Qe.ETC1_RGB,Le.COMPRESSED_RGB8_ETC2]:d?a?[Qe.BC3_RGBA,Le.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Qe.BC1_RGB,Le.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Qe.RGBA32,de.RGBA],v=e.hasMipmap?r:Math.min(1,r),p=[];for(let S=0;S<v;S++)p.push(new Uint8Array(s(S,u))),n(S,u,p[S]);const g=p.length>1,x=g?ve.LINEAR_MIPMAP_LINEAR:ve.LINEAR,T={...e,samplingMode:x,hasMipmap:g,internalFormat:h,width:i,height:o};return new ue(t,T,{type:"compressed",levels:p})}const Lt=Yr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Ll=542327876,Il=131072,Fl=4;function ha(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function Nl(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const zl=ha("DXT1"),Dl=ha("DXT3"),Bl=ha("DXT5"),Gl=31,Vl=0,Ul=1,Hl=2,jl=3,Wl=4,ql=7,kl=20,Yl=21;function Xl(t,e,r){const{textureData:a,internalFormat:i,width:o,height:s}=is(Jl(r,e.hasMipmap??!1));return e.samplingMode=a.levels.length>1?ve.LINEAR_MIPMAP_LINEAR:ve.LINEAR,e.hasMipmap=a.levels.length>1,e.internalFormat=i,e.width=o,e.height=s,new ue(t,e,a)}function Jl(t,e){const r=new Int32Array(t,0,Gl);if(r[Vl]!==Ll)return Lt.error("Invalid magic number in DDS header"),null;if(!(r[kl]&Fl))return Lt.error("Unsupported format, must contain a FourCC code"),null;const a=r[Yl];let i,o;switch(a){case zl:i=8,o=Le.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Dl:i=16,o=Le.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Bl:i=16,o=Le.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Lt.error("Unsupported FourCC code:",Nl(a)),null}let s=1,n=r[Wl],c=r[jl];!(3&n)&&!(3&c)||(Lt.warn("Rounding up compressed texture size to nearest multiple of 4."),n=n+3&-4,c=c+3&-4);const d=n,u=c;let h,v;r[Hl]&Il&&e!==!1&&(s=Math.max(1,r[ql])),s===1||hr(n)&&hr(c)||(Lt.warn("Ignoring mipmaps of non power of two sized compressed texture."),s=1);let p=r[Ul]+4;const g=[];for(let x=0;x<s;++x)v=(n+3>>2)*(c+3>>2)*i,h=new Uint8Array(t,p,v),g.push(h),p+=v,n=Math.max(1,n>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:g},internalFormat:o,width:d,height:u}}let fo=class lr extends ua{constructor(e,r){super(),this._data=e,this.type=Ie.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new os,this._passParameters=new no,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:tt.REPEAT,t:tt.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||$r.STRETCH,this.estimatedTexMemRequired=lr._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;z(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(ya(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const a=()=>{e.removeEventListener("canplay",a),e.play()};e.addEventListener("canplay",a)}}}_startPreloadImageElement(e){ss(e.src)||ya(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(z(e))return 0;if(Et(e)||$t(e))return r.encoding===Pt.KTX2_ENCODING?$l(e,!!r.mipmap):r.encoding===Pt.BASIS_ENCODING?El(e,!!r.mipmap):e.byteLength;const{width:a,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?lr._getDataDimensions(e):r;return(r.mipmap?4/3:1)*a*i*(r.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:nt.TEXTURE_2D,pixelFormat:de.RGBA,dataType:lt.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?ve.LINEAR_MIPMAP_LINEAR:ve.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,r){if(f(this._glTexture))return this._glTexture;if(f(this._loadingPromise))return this._loadingPromise;const a=this._data;return z(a)?(this._glTexture=new ue(e,this._createDescriptor(e),null),this._glTexture):typeof a=="string"?this._loadFromURL(e,r,a):a instanceof Image?this._loadFromImageElement(e,r,a):a instanceof HTMLVideoElement?this._loadFromVideoElement(e,r,a):a instanceof ImageData||a instanceof HTMLCanvasElement?this._loadFromImage(e,a,r):(Et(a)||$t(a))&&this.params.encoding===Pt.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,a)):(Et(a)||$t(a))&&this.params.encoding===Pt.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,a)):(Et(a)||$t(a))&&this.params.encoding===Pt.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,a)):$t(a)?this._loadFromPixelData(e,a):Et(a)?this._loadFromPixelData(e,new Uint8Array(a)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,r,a){if(!(this._data instanceof HTMLVideoElement)||z(this._glTexture)||this._data.readyState<Bt.HAVE_CURRENT_DATA||a===this._data.currentTime)return a;if(f(this._powerOfTwoStretchInfo)){const{framebuffer:i,vao:o,sourceTexture:s}=this._powerOfTwoStretchInfo;s.setData(this._data),this._drawStretchedTexture(e,r,i,o,s,this._glTexture)}else{const{videoWidth:i,videoHeight:o}=this._data,{width:s,height:n}=this._glTexture.descriptor;i!==s||o!==n?this._glTexture.updateData(0,0,0,Math.min(i,s),Math.min(o,n),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,r){return this._glTexture=Xl(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>Rl(e,this._createDescriptor(e),r).then(a=>(this._glTexture=a,a)))}_loadFromBasis(e,r){return this._loadAsync(()=>Pl(e,this._createDescriptor(e),r).then(a=>(this._glTexture=a,a)))}_loadFromPixelData(e,r){k(this.params.width>0&&this.params.height>0);const a=this._createDescriptor(e);return a.pixelFormat=this.params.components===1?de.LUMINANCE:this.params.components===3?de.RGB:de.RGBA,a.width=this.params.width,a.height=this.params.height,this._glTexture=new ue(e,a,r),this._glTexture}_loadFromURL(e,r,a){return this._loadAsync(async i=>{const o=await mi(a,{signal:i});return wa(i),this._loadFromImage(e,o,r)})}_loadFromImageElement(e,r,a){return a.complete?this._loadFromImage(e,a,r):this._loadAsync(async i=>{const o=await ns(a,a.src,!1,i);return wa(i),this._loadFromImage(e,o,r)})}_loadFromVideoElement(e,r,a){return a.readyState>=Bt.HAVE_CURRENT_DATA?this._loadFromImage(e,a,r):this._loadFromVideoElementAsync(e,r,a)}_loadFromVideoElementAsync(e,r,a){return this._loadAsync(i=>new Promise((o,s)=>{const n=()=>{a.removeEventListener("loadeddata",c),a.removeEventListener("error",d),ds(u)},c=()=>{a.readyState>=Bt.HAVE_CURRENT_DATA&&(n(),o(this._loadFromImage(e,a,r)))},d=h=>{n(),s(h||new Xr("Failed to load video"))};a.addEventListener("loadeddata",c),a.addEventListener("error",d);const u=ls(i,()=>d(cs()))}))}_loadFromImage(e,r,a){const i=lr._getDataDimensions(r);this.params.width=i.width,this.params.height=i.height;const o=this._createDescriptor(e);return o.pixelFormat=this.params.components===3?de.RGB:de.RGBA,!this._requiresPowerOfTwo(e,o)||hr(i.width)&&hr(i.height)?(o.width=i.width,o.height=i.height,this._glTexture=new ue(e,o,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,r,i,o,a),this._glTexture)}_loadAsync(e){const r=new AbortController;this._loadingController=r;const a=e(r.signal);this._loadingPromise=a;const i=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===a&&(this._loadingPromise=null)};return a.then(i,i),a}_requiresPowerOfTwo(e,r){const a=tt.CLAMP_TO_EDGE,i=typeof r.wrapMode=="number"?r.wrapMode===a:r.wrapMode.s===a&&r.wrapMode.t===a;return e.type===ni.WEBGL1&&(r.hasMipmap||!i)}_makePowerOfTwoTexture(e,r,a,i,o){const{width:s,height:n}=a,c=Ma(s),d=Ma(n);let u;switch(i.width=c,i.height=d,this.params.powerOfTwoResizeMode){case $r.PAD:i.textureCoordinateScaleFactor=[s/c,n/d],u=new ue(e,i),u.updateData(0,0,0,s,n,r);break;case $r.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,r,i,o());break;default:ct(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,r,a,i){const o=new ue(e,a),s=new or(e,{colorTarget:gi.TEXTURE,depthStencilTarget:xi.NONE},o),n=new ue(e,{target:nt.TEXTURE_2D,pixelFormat:a.pixelFormat,dataType:lt.UNSIGNED_BYTE,wrapMode:tt.CLAMP_TO_EDGE,samplingMode:ve.LINEAR,flipped:!!a.flipped,maxAnisotropy:8,preMultiplyAlpha:a.preMultiplyAlpha},r),c=Ci(e),d=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,s,c,n,o),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:c,sourceTexture:n,framebuffer:s}:(c.dispose(!0),n.dispose(),s.detachColorTexture(),s.dispose()),e.bindFramebuffer(d),o}_drawStretchedTexture(e,r,a,i,o,s){this._passParameters.texture=o,e.bindFramebuffer(a);const n=e.getViewport();e.setViewport(0,0,s.descriptor.width,s.descriptor.height),e.bindTechnique(r,this._passParameters,null),e.bindVAO(i),e.drawArrays(De.TRIANGLE_STRIP,0,bi(i,"geometry")),e.bindFramebuffer(null),e.setViewport(n.x,n.y,n.width,n.height),this._passParameters.texture=null}unload(){if(f(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:a}=this._powerOfTwoStretchInfo;r.dispose(!0),a.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(f(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),f(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};var Bt;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(Bt||(Bt={}));let hh=class extends we{constructor(e){super(),this.slicePlaneLocalOrigin=e}};function fh(t,e){po(t,e,[new j("slicePlaneOrigin",(r,a)=>_o(e,r,a)),new j("slicePlaneBasis1",(r,a)=>{var i;return xr(e,r,a,(i=st(a.slicePlane))==null?void 0:i.basis1)}),new j("slicePlaneBasis2",(r,a)=>{var i;return xr(e,r,a,(i=st(a.slicePlane))==null?void 0:i.basis2)})])}function it(t,e){po(t,e,[new xe("slicePlaneOrigin",(r,a)=>_o(e,r,a)),new xe("slicePlaneBasis1",(r,a)=>{var i;return xr(e,r,a,(i=st(a.slicePlane))==null?void 0:i.basis1)}),new xe("slicePlaneBasis2",(r,a)=>{var i;return xr(e,r,a,(i=st(a.slicePlane))==null?void 0:i.basis2)})])}function po(t,e,r){if(!e.hasSlicePlane){const s=l`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(s),void t.fragment.code.add(s)}t.extensions.add("GL_OES_standard_derivatives"),e.hasSliceInVertexProgram&&t.vertex.uniforms.add(r),t.fragment.uniforms.add(r);const a=l`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=l`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=e.hasSliceHighlight?l`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(a),t.fragment.code.add(a),t.fragment.code.add(o)}function vo(t,e,r){return t.instancedDoublePrecision?q(Zl,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function go(t,e){return f(t)?Fe(_r,e.origin,t):e.origin}function xo(t,e,r){return t.hasSliceTranslatedView?f(e)?Gr(Kl,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function _o(t,e,r){if(z(r.slicePlane))return Kr;const a=vo(t,e,r),i=go(a,r.slicePlane),o=xo(t,a,r);return f(o)?Tt(_r,i,o):i}function xr(t,e,r,a){if(z(a)||z(r.slicePlane))return Kr;const i=vo(t,e,r),o=go(i,r.slicePlane),s=xo(t,i,r);return f(s)?(ce(It,a,o),Tt(_r,o,s),Tt(It,It,s),Fe(It,It,_r)):a}const Zl=w(),_r=w(),It=w(),Kl=et();function Ql(t,e){const r=e.output===M.ObjectAndLayerIdColor,a=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),a?t.attributes.add(m.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):t.attributes.add(m.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(l`
     void forwardObjectAndLayerIdColor() {
      ${r?a?l`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:l`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:l``} }`),t.fragment.code.add(l`
      void outputObjectAndLayerIdColor() {
        ${r?l`gl_FragColor = objectAndLayerIdColorVarying;`:l``} }`)}const ec=Sr(1,1,0,1),tc=Sr(1,0,1,1);function rc(t,e){t.fragment.uniforms.add(at("depthTex",(r,a)=>a.highlightDepthTexture,e.hasWebGL2Context?J.None:J.InvSize)),t.fragment.constants.add("occludedHighlightFlag","vec4",ec).add("unoccludedHighlightFlag","vec4",tc),t.fragment.code.add(l`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${dn(e,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}let ac=class extends Z{constructor(e,r,a){super(e,"vec4",D.Pass,(i,o,s)=>i.setUniform4fv(e,r(o,s)),a)}},ic=class extends Z{constructor(e,r,a){super(e,"float",D.Pass,(i,o,s)=>i.setUniform1fv(e,r(o,s)),a)}},gh=class extends _l{constructor(){super(...arguments),this.vvSizeEnabled=!1,this.vvSizeMinSize=ae(1,1,1),this.vvSizeMaxSize=ae(100,100,100),this.vvSizeOffset=ae(0,0,0),this.vvSizeFactor=ae(1,1,1),this.vvSizeValue=ae(1,1,1),this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvOpacityEnabled=!1,this.vvOpacityValues=[0,0,0,0,0,0,0,0],this.vvOpacityOpacities=[1,1,1,1,1,1,1,1],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=Ve()}};const Fr=8;function Gt(t,e){e.hasVvInstancing&&(e.vvSize||e.vvColor)&&t.attributes.add(m.INSTANCEFEATUREATTRIBUTE,"vec4");const r=t.vertex;e.vvSize?(r.uniforms.add(new j("vvSizeMinSize",a=>a.vvSizeMinSize)),r.uniforms.add(new j("vvSizeMaxSize",a=>a.vvSizeMaxSize)),r.uniforms.add(new j("vvSizeOffset",a=>a.vvSizeOffset)),r.uniforms.add(new j("vvSizeFactor",a=>a.vvSizeFactor)),r.uniforms.add(new Ue("vvSymbolRotationMatrix",a=>a.vvSymbolRotationMatrix)),r.uniforms.add(new j("vvSymbolAnchor",a=>a.vvSymbolAnchor)),r.code.add(l`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?l`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",Fr),e.hasVvInstancing&&r.uniforms.add([new ic("vvColorValues",a=>a.vvColorValues,Fr),new ac("vvColorColors",a=>a.vvColorColors,Fr)]),r.code.add(l`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${e.hasVvInstancing?l`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(l`vec4 vvColor() { return vec4(1.0); }`)}const oc=.1,ma=.001;function sc(t,e){switch(t.fragment.include(ra),e.output){case M.Shadow:case M.ShadowHighlight:case M.ShadowExcludeHighlight:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(l`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case M.Depth:t.fragment.code.add(l`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}const _h={func:ye.LESS},bh={func:ye.ALWAYS},nc={mask:255},Th={mask:0},Sh=t=>({function:{func:ye.NOTEQUAL,ref:t,mask:t},operation:{fail:K.KEEP,zFail:K.KEEP,zPass:K.KEEP}}),yh=t=>({function:{func:ye.ALWAYS,ref:t,mask:t},operation:{fail:K.KEEP,zFail:K.KEEP,zPass:K.REPLACE}}),lc={function:{func:ye.ALWAYS,ref:Be.OutlineVisualElementMask,mask:Be.OutlineVisualElementMask},operation:{fail:K.KEEP,zFail:K.KEEP,zPass:K.ZERO}},cc={function:{func:ye.ALWAYS,ref:Be.OutlineVisualElementMask,mask:Be.OutlineVisualElementMask},operation:{fail:K.KEEP,zFail:K.KEEP,zPass:K.REPLACE}},wh={function:{func:ye.EQUAL,ref:Be.OutlineVisualElementMask,mask:Be.OutlineVisualElementMask},operation:{fail:K.KEEP,zFail:K.KEEP,zPass:K.KEEP}},Mh={function:{func:ye.NOTEQUAL,ref:Be.OutlineVisualElementMask,mask:Be.OutlineVisualElementMask},operation:{fail:K.KEEP,zFail:K.KEEP,zPass:K.KEEP}};function dc(t){const e=l`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.vertex.code.add(e)}function Ar(t,e){switch(e.normalType){case V.CompressedAttribute:t.include(dc),t.attributes.add(m.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(l`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case V.Attribute:t.attributes.add(m.NORMAL,"vec3"),t.vertex.code.add(l`vec3 normalModel() {
return normal;
}`);break;case V.ScreenDerivative:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(l`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:ct(e.normalType);case V.COUNT:case V.Ground:}}var V;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(V||(V={}));function bo(t,e){switch(e.normalType){case V.Attribute:case V.CompressedAttribute:t.include(Ar,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add([new Ri("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new Ue("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)]),t.vertex.code.add(l`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case V.Ground:t.include(Di,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(l`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?l`normalize(vPositionWorldCameraRelative);`:l`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case V.ScreenDerivative:t.vertex.code.add(l`void forwardNormal() {}`);break;default:ct(e.normalType);case V.COUNT:}}let uc=class extends Pn{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Ve()}},hc=class extends Rn{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Ve(),this.toMapSpace=jt()}},mc=class{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(m.POSITION).length}write(e,r,a,i,o){Al(a,this.vertexBufferLayout,e,r,i,o)}},To=class extends Z{constructor(e,r){super(e,"int",D.Pass,(a,i,o)=>a.setUniform1i(e,r(i,o)))}},fc=class extends Z{constructor(e,r,a){super(e,"mat4",D.Draw,(i,o,s)=>i.setUniformMatrix4fv(e,r(o,s)),a)}},pc=class extends Z{constructor(e,r,a){super(e,"mat4",D.Pass,(i,o,s)=>i.setUniformMatrix4fv(e,r(o,s)),a)}},Rh=class extends we{constructor(){super(...arguments),this.origin=w()}};function So(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new pc("shadowMapMatrix",(r,a)=>a.shadowMap.getShadowMapMatrices(r.origin),4)),wo(t,e))}function yo(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new fc("shadowMapMatrix",(r,a)=>a.shadowMap.getShadowMapMatrices(r.origin),4)),wo(t,e))}function wo(t,e){const r=t.fragment;r.include(ra),r.uniforms.add([...at("shadowMapTex",(a,i)=>i.shadowMap.depthTexture,e.hasWebGL2Context?J.None:J.Size),new To("numCascades",(a,i)=>i.shadowMap.numCascades),new ee("cascadeDistances",(a,i)=>i.shadowMap.cascadeDistances)]),r.code.add(l`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${_t(e,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}function vc(t){const e=t.fragment.code;e.add(l`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(l`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(l`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function fa(t,e){const r=t.fragment.code;t.include(la),e.pbrMode!==F.Normal&&e.pbrMode!==F.Schematic&&e.pbrMode!==F.Terrain&&e.pbrMode!==F.TerrainWithWater||(r.add(l`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(l`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==F.Normal&&e.pbrMode!==F.Schematic||(t.include(vc),r.add(l`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(l`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(l`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(l`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Ih(t,e){const r=t.fragment.code;t.include(la),r.add(l`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),r.add(l`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(l`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(l`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(l`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}const Nr=4;function gc(){const t=new kt,e=t.fragment;t.include(ca);const r=(Nr+1)/2,a=1/(2*r*r);return e.include(aa),e.uniforms.add([new oe("depthMap",i=>i.depthTexture),new $i("tex",i=>i.colorTexture),new Wr("blurSize",i=>i.blurSize),new re("projScale",(i,o)=>{const s=us(o.camera.eye,o.camera.center);return s>5e4?Math.max(0,i.projScale-(s-5e4)):i.projScale}),new fe("nearFar",(i,o)=>o.camera.nearFar)]),e.code.add(l`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.float(a)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.code.add(l`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${l.int(Nr)}; r <= ${l.int(Nr)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),t}const xc=Object.freeze(Object.defineProperty({__proto__:null,build:gc},Symbol.toStringTag,{value:"Module"}));let Mo=class Ao extends sa{initializeProgram(e){return new na(e.rctx,Ao.shader.get().build(),wt)}initializePipeline(){return ea({colorWrite:ta})}};Mo.shader=new Mr(xc,()=>qt(()=>import("./SSAOBlur.glsl-9b948374.js"),["assets/SSAOBlur.glsl-9b948374.js","assets/calcite-c5ae4991.js","assets/index-9a6385f7.js","assets/index-5026a37a.css","assets/calcite-96fa36fd.css","assets/OrderIndependentTransparency-5f7257d7.js","assets/enums-e2e92c86.js","assets/basicInterfaces-7449a8bf.js","assets/VertexAttribute-15d1866a.js","assets/devEnvironmentUtils-5002a058.js","assets/mat3f64-50f3b9f6.js","assets/mat4f64-abdda1bb.js","assets/BufferView-bc307796.js","assets/vec33-164586fc.js","assets/DefaultMaterial_COLOR_GAMMA-941dbf6c.js","assets/types-e1c0a5bf.js","assets/Version-e2fa8281.js","assets/quat-8dcd84de.js","assets/quatf64-f8f1c132.js","assets/resourceUtils-527631ac.js","assets/Indices-84de656e.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-67552ee5.js","assets/symbolColorUtils-14fb8f64.js","assets/Util-2b929b00.js","assets/sphere-5ce3b13c.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/Texture-3d2bcec7.js","assets/FramebufferObject-d9042b3f.js","assets/VertexElementDescriptor-2925c6af.js","assets/InterleavedLayout-45bbbdfe.js","assets/vec3f32-01c06d8d.js"]));const _c="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";function bc(t){t.fragment.uniforms.add(new ee("projInfo",(e,r)=>Tc(r))),t.fragment.uniforms.add(new fe("zScale",(e,r)=>Co(r))),t.fragment.code.add(l`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Tc(t){const e=t.camera.projectionMatrix;return e[11]===0?se(Ja,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):se(Ja,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const Ja=jt();function Co(t){return t.camera.projectionMatrix[11]===0?Se(Za,0,1):Se(Za,1,0)}const Za=Ht(),Ka=16;function Sc(){const t=new kt,e=t.fragment;return t.include(ca),e.include(aa),t.include(bc),e.uniforms.add(new re("radius",(r,a)=>pa(a.camera))),e.code.add(l`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),e.code.add(l`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add([new fe("nearFar",(r,a)=>a.camera.nearFar),new oe("normalMap",r=>r.normalTexture),new oe("depthMap",r=>r.depthTexture),new fe("zScale",(r,a)=>Co(a)),new re("projScale",r=>r.projScale),new oe("rnm",r=>r.noiseTexture),new fe("rnmScale",(r,a)=>Se(Qa,a.camera.fullWidth/st(r.noiseTexture).descriptor.width,a.camera.fullHeight/st(r.noiseTexture).descriptor.height)),new re("intensity",r=>r.intensity),new fe("screenSize",(r,a)=>Se(Qa,a.camera.fullWidth,a.camera.fullHeight))]),e.code.add(l`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${l.int(Ka)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${l.int(Ka)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),t}function pa(t){return Math.max(10,20*t.computeRenderPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const Qa=Ht(),yc=Object.freeze(Object.defineProperty({__proto__:null,build:Sc,getRadius:pa},Symbol.toStringTag,{value:"Module"}));let Oo=class Eo extends sa{initializeProgram(e){return new na(e.rctx,Eo.shader.get().build(),wt)}initializePipeline(){return ea({colorWrite:ta})}};Oo.shader=new Mr(yc,()=>qt(()=>import("./SSAO.glsl-2ead9248.js"),["assets/SSAO.glsl-2ead9248.js","assets/calcite-c5ae4991.js","assets/index-9a6385f7.js","assets/index-5026a37a.css","assets/calcite-96fa36fd.css","assets/OrderIndependentTransparency-5f7257d7.js","assets/enums-e2e92c86.js","assets/basicInterfaces-7449a8bf.js","assets/VertexAttribute-15d1866a.js","assets/devEnvironmentUtils-5002a058.js","assets/mat3f64-50f3b9f6.js","assets/mat4f64-abdda1bb.js","assets/BufferView-bc307796.js","assets/vec33-164586fc.js","assets/DefaultMaterial_COLOR_GAMMA-941dbf6c.js","assets/types-e1c0a5bf.js","assets/Version-e2fa8281.js","assets/quat-8dcd84de.js","assets/quatf64-f8f1c132.js","assets/resourceUtils-527631ac.js","assets/Indices-84de656e.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-67552ee5.js","assets/symbolColorUtils-14fb8f64.js","assets/Util-2b929b00.js","assets/sphere-5ce3b13c.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/Texture-3d2bcec7.js","assets/FramebufferObject-d9042b3f.js","assets/VertexElementDescriptor-2925c6af.js","assets/InterleavedLayout-45bbbdfe.js","assets/vec3f32-01c06d8d.js"]));class wc extends we{constructor(){super(...arguments),this.projScale=1}}let Mc=class extends wc{constructor(){super(...arguments),this.intensity=1}},Ac=class extends we{};class Cc extends Ac{constructor(){super(...arguments),this.blurSize=Ht()}}const Nt=2;let zh=class{constructor(e,r,a,i){this._view=e,this._techniqueRepository=r,this._rctx=a,this._requestRender=i,this._quadVAO=null,this._passParameters=new Mc,this._drawParameters=new Cc}dispose(){this.enabled=!1,this._quadVAO=Ze(this._quadVAO)}disposeOffscreenBuffers(){Cr(this._ssaoFBO,e=>e.resize(0,0)),Cr(this._blur0FBO,e=>e.resize(0,0)),Cr(this._blur1FBO,e=>e.resize(0,0))}set enabled(e){e?this._enable():this._disable()}get enabled(){return f(this._enableTime)}get active(){return this.enabled&&this._ssaoTechnique.compiled&&this._blurTechnique.compiled}get colorTexture(){return f(this._blur1FBO)?this._blur1FBO.colorTexture:null}render(e,r,a,i){if(z(this._enableTime)||z(a)||z(i)||z(this._ssaoFBO)||z(this._blur0FBO)||z(this._blur1FBO))return;if(!this.active)return this._enableTime=r,void this._requestRender();this._enableTime===0&&(this._enableTime=r);const o=this._rctx,s=e.camera,n=this._view.qualitySettings.fadeDuration,c=n>0?Math.min(n,r-this._enableTime)/n:1;this._passParameters.normalTexture=i,this._passParameters.depthTexture=a,this._passParameters.projScale=1/s.computeRenderPixelSizeAtDist(1),this._passParameters.intensity=4*Oc/pa(s)**6*c;const d=s.fullViewport,u=d[2],h=d[3],v=u/Nt,p=h/Nt;this._ssaoFBO.resize(u,h),this._blur0FBO.resize(v,p),this._blur1FBO.resize(v,p),z(this._quadVAO)&&(this._quadVAO=Ci(this._rctx)),o.bindFramebuffer(this._ssaoFBO),o.setViewport(0,0,u,h),o.bindTechnique(this._ssaoTechnique,this._passParameters,e).bindDraw(this._drawParameters,e,this._passParameters),o.bindVAO(this._quadVAO);const g=bi(this._quadVAO,"geometry");o.drawArrays(De.TRIANGLE_STRIP,0,g);const x=o.bindTechnique(this._blurTechnique,this._passParameters,e);o.setViewport(0,0,v,p),o.bindFramebuffer(this._blur0FBO),this._drawParameters.colorTexture=this._ssaoFBO.colorTexture,Se(this._drawParameters.blurSize,0,Nt/h),x.bindDraw(this._drawParameters,e,this._passParameters),o.setViewport(0,0,v,p),o.drawArrays(De.TRIANGLE_STRIP,0,g),o.bindFramebuffer(this._blur1FBO),this._drawParameters.colorTexture=this._blur0FBO.colorTexture,Se(this._drawParameters.blurSize,Nt/u,0),x.bindDraw(this._drawParameters,e,this._passParameters),o.drawArrays(De.TRIANGLE_STRIP,0,g),o.setViewport(d[0],d[1],d[2],d[3]),c<1&&this._requestRender()}_enable(){if(f(this._enableTime))return;const e={target:nt.TEXTURE_2D,pixelFormat:de.RGBA,dataType:lt.UNSIGNED_BYTE,samplingMode:ve.LINEAR,wrapMode:tt.CLAMP_TO_EDGE,width:0,height:0},r={colorTarget:gi.TEXTURE,depthStencilTarget:xi.NONE};this._ssaoFBO=new or(this._rctx,r,e),this._blur0FBO=new or(this._rctx,r,e),this._blur1FBO=new or(this._rctx,r,e);const a=Uint8Array.from(atob(_c),i=>i.charCodeAt(0));this._passParameters.noiseTexture=new ue(this._rctx,{target:nt.TEXTURE_2D,pixelFormat:de.RGB,dataType:lt.UNSIGNED_BYTE,hasMipmap:!0,width:32,height:32},a),z(this._ssaoTechnique)&&(this._ssaoTechnique=this._techniqueRepository.acquire(Oo)),z(this._blurTechnique)&&(this._blurTechnique=this._techniqueRepository.acquire(Mo)),this._enableTime=Br(0),this._requestRender()}_disable(){this._enableTime=null,this._passParameters.noiseTexture=Ze(this._passParameters.noiseTexture),this._blur1FBO=Ze(this._blur1FBO),this._blur0FBO=Ze(this._blur0FBO),this._ssaoFBO=Ze(this._ssaoFBO)}get gpuMemoryUsage(){return(f(this._blur0FBO)?this._blur0FBO.gpuMemoryUsage:0)+(f(this._blur1FBO)?this._blur1FBO.gpuMemoryUsage:0)+(f(this._ssaoFBO)?this._ssaoFBO.gpuMemoryUsage:0)}get test(){return{ssao:this._ssaoFBO,blur:this._blur1FBO}}};const Oc=.5;function Ec(t,e){const r=t.fragment;switch(r.code.add(l`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case ie.None:r.code.add(l`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case ie.View:r.code.add(l`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case ie.WindingOrder:r.code.add(l`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:ct(e.doubleSidedMode);case ie.COUNT:}}var ie;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(ie||(ie={}));function $o(t){t.vertex.code.add(l`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}class $c extends wi{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function Po(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(m.MODELORIGINHI,"vec3"),t.attributes.add(m.MODELORIGINLO,"vec3"),t.attributes.add(m.MODEL,"mat3"),t.attributes.add(m.MODELNORMAL,"mat3"));const r=t.vertex;e.instancedDoublePrecision&&(r.include(zi,e),r.uniforms.add(new xe("viewOriginHi",(a,i)=>Gs(q(ar,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),ar))),r.uniforms.add(new xe("viewOriginLo",(a,i)=>Vs(q(ar,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),ar)))),r.code.add(l`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(l`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?l`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(l`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),e.output===M.Normal&&(il(r),r.code.add(l`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),e.hasVertexTangents&&r.code.add(l`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}_([b()],$c.prototype,"instancedDoublePrecision",void 0);const ar=w();function Pc(t){t.vertex.code.add(l`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${l.int($e.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${l.int($e.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${l.int($e.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${l.int($e.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Ro(t,e){e.hasSymbolColors?(t.include(Pc),t.attributes.add(m.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(l`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new To("colorMixMode",r=>vl[r.colorMixMode])),t.vertex.code.add(l`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Lo(t,e){e.hasVertexColors?(t.attributes.add(m.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(l`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(l`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(l`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Rc(t){t.fragment.code.add(l`
    #define discardOrAdjustAlpha(color) { if (color.a < ${l.float(ma)}) { discard; } }
  `)}class Lc extends Z{constructor(e,r){super(e,"float",D.Draw,(a,i,o)=>a.setUniform1f(e,r(i,o)))}}function ot(t,e){Io(t,e,new re("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function Bh(t,e){Io(t,e,new Lc("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function Io(t,e,r){const a=t.fragment;switch(e.alphaDiscardMode!==X.Mask&&e.alphaDiscardMode!==X.MaskBlend||a.uniforms.add(r),e.alphaDiscardMode){case X.Blend:return t.include(Rc);case X.Opaque:a.code.add(l`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case X.Mask:a.code.add(l`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case X.MaskBlend:t.fragment.code.add(l`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Fo(t,e){const{vertex:r,fragment:a}=t,i=e.hasModelTransformation;i&&r.uniforms.add(new rt("model",s=>f(s.modelTransformation)?s.modelTransformation:fr));const o=e.hasColorTexture&&e.alphaDiscardMode!==X.Opaque;switch(e.output){case M.Depth:case M.Shadow:case M.ShadowHighlight:case M.ShadowExcludeHighlight:case M.ObjectAndLayerIdColor:Dt(r,e),t.include(zt,e),t.include(xt,e),t.include(Gt,e),t.include(sc,e),t.include(it,e),t.include(Ql,e),Bi(t),t.varyings.add("depth","float"),o&&a.uniforms.add(new oe("tex",s=>s.texture)),r.code.add(l`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${i?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),t.include(ot,e),a.code.add(l`
          void main(void) {
            discardBySlice(vpos);
            ${o?l`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===M.ObjectAndLayerIdColor?l`outputObjectAndLayerIdColor();`:l`outputDepth(depth);`}
          }
        `);break;case M.Normal:Dt(r,e),t.include(zt,e),t.include(Ar,e),t.include(bo,e),t.include(xt,e),t.include(Gt,e),o&&a.uniforms.add(new oe("tex",s=>s.texture)),t.varyings.add("vPositionView","vec3"),r.code.add(l`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${e.normalType===V.Attribute?l`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${i?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(it,e),t.include(ot,e),a.code.add(l`
          void main() {
            discardBySlice(vpos);
            ${o?l`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===V.ScreenDerivative?l`
                vec3 normal = screenDerivativeNormal(vPositionView);`:l`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case M.Highlight:Dt(r,e),t.include(zt,e),t.include(xt,e),t.include(Gt,e),o&&a.uniforms.add(new oe("tex",s=>s.texture)),r.code.add(l`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${i?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(it,e),t.include(ot,e),t.include(rc,e),a.code.add(l`
          void main() {
            discardBySlice(vpos);
            ${o?l`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function Ic(t,e){const r=t.fragment;if(e.hasVertexTangents?(t.attributes.add(m.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===ie.WindingOrder?r.code.add(l`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(l`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),r.code.add(l`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),e.textureCoordinateType!==te.None){t.include(Ei,e);const a=e.supportsTextureAtlas?e.hasWebGL2Context?J.None:J.Size:J.None;r.uniforms.add(e.pbrTextureBindType===D.Pass?at("normalTexture",i=>i.textureNormal,a):sr("normalTexture",i=>i.textureNormal,a)),r.code.add(l`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?l`vtc.size = ${_t(e,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function va(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(at("ssaoTex",(a,i)=>i.ssaoHelper.colorTexture,e.hasWebGL2Context?J.None:J.InvSize)),r.constants.add("blurSizePixelsInverse","float",1/Nt),r.code.add(l`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${_t(e,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(l`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function ga(t){t.constants.add("ambientBoostFactor","float",Ni)}function xa(t){t.uniforms.add(new re("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function No(t,e){const r=t.fragment;switch(t.include(va,e),e.pbrMode!==F.Disabled&&t.include(fa,e),t.include(vn,e),t.include(la),r.code.add(l`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===F.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),ga(r),xa(r),ia(r),r.code.add(l`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?l`normalize(vPosWorld)`:l`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),yr(r),r.code.add(l`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case F.Disabled:case F.WaterOnIntegratedMesh:case F.Water:t.include(Ia,e),r.code.add(l`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case F.Normal:case F.Schematic:r.code.add(l`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(l`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new gn("hasFillLights",(a,i)=>i.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(l`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new re("lightingSpecularStrength",(a,i)=>i.lighting.mainLight.specularStrength),new re("lightingEnvironmentStrength",(a,i)=>i.lighting.mainLight.environmentStrength)]),r.code.add(l`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(l`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===F.Schematic?l`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:l`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case F.Terrain:case F.TerrainWithWater:t.include(Ia,e),r.code.add(l`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:ct(e.pbrMode);case F.COUNT:}}function Fc(t){t.vertex.uniforms.add(new Ue("colorTextureTransformMatrix",e=>f(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:yt())),t.varyings.add("colorUV","vec2"),t.vertex.code.add(l`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Nc(t){t.vertex.uniforms.add(new Ue("normalTextureTransformMatrix",e=>f(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:yt())),t.varyings.add("normalUV","vec2"),t.vertex.code.add(l`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function zc(t){t.vertex.uniforms.add(new Ue("emissiveTextureTransformMatrix",e=>f(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:yt())),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(l`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Dc(t){t.vertex.uniforms.add(new Ue("occlusionTextureTransformMatrix",e=>f(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:yt())),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(l`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Bc(t){t.vertex.uniforms.add(new Ue("metallicRoughnessTextureTransformMatrix",e=>f(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:yt())),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(l`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function br(t){t.include(xn),t.code.add(l`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${l.int($e.Multiply)}) {
        return allMixed;
      }
      if (mode == ${l.int($e.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${l.int($e.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${l.int($e.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${l.int($e.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Gc(t){const e=new kt,{vertex:r,fragment:a,varyings:i}=e;return Dt(r,t),e.include(da),i.add("vpos","vec3"),e.include(Gt,t),e.include(Po,t),e.include(Qi,t),t.hasColorTextureTransform&&e.include(Fc),t.output!==M.Color&&t.output!==M.Alpha||(t.hasNormalTextureTransform&&e.include(Nc),t.hasEmissionTextureTransform&&e.include(zc),t.hasOcclusionTextureTransform&&e.include(Dc),t.hasMetallicRoughnessTextureTransform&&e.include(Bc),Ut(r,t),e.include(Ar,t),e.include(zt,t),t.normalType===V.Attribute&&t.offsetBackfaces&&e.include($o),e.include(Ic,t),e.include(bo,t),t.instancedColor&&e.attributes.add(m.INSTANCECOLOR,"vec4"),i.add("localvpos","vec3"),e.include(xt,t),e.include(Vi,t),e.include(Ro,t),e.include(Lo,t),r.uniforms.add(new ee("externalColor",o=>o.externalColor)),i.add("vcolorExt","vec4"),t.hasMultipassTerrain&&i.add("depth","float"),t.hasModelTransformation&&r.uniforms.add(new rt("model",o=>f(o.modelTransformation)?o.modelTransformation:fr)),r.code.add(l`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${l.float(ma)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===V.Attribute?l`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${t.hasModelTransformation?"model,":""} vpos);
          ${t.normalType===V.Attribute&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${t.hasColorTextureTransform?l`forwardColorUV();`:""}
        ${t.hasNormalTextureTransform?l`forwardNormalUV();`:""}
        ${t.hasEmissionTextureTransform?l`forwardEmissiveUV();`:""}
        ${t.hasOcclusionTextureTransform?l`forwardOcclusionUV();`:""}
        ${t.hasMetallicRoughnessTextureTransform?l`forwardMetallicRoughnessUV();`:""}
      }
    `)),t.output===M.Alpha&&(e.include(it,t),e.include(ot,t),e.include(vr,t),a.uniforms.add([new re("opacity",o=>o.opacity),new re("layerOpacity",o=>o.layerOpacity)]),t.hasColorTexture&&a.uniforms.add(new oe("tex",o=>o.texture)),a.include(br),a.code.add(l`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?l`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:l`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?l`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:l`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===M.Color&&(e.include(it,t),e.include(No,t),e.include(va,t),e.include(ot,t),e.include(t.instancedDoublePrecision?So:yo,t),e.include(vr,t),Ut(a,t),a.uniforms.add([r.uniforms.get("localOrigin"),new j("ambient",o=>o.ambient),new j("diffuse",o=>o.diffuse),new re("opacity",o=>o.opacity),new re("layerOpacity",o=>o.layerOpacity)]),t.hasColorTexture&&a.uniforms.add(new oe("tex",o=>o.texture)),e.include(Pi,t),e.include(fa,t),a.include(br),e.include(Ec,t),ga(a),xa(a),yr(a),a.code.add(l`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?l`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:l`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===V.ScreenDerivative?l`
                vec3 normal = screenDerivativeNormal(localvpos);`:l`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===F.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?l`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:l`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?l`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:l`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?l`normalize(posWorld);`:l`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?l`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===F.Normal||t.pbrMode===F.Schematic?l`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?l`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:l`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===St.Color?l`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),e.include(Fo,t),e}const Vc=Object.freeze(Object.defineProperty({__proto__:null,build:Gc},Symbol.toStringTag,{value:"Module"}));let Uc=class extends uc{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=ae(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Ge.Back,this.emissiveFactor=ae(0,0,0),this.instancedDoublePrecision=!1,this.normalType=V.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=ae(.2,.2,.2),this.diffuse=ae(.8,.8,.8),this.externalColor=Sr(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=w(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=Ve(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Wt.Less,this.textureAlphaMode=X.Blend,this.textureAlphaCutoff=oc,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=gr.Occlude}},Vh=class extends hc{constructor(){super(...arguments),this.origin=w(),this.slicePlaneLocalOrigin=this.origin}};class Yt extends sa{initializeConfiguration(e,r){r.hasWebGL2Context=e.rctx.type===ni.WEBGL2,r.spherical=e.viewingMode===ur.Global,r.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?te.Default:te.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,Yt.shader)}_initializeProgram(e,r){return new na(e.rctx,r.get().build(this.configuration),wt)}_convertDepthTestFunction(e){return e===Wt.Lequal?ye.LEQUAL:ye.LESS}_makePipeline(e,r){const a=this.configuration,i=e===St.NONE,o=e===St.FrontFace;return ea({blending:a.output!==M.Color&&a.output!==M.Alpha||!a.transparent?null:i?Us:Hs(e),culling:Hc(a)?js(a.cullFace):null,depthTest:{func:Ws(e,this._convertDepthTestFunction(a.customDepthTest))},depthWrite:(i||o)&&a.writeDepth?qs:null,colorWrite:ta,stencilWrite:a.hasOccludees?nc:null,stencilTest:a.hasOccludees?r?cc:lc:null,polygonOffset:i||o?null:ks(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function Hc(t){return t.cullFace!==Ge.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}Yt.shader=new Mr(Vc,()=>qt(()=>import("./DefaultMaterial.glsl-07050c2b.js"),["assets/DefaultMaterial.glsl-07050c2b.js","assets/mat4f64-abdda1bb.js","assets/mat3f64-50f3b9f6.js","assets/vec3f32-01c06d8d.js","assets/calcite-c5ae4991.js","assets/index-9a6385f7.js","assets/index-5026a37a.css","assets/calcite-96fa36fd.css","assets/OrderIndependentTransparency-5f7257d7.js","assets/enums-e2e92c86.js","assets/basicInterfaces-7449a8bf.js","assets/VertexAttribute-15d1866a.js","assets/symbolColorUtils-14fb8f64.js","assets/FramebufferObject-d9042b3f.js","assets/Texture-3d2bcec7.js","assets/devEnvironmentUtils-5002a058.js","assets/BufferView-bc307796.js","assets/vec33-164586fc.js","assets/DefaultMaterial_COLOR_GAMMA-941dbf6c.js","assets/types-e1c0a5bf.js","assets/Version-e2fa8281.js","assets/quat-8dcd84de.js","assets/quatf64-f8f1c132.js","assets/resourceUtils-527631ac.js","assets/Indices-84de656e.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-67552ee5.js","assets/Util-2b929b00.js","assets/sphere-5ce3b13c.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/VertexElementDescriptor-2925c6af.js","assets/InterleavedLayout-45bbbdfe.js"]));let y=class extends ze{constructor(){super(...arguments),this.output=M.Color,this.alphaDiscardMode=X.Opaque,this.doubleSidedMode=ie.None,this.pbrMode=F.Disabled,this.cullFace=Ge.None,this.transparencyPassType=St.NONE,this.normalType=V.Attribute,this.textureCoordinateType=te.None,this.customDepthTest=Wt.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}};_([b({count:M.COUNT})],y.prototype,"output",void 0),_([b({count:X.COUNT})],y.prototype,"alphaDiscardMode",void 0),_([b({count:ie.COUNT})],y.prototype,"doubleSidedMode",void 0),_([b({count:F.COUNT})],y.prototype,"pbrMode",void 0),_([b({count:Ge.COUNT})],y.prototype,"cullFace",void 0),_([b({count:St.COUNT})],y.prototype,"transparencyPassType",void 0),_([b({count:V.COUNT})],y.prototype,"normalType",void 0),_([b({count:te.COUNT})],y.prototype,"textureCoordinateType",void 0),_([b({count:Wt.COUNT})],y.prototype,"customDepthTest",void 0),_([b()],y.prototype,"spherical",void 0),_([b()],y.prototype,"hasVertexColors",void 0),_([b()],y.prototype,"hasSymbolColors",void 0),_([b()],y.prototype,"hasVerticalOffset",void 0),_([b()],y.prototype,"hasSlicePlane",void 0),_([b()],y.prototype,"hasSliceHighlight",void 0),_([b()],y.prototype,"hasColorTexture",void 0),_([b()],y.prototype,"hasMetallicRoughnessTexture",void 0),_([b()],y.prototype,"hasEmissionTexture",void 0),_([b()],y.prototype,"hasOcclusionTexture",void 0),_([b()],y.prototype,"hasNormalTexture",void 0),_([b()],y.prototype,"hasScreenSizePerspective",void 0),_([b()],y.prototype,"hasVertexTangents",void 0),_([b()],y.prototype,"hasOccludees",void 0),_([b()],y.prototype,"hasMultipassTerrain",void 0),_([b()],y.prototype,"hasModelTransformation",void 0),_([b()],y.prototype,"offsetBackfaces",void 0),_([b()],y.prototype,"vvSize",void 0),_([b()],y.prototype,"vvColor",void 0),_([b()],y.prototype,"receiveShadows",void 0),_([b()],y.prototype,"receiveAmbientOcclusion",void 0),_([b()],y.prototype,"textureAlphaPremultiplied",void 0),_([b()],y.prototype,"instanced",void 0),_([b()],y.prototype,"instancedColor",void 0),_([b()],y.prototype,"objectAndLayerIdColorInstanced",void 0),_([b()],y.prototype,"instancedDoublePrecision",void 0),_([b()],y.prototype,"doublePrecisionRequiresObfuscation",void 0),_([b()],y.prototype,"writeDepth",void 0),_([b()],y.prototype,"transparent",void 0),_([b()],y.prototype,"enableOffset",void 0),_([b()],y.prototype,"cullAboveGround",void 0),_([b()],y.prototype,"snowCover",void 0),_([b()],y.prototype,"hasColorTextureTransform",void 0),_([b()],y.prototype,"hasEmissionTextureTransform",void 0),_([b()],y.prototype,"hasNormalTextureTransform",void 0),_([b()],y.prototype,"hasOcclusionTextureTransform",void 0),_([b()],y.prototype,"hasMetallicRoughnessTextureTransform",void 0),_([b({constValue:!0})],y.prototype,"hasVvInstancing",void 0),_([b({constValue:!1})],y.prototype,"useCustomDTRExponentForWater",void 0),_([b({constValue:!1})],y.prototype,"supportsTextureAtlas",void 0),_([b({constValue:!0})],y.prototype,"useFillLights",void 0);function jc(t){const e=new kt,{vertex:r,fragment:a,varyings:i}=e;return Dt(r,t),e.include(da),i.add("vpos","vec3"),e.include(Gt,t),e.include(Po,t),e.include(Qi,t),t.output!==M.Color&&t.output!==M.Alpha||(Ut(e.vertex,t),e.include(Ar,t),e.include(zt,t),t.offsetBackfaces&&e.include($o),t.instancedColor&&e.attributes.add(m.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),t.hasMultipassTerrain&&i.add("depth","float"),e.include(xt,t),e.include(Vi,t),e.include(Ro,t),e.include(Lo,t),r.uniforms.add(new ee("externalColor",o=>o.externalColor)),i.add("vcolorExt","vec4"),r.code.add(l`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${l.float(ma)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.hasMultipassTerrain?l`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===M.Alpha&&(e.include(it,t),e.include(ot,t),e.include(vr,t),a.uniforms.add([new re("opacity",o=>o.opacity),new re("layerOpacity",o=>o.layerOpacity)]),t.hasColorTexture&&a.uniforms.add(new oe("tex",o=>o.texture)),a.include(br),a.code.add(l`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?l`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?l`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:l`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?l`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:l`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===M.Color&&(e.include(it,t),e.include(No,t),e.include(va,t),e.include(ot,t),e.include(t.instancedDoublePrecision?So:yo,t),e.include(vr,t),Ut(e.fragment,t),ia(a),ga(a),xa(a),a.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new j("ambient",o=>o.ambient),new j("diffuse",o=>o.diffuse),new re("opacity",o=>o.opacity),new re("layerOpacity",o=>o.layerOpacity)]),t.hasColorTexture&&a.uniforms.add(new oe("tex",o=>o.texture)),e.include(Pi,t),e.include(fa,t),a.include(br),e.extensions.add("GL_OES_standard_derivatives"),yr(a),a.code.add(l`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?l`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?l`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?l`colorUV`:l`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:l`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===F.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?l`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:l`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?l`albedo = mix(albedo, vec3(1), 0.9);`:l``}
        ${l`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===F.Normal||t.pbrMode===F.Schematic?t.spherical?l`vec3 normalGround = normalize(vpos + localOrigin);`:l`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:l``}
        ${t.pbrMode===F.Normal||t.pbrMode===F.Schematic?l`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?l`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:l`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===St.Color?l`gl_FragColor = premultiplyAlpha(gl_FragColor);`:l``}
      }
    `)),e.include(Fo,t),e}const Wc=Object.freeze(Object.defineProperty({__proto__:null,build:jc},Symbol.toStringTag,{value:"Module"}));let zo=class Do extends Yt{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=V.Attribute,r.doubleSidedMode=ie.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Do.shader)}};zo.shader=new Mr(Wc,()=>qt(()=>import("./RealisticTree.glsl-45ab7070.js"),["assets/RealisticTree.glsl-45ab7070.js","assets/mat3f64-50f3b9f6.js","assets/mat4f64-abdda1bb.js","assets/vec3f32-01c06d8d.js","assets/calcite-c5ae4991.js","assets/index-9a6385f7.js","assets/index-5026a37a.css","assets/calcite-96fa36fd.css","assets/OrderIndependentTransparency-5f7257d7.js","assets/enums-e2e92c86.js","assets/basicInterfaces-7449a8bf.js","assets/VertexAttribute-15d1866a.js","assets/symbolColorUtils-14fb8f64.js","assets/FramebufferObject-d9042b3f.js","assets/Texture-3d2bcec7.js","assets/devEnvironmentUtils-5002a058.js","assets/BufferView-bc307796.js","assets/vec33-164586fc.js","assets/DefaultMaterial_COLOR_GAMMA-941dbf6c.js","assets/types-e1c0a5bf.js","assets/Version-e2fa8281.js","assets/quat-8dcd84de.js","assets/quatf64-f8f1c132.js","assets/resourceUtils-527631ac.js","assets/Indices-84de656e.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-67552ee5.js","assets/Util-2b929b00.js","assets/sphere-5ce3b13c.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/VertexElementDescriptor-2925c6af.js","assets/InterleavedLayout-45bbbdfe.js"]));let Tr=class extends xl{constructor(e){super(e,Yc),this.supportsEdges=!0,this._configuration=new y,this._vertexBufferLayout=Xc(this.parameters)}isVisibleForOutput(e){return e!==M.Shadow&&e!==M.ShadowExcludeHighlight&&e!==M.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{instanced:r,hasVertexColors:a,hasSymbolColors:i,vvColorEnabled:o}=e,s=f(r)&&r.includes("color"),n=e.colorMixMode==="replace",c=e.opacity>0,d=e.externalColor&&e.externalColor[3]>0;return a&&(s||o||i)?!!n||c:a?n?d:c:s||o||i?!!n||c:n?d:c}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=f(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=f(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,f(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Ge.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=f(this.parameters.modelTransformation),e!==M.Color&&e!==M.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=ie.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?ie.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?ie.WindingOrder:ie.None,this._configuration.instancedColor=f(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!r.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?F.Schematic:F.Normal:F.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<Ys,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return f(e.weather)&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,a,i,o,s){if(f(this.parameters.verticalOffset)){const n=a.camera;q(Dr,r[12],r[13],r[14]);let c=null;switch(a.viewingMode){case ur.Global:c=Qr(ei,Dr);break;case ur.Local:c=pt(ei,Kc)}let d=0;const u=Fe(Qc,Dr,n.eye),h=Zr(u),v=he(u,u,1/h);let p=null;this.parameters.screenSizePerspective&&(p=hs(c,v)),d+=ml(n,h,this.parameters.verticalOffset,p??0,this.parameters.screenSizePerspective),he(c,c,d),ms(zr,c,a.transform.inverseRotation),i=Fe(Jc,i,zr),o=Fe(Zc,o,zr)}nl(e,a,i,o,Xn(a.verticalOffset),s)}requiresSlot(e,r){return r===M.Color||r===M.Alpha||r===M.Depth||r===M.Normal||r===M.Shadow||r===M.ShadowHighlight||r===M.ShadowExcludeHighlight||r===M.Highlight||r===M.ObjectAndLayerIdColor?e===(this.parameters.transparent?this.parameters.writeDepth?ft.TRANSPARENT_MATERIAL:ft.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:ft.OPAQUE_MATERIAL)||e===ft.DRAPED_MATERIAL:!1}createGLMaterial(e){return new qc(e)}createBufferWriter(){return new mc(this._vertexBufferLayout)}},qc=class extends fn{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==M.Color&&this._output!==M.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const r=this._material.parameters;this.updateTexture(r.textureId);const a=e.camera.viewInverseTransposeMatrix;return q(r.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?zo:Yt,e)}},kc=class extends Uc{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const Yc=new kc;function Xc(t){const e=Ks().vec3f(m.POSITION).vec3f(m.NORMAL),r=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId;return t.hasVertexTangents&&e.vec4f(m.TANGENT),r&&e.vec2f(m.UV0),t.hasVertexColors&&e.vec4u8(m.COLOR),t.hasSymbolColors&&e.vec4u8(m.SYMBOLCOLOR),fs("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(m.OBJECTANDLAYERIDCOLOR),e}const Jc=w(),Zc=w(),Kc=ae(0,0,1),ei=w(),zr=w(),Dr=w(),Qc=w();function Ft(t){if(z(t))return null;const e=f(t.offset)?t.offset:ps,r=f(t.rotation)?t.rotation:0,a=f(t.scale)?t.scale:vs,i=Or(1,0,0,0,1,0,e[0],e[1],1),o=Or(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),s=Or(a[0],0,0,0,a[1],0,0,0,1),n=yt();return Aa(n,o,s),Aa(n,i,n),n}class ed{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class td{constructor(e,r,a){this.name=e,this.lodThreshold=r,this.pivotOffset=a,this.stageResources=new ed,this.numberOfVertices=0}}const Ee=Yr.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function rd(t,e){const r=await ad(t,e),a=await ld(r.textureDefinitions??{},e);let i=0;for(const o in a)if(a.hasOwnProperty(o)){const s=a[o];i+=s!=null&&s.image?s.image.width*s.image.height*4:0}return{resource:r,textures:a,size:i+gs(r)}}async function ad(t,e){const r=f(e)&&e.streamDataRequester;if(r)return id(t,r,e);const a=await li(xs(t,st(e)));if(a.ok===!0)return a.value.data;ci(a.error),Bo(a.error)}async function id(t,e,r){const a=await li(e.request(t,"json",r));if(a.ok===!0)return a.value;ci(a.error),Bo(a.error.details.url)}function Bo(t){throw new Xr("",`Request for object resource failed: ${t}`)}function od(t){const e=t.params,r=e.topology;let a=!0;switch(e.vertexAttributes||(Ee.warn("Geometry must specify vertex attributes"),a=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const o=e.faces;if(o){if(e.vertexAttributes)for(const s in e.vertexAttributes){const n=o[s];n&&n.values?(n.valueType!=null&&n.valueType!=="UInt32"&&(Ee.warn(`Unsupported indexed geometry indices type '${n.valueType}', only UInt32 is currently supported`),a=!1),n.valuesPerElement!=null&&n.valuesPerElement!==1&&(Ee.warn(`Unsupported indexed geometry values per element '${n.valuesPerElement}', only 1 is currently supported`),a=!1)):(Ee.warn(`Indexed geometry does not specify face indices for '${s}' attribute`),a=!1)}}else Ee.warn("Indexed geometries must specify faces"),a=!1;break}default:Ee.warn(`Unsupported topology '${r}'`),a=!1}t.params.material||(Ee.warn("Geometry requires material"),a=!1);const i=t.params.vertexAttributes;for(const o in i)i[o].values||(Ee.warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function sd(t,e){const r=new Array,a=new Array,i=new Array,o=new Fs,s=t.resource,n=hi.parse(s.version||"1.0","wosr");dd.validate(n);const c=s.model.name,d=s.model.geometries,u=s.materialDefinitions??{},h=t.textures;let v=0;const p=new Map;for(let g=0;g<d.length;g++){const x=d[g];if(!od(x))continue;const T=cd(x),S=x.params.vertexAttributes,B=[];for(const A in S){const E=S[A],G=E.values;B.push([A,new mt(G,E.valuesPerElement,!0)])}const I=[];if(x.params.topology!=="PerAttributeArray"){const A=x.params.faces;for(const E in A)I.push([E,A[E].values])}const C=T.texture,N=h&&h[C];if(N&&!p.has(C)){const{image:A,params:E}=N,G=new fo(A,E);a.push(G),p.set(C,G)}const R=p.get(C),P=R?R.id:void 0,$=T.material;let L=o.get($,C);if(z(L)){const A=u[$.substring($.lastIndexOf("/")+1)].params;A.transparency===1&&(A.transparency=0);const E=N&&N.alphaChannelUsage,G=A.transparency>0||E==="transparency"||E==="maskAndTransparency",W=N?Go(N.alphaChannelUsage):void 0,U={ambient:Ca(A.diffuse),diffuse:Ca(A.diffuse),opacity:1-(A.transparency||0),transparent:G,textureAlphaMode:W,textureAlphaCutoff:.33,textureId:P,initTextureTransparent:!0,doubleSided:!0,cullFace:Ge.None,colorMixMode:A.externalColorMixMode||"tint",textureAlphaPremultiplied:!!N&&!!N.params.preMultiplyAlpha};f(e)&&e.materialParamsMixin&&Object.assign(U,e.materialParamsMixin),L=new Tr(U),o.set($,C,L)}i.push(L);const O=new Hi(L,B,I);v+=I.position?I.position.length:0,r.push(O)}return{engineResources:[{name:c,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,numberOfVertices:v,lodThreshold:null}],referenceBoundingBox:nd(r)}}function nd(t){const e=di();return t.forEach(r=>{const a=r.boundingInfo;f(a)&&(mr(e,a.bbMin),mr(e,a.bbMax))}),e}async function ld(t,e){const r=[];for(const o in t){const s=t[o],n=s.images[0].data;if(!n){Ee.warn("Externally referenced texture data is not yet supported");continue}const c=s.encoding+";base64,"+n,d="/textureDefinitions/"+o,u=s.channels==="rgba"?s.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:tt.REPEAT,t:tt.REPEAT},preMultiplyAlpha:Go(u)!==X.Opaque},v=f(e)&&e.disableTextures?Promise.resolve(null):mi(c,e);r.push(v.then(p=>({refId:d,image:p,params:h,alphaChannelUsage:u})))}const a=await Promise.all(r),i={};for(const o of a)i[o.refId]=o;return i}function Go(t){switch(t){case"mask":return X.Mask;case"maskAndTransparency":return X.MaskBlend;case"none":return X.Opaque;default:return X.Blend}}function cd(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const dd=new hi(1,2,"wosr");async function ud(t,e){const r=Vo(Ho(t));if(r.fileType==="wosr"){const h=await(e.cache?e.cache.loadWOSR(r.url,e):rd(r.url,e)),{engineResources:v,referenceBoundingBox:p}=sd(h,e);return{lods:v,referenceBoundingBox:p,isEsriSymbolResource:!1,isWosr:!0}}const a=await(e.cache?e.cache.loadGLTF(r.url,e,!!e.usePBR):As(new Cs(e.streamDataRequester),r.url,e,e.usePBR)),i=_s(a.model.meta,"ESRI_proxyEllipsoid"),o=a.meta.isEsriSymbolResource&&f(i)&&a.meta.uri.includes("/RealisticTrees/");o&&!a.customMeta.esriTreeRendering&&(a.customMeta.esriTreeRendering=!0,vd(a,i));const s=!!e.usePBR,n=a.meta.isEsriSymbolResource?{usePBR:s,isSchematic:!1,treeRendering:o,mrrFactors:[0,1,.2]}:{usePBR:s,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},c={...e.materialParamsMixin,treeRendering:o},{engineResources:d,referenceBoundingBox:u}=Uo(a,n,c,e.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:d,referenceBoundingBox:u,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1}}function Vo(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Uo(t,e,r,a){const i=t.model,o=new Array,s=new Map,n=new Map,c=i.lods.length,d=di();return i.lods.forEach((u,h)=>{const v=a.skipHighLods===!0&&(c>1&&h===0||c>3&&h===1)||a.skipHighLods===!1&&a.singleLodIndex!=null&&h!==a.singleLodIndex;if(v&&h!==0)return;const p=new td(u.name,u.lodThreshold,[0,0,0]);u.parts.forEach(g=>{const x=v?new Tr({}):hd(i,g,p,e,r,s,n),{geometry:T,vertexCount:S}=md(g,f(x)?x:new Tr({})),B=T.boundingInfo;f(B)&&h===0&&(mr(d,B.bbMin),mr(d,B.bbMax)),f(x)&&(p.stageResources.geometries.push(T),p.numberOfVertices+=S)}),v||o.push(p)}),{engineResources:o,referenceBoundingBox:d}}function hd(t,e,r,a,i,o,s){const n=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),c=t.materials.get(e.material),d=f(e.attributes.texCoord0),u=f(e.attributes.normal);if(z(c))return null;const h=fd(c.alphaMode);if(!o.has(n)){if(d){const C=(N,R=!1)=>{if(f(N)&&!s.has(N)){const P=t.textures.get(N);if(f(P)){const $=P.data;s.set(N,new fo(Er($)?$.data:$,{...P.parameters,preMultiplyAlpha:!Er($)&&R,encoding:Er($)&&f($.encoding)?$.encoding:void 0}))}}};C(c.textureColor,h!==X.Opaque),C(c.textureNormal),C(c.textureOcclusion),C(c.textureEmissive),C(c.textureMetallicRoughness)}const p=c.color[0]**(1/dt),g=c.color[1]**(1/dt),x=c.color[2]**(1/dt),T=c.emissiveFactor[0]**(1/dt),S=c.emissiveFactor[1]**(1/dt),B=c.emissiveFactor[2]**(1/dt),I=f(c.textureColor)&&d?s.get(c.textureColor):null;o.set(n,new Tr({...a,transparent:h===X.Blend,customDepthTest:Wt.Lequal,textureAlphaMode:h,textureAlphaCutoff:c.alphaCutoff,diffuse:[p,g,x],ambient:[p,g,x],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?Ge.None:Ge.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:u?V.Attribute:V.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:f(I)?I.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:f(c.textureNormal)&&d?s.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:f(I)&&!!I.params.preMultiplyAlpha,occlusionTextureId:f(c.textureOcclusion)&&d?s.get(c.textureOcclusion).id:void 0,emissiveTextureId:f(c.textureEmissive)&&d?s.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:f(c.textureMetallicRoughness)&&d?s.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[T,S,B],mrrFactors:[c.metallicFactor,c.roughnessFactor,a.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:Ft(c.colorTextureTransform),normalTextureTransformMatrix:Ft(c.normalTextureTransform),occlusionTextureTransformMatrix:Ft(c.occlusionTextureTransform),emissiveTextureTransformMatrix:Ft(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:Ft(c.metallicRoughnessTextureTransform),...i}))}const v=o.get(n);if(r.stageResources.materials.push(v),d){const p=g=>{f(g)&&r.stageResources.textures.push(s.get(g))};p(c.textureColor),p(c.textureNormal),p(c.textureOcclusion),p(c.textureEmissive),p(c.textureMetallicRoughness)}return v}function md(t,e){const r=t.attributes.position.count,a=pd(t.indices||r,t.primitiveType),i=Ke(gt,r);ys(i,t.attributes.position,t.transform);const o=[[m.POSITION,new mt(i.typedBuffer,i.elementCount,!0)]],s=[[m.POSITION,a]];if(f(t.attributes.normal)){const n=Ke(gt,r);Oa(ir,t.transform),ws(n,t.attributes.normal,ir),o.push([m.NORMAL,new mt(n.typedBuffer,n.elementCount,!0)]),s.push([m.NORMAL,a])}if(f(t.attributes.tangent)){const n=Ke(pr,r);Oa(ir,t.transform),Os(n,t.attributes.tangent,ir),o.push([m.TANGENT,new mt(n.typedBuffer,n.elementCount,!0)]),s.push([m.TANGENT,a])}if(f(t.attributes.texCoord0)){const n=Ke(ui,r);Es(n,t.attributes.texCoord0),o.push([m.UV0,new mt(n.typedBuffer,n.elementCount,!0)]),s.push([m.UV0,a])}if(f(t.attributes.color)){const n=Ke(Vt,r);if(t.attributes.color.elementCount===4)t.attributes.color instanceof pr?Ra(n,t.attributes.color,255):t.attributes.color instanceof Vt?$s(n,t.attributes.color):t.attributes.color instanceof Ts&&Ra(n,t.attributes.color,1/256);else{Ps(n,255,255,255,255);const c=new $a(n.buffer,0,4);t.attributes.color instanceof gt?Pa(c,t.attributes.color,255):t.attributes.color instanceof $a?Ms(c,t.attributes.color):t.attributes.color instanceof Ss&&Pa(c,t.attributes.color,1/256)}o.push([m.COLOR,new mt(n.typedBuffer,n.elementCount,!0)]),s.push([m.COLOR,a])}return{geometry:new Hi(e,o,s),vertexCount:r}}const ir=Ve();function fd(t){switch(t){case"BLEND":return X.Blend;case"MASK":return X.Mask;case"OPAQUE":case null:case void 0:return X.Opaque}}function pd(t,e){switch(e){case De.TRIANGLES:return Is(t);case De.TRIANGLE_STRIP:return Ls(t);case De.TRIANGLE_FAN:return Rs(t)}}function vd(t,e){for(let r=0;r<t.model.lods.length;++r){const a=t.model.lods[r];for(const i of a.parts){const o=i.attributes.normal;if(z(o))return;const s=i.attributes.position,n=s.count,c=w(),d=w(),u=w(),h=Ke(Vt,n),v=Ke(gt,n),p=ii(et(),i.transform);for(let g=0;g<n;g++){s.getVec(g,d),o.getVec(g,c),Tt(d,d,i.transform),Fe(u,d,e.center),Ea(u,u,e.radius);const x=u[2],T=Zr(u),S=Math.min(.45+.55*T*T,1);Ea(u,u,e.radius),p!==null&&Tt(u,u,p),Qr(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&dr(u,u,c,x>-1?.2:Math.min(-4*x-3.8,1)),v.setVec(g,u),h.set(g,0,255*S),h.set(g,1,255*S),h.set(g,2,255*S),h.set(g,3,255)}i.attributes.normal=v,i.attributes.color=h}}}const kh=Object.freeze(Object.defineProperty({__proto__:null,fetch:ud,gltfToEngineResources:Uo,parseUrl:Vo},Symbol.toStringTag,{value:"Module"}));export{fo as $,un as A,Ia as B,ca as C,Ri as D,wt as E,ft as F,yu as G,ze as H,zt as I,Hi as J,Ie as K,Pu as L,Ai as M,Gu as N,M as O,qr as P,_n as Q,bn as R,Hu as S,Xn as T,Zu as U,el as V,Dt as W,Ut as X,sl as Y,il as Z,tl as _,xt as a,Bu as a$,at as a0,J as a1,dn as a2,it as a3,Gt as a4,Ql as a5,rh as a6,ac as a7,Fr as a8,ic as a9,Gi as aA,vr as aB,nc as aC,cc as aD,lc as aE,bh as aF,Mh as aG,Th as aH,wh as aI,_h as aJ,gh as aK,hc as aL,nl as aM,Ih as aN,Vi as aO,yo as aP,mc as aQ,uh as aR,no as aS,zh as aT,mu as aU,Tr as aV,Lo as aW,Al as aX,Ft as aY,Vh as aZ,vl as a_,ma as aa,oc as ab,rc as ac,xl as ad,ki as ae,th as af,eh as ag,ml as ah,fn as ai,pn as aj,gr as ak,Tl as al,Sl as am,wl as an,so as ao,ch as ap,Ml as aq,ua as ar,Gn as as,Vn as at,Un as au,mn as av,_l as aw,_t as ax,sc as ay,Ga as az,fe as b,Cl as b$,ud as b0,ro as b1,da as b2,Bi as b3,No as b4,va as b5,Ec as b6,ga as b7,xa as b8,ie as b9,Bh as bA,fh as bB,Pi as bC,Ic as bD,So as bE,yh as bF,Xu as bG,Mi as bH,Wr as bI,$i as bJ,Rh as bK,bc as bL,tc as bM,du as bN,Pn as bO,Rn as bP,Ue as bQ,zi as bR,xe as bS,In as bT,lo as bU,bu as bV,Rc as bW,lh as bX,hh as bY,io as bZ,fl as b_,ul as ba,zu as bb,rd as bc,Ku as bd,Qu as be,oh as bf,To as bg,uc as bh,Ar as bi,al as bj,Sh as bk,hl as bl,hu as bm,uu as bn,ao as bo,V as bp,Ju as bq,dl as br,sr as bs,Pc as bt,br as bu,Lc as bv,Di as bw,bo as bx,Ei as by,hn as bz,j as c,Gc as c0,jc as c1,gc as c2,Sc as c3,pa as c4,kh as c5,te as d,rt as e,ee as f,re as g,oe as h,ia as i,aa as j,sa as k,na as l,wi as m,Ci as n,kt as o,Z as p,D as q,b as r,gn as s,Mr as t,yr as u,xn as v,ra as w,vn as x,F as y,la as z};
