import { createContext, useContext, useState } from 'react';

const supportLanguages = Object.freeze({
  English: Symbol('en'),
  Korean: Symbol('kr'),
});

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [preferredLanguage, setPreferredLanguage] = useState(
    supportLanguages.Korean
  );

  return (
    <LanguageContext.Provider
      value={{ preferredLanguage, setPreferredLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguages = () => useContext(LanguageContext);

export { supportLanguages, LanguageProvider, useLanguages };
