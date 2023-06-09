import{$ as l,R as _,ep as h,kI as p,dO as u,g0 as f,fT as g,ge as I}from"./calcite-c5ae4991.js";class P{constructor(t,r,a,e){var s;this._parsedUrl=t,this._portalItem=r,this._apiKey=a,this.signal=e,this._rootDocument=null;const n=(s=this._parsedUrl)==null?void 0:s.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);n&&(this._urlParts={root:n[1],layerId:parseInt(n[2],10)})}async fetch(){if(!this._urlParts)return null;const t=this._portalItem??await this._portalItemFromServiceItemId();if(l(t))return this._loadFromUrl();const r=await this._findAndLoadRelatedPortalItem(t);return l(r)?null:this._loadFeatureLayerFromPortalItem(r)}async fetchPortalItem(){if(!this._urlParts)return null;const t=this._portalItem??await this._portalItemFromServiceItemId();return l(t)?null:this._findAndLoadRelatedPortalItem(t)}async _fetchRootDocument(){if(_(this._rootDocument))return this._rootDocument;if(l(this._urlParts))return this._rootDocument={},{};const t={query:{f:"json",token:this._apiKey},responseType:"json",signal:this.signal},r=`${this._urlParts.root}/SceneServer`;try{const a=await h(r,t);this._rootDocument=a.data}catch{this._rootDocument={}}return this._rootDocument}async _fetchServiceOwningPortalUrl(){var e,n;const t=(e=this._parsedUrl)==null?void 0:e.path,r=t?(n=p)==null?void 0:n.findServerInfo(t):null;if(r!=null&&r.owningSystemUrl)return r.owningSystemUrl;const a=t?t.replace(/(.*\/rest)\/.*/i,"$1")+"/info":null;try{const s=(await h(a,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(s)return s}catch(s){u(s)}return null}async _findAndLoadRelatedPortalItem(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find(r=>r.type==="Feature Service")||null}catch(r){return u(r),null}}async _loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const r=await this._findMatchingAssociatedSublayerUrl(t.url??"");return new f({url:r,portalItem:t}).load({signal:this.signal})}async _loadFromUrl(){var r;const t=await this._findMatchingAssociatedSublayerUrl(`${(r=this._urlParts)==null?void 0:r.root}/FeatureServer`);return new f({url:t}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(t){var y;const r=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),a={query:{f:"json"},responseType:"json",authMode:"no-prompt",signal:this.signal},e=(y=this._urlParts)==null?void 0:y.layerId,n=this._fetchRootDocument(),s=h(r,a),[d,m]=await Promise.all([s,n]),c=m&&m.layers,i=d.data&&d.data.layers;if(!Array.isArray(i))throw new Error("expected layers array");if(Array.isArray(c)){for(let o=0;o<Math.min(c.length,i.length);o++)if(c[o].id===e)return`${r}/${i[o].id}`}else if(e!=null&&e<i.length)return`${r}/${i[e].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const t=(await this._fetchRootDocument()).serviceItemId;if(!t)return null;const r=new g({id:t,apiKey:this._apiKey}),a=await this._fetchServiceOwningPortalUrl();_(a)&&(r.portal=new I({url:a}));try{return r.load({signal:this.signal})}catch(e){return u(e),null}}}export{P as l};
