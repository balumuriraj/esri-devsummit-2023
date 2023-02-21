import{s as xt}from"./jsonMap-7b8332c9.js";import{t as Q,e as Mt,r as ft,P as ut}from"./typedArrayUtil-4d7bb04c.js";import{r as at,g as tt}from"./pixelUtils-d9cd2e49.js";import"./geometry-b7901087.js";import{h as W}from"./string-a318751c.js";import{s as yt}from"./Error-ec6249b9.js";import{m as kt}from"./mathUtils-b4bb77e2.js";import{f as bt}from"./promiseUtils-1e54421e.js";import{b as At,a as It}from"./Extent-da876e26.js";const K=new Map;K.set("meter-per-second",1),K.set("kilometer-per-hour",.277778),K.set("knots",.514444),K.set("feet-per-second",.3048),K.set("mile-per-hour",.44704);const ot=180/Math.PI,it=5,et=new xt({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function st(t,n){return K.get(t)/K.get(n)||1}function mt(t){return(450-t)%360}function dt(t,n="geographic"){const[o,c]=t,i=Math.sqrt(o*o+c*c);let a=Math.atan2(c,o)*ot;return a=(360+a)%360,n==="geographic"&&(a=mt(a)),[i,a]}function pt(t,n="geographic"){let o=t[1];n==="geographic"&&(o=mt(o)),o%=360;const c=t[0];return[c*Math.cos(o/ot),c*Math.sin(o/ot)]}function Gt(t,n,o,c="geographic"){if(!at(t)||Q(o))return t;const i=n==="vector-magdir"?t.clone():Mt(lt(t,n)),a=i.pixels[1];for(let m=0;m<a.length;m++)a[m]=c==="geographic"?(a[m]+o[m]+270)%360:(a[m]+360-o[m])%360;return n==="vector-magdir"?i:lt(i,"vector-magdir")}function lt(t,n,o="geographic",c=1){if(!at(t))return t;const{pixels:i,width:a,height:m}=t,h=a*m,l=i[0],e=i[1],r=t.pixelType.startsWith("f")?t.pixelType:"f32",s=tt.createEmptyBand(r,h),d=tt.createEmptyBand(r,h);let u=0;for(let b=0;b<m;b++)for(let k=0;k<a;k++)n==="vector-uv"?([s[u],d[u]]=dt([l[u],e[u]],o),s[u]*=c):([s[u],d[u]]=pt([l[u],e[u]],o),s[u]*=c,d[u]*=c),u++;const g=new tt({pixelType:r,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:[s,d]});return g.updateStatistics(),g}function Qt(t,n,o=1){if(o===1||!at(t))return t;const c=t.clone(),{pixels:i,width:a,height:m}=c,h=i[0],l=i[1];let e=0;for(let r=0;r<m;r++)for(let s=0;s<a;s++)n==="vector-uv"?(h[e]*=o,l[e]*=o):h[e]*=o,e++;return c.updateStatistics(),c}function Yt(t,n,o,c,i){if(Q(i)||!i.spatialReference.equals(t.spatialReference))return{extent:t,width:Math.round(n/c),height:Math.round(o/c),resolution:t.width/n};const a=i.xmin,m=i.ymax,h=(t.xmax-t.xmin)/n*c,l=(t.ymax-t.ymin)/o*c,e=(h+l)/2;return t.xmin=a+Math.floor((t.xmin-a)/h)*h,t.xmax=a+Math.ceil((t.xmax-a)/h)*h,t.ymin=m+Math.floor((t.ymin-m)/l)*l,t.ymax=m+Math.ceil((t.ymax-m)/l)*l,{extent:t,width:Math.round(t.width/h),height:Math.round(t.height/l),resolution:e}}const vt=gt(0,0,0);function gt(t=0,n=0,o=Math.PI,c=!0){c&&(o=(2*Math.PI-o)%(2*Math.PI));const i=c?-1:1,a=13*i,m=-7*i,h=-2*i,l=-16*i,e=21.75,[r,s]=O(0,n+a,o,e),[d,u]=O(t-5.5,n+m,o,e),[g,b]=O(t+5.5,n+m,o,e),[k,I]=O(t-1.5,n+h,o,e),[y,w]=O(t+1.5,n+h,o,e),[x,f]=O(t-1.5,n+l,o,e),[p,A]=O(t+1.5,n+l,o,e);return[r,s,d,u,k,I,y,w,g,b,x,f,p,A]}function Pt(t=0,n=Math.PI,o=!0){o&&(n=(2*Math.PI-n)%(2*Math.PI));const c=10,i=o?-1:1,a=5*i,m=20*i,h=25*i,l=45,e=0,r=0,s=2,d=0,u=s*i,g=o?1:-1,b=c/2*g;let[k,I]=[e+b,r-m],[y,w]=[k+s*g,I],[x,f]=[y-d*g,w+u],[p,A]=[e-b,r-h],[M,P]=[p+d*g,A-u],v=Math.ceil(t/it),U=Math.floor(v/10);v-=8*U;const F=[],_=[];for(let J=0;J<v/2;J++,U--){U<=0&&v%2==1&&J===(v-1)/2&&(p=e,M=p+d*g,A=(A+I)/2,P=A-u);const[C,Y]=O(p,A,n,l);if(U>0){const[z,X]=O(y,A,n,l),[G,$]=O(k,I,n,l);F.push(z),F.push(X),F.push(C),F.push(Y),F.push(G),F.push($)}else{const[z,X]=O(y,w,n,l),[G,$]=O(x,f,n,l),[L,nt]=O(M,P,n,l);_.push(C),_.push(Y),_.push(L),_.push(nt),_.push(G),_.push($),_.push(z),_.push(X)}A+=a,I+=a,w+=a,f+=a,P+=a}const[T,S]=O(e+b,r+m,n,l),D=(c/2+s)*g,[V,q]=O(e+D,r+m,n,l),[B,E]=O(e+b,r-h,n,l),[N,j]=O(e+D,r-h,n,l);return{pennants:F,barbs:_,shaft:[T,S,V,q,B,E,N,j]}}function O(t,n,o,c=1){const i=Math.sqrt(t*t+n*n)/c,a=(2*Math.PI+Math.atan2(n,t))%(2*Math.PI);return[i,(2*Math.PI+a-o)%(2*Math.PI)]}const Z=[0,1,3,6,10,16,21,27,33,40,47,55,63],Dt=[0,.5,1,1.5,2],Ft=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function H(t,n,o,c){const i=st(c||"knots",o);let a;for(a=1;a<n.length;a++)if(a===n.length-1){if(t<n[a]*i)break}else if(t<=n[a]*i)break;return Math.min(a-1,n.length-2)}function St(t,n,o,c,i){let a=0;switch(n){case"beaufort_kn":a=H(t,Z,"knots",o);break;case"beaufort_km":a=H(t,Z,"kilometer-per-hour",o);break;case"beaufort_ft":a=H(t,Z,"feet-per-second",o);break;case"beaufort_m":a=H(t,Z,"meter-per-second",o);break;case"classified_arrow":a=H(t,i??[],c,o);break;case"ocean_current_m":a=H(t,Dt,"meter-per-second",o);break;case"ocean_current_kn":a=H(t,Ft,"knots",o)}return a}function Vt(t,n){const{style:o,inputUnit:c,outputUnit:i,breakValues:a}=n,m=et.fromJSON(c),h=et.fromJSON(i),l=7*6,e=15;let r=0,s=0;const{width:d,height:u,mask:g}=t,b=t.pixels[0],k=t.pixels[1],I=ft(g)?g.filter(f=>f>0).length:d*u,y=new Float32Array(I*l),w=new Uint32Array(e*I),x=n.invertDirection?gt(0,0,0,!1):vt;for(let f=0;f<u;f++)for(let p=0;p<d;p++){const A=f*d+p;if(!g||g[f*d+p]){const M=(k[A]+360)%360/180*Math.PI,P=St(b[A],o,m,h,a);for(let U=0;U<x.length;U+=2)y[r++]=(p+.5)/d,y[r++]=(f+.5)/u,y[r++]=x[U],y[r++]=x[U+1]+M,y[r++]=P,y[r++]=b[A];const v=7*(r/l-1);w[s++]=v,w[s++]=v+1,w[s++]=v+2,w[s++]=v+0,w[s++]=v+4,w[s++]=v+3,w[s++]=v+0,w[s++]=v+2,w[s++]=v+3,w[s++]=v+2,w[s++]=v+5,w[s++]=v+3,w[s++]=v+5,w[s++]=v+6,w[s++]=v+3}}return{vertexData:y,indexData:w}}const rt=[];function Ut(t,n){if(rt.length===0)for(let u=0;u<30;u++)rt.push(Pt(5*u,0,!n.invertDirection));const o=st(et.fromJSON(n.inputUnit),"knots"),{width:c,height:i,mask:a}=t,m=t.pixels[0],h=t.pixels[1],l=6,e=[],r=[];let s=0,d=0;for(let u=0;u<i;u++)for(let g=0;g<c;g++){const b=u*c+g,k=m[b]*o;if((!a||a[u*c+g])&&k>=it){const I=(h[b]+360)%360/180*Math.PI,{pennants:y,barbs:w,shaft:x}=rt[Math.min(Math.floor(k/5),29)];if(y.length+w.length===0)continue;let f=e.length/l;const p=(g+.5)/c,A=(u+.5)/i;for(let M=0;M<y.length;M+=2)e[s++]=p,e[s++]=A,e[s++]=y[M],e[s++]=y[M+1]+I,e[s++]=0,e[s++]=k;for(let M=0;M<w.length;M+=2)e[s++]=p,e[s++]=A,e[s++]=w[M],e[s++]=w[M+1]+I,e[s++]=0,e[s++]=k;for(let M=0;M<x.length;M+=2)e[s++]=p,e[s++]=A,e[s++]=x[M],e[s++]=x[M+1]+I,e[s++]=0,e[s++]=k;for(let M=0;M<y.length/6;M++)r[d++]=f,r[d++]=f+1,r[d++]=f+2,f+=3;for(let M=0;M<w.length/8;M++)r[d++]=f,r[d++]=f+1,r[d++]=f+2,r[d++]=f+1,r[d++]=f+2,r[d++]=f+3,f+=4;r[d++]=f+0,r[d++]=f+1,r[d++]=f+2,r[d++]=f+1,r[d++]=f+3,r[d++]=f+2,f+=4}}return{vertexData:new Float32Array(e),indexData:new Uint32Array(r)}}function _t(t,n){let c=0,i=0;const{width:a,height:m,mask:h}=t,l=t.pixels[0],e=[],r=[],s=st(et.fromJSON(n.inputUnit),"knots"),d=n.style==="wind_speed"?it:Number.MAX_VALUE;for(let u=0;u<m;u++)for(let g=0;g<a;g++){const b=l[u*a+g]*s;if((!h||h[u*a+g])&&b<d){for(let I=0;I<4;I++)e[c++]=(g+.5)/a,e[c++]=(u+.5)/m,e[c++]=I<2?-.5:.5,e[c++]=I%2==0?-.5:.5,e[c++]=0,e[c++]=b;const k=4*(c/24-1);r[i++]=k,r[i++]=k+1,r[i++]=k+2,r[i++]=k+1,r[i++]=k+2,r[i++]=k+3}}return{vertexData:new Float32Array(e),indexData:new Uint32Array(r)}}function Zt(t,n){return n.style==="simple_scalar"?_t(t,n):n.style==="wind_speed"?Ut(t,n):Vt(t,n)}function te(t,n,o,c=[0,0],i=.5){const{width:a,height:m,mask:h}=t,[l,e]=t.pixels,[r,s]=c,d=Math.round((a-r)/o),u=Math.round((m-s)/o),g=d*u,b=new Float32Array(g),k=new Float32Array(g),I=new Uint8Array(g),y=n==="vector-uv";for(let x=0;x<u;x++)for(let f=0;f<d;f++){let p=0;const A=x*d+f,M=Math.max(0,x*o+s),P=Math.max(0,f*o+r),v=Math.min(m,M+o),U=Math.min(a,P+o);for(let F=M;F<v;F++)for(let _=P;_<U;_++){const T=F*a+_;if(!h||h[T]){p++;const S=y?[l[T],e[T]]:[l[T],(360+e[T])%360],[D,V]=y?S:pt(S);b[A]+=D,k[A]+=V}}if(p>=(v-M)*(U-P)*(1-i)){I[A]=1;const[F,_]=dt([b[A]/p,k[A]/p]);b[A]=F,k[A]=_}else I[A]=0,b[A]=0,k[A]=0}const w=new tt({width:d,height:u,pixels:[b,k],mask:I});return w.updateStatistics(),w}const R=yt.getLogger("esri.views.2d.engine.flow.dataUtils"),qt=10;async function ee(t,n,o,c){const i=performance.now(),a=$t(n,o),m=performance.now(),h=Ot(n,a,o.width,o.height),l=performance.now(),e=Nt(h,!0),r=performance.now(),s=t==="Streamlines"?Bt(e,qt):Rt(e),d=performance.now();return W("esri-2d-profiler")&&(R.info("I.1","_createFlowFieldFromData (ms)",Math.round(m-i)),R.info("I.2","_getStreamlines (ms)",Math.round(l-m)),R.info("I.3","createAnimatedLinesData (ms)",Math.round(r-l)),R.info("I.4","create{Streamlines|Particles}Mesh (ms)",Math.round(d-r)),R.info("I.5","createFlowMesh (ms)",Math.round(d-i)),R.info("I.6","Mesh size (bytes)",s.vertexData.buffer.byteLength+s.indexData.buffer.byteLength)),await Promise.resolve(),bt(c),s}function $t(t,n){const o=Tt(n.data,n.width,n.height,t.smoothing);return t.interpolate?(c,i)=>{const a=Math.floor(c),m=Math.floor(i);if(a<0||a>=n.width)return[0,0];if(m<0||m>=n.height)return[0,0];const h=c-a,l=i-m,e=a,r=m,s=a<n.width-1?a+1:a,d=m<n.height-1?m+1:m,u=o[2*(r*n.width+e)],g=o[2*(r*n.width+s)],b=o[2*(d*n.width+e)],k=o[2*(d*n.width+s)],I=o[2*(r*n.width+e)+1],y=o[2*(r*n.width+s)+1];return[(u*(1-l)+b*l)*(1-h)+(g*(1-l)+k*l)*h,(I*(1-l)+o[2*(d*n.width+e)+1]*l)*(1-h)+(y*(1-l)+o[2*(d*n.width+s)+1]*l)*h]}:(c,i)=>{const a=Math.round(c),m=Math.round(i);return a<0||a>=n.width||m<0||m>=n.height?[0,0]:[o[2*(m*n.width+a)+0],o[2*(m*n.width+a)+1]]}}function Lt(t,n,o,c,i,a,m,h,l){const e=[];let r=o,s=c,d=0,[u,g]=n(r,s);u*=t.velocityScale,g*=t.velocityScale;const b=Math.sqrt(u*u+g*g);let k,I;e.push({x:r,y:s,t:d,speed:b});for(let y=0;y<t.verticesPerLine;y++){let[w,x]=n(r,s);w*=t.velocityScale,x*=t.velocityScale;const f=Math.sqrt(w*w+x*x);if(f<t.minSpeedThreshold)return e;const p=w/f,A=x/f;if(r+=p*t.segmentLength,s+=A*t.segmentLength,d+=t.segmentLength/f,Math.acos(p*k+A*I)>t.maxTurnAngle)return e;if(t.collisions){const M=Math.round(r*l),P=Math.round(s*l);if(M<0||M>m-1||P<0||P>h-1)return e;const v=a[P*m+M];if(v!==-1&&v!==i)return e;a[P*m+M]=i}e.push({x:r,y:s,t:d,speed:f}),k=p,I=A}return e}function Ot(t,n,o,c){const i=[],a=new ut,m=1/Math.max(t.lineCollisionWidth,1),h=Math.round(o*m),l=Math.round(c*m),e=new Int32Array(h*l);for(let s=0;s<e.length;s++)e[s]=-1;const r=[];for(let s=0;s<c;s+=t.lineSpacing)for(let d=0;d<o;d+=t.lineSpacing)r.push({x:d,y:s,sort:a.getFloat()});r.sort((s,d)=>s.sort-d.sort);for(const{x:s,y:d}of r)if(a.getFloat()<t.density){const u=Lt(t,n,s,d,i.length,e,h,l,m);if(u.length<2)continue;i.push(u)}return i}function Tt(t,n,o,c){if(c===0)return t;const i=Math.round(3*c),a=new Array(2*i+1);let m=0;for(let e=-i;e<=i;e++){const r=Math.exp(-e*e/(c*c));a[e+i]=r,m+=r}for(let e=-i;e<=i;e++)a[e+i]/=m;const h=new Float32Array(t.length);for(let e=0;e<o;e++)for(let r=0;r<n;r++){let s=0,d=0;for(let u=-i;u<=i;u++){if(r+u<0||r+u>=n)continue;const g=a[u+i];s+=g*t[2*(e*n+(r+u))+0],d+=g*t[2*(e*n+(r+u))+1]}h[2*(e*n+r)+0]=s,h[2*(e*n+r)+1]=d}const l=new Float32Array(t.length);for(let e=0;e<n;e++)for(let r=0;r<o;r++){let s=0,d=0;for(let u=-i;u<=i;u++){if(r+u<0||r+u>=o)continue;const g=a[u+i];s+=g*h[2*((r+u)*n+e)+0],d+=g*h[2*((r+u)*n+e)+1]}l[2*(r*n+e)+0]=s,l[2*(r*n+e)+1]=d}return l}function Nt(t,n){const o=new ut,c=t.reduce((l,e)=>l+e.length,0),i=new Float32Array(4*c),a=new Array(t.length);let m=0,h=0;for(const l of t){const e=m;for(const r of l)i[4*m+0]=r.x,i[4*m+1]=r.y,i[4*m+2]=r.t,i[4*m+3]=r.speed,m++;a[h++]={startVertex:e,numberOfVertices:l.length,totalTime:l[l.length-1].t,timeSeed:n?o.getFloat():0}}return{lineVertices:i,lineDescriptors:a}}function Bt(t,n){const{lineVertices:c,lineDescriptors:i}=t;let a=0,m=0;for(const u of i)a+=2*u.numberOfVertices,m+=6*(u.numberOfVertices-1);const h=new Float32Array(a*9),l=new Uint32Array(m);let e=0,r=0;function s(){l[r++]=e-2,l[r++]=e,l[r++]=e-1,l[r++]=e,l[r++]=e+1,l[r++]=e-1}function d(u,g,b,k,I,y,w,x){const f=e*9;let p=0;h[f+p++]=u,h[f+p++]=g,h[f+p++]=1,h[f+p++]=b,h[f+p++]=y,h[f+p++]=w,h[f+p++]=k/2,h[f+p++]=I/2,h[f+p++]=x,e++,h[f+p++]=u,h[f+p++]=g,h[f+p++]=-1,h[f+p++]=b,h[f+p++]=y,h[f+p++]=w,h[f+p++]=-k/2,h[f+p++]=-I/2,h[f+p++]=x,e++}for(const u of i){const{totalTime:g,timeSeed:b}=u;let k=null,I=null,y=null,w=null,x=null,f=null;for(let p=0;p<u.numberOfVertices;p++){const A=c[4*(u.startVertex+p)+0],M=c[4*(u.startVertex+p)+1],P=c[4*(u.startVertex+p)+2],v=c[4*(u.startVertex+p)+3];let U=null,F=null,_=null,T=null;if(p>0){U=A-k,F=M-I;const S=Math.sqrt(U*U+F*F);if(U/=S,F/=S,p>1){let D=U+x,V=F+f;const q=Math.sqrt(D*D+V*V);D/=q,V/=q;const B=Math.min(1/(D*U+V*F),n);D*=B,V*=B,_=-V,T=D}else _=-F,T=U;_!==null&&T!==null&&(d(k,I,y,_,T,g,b,v),s())}k=A,I=M,y=P,x=U,f=F,w=v}d(k,I,y,-f,x,g,b,w)}return{vertexData:h,indexData:l}}function Rt(t){const{lineVertices:i,lineDescriptors:a}=t;let m=0,h=0;for(const S of a){const D=S.numberOfVertices-1;m+=4*D*2,h+=6*D*2}const l=new Float32Array(m*16),e=new Uint32Array(h);let r,s,d,u,g,b,k,I,y,w,x,f,p,A,M=0,P=0;function v(){e[P++]=M-8,e[P++]=M-7,e[P++]=M-6,e[P++]=M-7,e[P++]=M-5,e[P++]=M-6,e[P++]=M-4,e[P++]=M-3,e[P++]=M-2,e[P++]=M-3,e[P++]=M-1,e[P++]=M-2}function U(S,D,V,q,B,E,N,j,J,C,Y,z,X,G){const $=M*16;let L=0;for(const nt of[1,2])for(const wt of[1,2,3,4])l[$+L++]=S,l[$+L++]=D,l[$+L++]=V,l[$+L++]=q,l[$+L++]=N,l[$+L++]=j,l[$+L++]=J,l[$+L++]=C,l[$+L++]=nt,l[$+L++]=wt,l[$+L++]=X,l[$+L++]=G,l[$+L++]=B/2,l[$+L++]=E/2,l[$+L++]=Y/2,l[$+L++]=z/2,M++}function F(S,D){let V=y+x,q=w+f;const B=Math.sqrt(V*V+q*q);V/=B,q/=B;const E=y*V+w*q;V/=E,q/=E;let N=x+p,j=f+A;const J=Math.sqrt(N*N+j*j);N/=J,j/=J;const C=x*N+f*j;N/=C,j/=C,U(r,s,d,u,-q,V,g,b,k,I,-j,N,S,D),v()}function _(S,D,V,q,B,E){if(y=x,w=f,x=p,f=A,y==null&&w==null&&(y=x,w=f),g!=null&&b!=null){p=S-g,A=D-b;const N=Math.sqrt(p*p+A*A);p/=N,A/=N}y!=null&&w!=null&&F(B,E),r=g,s=b,d=k,u=I,g=S,b=D,k=V,I=q}function T(S,D){y=x,w=f,x=p,f=A,y==null&&w==null&&(y=x,w=f),y!=null&&w!=null&&F(S,D)}for(const S of a){r=null,s=null,d=null,u=null,g=null,b=null,k=null,I=null,y=null,w=null,x=null,f=null,p=null,A=null;const{totalTime:D,timeSeed:V}=S;for(let q=0;q<S.numberOfVertices;q++)_(i[4*(S.startVertex+q)+0],i[4*(S.startVertex+q)+1],i[4*(S.startVertex+q)+2],i[4*(S.startVertex+q)+3],D,V);T(D,V)}return{vertexData:l,indexData:e}}function ct(t,n){const o=n.pixels,{width:c,height:i}=n,a=new Float32Array(c*i*2),m=n.mask||new Uint8Array(c*i*2);if(n.mask||m.fill(255),t==="vector-uv")for(let h=0;h<c*i;h++)a[2*h+0]=o[0][h],a[2*h+1]=-o[1][h];else if(t==="vector-magdir")for(let h=0;h<c*i;h++){const l=o[0][h],e=kt(o[1][h]),r=Math.cos(e-Math.PI/2),s=Math.sin(e-Math.PI/2);a[2*h+0]=r*l,a[2*h+1]=s*l}return{data:a,mask:m,width:c,height:i}}async function ne(t,n,o,c,i,a){const m=performance.now(),h=At(n.spatialReference);if(!h){const x=await ht(t,n,o,c,i,a);return W("esri-2d-profiler")&&R.info("I.7","loadImagery, early exit (ms)",Math.round(performance.now()-m)),W("esri-2d-profiler")&&R.info("I.9","Number of parts",1),x}const[l,e]=h.valid,r=e-l,s=Math.ceil(n.width/r),d=n.width/s,u=Math.round(o/s);let g=n.xmin;const b=[],k=performance.now();for(let x=0;x<s;x++){const f=new It({xmin:g,xmax:g+d,ymin:n.ymin,ymax:n.ymax,spatialReference:n.spatialReference});b.push(ht(t,f,u,c,i,a)),g+=d}const I=await Promise.all(b);W("esri-2d-profiler")&&R.info("I.8","All calls to _fetchPart (ms)",Math.round(performance.now()-k)),W("esri-2d-profiler")&&R.info("I.9","Number of parts",I.length);const y={data:new Float32Array(o*c*2),mask:new Uint8Array(o*c),width:o,height:c};let w=0;for(const x of I){for(let f=0;f<x.height;f++)for(let p=0;p<x.width;p++)w+p>=o||(y.data[2*(f*o+w+p)+0]=x.data[2*(f*x.width+p)+0],y.data[2*(f*o+w+p)+1]=x.data[2*(f*x.width+p)+1],y.mask[f*o+w+p]=x.mask[f*x.width+p]);w+=x.width}return W("esri-2d-profiler")&&R.info("I.10","loadImagery, general exit (ms)",Math.round(performance.now()-m)),y}async function ht(t,n,o,c,i,a){const m={requestProjectedLocalDirections:!0,signal:a};if(ft(i)&&(m.timeExtent=i),t.type==="imagery"){await t.load({signal:a});const e=t.rasterInfo.dataType,r=await t.fetchImage(n,o,c,m);return!r||Q(r.pixelData)||Q(r.pixelData.pixelBlock)?{data:new Float32Array(o*c*2),mask:new Uint8Array(o*c),width:o,height:c}:ct(e,r.pixelData.pixelBlock)}await t.load({signal:a});const h=t.rasterInfo.dataType,l=await t.fetchPixels(n,o,c,m);return!l||Q(l.pixelBlock)?{data:new Float32Array(o*c*2),mask:new Uint8Array(o*c),width:o,height:c}:ct(h,l.pixelBlock)}export{_t as D,Zt as F,ne as a,dt as b,et as c,lt as d,ee as f,Qt as g,te as j,st as l,Gt as m,Yt as x};
