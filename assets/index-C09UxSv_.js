const __vite__fileDeps=["assets/WobbleUpdater-CpCPNm_x.js","assets/index-iGDHt5zD.js","assets/index-O0RYbmfO.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-iGDHt5zD.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-CpCPNm_x.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};