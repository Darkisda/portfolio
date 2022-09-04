import Link from "next/link";
import { ArrowLeft } from "react-feather";

export default function BackButton() {
  return (
    <div className="fixed w-full bg-transparent z-10 backdrop-blur-sm p-4">
      <div className="container max-w-6xl mx-auto">
        <Link href={"/"}>
          <a className="flex items-center font-semibold text-gray-300 hover:text-gray-400">
            <ArrowLeft size={24} /> Voltar
          </a>
        </Link>
      </div>
    </div>
  );
}
