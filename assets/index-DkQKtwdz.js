const __vite__fileDeps=["assets/LifeUpdater-BIsz_ucS.js","assets/ValueWithRandom-J1sJtSDR.js","assets/AnimationOptions-D2mH-W8Z.js","assets/index-BJz4FO4R.js","assets/index-CBeR5PCN.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-BJz4FO4R.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BIsz_ucS.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};