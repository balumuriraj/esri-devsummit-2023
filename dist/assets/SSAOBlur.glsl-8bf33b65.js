import{x as d}from"./vec3-e93e648f.js";import{o as i}from"./ScreenSpacePass-d5e48a9b.js";import{a as u}from"./ReadLinearDepth.glsl-9c87a54a.js";import{f as p,o as s}from"./Texture2DDrawUniform-053796dc.js";import{f as m,e as b}from"./Texture2DPassUniform-753de459.js";import{o as v}from"./FloatPassUniform-68d54f51.js";import{o as w,n as t}from"./ShaderBuilder-a7d0da4e.js";const n=4;function _(){const a=new w,r=a.fragment;a.include(i);const f=(n+1)/2,c=1/(2*f*f);return r.include(u),r.uniforms.add([new m("depthMap",e=>e.depthTexture),new p("tex",e=>e.colorTexture),new s("blurSize",e=>e.blurSize),new v("projScale",(e,o)=>{const l=d(o.camera.eye,o.camera.center);return l>5e4?Math.max(0,e.projScale-(l-5e4)):e.projScale}),new b("nearFar",(e,o)=>o.camera.nearFar)]),r.code.add(t`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${t.float(c)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),r.code.add(t`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${t.int(n)}; r <= ${t.int(n)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),a}const g=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:"Module"}));export{_ as c,g as u};
