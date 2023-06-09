import{ac as o,ad as a,af as d,ak as t}from"./index-70f3b4f7.js";import{f as l}from"./WhereClause-7b531fbf.js";import{o as p}from"./I3SUtil-2a0bd2c4.js";const x="updating";function g(s){return s==="updating"?null:s}function c(s){return s==="updating"}const y=s=>{let n=class extends s{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=i=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&t.getLogger(this.declaredClass).error("Error while evaluating definitionExpression: "+i),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&t.getLogger(this.declaredClass).error("Further errors are ignored")}}get parsedDefinitionExpression(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{const i=l.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!i.isStandardized)return t.getLogger(this.declaredClass).error("definitionExpression is using non standard function"),null;const r=[],e=i.fieldNames;return p(e,this.i3slayer.fields,{missingFields:r}),r.length>0?(t.getLogger(this.declaredClass).error(`definitionExpression references unknown fields: ${r.join(", ")}`),null):(this._definitionExpressionErrors=0,i)}catch(i){return t.getLogger(this.declaredClass).error("Failed to parse definitionExpression: "+i),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(i,r){try{return i.testFeature(r)}catch(e){return this.logError(e),!1}}_addDefinitionExpressionToQuery(i){if(!this.parsedDefinitionExpression)return i;const r=this.i3slayer.definitionExpression,e=i.clone();return e.where?e.where=`(${r}) AND (${e.where})`:e.where=r,e}};return o([a()],n.prototype,"i3slayer",void 0),o([a({readOnly:!0})],n.prototype,"parsedDefinitionExpression",null),o([a({readOnly:!0})],n.prototype,"definitionExpressionFields",null),n=o([d("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],n),n};export{g as a,x as n,y as t,c as u};