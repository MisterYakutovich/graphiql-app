import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import { Translations } from '../../types/translate';
import {
  Context,
  ContextValue,
  LanguageContext,
  firebaseConfig,
} from '../../main';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
describe('Header component', () => {
  it('renders welcome link and language switcher', () => {
    const translations: Record<string, Translations> = {
      EN: {
        description_text_1: '',
        description_text: '',
        description_text_2: '',
        description_text_3: '',
        description_text_4: '',
        description_text_5: '',
        description_text_6: '',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: 'WELCOME',
        main: '',
        signIn: '',
        signup: '',
        course_description_title: '',
        course_description_text: '',
        course_description_text_1: '',
        course_description_text_2: '',
        course_description_text_3: '',
        course_description_text_4: '',
        course_description_text_5: '',
        course_description_text_6: '',
        course_description_text_7: '',
        course_description_text_8: '',
        about_description_text: '',
        about_description_text_2: '',
        about_description_text_3: '',
        about_title: '',
        about_title_span: '',
        form_login_title: '',
        email: '',
        password: '',
        submit_login: '',
        submit_login_2: '',
        firstname: '',
        submit: '',
        submit_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
      },
      RU: {
        description_text: '',
        description_text_1: '',
        description_text_2: '',
        description_text_3: '',
        description_text_4: '',
        description_text_5: '',
        description_text_6: '',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: 'ЖЕЛАННЫЙ',
        main: '',
        signIn: '',
        signup: '',
        course_description_title: '',
        course_description_text: '',
        course_description_text_1: '',
        course_description_text_2: '',
        course_description_text_3: '',
        course_description_text_4: '',
        course_description_text_5: '',
        course_description_text_6: '',
        course_description_text_7: '',
        course_description_text_8: '',
        about_description_text: '',
        about_description_text_2: '',
        about_description_text_3: '',
        about_title: '',
        about_title_span: '',
        form_login_title: '',
        email: '',
        password: '',
        submit_login: '',
        submit_login_2: '',
        firstname: '',
        submit: '',
        submit_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
      },
    };
    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);
    const auth: ContextValue = {
      auth: getAuth(),
      db: firestore,
      signInWithGoogle: function (): Promise<void> {
        throw new Error('Function not implemented.');
      },
    };
    const { getByText } = render(
      <MemoryRouter>
        <Context.Provider value={auth}>
          <LanguageContext.Provider
            value={{ language: 'EN', translations, changeLanguage: () => {} }}
          >
            <Header />
          </LanguageContext.Provider>
        </Context.Provider>
      </MemoryRouter>
    );

    expect(getByText('WELCOME')).toBeInTheDocument();
    expect(getByText('EN')).toBeInTheDocument();
  });

  it('renders login and registration buttons when user is not authenticated', () => {
    const translations: Record<string, Translations> = {
      EN: {
        description_text_1: '',
        description_text: '',
        description_text_2: '',
        description_text_3: '',
        description_text_4: '',
        description_text_5: '',
        description_text_6: '',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: 'WELCOME',
        main: '',
        signIn: 'SIGN IN',
        signup: 'SIGN UP',
        course_description_title: '',
        course_description_text: '',
        course_description_text_1: '',
        course_description_text_2: '',
        course_description_text_3: '',
        course_description_text_4: '',
        course_description_text_5: '',
        course_description_text_6: '',
        course_description_text_7: '',
        course_description_text_8: '',
        about_description_text: '',
        about_description_text_2: '',
        about_description_text_3: '',
        about_title: '',
        about_title_span: '',
        form_login_title: '',
        email: '',
        password: '',
        submit_login: '',
        submit_login_2: '',
        firstname: '',
        submit: '',
        submit_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
      },
      RU: {
        description_text: '',
        description_text_1: '',
        description_text_2: '',
        description_text_3: '',
        description_text_4: '',
        description_text_5: '',
        description_text_6: '',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: 'ЖЕЛАННЫЙ',
        main: '',
        signIn: 'ВХОД',
        signup: 'РЕГИСТРАЦИЯ',
        course_description_title: '',
        course_description_text: '',
        course_description_text_1: '',
        course_description_text_2: '',
        course_description_text_3: '',
        course_description_text_4: '',
        course_description_text_5: '',
        course_description_text_6: '',
        course_description_text_7: '',
        course_description_text_8: '',
        about_description_text: '',
        about_description_text_2: '',
        about_description_text_3: '',
        about_title: '',
        about_title_span: '',
        form_login_title: '',
        email: '',
        password: '',
        submit_login: '',
        submit_login_2: '',
        firstname: '',
        submit: '',
        submit_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
      },
    };
    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);
    const auth: ContextValue = {
      auth: getAuth(),
      db: firestore,
      signInWithGoogle: function (): Promise<void> {
        throw new Error('Function not implemented.');
      },
    };
    const { getByTestId } = render(
      <MemoryRouter>
        <Context.Provider value={auth}>
          <LanguageContext.Provider
            value={{ language: 'EN', translations, changeLanguage: () => {} }}
          >
            <Header />
          </LanguageContext.Provider>
        </Context.Provider>
      </MemoryRouter>
    );

    expect(getByTestId('login-button')).toBeInTheDocument();
    expect(getByTestId('registration-button')).toBeInTheDocument();
  });

  /*it('renders main and sign out buttons when user is authenticated', async() => {
    const translations: Record<string, Translations> = {
      EN: {
        description_text_1: '',
        description_text: '',
        description_text_2: '',
        description_text_3: '',
        description_text_4: '',
        description_text_5: '',
        description_text_6: '',
        title: '',
        title_span: '',
        title_1: '',
        signOut: 'SIGN OUT',
        welcome: 'WELCOME',
        main: 'MAIN',
        signIn: 'SIGN IN',
        signup: 'SIGN UP',
        course_description_title: '',
        course_description_text: '',
        course_description_text_1: '',
        course_description_text_2: '',
        course_description_text_3: '',
        course_description_text_4: '',
        course_description_text_5: '',
        course_description_text_6: '',
        course_description_text_7: '',
        course_description_text_8: '',
        about_description_text: '',
        about_description_text_2: '',
        about_description_text_3: '',
        about_title: '',
        about_title_span: '',
        form_login_title: '',
        email: '',
        password: '',
        submit_login: '',
        submit_login_2: '',
        firstname: '',
        submit: '',
        submit_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
      },
      RU: {
        description_text: '',
        description_text_1: '',
        description_text_2: '',
        description_text_3: '',
        description_text_4: '',
        description_text_5: '',
        description_text_6: '',
        title: '',
        title_span: '',
        title_1: '',
        signOut: 'ВЫХОД',
        welcome: 'ЖЕЛАННЫЙ',
        main: 'ОСНОВНАЯ',
        signIn: 'ВХОД',
        signup: 'РЕГИСТРАЦИЯ',
        course_description_title: '',
        course_description_text: '',
        course_description_text_1: '',
        course_description_text_2: '',
        course_description_text_3: '',
        course_description_text_4: '',
        course_description_text_5: '',
        course_description_text_6: '',
        course_description_text_7: '',
        course_description_text_8: '',
        about_description_text: '',
        about_description_text_2: '',
        about_description_text_3: '',
        about_title: '',
        about_title_span: '',
        form_login_title: '',
        email: '',
        password: '',
        submit_login: '',
        submit_login_2: '',
        firstname: '',
        submit: '',
        submit_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
      },
    };
    // Mock the useAuthState hook to return authenticated user
   
    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);
    const auth: ContextValue = {
      auth: getAuth(),
      db: firestore,
      signInWithGoogle: function (): Promise<void> {
        throw new Error('Function not implemented.');
      },
    };
    jest.mock('react-firebase-hooks/auth', () => ({
      useAuthState: () => [true, false],
    }));
    const { getByTestId } = render(
       <MemoryRouter>
      <Context.Provider value={auth}>
        <LanguageContext.Provider
          value={{ language: 'EN', translations, changeLanguage: () => {} }}
        >
          <Header />
        </LanguageContext.Provider>
      </Context.Provider>
    </MemoryRouter>
    );
    await waitFor(() => {
    expect(getByTestId('main-button')).toBeInTheDocument();
    expect(getByTestId('signOut-button')).toBeInTheDocument();
  });
})*/

  it('navigates to the correct route when link is clicked', () => {
    const translations: Record<string, Translations> = {
      EN: {
        description_text_1: '',
        description_text: '',
        description_text_2: '',
        description_text_3: '',
        description_text_4: '',
        description_text_5: '',
        description_text_6: '',
        title: '',
        title_span: '',
        title_1: '',
        signOut: 'SIGN OUT',
        welcome: 'WELCOME',
        main: 'MAIN',
        signIn: 'SIGN IN',
        signup: 'SIGN UP',
        course_description_title: '',
        course_description_text: '',
        course_description_text_1: '',
        course_description_text_2: '',
        course_description_text_3: '',
        course_description_text_4: '',
        course_description_text_5: '',
        course_description_text_6: '',
        course_description_text_7: '',
        course_description_text_8: '',
        about_description_text: '',
        about_description_text_2: '',
        about_description_text_3: '',
        about_title: '',
        about_title_span: '',
        form_login_title: '',
        email: '',
        password: '',
        submit_login: '',
        submit_login_2: '',
        firstname: '',
        submit: '',
        submit_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
      },
      RU: {
        description_text: '',
        description_text_1: '',
        description_text_2: '',
        description_text_3: '',
        description_text_4: '',
        description_text_5: '',
        description_text_6: '',
        title: '',
        title_span: '',
        title_1: '',
        signOut: 'ВЫХОД',
        welcome: 'ЖЕЛАННЫЙ',
        main: 'ОСНОВНАЯ',
        signIn: 'ВХОД',
        signup: 'РЕГИСТРАЦИЯ',
        course_description_title: '',
        course_description_text: '',
        course_description_text_1: '',
        course_description_text_2: '',
        course_description_text_3: '',
        course_description_text_4: '',
        course_description_text_5: '',
        course_description_text_6: '',
        course_description_text_7: '',
        course_description_text_8: '',
        about_description_text: '',
        about_description_text_2: '',
        about_description_text_3: '',
        about_title: '',
        about_title_span: '',
        form_login_title: '',
        email: '',
        password: '',
        submit_login: '',
        submit_login_2: '',
        firstname: '',
        submit: '',
        submit_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
      },
    };
    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);
    const auth: ContextValue = {
      auth: getAuth(),
      db: firestore,
      signInWithGoogle: function (): Promise<void> {
        throw new Error('Function not implemented.');
      },
    };
    const { getByText } = render(
      <MemoryRouter>
        <Context.Provider value={auth}>
          <LanguageContext.Provider
            value={{ language: 'EN', translations, changeLanguage: () => {} }}
          >
            <Header />
          </LanguageContext.Provider>
        </Context.Provider>
      </MemoryRouter>
    );

    fireEvent.click(getByText('WELCOME'));
    fireEvent.click(getByText('SIGN IN'));
    fireEvent.click(getByText('SIGN UP'));
    // Проверьте, что произошел переход на корректный маршрут
  });
});
