import{W as e,ac as t,ad as i,af as o}from"./index-b4cf3b73.js";import{j as p}from"./FeatureLayerViewBase3D-22fe4d49.js";import{o as m}from"./OGCFeatureLayerView-497adf05.js";import"./FeatureLikeLayerView3D-c48be25b.js";import"./dehydratedFeatureComparison-dd286337.js";import"./queryForSymbologySnapping-006ad964.js";import"./elevationInfoUtils-795c904c.js";import"./hash-0ddfbf4b.js";import"./Graphics3DObjectStates-d950b2f4.js";import"./optimizedFeatureQueryEngineAdapter-9feeb8c0.js";import"./centroid-86b8ef29.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-855ad4b6.js";import"./QueryEngineResult-0ed25b0c.js";import"./WhereClause-c3db6fed.js";import"./executionError-fb3f283a.js";import"./utils-712dddbb.js";import"./generateRendererUtils-418ba299.js";import"./projectionSupport-62879cb5.js";import"./json-48e3ea08.js";import"./utils-a40a33db.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-c22bea60.js";import"./FeatureStore-eeff7998.js";import"./heatmapTextureUtils-49707d55.js";import"./projectExtentUtils-ed195c7d.js";import"./LayerView3D-63bb62b8.js";import"./EventedSet-9ed89cc1.js";import"./FeatureLayerView-8764f7c6.js";import"./popupUtils-35ef43a2.js";import"./LayerView-f81022d3.js";import"./RefreshableLayerView-afe3e85c.js";let r=class extends m(p){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new e("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};t([i()],r.prototype,"layer",void 0),r=t([o("esri.views.3d.layers.OGCFeatureLayerView3D")],r);const B=r;export{B as default};