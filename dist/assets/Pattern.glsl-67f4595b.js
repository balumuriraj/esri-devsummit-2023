import{b as g,t as h}from"./ForwardLinearDepth.glsl-56affafd.js";import{h as i}from"./Matrix3PassUniform-ad9f953b.js";import{u as w}from"./Slice.glsl-3b39b1f7.js";import{r as S}from"./Transform.glsl-6d2e2fd9.js";import{e as y}from"./VertexColor.glsl-8c022fa8.js";import{o as $}from"./OutputDepth.glsl-470c8e2a.js";import{a as C}from"./OutputHighlight.glsl-fbac199a.js";import{n as D}from"./MultipassTerrainTest.glsl-bb236672.js";import{t as T}from"./AlphaCutoff-96178e0d.js";import{e as P,o as R}from"./TransparencyPassType-a11868d2.js";import{v as b,c as j}from"./View.glsl-3ce196d4.js";import{e as V}from"./Float4PassUniform-d7bdbc81.js";import{o as p}from"./FloatPassUniform-68d54f51.js";import{o as z,n as o}from"./ShaderBuilder-a7d0da4e.js";import{O as v}from"./VertexAttribute-9c5c630d.js";var a;(function(e){e[e.Horizontal=0]="Horizontal",e[e.Vertical=1]="Vertical",e[e.Cross=2]="Cross",e[e.ForwardDiagonal=3]="ForwardDiagonal",e[e.BackwardDiagonal=4]="BackwardDiagonal",e[e.DiagonalCross=5]="DiagonalCross",e[e.COUNT=6]="COUNT"})(a||(a={}));const m=.70710678118,f=m,O=.08715574274;function N(e){const t=new z,n=e.hasMultipassTerrain&&(e.output===i.Color||e.output===i.Alpha);e.draped||t.extensions.add("GL_OES_standard_derivatives");const{vertex:r,fragment:l}=t;b(r,e),t.include(S,e),t.include(y,e),e.draped?r.uniforms.add(new p("worldToScreenRatio",(d,c)=>1/c.screenToPCSRatio)):t.attributes.add(v.BOUNDINGRECT,"mat3"),t.attributes.add(v.POSITION,"vec3"),t.attributes.add(v.UVMAPSPACE,"vec4"),t.varyings.add("vpos","vec3"),t.varyings.add("vuv","vec2"),n&&t.varyings.add("depth","float");const s=e.style===a.ForwardDiagonal||e.style===a.BackwardDiagonal||e.style===a.DiagonalCross;s&&r.code.add(o`
      const mat2 rotate45 = mat2(${o.float(m)}, ${o.float(-f)},
                                 ${o.float(f)}, ${o.float(m)});
    `),e.draped||(j(r,e),r.uniforms.add(new p("worldToScreenPerDistanceRatio",(d,c)=>1/c.camera.perScreenPixelRatio)),r.code.add(o`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),r.code.add(o`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),r.code.add(o`
      float boundingRectDistanceToCamera() {
        vec3 center = vec3(boundingRect[0][0], boundingRect[0][1], boundingRect[0][2]);
        vec3 halfU = vec3(boundingRect[1][0], boundingRect[1][1], boundingRect[1][2]);
        vec3 halfV = vec3(boundingRect[2][0], boundingRect[2][1], boundingRect[2][2]);
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${o.float(O)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),r.code.add(o`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${s?" * rotate45":""};
      vec2 uvCellOrigin = uvMapSpace.zw ${s?" * rotate45":""};

      ${e.draped?"":o`
            float distanceToCamera = boundingRectDistanceToCamera();
            float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;
          `}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${o.float(e.patternSpacing)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `);const u=e.output===i.Depth;return u&&(t.include($,e),g(t),h(t)),r.code.add(o`
    void main(void) {
      vuv = scaledUV();
      vpos = position;
      ${n?"depth = (view * vec4(vpos, 1.0)).z;":""}
      forwardNormalizedVertexColor();
      gl_Position = ${u?o`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:o`transformPosition(proj, view, vpos);`}
    }
  `),t.include(w,e),l.include(P),e.draped&&l.uniforms.add(new p("texelSize",(d,c)=>1/c.camera.pixelRatio)),e.output===i.Highlight&&t.include(C,e),n&&t.include(D,e),e.output!==i.Highlight&&(l.code.add(o`
      const float lineWidth = ${o.float(e.lineWidth)};
      const float spacing = ${o.float(e.patternSpacing)};
      const float spacingINV = ${o.float(1/e.patternSpacing)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),e.draped||l.code.add(o`const int maxSamples = 5;
float sample(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),l.uniforms.add(new V("uColor",d=>d.color)),l.code.add(o`
    void main() {
      discardBySlice(vpos);
      ${n?"terrainDepthTest(gl_FragCoord, depth);":""}
      vec4 color = ${e.hasVertexColors?"vColor * uColor;":"uColor;"}
      color = highlightSlice(color, vpos);

      ${e.output!==i.Highlight?o`color.a *= ${W(e)};`:""}

      if (color.a < ${o.float(T)}) {
        discard;
      }

      ${e.output===i.Alpha?o`gl_FragColor = vec4(color.a);`:""}

      ${e.output===i.Color?o`gl_FragColor = color; ${e.transparencyPassType===R.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
      ${e.output===i.Highlight?o`outputHighlight();`:""}
      ${e.output===i.Depth?o`outputDepth(linearDepth);`:""};
    }
  `),t}function W(e){function t(n){return e.draped?o`coverage(vuv.${n}, texelSize)`:o`sample(vuv.${n})`}switch(e.style){case a.ForwardDiagonal:case a.Horizontal:return t("y");case a.BackwardDiagonal:case a.Vertical:return t("x");case a.DiagonalCross:case a.Cross:return o`
        1.0 - (1.0 - ${t("x")}) * (1.0 - ${t("y")})
      `;default:return"0.0"}}const K=Object.freeze(Object.defineProperty({__proto__:null,build:N},Symbol.toStringTag,{value:"Module"}));export{K as T,a,N as x};
