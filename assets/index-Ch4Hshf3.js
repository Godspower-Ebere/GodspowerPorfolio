const __vite__fileDeps=["assets/OutOfCanvasUpdater-DFGJOupR.js","assets/index-RZCRDvBu.js","assets/index-CBeR5PCN.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-RZCRDvBu.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-DFGJOupR.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
