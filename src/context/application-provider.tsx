import { createContext, ReactNode, useState } from "react";

type SelectedSection = "welcome" | "about" | "project" | "contact";

type ContextType = {
  selectedSection: SelectedSection;
  setSelected: (value: SelectedSection) => void;
};

const ApplicationContext = createContext<Partial<ContextType>>({});

type ProviderProps = {
  children: ReactNode;
};

function ApplicationProvider({ children }: ProviderProps) {
  const [selectedSection, setSelected] = useState<SelectedSection>("welcome");

  return (
    <ApplicationContext.Provider value={{ selectedSection, setSelected }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export { ApplicationProvider, ApplicationContext };
