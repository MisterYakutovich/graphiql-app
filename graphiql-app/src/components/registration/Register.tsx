import { useContext, useState } from 'react';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import './Register.css';
import { Context, useLanguage } from '../../main';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { LOGIN_ROUTE } from '../../utils/consts';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface IFormInput {
  firstName: string;
  email: string;
  password: string;
}

function Register() {
  const auth = useContext(Context);
  const { language, translations } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // const [user, loading] = useAuthState(auth!.auth);
  const [, setIsSubmitted] = useState(false);
  const onSubmit: SubmitHandler<IFormInput> = () => {
    setIsSubmitted(true);
  };

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
        password,
      });
    } catch (err) {
      const typedError = err as Error;
      console.error(err);
      alert(typedError?.message);
      return;
    }
  };
  const registration = () => {
    if (!name) alert(`${translations[language].alert_registration}`); //Please enter name
    registerWithEmailAndPassword(name, email, password);
  };

  const getCharacterValidationError = (str: string) => {
    return `${translations[language].validacia_password} ${str}`; //Your password must have at least 1 ${str} character
  };

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required()
      .matches(/^[A-Z]/, `${translations[language].validation_name}`), //First name must start with an uppercase letter
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(5)
      .max(32)
      .required()
      .matches(
        /[0-9]/,
        getCharacterValidationError(`${translations[language].digit}`)
      ) //digit
      .matches(
        /[a-z]/,
        getCharacterValidationError(`${translations[language].lowercase}`)
      ) //lowercase
      .matches(
        /[A-Z]/,
        getCharacterValidationError(`${translations[language].uppercase}`)
      ) //uppercase
      .matches(
        /[^\w ]/g,
        getCharacterValidationError(`${translations[language].simbol}`)
      ), //simbol
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  return (
    <section className="section-form">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_title">
          {translations[language].form_login_title}
        </div>

        <div className="input-container ic1">
          <input
            {...register('firstName')}
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=" "
          />

          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            {translations[language].firstname}
          </label>
          <p className="error_registration">{errors.firstName?.message}</p>
        </div>
        <div className="input-container ic2">
          <input
            {...register('email')}
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
          />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            {translations[language].email}
          </label>
          <p className="error_registration">{errors.email?.message}</p>
        </div>
        <div className="input-container ic2">
          <input
            {...register('password')}
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="password" className="placeholder">
            {translations[language].password}
          </label>
          <p className="error_registration">{errors.password?.message}</p>
        </div>
        <button disabled={!isValid} className="submit" onClick={registration}>
          {translations[language].submit}
        </button>
        <button className="submit" onClick={auth?.signInWithGoogle}>
          {translations[language].submit_2}
        </button>
        <p className="back_sign_in">
          {translations[language].back_sign_in}{' '}
          <Link to={LOGIN_ROUTE}>
            <span>{translations[language].submit_login}</span>
          </Link>{' '}
          {translations[language].now}
        </p>
      </form>
    </section>
  );
}
export default Register;
