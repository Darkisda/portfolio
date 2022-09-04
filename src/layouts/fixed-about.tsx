import Image from "next/image";
import { ArrowUpRight, File, GitHub, Linkedin, Mail } from "react-feather";

export default function FixedAbout() {
  return (
    <div className="lg:fixed flex items-center flex-col justify-center">
      <div className="w-24 h-24 relative border-4 rounded-full border-orange-500 lg:w-32 lg:h-32 2xl:w-36 2xl:h-36">
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
        <h3 className="text-gray-300 lg:tracking-widest tracking-wide text-lg font-thin leading-3">
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
        <h3 className="font-thin tracking-wide text-gray-300">
          Algumas das minhas capacitações:
        </h3>
        <ul className="ml-4">
          <li>
            <div className="w-full my-4 text-gray-300">
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
            <div className="w-full my-4 text-gray-300">
              <h5 className="text-sm">
                <span className="font-semibold">Título:</span> Curso Vue JS2 - O
                Guia Completo (incl. Vue <br /> Ruter & Vuex)
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
            <div className="w-full my-4 text-gray-300">
              <h5 className="text-sm">
                <span className="font-semibold">Título:</span> NestJS Zero to
                Hero - Modern Typescript <br /> Back-end Development
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
  );
}
