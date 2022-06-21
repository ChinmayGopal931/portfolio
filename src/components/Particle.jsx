import React from 'react'; 
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";


const particlesInit = async (main) => {
    console.log(main);

    await loadFull(tsParticles);
  };


function Particle(){
return (
  <Particles options={particlesOptions} init={particlesInit}/>




  );
}
export default Particle;