import { render, fireEvent } from '@testing-library/react';
import Main from './Main';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { LanguageContext } from '../../context/LanguageProvider';
import { Translations } from '../../types/translate';

test('сохранение и получение данных из localStorage', () => {
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
      about_description_text: '',
      about_description_text_2: '',
      about_description_text_3: '',
      about_title: '',
      about_title_span: '',
      form_login_title: '',
      email: 'Email',
      password: 'Password',
      submit_login: 'Login',
      submit_login_2: 'Login with Google',
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
      variables: 'variables',
      headers: 'headers',
      execute: 'Execute',
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
      about_description_text: '',
      about_description_text_2: '',
      about_description_text_3: '',
      about_title: '',
      about_title_span: '',
      form_login_title: '',
      email: 'Электронная почта',
      password: 'Пароль',
      submit_login: 'Войти',
      submit_login_2: 'Войти через Google',
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
      variables: 'переменные',
      headers: 'заголовоки',
      execute: 'Выполнить',
    },
  };
  const { getByTestId } = render(
    <Provider store={store}>
      <LanguageContext.Provider
        value={{ language: 'EN', translations, changeLanguage: () => {} }}
      >
        <Main />
      </LanguageContext.Provider>
    </Provider>
  );

  const queryInput = getByTestId('query-input') as HTMLTextAreaElement;

  fireEvent.change(queryInput, { target: { value: 'New request' } });

  expect(localStorage.getItem('query')).toEqual(JSON.stringify('New request'));

  const loadedQuery = localStorage.getItem('query');
  expect(loadedQuery).toEqual(JSON.stringify(queryInput.value));
});

test('saving and retrieving data from localStorage API URL', () => {
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
      about_description_text: '',
      about_description_text_2: '',
      about_description_text_3: '',
      about_title: '',
      about_title_span: '',
      form_login_title: '',
      email: 'Email',
      password: 'Password',
      submit_login: 'Login',
      submit_login_2: 'Login with Google',
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
      variables: 'variables',
      headers: 'headers',
      execute: 'Execute',
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
      about_description_text: '',
      about_description_text_2: '',
      about_description_text_3: '',
      about_title: '',
      about_title_span: '',
      form_login_title: '',
      email: 'Электронная почта',
      password: 'Пароль',
      submit_login: 'Войти',
      submit_login_2: 'Войти через Google',
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
      variables: 'переменные',
      headers: 'заголовоки',
      execute: 'Выполнить',
    },
  };
  const { getByTestId } = render(
    <Provider store={store}>
      <LanguageContext.Provider
        value={{ language: 'EN', translations, changeLanguage: () => {} }}
      >
        <Main />
      </LanguageContext.Provider>
    </Provider>
  );

  const apiUrl = getByTestId('apiUrl-input') as HTMLTextAreaElement;
  fireEvent.change(apiUrl, { target: { value: 'New request' } });
  expect(localStorage.getItem('apiUrl')).toEqual(JSON.stringify('New request'));
  const loadedQuery = localStorage.getItem('apiUrl');
  expect(loadedQuery).toEqual(JSON.stringify(apiUrl.value));
});

test('saving and retrieving data from localStorage Variables', () => {
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
      about_description_text: '',
      about_description_text_2: '',
      about_description_text_3: '',
      about_title: '',
      about_title_span: '',
      form_login_title: '',
      email: 'Email',
      password: 'Password',
      submit_login: 'Login',
      submit_login_2: 'Login with Google',
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
      variables: 'variables',
      headers: 'headers',
      execute: 'Execute',
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
      about_description_text: '',
      about_description_text_2: '',
      about_description_text_3: '',
      about_title: '',
      about_title_span: '',
      form_login_title: '',
      email: 'Электронная почта',
      password: 'Пароль',
      submit_login: 'Войти',
      submit_login_2: 'Войти через Google',
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
      variables: 'переменные',
      headers: 'заголовоки',
      execute: 'Выполнить',
    },
  };
  const { getByTestId } = render(
    <Provider store={store}>
      <LanguageContext.Provider
        value={{ language: 'EN', translations, changeLanguage: () => {} }}
      >
        <Main />
      </LanguageContext.Provider>
    </Provider>
  );

  const variables = getByTestId('variables-input') as HTMLTextAreaElement;
  fireEvent.change(variables, { target: { value: 'New request' } });
  expect(localStorage.getItem('variables')).toEqual(
    JSON.stringify('New request')
  );
  const loadedQuery = localStorage.getItem('variables');
  expect(loadedQuery).toEqual(JSON.stringify(variables.value));
});

test('saving and retrieving data from localStorage Variables', () => {
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
      about_description_text: '',
      about_description_text_2: '',
      about_description_text_3: '',
      about_title: '',
      about_title_span: '',
      form_login_title: '',
      email: 'Email',
      password: 'Password',
      submit_login: 'Login',
      submit_login_2: 'Login with Google',
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
      variables: 'variables',
      headers: 'headers',
      execute: 'Execute',
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
      about_description_text: '',
      about_description_text_2: '',
      about_description_text_3: '',
      about_title: '',
      about_title_span: '',
      form_login_title: '',
      email: 'Электронная почта',
      password: 'Пароль',
      submit_login: 'Войти',
      submit_login_2: 'Войти через Google',
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
      variables: 'переменные',
      headers: 'заголовоки',
      execute: 'Выполнить',
    },
  };
  const { getByTestId } = render(
    <Provider store={store}>
      <LanguageContext.Provider
        value={{ language: 'EN', translations, changeLanguage: () => {} }}
      >
        <Main />
      </LanguageContext.Provider>
    </Provider>
  );

  const headers = getByTestId('headers-input') as HTMLTextAreaElement;
  fireEvent.change(headers, { target: { value: 'New request' } });
  expect(localStorage.getItem('headers')).toEqual(
    JSON.stringify('New request')
  );
  const loadedQuery = localStorage.getItem('headers');
  expect(loadedQuery).toEqual(JSON.stringify(headers.value));
});
