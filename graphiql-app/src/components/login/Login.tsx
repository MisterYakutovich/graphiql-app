import { FC, useEffect, useState } from 'react';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useLanguage } from '../../context/LanguageProvider';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/consts';
import { auth, signInWithGoogle } from '../../main';

const Login: FC = () => {
  const [userAuth, loading] = useAuthState(auth);
  const { language, translations } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Error | null>(null);

  const navigate = useNavigate();

  const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      const typedError = err as Error;
      setError(typedError);
      return;
    }
  };
  const handleLoginClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await logInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (loading) {
      return;
    }

    if (userAuth) navigate(`${MAIN_ROUTE}`);
  }, [userAuth, loading]);
  return (
    <section className="section-form_login" data-testid="login-component">
      <form className="form-login">
        {error && <p className="error">{error.message}</p>}

        <div className="form-login_title">
          {' '}
          {translations[language].form_login_title}
        </div>

        <div className="input-container_login ic2">
          <input
            type="text"
            id="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
          />
          <div className="cut cut-short_login"></div>
          <label htmlFor="email" className="placeholder">
            {translations[language].email}
          </label>
        </div>
        <div className="input-container_login ic2">
          <input
            type="password"
            id="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
          />
          <div className="cut cut-short_login"></div>
          <label htmlFor="password" className="placeholder">
            {translations[language].password}
          </label>
        </div>
        <button className="submit_login" onClick={handleLoginClick}>
          {translations[language].submit_login}
        </button>
        <button className="submit_login" onClick={signInWithGoogle}>
          {translations[language].submit_login_2}
        </button>
      </form>
    </section>
  );
};
export default Login;
