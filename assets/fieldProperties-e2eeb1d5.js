import{s as r}from"./Error-ec6249b9.js";import{y as s}from"./Field-61ec9870.js";import{r as n}from"./FieldsIndex-f104cc5f.js";import{T as l}from"./fieldUtils-7f54c4b1.js";function h(){return{fields:{type:[s],value:null},fieldsIndex:{readOnly:!0,get(){return new n(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){var t;const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const i of e)((t=this.fieldsIndex)==null?void 0:t.has(i))||r.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${i} found in outFields`,{layer:this,outFields:e});return l(this.fieldsIndex,e)}}}}export{h as s};
