import{W as p,ac as i,ad as y,af as u}from"./index-b4cf3b73.js";import{n as h}from"./LayerView3D-63bb62b8.js";import{c as f}from"./TiledLayerView3D-21328d8b.js";import{u as v}from"./LayerView-f81022d3.js";let e=class extends f(h(v)){constructor(){super(...arguments),this.type="elevation-3d"}get tileInfo(){return this.layer.tileInfo}initialize(){var s,r,o,l,n;const a=(r=(s=this.view)==null?void 0:s.map)==null?void 0:r.allLayers,d=a&&a.includes(this.layer),t=(n=(l=(o=this.view)==null?void 0:o.map)==null?void 0:l.ground)==null?void 0:n.layers,m=t&&t.includes(this.layer);if(d&&!m){const c=new p("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(c))}this._addTilingSchemeMatchPromise()}};i([y()],e.prototype,"layer",void 0),i([y()],e.prototype,"tileInfo",null),e=i([u("esri.views.3d.layers.ElevationLayerView3D")],e);const P=e;export{P as default};