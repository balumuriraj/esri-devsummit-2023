import"./ArrayPool-a8ee9378.js";import"./Extent-da876e26.js";import"./string-a318751c.js";import"./mathUtils-b4bb77e2.js";import"./Query-b96bcde0.js";import"./TileKey-5aef17b6.js";function s(l,c,i,p){const o=l.clone(),t=1<<o.level,r=o.col+c,m=o.row+i;return p&&r<0?(o.col=r+t,o.world-=1):r>=t?(o.col=r-t,o.world+=1):o.col=r,o.row=m,o}export{s as l};
