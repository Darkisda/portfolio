import Image from "next/image";

type Props = {
  title: string;
  content: string;
  repoLink: string;
  deployLink?: string;
  image?: string;
};

export default function ProjectCard({
  content,
  repoLink,
  title,
  deployLink,
  image,
}: Props) {
  return (
    <div className="w-[32rem] bg-white border-2 border-gray-200 rounded p-5">
      <div className="w-full flex items-center justify-center gap-2">
        <div className="w-3/4">
          <div className="w-full">
            <h1 className="text-3xl">{title}</h1>
            <hr className="my-2 " />
          </div>
          <p>{content}</p>
          <br />
          <p>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              Link para o repositório
            </a>
          </p>
          <p>
            {deployLink && (
              <a href={deployLink} target="_blank" rel="noopener noreferrer">
                Link para o site
              </a>
            )}
          </p>
        </div>
        <div className="w-1/4">
          {image && (
            <Image
              src={`/${image}`}
              alt="Imagem Projeto"
              width={120}
              height={120}
              layout="fixed"
              className="rounded-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
