import{l as q}from"./Color-fb64d77d.js";import{U as B}from"./request-6fc81c4c.js";import{f as T}from"./typedArrayUtil-4d7bb04c.js";import{f as j}from"./promiseUtils-1e54421e.js";import{u as D}from"./screenUtils-410d12c0.js";import{l as K,s as Q,G as Z,q as $,b as H,W as ee,T as te,u as ae,k as d,v as U,m as ie,O as oe}from"./cimAnalyzer-38842966.js";import{o as re,c as se}from"./Rasterizer-dce80cb8.js";import{p as ne}from"./Symbol3DAnchorPosition2D-5726d999.js";import"./colorUtils-639f4d25.js";import"./mathUtils-b4bb77e2.js";import"./vec3-e93e648f.js";import"./vec3f64-2f9cef06.js";import"./common-c186b691.js";import"./vec4-790471c0.js";import"./ArrayPool-a8ee9378.js";import"./string-a318751c.js";import"./Error-ec6249b9.js";import"./preload-helper-3bce6601.js";import"./arcadeOnDemand-281a01eb.js";import"./geometry-b7901087.js";import"./Extent-da876e26.js";import"./cast-fcb46737.js";import"./nextTick-3ee5a785.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-ff2d7c6b.js";import"./typeUtils-35750739.js";import"./jsonMap-7b8332c9.js";import"./BidiEngine-836b7ef6.js";import"./aaBoundingRect-193543b5.js";import"./jsonUtils-229211af.js";import"./enums-2658a65c.js";import"./alignmentUtils-ae955d28.js";import"./mat2d-2bbb5feb.js";import"./vec2-528adfe4.js";import"./vec2f32-461e65a9.js";import"./number-954e4ab6.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-55effb7b.js";import"./quantizationUtils-4dd81f85.js";import"./GeometryUtils-eebff0a0.js";import"./floatRGBA-9ad35d39.js";import"./_commonjsHelpers-a430e9ea.js";import"./imageutils-c0676a73.js";import"./rasterizingUtils-ec11e94c.js";function J(e,t,a,o){if(e)if(e.type!=="CIMTextSymbol"){if(a&&e.effects)for(const i of e.effects)le(i,t);if(e.symbolLayers)for(const i of e.symbolLayers)switch(i.type){case"CIMPictureMarker":case"CIMVectorMarker":N(i,t,o);break;case"CIMPictureStroke":case"CIMSolidStroke":!(o!=null&&o.preserveOutlineWidth)&&i.width&&(i.width*=t);break;case"CIMPictureFill":i.height&&(i.height*=t),i.offsetX&&(i.offsetX*=t),i.offsetY&&(i.offsetY*=t);break;case"CIMHatchFill":J(i.lineSymbol,t,!0,{...o,preserveOutlineWidth:!1}),i.offsetX&&(i.offsetX*=t),i.offsetY&&(i.offsetY*=t),i.separation&&(i.separation*=t)}}else e.height!=null&&(e.height*=t)}function N(e,t,a){if(e&&(e.markerPlacement&&ce(e.markerPlacement,t),e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.anchorPoint&&e.anchorPointUnits==="Absolute"&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size=e.size!=null?e.size*t:0,e.type==="CIMVectorMarker"&&e.markerGraphics))for(const o of e.markerGraphics)e.scaleSymbolsProportionally||J(o.symbol,t,!0,a)}function ce(e,t){switch(K(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){const a=e.placementTemplate.map(o=>o*t);e.placementTemplate=a}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){const a=e.placementTemplate.map(o=>o*t);e.placementTemplate=a}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t)}}function le(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=t);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){const a=e.dashTemplate.map(o=>o*t);e.dashTemplate=a}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t)}}var V;(function(e){e.Legend="legend",e.Preview="preview"})(V||(V={}));const X=e=>e&&e.scaleFactor?e.scaleFactor:1,me=96/72;class it{constructor(t,a){this._spatialReference=t,this._avoidSDF=a,this._resourceCache=new Map,this._imageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new Q,this._cimResourceManager=new re,this._rasterizer=new se(this._cimResourceManager)}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(t,a,o,i,r,s,m,n){if(!t)return null;const{data:l}=t;if(!l||l.type!=="CIMSymbolReference"||!l.symbol)return null;const{symbol:w}=l;s||(s=Z(w));const k=await $.resolveSymbolOverrides(l,a,this._spatialReference,r,s,m,n);this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const g=this._imageDataCanvas,f=this._cimResourceManager,u=[];H.fetchResources(k,f,u),u.length>0&&await Promise.all(u);const{width:h,height:p}=o,C=fe(s,h,p,i),c=H.getEnvelope(k,C,f);if(!c)return null;const R=(window.devicePixelRatio||1)*me;let b=1,A=0,P=0;switch(w.type){case"CIMPointSymbol":case"CIMTextSymbol":{let I=1;c.width>h&&(I=h/c.width);let x=1;c.height>p&&(x=p/c.height),i==="preview"&&(c.width<h&&(I=h/c.width),c.height<p&&(x=p/c.height)),b=Math.min(I,x),A=c.x+c.width/2,P=c.y+c.height/2}break;case"CIMLineSymbol":{let I=1;c.height>p&&(I=p/c.height),b=I,P=c.y+c.height/2;const x=c.x*b+h/2,M=(c.x+c.width)*b+h/2;if(x<0){const{paths:y}=C;y[0][0][0]-=x}if(M>h){const{paths:y}=C;y[0][2][0]-=M-h}}break;case"CIMPolygonSymbol":{A=c.x+c.width/2,P=c.y+c.height/2;const I=c.x*b+h/2,x=(c.x+c.width)*b+h/2,M=c.y*b+p/2,y=(c.y+c.height)*b+p/2,{rings:_}=C;I<0&&(_[0][0][0]-=I,_[0][3][0]-=I,_[0][4][0]-=I),M<0&&(_[0][0][1]+=M,_[0][1][1]+=M,_[0][4][1]+=M),x>h&&(_[0][1][0]-=x-h,_[0][2][0]-=x-h),y>p&&(_[0][2][1]+=y-p,_[0][3][1]+=y-p)}}g.width=h*R,g.height=p*R;const z=1;g.width+=2*z,g.height+=2*z;const S=g.getContext("2d"),v=oe.createIdentity();return v.translate(-A,-P),v.scale(b*R,-b*R),v.translate(h*R/2+z,p*R/2+z),S.clearRect(0,0,g.width,g.height),new ee(S,f,v,!0).drawSymbol(k,C),S.getImageData(0,0,g.width,g.height)}async analyzeCIMSymbol(t,a,o,i,r){const s=[],m=a?{geometryType:i,spatialReference:this._spatialReference,fields:a}:null;let n;await te(t.data,m,this._cimResourceManager,s,this._avoidSDF),j(r);for(const l of s)l.cim.type!=="CIMPictureMarker"&&l.cim.type!=="CIMPictureFill"&&l.cim.type!=="CIMPictureStroke"||(n||(n=[]),n.push(this._fetchPictureMarkerResource(l,r))),o&&l.type==="text"&&typeof l.text=="string"&&l.text.includes("[")&&(l.text=ae(o,l.text,l.cim.textCase));return n&&await Promise.all(n),s}rasterizeCIMSymbol3D(t,a,o,i,r,s){const m=[];for(const n of t){i&&typeof i.scaleFactor=="function"&&(i.scaleFactor=i.scaleFactor(a,r,s));const l=this._getRasterizedResource(n,a,o,i,r,s);if(!l)continue;let w=0,k=l.anchorX||0,g=l.anchorY||0,f=!1,u=0,h=0;if(o==="esriGeometryPoint"){const p=X(i);if(u=d(n.offsetX,a,r,s)*p||0,h=d(n.offsetY,a,r,s)*p||0,n.type==="marker")w=d(n.rotation,a,r,s)||0,f=!!n.rotateClockwise&&n.rotateClockwise;else if(n.type==="text"){if(w=d(n.angle,a,r,s)||0,n.horizontalAlignment!==void 0)switch(n.horizontalAlignment){case"left":k=-.5;break;case"right":k=.5;break;default:k=0}if(n.verticalAlignment!==void 0)switch(n.verticalAlignment){case"top":g=.5;break;case"bottom":g=-.5;break;case"baseline":g=-.25;break;default:g=0}}}l!=null&&m.push({angle:w,rotateClockWise:f,anchorX:k,anchorY:g,offsetX:u,offsetY:h,rasterizedResource:l})}return this.getSymbolImage(m)}getSymbolImage(t){const a=document.createElement("canvas"),o=T(a.getContext("2d"));let i=0,r=0,s=0,m=0;const n=[];for(let g=0;g<t.length;g++){const f=t[g],u=f.rasterizedResource;if(!u)continue;const h=u.size,p=f.offsetX,C=f.offsetY,c=f.anchorX,R=f.anchorY,b=f.rotateClockWise||!1;let A=f.angle,P=D(p)-h[0]*(.5+c),z=D(C)-h[1]*(.5+R),S=P+h[0],v=z+h[1];if(A){b&&(A=-A);const M=Math.sin(A*Math.PI/180),y=Math.cos(A*Math.PI/180),_=P*y-z*M,Y=P*M+z*y,E=P*y-v*M,O=P*M+v*y,G=S*y-v*M,L=S*M+v*y,F=S*y-z*M,W=S*M+z*y;P=Math.min(_,E,G,F),z=Math.min(Y,O,L,W),S=Math.max(_,E,G,F),v=Math.max(Y,O,L,W)}i=P<i?P:i,r=z<r?z:r,s=S>s?S:s,m=v>m?v:m;const I=o.createImageData(u.size[0],u.size[1]);I.data.set(new Uint8ClampedArray(u.image.buffer));const x={offsetX:p,offsetY:C,rotateClockwise:b,angle:A,rasterizedImage:I,anchorX:c,anchorY:R};n.push(x)}a.width=s-i,a.height=m-r;const l=-i,w=m;for(let g=0;g<n.length;g++){const f=n[g],u=this._imageDataToCanvas(f.rasterizedImage),h=f.rasterizedImage.width,p=f.rasterizedImage.height,C=l-h*(.5+f.anchorX),c=w-p*(.5-f.anchorY);if(f.angle){const R=(360-f.angle)*Math.PI/180;o.save(),o.translate(D(f.offsetX),-D(f.offsetY)),o.translate(l,w),o.rotate(R),o.translate(-l,-w),o.drawImage(u,C,c),o.restore()}else o.drawImage(u,C+D(f.offsetX),c-D(f.offsetY))}const k=new ne({x:l/a.width-.5,y:w/a.height-.5});return{imageData:a.width!==0&&a.height!==0?o.getImageData(0,0,a.width,a.height):o.createImageData(1,1),anchorPosition:k}}async _fetchPictureMarkerResource(t,a){const o=t.materialHash;if(!this._pictureMarkerCache.get(o)){const i=(await B(t.cim.url,{responseType:"image",signal:a&&a.signal})).data;this._pictureMarkerCache.set(o,i)}}_imageDataToCanvas(t){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const a=this._imageDataCanvas,o=T(a.getContext("2d"));return a.width=t.width,a.height=t.height,o.putImageData(t,0,0),a}_imageTo32Array(t,a,o,i){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const r=this._imageDataCanvas,s=T(r.getContext("2d"));if(r.width=a,r.height=o,s.drawImage(t,0,0,a,o),i){s.save();const m=new q(i);s.fillStyle=m.toHex(),s.globalCompositeOperation="multiply",s.fillRect(0,0,a,o),s.globalCompositeOperation="destination-atop",s.drawImage(t,0,0,a,o),s.restore()}return new Uint32Array(s.getImageData(0,0,a,o).data.buffer)}_getRasterizedResource(t,a,o,i,r,s){let m,n,l;if(t.type==="text")return this._rasterizeTextResource(t,a,i,r,s);({analyzedCIM:m,hash:n}=he(t,a,r,s));const g=X(i);if(t.cim.type==="CIMPictureMarker"){const h=d(t.size,a,r,s)*g,{image:p,width:C,height:c}=T(this._getPictureResource(t,h,d(t.color,a,r,s)));return l={image:p,size:[C,c],sdf:!1,simplePattern:!1,anchorX:t.anchorPoint?t.anchorPoint.x:0,anchorY:t.anchorPoint?t.anchorPoint.y:0},l}N(m,g,{preserveOutlineWidth:!1});const f=m;n+=o,i&&(n+=JSON.stringify(i));const u=this._resourceCache;return u.has(n)?u.get(n):(l=this._rasterizer.rasterizeJSONResource({cim:f,type:t.type,url:t.url,mosaicHash:n,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),u.set(n,l),l)}_rasterizeTextResource(t,a,o,i,r){const s=X(o),m=d(t.text,a,i,r);if(!m||m.length===0)return null;const n=d(t.fontName,a,i,r),l=d(t.style,a,i,r),w=d(t.weight,a,i,r),k=d(t.decoration,a,i,r),g=d(t.size,a,i,r)*s,f=d(t.horizontalAlignment,a,i,r),u=d(t.verticalAlignment,a,i,r),h=U(d(t.color,a,i,r)),p=U(d(t.outlineColor,a,i,r)),C={color:h,size:g,horizontalAlignment:f,verticalAlignment:u,font:{family:n,style:l,weight:w,decoration:k},halo:{size:d(t.outlineSize,a,i,r)||0,color:p,style:l},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(m,C)}_getPictureResource(t,a,o){const i=this._pictureMarkerCache.get(t.materialHash);if(!i)return null;const r=i.height/i.width,s=a?r>1?D(a):D(a)/r:i.width,m=a?r>1?D(a)*r:D(a):i.height;return{image:this._imageTo32Array(i,s,m,o),width:s,height:m}}}function fe(e,t,a,o){const r=-t/2+1,s=t/2-1,m=a/2-1,n=-a/2+1;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[r,0],[0,0],[s,0]]]};default:return o==="legend"?{rings:[[[r,m],[s,0],[s,n],[r,n],[r,m]]]}:{rings:[[[r,m],[s,m],[s,n],[r,n],[r,m]]]}}}function he(e,t,a,o){let i,r;return typeof e.materialHash=="function"?(i=(0,e.materialHash)(t,a,o),r=ie(e.cim,e.materialOverrides)):(i=e.materialHash,r=e.cim),{analyzedCIM:r,hash:i}}export{it as CIMSymbolRasterizer,V as GeometryStyle};
