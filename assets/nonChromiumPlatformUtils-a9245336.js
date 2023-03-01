import{h as O}from"./tooltip-49c2c990.js";import"./index-51930907.js";import"./debounce-d5abe404.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.7
 */function V(t){return!a(t)||u(t).position==="fixed"?null:I(t)}function I(t){let{offsetParent:n}=t,o=t,i=!1;for(;o&&o!==n;){const{assignedSlot:e}=o;if(e){let s=e.offsetParent;if(u(e).display==="contents"){const c=e.hasAttribute("style"),r=e.style.display;e.style.display=u(o).display,s=e.offsetParent,e.style.display=r,c||e.removeAttribute("style")}o=e,n!==s&&(n=s,i=!0)}else if(g(o)&&o.host&&i)break;o=g(o)&&o.host||o.parentNode}return n}function it(t){const{reference:n,floating:o,strategy:i}=t;return{reference:q(n,k(o),i),floating:{...F(o),x:0,y:0}}}function S(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function d(t){if(t==null)return window;if(!S(t)){const n=t.ownerDocument;return n&&n.defaultView||window}return t}function u(t){return d(t).getComputedStyle(t)}function p(t){return S(t)?"":t?(t.nodeName||"").toLowerCase():""}function B(){const t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(n=>n.brand+"/"+n.version).join(" "):navigator.userAgent}function a(t){return t instanceof d(t).HTMLElement}function w(t){return t instanceof d(t).Element}function Y(t){return t instanceof d(t).Node}function g(t){if(typeof ShadowRoot>"u")return!1;const n=d(t).ShadowRoot;return t instanceof n||t instanceof ShadowRoot}function N(t){const{overflow:n,overflowX:o,overflowY:i,display:e}=u(t);return/auto|scroll|overlay|hidden/.test(n+i+o)&&!["inline","contents"].includes(e)}function j(t){return["table","td","th"].includes(p(t))}function $(t){const n=/firefox/i.test(B()),o=u(t);return o.transform!=="none"||o.perspective!=="none"||n&&o.willChange==="filter"||n&&(o.filter?o.filter!=="none":!1)||["transform","perspective"].some(i=>o.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const e=o.contain;return e!=null?e.includes(i):!1})}function _(){return!/^((?!chrome|android).)*safari/i.test(B())}function T(t){return["html","body","#document"].includes(p(t))}const H=Math.min,m=Math.max,x=Math.round;function y(t,n,o){var i,e,s,c;n===void 0&&(n=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect();let l=1,f=1;n&&a(t)&&(l=t.offsetWidth>0&&x(r.width)/t.offsetWidth||1,f=t.offsetHeight>0&&x(r.height)/t.offsetHeight||1);const v=w(t)?d(t):window,h=!_()&&o,C=(r.left+(h&&(i=(e=v.visualViewport)==null?void 0:e.offsetLeft)!=null?i:0))/l,L=(r.top+(h&&(s=(c=v.visualViewport)==null?void 0:c.offsetTop)!=null?s:0))/f,E=r.width/l,D=r.height/f;return{width:E,height:D,top:L,right:C+E,bottom:L+D,left:C,x:C,y:L}}function b(t){return((Y(t)?t.ownerDocument:t.document)||window.document).documentElement}function A(t){return w(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function M(t){return y(b(t)).left+A(t).scrollLeft}function U(t){const n=y(t);return x(n.width)!==t.offsetWidth||x(n.height)!==t.offsetHeight}function q(t,n,o){const i=a(n),e=b(n),s=y(t,i&&U(n),o==="fixed");let c={scrollLeft:0,scrollTop:0};const r={x:0,y:0};if(i||!i&&o!=="fixed")if((p(n)!=="body"||N(e))&&(c=A(n)),a(n)){const l=y(n,!0);r.x=l.x+n.clientLeft,r.y=l.y+n.clientTop}else e&&(r.x=M(e));return{x:s.left+c.scrollLeft-r.x,y:s.top+c.scrollTop-r.y,width:s.width,height:s.height}}function W(t){return p(t)==="html"?t:t.assignedSlot||t.parentNode||(g(t)?t.host:null)||b(t)}function z(t){let n=W(t);for(g(n)&&(n=n.host);a(n)&&!T(n);){if($(n))return n;{const o=n.parentNode;n=g(o)?o.host:o}}return null}function k(t){const n=d(t);let o=V(t);for(;o&&j(o)&&u(o).position==="static";)o=V(o);return o&&(p(o)==="html"||p(o)==="body"&&u(o).position==="static"&&!$(o))?n:o||z(t)||n}function F(t){if(a(t))return{width:t.offsetWidth,height:t.offsetHeight};const n=y(t);return{width:n.width,height:n.height}}function G(t,n){const o=d(t),i=b(t),e=o.visualViewport;let s=i.clientWidth,c=i.clientHeight,r=0,l=0;if(e){s=e.width,c=e.height;const f=_();(f||!f&&n==="fixed")&&(r=e.offsetLeft,l=e.offsetTop)}return{width:s,height:c,x:r,y:l}}function J(t){var n;const o=b(t),i=A(t),e=(n=t.ownerDocument)==null?void 0:n.body,s=m(o.scrollWidth,o.clientWidth,e?e.scrollWidth:0,e?e.clientWidth:0),c=m(o.scrollHeight,o.clientHeight,e?e.scrollHeight:0,e?e.clientHeight:0);let r=-i.scrollLeft+M(t);const l=-i.scrollTop;return u(e||o).direction==="rtl"&&(r+=m(o.clientWidth,e?e.clientWidth:0)-s),{width:s,height:c,x:r,y:l}}function P(t){const n=W(t);return T(n)?t.ownerDocument.body:a(n)&&N(n)?n:P(n)}function X(t,n){var o;n===void 0&&(n=[]);const i=P(t),e=i===((o=t.ownerDocument)==null?void 0:o.body),s=d(i),c=e?[s].concat(s.visualViewport||[],N(i)?i:[]):i,r=n.concat(c);return e?r:r.concat(X(c))}function K(t,n){const o=n.getRootNode==null?void 0:n.getRootNode();if(t.contains(n))return!0;if(o&&g(o)){let i=n;do{if(i&&t===i)return!0;i=i.parentNode||i.host}while(i)}return!1}function Q(t,n){let o=t;for(;o&&!T(o)&&!n.includes(o)&&!(w(o)&&["absolute","fixed"].includes(u(o).position));){const i=W(o);o=g(i)?i.host:i}return o}function Z(t,n){const o=y(t,!1,n==="fixed"),i=o.top+t.clientTop,e=o.left+t.clientLeft;return{top:i,left:e,x:e,y:i,right:e+t.clientWidth,bottom:i+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}function R(t,n,o){return n==="viewport"?O(G(t,o)):w(n)?Z(n,o):O(J(b(t)))}function tt(t){const n=X(t),o=Q(t,n);let i=null;if(o&&a(o)){const e=k(o);N(o)?i=o:a(e)&&(i=e)}return w(i)?n.filter(e=>i&&w(e)&&K(e,i)&&p(e)!=="body"):[]}function rt(t){let{element:n,boundary:o,rootBoundary:i,strategy:e}=t;const c=[...o==="clippingAncestors"?tt(n):[].concat(o),i],r=c[0],l=c.reduce((f,v)=>{const h=R(n,v,e);return f.top=m(h.top,f.top),f.right=H(h.right,f.right),f.bottom=H(h.bottom,f.bottom),f.left=m(h.left,f.left),f},R(n,r,e));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}export{rt as getClippingRect,it as getElementRects,k as getOffsetParent};
