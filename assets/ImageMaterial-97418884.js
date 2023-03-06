import{hG as m,hH as P,hI as y,ht as g,hJ as $,r as _,hK as O,hL as u,hM as S,hN as A,hO as x,hP as C,al as o,hQ as v,hR as E,hS as h,hT as w,ai as F,hU as b,R as T,ac as n,hV as l,hW as d,hX as N,hY as D,hZ as M,h_ as R,h$ as I,i0 as L,i1 as U,i2 as W,i3 as G,i4 as B,i5 as H,i6 as z,i7 as j,i8 as Q,i9 as V,ia as q,ib as J,am as c,ic as K,id as X,ie as Y,ig as Z}from"./index-738d935d.js";function k(a){const e=new m,{vertex:t,fragment:s}=e;return P(t,a),e.include(y,a),e.attributes.add(g.POSITION,"vec3"),e.attributes.add(g.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float"),t.uniforms.add(new $("textureCoordinateScaleFactor",r=>_(r.texture)&&_(r.texture.descriptor.textureCoordinateScaleFactor)?r.texture.descriptor.textureCoordinateScaleFactor:O)),t.code.add(u`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(S,a),e.include(A,a),s.uniforms.add([new x("tex",r=>r.texture),new C("opacity",r=>r.opacity)]),e.varyings.add("vTexCoord","vec2"),a.output===o.Alpha?s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${u.float(v)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(s.include(E),s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${u.float(v)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${a.transparencyPassType===h.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),e}const ee=Object.freeze(Object.defineProperty({__proto__:null,build:k},Symbol.toStringTag,{value:"Module"}));class p extends N{initializeProgram(e){return new D(e.rctx,p.shader.get().build(this.configuration),M)}_setPipelineState(e,t){const s=this.configuration,r=e===h.NONE,f=e===h.FrontFace;return R({blending:s.output!==o.Color&&s.output!==o.Alpha||!s.transparent?null:r?te:I(e),culling:L(s.cullFace),depthTest:{func:U(e)},depthWrite:r?s.writeDepth?W:null:G(e),colorWrite:B,stencilWrite:s.hasOccludees?H:null,stencilTest:s.hasOccludees?t?z:j:null,polygonOffset:r||f?null:Q(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}p.shader=new w(ee,()=>F(()=>import("./ImageMaterial.glsl-865eb58d.js"),["assets/ImageMaterial.glsl-865eb58d.js","assets/index-738d935d.js","assets/index-557f70a3.css"]));const te=b(T.ONE,T.ONE_MINUS_SRC_ALPHA);class i extends V{constructor(){super(...arguments),this.output=o.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=h.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}n([l({count:o.COUNT})],i.prototype,"output",void 0),n([l({count:d.COUNT})],i.prototype,"cullFace",void 0),n([l()],i.prototype,"hasSlicePlane",void 0),n([l()],i.prototype,"transparent",void 0),n([l()],i.prototype,"enableOffset",void 0),n([l()],i.prototype,"writeDepth",void 0),n([l()],i.prototype,"hasOccludees",void 0),n([l({count:h.COUNT})],i.prototype,"transparencyPassType",void 0),n([l()],i.prototype,"hasMultipassTerrain",void 0),n([l()],i.prototype,"cullAboveGround",void 0);class ie extends q{constructor(e){super(e,new se),this.supportsEdges=!0,this._configuration=new i}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<J,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return t===o.Color||t===o.Alpha||t===o.Highlight?e===c.DRAPED_MATERIAL?!0:t===o.Highlight?e===c.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?c.TRANSPARENT_MATERIAL:c.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:c.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new ae(e)}createBufferWriter(){return new K(X)}}class ae extends Y{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(p,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==o.Color&&this._output!==o.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class se extends Z{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{ie as c,k as f};
