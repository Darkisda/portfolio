import ProjectFrontCard from "../components/project-front-card";

export default function FrontendProjects() {
  return (
    <>
      <h3 className="text-2xl font-medium text-orange-500">
        Projetos de Frontend
      </h3>
      <p className="first-letter:ml-4 my-4 text-gray-600 font-thin text-justify">
        Abaixo estão alguns dos meus projetos de Frotend. Alguns projetos
        utilizam ReactJS com NextJS e outros com VueJS. Todas as aplicações
        estão hospedadas no{" "}
        <a
          href="http://https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Netlify.
        </a>
      </p>
      <div className="w-full my-14 flex items-center gap-4 justify-around flex-col md:flex-row">
        <ProjectFrontCard
          title="Portifólio"
          content="Meu portifólio feito com NextJS e TailwindCSS"
          repoLink="https://github.com/Darkisda/portfolio"
          image="portifolio-landing.png"
        />
        <ProjectFrontCard
          title="Crypto Kat"
          content="Um frontend em VueJS para uma API de crypto moeda"
          repoLink="https://github.com/Darkisda/Candy-Crush-React"
          deployLink="https://crypto-kat-front.netlify.app/"
          image="crypto-kat-landing.PNG"
        />
      </div>
    </>
  );
}
