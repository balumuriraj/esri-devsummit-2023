import{h as n}from"./Matrix3PassUniform-ad9f953b.js";import{u as c}from"./Slice.glsl-3b39b1f7.js";import{r as m}from"./Transform.glsl-6d2e2fd9.js";import{e as v}from"./VertexColor.glsl-8c022fa8.js";import{a as g}from"./OutputHighlight.glsl-fbac199a.js";import{a as f,g as S}from"./LineStipple.glsl-ed22a88b.js";import{t as u}from"./AlphaCutoff-96178e0d.js";import{v as h}from"./View.glsl-3ce196d4.js";import{e as p}from"./Float4PassUniform-d7bdbc81.js";import{o as d}from"./FloatPassUniform-68d54f51.js";import{o as x,n as t}from"./ShaderBuilder-a7d0da4e.js";import{O as s}from"./VertexAttribute-9c5c630d.js";function P(e){const i=new x,{vertex:o,fragment:l}=i;return i.include(m,e),i.include(v,e),i.include(f,e),h(o,e),e.stippleEnabled&&(i.attributes.add(s.UV0,"vec2"),i.attributes.add(s.AUXPOS1,"vec3"),o.uniforms.add(new p("viewport",(r,a)=>a.camera.fullViewport))),i.attributes.add(s.POSITION,"vec3"),i.varyings.add("vpos","vec3"),o.code.add(t`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),e.stippleEnabled&&(o.code.add(t`vec4 vpos2 = transformPosition(proj, view, auxpos1);
vec2 ndcToPixel = viewport.zw * 0.5;
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),e.draped?o.uniforms.add(new d("worldToScreenRatio",(r,a)=>1/a.screenToPCSRatio)):o.code.add(t`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),o.code.add(t`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),e.draped?o.code.add(t`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):o.code.add(t`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),o.uniforms.add(new d("stipplePatternPixelSize",r=>S(r))),o.code.add(t`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),o.code.add(t`}`),e.output===n.Highlight&&i.include(g,e),i.include(c,e),l.uniforms.add(new d("alphaCoverage",(r,a)=>Math.min(1,r.width*a.camera.pixelRatio))),e.hasVertexColors||l.uniforms.add(new p("constantColor",r=>r.color)),l.code.add(t`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${e.hasVertexColors?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    if (finalColor.a < ${t.float(u)}) {
      discard;
    }

    ${e.output===n.Color?t`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===n.Highlight?t`outputHighlight();`:""}
  }
  `),i}const O=Object.freeze(Object.defineProperty({__proto__:null,build:P},Symbol.toStringTag,{value:"Module"}));export{P as u,O as v};
