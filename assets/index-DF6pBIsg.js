const __vite__fileDeps=["assets/OrbitUpdater-DOqhfuaD.js","assets/ValueWithRandom-zPTR2WJ8.js","assets/AnimationOptions-C62jTSeL.js","assets/index-RZCRDvBu.js","assets/index-CBeR5PCN.css","assets/OptionsColor-DnzpZ_Vz.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-RZCRDvBu.js";async function d(t,r=!0){await t.addParticleUpdater("orbit",async a=>{const{OrbitUpdater:e}=await i(()=>import("./OrbitUpdater-DOqhfuaD.js"),__vite__mapDeps([0,1,2,3,4,5]));return new e(a)},r)}export{d as loadOrbitUpdater};