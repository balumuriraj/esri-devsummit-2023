import{R as d,$ as c,mW as m,q as n,c2 as p,O as u,dc as b,e as h,y as f,a as v,f as y}from"./calcite-c5ae4991.js";import{e as g}from"./mat4f64-abdda1bb.js";import{b as z}from"./TileTreeDebugger-775ec8ca.js";import"./index-9a6385f7.js";let o=class extends z{constructor(a){super(a)}getTiles(){const a=this.lv.getVisibleNodes(),i=this.view.renderSpatialReference,l=this.nodeSR;return a.map(t=>j(t,i,l)).filter(d).sort((t,s)=>t.lij[0]===s.lij[0]?t.label>s.label?-1:1:t.lij[0]-s.lij[0])}};function j(a,i,l){const t=a.serviceObb;if(c(t)||c(i))return null;m(r,t.quaternion),n(e,t.center),p(e,l,0,e,i,0,1),r[12]=e[0],r[13]=e[1],r[14]=e[2];const s=[[],[],[]];n(e,t.halfSize),u(e,e,r),p(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),n(e,t.halfSize),e[0]=-e[0],u(e,e,r),p(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),n(e,t.halfSize),e[0]=-e[0],e[1]=-e[1],u(e,e,r),p(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),n(e,t.halfSize),e[1]=-e[1],u(e,e,r),p(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),n(e,t.halfSize),e[0]=-e[0],e[2]=-e[2],u(e,e,r),p(e,i,0,e,l,0,1),s[1].push([e[0],e[1]]),n(e,t.halfSize),e[2]=-e[2],u(e,e,r),p(e,i,0,e,l,0,1),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),n(e,t.halfSize),e[1]=-e[1],e[2]=-e[2],u(e,e,r),p(e,i,0,e,l,0,1),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const S=new b({rings:s,spatialReference:l});return{lij:[a.level,a.childCount,0],label:a.id,geometry:S}}h([f({constructOnly:!0})],o.prototype,"lv",void 0),h([f({constructOnly:!0})],o.prototype,"nodeSR",void 0),o=h([v("esri.views.3d.layers.support.I3STreeDebugger")],o);const r=g(),e=y();export{o as I3STreeDebugger};
