import{e as u,y as f,n as J,m as nt}from"./cast-fcb46737.js";import{g as lt}from"./Graphic-f0e54e86.js";import{d as ht}from"./HandleOwner-9b396af1.js";import{l as I}from"./reactiveUtils-4dabbb80.js";import{r as x,t as V}from"./typedArrayUtil-4d7bb04c.js";import"./ArrayPool-a8ee9378.js";import{u as S}from"./screenUtils-410d12c0.js";import{f as L,j as ct}from"./promiseUtils-1e54421e.js";import{E as w,b as C}from"./FramebufferObject-a3b9c52c.js";import{C as m,R as z,E as N,F as D,P as q,L as dt,G as mt,D as ut}from"./enums-64ab819c.js";import{E as pt}from"./Texture-243be4d7.js";import{t as _}from"./VertexElementDescriptor-2925c6af.js";import{a as W,F as j,D as B}from"./dataUtils-a534a9c7.js";import{o as ft,i as _t}from"./WGLContainer-8a3733a0.js";import{I as yt}from"./enums-4ca4641f.js";import"./geometry-b7901087.js";import{s as Y}from"./Error-ec6249b9.js";import{m as P}from"./mathUtils-b4bb77e2.js";import{w as gt,a as xt}from"./Extent-da876e26.js";import{l as vt,f as H,M as F,h as K,r as wt,b as Dt,i as At}from"./mat3-3fc68e72.js";import{e as Q}from"./mat3f32-d3d088e8.js";import{d as X}from"./DefaultVertexAttributeLayouts-2bcf3941.js";import"./string-a318751c.js";import{t as O}from"./vec2f32-461e65a9.js";import{g as St}from"./Utils-69cc114d.js";function bt(s){const t=tt(U(s)),e=t,a=!0,i=Math.max(t/2,5),r=Math.round(S(s.maxPathLength)/i)+1,o=10,{density:n}=s;return{smoothing:S(s.smoothing),interpolate:!0,velocityScale:s.flowRepresentation==="flow-from"?1:-1,verticesPerLine:r,minSpeedThreshold:.001,segmentLength:i,maxTurnAngle:1,collisions:a,lineCollisionWidth:e,lineSpacing:o,density:n}}function tt(s){return s.kind==="constant"?s.value[0]:s.values[s.values.length-1]}function Z(s){const t=s.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function $t(s){return{kind:"constant",value:[.1,.1,.1,1]}}function U(s){if(!s.hasVisualVariables("size"))return{kind:"constant",value:[S(s.trailWidth)]};const t=s.getVisualVariablesForType("size")[0],e=[],a=[];let i;if(t.stops){for(const r of t.stops)e.push(r.value),a.push(S(r.size));i=t.stops.length}else e.push(t.minDataValue,t.maxDataValue),a.push(S(t.minSize),S(t.maxSize)),i=2;return{kind:"ramp",stops:e,values:a,count:i}}function zt(s){if(!s.hasVisualVariables("color"))return{kind:"constant",value:Z(s.color)};const t=s.getVisualVariablesForType("color")[0],e=[],a=[];for(const i of t.stops)e.push(i.value),Array.prototype.push.apply(a,Z(i.color));return{kind:"ramp",stops:e,values:a,count:t.stops.length}}function Rt(s){if(!s.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const t=s.getVisualVariablesForType("opacity")[0],e=[],a=[];for(const i of t.stops)e.push(i.value),a.push(i.opacity);return{kind:"ramp",stops:e,values:a,count:t.stops.length}}function k(s,t,e,a){switch(t){case"int":s.setUniform1iv(e,a);break;case"float":s.setUniform1fv(e,a);break;case"vec2":s.setUniform2fv(e,a);break;case"vec3":s.setUniform3fv(e,a);break;case"vec4":s.setUniform4fv(e,a)}}function v(s,t,e,a){a.kind==="constant"?k(s,e,`u_${t}`,a.value):(k(s,"float",`u_${t}_stops`,a.stops),k(s,e,`u_${t}_values`,a.values),s.setUniform1i(`u_${t}_count`,a.count))}function Tt(s,t){let e=!0;return e=e&&s.collisions===t.collisions,e=e&&s.density===t.density,e=e&&s.interpolate===t.interpolate,e=e&&s.lineCollisionWidth===t.lineCollisionWidth,e=e&&s.lineSpacing===t.lineSpacing,e=e&&s.maxTurnAngle===t.maxTurnAngle,e=e&&s.minSpeedThreshold===t.minSpeedThreshold,e=e&&s.segmentLength===t.segmentLength,e=e&&s.smoothing===t.smoothing,e=e&&s.velocityScale===t.velocityScale,e=e&&s.verticesPerLine===t.verticesPerLine,e}function et(s,t){return s===t||!(!x(s)||!x(t))&&s.equals(t)}function at(s,t){if(!Tt(s.simulationSettings,t.simulationSettings)||!et(s.timeExtent,t.timeExtent))return!1;let e=!0;return e=e&&s.loadImagery===t.loadImagery,e=e&&s.createFlowMesh===t.createFlowMesh,e=e&&s.color.kind===t.color.kind,e=e&&s.opacity.kind===t.opacity.kind,e=e&&s.size.kind===t.size.kind,e}let Mt=class st{constructor(t){this._params=t,this.animated=!1}isCompatible(t){if(!(t instanceof st)||!et(this._params.timeExtent,t._params.timeExtent))return!1;let e=!0;return e=e&&this._params.loadImagery===t._params.loadImagery,e=e&&this._params.color.kind===t._params.color.kind,e=e&&this._params.opacity.kind===t._params.opacity.kind,e}async load(t,e){const{extent:a,size:i}=t;L(e);const r=await this._params.loadImagery(a,i[0],i[1],this._params.timeExtent,e);return new Ft(r,{color:this._params.color,opacity:this._params.opacity})}render(t,e,a){const{context:i}=t,{program:r}=a;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(z.ONE,z.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.bindTexture(a.texture,0),r.setUniform1i("u_texture",0),r.setUniform1f("u_Min",a.min),r.setUniform1f("u_Max",a.max),v(r,"color","vec4",this._params.color),v(r,"opacity","float",this._params.opacity),i.bindVAO(a.vertexArray),i.drawArrays(N.TRIANGLE_STRIP,0,4)}};const E=new Map;E.set("a_position",0),E.set("a_texcoord",1);const It={geometry:[new _("a_position",2,m.UNSIGNED_SHORT,0,8),new _("a_texcoord",2,m.UNSIGNED_SHORT,4,8)]},Ot={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:E};let Ft=class{constructor(t,e){this._flowData=t,this._values=e}attach(t){const{context:e}=t,{width:a,height:i}=this._flowData,r=w.createVertex(e,D.STATIC_DRAW,new Uint16Array([0,0,0,1,a,0,1,1,0,i,0,0,a,i,1,0])),o=new C(e,E,It,{geometry:r}),n=[];this._values.color.kind==="ramp"&&n.push("vvColor"),this._values.opacity.kind==="ramp"&&n.push("vvOpacity");const l=t.painter.materialManager.getProgram(Ot,n);let d=1e6,y=-1e6;for(let h=0;h<i;h++)for(let c=0;c<a;c++)if(this._flowData.mask[h*a+c]!==0){const R=this._flowData.data[2*(h*a+c)+0],T=this._flowData.data[2*(h*a+c)+1],M=Math.sqrt(R*R+T*T);d=Math.min(d,M),y=Math.max(y,M)}const g=new Uint8Array(4*a*i);for(let h=0;h<i;h++)for(let c=0;c<a;c++)if(this._flowData.mask[h*a+c]!==0){const R=this._flowData.data[2*(h*a+c)+0],T=this._flowData.data[2*(h*a+c)+1],M=(Math.sqrt(R*R+T*T)-d)/(y-d);g[4*(h*a+c)+0]=255*M,g[4*(h*a+c)+1]=0,g[4*(h*a+c)+2]=0,g[4*(h*a+c)+3]=255}else g[4*(h*a+c)+0]=0,g[4*(h*a+c)+1]=0,g[4*(h*a+c)+2]=0,g[4*(h*a+c)+3]=0;const ot=new pt(e,{pixelFormat:q.RGBA,internalFormat:q.RGBA,samplingMode:dt.LINEAR,dataType:mt.UNSIGNED_BYTE,wrapMode:ut.CLAMP_TO_EDGE,flipped:!0,width:a,height:i},g);this.vertexArray=o,this.program=l,this.texture=ot,this.min=d,this.max=y,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.isCompiled}},Vt=class it{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof it&&at(this._params,t._params)}async load(t,e){const{extent:a,size:i}=t;L(e);const r=await this._params.loadImagery(a,i[0],i[1],this._params.timeExtent,e),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,r,e);return new kt(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,a){const{context:i}=t,{program:r}=a;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(z.ONE,z.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniform1f("u_time",e.time),r.setUniform1f("u_trailLength",this._params.trailLength),r.setUniform1f("u_flowSpeed",this._params.flowSpeed),r.setUniform1f("u_featheringSize",this._params.featheringSize),r.setUniform1f("u_featheringOffset",this._params.featheringOffset),r.setUniform1f("u_introFade",this._params.introFade?1:0),r.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),r.setUniform1f("u_decayRate",this._params.decayRate),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),r.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),v(r,"color","vec4",this._params.color),v(r,"opacity","float",this._params.opacity),v(r,"size","float",this._params.size),i.bindVAO(a.vertexArray),i.drawElements(N.TRIANGLES,a.indexCount,m.UNSIGNED_INT,0)}};const b=new Map;b.set("a_xyts0",0),b.set("a_xyts1",1),b.set("a_typeIdDurationSeed",2),b.set("a_extrudeInfo",3);const Et={geometry:[new _("a_xyts0",4,m.FLOAT,0,64),new _("a_xyts1",4,m.FLOAT,16,64),new _("a_typeIdDurationSeed",4,m.FLOAT,32,64),new _("a_extrudeInfo",4,m.FLOAT,48,64)]},Ct={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:b};class kt{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){const{context:e}=t,a=w.createVertex(e,D.STATIC_DRAW,this._vertexData),i=w.createIndex(e,D.STATIC_DRAW,this._indexData),r=new C(e,b,Et,{geometry:a},i),o=[];this._values.color.kind==="ramp"&&o.push("vvColor"),this._values.opacity.kind==="ramp"&&o.push("vvOpacity"),this._values.size.kind==="ramp"&&o.push("vvSize");const n=t.painter.materialManager.getProgram(Ct,o);this.vertexArray=r,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.isCompiled}}let Pt=class rt{constructor(t){this._styles=t}get animated(){return this._styles.reduce((t,e)=>t||e.animated,!1)}isCompatible(t){if(!(t instanceof rt)||this._styles.length!==t._styles.length)return!1;const e=this._styles.length;for(let a=0;a<e;a++)if(!this._styles[a].isCompatible(t._styles[a]))return!1;return!0}async load(t,e){const a=await Promise.all(this._styles.map(i=>i.load(t,e)));return new Ut(a)}render(t,e,a){for(let i=0;i<this._styles.length;i++)this._styles[i].render(t,e,a.resources[i])}};class Ut{constructor(t){this.resources=t}attach(t){for(const e of this.resources)e.attach(t)}detach(){for(const t of this.resources)t.detach()}get ready(){return this.resources.reduce((t,e)=>t&&e.ready,!0)}}class G{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof G&&at(this._params,t._params)}async load(t,e){const{extent:a,size:i}=t;L(e);const r=await this._params.loadImagery(a,i[0],i[1],this._params.timeExtent,e),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,r,e);return new Gt(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,a){const{context:i}=t,{program:r}=a;i.setFaceCullingEnabled(!1),i.setBlendingEnabled(!0),i.setBlendFunction(z.ONE,z.ONE_MINUS_SRC_ALPHA),i.useProgram(r),r.setUniform1f("u_time",e.time),r.setUniform1f("u_trailLength",this._params.trailLength),r.setUniform1f("u_flowSpeed",this._params.flowSpeed),r.setUniform1f("u_featheringSize",this._params.featheringSize),r.setUniform1f("u_featheringOffset",this._params.featheringOffset),r.setUniform1f("u_introFade",this._params.introFade?1:0),r.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),r.setUniform1f("u_decayRate",this._params.decayRate),r.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),r.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),v(r,"color","vec4",this._params.color),v(r,"opacity","float",this._params.opacity),v(r,"size","float",this._params.size),i.bindVAO(a.vertexArray),i.drawElements(N.TRIANGLES,a.indexCount,m.UNSIGNED_INT,0)}}const $=new Map;$.set("a_positionAndSide",0),$.set("a_timeInfo",1),$.set("a_extrude",2),$.set("a_speed",3);const Lt={geometry:[new _("a_positionAndSide",3,m.FLOAT,0,36),new _("a_timeInfo",3,m.FLOAT,12,36),new _("a_extrude",2,m.FLOAT,24,36),new _("a_speed",1,m.FLOAT,32,36)]},Nt={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:$};let Gt=class{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){const{context:e}=t,a=w.createVertex(e,D.STATIC_DRAW,this._vertexData),i=w.createIndex(e,D.STATIC_DRAW,this._indexData),r=new C(e,$,Lt,{geometry:a},i),o=[];this._values.color.kind==="ramp"&&o.push("vvColor"),this._values.opacity.kind==="ramp"&&o.push("vvOpacity"),this._values.size.kind==="ramp"&&o.push("vvSize");const n=t.painter.materialManager.getProgram(Nt,o);this.vertexArray=r,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.isCompiled}};const qt=4,Wt=1,jt=.5,Bt=!0,Ht=!0,Zt=2.3;function Jt(s,t){const{flowSpeed:e,trailLength:a}=s,i=bt(s);let r=null;const o={opacity:Rt(s),size:U(s)};let n=zt(s);if(s.background==="none")o.color=n;else{n.kind==="constant"&&(n={kind:"ramp",stops:[0,1],values:[0,0,0,1,n.value[0],n.value[1],n.value[2],n.value[3]],count:2});const y={loadImagery:t.loadImagery,timeExtent:t.timeExtent,color:n,opacity:{kind:"constant",value:[1]}};r=new Mt(y),o.color=$t()}const l={loadImagery:t.loadImagery,createFlowMesh:t.createFlowMesh,simulationSettings:i,timeExtent:t.timeExtent,trailLength:a,flowSpeed:e,featheringSize:Wt,featheringOffset:jt,introFade:Bt,fadeToZero:Ht,decayRate:Zt,color:o.color,opacity:o.opacity,size:o.size},d=s.trailCap==="butt"||tt(U(s))<=qt?new G(l):new Vt(l);return x(r)?new Pt([r,d]):d}class Yt extends ft{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(t){super.doRender(t)}prepareRenderPasses(t){const e=t.registerRenderPass({name:"flow",brushes:[_t],target:()=>this.children,drawPhase:yt.MAP});return[...super.prepareRenderPasses(t),e]}}class Kt{constructor(t,e,a,i){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=a,this.pixelRatio=i}async load(){const t=new AbortController;this.state={name:"loading",abortController:t};const e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},a=await this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:a}}attach(t){if(this.state.name!=="loaded")return void Y.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const e=this.state.resources;e.attach(t),this.state={name:"attached",resources:e}}detach(){if(this.state.name==="loading")return this.state.abortController.abort(),void(this.state={name:"detached"});this.state.name==="attached"&&(this.state.resources.detach(),this.state={name:"detached"})}update(t){return this.flowStyle.isCompatible(t.flowStyle)?!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0):!1}}class Qt extends X{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){x(this._displayData)&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(t){const{displayData:e}=this;if(V(e))return;const a=e.extent.xmin,i=e.extent.ymax,r=[0,0];t.toScreen(r,[a,i]);const o=(e.extent.xmax-e.extent.xmin)/e.size[0]/t.resolution,n=P(t.rotation),{dvs:l}=this.transforms;vt(l,[-1,1,0]),H(l,l,[2/(t.size[0]*t.pixelRatio),-2/(t.size[1]*t.pixelRatio),1]),F(l,l,[r[0],r[1],0]),K(l,l,n),H(l,l,[o*t.pixelRatio,o*t.pixelRatio,1])}_createTransforms(){return{dvs:Q()}}}const Xt=1.15;let A=class extends nt{constructor(t){super(t),this._flowDisplayObject=new Qt,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return this._loading!=null}update(t){const{flowStyle:e}=this.flowContainer;if(V(e))return void this._clear();const{extent:a,rotation:i,resolution:r,pixelRatio:o}=t.state,n=ee(a,i);n.expand(Xt);const l=[Math.round((n.xmax-n.xmin)/r),Math.round((n.ymax-n.ymin)/r)],d=new Kt(e,n,l,o);if(x(this._loading)){if(this._loading.update(d))return;this._loading.detach(),this._loading=null}!V(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(d)||(d.load().then(()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null},y=>{ct(y)||(Y.getLogger(this.declaredClass).error("A resource failed to load.",y),this._loading=null)}),this._loading=d)}_clear(){this._flowDisplayObject.clear(),x(this._loading)&&(this._loading.detach(),this._loading=null)}};u([f()],A.prototype,"_loading",void 0),u([f()],A.prototype,"flowContainer",void 0),u([f()],A.prototype,"updating",null),A=u([J("esri.views.2d.engine.flow.FlowStrategy")],A);const te=A;function ee(s,t){const e=new gt({x:(s.xmax+s.xmin)/2,y:(s.ymax+s.ymin)/2,spatialReference:s.spatialReference}),a=s.xmax-s.xmin,i=s.ymax-s.ymin,r=Math.abs(Math.cos(P(t))),o=Math.abs(Math.sin(P(t))),n=r*a+o*i,l=o*a+r*i,d=new xt({xmin:e.x-n/2,ymin:e.y-l/2,xmax:e.x+n/2,ymax:e.y+l/2,spatialReference:s.spatialReference});return d.centerAt(e),d}let p=class extends ht{constructor(){super(...arguments),this._loadImagery=(s,t,e,a,i)=>W(this.layer,s,t,e,a,i),this._createFlowMesh=(s,t,e,a)=>this.layer.createFlowMesh({meshType:s,flowData:e,simulationSettings:t},{signal:a}),this.attached=!1,this.container=null,this.layer=null,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this._strategy||this._strategy.updating}attach(){const{layer:s}=this,t=()=>{this._loadImagery=(e,a,i,r,o)=>W(s,e,a,i,r,o),this._updateVisualization()};"multidimensionalDefinition"in s?this.handles.add(I(()=>s.multidimensionalDefinition,t)):this.handles.add([I(()=>s.mosaicRule,t),I(()=>s.renderingRule,t),I(()=>s.definitionExpression,t)]),this.container=new Yt,this._strategy=new te({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container.removeAllChildren(),this.container=null,this.handles.removeAll()}update(s){s.stationary?this._strategy.update(s):this.layerView.requestUpdate()}hitTest(s){return new lt({attributes:{},geometry:s.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const{renderer:s}=this.layer;if(s.type!=="flow")return;const t=Jt(s,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=t,this.layerView.requestUpdate()}};u([f()],p.prototype,"_strategy",void 0),u([f()],p.prototype,"attached",void 0),u([f()],p.prototype,"container",void 0),u([f()],p.prototype,"layer",void 0),u([f()],p.prototype,"layerView",void 0),u([f()],p.prototype,"type",void 0),u([f()],p.prototype,"updating",null),u([f()],p.prototype,"timeExtent",void 0),p=u([J("esri.views.2d.engine.flow.FlowView2D")],p);const Me=p;class Ie extends X{constructor(t=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.width=null,this.source=t}destroy(){var t,e;x(this.vaoData)&&((t=this.vaoData.magdir)==null||t.vao.dispose(),(e=this.vaoData.scalar)==null||e.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO())}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO()}invalidateVAO(){var t,e;!this._vaoInvalidated&&x(this.vaoData)&&((t=this.vaoData.magdir)==null||t.vao.dispose(),(e=this.vaoData.scalar)==null||e.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,x(this.source)&&V(this.vaoData)){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const a=j(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,a);this.vaoData={magdir:i}}break;case"simple_scalar":{const a=B(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,a);this.vaoData={scalar:i}}break;case"wind_speed":{const a=j(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,a),r=B(this.source,this.symbolizerParameters),o=this._createVectorFieldVAO(t.context,r);this.vaoData={magdir:i,scalar:o}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:Q()}}setTransform(t){const e=wt(this.transforms.dvs),[a,i]=t.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/t.resolution,o=r*this.width,n=r*this.height,l=Math.PI*this.rotation/180;F(e,e,O(a,i)),F(e,e,O(o/2,n/2)),K(e,e,-l),F(e,e,O(-o/2,-n/2)),Dt(e,e,O(o,n)),At(this.transforms.dvs,t.displayViewMat3,e)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(t,e){const{vertexData:a,indexData:i}=e,r=w.createVertex(t,D.STATIC_DRAW,new Float32Array(a)),o=w.createIndex(t,D.STATIC_DRAW,new Uint32Array(i)),n=St("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:m.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:m.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:m.FLOAT,normalized:!1}]});return{vao:new C(t,n.attributes,n.bufferLayouts,{geometry:r},o),elementCount:i.length}}}export{Me as d,Ie as y};
