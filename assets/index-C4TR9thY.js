const __vite__fileDeps=["assets/InteractivityParticleMaker-DIyQ2N4J.js","assets/index-sGgwhAlq.js","assets/index-CBeR5PCN.css","assets/ExternalInteractorBase-CIi3zRdK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./index-sGgwhAlq.js";async function o(t,a=!0){await t.addInteractor("externalParticle",async r=>{const{InteractivityParticleMaker:e}=await i(()=>import("./InteractivityParticleMaker-DIyQ2N4J.js"),__vite__mapDeps([0,1,2,3]));return new e(r)},a)}export{o as loadExternalParticleInteraction};