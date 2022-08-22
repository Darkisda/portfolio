import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="w-full min-h-screen bg-gray-300 p-2">
      <div className="container h-full w-full mx-auto grid gap-2 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2">
        <div className="h-full w-full flex items-center flex-col justify-center">
          <div className="w-24 h-24 relative lg:w-48 lg:h-48">
            <Image
              src={"/myself.jpg"}
              alt="Eu"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="h-full w-full mt-16">
          <h1 className="text-6xl font-bold text-orange-500">Sobre</h1>
          <hr className="my-4 border-gray-600" />
          <p className="text-lg text-gray-700 text-justify">
            Oi, meu nome é Luan de Souza, tenho 21 anos, sou do interior do RN,
            mas atualmente estou morando em Parnamirim RN. Comecei na área de
            desenvolvimento em 2019, quando ingressei em Análise e
            Desenvolvimento de Sistemas pela UFRN e sempre busquei me refinar
            constantemente.
          </p>
          <br />
          <p className="text-lg text-gray-700 text-justify">
            Gosto, sempre de ajudar o próximo compartilhando conhecimento. Tenho
            prazer por trabalhar em equipe, mantendo uma boa comunicação com
            meus colegas para uma melhor clareza e aprofundamento em que estou
            trabalhando.
          </p>
        </div>
        <div className="h-full w-full">
          <h1 className="text-3xl font-semibold text-orange-500">
            Principais Tecnologias
          </h1>
          <p className="text-xl text-gray-700">
            Essas são as principais tecnologias com as quais eu trabalho e tenho
            segurança.
          </p>
          <br />
          <ul className="text-xl text-gray-700 ml-5">
            <li>NestJS</li>
            <li>ReactJS</li>
            <li>VueJS</li>
            <li>Node</li>
            <li>NextJS</li>
            <li>TypeScript</li>
            <li>PostgreSQL</li>
            <li>Docker</li>
            <li>Java</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
