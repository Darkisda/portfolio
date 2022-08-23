import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function WelcomeButton({ children }: Props) {
  return (
    <button className="
      rounded-full w-[6.5rem] h-[2rem] 
      flex items-center justify-center 
      bg-gradient-to-r from-fuchsia-500 to-orange-500
    ">
      <div 
        className="
          rounded-full w-[6.25rem] bg-black 
          hover:bg-transparent
        ">
        {children}
      </div>
    </button>
  );
}
