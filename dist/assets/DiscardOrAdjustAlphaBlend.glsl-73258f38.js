import{t as d}from"./AlphaCutoff-96178e0d.js";import{n as o}from"./ShaderBuilder-a7d0da4e.js";function f(r){r.fragment.code.add(o`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o.float(d)}) { discard; } }
  `)}export{f as d};
