import{e as t,y as o,n as s}from"./cast-fcb46737.js";import{d as p}from"./HandleOwner-9b396af1.js";import"./typedArrayUtil-4d7bb04c.js";import"./ArrayPool-a8ee9378.js";let e=class extends p{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const r=this.get("tileStore.tileScheme.spatialReference");return r&&r.toJSON()||null}};t([o({readOnly:!0})],e.prototype,"supportsTileUpdates",null),t([o({constructOnly:!0})],e.prototype,"remoteClient",void 0),t([o({constructOnly:!0})],e.prototype,"service",void 0),t([o()],e.prototype,"spatialReference",null),t([o({constructOnly:!0})],e.prototype,"tileInfo",void 0),t([o({constructOnly:!0})],e.prototype,"tileStore",void 0),e=t([s("esri.views.2d.layers.features.processors.BaseProcessor")],e);const a=e;export{a as p};
