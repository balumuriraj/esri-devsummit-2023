import{o as s}from"./ScreenSpacePass-d5e48a9b.js";import{d}from"./DiscardOrAdjustAlphaBlend.glsl-73258f38.js";import{o}from"./FloatPassUniform-68d54f51.js";import{o as m,n}from"./ShaderBuilder-a7d0da4e.js";import{f as r}from"./Texture2DPassUniform-753de459.js";function l(a){const e=new m;e.include(s),e.include(d);const{usesHalfFloat:i}=a;return e.fragment.uniforms.add([new r("densityMap",t=>t.densityMap),new r("tex",t=>t.colorRamp),new o("densityNormalizer",t=>1/(t.maxDensity-t.minDensity)),new o("minDensity",t=>t.minDensity)]),e.fragment.uniforms.add(new o("densityMultiplier",t=>3/(t.searchRadius*t.searchRadius*Math.PI))),i&&e.constants.add("compressionFactor","float",4),e.fragment.code.add(n`
    void main() {
      float density = texture2D(densityMap, uv).r * densityMultiplier${i?n` * compressionFactor`:""};
      float densityRatio = (density - minDensity) * densityNormalizer;

      vec4 color = texture2D(tex, vec2(clamp(densityRatio, 0.0, 1.0), 0.5));

      discardOrAdjustAlpha(color);
      gl_FragColor = color;
    }
  `),e}const g=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}));export{g as a,l as t};
