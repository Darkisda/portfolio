import Head from "next/head";
import BackButton from "../components/back-button";
import ProjectFrontCard from "../components/project-front-card";
import Footer from "../layouts/footer";
import FrontendProjects from "../layouts/frontend-projects";

export default function Projects() {
  return (
    <>
      <Head>
        <title>LSN | Projetos</title>
      </Head>
      <main>
        <BackButton />
        <div className="w-full min-h-screen flex bg-stone-300 p-2">
          <section
            id="projetos"
            className="container lg:max-w-5xl mx-auto py-16"
          >
            <h1 className="text-3xl font-semibold text-orange-500">Projetos</h1>
            <p className="first-letter:ml-4 my-4 text-gray-600 font-thin text-justify">
              Todos os meus projetos estão disponíveis no meu{" "}
              <a
                href="http://github.com/darkisda"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub.
              </a>{" "}
              Além de projetos, tenho também alguns matérais de estudos sobre
              novas tecnolocias e design patterns
            </p>
            <FrontendProjects />
            <h3 className="text-2xl font-medium text-orange-500">
              Projetos de Backend
            </h3>
            <p className="first-letter:ml-4 my-4 text-gray-600 font-thin text-justify">
              A seguir, estão alguns projetos focados em Backend. Divergindo um
              pouco dos projetos Frotend, os projetos de Backend não estão
              hospedados em nenhum lugar, por que muitos pedem uma
              infraestrutura mais robusta, o que é dificil de encontrar planos
              gratuitos.
            </p>
            <ul>
              <li>
                <h4 className="text-lg font-medium text-orange-500">
                  NestJS Microserices RMQ
                </h4>
                <hr className="w-2/4 my-2 border-slate-600" />
                <div className="ml-4">
                  <p className="first-letter:ml-4 my-4 text-gray-600 font-thin text-justify">
                    Este é um pequeno projeto feito em NestJS utilizando uma
                    arquitetura de microserviços, utilizando comunicação
                    assíncrona por meio de mensagens com protocolo AMPQ do
                    framework{" "}
                    <a
                      href="https://www.rabbitmq.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      RabbitMQ
                    </a>
                    .
                  </p>
                  <a
                    href="https://github.com/Darkisda/NestJS-Microserices-RMQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link para o repositório.
                  </a>
                </div>
              </li>
              <li className="my-4">
                <h4 className="text-lg font-medium text-orange-500">
                  NestJS GraphQL
                </h4>
                <hr className="w-2/4 my-2 border-slate-600" />
                <div className="ml-4">
                  <p className="first-letter:ml-4 my-4 text-gray-600 font-thin text-justify">
                    Este é um pequeno projeto feito em NestJS utilizando o
                    framework GraphQL, com um exemplo simples de sala de aula e
                    matérias.
                  </p>
                  <a
                    href="https://github.com/Darkisda/NestJS-GraphQL-Example"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link para o repositório.
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
