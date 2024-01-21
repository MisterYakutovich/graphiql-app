import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { Context, ContextValue } from './main';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Login from './components/login/Login';
import { Translations } from './types/translate';
import Main from './pages/main/Main';
import Register from './components/registration/Register';
import Welcome from './pages/welcome/Welcome';
import { firebaseConfig } from './firebase/firebase';
import { LanguageContext } from './context/LanguageProvider';
import { Provider } from 'react-redux';
import { store } from './redux/store';

describe('App', () => {
  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const auth: ContextValue = {
    auth: getAuth(),
    db: firestore,
    signInWithGoogle: function (): Promise<void> {
      throw new Error('Function not implemented.');
    },
  };
  test('renders correct routes', () => {
    const translations: Record<string, Translations> = {
      EN: {
        description_text:
          'GraphiQL is a playground/IDE for graphQL requests. In this project you can authenticate and register using Firebase technology with login method by email and password. After logging in you will be taken to GraphiQL page with:',
        description_text_1: 'request editor (query editor / JSON viewer);',
        description_text_2: 'variables editor;',
        description_text_3: 'headers editor;',
        description_text_4: 'documentation explorer;',
        description_text_5: 'response section (query editor / JSON viewer);',
        description_text_6:
          'possibility to change to a different user-specified API endpoint;',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: '',
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
        about_title: 'This project was developed by',
        about_title_span: 'frontend developers:',
        about_description_text: 'PAVEL YAKUTOVICH',
        about_description_text_2: '',
        about_description_text_3: '',
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
        variables: '',
        headers: '',
        execute: '',
      },
      RU: {
        description_text:
          'GraphiQL — это игровая площадка/IDE для запросов GraphiQL. В этом проекте вы можете пройти аутентификацию и зарегистрироваться благодаря технологии Firebase.После входа в систему вы будете перенаправлены на страницу GraphiQL где:',
        description_text_1:
          'редактор запросов (редактор запросов/просмотрщик JSON);',
        description_text_2: 'редактор переменных;',
        description_text_3: 'редактор заголовков;',
        description_text_4: 'Проводник документации;',
        description_text_5:
          'раздел ответа (редактор запросов/просмотрщик JSON);',
        description_text_6:
          'возможность перехода на другую конечную точку API, указанную пользователем;',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: '',
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
        about_title: 'Этот проект был написан',
        about_title_span:
          'начинающий веб-разработчик, погружающийся в мир React',
        about_description_text: 'ПАВЕЛ ЯКУТОВИЧ',
        about_description_text_2: '',
        about_description_text_3: '',
        form_login_title: '',
        firstname: '',
        submit: '',
        submit_2: '',
        email: '',
        password: '',
        submit_login: '',
        submit_login_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
        variables: '',
        headers: '',
        execute: '',
      },
    };
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/login']}>
        <Provider store={store}>
          <LanguageContext.Provider
            value={{ language: 'EN', translations, changeLanguage: () => {} }}
          ></LanguageContext.Provider>
          <Context.Provider value={auth}>
            <LanguageContext.Provider
              value={{ language: 'EN', translations, changeLanguage: () => {} }}
            >
              <Routes>
                <Route path="/login" element={<Login />} />
              </Routes>
            </LanguageContext.Provider>
          </Context.Provider>
        </Provider>
      </MemoryRouter>
    );

    expect(getByTestId('login-component')).toBeInTheDocument();
  });
  test('renders correct routes', () => {
    const translations: Record<string, Translations> = {
      EN: {
        description_text:
          'GraphiQL is a playground/IDE for graphQL requests. In this project you can authenticate and register using Firebase technology with login method by email and password. After logging in you will be taken to GraphiQL page with:',
        description_text_1: 'request editor (query editor / JSON viewer);',
        description_text_2: 'variables editor;',
        description_text_3: 'headers editor;',
        description_text_4: 'documentation explorer;',
        description_text_5: 'response section (query editor / JSON viewer);',
        description_text_6:
          'possibility to change to a different user-specified API endpoint;',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: '',
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
        about_title: 'This project was developed by',
        about_title_span:
          'an aspiring web developer diving into the world of React',
        about_description_text: 'PAVEL YAKUTOVICH',
        about_description_text_2: '',
        about_description_text_3: '',
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
        variables: '',
        headers: '',
        execute: '',
      },
      RU: {
        description_text:
          'GraphiQL — это игровая площадка/IDE для запросов GraphiQL. В этом проекте вы можете пройти аутентификацию и зарегистрироваться благодаря технологии Firebase.После входа в систему вы будете перенаправлены на страницу GraphiQL где:',
        description_text_1:
          'редактор запросов (редактор запросов/просмотрщик JSON);',
        description_text_2: 'редактор переменных;',
        description_text_3: 'редактор заголовков;',
        description_text_4: 'Проводник документации;',
        description_text_5:
          'раздел ответа (редактор запросов/просмотрщик JSON);',
        description_text_6:
          'возможность перехода на другую конечную точку API, указанную пользователем;',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: '',
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
        about_title: 'Этот проект был написан',
        about_title_span:
          'начинающий веб-разработчик, погружающийся в мир React',
        about_description_text: 'ПАВЕЛ ЯКУТОВИЧ',
        about_description_text_2: '',
        about_description_text_3: '',
        form_login_title: '',
        firstname: '',
        submit: '',
        submit_2: '',
        email: '',
        password: '',
        submit_login: '',
        submit_login_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
        variables: '',
        headers: '',
        execute: '',
      },
    };
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/graphiql']}>
        <Provider store={store}>
          <LanguageContext.Provider
            value={{ language: 'EN', translations, changeLanguage: () => {} }}
          ></LanguageContext.Provider>
          <Context.Provider value={auth}>
            <LanguageContext.Provider
              value={{ language: 'EN', translations, changeLanguage: () => {} }}
            >
              <Routes>
                <Route path="/graphiql" element={<Main />} />
              </Routes>
            </LanguageContext.Provider>
          </Context.Provider>
        </Provider>
      </MemoryRouter>
    );

    expect(getByTestId('main-component')).toBeInTheDocument();
  });
  test('renders correct routes', () => {
    const translations: Record<string, Translations> = {
      EN: {
        description_text:
          'GraphiQL is a playground/IDE for graphQL requests. In this project you can authenticate and register using Firebase technology with login method by email and password. After logging in you will be taken to GraphiQL page with:',
        description_text_1: 'request editor (query editor / JSON viewer);',
        description_text_2: 'variables editor;',
        description_text_3: 'headers editor;',
        description_text_4: 'documentation explorer;',
        description_text_5: 'response section (query editor / JSON viewer);',
        description_text_6:
          'possibility to change to a different user-specified API endpoint;',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: '',
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
        about_title: 'This project was developed by',
        about_title_span:
          'an aspiring web developer diving into the world of React',
        about_description_text: 'PAVEL YAKUTOVICH',
        about_description_text_2: '',
        about_description_text_3: '',
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
        variables: '',
        headers: '',
        execute: '',
      },
      RU: {
        description_text:
          'GraphiQL — это игровая площадка/IDE для запросов GraphiQL. В этом проекте вы можете пройти аутентификацию и зарегистрироваться благодаря технологии Firebase.После входа в систему вы будете перенаправлены на страницу GraphiQL где:',
        description_text_1:
          'редактор запросов (редактор запросов/просмотрщик JSON);',
        description_text_2: 'редактор переменных;',
        description_text_3: 'редактор заголовков;',
        description_text_4: 'Проводник документации;',
        description_text_5:
          'раздел ответа (редактор запросов/просмотрщик JSON);',
        description_text_6:
          'возможность перехода на другую конечную точку API, указанную пользователем;',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: '',
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
        about_title: 'Этот проект был написан',
        about_title_span:
          'начинающий веб-разработчик, погружающийся в мир React',
        about_description_text: 'ПАВЕЛ ЯКУТОВИЧ',
        about_description_text_2: '',
        about_description_text_3: '',
        form_login_title: '',
        firstname: '',
        submit: '',
        submit_2: '',
        email: '',
        password: '',
        submit_login: '',
        submit_login_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
        variables: '',
        headers: '',
        execute: '',
      },
    };
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/registration']}>
        <Provider store={store}>
          <LanguageContext.Provider
            value={{ language: 'EN', translations, changeLanguage: () => {} }}
          ></LanguageContext.Provider>
          <Context.Provider value={auth}>
            <LanguageContext.Provider
              value={{ language: 'EN', translations, changeLanguage: () => {} }}
            >
              <Routes>
                <Route path="/registration" element={<Register />} />
              </Routes>
            </LanguageContext.Provider>
          </Context.Provider>
        </Provider>
      </MemoryRouter>
    );

    expect(getByTestId('register-component')).toBeInTheDocument();
  });
  test('renders correct routes', () => {
    const translations: Record<string, Translations> = {
      EN: {
        description_text:
          'GraphiQL is a playground/IDE for graphQL requests. In this project you can authenticate and register using Firebase technology with login method by email and password. After logging in you will be taken to GraphiQL page with:',
        description_text_1: 'request editor (query editor / JSON viewer);',
        description_text_2: 'variables editor;',
        description_text_3: 'headers editor;',
        description_text_4: 'documentation explorer;',
        description_text_5: 'response section (query editor / JSON viewer);',
        description_text_6:
          'possibility to change to a different user-specified API endpoint;',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: '',
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
        about_title: 'This project was developed by',
        about_title_span:
          'an aspiring web developer diving into the world of React',
        about_description_text: 'PAVEL YAKUTOVICH',
        about_description_text_2: '',
        about_description_text_3: '',
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
        variables: '',
        headers: '',
        execute: '',
      },
      RU: {
        description_text:
          'GraphiQL — это игровая площадка/IDE для запросов GraphiQL. В этом проекте вы можете пройти аутентификацию и зарегистрироваться благодаря технологии Firebase.После входа в систему вы будете перенаправлены на страницу GraphiQL где:',
        description_text_1:
          'редактор запросов (редактор запросов/просмотрщик JSON);',
        description_text_2: 'редактор переменных;',
        description_text_3: 'редактор заголовков;',
        description_text_4: 'Проводник документации;',
        description_text_5:
          'раздел ответа (редактор запросов/просмотрщик JSON);',
        description_text_6:
          'возможность перехода на другую конечную точку API, указанную пользователем;',
        title: '',
        title_span: '',
        title_1: '',
        signOut: '',
        welcome: '',
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
        about_title: 'Этот проект был написан',
        about_title_span:
          'начинающий веб-разработчик, погружающийся в мир React',
        about_description_text: 'ПАВЕЛ ЯКУТОВИЧ',
        about_description_text_2: '',
        about_description_text_3: '',
        form_login_title: '',
        firstname: '',
        submit: '',
        submit_2: '',
        email: '',
        password: '',
        submit_login: '',
        submit_login_2: '',
        back_sign_in: '',
        now: '',
        alert_registration: '',
        validacia_password: '',
        validation_name: '',
        digit: '',
        lowercase: '',
        uppercase: '',
        simbol: '',
        variables: '',
        headers: '',
        execute: '',
      },
    };
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <LanguageContext.Provider
            value={{ language: 'EN', translations, changeLanguage: () => {} }}
          ></LanguageContext.Provider>
          <Context.Provider value={auth}>
            <LanguageContext.Provider
              value={{ language: 'EN', translations, changeLanguage: () => {} }}
            >
              <Routes>
                <Route path="/" element={<Welcome />} />
              </Routes>
            </LanguageContext.Provider>
          </Context.Provider>
        </Provider>
      </MemoryRouter>
    );

    expect(getByTestId('welcome-component')).toBeInTheDocument();
  });
});
