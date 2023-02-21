import{V as y,P as p,Y as c,w as h,E as d,t as F,e as A,am as f,y as s}from"./arcadeUtils-e61dca8e.js";import{WhereClause as l}from"./WhereClause-d4b8b019.js";import"./geometry-b7901087.js";import"./ArrayPool-a8ee9378.js";import"./string-a318751c.js";import"./typedArrayUtil-4d7bb04c.js";import"./Error-ec6249b9.js";import"./Extent-da876e26.js";import"./cast-fcb46737.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-1e54421e.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-ff2d7c6b.js";import"./typeUtils-35750739.js";import"./jsonMap-7b8332c9.js";import"./preload-helper-3bce6601.js";import"./number-8d860409.js";import"./locale-30120714.js";import"./Field-61ec9870.js";import"./enumeration-3a03bd31.js";import"./fieldType-f31285f7.js";import"./jsonUtils-229211af.js";import"./featureConversionUtils-03a03f40.js";import"./OptimizedFeature-4ab8d380.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./request-6fc81c4c.js";import"./unitUtils-45d1147c.js";import"./hash-0ddfbf4b.js";import"./Portal-2bb189b3.js";import"./Loadable-268c900a.js";import"./Promise-376ab9f6.js";import"./PortalGroup-8e41557a.js";import"./PortalUser-659cc1d2.js";import"./sizeVariableUtils-d4870b0d.js";async function u(n,r,e,t,a,o){if(t.length===1){if(c(t[0]))return f(n,t[0],s(t[1],-1));if(d(t[0]))return f(n,t[0].toArray(),s(t[1],-1))}else if(t.length===2){if(c(t[0]))return f(n,t[0],s(t[1],-1));if(d(t[0]))return f(n,t[0].toArray(),s(t[1],-1));if(p(t[0])){const i=await t[0].load(),m=await g(l.create(t[1],i.getFieldsIndex()),o,a);return t[0].calculateStatistic(n,m,s(t[2],1e3),r.abortSignal)}}else if(t.length===3&&p(t[0])){const i=await t[0].load(),m=await g(l.create(t[1],i.getFieldsIndex()),o,a);return t[0].calculateStatistic(n,m,s(t[2],1e3),r.abortSignal)}return f(n,t,-1)}async function g(n,r,e){const t=n.getVariables();if(t.length>0){const a=[];for(let i=0;i<t.length;i++){const m={name:t[i]};a.push(await r.evaluateIdentifier(e,m))}const o={};for(let i=0;i<t.length;i++)o[t[i]]=a[i];return n.parameters=o,n}return n}function tt(n){n.mode==="async"&&(n.functions.stdev=function(r,e){return n.standardFunctionAsync(r,e,(t,a,o)=>u("stdev",t,a,o,r,n))},n.functions.variance=function(r,e){return n.standardFunctionAsync(r,e,(t,a,o)=>u("variance",t,a,o,r,n))},n.functions.average=function(r,e){return n.standardFunctionAsync(r,e,(t,a,o)=>u("mean",t,a,o,r,n))},n.functions.mean=function(r,e){return n.standardFunctionAsync(r,e,(t,a,o)=>u("mean",t,a,o,r,n))},n.functions.sum=function(r,e){return n.standardFunctionAsync(r,e,(t,a,o)=>u("sum",t,a,o,r,n))},n.functions.min=function(r,e){return n.standardFunctionAsync(r,e,(t,a,o)=>u("min",t,a,o,r,n))},n.functions.max=function(r,e){return n.standardFunctionAsync(r,e,(t,a,o)=>u("max",t,a,o,r,n))},n.functions.count=function(r,e){return n.standardFunctionAsync(r,e,(t,a,o)=>{if(y(o,1,1,r,e),p(o[0]))return o[0].count(t.abortSignal);if(c(o[0])||h(o[0]))return o[0].length;if(d(o[0]))return o[0].length();throw new F(r,A.InvalidParameter,e)})})}export{tt as registerFunctions};
