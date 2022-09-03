import Image from "next/image";
import { useState } from "react";

type Props = {
  title: string;
  content: string;
  repoLink: string;
  deployLink?: string;
  image?: string;
};

export default function ProjectFrontCard({
  content,
  repoLink,
  title,
  deployLink,
  image,
}: Props) {
  const [onHover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover((state) => !state)}
      onMouseLeave={() => setHover((state) => !state)}
      className="w-full h-44 relative bg-stone-300 overflow-hidden rounded-lg p-5 lg:w-96 lg:h-44"
    >
      {image && (
        <Image
          src={`/${image}`}
          alt="Imagem Projeto"
          layout="fill"
          className="rounded-lg w-full h-full object-cover"
        />
      )}
      <div
        className={`w-full h-full p-2 bg-gradient-to-t from-stone-600/50 to-stone-300/50 backdrop-blur-sm inset-0 absolute transition-all ease-in-out duration-300 text-white flex items-center flex-col justify-center gap-2 ${
          onHover ? "translate-y-0" : "translate-y-44"
        }`}
      >
        <h1 className="text-3xl font-bold select-none">
          {title.toUpperCase()}
        </h1>
        <p className="text-sm text-gray-200 select-none">{content}</p>
        <div className="text-sm w-full flex justify-start flex-col gap-2">
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            Link para o repositório
          </a>
          {deployLink && (
            <a href={deployLink} target="_blank" rel="noopener noreferrer">
              Link para o site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
