import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  return context;
};

export { useLanguageContext, LanguageContextProvider };
