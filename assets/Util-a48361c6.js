import{n as l}from"./vec2f64-30dc1443.js";import{w as M}from"./vec4-790471c0.js";import{n as m}from"./vec4f64-e407da96.js";const a=m();class g{constructor(n){this.message=n}toString(){return`AssertException: ${this.message}`}}function w(t,n){if(!t)throw n=n||"assert",console.log(new Error(n).stack),new g(n)}function E(t,n){t||(n=n||"",console.warn("Verify failed: "+n+`
`+new Error("verify").stack))}function x(t,n,o,i){let r,e=(o[0]-t[0])/n[0],u=(i[0]-t[0])/n[0];e>u&&(r=e,e=u,u=r);let s=(o[1]-t[1])/n[1],f=(i[1]-t[1])/n[1];if(s>f&&(r=s,s=f,f=r),e>f||s>u)return!1;s>e&&(e=s),f<u&&(u=f);let c=(o[2]-t[2])/n[2],h=(i[2]-t[2])/n[2];return c>h&&(r=c,c=h,h=r),!(e>h||c>u)&&(h<u&&(u=h),!(u<0))}function y(t,n,o,i,r,e=l()){const u=(i[r]-o[r])*(n[0]-t[0])-(i[0]-o[0])*(n[r]-t[r]),s=(i[0]-o[0])*(t[r]-o[r])-(i[r]-o[r])*(t[0]-o[0]);if(u===0)return!1;const f=s/u;return e[0]=t[0]+f*(n[0]-t[0]),e[1]=t[r]+f*(n[r]-t[r]),!0}function d(t,n,o,i,r){r||(r=t),a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=1,M(a,a,n),r.length>2&&(r[2]=-a[2]),M(a,a,o),w(a[3]!==0),r[0]=a[0]/a[3],r[1]=a[1]/a[3],r[2]=a[2]/a[3],r[0]=(.5*r[0]+.5)*i[2]+i[0],r[1]=(.5*r[1]+.5)*i[3]+i[1]}function v(t,n){return Math.log(t)/Math.log(n)}function A(t,n,o,i){t[12]=n,t[13]=o,t[14]=i}function S(t){return t[0]===1&&t[1]===0&&t[2]===0&&t[3]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[7]===0&&t[8]===0&&t[9]===0&&t[10]===1&&t[11]===0&&t[15]===1}function V(t,n,o){return 2*Math.atan(Math.sqrt(n*n+o*o)*Math.tan(.5*t)/n)}function b(t,n,o){return 2*Math.atan(Math.sqrt(n*n+o*o)*Math.tan(.5*t)/o)}function j(t,n,o){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(n*n+o*o))}function z(t,n,o){return 2*Math.atan(o*Math.tan(.5*t)/Math.sqrt(n*n+o*o))}export{S as M,x as c,w as e,v as f,j as g,A as h,d as i,z as k,V as l,b as m,E as s,y as u};
