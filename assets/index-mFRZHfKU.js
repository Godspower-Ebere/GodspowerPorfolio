const __vite__fileDeps=["assets/Repulser-B9-0VLs8.js","assets/ValueWithRandom-zPTR2WJ8.js","assets/AnimationOptions-C62jTSeL.js","assets/index-RZCRDvBu.js","assets/index-CBeR5PCN.css","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./index-RZCRDvBu.js";async function n(e,t=!0){await e.addInteractor("particlesRepulse",async r=>{const{Repulser:a}=await o(()=>import("./Repulser-B9-0VLs8.js"),__vite__mapDeps([0,1,2,3,4,5]));return new a(r)},t)}export{n as loadParticlesRepulseInteraction};
