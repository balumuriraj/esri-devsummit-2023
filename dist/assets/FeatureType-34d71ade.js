import{e as r,y as i,n as m,l as a}from"./cast-fcb46737.js";import{i as l}from"./Clonable-545593ce.js";import"./typedArrayUtil-4d7bb04c.js";import"./ArrayPool-a8ee9378.js";import{o as d,r as y}from"./Extent-da876e26.js";import{t as c}from"./Field-61ec9870.js";import{p as u}from"./FeatureTemplate-c1d0bb70.js";let o=class extends l(a){constructor(t){super(t),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(t){const e={};for(const s of Object.keys(t))e[s]=c(t[s]);return e}writeDomains(t,e){var p;const s={};for(const n of Object.keys(t))t[n]&&(s[n]=(p=t[n])==null?void 0:p.toJSON());e.domains=s}};r([i({json:{write:!0}})],o.prototype,"id",void 0),r([i({json:{write:!0}})],o.prototype,"name",void 0),r([i({json:{write:!0}})],o.prototype,"domains",void 0),r([d("domains")],o.prototype,"readDomains",null),r([y("domains")],o.prototype,"writeDomains",null),r([i({type:[u],json:{write:!0}})],o.prototype,"templates",void 0),o=r([m("esri.layers.support.FeatureType")],o);const O=o;export{O as n};
