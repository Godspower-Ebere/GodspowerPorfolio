import{a,l as c}from"./Utils-C8UfkqS5.js";import{P as l}from"./ParticlesInteractorBase-vfDeBun3.js";import{f as v,o as m}from"./index-iGDHt5zD.js";class f extends l{constructor(e){super(e)}clear(){}init(){}interact(e){const t=this.container,i=t.actualOptions,r=t.interactivity;if(!i.interactivity.events.onHover.enable||r.status!=="pointermove")return;const o=r.mouse.position;o&&t.canvas.draw(n=>{a(t,n,e,o)})}isEnabled(e){const t=this.container,i=e.interactivity??t.actualOptions.interactivity,r=t.interactivity.mouse,o=i.events;if(!(o.onHover.enable&&r.position))return!1;const n=v(c,o.onHover.mode);if(n&&i.modes.light){const s=i.modes.light.shadow;e.lightShadow=m(s.color)}return n}reset(){}}export{f as ParticlesLighter};
