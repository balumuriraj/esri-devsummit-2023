import{a as c}from"./View.glsl-3ce196d4.js";import{t as u,H as m,G as T}from"./VisualVariablePassParameters-d460182b.js";import{o as f}from"./FloatPassUniform-68d54f51.js";import{n as v}from"./ShaderBuilder-a7d0da4e.js";import{O as s}from"./VertexAttribute-9c5c630d.js";import{t as x}from"./typedArrayUtil-4d7bb04c.js";import{o as g}from"./sdfPrimitives-9858c36d.js";import{e as r}from"./cast-fcb46737.js";import{h}from"./Matrix3PassUniform-ad9f953b.js";import{e as i}from"./ShaderTechniqueConfiguration-9f5b4555.js";import{o as S}from"./TransparencyPassType-a11868d2.js";import{s as R}from"./DefaultTechniqueConfiguration-588e5ab2.js";var l,p;(function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"})(l||(l={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(p||(p={}));class a extends R{constructor(){super(...arguments),this.output=h.Color,this.transparencyPassType=S.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.space=l.Screen,this.hideOnShortSegments=!1,this.hasCap=!1,this.anchor=p.Center,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}r([i({count:h.COUNT})],a.prototype,"output",void 0),r([i({count:S.COUNT})],a.prototype,"transparencyPassType",void 0),r([i()],a.prototype,"occluder",void 0),r([i()],a.prototype,"hasSlicePlane",void 0),r([i()],a.prototype,"writeDepth",void 0),r([i({count:l.COUNT})],a.prototype,"space",void 0),r([i()],a.prototype,"hideOnShortSegments",void 0),r([i()],a.prototype,"hasCap",void 0),r([i({count:p.COUNT})],a.prototype,"anchor",void 0),r([i()],a.prototype,"hasTip",void 0),r([i()],a.prototype,"vvSize",void 0),r([i()],a.prototype,"vvColor",void 0),r([i()],a.prototype,"vvOpacity",void 0),r([i()],a.prototype,"hasOccludees",void 0),r([i()],a.prototype,"hasMultipassTerrain",void 0),r([i()],a.prototype,"cullAboveGround",void 0),r([i({constValue:!0})],a.prototype,"hasVvInstancing",void 0),r([i({constValue:!0})],a.prototype,"hasSliceTranslatedView",void 0);const O=8;function L(e,n){const t=e.vertex;t.uniforms.add(new f("intrinsicWidth",o=>o.width)),n.vvSize?(e.attributes.add(s.SIZEFEATUREATTRIBUTE,"float"),t.uniforms.add(new c("vvSizeMinSize",o=>o.vvSizeMinSize)),t.uniforms.add(new c("vvSizeMaxSize",o=>o.vvSizeMaxSize)),t.uniforms.add(new c("vvSizeOffset",o=>o.vvSizeOffset)),t.uniforms.add(new c("vvSizeFactor",o=>o.vvSizeFactor)),t.code.add(v`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(s.SIZE,"float"),t.code.add(v`float getSize(){
return intrinsicWidth * size;
}`)),n.vvOpacity?(e.attributes.add(s.OPACITYFEATUREATTRIBUTE,"float"),t.constants.add("vvOpacityNumber","int",8),t.uniforms.add([new u("vvOpacityValues",o=>o.vvOpacityValues,O),new u("vvOpacityOpacities",o=>o.vvOpacityOpacities,O)]),t.code.add(v`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):t.code.add(v`vec4 applyOpacity( vec4 color ){
return color;
}`),n.vvColor?(e.attributes.add(s.COLORFEATUREATTRIBUTE,"float"),t.constants.add("vvColorNumber","int",m),t.uniforms.add(new u("vvColorValues",o=>o.vvColorValues,m)),t.uniforms.add(new T("vvColorColors",o=>o.vvColorColors,m)),t.code.add(v`vec4 interpolateColor( float value ) {
if (value <= vvColorValues[0]) {
return vvColorColors[0];
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return mix(vvColorColors[i-1], vvColorColors[i], f);
}
}
return vvColorColors[vvColorNumber - 1];
}
vec4 getColor(){
return applyOpacity(interpolateColor(colorFeatureAttribute));
}`)):(e.attributes.add(s.COLOR,"vec4"),t.code.add(v`vec4 getColor(){
return applyOpacity(color);
}`))}const y=64,C=y/2,z=C/5,b=y/z,I=.25;function D(e,n){return e.fromData(`${n}-marker`,()=>g(n,y,C,z))}function B(e,n){const t=e.vertex;e.constants.add("markerSizePerLineWidth","float",b),t.uniforms.add(new f("pixelRatio",(o,d)=>d.camera.pixelRatio)),x(t.uniforms.get("markerScale"))&&t.constants.add("markerScale","float",1),t.code.add(v`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),n.space===l.World&&(t.constants.add("maxSegmentLengthFraction","float",.45),t.uniforms.add(new f("perRenderPixelRatio",(o,d)=>d.camera.perRenderPixelRatio)),t.code.add(v`float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}
bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}`))}export{a,L as b,I as e,D as f,B as i,b as m,C as o,l as p,p as s,y as t};
