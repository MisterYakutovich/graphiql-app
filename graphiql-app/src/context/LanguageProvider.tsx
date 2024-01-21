import { FC, createContext, useContext, useState } from 'react';
import {
  LanguageContextProps,
  LanguageProviderProps,
  Translations,
} from '../types/translate';
import enData from '../components/localization/json/en.json';
import ruData from '../components/localization/json/ru.json';

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('EN');
  const translations: Record<string, Translations> = {
    EN: enData,
    RU: ruData,
  };
  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;
