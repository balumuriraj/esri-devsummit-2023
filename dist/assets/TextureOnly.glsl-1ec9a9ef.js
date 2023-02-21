import{r as e}from"./vec4f64-e407da96.js";import{o as t}from"./ScreenSpacePass-d5e48a9b.js";import{e as n}from"./Float4PassUniform-d7bdbc81.js";import{t as l,o as m,n as u}from"./ShaderBuilder-a7d0da4e.js";import{f as a}from"./Texture2DPassUniform-753de459.js";class s extends l{constructor(){super(...arguments),this.color=e(1,1,1,1)}}function i(){const o=new m;return o.include(t),o.fragment.uniforms.add([new a("tex",r=>r.texture),new n("uColor",r=>r.color)]),o.fragment.code.add(u`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),o}const g=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:s,build:i},Symbol.toStringTag,{value:"Module"}));export{g as d,s as i,i as l};
