import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



firebase.initializeApp({
  apiKey: "AIzaSyCgcg4liT5oqSclmnlNPbILgECwGp43xxI",
  authDomain: "graphql-cfa62.firebaseapp.com",
  projectId: "graphql-cfa62",
  storageBucket: "graphql-cfa62.appspot.com",
  messagingSenderId: "557793702995",
  appId: "1:557793702995:web:fd417292d6115d86edc2a6",
  measurementId: "G-EM419SR6C5"
})


export interface ContextValue {
  firestore: firebase.firestore.Firestore;
  auth: firebase.auth.Auth;
  firebase: typeof firebase;
}

export const Context = createContext<ContextValue | null>(null);
const auth=firebase.auth()
const firestore=firebase.firestore()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.Provider value={{firestore,auth,firebase}}>
    <App />
    </Context.Provider>
  </React.StrictMode>
);
