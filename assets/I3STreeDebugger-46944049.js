import{r as d,v as c,j2 as v,fm as r,g0 as u,iL as p,ae as b,ac as o,ad as f,af as g,ir as y,n as j}from"./index-51930907.js";import{b as m}from"./TileTreeDebugger-64338e09.js";let h=class extends m{constructor(n){super(n)}getTiles(){const n=this.lv.getVisibleNodes(),i=this.view.renderSpatialReference,a=this.nodeSR;return n.map(t=>z(t,i,a)).filter(d).sort((t,s)=>t.lij[0]===s.lij[0]?t.label>s.label?-1:1:t.lij[0]-s.lij[0])}};function z(n,i,a){const t=n.serviceObb;if(c(t)||c(i))return null;v(l,t.quaternion),r(e,t.center),u(e,a,0,e,i,0,1),l[12]=e[0],l[13]=e[1],l[14]=e[2];const s=[[],[],[]];r(e,t.halfSize),p(e,e,l),u(e,i,0,e,a,0,1),s[0].push([e[0],e[1]]),r(e,t.halfSize),e[0]=-e[0],p(e,e,l),u(e,i,0,e,a,0,1),s[0].push([e[0],e[1]]),r(e,t.halfSize),e[0]=-e[0],e[1]=-e[1],p(e,e,l),u(e,i,0,e,a,0,1),s[0].push([e[0],e[1]]),r(e,t.halfSize),e[1]=-e[1],p(e,e,l),u(e,i,0,e,a,0,1),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),r(e,t.halfSize),e[0]=-e[0],e[2]=-e[2],p(e,e,l),u(e,i,0,e,a,0,1),s[1].push([e[0],e[1]]),r(e,t.halfSize),e[2]=-e[2],p(e,e,l),u(e,i,0,e,a,0,1),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),r(e,t.halfSize),e[1]=-e[1],e[2]=-e[2],p(e,e,l),u(e,i,0,e,a,0,1),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const S=new b({rings:s,spatialReference:a});return{lij:[n.level,n.childCount,0],label:n.id,geometry:S}}o([f({constructOnly:!0})],h.prototype,"lv",void 0),o([f({constructOnly:!0})],h.prototype,"nodeSR",void 0),h=o([g("esri.views.3d.layers.support.I3STreeDebugger")],h);const l=y(),e=j();export{h as I3STreeDebugger};
