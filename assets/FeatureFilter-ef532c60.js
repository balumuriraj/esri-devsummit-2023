import{p as m,a1 as p,Q as _,g1 as u,hD as c,$ as y}from"./calcite-c5ae4991.js";import{v as f,n as w}from"./timeSupport-bf0170ce.js";import{J as I}from"./utils-d27f2aa1.js";import{p as b}from"./FeatureStore2D-5f2b7425.js";import{_ as g}from"./index-9a6385f7.js";import"./projectionSupport-c2c1f4b7.js";import"./json-48e3ea08.js";import"./CircularArray-9dd7c217.js";import"./TileStore-bec0a021.js";import"./TileInfoView-c5645cd8.js";import"./ComputedAttributeStorage-fb7b7196.js";import"./arcadeTimeUtils-96d04d57.js";import"./executionError-fb3f283a.js";import"./centroid-b9acbfa6.js";import"./definitions-3ddd14a8.js";import"./visualVariablesUtils-7d174a95.js";import"./color-b3c5ad11.js";import"./enums-4b2a86a0.js";import"./enums-b1d611e3.js";import"./enums-e2e92c86.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-b10bd8f5.js";import"./visualVariablesUtils-42287514.js";const d=m.getLogger("esri.views.2d.layers.features.support.whereUtils"),T={getAttribute:(r,e)=>r.field(e)};async function v(r,e){const t=await g(()=>import("./WhereClause-19168e5f.js").then(i=>i.W),["assets/WhereClause-19168e5f.js","assets/calcite-c5ae4991.js","assets/index-9a6385f7.js","assets/index-5026a37a.css","assets/calcite-96fa36fd.css","assets/executionError-fb3f283a.js"]);try{const i=t.WhereClause.create(r,e);if(!i.isStandardized){const s=new p("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);d.error(s)}return s=>{const h=s.readArcadeFeature();return i.testFeature(h,T)}}catch{return d.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),s=>!0}}const a=1,E=2;class C{constructor(e){this._geometryBounds=_(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,a)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach((h,o)=>{const l=!!(this._idToVisibility.get(o)&a),n=s.has(o);!l&&n?t.push(o):l&&!n&&i.push(o),this._idToVisibility.set(o,n?a|E:0)}),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:h}=this;return u.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:h})}async update(e,t){this._hash=JSON.stringify(e);const i=await I(e,null,t);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await v(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=await f(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);c(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=w(this._serviceInfo.timeInfo,e.timeExtent,b);else{const t=new p("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!!y(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,i)=>{t&a||(this._idToVisibility.set(i,a),e.push(i))}),e}}export{C as default};
