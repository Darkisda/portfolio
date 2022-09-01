import { useContext } from "react";
import { ArrowLeft } from "react-feather";
import { ApplicationContext } from "../context/application-provider";

export default function BackButton() {
  const { setSelected } = useContext(ApplicationContext);

  return (
    <div className="fixed w-full bg-transparent z-10 backdrop-blur-sm p-4">
      <div className="container max-w-6xl mx-auto">
        <button
          className="flex items-center font-semibold text-gray-500 hover:text-gray-700"
          onClick={() => setSelected!("welcome")}
        >
          <ArrowLeft size={24} /> Voltar
        </button>
      </div>
    </div>
  );
}
