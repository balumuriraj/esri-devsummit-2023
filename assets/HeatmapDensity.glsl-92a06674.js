import{v as f}from"./View.glsl-3ce196d4.js";import{o as v}from"./FloatPassUniform-68d54f51.js";import{o as m,n as t}from"./ShaderBuilder-a7d0da4e.js";import{O as a}from"./VertexAttribute-9c5c630d.js";function R(r){const o=new m,{vertex:e,fragment:n}=o;f(e,r);const{isAttributeDriven:i,usesHalfFloat:s}=r;return o.attributes.add(a.POSITION,"vec3"),o.attributes.add(a.UV0,"vec2"),i&&(o.attributes.add(a.FEATUREATTRIBUTE,"float"),o.varyings.add("attributeValue","float")),s&&o.constants.add("compressionFactor","float",.25),o.varyings.add("unitCirclePos","vec2"),e.uniforms.add(new v("radius",({resolutionForScale:d,searchRadius:l},{camera:u,screenToWorldRatio:c})=>2*l*(d===0?1:d/c)*u.pixelRatio/u.fullViewport[2])),e.code.add(t`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${a.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${i?t`attributeValue = ${a.FEATUREATTRIBUTE};`:""}
      gl_Position = posProj + quadOffset;
    }
  `),n.code.add(t`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${i?t` * attributeValue`:""} ${s?t` * compressionFactor`:""};
      gl_FragColor = vec4(density);
    }
  `),o}const S=Object.freeze(Object.defineProperty({__proto__:null,build:R},Symbol.toStringTag,{value:"Module"}));export{R as a,S as s};
