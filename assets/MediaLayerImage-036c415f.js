import{r as y,j as $,a as _}from"./index-00759e4a.js";import{_ as R}from"./MapView-ee19e5d5.js";import{e as n,y as o,j as b,a as A,v as H,l as U,h as O,b as P,c as k,W as S,n as f,i as V,s as N,L as j,w as E}from"./calcite-8912bd40.js";import{w as K,x as T,v as B}from"./MediaLayer-4c42fc2f.js";import{P as W,h as X,C as Y}from"./prism-line-numbers-eff41b13.js";import{p as L}from"./ClipRect-59ab066a.js";import"./unitBezier-881ac1eb.js";import"./TileStrategy-90354c21.js";import"./TileStore-9a3ccc75.js";import"./TileInfoView-9dfc6c79.js";import"./MediaElementView-06baa4d4.js";import"./mat3f64-50f3b9f6.js";import"./normalizeUtilsSync-3ea564a9.js";import"./resourceExtension-f31d9f10.js";import"./BoundsStore-00da37da.js";import"./PooledRBush-5a11bc7e.js";import"./label2-a2f37e65.js";import"./interactive-1de2e238.js";import"./loadable-6afd516d.js";import"./t9n-81df3a71.js";import"./observers-c89705b8.js";import"./icon-8e47fbec.js";import"./loader-c773e800.js";import"./guid-51402ee7.js";function G(i,e){const t=10**e;return Math.round(i*t)/t}const C={left:0,right:0,top:0,bottom:0};let h=class extends H{constructor(e){super(e),this._leadingClips=new Map,this._trailingClips=new Map,this.direction="horizontal",this.leadingLayers=new b,this.max=100,this.min=0,this.precision=4,this.step=.5,this.stepMultiplier=10,this.trailingLayers=new b,this.view=null}initialize(){this.addHandles([U(()=>{var e;return[this.view,(e=this.view)==null?void 0:e.ready,this.position,this.direction]},()=>this._clipLayers(),O),P(()=>this.leadingLayers,"change",()=>this._clipLeadingLayers()),P(()=>this.trailingLayers,"change",()=>this._clipTrailingLayers())])}destroy(){this._removeExistingClips()}get position(){return 25}set position(e){const{precision:t,min:r,max:d}=this;this._set("position",G(Math.max(Math.min(e,d),r),t))}get state(){const{view:e}=this;return e&&e.ready?"ready":"disabled"}_clipLayers(){this._clipLeadingLayers(),this._clipTrailingLayers()}_clipLeadingLayers(){this._removeClips("leading");const{leadingLayers:e}=this;e.forEach(t=>this._clipLayer({layer:t,type:"leading"}))}_clipTrailingLayers(){this._removeClips("trailing");const{trailingLayers:e}=this;e.forEach(t=>this._clipLayer({layer:t,type:"trailing"}))}async _getLayerView(e){const{view:t}=this;if(!e||!t)return null;const r=await t.whenLayerView(e);return"clips"in r?r:null}_getVerticalClipRect(e){const{position:t}=this;return e==="leading"?new L({...C,bottom:100-t+"%"}):e==="trailing"?new L({...C,top:`${t}%`}):null}_getHorizontalClipRect(e){const{position:t}=this;return e==="leading"?new L({...C,right:100-t+"%"}):e==="trailing"?new L({...C,left:`${t}%`}):null}_getClipRect(e){const{direction:t}=this;return t==="vertical"?this._getVerticalClipRect(e):t==="horizontal"?this._getHorizontalClipRect(e):null}async _clipLayer(e){const{_leadingClips:t,_trailingClips:r}=this,{layer:d,type:a}=e,l=a==="trailing"?r:a==="leading"?t:null,s=await this._getLayerView(d);if(!(s&&"clips"in s&&l&&s.hasOwnProperty("clips")))return;const g=l.get(s);g&&s.clips.remove(g);const u=this._getClipRect(a);u&&(l.set(s,u),s.clips.add(u))}_removeClips(e){const{_leadingClips:t,_trailingClips:r}=this,d=e==="trailing"?r:e==="leading"?t:null;d&&(d.forEach((a,l)=>{l&&l.hasOwnProperty("clips")&&l.clips.remove(a)}),d.clear())}_removeExistingClips(){this._removeClips("leading"),this._removeClips("trailing")}};n([o()],h.prototype,"direction",void 0),n([o({type:b,nonNullable:!0})],h.prototype,"leadingLayers",void 0),n([o({readOnly:!0})],h.prototype,"max",void 0),n([o({readOnly:!0})],h.prototype,"min",void 0),n([o()],h.prototype,"position",null),n([o()],h.prototype,"precision",void 0),n([o({readOnly:!0})],h.prototype,"state",null),n([o()],h.prototype,"step",void 0),n([o()],h.prototype,"stepMultiplier",void 0),n([o({type:b,nonNullable:!0})],h.prototype,"trailingLayers",void 0),n([o()],h.prototype,"view",void 0),h=n([A("esri.widgets.Swipe.SwipeViewModel")],h);const I=h,w="esri-swipe",p={base:w,baseDisabled:`${w}--disabled`,vertical:`${w}--vertical`,horizontal:`${w}--horizontal`,container:`${w}__container`,divider:`${w}__divider`,handle:`${w}__handle`,handleHidden:`${w}__handle--hidden`,widgetIcon:"esri-icon-up-down-arrows",handleIcon:`${w}__handle-icon`,dragIconHorizontal:"esri-icon-drag-horizontal",dragIconVertical:"esri-icon-drag-vertical",widget:"esri-widget",disabled:"esri-disabled"},D={handle:!0,divider:!0};let c=class extends S{constructor(i,e){super(i,e),this.disabled=!1,this.iconClass=p.widgetIcon,this.messages=null,this.viewModel=new I,this._pointerOffset=0,this._container=null,this._onContainerPointerDown=this._onContainerPointerDown.bind(this),this._onContainerPointerMove=this._onContainerPointerMove.bind(this),this._onContainerPointerUp=this._onContainerPointerUp.bind(this)}get direction(){return this.viewModel.direction}set direction(i){this.viewModel.direction=i}get dragLabel(){var i;return((i=this.messages)==null?void 0:i.dragLabel)??""}set dragLabel(i){this._overrideIfSome("dragLabel",i)}get label(){var i;return((i=this.messages)==null?void 0:i.widgetLabel)??""}set label(i){this._overrideIfSome("label",i)}get leadingLayers(){return this.viewModel.leadingLayers}set leadingLayers(i){this.viewModel.leadingLayers=i}get position(){return this.viewModel.position}set position(i){this.viewModel.position=i}get trailingLayers(){return this.viewModel.trailingLayers}set trailingLayers(i){this.viewModel.trailingLayers=i}get view(){return this.viewModel.view}set view(i){this.viewModel.view=i}set visibleElements(i){this._set("visibleElements",{...D,...i})}get visibleElements(){return this._get("visibleElements")||D}render(){const{state:i,direction:e}=this.viewModel,t=i==="disabled"||this.disabled,r={[p.disabled]:t,[p.baseDisabled]:t,[p.vertical]:e==="vertical",[p.horizontal]:e==="horizontal"};return f("div",{class:this.classes(p.base,p.widget,r)},i==="disabled"?null:this.renderContainer())}renderHandle(){const{direction:i}=this.viewModel,{visibleElements:e}=this,t={[p.dragIconHorizontal]:i==="vertical",[p.dragIconVertical]:i==="horizontal"},r=this.classes(p.handle,!e.handle&&p.handleHidden);return f("div",{key:"handle",role:"presentation",class:r},f("span",{"aria-hidden":"true",class:this.classes(p.handleIcon,t)}))}renderDivider(){const{visibleElements:i}=this;return i&&i.divider?f("div",{key:"divider",role:"presentation",class:p.divider}):null}renderContent(){return[this.renderDivider(),this.renderHandle()]}renderContainer(){const{disabled:i,dragLabel:e,viewModel:t}=this,{max:r,min:d,direction:a,position:l}=t,s=`${l}%`,g={top:a==="vertical"?s:void 0,left:a==="vertical"?void 0:s},u=this.renderContent();return f("div",i?{key:"container",role:"presentation",styles:g,class:p.container}:{tabIndex:0,key:"container",bind:this,afterCreate:this._afterContainerCreate,onkeydown:this._onContainerKeyDown,"touch-action":"none",role:"slider",title:e,"aria-label":e,"aria-orientation":a,"aria-valuemax":`${r}`,"aria-valuemin":`${d}`,"aria-valuenow":`${l}`,"aria-valuetext":s,styles:g,class:p.container},u)}_afterContainerCreate(i){this._container=i,i.addEventListener("pointerdown",this._onContainerPointerDown)}_calculatePointerOffset(i){const{direction:e}=this,t=i.target,r=(e==="vertical"?t.clientHeight:t.clientWidth)/2,d=t.getBoundingClientRect(),a=i.clientX-d.left,l=i.clientY-d.top;this._pointerOffset=e==="vertical"?l-r:a-r}_onContainerPointerDown(i){i.preventDefault(),this._container&&document.activeElement!==this.container&&this._container.focus(),this._calculatePointerOffset(i),document.addEventListener("pointerup",this._onContainerPointerUp),document.addEventListener("pointermove",this._onContainerPointerMove)}_onContainerPointerUp(i){i.preventDefault(),document.removeEventListener("pointerup",this._onContainerPointerUp),document.removeEventListener("pointermove",this._onContainerPointerMove)}_onContainerPointerMove(i){i.preventDefault();const{_pointerOffset:e,container:t,direction:r}=this,{clientX:d,clientY:a}=i,{top:l,left:s,width:g,height:u}=t.getBoundingClientRect(),v=(r==="vertical"?a-l-e:d-s-e)/(r==="vertical"?u:g)*100;this.position=v}_getKeyPosition(i){const e=V(i),{position:t}=this,{max:r,min:d,step:a,stepMultiplier:l,direction:s}=this.viewModel,g=a*l;return["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"].includes(e)&&(i.preventDefault(),i.stopPropagation()),(s==="vertical"?e==="ArrowDown"||e==="ArrowRight":e==="ArrowUp"||e==="ArrowRight")?t+(i.shiftKey?g:a):(s==="vertical"?e==="ArrowUp"||e==="ArrowLeft":e==="ArrowDown"||e==="ArrowLeft")?t-(i.shiftKey?g:a):e==="Home"?d:e==="End"?r:(s==="vertical"?e==="PageDown":e==="PageUp")?t+g:(s==="vertical"?e==="PageUp":e==="PageDown")?t-g:null}_onContainerKeyDown(i){const e=this._getKeyPosition(i);typeof e=="number"&&(this.position=e)}};n([o()],c.prototype,"direction",null),n([o()],c.prototype,"disabled",void 0),n([o()],c.prototype,"dragLabel",null),n([o()],c.prototype,"iconClass",void 0),n([o()],c.prototype,"label",null),n([o()],c.prototype,"leadingLayers",null),n([o(),k("esri/widgets/Swipe/t9n/Swipe")],c.prototype,"messages",void 0),n([o()],c.prototype,"position",null),n([o()],c.prototype,"trailingLayers",null),n([o()],c.prototype,"view",null),n([o({type:I})],c.prototype,"viewModel",void 0),n([o()],c.prototype,"visibleElements",null),c=n([A("esri.widgets.Swipe")],c);const q=c;function Le(){const i=y.useRef(null),e=y.useRef(null),[t,r]=y.useState(null),[d,a]=y.useState(null);y.useEffect(()=>{l()},[]);async function l(){if(W.highlightAll(),!(i!=null&&i.current))return;N.portalUrl="http://arcgis.com/";const u=new j({basemap:"satellite"}),v=new R({container:i==null?void 0:i.current,map:u,zoom:3});v.ui.add([new X({view:v,content:e==null?void 0:e.current,expanded:!0,group:"group1",expandTooltip:"MediaLayer"})],"top-left"),r(v)}async function s(){const u=new K({image:"Liverpool.png",georeference:new T({extent:new E({spatialReference:{wkid:102100},xmin:-339441.5168570463,ymin:7051887318179514e-9,xmax:-324839.58261292917,ymax:7067371687353565e-9})})}),v=new B({source:[u]});t.map.layers.add(v),await t.when(),await v.when(),a(v);const m=new q({leadingLayers:[v],position:75,view:t});let x=!0,M=0;const z=setInterval(()=>{if(M===2){clearInterval(z);return}x?m.position=m.position-.05:m.position=m.position+.05,m.position===40?x=!1:m.position===75&&(x=!0,M++)},1);t.ui.add(m),t==null||t.goTo(new E({spatialReference:{wkid:102100},xmin:-339441.5168570463,ymin:7051887318179514e-9,xmax:-324839.58261292917,ymax:7067371687353565e-9}).expand(1))}return $("div",{className:"App",children:[_("div",{id:"view",ref:i}),$("div",{ref:e,className:"card",children:[_("p",{className:"title",children:"MediaLayer"}),_("pre",{className:"line-numbers",children:_("code",{className:"language-js",children:`new MediaLayer({ 
  source: new ImageElement({
    image: "/Liverpool.png",
    georeference: 
      new ExtentAndRotationGeoreference({
        extent: new Extent({          
          xmin: -339441.5168570463,
          ymin: 7051887.318179514,
          xmax: -324839.58261292917,
          ymax: 7067371.687353565,
          spatialReference: { 
            wkid: 102100 
          }
        })
      })
  })
});`})}),_(Y,{className:"btn","icon-start":"play",onClick:s})]})]})}export{Le as default};