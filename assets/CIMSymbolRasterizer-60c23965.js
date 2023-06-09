import{cU as j,iM as X,d4 as D,oh as q,ep as B,aw as K}from"./calcite-c5ae4991.js";import{m as Q,s as Z,O as $,n as ee,h as H,W as te,j as ae,q as ie,t as p,v as U,p as se,w as oe}from"./cimAnalyzer-d4821ac0.js";import{o as re}from"./CIMResourceManager-80071c8c.js";import{c as ne}from"./Rasterizer-80b3452a.js";import"./index-9a6385f7.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./enums-4b2a86a0.js";import"./alignmentUtils-ae955d28.js";import"./definitions-3ddd14a8.js";import"./number-b10bd8f5.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-94cb1131.js";import"./quantizationUtils-a15bd53f.js";import"./floatRGBA-2dd25736.js";import"./imageutils-2ddb774e.js";import"./_commonjsHelpers-2f3e7994.js";import"./rasterizingUtils-5fc2770c.js";function J(e,t,a,s){if(e)if(e.type!=="CIMTextSymbol"){if(a&&e.effects)for(const i of e.effects)le(i,t);if(e.symbolLayers)for(const i of e.symbolLayers)switch(i.type){case"CIMPictureMarker":case"CIMVectorMarker":N(i,t,s);break;case"CIMPictureStroke":case"CIMSolidStroke":!(s!=null&&s.preserveOutlineWidth)&&i.width&&(i.width*=t);break;case"CIMPictureFill":i.height&&(i.height*=t),i.offsetX&&(i.offsetX*=t),i.offsetY&&(i.offsetY*=t);break;case"CIMHatchFill":J(i.lineSymbol,t,!0,{...s,preserveOutlineWidth:!1}),i.offsetX&&(i.offsetX*=t),i.offsetY&&(i.offsetY*=t),i.separation&&(i.separation*=t)}}else e.height!=null&&(e.height*=t)}function N(e,t,a){if(e&&(e.markerPlacement&&ce(e.markerPlacement,t),e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.anchorPoint&&e.anchorPointUnits==="Absolute"&&(e.anchorPoint={x:e.anchorPoint.x*t,y:e.anchorPoint.y*t}),e.size=e.size!=null?e.size*t:0,e.type==="CIMVectorMarker"&&e.markerGraphics))for(const s of e.markerGraphics)e.scaleSymbolsProportionally||J(s.symbol,t,!0,a)}function ce(e,t){switch(Q(e)&&e.offset&&(e.offset*=t),e.type){case"CIMMarkerPlacementAlongLineRandomSize":case"CIMMarkerPlacementAlongLineSameSize":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.placementTemplate&&e.placementTemplate.length){const a=e.placementTemplate.map(s=>s*t);e.placementTemplate=a}break;case"CIMMarkerPlacementAlongLineVariableSize":if(e.maxRandomOffset&&(e.maxRandomOffset*=t),e.placementTemplate&&e.placementTemplate.length){const a=e.placementTemplate.map(s=>s*t);e.placementTemplate=a}break;case"CIMMarkerPlacementOnLine":e.startPointOffset&&(e.startPointOffset*=t);break;case"CIMMarkerPlacementAtExtremities":e.offsetAlongLine&&(e.offsetAlongLine*=t);break;case"CIMMarkerPlacementAtMeasuredUnits":case"CIMMarkerPlacementOnVertices":break;case"CIMMarkerPlacementAtRatioPositions":e.beginPosition&&(e.beginPosition*=t),e.endPosition&&(e.endPosition*=t);break;case"CIMMarkerPlacementPolygonCenter":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMMarkerPlacementInsidePolygon":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t),e.stepX&&(e.stepX*=t),e.stepY&&(e.stepY*=t)}}function le(e,t){switch(e.type){case"CIMGeometricEffectArrow":case"CIMGeometricEffectDonut":e.width&&(e.width*=t);break;case"CIMGeometricEffectBuffer":e.size&&(e.size*=t);break;case"CIMGeometricEffectCut":e.beginCut&&(e.beginCut*=t),e.endCut&&(e.endCut*=t),e.middleCut&&(e.middleCut*=t);break;case"CIMGeometricEffectDashes":if(e.customEndingOffset&&(e.customEndingOffset*=t),e.offsetAlongLine&&(e.offsetAlongLine*=t),e.dashTemplate&&e.dashTemplate.length){const a=e.dashTemplate.map(s=>s*t);e.dashTemplate=a}break;case"CIMGeometricEffectExtension":case"CIMGeometricEffectJog":case"CIMGeometricEffectRadial":e.length&&(e.length*=t);break;case"CIMGeometricEffectMove":e.offsetX&&(e.offsetX*=t),e.offsetY&&(e.offsetY*=t);break;case"CIMGeometricEffectOffset":case"CIMGeometricEffectOffsetTangent":e.offset&&(e.offset*=t);break;case"CIMGeometricEffectRegularPolygon":e.radius&&(e.radius*=t);break;case"CIMGeometricEffectTaperedPolygon":e.fromWidth&&(e.fromWidth*=t),e.length&&(e.length*=t),e.toWidth&&(e.toWidth*=t);break;case"CIMGeometricEffectWave":e.amplitude&&(e.amplitude*=t),e.period&&(e.period*=t)}}var V;(function(e){e.Legend="legend",e.Preview="preview"})(V||(V={}));const Y=e=>e&&e.scaleFactor?e.scaleFactor:1,he=96/72;class Ae{constructor(t,a){this._spatialReference=t,this._avoidSDF=a,this._resourceCache=new Map,this._imageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new Z,this._cimResourceManager=new re,this._rasterizer=new ne(this._cimResourceManager)}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(t,a,s,i,o,r,h,n){if(!t)return null;const{data:l}=t;if(!l||l.type!=="CIMSymbolReference"||!l.symbol)return null;const{symbol:w}=l;r||(r=$(w));const k=await ee.resolveSymbolOverrides(l,a,this._spatialReference,o,r,h,n);this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const g=this._imageDataCanvas,f=this._cimResourceManager,d=[];H.fetchResources(k,f,d),d.length>0&&await Promise.all(d);const{width:m,height:u}=s,C=fe(r,m,u,i),c=H.getEnvelope(k,C,f);if(!c)return null;const R=(window.devicePixelRatio||1)*he;let b=1,A=0,P=0;switch(w.type){case"CIMPointSymbol":case"CIMTextSymbol":{let I=1;c.width>m&&(I=m/c.width);let x=1;c.height>u&&(x=u/c.height),i==="preview"&&(c.width<m&&(I=m/c.width),c.height<u&&(x=u/c.height)),b=Math.min(I,x),A=c.x+c.width/2,P=c.y+c.height/2}break;case"CIMLineSymbol":{let I=1;c.height>u&&(I=u/c.height),b=I,P=c.y+c.height/2;const x=c.x*b+m/2,M=(c.x+c.width)*b+m/2;if(x<0){const{paths:y}=C;y[0][0][0]-=x}if(M>m){const{paths:y}=C;y[0][2][0]-=M-m}}break;case"CIMPolygonSymbol":{A=c.x+c.width/2,P=c.y+c.height/2;const I=c.x*b+m/2,x=(c.x+c.width)*b+m/2,M=c.y*b+u/2,y=(c.y+c.height)*b+u/2,{rings:_}=C;I<0&&(_[0][0][0]-=I,_[0][3][0]-=I,_[0][4][0]-=I),M<0&&(_[0][0][1]+=M,_[0][1][1]+=M,_[0][4][1]+=M),x>m&&(_[0][1][0]-=x-m,_[0][2][0]-=x-m),y>u&&(_[0][2][1]+=y-u,_[0][3][1]+=y-u)}}g.width=m*R,g.height=u*R;const z=1;g.width+=2*z,g.height+=2*z;const S=g.getContext("2d"),v=oe.createIdentity();return v.translate(-A,-P),v.scale(b*R,-b*R),v.translate(m*R/2+z,u*R/2+z),S.clearRect(0,0,g.width,g.height),new te(S,f,v,!0).drawSymbol(k,C),S.getImageData(0,0,g.width,g.height)}async analyzeCIMSymbol(t,a,s,i,o){const r=[],h=a?{geometryType:i,spatialReference:this._spatialReference,fields:a}:null;let n;await ae(t.data,h,this._cimResourceManager,r,this._avoidSDF),j(o);for(const l of r)l.cim.type!=="CIMPictureMarker"&&l.cim.type!=="CIMPictureFill"&&l.cim.type!=="CIMPictureStroke"||(n||(n=[]),n.push(this._fetchPictureMarkerResource(l,o))),s&&l.type==="text"&&typeof l.text=="string"&&l.text.includes("[")&&(l.text=ie(s,l.text,l.cim.textCase));return n&&await Promise.all(n),r}rasterizeCIMSymbol3D(t,a,s,i,o,r){const h=[];for(const n of t){i&&typeof i.scaleFactor=="function"&&(i.scaleFactor=i.scaleFactor(a,o,r));const l=this._getRasterizedResource(n,a,s,i,o,r);if(!l)continue;let w=0,k=l.anchorX||0,g=l.anchorY||0,f=!1,d=0,m=0;if(s==="esriGeometryPoint"){const u=Y(i);if(d=p(n.offsetX,a,o,r)*u||0,m=p(n.offsetY,a,o,r)*u||0,n.type==="marker")w=p(n.rotation,a,o,r)||0,f=!!n.rotateClockwise&&n.rotateClockwise;else if(n.type==="text"){if(w=p(n.angle,a,o,r)||0,n.horizontalAlignment!==void 0)switch(n.horizontalAlignment){case"left":k=-.5;break;case"right":k=.5;break;default:k=0}if(n.verticalAlignment!==void 0)switch(n.verticalAlignment){case"top":g=.5;break;case"bottom":g=-.5;break;case"baseline":g=-.25;break;default:g=0}}}l!=null&&h.push({angle:w,rotateClockWise:f,anchorX:k,anchorY:g,offsetX:d,offsetY:m,rasterizedResource:l})}return this.getSymbolImage(h)}getSymbolImage(t){const a=document.createElement("canvas"),s=X(a.getContext("2d"));let i=0,o=0,r=0,h=0;const n=[];for(let g=0;g<t.length;g++){const f=t[g],d=f.rasterizedResource;if(!d)continue;const m=d.size,u=f.offsetX,C=f.offsetY,c=f.anchorX,R=f.anchorY,b=f.rotateClockWise||!1;let A=f.angle,P=D(u)-m[0]*(.5+c),z=D(C)-m[1]*(.5+R),S=P+m[0],v=z+m[1];if(A){b&&(A=-A);const M=Math.sin(A*Math.PI/180),y=Math.cos(A*Math.PI/180),_=P*y-z*M,E=P*M+z*y,T=P*y-v*M,O=P*M+v*y,G=S*y-v*M,L=S*M+v*y,F=S*y-z*M,W=S*M+z*y;P=Math.min(_,T,G,F),z=Math.min(E,O,L,W),S=Math.max(_,T,G,F),v=Math.max(E,O,L,W)}i=P<i?P:i,o=z<o?z:o,r=S>r?S:r,h=v>h?v:h;const I=s.createImageData(d.size[0],d.size[1]);I.data.set(new Uint8ClampedArray(d.image.buffer));const x={offsetX:u,offsetY:C,rotateClockwise:b,angle:A,rasterizedImage:I,anchorX:c,anchorY:R};n.push(x)}a.width=r-i,a.height=h-o;const l=-i,w=h;for(let g=0;g<n.length;g++){const f=n[g],d=this._imageDataToCanvas(f.rasterizedImage),m=f.rasterizedImage.width,u=f.rasterizedImage.height,C=l-m*(.5+f.anchorX),c=w-u*(.5-f.anchorY);if(f.angle){const R=(360-f.angle)*Math.PI/180;s.save(),s.translate(D(f.offsetX),-D(f.offsetY)),s.translate(l,w),s.rotate(R),s.translate(-l,-w),s.drawImage(d,C,c),s.restore()}else s.drawImage(d,C+D(f.offsetX),c-D(f.offsetY))}const k=new q({x:l/a.width-.5,y:w/a.height-.5});return{imageData:a.width!==0&&a.height!==0?s.getImageData(0,0,a.width,a.height):s.createImageData(1,1),anchorPosition:k}}async _fetchPictureMarkerResource(t,a){const s=t.materialHash;if(!this._pictureMarkerCache.get(s)){const i=(await B(t.cim.url,{responseType:"image",signal:a&&a.signal})).data;this._pictureMarkerCache.set(s,i)}}_imageDataToCanvas(t){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const a=this._imageDataCanvas,s=X(a.getContext("2d"));return a.width=t.width,a.height=t.height,s.putImageData(t,0,0),a}_imageTo32Array(t,a,s,i){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const o=this._imageDataCanvas,r=X(o.getContext("2d"));if(o.width=a,o.height=s,r.drawImage(t,0,0,a,s),i){r.save();const h=new K(i);r.fillStyle=h.toHex(),r.globalCompositeOperation="multiply",r.fillRect(0,0,a,s),r.globalCompositeOperation="destination-atop",r.drawImage(t,0,0,a,s),r.restore()}return new Uint32Array(r.getImageData(0,0,a,s).data.buffer)}_getRasterizedResource(t,a,s,i,o,r){let h,n,l;if(t.type==="text")return this._rasterizeTextResource(t,a,i,o,r);({analyzedCIM:h,hash:n}=me(t,a,o,r));const g=Y(i);if(t.cim.type==="CIMPictureMarker"){const m=p(t.size,a,o,r)*g,{image:u,width:C,height:c}=X(this._getPictureResource(t,m,p(t.color,a,o,r)));return l={image:u,size:[C,c],sdf:!1,simplePattern:!1,anchorX:t.anchorPoint?t.anchorPoint.x:0,anchorY:t.anchorPoint?t.anchorPoint.y:0},l}N(h,g,{preserveOutlineWidth:!1});const f=h;n+=s,i&&(n+=JSON.stringify(i));const d=this._resourceCache;return d.has(n)?d.get(n):(l=this._rasterizer.rasterizeJSONResource({cim:f,type:t.type,url:t.url,mosaicHash:n,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),d.set(n,l),l)}_rasterizeTextResource(t,a,s,i,o){const r=Y(s),h=p(t.text,a,i,o);if(!h||h.length===0)return null;const n=p(t.fontName,a,i,o),l=p(t.style,a,i,o),w=p(t.weight,a,i,o),k=p(t.decoration,a,i,o),g=p(t.size,a,i,o)*r,f=p(t.horizontalAlignment,a,i,o),d=p(t.verticalAlignment,a,i,o),m=U(p(t.color,a,i,o)),u=U(p(t.outlineColor,a,i,o)),C={color:m,size:g,horizontalAlignment:f,verticalAlignment:d,font:{family:n,style:l,weight:w,decoration:k},halo:{size:p(t.outlineSize,a,i,o)||0,color:u,style:l},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(h,C)}_getPictureResource(t,a,s){const i=this._pictureMarkerCache.get(t.materialHash);if(!i)return null;const o=i.height/i.width,r=a?o>1?D(a):D(a)/o:i.width,h=a?o>1?D(a)*o:D(a):i.height;return{image:this._imageTo32Array(i,r,h,s),width:r,height:h}}}function fe(e,t,a,s){const o=-t/2+1,r=t/2-1,h=a/2-1,n=-a/2+1;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[o,0],[0,0],[r,0]]]};default:return s==="legend"?{rings:[[[o,h],[r,0],[r,n],[o,n],[o,h]]]}:{rings:[[[o,h],[r,h],[r,n],[o,n],[o,h]]]}}}function me(e,t,a,s){let i,o;return typeof e.materialHash=="function"?(i=(0,e.materialHash)(t,a,s),o=se(e.cim,e.materialOverrides)):(i=e.materialHash,o=e.cim),{analyzedCIM:o,hash:i}}export{Ae as CIMSymbolRasterizer,V as GeometryStyle};
