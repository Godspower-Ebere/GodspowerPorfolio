const __vite__fileDeps=["assets/Emitters-LKPJC6Bo.js","assets/index-iGDHt5zD.js","assets/index-O0RYbmfO.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s as l,d as m,g as a,_ as p,c as h,f as y}from"./index-iGDHt5zD.js";import{A as w}from"./AnimatableColor-DMIBcEFv.js";class v{constructor(){this.wait=!1}load(e){e&&(e.count!==void 0&&(this.count=e.count),e.delay!==void 0&&(this.delay=l(e.delay)),e.duration!==void 0&&(this.duration=l(e.duration)),e.wait!==void 0&&(this.wait=e.wait))}}class g{constructor(){this.quantity=1,this.delay=.1}load(e){e!==void 0&&(e.quantity!==void 0&&(this.quantity=l(e.quantity)),e.delay!==void 0&&(this.delay=l(e.delay)))}}class _{constructor(){this.color=!1,this.opacity=!1}load(e){e&&(e.color!==void 0&&(this.color=e.color),e.opacity!==void 0&&(this.opacity=e.opacity))}}class C{constructor(){this.options={},this.replace=new _,this.type="square"}load(e){e&&(e.options!==void 0&&(this.options=m({},e.options??{})),this.replace.load(e.replace),e.type!==void 0&&(this.type=e.type))}}class E{constructor(){this.mode="percent",this.height=0,this.width=0}load(e){e!==void 0&&(e.mode!==void 0&&(this.mode=e.mode),e.height!==void 0&&(this.height=e.height),e.width!==void 0&&(this.width=e.width))}}class r{constructor(){this.autoPlay=!0,this.fill=!0,this.life=new v,this.rate=new g,this.shape=new C,this.startCount=0}load(e){e&&(e.autoPlay!==void 0&&(this.autoPlay=e.autoPlay),e.size!==void 0&&(this.size||(this.size=new E),this.size.load(e.size)),e.direction!==void 0&&(this.direction=e.direction),this.domId=e.domId,e.fill!==void 0&&(this.fill=e.fill),this.life.load(e.life),this.name=e.name,this.particles=a(e.particles,i=>m({},i)),this.rate.load(e.rate),this.shape.load(e.shape),e.position!==void 0&&(this.position={},e.position.x!==void 0&&(this.position.x=l(e.position.x)),e.position.y!==void 0&&(this.position.y=l(e.position.y))),e.spawnColor!==void 0&&(this.spawnColor===void 0&&(this.spawnColor=new w),this.spawnColor.load(e.spawnColor)),e.startCount!==void 0&&(this.startCount=e.startCount))}}const z=Object.freeze(Object.defineProperty({__proto__:null,Emitter:r},Symbol.toStringTag,{value:"Module"}));class b{constructor(e){this._engine=e,this.id="emitters"}async getPlugin(e){const{Emitters:i}=await p(()=>import("./Emitters-LKPJC6Bo.js"),__vite__mapDeps([0,1,2]));return new i(this._engine,e)}loadOptions(e,i){var u,f;if(!this.needsPlugin(e)&&!this.needsPlugin(i))return;i!=null&&i.emitters&&(e.emitters=a(i.emitters,t=>{const s=new r;return s.load(t),s}));const n=(f=(u=i==null?void 0:i.interactivity)==null?void 0:u.modes)==null?void 0:f.emitters;if(n)if(h(n))e.interactivity.modes.emitters={random:{count:1,enable:!0},value:n.map(t=>{const s=new r;return s.load(t),s})};else{const t=n;if(t.value!==void 0)if(h(t.value))e.interactivity.modes.emitters={random:{count:t.random.count??1,enable:t.random.enable??!1},value:t.value.map(d=>{const c=new r;return c.load(d),c})};else{const d=new r;d.load(t.value),e.interactivity.modes.emitters={random:{count:t.random.count??1,enable:t.random.enable??!1},value:d}}else(e.interactivity.modes.emitters={random:{count:1,enable:!1},value:new r}).value.load(n)}}needsPlugin(e){var n,u,f;if(!e)return!1;const i=e.emitters;return h(i)&&!!i.length||i!==void 0||!!((f=(u=(n=e.interactivity)==null?void 0:n.events)==null?void 0:u.onClick)!=null&&f.mode)&&y("emitter",e.interactivity.events.onClick.mode)}}const S=Object.freeze(Object.defineProperty({__proto__:null,EmittersPlugin:b},Symbol.toStringTag,{value:"Module"}));export{r as E,E as a,z as b,S as c};
