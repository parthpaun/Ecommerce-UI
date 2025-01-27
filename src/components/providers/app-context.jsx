import { createContext, useState } from "react";

export const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
      {children}
    </AppContext.Provider>
  );
}
