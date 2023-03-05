import{ac as i,ad as p,af as s,k3 as m,cQ as l,W as o,r as n,fS as y}from"./index-b4cf3b73.js";import{j as c}from"./FeatureLayerViewBase3D-22fe4d49.js";import"./FeatureLikeLayerView3D-c48be25b.js";import"./dehydratedFeatureComparison-dd286337.js";import"./queryForSymbologySnapping-006ad964.js";import"./elevationInfoUtils-795c904c.js";import"./hash-0ddfbf4b.js";import"./Graphics3DObjectStates-d950b2f4.js";import"./optimizedFeatureQueryEngineAdapter-9feeb8c0.js";import"./centroid-86b8ef29.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-855ad4b6.js";import"./QueryEngineResult-0ed25b0c.js";import"./WhereClause-c3db6fed.js";import"./executionError-fb3f283a.js";import"./utils-712dddbb.js";import"./generateRendererUtils-418ba299.js";import"./projectionSupport-62879cb5.js";import"./json-48e3ea08.js";import"./utils-a40a33db.js";import"./QueryEngineCapabilities-42e44ded.js";import"./timeSupport-c22bea60.js";import"./FeatureStore-eeff7998.js";import"./heatmapTextureUtils-49707d55.js";import"./projectExtentUtils-ed195c7d.js";import"./LayerView3D-63bb62b8.js";import"./EventedSet-9ed89cc1.js";import"./FeatureLayerView-8764f7c6.js";import"./popupUtils-35ef43a2.js";import"./LayerView-f81022d3.js";import"./RefreshableLayerView-afe3e85c.js";let t=class extends c{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=m()}initialize(){var a;const{layer:e,view:r}=this;(a=l(e))!=null&&a.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new o("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e}))),n(e.infoFor3D)&&(this.direct3DObjectFeatureLayerDisplayEnabled?this._set("suspendResumeExtentMode","computed"):this.addResolvingPromise(Promise.reject(new o("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${e.geometryType}`)))),e.geometryType!=="mesh"||y(e.spatialReference,r.spatialReference)||this.addResolvingPromise(Promise.reject(new o("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){var e,r;return(r=(e=this.view.featureTiles)==null?void 0:e.tilingScheme)==null?void 0:r.spatialReference}};i([p({constructOnly:!0})],t.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),i([p()],t.prototype,"layer",void 0),t=i([s("esri.views.3d.layers.FeatureLayerView3D")],t);const C=t;export{C as default};