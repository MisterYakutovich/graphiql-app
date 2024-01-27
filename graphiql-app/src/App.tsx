import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  WELCOME_ROUTE,
} from './utils/consts';
import Login from './components/login/Login';
import Welcome from './pages/welcome/Welcome';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Page_404 from './pages/page_404/Page_404';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FC } from 'react';

import Loader from './components/loader/Loader';
import Register from './components/registration/Register';
import Main from './pages/main/Main';
import { auth } from './main';

const App: FC = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  const renderRoutes = () => {
    return (
      <Routes>
        <Route
          path={MAIN_ROUTE}
          element={user ? <Main /> : <Navigate to={LOGIN_ROUTE} />}
        />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={REGISTRATION_ROUTE} element={<Register />} />
        <Route path={WELCOME_ROUTE} element={<Welcome />} />
        <Route path="*" element={<Page_404 />} />
      </Routes>
    );
  };

  return (
    <>
      <BrowserRouter
        basename={process.env.NODE_ENV === 'production' ? '/graphiql-app' : '/'}
      >
        <Header />
        {renderRoutes()}
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
