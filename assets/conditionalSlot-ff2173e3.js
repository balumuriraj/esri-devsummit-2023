import{q as c}from"./widget-fb292a2f.js";import{c as i}from"./observers-edc9938f.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.97
 */const n=new Set;let e;const r={childList:!0};function f(o){e||(e=i("mutation",s)),e.observe(o.el,r)}function l(o){n.delete(o.el),s(e.takeRecords()),e.disconnect();for(const[t]of n.entries())e.observe(t,r)}function s(o){o.forEach(({target:t})=>{c(t)})}export{f as c,l as d};
