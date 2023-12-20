import React, { FC, createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
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

interface Translations {
  description_text: string;
  description_text_1: string;
  description_text_2: string;
  description_text_3: string;
  description_text_4: string;
  description_text_5: string;
  description_text_6: string;
  title: string;
  title_span: string;
  title_1: string;
  signOut: string;
  welcome: string;
  main: string;
  signIn: string;
  signup: string;
  course_description_title: string;
  course_description_text: string;
  course_description_text_1: string;
  course_description_text_2: string;
  course_description_text_3: string;
  course_description_text_4: string;
  course_description_text_5: string;
  course_description_text_6: string;
  course_description_text_7: string;
  course_description_text_8: string;
  about_description_text: string;
  about_description_text_2: string;
  about_description_text_3: string;
  about_title: string;
  about_title_span: string;
  form_login_title: string;
  email: string;
  password: string;
  submit_login: string;
  submit_login_2: string;
  firstname: string;
  submit: string;
  submit_2: string;
  back_sign_in: string;
  now: string;
  alert_registration: string;
  validacia_password: string;
  validation_name: string;
  digit: string;
  lowercase: string;
  uppercase: string;
  simbol: string;
}

interface LanguageContextProps {
  language: string;
  translations: Record<string, Translations>;
  changeLanguage: (newLanguage: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

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

interface ContextValue {
  auth: Auth;
  db: Firestore;
  signInWithGoogle: () => Promise<void>;
}

const firebaseConfig = {
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
    console.log(user);
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

export const Context = createContext<ContextValue | null>(null);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <Context.Provider value={{ auth, db, signInWithGoogle }}>
        <App />
      </Context.Provider>
    </LanguageProvider>
  </React.StrictMode>
);
