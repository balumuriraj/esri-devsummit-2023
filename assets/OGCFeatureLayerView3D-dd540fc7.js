import{W as e,ac as t,ad as i,af as o}from"./index-51930907.js";import{j as p}from"./FeatureLayerViewBase3D-28b5f015.js";import{o as m}from"./OGCFeatureLayerView-9886b103.js";import"./FeatureLikeLayerView3D-2041f299.js";import"./dehydratedFeatureComparison-db69a4fb.js";import"./queryForSymbologySnapping-e718fa2a.js";import"./elevationInfoUtils-5a8f681c.js";import"./hash-0ddfbf4b.js";import"./Graphics3DObjectStates-f17fb3b9.js";import"./optimizedFeatureQueryEngineAdapter-a67931c5.js";import"./centroid-c62179b0.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-e7f31776.js";import"./QueryEngineResult-2dd0323b.js";import"./WhereClause-cdddccc4.js";import"./executionError-fb3f283a.js";import"./utils-15a7108f.js";import"./generateRendererUtils-e2b7324f.js";import"./projectionSupport-2f167231.js";import"./json-48e3ea08.js";import"./utils-7734a0d6.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-d318046f.js";import"./FeatureStore-198512e7.js";import"./heatmapTextureUtils-e2b3289a.js";import"./projectExtentUtils-55c9b2c9.js";import"./LayerView3D-68bdf258.js";import"./EventedSet-c786378a.js";import"./FeatureLayerView-0d0f168b.js";import"./popupUtils-0740bfd4.js";import"./LayerView-db7ff94b.js";import"./RefreshableLayerView-8ec9084b.js";let r=class extends m(p){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new e("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};t([i()],r.prototype,"layer",void 0),r=t([o("esri.views.3d.layers.OGCFeatureLayerView3D")],r);const B=r;export{B as default};
