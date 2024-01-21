import { render } from '@testing-library/react';
import Welcome from './Welcome';
import '@testing-library/jest-dom';
import { Translations } from '../../types/translate';
import { MemoryRouter } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageProvider';
describe('Welcome component', () => {
  test('renders welcome text', () => {
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

        about_title: 'This project was developed by',
        about_title_span:
          'an aspiring web developer diving into the world of React',
        about_description_text: 'PAVEL YAKUTOVICH',
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
        variables: 'variables',
        headers: 'headers',
        execute: 'Execute',
      },
      RU: {
        description_text:
          'GraphiQL — это игровая площадка/IDE для запросов GraphiQL. В этом проекте вы можете пройти аутентификацию и зарегистрироваться благодаря технологии Firebase.После входа в систему вы будете перенаправлены на страницу GraphiQL где:',
        description_text_1:
          'редактор запросов (редактор запросов/просмотрщик JSON);',
        description_text_2: 'редактор переменных;',
        description_text_3: 'редактор заголовков;',
        description_text_4: 'проводник документации;',
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
        about_title: 'Этот проект разработал',
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
        variables: 'переменные',
        headers: 'заголовоки',
        execute: 'Выполнить',
      },
    };
    const { getByText } = render(
      <MemoryRouter>
        <LanguageContext.Provider
          value={{ language: 'EN', translations, changeLanguage: () => {} }}
        >
          <Welcome />
        </LanguageContext.Provider>
      </MemoryRouter>
    );

    expect(
      getByText((content) => {
        return content.includes(
          'GraphiQL is a playground/IDE for graphQL requests. In this project you can authenticate and register using Firebase technology with login method by email and password. After logging in you will be taken to GraphiQL page with:'
        );
      })
    ).toBeInTheDocument();
    expect(
      getByText((content) => {
        return (
          content.includes('request editor') &&
          content.includes('query editor') &&
          content.includes('JSON viewer')
        );
      })
    ).toBeInTheDocument();
    expect(
      getByText((content) => {
        return content.includes('variables') && content.includes('editor;');
      })
    ).toBeInTheDocument();
    expect(
      getByText((content) => {
        return content.includes('headers') && content.includes('editor;');
      })
    ).toBeInTheDocument();
    expect(
      getByText((content) => {
        return (
          content.includes('documentation') &&
          content.includes('explorer;') &&
          content.includes('JSON viewer')
        );
      })
    ).toBeInTheDocument();
    expect(
      getByText((content) => {
        return (
          content.includes('response section') &&
          content.includes('query editor') &&
          content.includes('JSON viewer')
        );
      })
    ).toBeInTheDocument();
    expect(
      getByText((content) => {
        return content.includes(
          'possibility to change to a different user-specified API endpoint;'
        );
      })
    ).toBeInTheDocument();
    expect(
      getByText((content) => {
        return content.includes('This project was developed by');
      })
    ).toBeInTheDocument();
    expect(
      getByText((content) => {
        return content.includes(
          'an aspiring web developer diving into the world of React'
        );
      })
    ).toBeInTheDocument();
    expect(
      getByText((content) => {
        return content.includes('PAVEL YAKUTOVICH');
      })
    ).toBeInTheDocument();
  });
});
