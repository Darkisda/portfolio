import { useContext } from "react";
import { ArrowLeft } from 'react-feather'
import { ApplicationContext } from "../context/application-provider";

export default function BackButton() {
  const { setSelected } = useContext(ApplicationContext)

  return (
    <button onClick={() => setSelected!('welcome')}>
      <ArrowLeft  />
    </button>
  )
}