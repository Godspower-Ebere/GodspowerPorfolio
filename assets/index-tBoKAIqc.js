const __vite__fileDeps=["assets/InfectionPlugin-BHu3W_Vm.js","assets/index-sGgwhAlq.js","assets/index-CBeR5PCN.css","assets/OptionsColor-B0hfMrDt.js","assets/ParticlesInfecter-3oP8bp4Y.js","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-sGgwhAlq.js";async function c(t,i=!0){const{InfectionPlugin:a}=await n(()=>import("./InfectionPlugin-BHu3W_Vm.js"),__vite__mapDeps([0,1,2,3])),o=new a;await t.addPlugin(o,i),await t.addInteractor("particlesInfection",async r=>{const{ParticlesInfecter:e}=await n(()=>import("./ParticlesInfecter-3oP8bp4Y.js"),__vite__mapDeps([4,5,1,2]));return new e(r)},i)}export{c as loadInfectionPlugin};