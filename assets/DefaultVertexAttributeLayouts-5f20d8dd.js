import{C as o}from"./enums-e2e92c86.js";import{t as u}from"./VertexElementDescriptor-2925c6af.js";function a(){return new Float32Array(4)}function y(n){const t=new Float32Array(4);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function r(n,t,m,w){const e=new Float32Array(4);return e[0]=n,e[1]=t,e[2]=m,e[3]=w,e}function T(n,t){return new Float32Array(n,t,4)}function c(){return a()}function i(){return r(1,1,1,1)}function f(){return r(1,0,0,0)}function s(){return r(0,1,0,0)}function _(){return r(0,0,1,0)}function l(){return r(0,0,0,1)}const p=c(),N=i(),E=f(),S=s(),g=_(),I=l();Object.freeze(Object.defineProperty({__proto__:null,ONES:N,UNIT_W:I,UNIT_X:E,UNIT_Y:S,UNIT_Z:g,ZEROS:p,clone:y,create:a,createView:T,fromValues:r,ones:i,unitW:l,unitX:f,unitY:s,unitZ:_,zeros:c},Symbol.toStringTag,{value:"Module"}));const Y={geometry:[new u("a_pos",2,o.BYTE,0,2)]},b={geometry:[new u("a_pos",2,o.BYTE,0,4),new u("a_tex",2,o.BYTE,2,4)]},A={geometry:[new u("a_pos",2,o.UNSIGNED_SHORT,0,4)]};export{Y as a,y as b,A as m,r,b as t};
