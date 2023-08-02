import {
  DarkModeContextType,
  DarkModeProviderProps,
} from "./interface/interface";
import { createContext, useState } from "react";

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => undefined,
});

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
