import{n as t}from"./ShaderBuilder-a7d0da4e.js";import{O as v}from"./VertexAttribute-9c5c630d.js";function n(i,o=!0){i.attributes.add(v.POSITION,"vec2"),o&&i.varyings.add("uv","vec2"),i.vertex.code.add(t`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${o?t`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}export{n as o};
