import{E as q}from"./EmitterShapeBase-4KcS34Iy.js";import{M as c}from"./index-iGDHt5zD.js";const s=.25,m=2,I=Math.PI*m,x=2,E=.5;class b extends q{constructor(t,a,e,r){super(t,a,e,r)}async init(){}randomPosition(){const t=this.size,a=this.fill,e=this.position,r=(i,n)=>{const o=c()*s,h=Math.atan(n/i*Math.tan(I*o)),l=c();return l<s?h:l<m*s?Math.PI-h:l<m*s+s?Math.PI+h:-h},g=(i,n,o)=>i*n/Math.sqrt((n*Math.cos(o))**x+(i*Math.sin(o))**x),[M,d]=[t.width*E,t.height*E],u=r(M,d),p=g(M,d,u),f=a?p*Math.sqrt(c()):p;return{position:{x:e.x+f*Math.cos(u),y:e.y+f*Math.sin(u)}}}}class w{generate(t,a,e,r){return new b(t,a,e,r)}}export{w as EmittersCircleShapeGenerator};
