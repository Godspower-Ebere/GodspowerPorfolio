import{M as g,K as o,R as s}from"./index-iGDHt5zD.js";const h=.5,v=.5,a=Math.PI*v;class z{constructor(){this.options={waveHeight:{min:0,max:3},waveLength:{min:0,max:5}}}generate(t,e){t.zigzag===void 0&&(t.zigzag={counter:g(),waveHeight:o(this.options.waveHeight),waveLength:o(this.options.waveLength)});const i=h/t.zigzag.waveLength*e.factor;t.zigzag.counter+=i;const n=t.zigzag.waveHeight*Math.sin(t.zigzag.counter);return t.position.x+=n*Math.cos(t.velocity.angle+a),t.position.y+=n*Math.sin(t.velocity.angle+a),s.origin}init(t){const e=t.actualOptions.particles.move.path.options;this.options.waveLength=e.waveLength??this.options.waveLength,this.options.waveHeight=e.waveHeight??this.options.waveHeight}reset(){}update(){}}export{z as ZigZagPathGenerator};
