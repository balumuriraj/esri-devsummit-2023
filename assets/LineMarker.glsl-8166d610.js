import{p as d,b as h,i as u,s as g,t as v,o as S,e as y}from"./MarkerSizing.glsl-566261cc.js";import{t as x,n as z}from"./ForwardLinearDepth.glsl-56affafd.js";import{h as s}from"./Matrix3PassUniform-ad9f953b.js";import{u as P}from"./Slice.glsl-3b39b1f7.js";import{o as w}from"./OutputDepth.glsl-470c8e2a.js";import{n as $}from"./MultipassTerrainTest.glsl-bb236672.js";import{t as b}from"./AlphaCutoff-96178e0d.js";import{e as D,o as L}from"./TransparencyPassType-a11868d2.js";import{a as N}from"./RgbaFloatEncoding.glsl-52af7fcf.js";import{v as k,d as M,e as T}from"./View.glsl-3ce196d4.js";import{e as O,f as W}from"./Texture2DPassUniform-753de459.js";import{e as m}from"./Float4PassUniform-d7bdbc81.js";import{o as f}from"./FloatPassUniform-68d54f51.js";import{o as A,n as a}from"./ShaderBuilder-a7d0da4e.js";import{O as l}from"./VertexAttribute-9c5c630d.js";function F(e){const r=new A,p=e.hasMultipassTerrain&&(e.output===s.Color||e.output===s.Alpha),i=e.space===d.World;e.hasTip&&i&&r.extensions.add("GL_OES_standard_derivatives"),r.include(h,e),r.include(u,e),e.output===s.Depth&&r.include(w,e);const{vertex:o,fragment:c}=r;return c.include(N),k(o,e),r.attributes.add(l.POSITION,"vec3"),r.attributes.add(l.UV0,"vec2"),r.attributes.add(l.AUXPOS1,"vec3"),r.varyings.add("vColor","vec4"),r.varyings.add("vpos","vec3"),r.varyings.add("vUV","vec2"),r.varyings.add("vSize","float"),x(r),p&&r.varyings.add("depth","float"),e.hasTip&&r.varyings.add("vLineWidth","float"),o.uniforms.add([new O("nearFar",(n,t)=>t.camera.nearFar),new m("viewport",(n,t)=>t.camera.fullViewport)]),o.code.add(a`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),o.code.add(a`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),i?(r.attributes.add(l.NORMAL,"vec3"),M(o),o.constants.add("tiltThreshold","float",.7),o.code.add(a`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):o.code.add(a`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`),o.code.add(a`
      #define vecN ${i?"vec3":"vec2"}

      vecN normalizedSegment(vecN pos, vecN prev) {
        vecN segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${i?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      vecN displace(vecN pos, vecN prev, float displacementLen) {
        vecN segment = normalizedSegment(pos, prev);

        vecN displacementDirU = perpendicular(segment);
        vecN displacementDirV = segment;

        ${e.anchor===g.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),e.space===d.Screen&&(o.uniforms.add(new T("inverseProjectionMatrix",(n,t)=>t.camera.inverseProjectionMatrix)),o.code.add(a`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),o.code.add(a`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),o.uniforms.add(new f("perScreenPixelRatio",(n,t)=>t.camera.perScreenPixelRatio)),o.code.add(a`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${e.hasCap?`
                if(prev.z > posLeft.z) {
                  vec2 diff = posLeft.xy - posRight.xy;
                  planeOrigin.xy += perpendicular(diff) / 2.0;
                }
              `:""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),o.uniforms.add(new f("pixelRatio",(n,t)=>t.camera.pixelRatio)),z(r),o.code.add(a`void main(void) {
if (uv0.y == 0.0) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
}
else {
float lineWidth = getLineWidth();
float screenMarkerSize = getScreenMarkerSize();
vec4 pos  = view * vec4(position.xyz, 1.0);
vec4 prev = view * vec4(auxpos1.xyz, 1.0);
clip(pos, prev);`),i?(e.hideOnShortSegments&&o.code.add(a`if (areWorldMarkersHidden(pos, prev)) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
return;
}`),o.code.add(a`pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
vec4 displacedPosScreen = projectAndScale(pos);`)):(o.code.add(a`vec4 posScreen = projectAndScale(pos);
vec4 prevScreen = projectAndScale(prev);
vec4 displacedPosScreen = posScreen;
displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);`),e.space===d.Screen&&o.code.add(a`vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));
vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);
pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
displacedPosScreen = projectAndScale(pos);`)),o.code.add(a`
        ${p?"depth = pos.z;":""}
        linearDepth = calculateLinearDepth(nearFar,pos.z);

        // Convert back into NDC
        displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

        // Convert texture coordinate into [0,1]
        vUV = (uv0 + 1.0) / 2.0;

        ${i?"":"vUV *= displacedPosScreen.w;"}

        ${e.hasTip?"vLineWidth = lineWidth;":""}

        vSize = screenMarkerSize;
        vColor = getColor();

        // Use camera space for slicing
        vpos = pos.xyz;

        gl_Position = displacedPosScreen;
      }
    }
  `),p&&r.include($,e),r.include(P,e),c.uniforms.add([new m("intrinsicColor",n=>n.color),new W("tex",n=>n.texture)]),c.include(D),r.constants.add("texelSize","float",1/v),c.code.add(a`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgba2float(texture2D(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),e.hasTip&&(r.constants.add("relativeMarkerSize","float",S/v),r.constants.add("relativeTipLineWidth","float",y),c.code.add(a`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${i?"halfTipLineWidth *= fwidth(samplePos.y);":""}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `)),r.constants.add("symbolAlphaCutoff","float",b),c.code.add(a`
  void main() {
    discardBySlice(vpos);
    ${p?"terrainDepthTest(gl_FragCoord, depth);":""}

    vec4 finalColor = intrinsicColor * vColor;

    ${i?"vec2 samplePos = vUV;":"vec2 samplePos = vUV * gl_FragCoord.w;"}

    ${e.hasTip?"finalColor.a *= max(markerAlpha(samplePos), tipAlpha(samplePos));":"finalColor.a *= markerAlpha(samplePos);"}

    if (finalColor.a < symbolAlphaCutoff) {
      discard;
    }

    ${e.output===s.Alpha?a`gl_FragColor = vec4(finalColor.a);`:""}
    ${e.output===s.Color?a`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===s.Color&&e.transparencyPassType===L.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${e.output===s.Highlight?a`gl_FragColor = vec4(1.0);`:""}
    ${e.output===s.Depth?a`outputDepth(linearDepth);`:""}
  }
  `),r}const Q=Object.freeze(Object.defineProperty({__proto__:null,build:F},Symbol.toStringTag,{value:"Module"}));export{F as C,Q as M};
