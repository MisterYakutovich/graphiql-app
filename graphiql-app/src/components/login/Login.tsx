import { FC, useContext, useState } from 'react';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useLanguage } from '../../context/LanguageProvider';
import { Context } from '../../main';

const Login: FC = () => {
  const { language, translations } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Error | null>(null);

  const auth = useContext(Context);
  const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth!.auth, email, password);
    } catch (err) {
      const typedError = err as Error;
      setError(typedError);
      return;
    }
  };

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
        <button
          className="submit_login"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          {translations[language].submit_login}
        </button>
        <button className="submit_login" onClick={auth?.signInWithGoogle}>
          {translations[language].submit_login_2}
        </button>
      </form>
    </section>
  );
};
export default Login;
