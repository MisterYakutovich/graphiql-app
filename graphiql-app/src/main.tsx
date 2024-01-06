import { FC, StrictMode, createContext, useContext, useState } from 'react';
import App from './App.tsx';
import { initializeApp } from 'firebase/app';
import {
  Auth,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';
import enData from '../src/components/localization/json/en.json';
import ruData from '../src/components/localization/json/ru.json';
import {
  LanguageContextProps,
  LanguageProviderProps,
  Translations,
} from './types/translate.ts';
import { QueryClient, QueryClientProvider } from 'react-query';

import { createRoot } from 'react-dom/client';

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
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

export interface ContextValue {
  auth: Auth;
  db: Firestore;
  signInWithGoogle: () => Promise<void>;
}

export const firebaseConfig = {
  apiKey: 'AIzaSyCgcg4liT5oqSclmnlNPbILgECwGp43xxI',
  authDomain: 'graphql-cfa62.firebaseapp.com',
  projectId: 'graphql-cfa62',
  storageBucket: 'graphql-cfa62.appspot.com',
  messagingSenderId: '557793702995',
  appId: '1:557793702995:web:fd417292d6115d86edc2a6',
  measurementId: 'G-EM419SR6C5',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, 'users'), where('uid', '==', user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (err) {
    const typedError = err as Error;
    alert(typedError?.message);
    return;
  }
};
const queryClient = new QueryClient();
export const Context = createContext<ContextValue | null>(null);
const rootElement =
  (document.getElementById('root') as HTMLElement) ||
  document.createElement('div');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Context.Provider value={{ auth, db, signInWithGoogle }}>
          <App />
        </Context.Provider>
      </LanguageProvider>
    </QueryClientProvider>
  </StrictMode>
);
