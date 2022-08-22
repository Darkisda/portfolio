import WelcomeButton from "../components/welcome-button";

export default function Welcome() {
  return (
    <div className="w-full h-screen bg-black">
      <div className="container w-full flex mx-auto">
        <div className="text-center w-full mt-[25%]">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-fuchsia-500 to-orange-500 bg-clip-text text-transparent">
            Olá, eu sou o Luan.
          </h1>
          <h4 className="text-xl text-white">
            desenvolvedor fullstack JS, amante de arquitetura de software e
            jogos das quais eu não consigo zerar.
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
