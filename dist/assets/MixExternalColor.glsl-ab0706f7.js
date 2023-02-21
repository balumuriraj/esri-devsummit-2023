import{n as r,i as T,a as N}from"./ShaderBuilder-a7d0da4e.js";import{e as D}from"./cast-fcb46737.js";import{o as g}from"./vec3-e93e648f.js";import{n as P}from"./vec3f64-2f9cef06.js";import{e as V,h as n}from"./Matrix3PassUniform-ad9f953b.js";import{o as O,F as I,W as S,c as z,e as _,b as L}from"./ForwardLinearDepth.glsl-56affafd.js";import{b as $,d as W,e as G,v as p}from"./View.glsl-3ce196d4.js";import{e as j,t as F}from"./ShaderTechniqueConfiguration-9f5b4555.js";import{O as u}from"./VertexAttribute-9c5c630d.js";import{I as R,J as k,U as B}from"./VisualVariablePassParameters-d460182b.js";import{r as d}from"./symbolColorUtils-b2b55883.js";import{e as E,o as f}from"./PhysicallyBasedRendering.glsl-d457fff5.js";import{r as H}from"./typedArrayUtil-4d7bb04c.js";import{o as U}from"./mat4f64-1e28eae0.js";import{u as x}from"./Slice.glsl-3b39b1f7.js";import{r as M}from"./Transform.glsl-6d2e2fd9.js";import{d as q}from"./ObjectAndLayerIdColor.glsl-ad468647.js";import{e as b}from"./mat3f64-c6305894.js";import{n as X}from"./vec4f64-e407da96.js";import{o as J}from"./OutputDepth.glsl-470c8e2a.js";import{a as Y}from"./OutputHighlight.glsl-fbac199a.js";import{s as h}from"./VisualVariables.glsl-2b937327.js";import{d as K}from"./DiscardOrAdjustAlphaBlend.glsl-73258f38.js";import{o as Q}from"./FloatPassUniform-68d54f51.js";import{C as m}from"./basicInterfaces-19ed850e.js";import{f as C}from"./Texture2DPassUniform-753de459.js";import{e as Z}from"./TransparencyPassType-a11868d2.js";function oo(o){const e=r`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.vertex.code.add(e)}function w(o,e){e.normalType===l.Attribute&&(o.attributes.add(u.NORMAL,"vec3"),o.vertex.code.add(r`vec3 normalModel() {
return normal;
}`)),e.normalType===l.CompressedAttribute&&(o.include(oo),o.attributes.add(u.NORMALCOMPRESSED,"vec2"),o.vertex.code.add(r`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),e.normalType===l.ScreenDerivative&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(r`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}var l;(function(o){o[o.Attribute=0]="Attribute",o[o.CompressedAttribute=1]="CompressedAttribute",o[o.Ground=2]="Ground",o[o.ScreenDerivative=3]="ScreenDerivative",o[o.COUNT=4]="COUNT"})(l||(l={}));function eo(o,e){e.normalType===l.Attribute||e.normalType===l.CompressedAttribute?(o.include(w,e),o.varyings.add("vNormalWorld","vec3"),o.varyings.add("vNormalView","vec3"),o.vertex.uniforms.add([new O("transformNormalGlobalFromModel",a=>a.transformNormalGlobalFromModel),new V("transformNormalViewFromGlobal",a=>a.transformNormalViewFromGlobal)]),o.vertex.code.add(r`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):e.normalType===l.Ground?(o.include(I,e),o.varyings.add("vNormalWorld","vec3"),o.vertex.code.add(r`
    void forwardNormal() {
      vNormalWorld = ${e.spherical?r`normalize(vPositionWorldCameraRelative);`:r`vec3(0.0, 0.0, 1.0);`}
    }
    `)):o.vertex.code.add(r`void forwardNormal() {}`)}class So extends z{constructor(){super(...arguments),this.transformNormalViewFromGlobal=b()}}class zo extends S{constructor(){super(...arguments),this.transformNormalGlobalFromModel=b(),this.toMapSpace=X()}}function _o(o){o.vertex.code.add(r`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}class ro extends F{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function Lo(o,e){e.instanced&&e.instancedDoublePrecision&&(o.attributes.add(u.MODELORIGINHI,"vec3"),o.attributes.add(u.MODELORIGINLO,"vec3"),o.attributes.add(u.MODEL,"mat3"),o.attributes.add(u.MODELNORMAL,"mat3"));const a=o.vertex;e.instancedDoublePrecision&&(a.include(_,e),a.uniforms.add(new $("viewOriginHi",(t,i)=>R(g(v,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),v))),a.uniforms.add(new $("viewOriginLo",(t,i)=>k(g(v,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),v)))),a.code.add(r`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),a.code.add(r`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?r`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),a.code.add(r`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),e.output===n.Normal&&(W(a),a.code.add(r`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),e.hasVertexTangents&&a.code.add(r`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}D([j()],ro.prototype,"instancedDoublePrecision",void 0);const v=P();function ao(o){o.vertex.code.add(r`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.int(d.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.int(d.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.int(d.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.int(d.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Wo(o,e){e.hasSymbolColors?(o.include(ao),o.attributes.add(u.SYMBOLCOLOR,"vec4"),o.varyings.add("colorMixMode","mediump float"),o.vertex.code.add(r`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(o.fragment.uniforms.add(new E("colorMixMode",a=>B[a.colorMixMode])),o.vertex.code.add(r`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}class to extends T{constructor(e,a){super(e,"float",N.Draw,(t,i,s)=>t.setUniform1f(e,a(i,s)))}}function y(o,e){A(o,e,new Q("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function Go(o,e){A(o,e,new to("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function A(o,e,a){const t=o.fragment;switch(e.alphaDiscardMode!==m.Mask&&e.alphaDiscardMode!==m.MaskBlend||t.uniforms.add(a),e.alphaDiscardMode){case m.Blend:return o.include(K);case m.Opaque:t.code.add(r`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case m.Mask:t.code.add(r`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case m.MaskBlend:o.fragment.code.add(r`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function jo(o,e){const{vertex:a,fragment:t}=o,i=e.hasModelTransformation;i&&a.uniforms.add(new G("model",c=>H(c.modelTransformation)?c.modelTransformation:U));const s=e.hasColorTexture&&e.alphaDiscardMode!==m.Opaque;switch(e.output){case n.Depth:case n.Shadow:case n.ShadowHighlight:case n.ShadowExludeHighlight:case n.ObjectAndLayerIdColor:p(a,e),o.include(M,e),o.include(f,e),o.include(h,e),o.include(J,e),o.include(x,e),o.include(q,e),L(o),o.varyings.add("depth","float"),s&&t.uniforms.add(new C("tex",c=>c.texture)),a.code.add(r`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${i?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),o.include(y,e),t.code.add(r`
          void main(void) {
            discardBySlice(vpos);
            ${s?r`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===n.ObjectAndLayerIdColor?r`outputObjectAndLayerIdColor();`:r`outputDepth(depth);`}
          }
        `);break;case n.Normal:p(a,e),o.include(M,e),o.include(w,e),o.include(eo,e),o.include(f,e),o.include(h,e),s&&t.uniforms.add(new C("tex",c=>c.texture)),o.varyings.add("vPositionView","vec3"),a.code.add(r`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${e.normalType===l.Attribute?r`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${i?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),o.include(x,e),o.include(y,e),t.code.add(r`
          void main() {
            discardBySlice(vpos);
            ${s?r`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===l.ScreenDerivative?r`
                vec3 normal = screenDerivativeNormal(vPositionView);`:r`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case n.Highlight:p(a,e),o.include(M,e),o.include(f,e),o.include(h,e),s&&t.uniforms.add(new C("tex",c=>c.texture)),a.code.add(r`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${i?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),o.include(x,e),o.include(y,e),o.include(Y,e),t.code.add(r`
          void main() {
            discardBySlice(vpos);
            ${s?r`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function Fo(o){o.include(Z),o.code.add(r`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.int(d.Multiply)}) {
        return allMixed;
      }
      if (mode == ${r.int(d.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(d.Replace)}) {
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

      if (mode == ${r.int(d.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(d.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}export{Fo as a,to as b,zo as c,_o as d,ao as e,So as f,Wo as g,jo as h,l as i,eo as n,w as o,Lo as p,y as s,Go as t};
