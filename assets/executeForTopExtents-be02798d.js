import{bo as r,vw as m,aR as s}from"./index-70f3b4f7.js";import{p as c}from"./queryTopFeatures-9cc3a239.js";async function u(o,a,e){const n=r(o),t=await c(n,m.from(a),{...e});return{count:t.data.count,extent:s.fromJSON(t.data.extent)}}export{u as executeForTopExtents};