import{ac as n,af as a,bs as d}from"./index-51930907.js";import{T as o}from"./enums-b1d611e3.js";import{n as h}from"./BaseGraphicContainer-3c39d579.js";let t=class extends h{doRender(e){e.drawPhase===o.HIGHLIGHT&&super.doRender(e)}renderChildren(e){if(this.attributeView.update(),!this.children.some(s=>s.hasData))return;this.attributeView.bindTextures(e.context),super.renderChildren(e);const{painter:i}=e,r=i.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(d.COLOR_BUFFER_BIT),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};t=n([a("esri.views.2d.layers.support.HighlightGraphicContainer")],t);const u=t;export{u as n};
