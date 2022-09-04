import Link from "next/link";
import { useState } from "react";

export default function Welcome() {
  const [hoverToTS, setHover] = useState(false);

  return (
    <div className="w-full bg-blackvariant h-screen">
      <div className="container w-full p-2 flex mx-auto z-10">
        <section className="text-center w-full mt-[45%] md:mt-[25%] animate-welcomeanimation">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-fuchsia-500 to-red-500 bg-clip-text text-transparent animate-text">
            Olá, eu sou o Luan.
          </h1>
          <h4 className="text-lg md:text-lg text-gray-200 mt-2">
            desenvolvedor fullstack{" "}
            {hoverToTS ? (
              <span
                onMouseEnter={() => setHover((hover) => !hover)}
                onMouseLeave={() => setHover((hover) => !hover)}
                className="p-1 bg-yellow-400 rounded text-black font-semibold tracking-tighter select-none"
              >
                .JS
              </span>
            ) : (
              <span
                onMouseEnter={() => setHover((hover) => !hover)}
                onMouseLeave={() => setHover((hover) => !hover)}
                className="p-1 bg-blue-400 rounded text-black font-semibold tracking-tighter select-none"
              >
                .TS
              </span>
            )}
            , amante de arquitetura de software e jogos dos quais eu não consigo
            zerar.
          </h4>
          <nav className="w-full flex items-center justify-center mt-8 gap-8">
            <Link href="/about">
              <a className="rounded-full w-[6.5rem] h-[2rem] text-lg flex items-center justify-center animate-text bg-gradient-to-r from-fuchsia-500 to-orange-500">
                <span className="w-[6.35rem] h-[1.85rem] rounded-full bg-blackvariant text-gray-200 transition-all duration-300 hover:bg-transparent">
                  Sobre
                </span>
              </a>
            </Link>

            <Link href="/projects">
              <a className="rounded-full w-[6.5rem] h-[2rem] text-lg flex items-center justify-center animate-text bg-gradient-to-r from-fuchsia-500 to-orange-500">
                <span className="w-[6.35rem] h-[1.85rem] rounded-full bg-blackvariant text-gray-200 transition-all duration-300 hover:bg-transparent">
                  Projetos
                </span>
              </a>
            </Link>
          </nav>
        </section>
      </div>
    </div>
  );
}
