import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import {
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  WELCOME_ROUTE,
} from '../../utils/consts';
import { FC, useContext, useEffect } from 'react';
import { Context, useLanguage } from '../../main';
import { useAuthState } from 'react-firebase-hooks/auth';
import SwitchLanguages from '../localization/Languages';


const Header: FC = () => {
  const auth = useContext(Context);
  const { language, translations } = useLanguage();
  const [userAuth, loading] = useAuthState(auth!.auth);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (userAuth) navigate(`${MAIN_ROUTE}`);
  }, [userAuth, loading]);
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header_wrapper">
          <nav className="header-nav_welcome">
            <ul>
              <Link to={WELCOME_ROUTE}>
                <li className="header_link_welcome">
                  {translations[language].welcome}
                </li>
              </Link>
            </ul>
            <SwitchLanguages />
          </nav>

          <nav className="navbar">
            <ul className="header_list">
              {userAuth ? (
                <>
                  <Link to={MAIN_ROUTE}>
                    <button className="button" data-testid="main-button">
                      {translations[language].main}
                    </button>
                  </Link>
                  <button
                    onClick={() => auth?.auth.signOut()}
                    className="button"
                    data-testid="signOut-button"
                  >
                    {translations[language].signOut}
                  </button>
                </>
              ) : (
                <>
                  <Link to={LOGIN_ROUTE}>
                    <button className="button" data-testid="login-button">
                      {translations[language].signIn}
                    </button>
                  </Link>
                  <Link to={REGISTRATION_ROUTE}>
                    <button className="button" data-testid="registration-button">
                      {translations[language].signup}
                    </button>
                  </Link>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
