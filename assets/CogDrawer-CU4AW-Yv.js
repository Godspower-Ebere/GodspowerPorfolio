import{Z as T,K as c}from"./index-iGDHt5zD.js";const R=2,l=Math.PI*R,I=0,g={x:0,y:0},f=.005;function h(d){const{context:o,particle:n,radius:e}=d;if(n.cogHoleRadius===void 0||n.cogInnerRadius===void 0||n.cogInnerTaper===void 0||n.cogNotches===void 0||n.cogOuterTaper===void 0)return;const i=e*n.cogHoleRadius/T;o.globalCompositeOperation="destination-out",o.beginPath(),o.moveTo(i,g.y),o.arc(g.x,g.y,i,I,l),o.closePath(),o.fill(),o.globalCompositeOperation="source-over"}function p(d){const{context:o,particle:n,radius:e}=d;if(n.cogHoleRadius===void 0||n.cogInnerRadius===void 0||n.cogInnerTaper===void 0||n.cogNotches===void 0||n.cogOuterTaper===void 0)return;const i=l/(n.cogNotches*R),a=i*n.cogInnerTaper*f,t=i*n.cogOuterTaper*f,u=e*n.cogInnerRadius/T;let r=i,s=!1;for(o.moveTo(e*Math.cos(t),e*Math.sin(t));r<=l;r+=i)s?(o.lineTo(u*Math.cos(r-a),u*Math.sin(r-a)),o.lineTo(e*Math.cos(r+t),e*Math.sin(r+t))):(o.lineTo(e*Math.cos(r-t),e*Math.sin(r-t)),o.lineTo(u*Math.cos(r+a),u*Math.sin(r+a))),s=!s}const M=44,m=72,O=35,H=7,b=50;class x{afterDraw(o){h(o)}draw(o){p(o)}particleInit(o,n){const e=n.shapeData;n.cogHoleRadius=c((e==null?void 0:e.holeRadius)??M),n.cogInnerRadius=c((e==null?void 0:e.innerRadius)??m),n.cogInnerTaper=c((e==null?void 0:e.innerTaper)??O),n.cogNotches=c((e==null?void 0:e.notches)??H),n.cogOuterTaper=c((e==null?void 0:e.outerTaper)??b)}}export{x as CogDrawer};
