const __vite__fileDeps=["assets/ColorUpdater-C9VE9204.js","assets/index-RZCRDvBu.js","assets/index-CBeR5PCN.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-RZCRDvBu.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-C9VE9204.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
