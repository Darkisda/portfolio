import { useContext } from "react";
import WelcomeButton from "../components/welcome-button";
import { ApplicationContext } from "../context/application-provider";

export default function Welcome() {
  const { setSelected } = useContext(ApplicationContext)

  return (
    <div className="w-full bg-black h-screen" >
      <div className="container w-full flex mx-auto z-10">
        <div className="text-center w-full mt-[25%] animate-welcomeanimation">
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
              <a onClick={() => setSelected!('about')} className="text-white text-lg ">
                Sobre
              </a>
            </WelcomeButton>
            <WelcomeButton>
              <a onClick={() => setSelected!('project')} className="text-white text-lg ">
                Projetos
              </a>
            </WelcomeButton>
          </nav>
        </div>
      </div>
    </div>
  );
}
