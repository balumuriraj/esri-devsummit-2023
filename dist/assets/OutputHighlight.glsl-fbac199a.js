import{r as t}from"./vec4f64-e407da96.js";import{u as a,a as g,i as d}from"./Texture2DPassUniform-753de459.js";import{n as i}from"./ShaderBuilder-a7d0da4e.js";const l=t(1,1,0,1),h=t(1,0,1,1);function s(o,e){o.fragment.uniforms.add(a("depthTex",(c,r)=>r.highlightDepthTexture,e.hasWebGL2Context?g.None:g.InvSize)),o.fragment.constants.add("occludedHighlightFlag","vec4",l).add("unoccludedHighlightFlag","vec4",h),o.fragment.code.add(i`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${d(e,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}export{s as a,h as i};
