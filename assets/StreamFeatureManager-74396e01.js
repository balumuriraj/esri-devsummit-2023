import{s as h}from"./CircularArray-724bafc9.js";import{v as c,r as a,c_ as u,N as p,a5 as m}from"./index-51930907.js";const g="__esri_stream_id__",n="__esri_timestamp__",_=1e3;class f{constructor(t,e,s,i,r=128){this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=s,this._purgeOptions=i,this.store=t,this.objectIdField=e,this.purgeInterval=r,this._useGeneratedIds=this.objectIdField===g}removeById(t){this._removed.push(t)}removeByTrackId(t){const e=this._trackIdToObservations.get(t);if(e)for(const s of e.entries)this._removed.push(s)}add(t){var r;if(this._useGeneratedIds){const o=this._nextId();t.attributes[this.objectIdField]=o,t.objectId=o}else t.objectId=t.attributes[this.objectIdField];const e=t.objectId;if(this._addOrUpdated.set(e,t),this._maxAge=Math.max(this._maxAge,t.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return c(this._trackIdLessObservations)&&(this._trackIdLessObservations=new h(1e5)),void this._trackIdLessObservations.enqueue(e);const s=t.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(s)){const o=a(this._purgeOptions)&&this._purgeOptions.maxObservations!=null?this._purgeOptions.maxObservations:_,d=m(o,0,_);this._trackIdToObservations.set(s,new h(d))}const i=(r=this._trackIdToObservations.get(s))==null?void 0:r.enqueue(e);a(i)&&(this._addOrUpdated.has(i)?this._addOrUpdated.delete(i):this._removed.push(i))}checkForUpdates(){const t=this._getToAdd(),e=this._getToRemove(),s=performance.now();s-this._lastPurge>=this.purgeInterval&&(this._purge(s),this._lastPurge=s);const i=[];if(a(e))for(const o of e){const d=this.store.removeById(o);a(d)&&i.push(d)}const r=[];if(a(t)){const o=new Set(u(e,[]));for(const d of t)o.has(d.objectId)||(d.attributes[n]=s,this.store.add(d),r.push(d))}(r.length||i!=null&&i.length)&&this.store.update(r,i)}_getToAdd(){if(!this._addOrUpdated.size)return null;const t=new Array(this._addOrUpdated.size);let e=0;return this._addOrUpdated.forEach(s=>t[e++]=s),this._addOrUpdated.clear(),t}_getToRemove(){const t=this._removed;return this._removed.length?(this._removed=[],t):null}_nextId(){const t=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,t}_purge(t){const e=this._purgeOptions;a(e)&&(this._purgeSomeByDisplayCount(e),this._purgeByAge(e),this._purgeByAgeReceived(t,e),this._purgeTracks())}_purgeSomeByDisplayCount(t){if(!t.displayCount)return;let e=this.store.size;if(e>t.displayCount){if(this._timeInfo.trackIdField){for(const s of this._trackIdToObservations.values())if(e>t.displayCount&&s.size){const i=p(s.dequeue());this._removed.push(i),e--}}if(a(this._trackIdLessObservations)){let s=e-t.displayCount;for(;s-- >0;){const i=this._trackIdLessObservations.dequeue();a(i)&&this._removed.push(i)}}}}_purgeByAge(t){var r;const e=(r=this._timeInfo)==null?void 0:r.startTimeField;if(!t.age||!e)return;const s=60*t.age*1e3,i=this._maxAge-s;this.store.forEach(o=>{o.attributes[e]<i&&this._removed.push(o.objectId)})}_purgeByAgeReceived(t,e){if(!e.ageReceived)return;const s=t-60*e.ageReceived*1e3;this.store.forEach(i=>{i.attributes[n]<s&&this._removed.push(i.objectId)})}_purgeTracks(){this._trackIdToObservations.forEach((t,e)=>{t.size===0&&this._trackIdToObservations.delete(e)})}}export{f as n};
