import{fa as o,v as r,cp as i}from"./index-70f3b4f7.js";import{e as s}from"./centroid-64edd0f5.js";const n={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new o(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(r(t.centroid)&&(t.centroid=s(new i,t.geometry,e.hasZ,e.hasM)),t.centroid)};export{n as i};