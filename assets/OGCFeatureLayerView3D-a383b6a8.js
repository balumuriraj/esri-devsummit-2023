import{W as e,ac as t,ad as i,af as o}from"./index-738d935d.js";import{j as p}from"./FeatureLayerViewBase3D-7f72c504.js";import{o as m}from"./OGCFeatureLayerView-67cb867e.js";import"./FeatureLikeLayerView3D-117b6659.js";import"./dehydratedFeatureComparison-4f346faa.js";import"./queryForSymbologySnapping-b15e9074.js";import"./elevationInfoUtils-72729690.js";import"./hash-0ddfbf4b.js";import"./Graphics3DObjectStates-b839ed8f.js";import"./optimizedFeatureQueryEngineAdapter-4dc0036f.js";import"./centroid-f5daa837.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-b565a77e.js";import"./QueryEngineResult-2c28eebf.js";import"./WhereClause-f6ddfb88.js";import"./executionError-fb3f283a.js";import"./utils-ebf21391.js";import"./generateRendererUtils-bf5214e6.js";import"./projectionSupport-d70ac199.js";import"./json-48e3ea08.js";import"./utils-61f08010.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-d6519503.js";import"./FeatureStore-42c9ec6f.js";import"./heatmapTextureUtils-fcd30222.js";import"./projectExtentUtils-4e8d4f69.js";import"./LayerView3D-da1b015a.js";import"./EventedSet-9dd36680.js";import"./FeatureLayerView-c926a694.js";import"./popupUtils-d91ea519.js";import"./LayerView-1b945bf7.js";import"./RefreshableLayerView-23b69a26.js";let r=class extends m(p){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new e("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};t([i()],r.prototype,"layer",void 0),r=t([o("esri.views.3d.layers.OGCFeatureLayerView3D")],r);const B=r;export{B as default};
