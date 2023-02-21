import{r as s}from"./typedArrayUtil-4d7bb04c.js";import{o as w}from"./mat4f64-1e28eae0.js";import{a as b,d as M}from"./ForwardLinearDepth.glsl-56affafd.js";import{p as N,o as O,i as c,d as V,n as S,g as E,s as p,a as f,h as _}from"./MixExternalColor.glsl-ab0706f7.js";import{e as l,h as m}from"./Matrix3PassUniform-ad9f953b.js";import{u as T}from"./Slice.glsl-3b39b1f7.js";import{r as A}from"./Transform.glsl-6d2e2fd9.js";import{d as U,f as P,o as F,h as L,v as z,x as R,g as B,c as D,b as v}from"./PhysicallyBasedRendering.glsl-d457fff5.js";import{e as G}from"./VertexColor.glsl-8c022fa8.js";import{a as W}from"./VerticalOffset.glsl-87cbb2e3.js";import{i as I,e as j}from"./Normals.glsl-76f97814.js";import{a as x,u as k,r as H,f as g}from"./Texture2DPassUniform-753de459.js";import{n as a,a as X,o as q}from"./ShaderBuilder-a7d0da4e.js";import{u as Y}from"./Texture2DDrawUniform-053796dc.js";import{O as C}from"./VertexAttribute-9c5c630d.js";import{p as Z,d as J,f as K,u as Q}from"./EvaluateSceneLighting.glsl-189abc15.js";import{n as h}from"./MultipassTerrainTest.glsl-bb236672.js";import{e as d}from"./mat3f32-d3d088e8.js";import{s as ee}from"./VisualVariables.glsl-2b937327.js";import{t as oe}from"./AlphaCutoff-96178e0d.js";import{v as ae,c as y,e as re,a as $}from"./View.glsl-3ce196d4.js";import{e as te}from"./Float4PassUniform-d7bdbc81.js";import{o as u}from"./FloatPassUniform-68d54f51.js";import{o as ne}from"./TransparencyPassType-a11868d2.js";function ie(e,o){const n=e.fragment;if(o.hasVertexTangents?(e.attributes.add(C.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),o.doubleSidedMode===I.WindingOrder?n.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):n.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),n.code.add(a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),o.textureCoordinateType!==U.None){e.include(P,o);const t=o.supportsTextureAtlas?o.hasWebGL2Context?x.None:x.Size:x.None;n.uniforms.add(o.pbrTextureBindType===X.Pass?k("normalTexture",i=>i.textureNormal,t):Y("normalTexture",i=>i.textureNormal,t)),n.code.add(a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${o.supportsTextureAtlas?a`vtc.size = ${H(o,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function se(e){e.vertex.uniforms.add(new l("colorTextureTransformMatrix",o=>s(o.colorTextureTransformMatrix)?o.colorTextureTransformMatrix:d())),e.varyings.add("colorUV","vec2"),e.vertex.code.add(a`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function le(e){e.vertex.uniforms.add(new l("normalTextureTransformMatrix",o=>s(o.normalTextureTransformMatrix)?o.normalTextureTransformMatrix:d())),e.varyings.add("normalUV","vec2"),e.vertex.code.add(a`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function de(e){e.vertex.uniforms.add(new l("emissiveTextureTransformMatrix",o=>s(o.emissiveTextureTransformMatrix)?o.emissiveTextureTransformMatrix:d())),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(a`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ce(e){e.vertex.uniforms.add(new l("occlusionTextureTransformMatrix",o=>s(o.occlusionTextureTransformMatrix)?o.occlusionTextureTransformMatrix:d())),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(a`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function me(e){e.vertex.uniforms.add(new l("metallicRoughnessTextureTransformMatrix",o=>s(o.metallicRoughnessTextureTransformMatrix)?o.metallicRoughnessTextureTransformMatrix:d())),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(a`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ue(e){const o=new q,{vertex:n,fragment:t,varyings:i}=o;return ae(n,e),o.include(b),i.add("vpos","vec3"),o.include(ee,e),o.include(N,e),o.include(W,e),e.hasColorTextureTransform&&o.include(se),e.output!==m.Color&&e.output!==m.Alpha||(e.hasNormalTextureTransform&&o.include(le),e.hasEmissionTextureTransform&&o.include(de),e.hasOcclusionTextureTransform&&o.include(ce),e.hasMetallicRoughnessTextureTransform&&o.include(me),y(n,e),o.include(O,e),o.include(A,e),e.normalType===c.Attribute&&e.offsetBackfaces&&o.include(V),o.include(ie,e),o.include(S,e),e.instancedColor&&o.attributes.add(C.INSTANCECOLOR,"vec4"),i.add("localvpos","vec3"),o.include(F,e),o.include(M,e),o.include(E,e),o.include(G,e),n.uniforms.add(new te("externalColor",r=>r.externalColor)),i.add("vcolorExt","vec4"),e.hasMultipassTerrain&&i.add("depth","float"),e.hasModelTransformation&&n.uniforms.add(new re("model",r=>s(r.modelTransformation)?r.modelTransformation:w)),n.code.add(a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${a.float(oe)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===c.Attribute?a`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===c.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?a`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?a`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?a`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?a`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?a`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===m.Alpha&&(o.include(T,e),o.include(p,e),o.include(h,e),t.uniforms.add([new u("opacity",r=>r.opacity),new u("layerOpacity",r=>r.layerOpacity)]),e.hasColorTexture&&t.uniforms.add(new g("tex",r=>r.texture)),t.include(f),t.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?a`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===m.Color&&(o.include(T,e),o.include(Z,e),o.include(J,e),o.include(p,e),o.include(e.instancedDoublePrecision?L:z,e),o.include(h,e),y(t,e),t.uniforms.add([n.uniforms.get("localOrigin"),new $("ambient",r=>r.ambient),new $("diffuse",r=>r.diffuse),new u("opacity",r=>r.opacity),new u("layerOpacity",r=>r.layerOpacity)]),e.hasColorTexture&&t.uniforms.add(new g("tex",r=>r.texture)),o.include(R,e),o.include(B,e),t.include(f),o.include(j,e),K(t),Q(t),D(t),t.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===c.ScreenDerivative?a`
                vec3 normal = screenDerivativeNormal(localvpos);`:a`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===v.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?a`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?a`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:a`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?a`normalize(posWorld);`:a`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?a`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===v.Normal||e.pbrMode===v.Schematic?a`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?a`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===ne.Color?a`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),o.include(_,e),o}const ze=Object.freeze(Object.defineProperty({__proto__:null,build:ue},Symbol.toStringTag,{value:"Module"}));export{ue as Q,ze as X,ie as c};
