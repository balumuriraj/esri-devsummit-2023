import{u as d,e as i,y as n,n as f,m}from"./cast-fcb46737.js";import{i as j,l as v}from"./Clonable-545593ce.js";import{t as p,T as s}from"./typedArrayUtil-4d7bb04c.js";import"./ArrayPool-a8ee9378.js";import{g as u}from"./persistable-ad5d84e1.js";import{w as y}from"./Extent-da876e26.js";import{x as c}from"./ElevationInfo-215614d8.js";function I(e,t){return a(e)===a(t)}function a(e){if(p(e))return null;const t=e.layer!=null?e.layer.id:"";let o=null;return o=e.objectId!=null?e.objectId:e.layer!=null&&"objectIdField"in e.layer&&e.layer.objectIdField!=null&&e.attributes!=null?e.attributes[e.layer.objectIdField]:e.uid,o==null?null:`o-${t}-${o}`}const b={json:{write:{writer:h,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:$}}}};function h(e,t){var o;p(e)||((o=e.layer)==null?void 0:o.objectIdField)==null||e.attributes==null||(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function $(e){if(e.layerId!=null&&e.objectId!=null)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}let r=class extends d(j(m)){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return s(this.position,t.position)&&s(this.elevationInfo,t.elevationInfo)&&I(this.feature,t.feature)}};i([n({type:y}),u()],r.prototype,"position",void 0),i([n({type:c}),u()],r.prototype,"elevationInfo",void 0),i([n(b)],r.prototype,"feature",void 0),r=i([f("esri.analysis.LineOfSightAnalysisObserver")],r);const L=r;let l=class extends d(v){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return s(this.position,e.position)&&s(this.elevationInfo,e.elevationInfo)&&I(this.feature,e.feature)}};i([n({type:y}),u()],l.prototype,"position",void 0),i([n({type:c}),u()],l.prototype,"elevationInfo",void 0),i([n(b)],l.prototype,"feature",void 0),l=i([f("esri.analysis.LineOfSightAnalysisTarget")],l);const N=l;export{N as f,a as l,L as u};
