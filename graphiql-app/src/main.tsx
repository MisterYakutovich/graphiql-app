import App from './App.tsx';
import { StrictMode, createContext } from 'react';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
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
import { QueryClient, QueryClientProvider } from 'react-query';
import { createRoot } from 'react-dom/client';
import { firebaseConfig } from './firebase/firebase.ts';
import LanguageProvider from './context/LanguageProvider.tsx';

export interface ContextValue {
  auth: Auth;
  db: Firestore;
  signInWithGoogle: () => Promise<void>;
}

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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <Context.Provider value={{ auth, db, signInWithGoogle }}>
            <App />
          </Context.Provider>
        </LanguageProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
