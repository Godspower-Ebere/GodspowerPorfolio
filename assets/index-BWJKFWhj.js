const __vite__fileDeps=["assets/TiltUpdater-ChrfrX4M.js","assets/index-sGgwhAlq.js","assets/index-CBeR5PCN.css","assets/ValueWithRandom-BP9b2I2u.js","assets/AnimationOptions-2b1bD8_A.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-sGgwhAlq.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-ChrfrX4M.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};