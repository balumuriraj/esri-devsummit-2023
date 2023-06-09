import{e as m,a as d,l as u,h as y,aJ as h,R as b,hM as c}from"./calcite-c5ae4991.js";import g from"./FeatureLayerView2D-1385f402.js";import"./index-9a6385f7.js";import"./Container-c668494e.js";import"./DisplayObject-b5071d0a.js";import"./definitions-3ddd14a8.js";import"./enums-e2e92c86.js";import"./Texture-3d2bcec7.js";import"./LayerView2D-88fd32e8.js";import"./MapView-c3d00f71.js";import"./unitBezier-881ac1eb.js";import"./TileStrategy-6e83933b.js";import"./TileStore-bec0a021.js";import"./TileInfoView-c5645cd8.js";import"./ClipRect-c491bd72.js";import"./schemaUtils-0cd2ddb2.js";import"./enums-b1d611e3.js";import"./color-b3c5ad11.js";import"./enums-4b2a86a0.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-b10bd8f5.js";import"./utils-d084e5dc.js";import"./MaterialKey-1f5dd6e2.js";import"./alignmentUtils-ae955d28.js";import"./visualVariablesUtils-42287514.js";import"./cimAnalyzer-d4821ac0.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-94cb1131.js";import"./quantizationUtils-a15bd53f.js";import"./floatRGBA-2dd25736.js";import"./ExpandedCIM-e70c558e.js";import"./util-96b92fc2.js";import"./FeatureLayerView-14c791ed.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-bf43aa1c.js";import"./LayerView-d2d47806.js";import"./RefreshableLayerView-3999328b.js";function f(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let n=class extends g{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var l;const i=this.layer.sublayers.some(p=>p.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((l=this.tileRenderer)==null?void 0:l.updating),a=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${a}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),a}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>f(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=b(e)?e:new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};n=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const se=n;export{se as default};