import{ha as n,q8 as m,w as p}from"./calcite-c5ae4991.js";import{p as c}from"./queryTopFeatures-beb2732c.js";import"./index-9a6385f7.js";async function u(o,a,r){const e=n(o),t=await c(e,m.from(a),{...r});return{count:t.data.count,extent:p.fromJSON(t.data.extent)}}export{u as executeForTopExtents};