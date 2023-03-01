import{ak as z,v as y,W as g,aa as T,qo as B,er as Q,bl as I,qK as U,c_ as V,r as k,ei as H,e2 as X,hE as G,lh as Y,qL as ee}from"./index-51930907.js";import{T as te,L as ne,I as ie}from"./geojson-a4357d4f.js";import{o as ae}from"./clientSideDefaults-17bf364d.js";const N=z.getLogger("esri.layers.graphics.sources.ogcfeature"),R="http://www.opengis.net/def/crs/",pe=`${R}OGC/1.3/CRS84`;async function ge(e,n,t={},i=5){const{links:s}=e,l=f(s,"items","application/geo+json")||f(s,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(y(l))throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{data:d}=await T(l.href,{signal:t.signal,query:{limit:i,...t.customParameters,token:t.apiKey},headers:{accept:"application/geo+json"}});await te(d);const r=ne(d,{geometryType:n.geometryType}),u=n.fields||r.fields||[],x=n.hasZ!=null?n.hasZ:r.hasZ,h=r.geometryType,m=n.objectIdField||r.objectIdFieldName||"OBJECTID";let o=n.timeInfo;const j=u.find(({name:a})=>a===m);if(j)j.editable=!1,j.nullable=!1;else{if(!r.objectIdFieldType)throw new g("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");u.unshift({name:m,alias:m,type:r.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(m!==r.objectIdFieldName){const a=u.find(({name:c})=>c===r.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}u===r.fields&&r.unknownFields.length>0&&N.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}});for(const a of u){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new g("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(!B.jsonValues.includes(a.type))throw new g("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(o){const a=new Q(u);if(o.startTimeField){const c=a.get(o.startTimeField);c?(o.startTimeField=c.name,c.type="esriFieldTypeDate"):o.startTimeField=null}if(o.endTimeField){const c=a.get(o.endTimeField);c?(o.endTimeField=c.name,c.type="esriFieldTypeDate"):o.endTimeField=null}if(o.trackIdField){const c=a.get(o.trackIdField);c?o.trackIdField=c.name:(o.trackIdField=null,N.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:o}}))}o.startTimeField||o.endTimeField||(N.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:o}}),o=null)}return{drawingInfo:h?ae(h):null,extent:de(e),geometryType:h,fields:u,hasZ:!!x,objectIdField:m,timeInfo:o}}async function ye(e,n={}){const{links:t}=e,i=f(t,"data","application/json")||f(t,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(y(i))throw new g("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:s,customParameters:l,signal:d}=n,{data:r}=await T(i.href,{signal:d,headers:{accept:"application/json"},query:{...l,token:s}});return r}async function we(e,n={}){const{links:t}=e,i=f(t,"conformance","application/json")||f(t,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(y(i))throw new g("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:s,customParameters:l,signal:d}=n,{data:r}=await T(i.href,{signal:d,headers:{accept:"application/json"},query:{...l,token:s}});return r}async function be(e,n={}){const{apiKey:t,customParameters:i,signal:s}=n,{data:l}=await T(e,{signal:s,headers:{accept:"application/json"},query:{...i,token:t}});return l}async function he(e,n={}){const t="application/vnd.oai.openapi+json;version=3.0",i=f(e.links,"service-desc",t);if(y(i))return N.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:s,customParameters:l,signal:d}=n,{data:r}=await T(i.href,{signal:d,headers:{accept:t},query:{...l,token:s}});return r}function Fe(e){var s;const n=(s=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e))==null?void 0:s.groups;if(!n)return null;const{authority:t,code:i}=n;switch(t.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return I.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return I.WGS84.wkid;default:return null}case"esri":case"epsg":{const l=Number.parseInt(i,10);return Number.isNaN(l)?null:l}default:return null}}async function Ie(e,n,t){const i=await se(e,n,t);return U(i)}async function se(e,n,t){const{collection:i,layerDefinition:s,maxRecordCount:l,queryParameters:{apiKey:d,customParameters:r},spatialReference:u,supportedCrs:x}=e,{links:h}=i,m=f(h,"items","application/geo+json")||f(h,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(y(m))throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:o,num:j,start:a,timeExtent:c,where:D}=n;if(n.objectIds)throw new g("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const K=I.fromJSON(u),F=V(n.outSpatialReference,K),S=F.isWGS84?null:P(F,x),Z=ce(o,x),L=oe(c),J=le(D),A=j??(a!=null&&a!==void 0?10:l),{data:w}=await T(m.href,{...t,query:{...r,...Z,crs:S,datetime:L,query:J,limit:A,startindex:a,token:d},headers:{accept:"application/geo+json"}});let $=!1;w.links&&($=!!w.links.find(v=>v.rel==="next")),!$&&Number.isInteger(w.numberMatched)&&Number.isInteger(w.numberReturned)&&($=w.numberReturned<w.numberMatched);const{fields:E,geometryType:q,hasZ:O,objectIdField:W}=s,C=ie(w,{geometryType:q,hasZ:O,objectIdField:W});if(!S&&F.isWebMercator){for(const b of C)if(k(b.geometry)&&q!=null){const v=H(b.geometry,q,O,!1);v.spatialReference=I.WGS84,b.geometry=X(G(v,F))}}for(const b of C)b.objectId=b.attributes[W];const _=S||!S&&F.isWebMercator?F.toJSON():Y,p=new ee;return p.exceededTransferLimit=$,p.features=C,p.fields=E,p.geometryType=q,p.hasZ=O,p.objectIdFieldName=W,p.spatialReference=_,p}function re(e){return k(e)&&e.type==="extent"}function P(e,n){const{isWebMercator:t,wkid:i}=e;if(!i)return null;const s=t?n[3857]??n[102100]??n[102113]??n[900913]:n[e.wkid];return s?`${R}${s}`:null}function M(e){if(y(e))return"";const{xmin:n,ymin:t,xmax:i,ymax:s}=e;return`${n},${t},${i},${s}`}function oe(e){if(y(e))return null;const{start:n,end:t}=e;return`${k(n)?n.toISOString():".."}/${k(t)?t.toISOString():".."}`}function le(e){return y(e)||!e||e==="1=1"?null:e}function ce(e,n){if(!re(e))return null;const{spatialReference:t}=e;if(!t||t.isWGS84)return{bbox:M(e)};const i=P(t,n);return k(i)?{bbox:M(e),"bbox-crs":i}:t.isWebMercator?{bbox:M(G(e,I.WGS84))}:null}function de(e){var r;const n=(r=e.extent)==null?void 0:r.spatial;if(!n)return null;const t=n.bbox[0],i=t.length===4,s=t[0],l=t[1],d=i?void 0:t[2];return{xmin:s,ymin:l,xmax:i?t[2]:t[3],ymax:i?t[3]:t[4],zmin:d,zmax:i?void 0:t[5],spatialReference:I.WGS84.toJSON()}}function f(e,n,t){return e.find(i=>i.rel===n&&i.type===t)||e.find(i=>i.rel===n&&!i.type)}export{pe as F,ge as I,Ie as N,he as S,ye as T,R as j,we as k,se as q,Fe as v,be as x};
