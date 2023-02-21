import{i as P}from"./typedArrayUtil-4d7bb04c.js";import{t as T,n as E}from"./ForwardLinearDepth.glsl-56affafd.js";import{h as d}from"./Matrix3PassUniform-ad9f953b.js";import{u as O}from"./Slice.glsl-3b39b1f7.js";import{d as F}from"./ObjectAndLayerIdColor.glsl-ad468647.js";import{b as W,i as j,p as z}from"./MarkerSizing.glsl-566261cc.js";import{o as $}from"./OutputDepth.glsl-470c8e2a.js";import{a as N,g as V}from"./LineStipple.glsl-ed22a88b.js";import{n as I}from"./MultipassTerrainTest.glsl-bb236672.js";import{t as U}from"./PiUtils.glsl-db6418ee.js";import{t as D}from"./AlphaCutoff-96178e0d.js";import{o as x,e as _}from"./TransparencyPassType-a11868d2.js";import{v as R,e as M}from"./View.glsl-3ce196d4.js";import{e as k}from"./Texture2DPassUniform-753de459.js";import{e as S}from"./Float4PassUniform-d7bdbc81.js";import{o as v}from"./FloatPassUniform-68d54f51.js";import{o as J,n as t}from"./ShaderBuilder-a7d0da4e.js";import{O as m}from"./VertexAttribute-9c5c630d.js";import{e as i}from"./cast-fcb46737.js";import{e as o}from"./ShaderTechniqueConfiguration-9f5b4555.js";import{s as B}from"./DefaultTechniqueConfiguration-588e5ab2.js";var f;(function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"})(f||(f={}));class n extends B{constructor(){super(...arguments),this.output=d.Color,this.capType=f.BUTT,this.transparencyPassType=x.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.wireframe=!1,this.objectAndLayerIdColorInstanced=!1}}i([o({count:d.COUNT})],n.prototype,"output",void 0),i([o({count:f.COUNT})],n.prototype,"capType",void 0),i([o({count:x.COUNT})],n.prototype,"transparencyPassType",void 0),i([o()],n.prototype,"occluder",void 0),i([o()],n.prototype,"hasSlicePlane",void 0),i([o()],n.prototype,"hasPolygonOffset",void 0),i([o()],n.prototype,"writeDepth",void 0),i([o()],n.prototype,"draped",void 0),i([o()],n.prototype,"stippleEnabled",void 0),i([o()],n.prototype,"stippleOffColorEnabled",void 0),i([o()],n.prototype,"stippleScaleWithLineWidth",void 0),i([o()],n.prototype,"stipplePreferContinuous",void 0),i([o()],n.prototype,"roundJoins",void 0),i([o()],n.prototype,"applyMarkerOffset",void 0),i([o()],n.prototype,"vvSize",void 0),i([o()],n.prototype,"vvColor",void 0),i([o()],n.prototype,"vvOpacity",void 0),i([o()],n.prototype,"falloffEnabled",void 0),i([o()],n.prototype,"innerColorEnabled",void 0),i([o()],n.prototype,"hasOccludees",void 0),i([o()],n.prototype,"hasMultipassTerrain",void 0),i([o()],n.prototype,"cullAboveGround",void 0),i([o()],n.prototype,"wireframe",void 0),i([o({constValue:!0})],n.prototype,"stippleRequiresClamp",void 0),i([o({constValue:!0})],n.prototype,"stippleRequiresStretchMeasure",void 0),i([o({constValue:!0})],n.prototype,"hasVvInstancing",void 0),i([o({constValue:!0})],n.prototype,"hasSliceTranslatedView",void 0),i([o()],n.prototype,"objectAndLayerIdColorInstanced",void 0);const y=1;function H(e){const r=new J,{vertex:a,fragment:p}=r,h=e.hasMultipassTerrain&&(e.output===d.Color||e.output===d.Alpha);r.include(U),r.include(W,e),r.include(N,e);const L=e.applyMarkerOffset&&!e.draped;L&&(a.uniforms.add(new v("markerScale",s=>s.markerScale)),r.include(j,{space:z.World})),e.output===d.Depth&&r.include($,e),r.include(F,e),R(a,e),a.uniforms.add([new M("inverseProjectionMatrix",(s,l)=>l.camera.inverseProjectionMatrix),new k("nearFar",(s,l)=>l.camera.nearFar),new v("miterLimit",s=>s.join!=="miter"?0:s.miterLimit),new S("viewport",(s,l)=>l.camera.fullViewport)]),a.constants.add("LARGE_HALF_FLOAT","float",65500),r.attributes.add(m.POSITION,"vec3"),r.attributes.add(m.SUBDIVISIONFACTOR,"float"),r.attributes.add(m.UV0,"vec2"),r.attributes.add(m.AUXPOS1,"vec3"),r.attributes.add(m.AUXPOS2,"vec3"),r.varyings.add("vColor","vec4"),r.varyings.add("vpos","vec3"),T(r),h&&r.varyings.add("depth","float");const c=e.capType===f.ROUND,b=e.stippleEnabled&&e.stippleScaleWithLineWidth||c;b&&r.varyings.add("vLineWidth","float");const C=e.stippleEnabled&&e.stippleScaleWithLineWidth;C&&r.varyings.add("vLineSizeInv","float");const g=e.innerColorEnabled||c;g&&r.varyings.add("vLineDistance","float");const w=e.stippleEnabled&&c,u=e.falloffEnabled||w;u&&r.varyings.add("vLineDistanceNorm","float"),c&&(r.varyings.add("vSegmentSDF","float"),r.varyings.add("vReverseSegmentSDF","float")),a.code.add(t`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),a.code.add(t`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),E(r),a.code.add(t`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${h?"depth = pos.z;":""}
      linearDepth = calculateLinearDepth(nearFar,pos.z);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),a.uniforms.add(new v("pixelRatio",(s,l)=>l.camera.pixelRatio)),a.code.add(t`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${b?t`vLineWidth = lineWidth;`:""}
      ${C?t`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);
  `),L&&a.code.add(t`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),a.code.add(t`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(e.stippleEnabled||c)&&a.code.add(t`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${c?t`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),a.code.add(t`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),e.roundJoins?a.code.add(t`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${e.stippleEnabled?t`min(1.0, subdivisionFactor * ${t.float((y+2)/(y+1))})`:t`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):a.code.add(t`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const A=e.capType!==f.BUTT;return a.code.add(t`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${A?t`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),a.code.add(t`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${u||g?t`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${g?t`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${u?t`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),c&&a.code.add(t`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),e.stippleEnabled&&(e.draped?a.uniforms.add(new v("worldToScreenRatio",(s,l)=>1/l.screenToPCSRatio)):a.code.add(t`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),a.code.add(t`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),e.draped?a.code.add(t`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):a.code.add(t`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),a.uniforms.add(new v("stipplePatternPixelSize",s=>V(s))),a.code.add(t`
      float patternLength = ${e.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `)),a.code.add(t`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${e.wireframe&&!e.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }
  }
  `),h&&r.include(I,e),r.include(O,e),p.include(_),p.code.add(t`
  void main() {
    discardBySlice(vpos);
    ${h?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),e.wireframe?p.code.add(t`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(c&&p.code.add(t`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${t.float(D)}) {
        discard;
      }
    `),w?p.code.add(t`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${t.float(D)}, stippleCoverage);
      `):p.code.add(t`float stippleAlpha = getStippleAlpha();`),p.uniforms.add(new S("intrinsicColor",s=>s.color)),p.code.add(t`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);
vec4 color = intrinsicColor * vColor;`),e.innerColorEnabled&&(p.uniforms.add(new S("innerColor",s=>P(s.innerColor,s.color))),p.uniforms.add(new v("innerWidth",(s,l)=>s.innerWidth*l.camera.pixelRatio)),p.code.add(t`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),p.code.add(t`vec4 finalColor = blendStipple(color, stippleAlpha);`),e.falloffEnabled&&(p.uniforms.add(new v("falloff",s=>s.falloff)),p.code.add(t`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))),p.code.add(t`
    if (finalColor.a < ${t.float(D)}) {
      discard;
    }

    ${e.output===d.Alpha?t`gl_FragColor = vec4(finalColor.a);`:""}
    ${e.output===d.Color?t`gl_FragColor = highlightSlice(finalColor, vpos);`:""}
    ${e.output===d.Color&&e.transparencyPassType===x.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    ${e.output===d.Highlight?t`gl_FragColor = vec4(1.0);`:""}
    ${e.output===d.Depth?t`outputDepth(linearDepth);`:""}
    ${e.output===d.ObjectAndLayerIdColor?t`outputObjectAndLayerIdColor();`:""}
  }
  `),r}const me=Object.freeze(Object.defineProperty({__proto__:null,NUM_ROUND_JOIN_SUBDIVISIONS:y,build:H},Symbol.toStringTag,{value:"Module"}));export{me as A,H as R,y as j,f as r,n as s};
