import{ak as Me,ac as r,ad as l,af as ue,ah as ge,a0 as pe,n as y,iz as De,fS as ye,a3 as O,aT as A,a1 as L,v as p,kL as K,ax as he,dw as Te,r as x,mn as we,my as xe,mz as Ge,hG as Re,hH as je,hP as Y,ht as f,hL as Z,mB as J,hT as Ne,ai as Ie,hV as ee,hS as me,hX as He,hY as ke,hZ as Be,h_ as Ue,kt as We,h$ as Fe,I as Qe,i2 as qe,i4 as Xe,d as Ke,i9 as Ye,kA as Ze,kB as Je,al as et,am as tt,kD as it,ig as st,jl as te,k as ie,ma as se,jv as Ee,m9 as nt,iL as ne,dd as $,ir as at,mD as T,p0 as k,na as B,nI as rt,jD as _e,mF as ae,mG as ot,c0 as lt,fK as dt,mL as ct,mH as ht,mI as ut,mN as gt,nn as be,bh as pt,mT as ze,n8 as ve,c_ as mt}from"./index-51930907.js";import{t as _t,e as V,M as vt,y as yt,b as wt,v as bt,i as G,u as Lt,s as ft,a as Pt,f as re,d as St}from"./analysisThemeUtils-535d8cf0.js";import{c as Ot,a as At,n as Et,g as U,b as zt}from"./LineVisualElement-0fb6f749.js";import{r as W,g as oe,m as Le,f as D,b as F,y as le,j as Ct,M as de,w as $t,v as ce,I as fe}from"./Segment-dc74be5b.js";import{geodesicLength as Vt}from"./geometryEngine-aa479c6a.js";import{S as Mt}from"./RightAngleQuadVisualElement-70c6775c.js";const Ce="esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController",Dt=Me.getLogger(Ce),Tt=1e5;let E=class extends ge{constructor(e){super(e),this._unitNormalizer=new _t,this._handles=new pe,this._tempStartPosition=y(),this._tempEndPosition=y(),this._tempCornerPosition=y()}initialize(){const e=this.view.spatialReference,t=De(e),i=t===xe?Ge:t;this._sphericalPCPF=i;const s=ye(e,i);this._unitNormalizer.spatialReference=s?i:e,this._handles.add([O(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:n,startPoint:a})=>{n.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(a)},A),O(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:n,endPoint:a})=>{n.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(a)},A),O(()=>({result:this._computedResult,viewData:this.viewData}),({result:n,viewData:a})=>{a.result=n},A)])}destroy(){this._handles=L(this._handles)}_applyProjectionAndElevationAlignment(e){if(p(e))return e;const{spatialReference:t,elevationProvider:i}=this.view,s=Ot(e,t,i);return p(s)?(At(this.analysis,e.spatialReference,Dt),null):s}get _computedResult(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,measurementMode:i}=this.viewData;if(p(e)||p(t))return null;const s=this._euclideanDistances(e,t),n=this._geodesicDistance(e,t,s.horizontal.value),a=i===V.Geodesic||i===V.Auto&&s.horizontal.value>Tt?"geodesic":"euclidean";return{mode:a,distance:a==="euclidean"?s.direct:n,directDistance:s.direct,horizontalDistance:s.horizontal,verticalDistance:s.vertical,geodesicDistance:n}}_euclideanDistances(e,t){const i=e.clone();i.z=t.z;const s=this._tempStartPosition,n=this._tempEndPosition,a=this._tempCornerPosition,d=this.view.spatialReference,c=this._sphericalPCPF,o=ye(d,c)?c:d;K(e,s,o),K(t,n,o),K(i,a,o);const h=he(s,n),u=he(a,n),m=Math.abs(t.z-e.z),b=j=>this._unitNormalizer.normalizeDistance(j),w=b(h),z=b(u),R=b(m);return{direct:W(w,"meters"),horizontal:W(z,"meters"),vertical:W(R,"meters")}}_geodesicDistance(e,t,i){const s=e.spatialReference,n=new Te({spatialReference:s});n.addPath([e,t]);const a=s.isGeographic&&vt(s)?yt([n],"meters")[0]:s.isWebMercator?Vt(n,"meters"):null,d=x(a)?a:this._fallbackGeodesicDistance(e,t,i);return W(d,"meters")}_fallbackGeodesicDistance(e,t,i){if(we(e,Pe)&&we(t,Se)){const s=new bt;return wt(s,Pe,Se),s.distance}return i}};r([l()],E.prototype,"view",void 0),r([l()],E.prototype,"analysis",void 0),r([l()],E.prototype,"viewData",void 0),r([l()],E.prototype,"_computedResult",null),E=r([ue(Ce)],E);const Pe=y(),Se=y();var v,S;(function(e){e[e.None=0]="None",e[e.Direct=1]="Direct",e[e.Triangle=2]="Triangle",e[e.ProjectedGeodesic=3]="ProjectedGeodesic"})(v||(v={})),function(e){e[e.Auto=0]="Auto",e[e.AboveSegment=1]="AboveSegment",e[e.BelowSegment=2]="BelowSegment"}(S||(S={}));function xt(e){const t=new Re,{vertex:i,fragment:s}=t;je(i,e),i.uniforms.add(new Y("width",a=>a.width)),t.attributes.add(f.POSITION,"vec3"),t.attributes.add(f.NORMAL,"vec3"),t.attributes.add(f.UV0,"vec2"),t.attributes.add(f.AUXPOS1,"float"),t.varyings.add("vtc","vec2"),t.varyings.add("vlength","float"),t.varyings.add("vradius","float"),i.code.add(Z`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),s.uniforms.add([new Y("outlineSize",a=>a.outlineSize),new J("outlineColor",a=>a.outlineColor),new Y("stripeLength",a=>a.stripeLength),new J("stripeEvenColor",a=>a.stripeEvenColor),new J("stripeOddColor",a=>a.stripeOddColor)]);const n=1/Math.sqrt(2);return s.code.add(Z`
    const float INV_SQRT2 = ${Z.float(n)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      gl_FragColor = color;
    }
  `),t}const Gt=Object.freeze(Object.defineProperty({__proto__:null,build:xt},Symbol.toStringTag,{value:"Module"}));class q extends He{constructor(t,i,s){super(t,i,s)}initializeProgram(t){return new ke(t.rctx,q.shader.get().build(this.configuration),Be)}_setPipelineState(t){const i=t===me.NONE,s=this.configuration;return Ue({blending:s.transparent?i?We:Fe(t):null,polygonOffset:this.configuration.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:Qe.LESS},depthWrite:qe,colorWrite:Xe})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return Ke.TRIANGLE_STRIP}}q.shader=new Ne(Gt,()=>Ie(()=>import("./MeasurementArrow.glsl-d60d10d4.js"),["assets/MeasurementArrow.glsl-d60d10d4.js","assets/index-51930907.js","assets/index-cf6fcb4b.css","assets/analysisThemeUtils-535d8cf0.js","assets/Segment-dc74be5b.js","assets/LineVisualElement-0fb6f749.js","assets/elevationInfoUtils-5a8f681c.js","assets/geometryEngine-aa479c6a.js","assets/geometryEngineBase-e1a33b0a.js","assets/hydrated-343069df.js","assets/RightAngleQuadVisualElement-70c6775c.js","assets/VisualElementResources-bec0225b.js"]));let Q=class extends Ye{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=me.NONE}};r([ee()],Q.prototype,"polygonOffsetEnabled",void 0),r([ee()],Q.prototype,"transparent",void 0),r([ee({count:me.COUNT})],Q.prototype,"transparencyPassType",void 0);class Rt extends Je{constructor(t){super(t,new Nt),this._configuration=new Q}getConfiguration(t,i){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this.parameters.stripeEvenColor[3]<1||this.parameters.stripeOddColor[3]<1||this.parameters.outlineColor[3]<1,this._configuration.transparencyPassType=i.transparencyPassType,this._configuration}dispose(){}intersect(){}requiresSlot(t,i){return i===et.Color&&t===tt.OPAQUE_MATERIAL}createGLMaterial(t){return new jt(t)}createBufferWriter(){return new Ft}}let jt=class extends it{beginSlot(t){return this.ensureTechnique(q,t)}};class Nt extends st{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=te(1,.5,0,1),this.stripeEvenColor=te(1,1,1,1),this.stripeOddColor=te(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const It=Ze().vec3f(f.POSITION).vec3f(f.NORMAL).vec2f(f.UV0).f32(f.AUXPOS1),Ht=y(),kt=y(),Bt=y(),Ut=y(),Wt=y();class Ft{constructor(){this.vertexBufferLayout=It}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){return 2*(t.indices.get(f.POSITION).length/2+1)}write(t,i,s,n,a){const d=s.vertexAttributes.get(f.POSITION).data,c=s.vertexAttributes.get(f.NORMAL).data,o=d.length/3,h=s&&s.indices&&s.indices.get(f.POSITION);h&&h.length!==2*(o-1)&&console.warn("MeasurementArrowMaterial does not support indices");const u=Ht,m=kt,b=Bt,w=Ut,z=Wt,R=n.position,j=n.normal,N=n.uv0;let I=0;for(let P=0;P<o;++P){const X=3*P;if(ie(u,d[X],d[X+1],d[X+2]),P<o-1){const C=3*(P+1);ie(m,d[C],d[C+1],d[C+2]),ie(z,c[C],c[C+1],c[C+2]),se(z,z),Ee(b,m,u),se(b,b),nt(w,z,b),se(w,w)}const Ve=he(u,m);t&&i&&(ne(u,u,t),ne(m,m,t),ne(w,w,i));const M=a+2*P,H=M+1;R.setVec(M,u),R.setVec(H,u),j.setVec(M,w),j.setVec(H,w),N.set(M,0,I),N.set(M,1,-1),N.set(H,0,I),N.set(H,1,1),P<o-1&&(I+=Ve)}const $e=n.auxpos1;for(let P=0;P<2*o;++P)$e.set(a+P,I)}}let Qt=class extends Et{constructor(t){super(t),this._parameters={arrowWidth:16,arrowOutlineColor:$.toUnitRGBA(G()),arrowStripeEvenColor:$.toUnitRGBA(Lt()),arrowStripeOddColor:$.toUnitRGBA(G()),arrowSubdivisions:128},this._origin=y(),this._originTransform=at(),this._arrowCenter=y(),this._renderOccluded=T.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._opacity=1,this.applyProps(t)}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:t}))}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(t){this._stripeLength=t,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(t){if(this._stripesEnabled=t,this.attached){const i=this.opacity,{arrowStripeEvenColor:s,arrowStripeOddColor:n}=this._parameters,a=k(Oe,this._stripesEnabled?s:n,i);this._arrowMaterial.setParameters({stripeEvenColor:a})}}get opacity(){return this._opacity}set opacity(t){t!==this._opacity&&(this._opacity=t,this._updateArrowOpacity())}createExternalResources(){const{arrowStripeEvenColor:t,arrowStripeOddColor:i,arrowOutlineColor:s}=this._parameters,n=this._stripesEnabled?t:i;this._arrowMaterial=new Rt({outlineColor:s,stripeEvenColor:n,stripeOddColor:i,renderOccluded:this.renderOccluded,polygonOffset:!0}),this._handles=new pe,this._handles.add(O(()=>this.view.state.camera,()=>{this._viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles=L(this._handles)}forEachExternalMaterial(t){t(this._arrowMaterial)}createGeometries(t){if(p(this._geometry)||p(this._geometry.startRenderSpace)||p(this._geometry.endRenderSpace))return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);i.transformation=this._originTransform,t.addGeometry(i),this._viewChanged()}_createArrowGeometry(t,i,s,n){const a=this.view.renderCoordsHelper,d=[],c=[],o=(h,u)=>{const m=B.get();Ee(m,h,s),d.push(m),c.push(u)};if(n.type==="euclidean"){n.eval(.5,this._arrowCenter);const h=B.get();a.worldUpAtPosition(this._arrowCenter,h),o(t,h),o(i,h)}else{n.eval(.5,this._arrowCenter);const h=this._parameters.arrowSubdivisions+1&-2;for(let u=0;u<h;++u){const m=u/(h-1),b=B.get(),w=B.get();n.eval(m,b),a.worldUpAtPosition(b,w),o(b,w)}}return rt(this._arrowMaterial,d,c)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&x(this._geometry)){const t=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._parameters.arrowWidth*t})}}_updateArrowOpacity(){const t=this.opacity,{arrowStripeEvenColor:i,arrowStripeOddColor:s,arrowOutlineColor:n}=this._parameters,a=k(Oe,this._stripesEnabled?i:s,t),d=k(qt,n,t),c=k(Xt,s,t);this._arrowMaterial.setParameters({stripeEvenColor:a,outlineColor:d,stripeOddColor:c})}};const Oe=_e(),qt=_e(),Xt=_e();let _=class extends ge{get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView;if(p(e)||p(t)||e.equals(t))return v.None;const i=this.analysisView.result;if(p(i))return v.Direct;if(i.mode==="geodesic")return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?v.ProjectedGeodesic:v.Direct;const{verticalDistance:s,horizontalDistance:n}=i,a=s.value,d=n.value;return Math.min(a/d,d/a)<this.triangleCollapseRatioThreshold?v.Direct:v.Triangle}get actualVisualizedMeasurement(){if(p(this.analysisView.result))switch(this.analysisView.measurementMode){case V.Auto:case V.Euclidean:default:return"euclidean";case V.Geodesic:return"geodesic"}return this.analysisView.result.mode}get allowVisualElementsOrientationChange(){return p(this._triangleOrientationOverride)}set allowVisualElementsOrientationChange(e){p(this._triangleOrientationOverride)!==e&&(p(this._triangleOrientationOverride)?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){const e=this.actualVisualizedMeasurement==="geodesic";return{direct:this._segmentLabel,horizontal:e?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}constructor(e){super(e),this._params={triangleColor:$.toUnitRGBA(G(.75)),triangleLineWidth:3,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:$.toUnitRGBA(G(.75)),guideLineWidth:2,guideStippleLengthPixels:6,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},this._handles=new pe,this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=y(),this._endPosition=y(),this._cornerPosition=y(),this._startPositionAtSeaLevel=y(),this._endPositionAtSeaLevel=y(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=S.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const e=this._params,t={attached:!0,view:this.view};this._segmentVisualElement=new Qt({...t,geometry:null,renderOccluded:T.OccludeAndTransparent}),this._triangleVisualElement=new U({...t,width:e.triangleLineWidth,color:e.triangleColor,renderOccluded:T.OccludeAndTransparent}),this._rightAngleQuad=new Mt({...t,color:$.toUnitRGBA(G(.75)),renderOccluded:T.OccludeAndTransparent});const i={...t,polygonOffset:!0,renderOccluded:T.OccludeAndTransparent};this._projectedGeodesicLine=new U({...i,width:e.geodesicProjectionLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:ae(e.guideStippleLengthPixels)}),this._geodesicStartHint=new U({...i,width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:ae(e.guideStippleLengthPixels)}),this._geodesicEndHint=new U({...i,width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:ae(e.guideStippleLengthPixels)});const s={...t,backgroundColor:ft(.6),textColor:Pt()};this._segmentLabel=new oe({...s,fontSize:e.direcLabelFontSize}),this._verticalLabel=new oe({...s,fontSize:e.verticalLabelFontSize}),this._horizontalLabel=new oe({...s,fontSize:e.horizontalLabelFontSize}),this._handles.add([O(()=>{const{elevationAlignedStartPoint:n,elevationAlignedEndPoint:a}=this.analysisView,d=this.view;return{view:d,camera:d.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:n,elevationAlignedEndPoint:a,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},n=>this._updateGeometryAndViewMode(n),A),O(()=>({visible:this.visible,viewMode:this.viewMode}),n=>this._updateVisualElementVisibility(n),A),O(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),n=>this._updateLabelText(n),A),O(()=>({visible:this.visible,viewMode:this.viewMode}),n=>this._updateLabelVisibility(n),A),O(()=>this._measurementArrowStripeLength,n=>this._updateSegmentStripeLength(n),A),ot(async()=>this._updateMessageBundle())]),this._updateMessageBundle()}destroy(){this._handles=L(this._handles),this._segmentVisualElement=L(this._segmentVisualElement),this._triangleVisualElement=L(this._triangleVisualElement),this._rightAngleQuad=L(this._rightAngleQuad),this._projectedGeodesicLine=L(this._projectedGeodesicLine),this._geodesicStartHint=L(this._geodesicStartHint),this._geodesicEndHint=L(this._geodesicEndHint),this._segmentLabel=L(this._segmentLabel),this._verticalLabel=L(this._verticalLabel),this._horizontalLabel=L(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:e,viewMode:t}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,e)switch(t){case v.None:break;case v.Direct:this._segmentVisualElement.visible=!0;break;case v.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case v.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:e,camera:t,viewMode:i,elevationAlignedStartPoint:s,elevationAlignedEndPoint:n,orientation:a,visualizedMeasurement:d,stripeLength:c}){const o=e.renderCoordsHelper;if(p(o)||p(s)||p(n)||s.equals(n))return;let h=this._startPosition,u=this._endPosition;o.toRenderCoords(s,h),o.toRenderCoords(n,u);const m=a===S.AboveSegment?1:-1,b=m*(o.getAltitude(u)-o.getAltitude(h));b<0&&(h=this._endPosition,u=this._startPosition);const w=d==="geodesic"?new Le(this._startPosition,this._endPosition,o.spatialReference):new D(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=w,this._updateSegmentStripeLength(c),i){case v.Direct:this._updateSegment(w,a);break;case v.Triangle:this._updateSegmentAndTriangle({view:e,camera:t,segment:w,orientation:a,startPosition:h,endPosition:u,deltaSign:m,altitudeDelta:b});break;case v.ProjectedGeodesic:this._updateSegmentAndProjection({view:e,orientation:a,startPosition:h,endPosition:u})}}_updateSegment(e,t){this._segmentLabel.anchor=t===S.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:e},camera:t,segment:i,orientation:s,startPosition:n,endPosition:a,deltaSign:d,altitudeDelta:c}){const o=this._cornerPosition;e.worldUpAtPosition(n,o),lt(o,o,d*Math.abs(c)),dt(o,o,n),this._triangleVisualElement.geometry=[[[n[0],n[1],n[2]],[o[0],o[1],o[2]],[a[0],a[1],a[2]]]],this._rightAngleQuad.geometry={previous:n,center:o,next:a};const h=new D(n,o),u=new D(o,a),m=Kt(n,a,o,s,t);this._segmentLabel.anchor=m.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:h,sampleLocation:"center"},this._verticalLabel.anchor=m.vertical,this._horizontalLabel.geometry={type:"segment",segment:u,sampleLocation:"center"},this._horizontalLabel.anchor=m.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:e},orientation:t,startPosition:i,endPosition:s}){e.setAltitude(this._startPositionAtSeaLevel,0,i),e.setAltitude(this._endPositionAtSeaLevel,0,s);const n=new Le(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,e.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(n),this._geodesicStartHint.setGeometryFromSegment(new D(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new D(this._endPositionAtSeaLevel,s)),this._segmentLabel.geometry={type:"segment",segment:n,sampleLocation:"center"},this._segmentLabel.anchor=t===S.AboveSegment?"top":"bottom"}_updateLabelText({text:e,visualizedMeasurement:t}){x(e)?(this._segmentLabel.text=t==="euclidean"?e.euclideanDistance:e.geodesicDistance,this._horizontalLabel.text=e.horizontalDistance,this._verticalLabel.text=e.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:e,viewMode:t}){const i=this._segmentLabel,s=this._horizontalLabel,n=this._verticalLabel;if(i.visible=!1,s.visible=!1,n.visible=!1,e)switch(t){case v.Direct:i.visible=!0;break;case v.Triangle:i.visible=!0,s.visible=!0,n.visible=!0;break;case v.ProjectedGeodesic:i.visible=!0;case v.None:}}get _labelsText(){if(this.destroyed)return null;const e=this.messages,t=this.analysisView.result;if(p(t)||p(e))return null;const{directDistance:i,horizontalDistance:s,verticalDistance:n,geodesicDistance:a}=t,d=this.analysisView.unit,c=o=>({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:"",...o});switch(d){case"metric":return c({euclideanDistance:i&&de(e,i),geodesicDistance:a&&de(e,a),horizontalDistance:s&&de(e,s),verticalDistance:n&&$t(e,n)});case"imperial":return c({euclideanDistance:i&&le(e,i),geodesicDistance:a&&le(e,a),horizontalDistance:s&&le(e,s),verticalDistance:n&&Ct(e,n)});default:return c({euclideanDistance:i&&F(e,i,d),geodesicDistance:a&&F(e,a,d),horizontalDistance:s&&F(e,s,d),verticalDistance:n&&F(e,n,d)})}}_updateSegmentStripeLength(e){const t=this._segmentVisualElement;x(e)?(t.stripeLength=e,t.stripesEnabled=!0):t.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(x(this._triangleOrientationOverride))return this._triangleOrientationOverride;const e=this.visualElementOrientation;return e===S.Auto?this.view.state.camera.aboveGround?S.AboveSegment:S.BelowSegment:e}_requiresGeodesicGuideAt(e){const t=this.view;if(!(t!=null&&t.state))return!1;const i=t.state.camera,s=t.renderCoordsHelper,n=i.computeScreenPixelSizeAt(e);return s.getAltitude(e)/n>=10}get _measurementArrowStripeLength(){const{result:e,unit:t}=this.analysisView;if(p(e))return null;let i=null;const s=e.directDistance;switch(t){case"metric":i=s&&ce(s,"meters");break;case"imperial":i=s&&ce(s,ct(s.value,s.unit));break;default:i=s&&ce(s,t)}return p(i)?null:ht(i.value/30)*ut(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,gt("esri/core/t9n/Units").then(e=>{this.messages=e}).finally(()=>{this.loadingMessages=!1})}get testData(){var e;return{labels:this.labels,stripeLength:(e=this._segmentVisualElement)==null?void 0:e.stripeLength}}};function Kt(e,t,i,s,n){const a=Yt,d=Zt;n.projectToRenderScreen(i,a),n.projectToRenderScreen(t,d);const c={segment:"bottom",horizontal:"top",vertical:a[0]<d[0]?"left":"right"};{const o=Jt,h=ei;if(re(e,i,o,n),re(e,t,h,n),be(o,h)>=Ae){const u=Math.sign(o[1])===Math.sign(h[1]);c.segment=u?fe(c.vertical):c.vertical}else{const u=ti;re(i,t,u,n),be(u,h)>=Ae&&(c.segment=Math.sign(u[0])===Math.sign(h[0])?fe(c.horizontal):c.horizontal)}}if(s===S.BelowSegment){const o=h=>h==="top"?"bottom":"top";c.segment=o(c.segment),c.horizontal=o(c.horizontal),c.vertical=o(c.vertical)}return c}r([l()],_.prototype,"_triangleOrientationOverride",void 0),r([l()],_.prototype,"messages",void 0),r([l()],_.prototype,"view",void 0),r([l()],_.prototype,"analysis",void 0),r([l()],_.prototype,"analysisView",void 0),r([l()],_.prototype,"loadingMessages",void 0),r([l()],_.prototype,"visible",null),r([l()],_.prototype,"viewMode",null),r([l()],_.prototype,"actualVisualizedMeasurement",null),r([l()],_.prototype,"visualElementOrientation",void 0),r([l()],_.prototype,"triangleCollapseRatioThreshold",void 0),r([l()],_.prototype,"allowVisualElementsOrientationChange",null),r([l()],_.prototype,"labels",null),r([l()],_.prototype,"_labelsText",null),r([l()],_.prototype,"_actualVisualElementsOrientation",null),r([l()],_.prototype,"_measurementArrowStripeLength",null),_=r([ue("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],_);const Ae=Math.cos(pt(12)),Yt=ze(),Zt=ze(),Jt=ve(),ei=ve(),ti=ve();let g=class extends zt(ge){constructor(e){super(e),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=V.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const e=this.view,t=this.analysis;this._analysisVisualization=new _({view:e,analysis:t,analysisView:this}),this._analysisController=new E({view:e,analysis:t,viewData:this})}destroy(){this._analysisController=L(this._analysisController),this._analysisVisualization=L(this._analysisVisualization)}get updating(){var e;return!!((e=this._analysisVisualization)!=null&&e.loadingMessages)}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(e){this._analysisVisualization.visualElementOrientation=e}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(e){this._analysisVisualization.allowVisualElementsOrientationChange=e}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(e){this._analysisVisualization.triangleCollapseRatioThreshold=e}get directLabelText(){var e;return((e=this._analysisVisualization.labels.direct)==null?void 0:e.text)??""}get horizontalLabelText(){var e;return((e=this._analysisVisualization.labels.horizontal)==null?void 0:e.text)??""}get verticalLabelText(){var e;return((e=this._analysisVisualization.labels.vertical)==null?void 0:e.text)??""}get unit(){return mt(this.analysis.unit,this._defaultUnit)}get testData(){var e;return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:{...(e=this._analysisVisualization)==null?void 0:e.testData,visualization:this._analysisVisualization,controller:this._analysisController}}};r([l()],g.prototype,"updating",null),r([l({readOnly:!0})],g.prototype,"type",void 0),r([l({constructOnly:!0,nonNullable:!0})],g.prototype,"analysis",void 0),r([l()],g.prototype,"result",void 0),r([l()],g.prototype,"measurementMode",void 0),r([l()],g.prototype,"elevationAlignedStartPoint",void 0),r([l()],g.prototype,"elevationAlignedEndPoint",void 0),r([l({readOnly:!0})],g.prototype,"viewMode",null),r([l({readOnly:!0})],g.prototype,"actualVisualizedMeasurement",null),r([l()],g.prototype,"visualElementOrientation",null),r([l()],g.prototype,"allowVisualElementsOrientationChange",null),r([l()],g.prototype,"triangleCollapseRatioThreshold",null),r([l({readOnly:!0})],g.prototype,"directLabelText",null),r([l({readOnly:!0})],g.prototype,"horizontalLabelText",null),r([l({readOnly:!0})],g.prototype,"verticalLabelText",null),r([l()],g.prototype,"_analysisVisualization",void 0),r([l()],g.prototype,"_analysisController",void 0),r([l()],g.prototype,"unit",null),r([l(St)],g.prototype,"_defaultUnit",void 0),g=r([ue("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],g);const ii=g,ui=Object.freeze(Object.defineProperty({__proto__:null,default:ii},Symbol.toStringTag,{value:"Module"}));export{ui as D,xt as n};
