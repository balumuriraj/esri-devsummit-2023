import{b as n,t as u}from"./ForwardLinearDepth.glsl-56affafd.js";import{h as e}from"./Matrix3PassUniform-ad9f953b.js";import{u as m}from"./Slice.glsl-3b39b1f7.js";import{r as s}from"./Transform.glsl-6d2e2fd9.js";import{d as f}from"./ObjectAndLayerIdColor.glsl-ad468647.js";import{e as c}from"./VertexColor.glsl-8c022fa8.js";import{o as h}from"./OutputDepth.glsl-470c8e2a.js";import{a as g}from"./OutputHighlight.glsl-fbac199a.js";import{n as C}from"./MultipassTerrainTest.glsl-bb236672.js";import{t as $}from"./AlphaCutoff-96178e0d.js";import{e as y,o as _}from"./TransparencyPassType-a11868d2.js";import{v as b}from"./View.glsl-3ce196d4.js";import{e as O}from"./Float4PassUniform-d7bdbc81.js";import{o as j,n as t}from"./ShaderBuilder-a7d0da4e.js";import{O as v}from"./VertexAttribute-9c5c630d.js";function w(o){const r=new j,{vertex:l,fragment:a}=r,p=o.output===e.Depth,i=o.hasMultipassTerrain&&(o.output===e.Color||o.output===e.Alpha);return b(l,o),r.include(s,o),r.include(c,o),r.include(f,o),r.attributes.add(v.POSITION,"vec3"),r.varyings.add("vpos","vec3"),i&&r.varyings.add("depth","float"),p&&(r.include(h,o),n(r),u(r)),l.code.add(t`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();
      ${i?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${p?t`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:t`transformPosition(proj, view, vpos);`}
    }
  `),r.include(m,o),i&&r.include(C,o),a.include(y),a.uniforms.add(new O("eColor",d=>d.color)),o.output===e.Highlight&&r.include(g,o),a.code.add(t`
  void main() {
    discardBySlice(vpos);
    ${i?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = ${o.hasVertexColors?"vColor * eColor;":"eColor;"}

    if (fColor.a < ${t.float($)}) {
      discard;
    }

    ${o.output===e.Alpha?t`gl_FragColor = vec4(fColor.a);`:""}

    ${o.output===e.Color?t`gl_FragColor = highlightSlice(fColor, vpos); ${o.transparencyPassType===_.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    ${o.output===e.Highlight?t`outputHighlight();`:""};
    ${o.output===e.Depth?t`outputDepth(linearDepth);`:""};
    ${o.output===e.ObjectAndLayerIdColor?t`outputObjectAndLayerIdColor();`:""}
  }
  `),r}const W=Object.freeze(Object.defineProperty({__proto__:null,build:w},Symbol.toStringTag,{value:"Module"}));export{W as f,w as v};
