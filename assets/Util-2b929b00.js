import{t as C,f as w,m as B,P as A,k as y,E as D,ao as d,u as b,q as k,br as q,a_ as V,aB as F,aC as G}from"./calcite-c5ae4991.js";import{s as H,c as h}from"./sphere-5ce3b13c.js";function j(t){return t?{origin:C(t.origin),vector:C(t.vector)}:{origin:w(),vector:w()}}function I(t,n){const r=L.get();return r.origin=t,r.vector=n,r}function T(t,n=j()){return J(t.origin,t.vector,n)}function J(t,n,r=j()){return k(r.origin,t),k(r.vector,n),r}function U(t,n,r=j()){return k(r.origin,t),B(r.vector,n,t),r}function W(t,n){const r=B(h.get(),n,t.origin),o=A(t.vector,r),i=A(t.vector,t.vector),c=d(o/i,0,1),a=B(h.get(),y(h.get(),t.vector,c),r);return A(a,a)}function X(t,n,r){return K(t,n,0,1,r)}function Y(t,n,r){return b(r,t.origin,y(r,t.vector,n))}function K(t,n,r,o,i){const{vector:c,origin:a}=t,u=B(h.get(),n,a),g=A(c,u)/D(c);return y(i,c,d(g,r,o)),b(i,i,t.origin)}function Z(t,n){if(_(t,I(n.origin,n.direction),!1,E)){const{tA:r,pB:o,distance2:i}=E;if(r>=0&&r<=1)return i;if(r<0)return q(t.origin,o);if(r>1)return q(b(h.get(),t.origin,t.vector),o)}return null}function tt(t,n,r){return!!_(t,n,!0,E)&&(k(r,E.pA),!0)}function _(t,n,r,o){const c=t.origin,a=b(h.get(),c,t.vector),u=n.origin,g=b(h.get(),u,n.vector),v=h.get(),e=h.get();if(v[0]=c[0]-u[0],v[1]=c[1]-u[1],v[2]=c[2]-u[2],e[0]=g[0]-u[0],e[1]=g[1]-u[1],e[2]=g[2]-u[2],Math.abs(e[0])<1e-6&&Math.abs(e[1])<1e-6&&Math.abs(e[2])<1e-6)return!1;const s=h.get();if(s[0]=a[0]-c[0],s[1]=a[1]-c[1],s[2]=a[2]-c[2],Math.abs(s[0])<1e-6&&Math.abs(s[1])<1e-6&&Math.abs(s[2])<1e-6)return!1;const P=v[0]*e[0]+v[1]*e[1]+v[2]*e[2],m=e[0]*s[0]+e[1]*s[1]+e[2]*s[2],z=v[0]*s[0]+v[1]*s[1]+v[2]*s[2],x=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],S=(s[0]*s[0]+s[1]*s[1]+s[2]*s[2])*x-m*m;if(Math.abs(S)<1e-6)return!1;let $=(P*m-z*x)/S,l=(P+m*$)/x;r&&($=d($,0,1),l=d(l,0,1));const p=h.get(),M=h.get();return p[0]=c[0]+$*s[0],p[1]=c[1]+$*s[1],p[2]=c[2]+$*s[2],M[0]=u[0]+l*e[0],M[1]=u[1]+l*e[1],M[2]=u[2]+l*e[2],o.tA=$,o.tB=l,o.pA=p,o.pB=M,o.distance2=q(p,M),!0}const E={tA:0,tB:0,pA:w(),pB:w(),distance2:0},L=new H(()=>j()),f=F();class N{constructor(n){this.message=n}toString(){return`AssertException: ${this.message}`}}function O(t,n){if(!t){n=n||"Assertion";const r=new Error(n).stack;throw new N(`${n} at ${r}`)}}function nt(t,n){t||(n=n||"",console.warn("Verify failed: "+n+`
`+new Error("verify").stack))}function rt(t,n,r,o){let i,c=(r[0]-t[0])/n[0],a=(o[0]-t[0])/n[0];c>a&&(i=c,c=a,a=i);let u=(r[1]-t[1])/n[1],g=(o[1]-t[1])/n[1];if(u>g&&(i=u,u=g,g=i),c>g||u>a)return!1;u>c&&(c=u),g<a&&(a=g);let v=(r[2]-t[2])/n[2],e=(o[2]-t[2])/n[2];return v>e&&(i=v,v=e,e=i),!(c>e||v>a)&&(e<a&&(a=e),!(a<0))}function it(t,n,r,o,i,c=G()){const a=(o[i]-r[i])*(n[0]-t[0])-(o[0]-r[0])*(n[i]-t[i]),u=(o[0]-r[0])*(t[i]-r[i])-(o[i]-r[i])*(t[0]-r[0]);if(a===0)return!1;const g=u/a;return c[0]=t[0]+g*(n[0]-t[0]),c[1]=t[i]+g*(n[i]-t[i]),!0}function ot(t,n,r,o,i){f[0]=t[0],f[1]=t[1],f[2]=t[2],f[3]=1,V(f,f,n),i.length>2&&(i[2]=-f[2]),V(f,f,r),O(f[3]!==0),i[0]=f[0]/f[3],i[1]=f[1]/f[3],i[2]=f[2]/f[3],i[0]=(.5*i[0]+.5)*o[2]+o[0],i[1]=(.5*i[1]+.5)*o[3]+o[1]}function et(t,n){return Math.log(t)/Math.log(n)}function ct(t,n,r,o){t[12]=n,t[13]=r,t[14]=o}function at(t){return t[0]===1&&t[1]===0&&t[2]===0&&t[3]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[7]===0&&t[8]===0&&t[9]===0&&t[10]===1&&t[11]===0&&t[15]===1}export{K as A,Z as B,W as M,et as a,U as b,nt as c,Y as d,T as e,it as f,ct as h,rt as i,X as j,tt as k,at as l,J as m,O as s,ot as u,j as v};
