import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { Context } from '../../main';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { LOGIN_ROUTE } from '../../utils/consts';
function Register() {
  const auth = useContext(Context);
  console.log(auth?.db);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const registerWithEmailAndPassword = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth!.auth,
        email,
        password
      );
      const user = res.user;
      await addDoc(collection(auth!.db, 'users'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      });
    } catch (err) {
      const typedError = err as Error;
      console.error(err);
      alert(typedError?.message);
      return;
    }
  };
  const register = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };

  return (
    <section className="section-form">
      <div className="form">
        <div className="form_title">Welcome</div>

        <div className="input-container ic1">
          <input
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            First name
          </label>
        </div>
        <div className="input-container ic2">
          <input
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
          />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="password" className="placeholder">
            Password
          </label>
        </div>
        <button className="submit" onClick={register}>
          submit
        </button>
        <button className="submit" onClick={auth?.signInWithGoogle}>
          Register with Google
        </button>
        <p className="back_sign_in">
          Already have an account?{' '}
          <Link to={LOGIN_ROUTE}>
            <span>Login</span>
          </Link>{' '}
          now.
        </p>
      </div>
    </section>
  );
}
export default Register;
