const __vite__fileDeps=["assets/OrbitUpdater-CmW1o-Mr.js","assets/ValueWithRandom-BP9b2I2u.js","assets/AnimationOptions-2b1bD8_A.js","assets/index-sGgwhAlq.js","assets/index-CBeR5PCN.css","assets/OptionsColor-B0hfMrDt.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-sGgwhAlq.js";async function d(t,r=!0){await t.addParticleUpdater("orbit",async a=>{const{OrbitUpdater:e}=await i(()=>import("./OrbitUpdater-CmW1o-Mr.js"),__vite__mapDeps([0,1,2,3,4,5]));return new e(a)},r)}export{d as loadOrbitUpdater};