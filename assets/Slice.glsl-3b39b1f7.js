import{e as n,t as H,r as _}from"./typedArrayUtil-4d7bb04c.js";import{c as L}from"./mat4-44a0988f.js";import{e as G}from"./mat4f64-1e28eae0.js";import{O as u,u as T,e as h,o as w}from"./vec3-e93e648f.js";import{f as m,n as g}from"./vec3f64-2f9cef06.js";import{a as P,b as p}from"./View.glsl-3ce196d4.js";import{n as r,t as x}from"./ShaderBuilder-a7d0da4e.js";class C extends x{constructor(s){super(),this.slicePlaneLocalOrigin=s}}function N(i,s){I(i,s,[new P("slicePlaneOrigin",(e,a)=>S(s,e,a)),new P("slicePlaneBasis1",(e,a)=>{var c;return f(s,e,a,(c=n(a.slicePlane))==null?void 0:c.basis1)}),new P("slicePlaneBasis2",(e,a)=>{var c;return f(s,e,a,(c=n(a.slicePlane))==null?void 0:c.basis2)})])}function R(i,s){I(i,s,[new p("slicePlaneOrigin",(e,a)=>S(s,e,a)),new p("slicePlaneBasis1",(e,a)=>{var c;return f(s,e,a,(c=n(a.slicePlane))==null?void 0:c.basis1)}),new p("slicePlaneBasis2",(e,a)=>{var c;return f(s,e,a,(c=n(a.slicePlane))==null?void 0:c.basis2)})])}function I(i,s,e){if(!s.hasSlicePlane){const l=r`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&i.vertex.code.add(l),void i.fragment.code.add(l)}i.extensions.add("GL_OES_standard_derivatives"),s.hasSliceInVertexProgram&&i.vertex.uniforms.add(e),i.fragment.uniforms.add(e);const a=r`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,c=r`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,o=s.hasSliceHighlight?r`
        ${c}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:r`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&i.vertex.code.add(a),i.fragment.code.add(a),i.fragment.code.add(o)}function b(i,s,e){return i.instancedDoublePrecision?w(O,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function v(i,s){return _(i)?h(d,s.origin,i):s.origin}function B(i,s,e){return i.hasSliceTranslatedView?_(s)?L(D,e.camera.viewMatrix,s):e.camera.viewMatrix:null}function S(i,s,e){if(H(e.slicePlane))return m;const a=b(i,s,e),c=v(a,e.slicePlane),o=B(i,a,e);return _(o)?u(d,c,o):c}function f(i,s,e,a){if(H(a)||H(e.slicePlane))return m;const c=b(i,s,e),o=v(c,e.slicePlane),l=B(i,c,e);return _(l)?(T(t,a,o),u(d,o,l),u(t,t,l),h(t,t,d)):a}const O=g(),d=g(),t=g(),D=G();export{C as m,N as p,R as u};
