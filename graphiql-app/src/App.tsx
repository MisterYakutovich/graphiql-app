import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './routes/PrivateRoute';
import Qraphiql from './pages/main/Qraphiql';
import { LOGIN_ROUTE, MAIN_ROUTE, WELCOME_ROUTE } from './utils/consts';
import PublicRoute from './routes/PublicRoute';
import Login from './components/login/Login';
import Welcome from './pages/welcome/Welcome';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Page_404 from './pages/page_404/Page_404';
import {useAuthState} from "react-firebase-hooks/auth"
import { useContext } from 'react';
import { Context } from './main';
import  Loader  from './components/loader/Loader';
//import { isAuth } from './utils/flag';

function App() {
  const auth=useContext(Context)
  const [user,loading,error] = useAuthState(auth?.auth)
 if (loading) {
  return <Loader/>
 }
  /*
 <Routes>
      <Route element={<PrivateRoute/>}>
        <Route path={MAIN_ROUTE} element={<Qraphiql/>}/>
      </Route>
      <Route element={<PublicRoute/>}>
        <Route path={LOGIN_ROUTE} element={<Login/>}/>
        <Route path={WELCOME_ROUTE} element={<Welcome/>}/>
      </Route>
    </Routes>

     <Routes>
        <Route path={MAIN_ROUTE} element={isAuth ? <Qraphiql /> : <Navigate to={WELCOME_ROUTE} />} />
        <Route path={WELCOME_ROUTE} element={<Welcome />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path='*' element={<Page_404/>}/>
      </Routes>
*/
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path={MAIN_ROUTE}
            element={user ? <Qraphiql /> : <Navigate to={LOGIN_ROUTE} />}
          />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={WELCOME_ROUTE} element={<Welcome />} />
          <Route path="*" element={<Page_404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
