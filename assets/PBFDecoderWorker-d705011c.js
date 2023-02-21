import{n as u}from"./compilerUtils-18d58939.js";import{t as m}from"./typedArrayUtil-4d7bb04c.js";import{k as d}from"./cast-fcb46737.js";import{k as c}from"./Extent-da876e26.js";import{o as f}from"./zscale-89472cba.js";import{N as y,j as _}from"./dehydratedFeatures-0557137d.js";import{p as g,r as P}from"./featureConversionUtils-03a03f40.js";import{y as C}from"./Field-61ec9870.js";import{t as b}from"./pbfQueryUtils-4adda2cc.js";import"./string-a318751c.js";import"./Error-ec6249b9.js";import"./ArrayPool-a8ee9378.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-1e54421e.js";import"./Ellipsoid-89682c5e.js";import"./unitUtils-45d1147c.js";import"./jsonMap-7b8332c9.js";import"./byteSizeEstimations-f0cab514.js";import"./aaBoundingBox-657a9b82.js";import"./aaBoundingRect-193543b5.js";import"./mathUtils-b4bb77e2.js";import"./vec3-e93e648f.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./quantizationUtils-4dd81f85.js";import"./jsonUtils-229211af.js";import"./Polyline-ff2d7c6b.js";import"./typeUtils-35750739.js";import"./OptimizedFeature-4ab8d380.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./enumeration-3a03bd31.js";import"./fieldType-f31285f7.js";import"./pbf-0e99a620.js";function G(i,t){return t}function h(i,t,e,r){switch(e){case 0:return a(i,t+r,0);case 1:return i.originPosition==="lowerLeft"?a(i,t+r,1):M(i,t+r,1)}}function l(i,t,e,r){return e===2?a(i,t,2):h(i,t,e,r)}function k(i,t,e,r){return e===2?a(i,t,3):h(i,t,e,r)}function v(i,t,e,r){return e===3?a(i,t,3):l(i,t,e,r)}function a({translate:i,scale:t},e,r){return i[r]+e*t[r]}function M({translate:i,scale:t},e,r){return i[r]-e*t[r]}class R{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=G,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return new y}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=f(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(!m(e))for(const r of t.features)e(r.geometry)}createSpatialReference(){return new c}addField(t,e){t.fields.push(C.fromJSON(e));const r=t.fields.map(o=>o.name);this._attributesConstructor=function(){for(const o of r)this[o]=null}}addFeature(t,e){const r=this._options.maxStringAttributeLength?this._options.maxStringAttributeLength:0;if(r>0)for(const o in e.attributes){const s=e.attributes[o];typeof s=="string"&&s.length>r&&(e.attributes[o]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:o}=e,s=g(r.clone(),r,!1,!1,this._transform),p=P(s,o,!1,!1);let n=null;switch(o){case"esriGeometryPoint":n="point";break;case"esriGeometryPolygon":n="polygon";break;case"esriGeometryPolyline":n="polyline";break;case"esriGeometryMultipoint":n="multipoint"}p.type=n,t.queryGeometryType=o,t.queryGeometry=p}prepareFeatures(t){switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(e,r,o)=>this.addCoordinatePoint(e,r,o),this.createGeometry=e=>this.createPointGeometry(e);break;case"polygon":this.addCoordinate=(e,r,o)=>this._addCoordinatePolygon(e,r,o),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"polyline":this.addCoordinate=(e,r,o)=>this._addCoordinatePolyline(e,r,o),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"multipoint":this.addCoordinate=(e,r,o)=>this._addCoordinateMultipoint(e,r,o),this.createGeometry=e=>this._createMultipointGeometry(e);break;case"mesh":case"extent":break;default:u(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new _(d(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce((e,r)=>e+r,0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e,r){this._lengths.length===0&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){switch(e=this._applyTransform(this._transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._applyTransform(this._transform,t,e,r)}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){r===0&&t.points.push([]);const o=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(o)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){r===0&&this._toAddInCurrentPath--==0&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const o=this._transformPathLikeValue(e,r),s=t[t.length-1];r===0&&s.push(new Float64Array(this._coordinateBuffer.buffer,this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this._vertexDimension)),this._coordinateBuffer[this._coordinateBufferPtr++]=o}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?v:e?l:r?k:h}}class T{_parseFeatureQuery(t){const e=b(t.buffer,new R(t.options)),r={...e,spatialReference:e.spatialReference.toJSON(),fields:e.fields?e.fields.map(o=>o.toJSON()):void 0};return Promise.resolve(r)}}function ht(){return new T}export{ht as default};
