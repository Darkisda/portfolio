import CSSIcon from "../components/css-logo";
import HTMLIcon from "../components/html-icon";
import JSIcon from "../components/js-logo";
import NestIcon from "../components/nest-icon";
import ReactIcon from "../components/react-icon";
import TailwindcssIcon from "../components/tailwindcss";
import VueIcon from "../components/vue-icon";

export default function ScrollingAbout() {
  return (
    <>
      <div className="lg:h-full w-full mt-10">
        <div className="my-5">
          <h4 className="text-orange-500 text-2xl font-thin">
            Um pouco da minha história
          </h4>
          <hr className="w-3/4 border-gray-200/40" />
        </div>
        <p className="first-letter:ml-4 text-gray-300 font-thin text-justify">
          Oi, meu nome é Luan de Souza, tenho 21 anos, sou do interior do RN, e
          atualmente estou morando em Natal - RN. Sempre gostei da área de
          tecnologia, desde pequeno sempre amei jogar jogos de GameBOY Advance,
          como Pokémon Emerald, e Megaman X do SNES e isso me fez desperta a
          curiosidade de entender como computadores funcionavam.
        </p>
        <br />
        <p className="first-letter:ml-4 text-gray-300 font-thin text-justify">
          Com isso, comecei a mexer nos computadores que existiam na minha casa,
          desmontava, montava-os denovo. Até o dia que eu comprei e montei o meu
          próprio computador, e fiquei entusiasmado em entender como funcionava
          os hardwares e alguns drivers.
        </p>
        <br />
        <p className="first-letter:ml-4 text-gray-300 font-thin text-justify">
          Quando ingressei no curso de Análise e Desenvolvimento de Sistemas
          pela UFRN em 2019, comecei a ver uma área que eu tinha bastante
          vontade de conhecer, porém não tinha visto até então; desenvolvimento
          de softwares.
        </p>
        <br />
        <p className="first-letter:ml-4 text-gray-300 font-thin text-justify">
          Desde então me apaixonei pelo desenvolvimento, em entender porquê dos
          softwares funcionarem; o porquê das grandes empresas serem grandes; a
          entender o poder das tomadas de decisões e como elas podem impactar
          dezenas de vidas.
        </p>
        <br />
        <p className="first-letter:ml-4 text-gray-300 font-thin text-justify">
          Além disso, nas horas vagas gosto de ir para academia, ou tocar
          violão, ou ler algum livro, ou desenhar ou fazer alguma coisa
          diferente que eu ainda não tenha feito. Gosto de me desafiar e
          aumentar meus limites e até onde eu consigo ir.
        </p>
        <br />
        <p className="first-letter:ml-4 text-gray-300 font-thin text-justify">
          Gosto, sempre de ajudar o próximo compartilhando conhecimento. Tenho
          prazer por trabalhar em equipe, mantendo uma boa comunicação com meus
          colegas para uma melhor clareza e aprofundamento em que estou
          trabalhando.
        </p>
      </div>
      <div className="w-full mb-10">
        <div className="my-5">
          <h4 className="text-orange-500 text-2xl font-thin">
            Principais Tecnologias
          </h4>
          <hr className="w-3/4 border-gray-400/40" />
        </div>
        <p className="first-letter:ml-4 text-gray-300 font-thin text-justify">
          Essas são as principais tecnologias com as quais eu trabalho e tenho
          segurança, não estão necessariamente em ordem de conhecimento.
        </p>
        <br />
        <div className="w-full flex items-center justify-evenly flex-wrap gap-14">
          <a
            href="https://nestjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale flex transition-all duration-300 hover:grayscale-0"
          >
            <NestIcon />
          </a>

          <a
            href="https://pt-br.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale flex transition-all duration-300 hover:grayscale-0"
          >
            <ReactIcon />
          </a>

          <a
            href="https://vuejs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale flex transition-all duration-300 hover:grayscale-0"
          >
            <VueIcon />
          </a>

          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale flex transition-all duration-300 hover:grayscale-0"
          >
            <TailwindcssIcon />
          </a>

          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale flex transition-all duration-300 hover:grayscale-0"
          >
            <JSIcon />
          </a>

          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale flex transition-all duration-300 hover:grayscale-0"
          >
            <HTMLIcon />
          </a>

          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            className="grayscale flex transition-all duration-300 hover:grayscale-0"
          >
            <CSSIcon />
          </a>
        </div>
      </div>
    </>
  );
}
