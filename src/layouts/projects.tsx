import Image from "next/image";
import BackButton from "../components/back-button";
import ProjectCard from "../components/project-card";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="w-full min-h-screen flex bg-white p-2"
    >
      <BackButton />
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold mt-16 text-black">Projetos</h1>
        <br />
        <div className="w-full mt-16 flex items-center gap-4 justify-around flex-col lg:flex-row">
          <ProjectCard
            title="React Candy Crush"
            content="Uma simples réplica do famoso jogo Candy Crush feito inteiramente com ReactJS!"
            repoLink="https://github.com/Darkisda/Candy-Crush-React"
            deployLink="https://reactcandycrush.netlify.app/"
            image="candy-crush.png"
          />
          <ProjectCard
            title="NestJS RabbitMQ"
            content="Um simples projeto utilizando uma arquitetura de microservices. Neste projeto utilizei o broker de mensagens RabbitMQ para orquestrar as mensagens"
            repoLink="https://github.com/Darkisda/NestJS-Microserices-RMQ"
          />
        </div>
        <div className="w-full mt-8 font-bold">
          <p className="text-xl">
            Para conhecer mais dos meus projetos ou estudos, basta vistiar o{" "}
            <a
              className="text-orange-400"
              href="http://github.com/darkisda"
              target="_blank"
              rel="noopener noreferrer"
            >
              meu github.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
