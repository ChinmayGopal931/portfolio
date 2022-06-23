import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from "./logo.svg";
import particlesOptions from "./particles.json";
import { Header, Portfolio, Home, About, Contact } from "./components";
//
function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <>
    <title>Chinmay Gopal</title>
      <Particles options={particlesOptions} init={particlesInit} />
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
