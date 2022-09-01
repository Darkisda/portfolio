import { useContext } from "react";
import { ArrowLeft } from 'react-feather'
import { ApplicationContext } from "../context/application-provider";

export default function BackButton() {
  const { setSelected } = useContext(ApplicationContext)

  return (
    <button className="absolute top-5 md:left-24 xl:left-56 flex items-center font-semibold" onClick={() => setSelected!('welcome')}>
      <ArrowLeft size={24}  /> Voltar
    </button>
  )
}