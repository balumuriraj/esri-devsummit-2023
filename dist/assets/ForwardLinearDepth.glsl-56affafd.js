import{e as F,h as i}from"./Matrix3PassUniform-ad9f953b.js";import{e as c}from"./mat3f64-c6305894.js";import{e as w}from"./mat4f64-1e28eae0.js";import{n as d}from"./vec3f32-c9aa289f.js";import{n as s}from"./vec3f64-2f9cef06.js";import{i as h,a as p,n as a,t as v}from"./ShaderBuilder-a7d0da4e.js";import{O as W}from"./VertexAttribute-9c5c630d.js";import{h as P}from"./string-a318751c.js";import{a as n,e as R,b as m}from"./View.glsl-3ce196d4.js";import{e as M}from"./Texture2DPassUniform-753de459.js";let T=class extends h{constructor(t,e){super(t,"mat3",p.Draw,(o,f,u)=>o.setUniformMatrix3fv(t,e(f,u)))}};function V(r){r.attributes.add(W.POSITION,"vec3"),r.vertex.code.add(a`vec3 positionModel() { return position; }`)}function L({code:r},t){t.doublePrecisionRequiresObfuscation?r.add(a`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):r.add(a`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function z(r){return!!P("force-double-precision-obfuscation")||r.driverTest.doublePrecisionRequiresObfuscation}function b(r,t){r.include(V);const e=r.vertex;e.include(L,t),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add([new n("transformWorldFromViewTH",o=>o.transformWorldFromViewTH),new n("transformWorldFromViewTL",o=>o.transformWorldFromViewTL),new F("transformViewFromCameraRelativeRS",o=>o.transformViewFromCameraRelativeRS),new R("transformProjFromView",o=>o.transformProjFromView),new T("transformWorldFromModelRS",o=>o.transformWorldFromModelRS),new m("transformWorldFromModelTH",o=>o.transformWorldFromModelTH),new m("transformWorldFromModelTL",o=>o.transformWorldFromModelTL)]),e.code.add(a`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(a`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?a`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:a`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new n("transformWorldFromViewTL",o=>o.transformWorldFromViewTL)),e.code.add(a`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(a`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class y extends v{constructor(){super(...arguments),this.transformWorldFromViewTH=s(),this.transformWorldFromViewTL=s(),this.transformViewFromCameraRelativeRS=c(),this.transformProjFromView=w()}}class E extends v{constructor(){super(...arguments),this.transformWorldFromModelRS=c(),this.transformWorldFromModelTH=d(),this.transformWorldFromModelTL=d()}}function l(r){r.varyings.add("linearDepth","float")}function C(r){r.vertex.uniforms.add(new M("nearFar",(t,e)=>e.camera.nearFar))}function $(r){r.vertex.code.add(a`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function I(r,t){const{vertex:e}=r;switch(t.output){case i.Color:if(t.receiveShadows)return l(r),void e.code.add(a`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.Depth:case i.Shadow:case i.ShadowHighlight:case i.ShadowExludeHighlight:return r.include(b,t),l(r),C(r),$(r),void e.code.add(a`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}e.code.add(a`void forwardLinearDepth() {}`)}export{b as F,E as W,V as a,C as b,y as c,I as d,L as e,z as i,$ as n,T as o,l as t};
