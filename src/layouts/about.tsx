import Image from "next/image";
import { ArrowUpRight, File, GitHub, Linkedin, Mail } from "react-feather";
import BackButton from "../components/back-button";
import CSSIcon from "../components/css-logo";
import HTMLIcon from "../components/html-icon";
import JSIcon from "../components/js-logo";
import NestIcon from "../components/nest-icon";
import ReactIcon from "../components/react-icon";
import TailwindcssIcon from "../components/tailwindcss";
import VueIcon from "../components/vue-icon";

export default function About() {
  return (
    <section
      id="sobre"
      className="w-full h-screen overflow-auto bg-gray-300"
    >
      <BackButton />
      <div className="container p-3 py-14 lg:max-w-5xl h-full animate-pageanimation flex flex-col lg:flex-row items-start mx-auto">
        <div className="lg:w-1/2 w-full h-full relative">
          <div className="lg:absolute flex items-center flex-col justify-center">
            <div className="w-24 h-24 relative border-4 rounded-full border-orange-500 lg:w-32 lg:h-32 2xl:w-40 2xl:h-40">
              <Image
                src={"/myself.jpg"}
                alt="Eu"
                layout="fill"
                className="rounded-full object-cover"
              />
            </div>

            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-medium text-orange-500">
                Luan de Souza Nascimento
              </h1>
              <h3 className="text-gray-700 lg:tracking-widest tracking-wide text-lg font-thin leading-3">
                Desenvolvedor FullStack JS
              </h3>
              <div className="w-full flex flex-row items-center justify-center gap-4 my-4">
                <button className="p-2 bg-orange-500 rounded-full transition-all duration-300 hover:bg-amber-600 hover:scale-110">
                  <a
                    href="http://github.com/darkisda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub color="#ffffff" size={20} />
                  </a>
                </button>
                <button className="p-2 bg-orange-500 rounded-full transition-all duration-300 hover:bg-amber-600 hover:scale-110">
                  <a
                    href="https://www.linkedin.com/in/luan-de-souza-5088641ba/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin color="#ffffff" size={20} />
                  </a>
                </button>
                <button className="p-2 bg-orange-500 rounded-full transition-all duration-300 hover:bg-amber-600 hover:scale-110">
                  <a href="mailto:luandesouzanascimento2011@gmail.com">
                    <Mail color="#ffffff" size={20} />
                  </a>
                </button>
              </div>
              <button className="w-full bg-orange-500 p-2 rounded-lg text-white transition-all durantion-300 hover:bg-amber-600">
                <a
                  href="https://portifoliolsn.s3.amazonaws.com/Curriculo+Luan.pdf"
                  className="w-full flex items-center justify-items-start justify-center gap-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Meu Curriculo</span> <File />
                </a>
              </button>
            </div>
            <div className="w-full flex items-center flex-col justify-center my-2">
              <h3 className="font-thin tracking-wide">
                Algumas das minhas capacitações:
              </h3>
              <ul className="list-disc ml-4">
                <li>
                  <div className="w-full my-4 text-gray-700">
                    <h5 className="text-sm">
                      <span className="font-semibold">Título:</span> Node.Js
                      Microservices: NestJS, RabbitMQ and <br /> Cloud Services
                    </h5>
                    <p className="text-sm">
                      <span className="font-semibold">Formação:</span> Udemy
                    </p>
                    <a
                      className="flex text-sm items-center font-semibold"
                      href="https://portifoliolsn.s3.amazonaws.com/UC-4b1271d2-d702-46f3-bc32-bfe0f2b2e27f.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificado <ArrowUpRight size={20} />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="w-full my-4 text-gray-700">
                    <h5 className="text-sm">
                      <span className="font-semibold">Título:</span> Curso Vue
                      JS2 - O Guia Completo (incl. Vue <br /> Ruter & Vuex)
                    </h5>
                    <p className="text-sm">
                      <span className="font-semibold">Formação:</span> Udemy
                    </p>
                    <a
                      className="flex text-sm items-center font-semibold"
                      href="https://portifoliolsn.s3.amazonaws.com/UC-799fd7d4-c740-400a-9dac-b3c9ce63aa03.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificado <ArrowUpRight size={20} />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="w-full my-4 text-gray-700">
                    <h5 className="text-sm">
                      <span className="font-semibold">Título:</span> NestJS Zero
                      to Hero - Modern Typescript <br /> Back-end Development
                    </h5>
                    <p className="text-sm">
                      <span className="font-semibold">Formação:</span> Udemy
                    </p>
                    <a
                      className="flex text-sm items-center font-semibold"
                      href="https://portifoliolsn.s3.amazonaws.com/UC-835b236a-ec0f-487e-9493-1e1571278ad9.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Certificado <ArrowUpRight size={20} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 pb-10">
          <div className="lg:h-full w-full mt-10">
            <div className="my-5">
              <h4 className="text-orange-500 text-2xl font-thin">
                Um pouco da minha história
              </h4>
              <hr className="w-3/4 border-gray-400/40" />
            </div>
            <p className="first-letter:ml-4 text-gray-600 font-thin text-justify">
              Oi, meu nome é Luan de Souza, tenho 21 anos, sou do interior do
              RN, e atualmente estou morando em Natal - RN. Sempre gostei da
              área de tecnologia, desde pequeno sempre amei jogar jogos de
              GameBOY Advance, como Pokémon Emerald, e Megaman X do SNES e isso
              me fez desperta a curiosidade de entender como computadores
              funcionavam.
            </p>
            <br />
            <p className="first-letter:ml-4 text-gray-600 font-thin text-justify">
              Com isso, comecei a mexer nos computadores que existiam na minha
              casa, desmontava, montava-os denovo. Até o dia que eu comprei e
              montei o meu próprio computador, e fiquei entusiasmado em entender
              como funcionava os hardwares e alguns drivers.
            </p>
            <br />
            <p className="first-letter:ml-4 text-gray-600 font-thin text-justify">
              Quando ingressei no curso de Análise e Desenvolvimento de Sistemas
              pela UFRN em 2019, comecei a ver uma área que eu tinha bastante
              vontade de conhecer, porém não tinha visto até então;
              desenvolvimento de softwares.
            </p>
            <br />
            <p className="first-letter:ml-4 text-gray-600 font-thin text-justify">
              Desde então me apaixonei pelo desenvolvimento, em entender porquê
              dos softwares funcionarem; o porquê das grandes empresas serem
              grandes; a entender o poder das tomadas de decisões e como elas
              podem impactar dezenas de vidas.
            </p>
            <br />
            <p className="first-letter:ml-4 text-gray-600 font-thin text-justify">
              Além disso, nas horas vagas gosto de ir para academia, ou tocar
              violão, ou ler algum livro, ou desenhar ou fazer alguma coisa
              diferente que eu ainda não tenha feito. Gosto de me desafiar e
              aumentar meus limites e até onde eu consigo ir.
            </p>
            <br />
            <p className="first-letter:ml-4 text-gray-600 font-thin text-justify">
              Gosto, sempre de ajudar o próximo compartilhando conhecimento.
              Tenho prazer por trabalhar em equipe, mantendo uma boa comunicação
              com meus colegas para uma melhor clareza e aprofundamento em que
              estou trabalhando.
            </p>
          </div>
          <div className="w-full mb-10">
            <div className="my-5">
              <h4 className="text-orange-500 text-2xl font-thin">
                Principais Tecnologias
              </h4>
              <hr className="w-3/4 border-gray-400/40" />
            </div>
            <p className="first-letter:ml-4 text-gray-600 font-thin text-justify">
              Essas são as principais tecnologias com as quais eu trabalho e
              tenho segurança, não estão necessariamente em ordem de
              conhecimento.
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
            {/* <ul className="text-xl text-gray-700 ml-5">
              <li>NestJS</li>
              <li>ReactJS</li>
              <li>VueJS</li>
              <li>Node</li>
              <li>NextJS</li>
              <li>TypeScript</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>Java</li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
}
