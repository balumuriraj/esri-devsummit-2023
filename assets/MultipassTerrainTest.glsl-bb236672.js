import{a as i}from"./ReadLinearDepth.glsl-9c87a54a.js";import{f as o,e as n}from"./Texture2DPassUniform-753de459.js";import{n as f}from"./ShaderBuilder-a7d0da4e.js";function p(e,t){t.hasMultipassTerrain&&(e.fragment.include(i),e.fragment.uniforms.add(new o("terrainDepthTexture",(a,r)=>r.multipassTerrain.linearDepthTexture)),e.fragment.uniforms.add(new n("nearFar",(a,r)=>r.camera.nearFar)),e.fragment.uniforms.add(new n("inverseViewport",(a,r)=>r.inverseViewport)),e.fragment.code.add(f`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class u{constructor(){this.enabled=!1,this.cullAboveGround=!1}}export{p as n,u as o};
