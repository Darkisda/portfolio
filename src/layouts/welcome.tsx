import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import WelcomeButton from "../components/welcome-button";

export default function Welcome() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any | undefined) => {},
  []);

  return (
    <div className="w-full h-screen relative bg-black">
      <Particles
        id="tsparticle"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          particles: {
            color: {
              value: "#3d3d3d",
            },
            links: {
              color: "#3d3d3d",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 4,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
          style: {
            position: "absolute",
            top: "0px",
          },
        }}
      />
      <div className="container w-full flex mx-auto z-10">
        <div className="text-center w-full mt-[25%]">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-fuchsia-500 to-red-500 bg-clip-text text-transparent animate-text">
            Olá, eu sou o Luan.
          </h1>
          <h4 className="text-xl text-white mt-2">
            desenvolvedor fullstack{" "}
            <span className="px-1 bg-yellow-400 rounded text-black font-semibold">
              JS
            </span>{" "}
            , amante de arquitetura de software e jogos dos quais eu não consigo
            zerar.
          </h4>
          <nav className="w-full flex items-center justify-center mt-8 gap-8">
            <WelcomeButton>
              <a href="#sobre" className="text-white text-lg ">
                Sobre
              </a>
            </WelcomeButton>
            <WelcomeButton>
              <a href="#projetos" className="text-white text-lg">
                Projetos
              </a>
            </WelcomeButton>
            <WelcomeButton>
              <a href="#contato" className="text-white text-lg">
                Contato
              </a>
            </WelcomeButton>
          </nav>
        </div>
      </div>
    </div>
  );
}
