import{i as P}from"./executionError-fb3f283a.js";import{eD as v,eE as c,eF as b,eG as W,er as E,eH as $}from"./index-51930907.js";class l{}var _;l.instance=new v("Etc/UTC"),function(i){i.TimeZoneNotRecognised="TimeZoneNotRecognised"}(_||(_={}));const H={[_.TimeZoneNotRecognised]:"Timezone identifier has not been recognised."};class F extends Error{constructor(e,t){super(P(H[e],t)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,F)}}let G=class a{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}static fromParts(e=0,t=1,n=1,m=0,s=0,r=0,d=0,D){if(isNaN(e)||isNaN(t)||isNaN(n)||isNaN(m)||isNaN(s)||isNaN(r)||isNaN(d))return null;let f=0;const w=c.local(e,t).daysInMonth;n<1&&(f=n-1,n=1),n>w&&(f=n-w,n=w);let u=0;t>12?(u=t-12,t=12):t<1&&(u=t-1,t=1);let h=0;s>59?(h=s-59,s=59):s<0&&(h=s,s=0);let T=0;r>59?(T=r-59,r=59):r<0&&(T=r,r=0);let I=0;d>999?(I=d-999,d=999):d<0&&(I=d,d=0);let o=c.fromObject({day:n,year:e,month:t,hour:m,minute:s,second:r,millisecond:d},{zone:y(D)});return u!==0&&(o=o.plus({months:u})),f!==0&&(o=o.plus({days:f})),h!==0&&(o=o.plus({minutes:h})),T!==0&&(o=o.plus({seconds:T})),I!==0&&(o=o.plus({milliseconds:I})),new a(o)}static get systemTimeZoneCanonicalName(){return Intl.DateTimeFormat().resolvedOptions().timeZone??"system"}static arcadeDateAndZoneToArcadeDate(e,t){const n=y(t);return e.isUnknownTimeZone||n===l.instance?a.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,n):new a(e._date.setZone(t))}static dateJSToArcadeDate(e){return new a(c.fromJSDate(e,{zone:"system"}))}static dateJSAndZoneToArcadeDate(e,t="system"){return new a(c.fromJSDate(e,{zone:t}))}static unknownEpochToArcadeDate(e){return new a(c.fromMillis(e,{zone:l.instance}))}static unknownDateJSToArcadeDate(e){return new a(c.fromMillis(e.getTime(),{zone:l.instance}))}static epochToArcadeDate(e,t="system"){return new a(c.fromMillis(e,{zone:t}))}static dateTimeToArcadeDate(e){return new a(e)}changeTimeZone(e){const t=y(e);return a.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,t){const n=y(t);return e.zone===l.instance||n===l.instance?a.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,n):new a(e.setZone(n))}static nowToArcadeDate(e){return new a(c.fromJSDate(new Date,{zone:e}))}static nowUTCToArcadeDate(){return new a(c.utc())}get isSystem(){return this.timeZone==="system"||this.timeZone===a.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===l.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday;return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return"unknown";if(this._date.zone.type==="system")return"system";const e=this.zone;return e.type==="fixed"?e.fixed===0?"utc":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new a(this._date.plus(e))}diff(e,t="milliseconds"){return this._date.diff(e._date,t)[t]}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toFormat(e,t){return this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLString(){return"timestamp '"+this._date.toFormat("yyyy-LL-dd HH:mm:ss")+"'"}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new a(this._date.toUTC())}toLocal(){return new a(this._date.toLocal())}toString(){return this.toISOString(!0)}};function y(i){if(i instanceof b)return i;if(i.toLowerCase()==="system")return"system";if(i.toLowerCase()==="utc")return"utc";if(i.toLowerCase()==="unknown")return l.instance;if(/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(i)){const t=W.parseSpecifier("UTC"+(i.startsWith("+")||i.startsWith("-")?"":"+")+i);if(t)return t}const e=v.create(i);if(!e.isValid)throw new F(_.TimeZoneNotRecognised);return e}function V(i){return i!=null&&i.timeZoneIANA?i==null?void 0:i.timeZoneIANA:i!=null&&i.timeZone?$(i,""):""}class R{constructor(){this.dateTimeReferenceMetaData=null,this._fieldTimeZoneIndex={},this._fieldIndex=null,this._ianaPreferred=null,this._ianaTimeInfo=null,this._ianaEditFields=null,this._ianaLayerDateFields=null}static create(e,t){const n=new R;return n.dateTimeReferenceMetaData=t,n._fieldIndex=e instanceof E?e:new E(e),n}static createFromLayer(e){var n,m,s,r;if(!e)return null;if(!e.fieldsIndex)return!e.declaredClass&&e.fields?R.create(e.fields,e):null;const t=new R;return t._fieldIndex=e.fieldsIndex,t.dateTimeReferenceMetaData={timeInfo:((n=e==null?void 0:e.timeInfo)==null?void 0:n.toJSON())??null,editFieldsInfo:((m=e==null?void 0:e.editFieldsInfo)==null?void 0:m.toJSON())??null,dateFieldsTimeReference:((s=e==null?void 0:e.dateFieldsTimeReference)==null?void 0:s.toJSON())??null,preferredTimeReference:((r=e==null?void 0:e.preferredTimeReference)==null?void 0:r.toJSON())??null,datesInUnknownTimezone:(e==null?void 0:e.datesInUnknownTimezone)===!0},t}fieldTimeZone(e){var r,d,D,f,w,u,h,T,I,o,N,g,k,S,A,M,p,z,U,O,J,x,L;const t=(r=this._fieldIndex)==null?void 0:r.get(e);if(!t||t.type!=="date"&&t.type!=="esriFieldTypeDate")return null;const n=this._fieldTimeZoneIndex[t.name];if(n!==void 0)return n;const m=[{field:(D=(d=this.dateTimeReferenceMetaData)==null?void 0:d.editFieldsInfo)==null?void 0:D.creationDateField,timeReference:(w=(f=this.dateTimeReferenceMetaData)==null?void 0:f.editFieldsInfo)==null?void 0:w.dateFieldsTimeReference,isunknown:((u=this.dateTimeReferenceMetaData)==null?void 0:u.datesInUnknownTimezone)===!0},{field:(T=(h=this.dateTimeReferenceMetaData)==null?void 0:h.editFieldsInfo)==null?void 0:T.editDateField,timeReference:(o=(I=this.dateTimeReferenceMetaData)==null?void 0:I.editFieldsInfo)==null?void 0:o.dateFieldsTimeReference,isunknown:((N=this.dateTimeReferenceMetaData)==null?void 0:N.datesInUnknownTimezone)===!0},{field:(k=(g=this.dateTimeReferenceMetaData)==null?void 0:g.timeInfo)==null?void 0:k.startTimeField,timeReference:(A=(S=this.dateTimeReferenceMetaData)==null?void 0:S.timeInfo)==null?void 0:A.timeReference,isunknown:((M=this.dateTimeReferenceMetaData)==null?void 0:M.datesInUnknownTimezone)===!0},{field:(z=(p=this.dateTimeReferenceMetaData)==null?void 0:p.timeInfo)==null?void 0:z.endTimeField,timeReference:(O=(U=this.dateTimeReferenceMetaData)==null?void 0:U.timeInfo)==null?void 0:O.timeReference,isunknown:((J=this.dateTimeReferenceMetaData)==null?void 0:J.datesInUnknownTimezone)===!0}];for(const Z of m)if(Z.field===t.name){const C=this.convertToIANA(Z.timeReference,Z.isunknown);return this._fieldTimeZoneIndex[t.name]=C,C}const s=this.convertToIANA((x=this.dateTimeReferenceMetaData)==null?void 0:x.dateFieldsTimeReference,(L=this.dateTimeReferenceMetaData)==null?void 0:L.datesInUnknownTimezone);return this._fieldTimeZoneIndex[t.name]=s,s}convertToIANA(e,t){return t?"unknown":V(e)}get layerPreferredTimeZone(){var t,n;if(this._ianaPreferred!==null)return this._ianaPreferred;this._ianaPreferred="";const e=(t=this.dateTimeReferenceMetaData)==null?void 0:t.preferredTimeReference;return this._ianaPreferred=this.convertToIANA(e,((n=this.dateTimeReferenceMetaData)==null?void 0:n.datesInUnknownTimezone)===!0),this._ianaPreferred}get layerTimeInfoTimeZone(){var t,n;if(this._ianaTimeInfo!==null)return this._ianaTimeInfo;this._ianaTimeInfo="";const e=(n=(t=this.dateTimeReferenceMetaData)==null?void 0:t.timeInfo)==null?void 0:n.timeReference;return this._ianaTimeInfo=this.convertToIANA(e,!1),this._ianaTimeInfo}get layerEditFieldsTimeZone(){var t,n,m;if(this._ianaEditFields!==null)return this._ianaEditFields;this._ianaEditFields="";const e=(n=(t=this.dateTimeReferenceMetaData)==null?void 0:t.editFieldsInfo)==null?void 0:n.dateFieldsTimeReference;return this._ianaEditFields=this.convertToIANA(e,(m=this.dateTimeReferenceMetaData)==null?void 0:m.datesInUnknownTimezone),this._ianaEditFields}get layerDateFieldsTimeZone(){var t,n;if(this._ianaLayerDateFields!==null)return this._ianaLayerDateFields;this._ianaLayerDateFields="";const e=(t=this.dateTimeReferenceMetaData)==null?void 0:t.dateFieldsTimeReference;return this._ianaLayerDateFields=this.convertToIANA(e,((n=this.dateTimeReferenceMetaData)==null?void 0:n.datesInUnknownTimezone)===!0),this._ianaLayerDateFields}}export{R as T,G as c,y as u};
