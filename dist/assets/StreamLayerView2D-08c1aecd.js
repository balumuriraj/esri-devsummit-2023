import{e,y as n,n as h}from"./cast-fcb46737.js";import{a as s}from"./Error-ec6249b9.js";import{t as a,r as l}from"./typedArrayUtil-4d7bb04c.js";import{l as c}from"./reactiveUtils-4dabbb80.js";import"./ArrayPool-a8ee9378.js";import f from"./FeatureSet-d32b0eb8.js";import v from"./FeatureLayerView2D-9ae7c9fa.js";import{e as O}from"./util-4239daf3.js";import"./string-a318751c.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-1e54421e.js";import"./geometry-b7901087.js";import"./Extent-da876e26.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-ff2d7c6b.js";import"./typeUtils-35750739.js";import"./jsonMap-7b8332c9.js";import"./Graphic-f0e54e86.js";import"./PopupTemplate-40f3c9aa.js";import"./Clonable-545593ce.js";import"./Collection-910b6f71.js";import"./Evented-a45c8b0f.js";import"./SimpleObservable-23231131.js";import"./fieldUtils-7f54c4b1.js";import"./preload-helper-3bce6601.js";import"./arcadeOnDemand-281a01eb.js";import"./enumeration-3a03bd31.js";import"./number-27cf8195.js";import"./locale-30120714.js";import"./Identifiable-bfe1ff30.js";import"./symbols-f8232671.js";import"./CIMSymbol-539bd447.js";import"./Symbol-f93ed9fd.js";import"./Color-fb64d77d.js";import"./colorUtils-639f4d25.js";import"./mathUtils-b4bb77e2.js";import"./vec3-e93e648f.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-1f7f5126.js";import"./symbolLayerUtils3D-76acc268.js";import"./aaBoundingBox-657a9b82.js";import"./aaBoundingRect-193543b5.js";import"./request-6fc81c4c.js";import"./persistableUrlUtils-5f719c3b.js";import"./Symbol3DAnchorPosition2D-5726d999.js";import"./collectionUtils-803d9ba8.js";import"./Portal-2bb189b3.js";import"./Loadable-268c900a.js";import"./Promise-376ab9f6.js";import"./PortalGroup-8e41557a.js";import"./PortalUser-659cc1d2.js";import"./jsonUtils-229211af.js";import"./Field-61ec9870.js";import"./fieldType-f31285f7.js";import"./utils-317368cb.js";import"./mat3f32-d3d088e8.js";import"./parser-498c8be0.js";import"./mat4f32-77b3d8ac.js";import"./mat4-44a0988f.js";import"./DefaultVertexAttributeLayouts-2bcf3941.js";import"./mat3-3fc68e72.js";import"./TileKey-5aef17b6.js";import"./vec2f64-30dc1443.js";import"./context-util-a4ce3a7b.js";import"./enums-64ab819c.js";import"./Texture-243be4d7.js";import"./VertexElementDescriptor-2925c6af.js";import"./enums-4ca4641f.js";import"./MaterialKey-0093a242.js";import"./alignmentUtils-ae955d28.js";import"./Utils-69cc114d.js";import"./number-954e4ab6.js";import"./enums-2658a65c.js";import"./heatmapUtils-aaea3f32.js";import"./vec4f64-e407da96.js";import"./FeatureReductionLayer-d69dae71.js";import"./BlendLayer-20d0571b.js";import"./TimeExtent-23e282b9.js";import"./Query-b96bcde0.js";import"./UniqueValueRenderer-08f8851c.js";import"./LegendOptions-010d0873.js";import"./diffUtils-68b89c71.js";import"./colorRamps-9dac42c1.js";import"./sizeVariableUtils-d4870b0d.js";import"./compilerUtils-18d58939.js";import"./lengthUtils-fa751420.js";import"./unitUtils-45d1147c.js";import"./jsonUtils-0ff4ff96.js";import"./styleUtils-22b14a8b.js";import"./jsonUtils-f5674613.js";import"./DictionaryLoader-1cbfea53.js";import"./LRUCache-64ec42ee.js";import"./MemCache-18a255ed.js";import"./deprecate-035b199e.js";import"./OperationalLayer-97084f13.js";import"./ElevationInfo-215614d8.js";import"./labelingInfo-607e66b8.js";import"./labelUtils-3108e8d7.js";import"./defaultsJSON-59981e75.js";import"./LayerView2D-2775dd38.js";import"./index-a864af46.js";import"./Cyclical-151bcc41.js";import"./CollectionFlattener-8f4d518b.js";import"./workers-6e30d081.js";import"./Connection-9a1cf8da.js";import"./Queue-b7d3cd48.js";import"./assets-8d3e737a.js";import"./intl-65a3e389.js";import"./messages-2289086c.js";import"./projection-290b739f.js";import"./zscale-89472cba.js";import"./TileInfo-b0eb8c90.js";import"./widget-fb292a2f.js";import"./uuid-73213768.js";import"./HandleOwner-9b396af1.js";import"./byteSizeEstimations-f0cab514.js";import"./executeQueryJSON-2fe748db.js";import"./normalizeUtils-27e29a72.js";import"./query-694f7287.js";import"./pbfQueryUtils-4adda2cc.js";import"./pbf-0e99a620.js";import"./OptimizedFeature-4ab8d380.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-1481fa99.js";import"./RelationshipQuery-0dda77ad.js";import"./utils-6786b611.js";import"./asyncUtils-437defc4.js";import"./ItemCache-fd3aceaf.js";import"./featureConversionUtils-03a03f40.js";import"./TopFeaturesQuery-cad97c37.js";import"./FeatureLayer-041050b6.js";import"./MultiOriginJSONSupport-aae3bc0c.js";import"./LayerFloorInfo-54b916a2.js";import"./FeatureLayerBase-ad5cfa1a.js";import"./HeightModelInfo-5d01231e.js";import"./arcgisLayerUrl-c09f09b4.js";import"./Layer-5ffe0eda.js";import"./editsZScale-6a661299.js";import"./APIKeyMixin-a0a8917a.js";import"./ArcGISService-21dc1d06.js";import"./CustomParametersMixin-47aab0a6.js";import"./EditBusLayer-e750b15b.js";import"./OrderedLayer-af7a6030.js";import"./PortalLayer-b2643f87.js";import"./PortalItem-bb7e98a6.js";import"./RefreshableLayer-7f154951.js";import"./ScaleRangeLayer-4be07229.js";import"./TemporalLayer-61549309.js";import"./TimeInfo-1d30dc7c.js";import"./FeatureTemplate-c1d0bb70.js";import"./FeatureType-34d71ade.js";import"./fieldProperties-e2eeb1d5.js";import"./FieldsIndex-f104cc5f.js";import"./versionUtils-fd91f55f.js";import"./styleUtils-a989c0af.js";import"./popupUtils-86dc6b94.js";import"./mat2d-2bbb5feb.js";import"./Scheduler-540208b6.js";import"./Basemap-af7f62f8.js";import"./loadAll-b5bfa7ab.js";import"./writeUtils-e686bd33.js";import"./layerUtils-f4d08f94.js";import"./TablesMixin-bc97d131.js";import"./GraphicsCollection-c37a9ffd.js";import"./ViewingMode-5d7d590b.js";import"./enums-0fc02184.js";import"./vec2-528adfe4.js";import"./vec2f32-461e65a9.js";import"./TileStrategy-a90cd1af.js";import"./TileStore-00ac650f.js";import"./rbush-8e36784a.js";import"./quickselect-322ec8e1.js";import"./capabilities-302cf20d.js";import"./BoundsStore-b9fa27cc.js";import"./PooledRBush-3e149119.js";import"./mat3f64-c6305894.js";import"./sphere-2af0d852.js";import"./mat4f64-1e28eae0.js";import"./quatf64-7fd38d64.js";import"./lineSegment-10422ca0.js";import"./plane-b575face.js";import"./scaleUtils-93ad8d0c.js";import"./ElevationSamplerData-b87e0e50.js";import"./PhysicallyBasedRendering.glsl-d457fff5.js";import"./View.glsl-3ce196d4.js";import"./ShaderBuilder-a7d0da4e.js";import"./FloatPassUniform-68d54f51.js";import"./Float4PassUniform-d7bdbc81.js";import"./RgbaFloatEncoding.glsl-52af7fcf.js";import"./Texture2DPassUniform-753de459.js";import"./vec3f32-c9aa289f.js";import"./VertexAttribute-9c5c630d.js";import"./Texture2DDrawUniform-053796dc.js";import"./basicInterfaces-19ed850e.js";import"./PiUtils.glsl-db6418ee.js";import"./ReadLinearDepth.glsl-9c87a54a.js";import"./WaterSurface.glsl-c64cb8f1.js";import"./ForwardLinearDepth.glsl-56affafd.js";import"./Matrix3PassUniform-ad9f953b.js";import"./Slice.glsl-3b39b1f7.js";import"./Transform.glsl-6d2e2fd9.js";import"./OutputHighlight.glsl-fbac199a.js";import"./MultipassTerrainTest.glsl-bb236672.js";import"./NormalUtils.glsl-c12729bf.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-a11868d2.js";import"./EvaluateSceneLighting.glsl-189abc15.js";import"./VisualVariablePassParameters-d460182b.js";import"./FramebufferObject-a3b9c52c.js";import"./Util-a48361c6.js";import"./SSAOBlur.glsl-8bf33b65.js";import"./ScreenSpacePass-d5e48a9b.js";import"./SSAO.glsl-980b3771.js";import"./ShaderTechniqueConfiguration-9f5b4555.js";import"./HUD.glsl-d3a072ad.js";import"./VerticalOffset.glsl-87cbb2e3.js";import"./objectResourceUtils-d556a033.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-903d1848.js";import"./vec33-e98769e8.js";import"./DefaultMaterial_COLOR_GAMMA-fe26fda8.js";import"./types-e1c0a5bf.js";import"./Version-2946cc03.js";import"./quat-3d5eec2d.js";import"./Texture-46c8c2cb.js";import"./TextureOnly.glsl-1ec9a9ef.js";import"./InterleavedLayout-984d67b2.js";import"./MixExternalColor.glsl-ab0706f7.js";import"./symbolColorUtils-b2b55883.js";import"./ObjectAndLayerIdColor.glsl-ad468647.js";import"./OutputDepth.glsl-470c8e2a.js";import"./VisualVariables.glsl-2b937327.js";import"./DiscardOrAdjustAlphaBlend.glsl-73258f38.js";import"./Normals.glsl-76f97814.js";import"./DefaultMaterial.glsl-885671b3.js";import"./VertexColor.glsl-8c022fa8.js";import"./DefaultTechniqueConfiguration-588e5ab2.js";import"./RealisticTree.glsl-b6cc03f2.js";import"./edgeProcessing-f733ce76.js";import"./deduplicate-03981d62.js";import"./projection-a69d43d0.js";import"./Octree-0a267ea2.js";import"./HUDMaterial.glsl-32cf019c.js";import"./sdfPrimitives-9858c36d.js";import"./floatRGBA-9ad35d39.js";import"./dehydratedFeatures-0557137d.js";import"./quantizationUtils-4dd81f85.js";import"./labelFormatUtils-d25d1d9e.js";import"./I3SUtil-f31a4571.js";import"./I3SBinaryReader-f4829435.js";import"./LineCallout.glsl-358ef89b.js";import"./earcut-58237617.js";import"./SnappingCandidate-970faec6.js";import"./MeshComponent-a43522cc.js";import"./MarkerSizing.glsl-566261cc.js";import"./RibbonLine.glsl-0f7c2bbc.js";import"./LineStipple.glsl-ed22a88b.js";import"./callExpressionWithFeature-55effb7b.js";import"./LineMarker.glsl-8166d610.js";import"./NativeLine.glsl-742e9e29.js";import"./Path.glsl-9f6bab44.js";import"./ColorMaterial.glsl-3a70e4a7.js";import"./Pattern.glsl-67f4595b.js";import"./LercDecoder-4c9b29b3.js";import"./config-1337d16e.js";import"./workerHelper-e756ac3a.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./portalItemUtils-2ccd793f.js";import"./schemaUtils-9c08f5e8.js";import"./visualVariablesUtils-ecd70012.js";import"./createSymbolSchema-36503ad8.js";import"./cimAnalyzer-38842966.js";import"./BidiEngine-836b7ef6.js";import"./Rect-ea14f53a.js";import"./GeometryUtils-eebff0a0.js";import"./ExpandedCIM-b7ed8ce5.js";import"./rendererUtils-0bcb63a1.js";import"./FeatureLayerView-e9178bab.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-af06d391.js";import"./LayerView-bd9a2316.js";import"./RefreshableLayerView-7c1c2c75.js";function d(t,r){if(a(t)&&a(r))return null;const i={};return l(r)&&(i.geometry=r.toJSON()),l(t)&&(i.where=t),i}let p=class extends v{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([c(()=>{var t;return(t=this.layer)==null?void 0:t.purgeOptions},()=>this._update()),c(()=>this.suspended,t=>{t?this._proxy.pauseStream():this._proxy.resumeStream()})])}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(t,r){t==="data-received"&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const i=super.on(t,r),o=this;return{remove(){i.remove(),t==="data-received"&&(o._proxy.closed||o.hasEventListener("data-received")||o._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(t,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(t),r).then(i=>{const o=f.fromJSON(i);return o.features.forEach(m=>{m.layer=this.layer,m.sourceLayer=this.layer}),o})}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:t=>{this.set(t.propertyName,t.value)}}}_createTileRendererHash(t){const r=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(d(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(t)+r}async _createServiceOptions(){const t=this.layer,{objectIdField:r}=t,i=t.fields.map(u=>u.toJSON()),o=O(t.geometryType),m=t.timeInfo&&t.timeInfo.toJSON()||null,y=t.spatialReference?t.spatialReference.toJSON():null;return{type:"stream",fields:i,geometryType:o,objectIdField:r,timeInfo:m,source:this.layer.parsedUrl,serviceFilter:d(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:y,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:t.customParameters}}};e([n()],p.prototype,"errorString",void 0),e([n({readOnly:!0})],p.prototype,"connectionError",null),e([n()],p.prototype,"connectionStatus",void 0),p=e([h("esri.views.2d.layers.StreamLayerView2D")],p);const Pp=p;export{Pp as default};
