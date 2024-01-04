
/*import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';

import { Context } from '../../main';

jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: jest.fn(),
}));

// Mock useContext hook
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

const mockAuth = {
  auth: {
    signOut: jest.fn(),
  },
};

test('should display buttons for authenticated user', () => {
  // Stub the return values for useAuthState and useContext hooks
  useAuthState.mockReturnValueOnce([{}, false]);
  useContext.mockReturnValueOnce(mockAuth);

  render(<Header />);

  // Check if the "Main" button is displayed
  expect(screen.getByTestId('main-button')).toBeInTheDocument();

  // Check if the "Sign Out" button is displayed
  expect(screen.getByTestId('signOut-button')).toBeInTheDocument();
});

test('should display buttons for unauthenticated user', () => {
  // Stub the return values for useAuthState and useContext hooks
  useAuthState.mockReturnValueOnce([null, false]);
  useContext.mockReturnValueOnce(mockAuth);

  // Render the component with a null user
  render(<Header user={null} />);

  // Check if the "Login" button is displayed
  expect(screen.getByTestId('login-button')).toBeInTheDocument();

  // Check if the "Registration" button is displayed
  expect(screen.getByTestId('registration-button')).toBeInTheDocument();
});*/
/*test('отображение кнопок для авторизованного пользователя', () => {
 
   render(<Header/>);

  // Проверяем, что кнопка "Главная" отображается
  expect(screen.getByTestId('main-button')).toBeInTheDocument();

  // Проверяем, что кнопка "Выйти" отображается
  expect(screen.getByTestId('signOut-button')).toBeInTheDocument();
});

test('отображение кнопок для неавторизованного пользователя', () => {
  const { rerender } = render(<Header />);

  // Перерисовываем компонент с пользователем null
  rerender(<Header user={null}/>);

  // Проверяем, что кнопка "Войти" отображается
  expect(screen.getByTestId('login-button')).toBeInTheDocument();

  // Проверяем, что кнопка "Регистрация" отображается
  expect(screen.getByTestId('registration-button')).toBeInTheDocument();
});*/



/*import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Header from './Header';
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from '../../utils/consts';


jest.mock('../../main', () => ({
   
  useLanguage: jest.fn().mockReturnValue({
    language: 'en', // Set the desired language for the test
    translations: {
      en: {
        welcome: 'Welcome',
        main: 'Main',
        signOut: 'Sign Out',
        signIn: 'Sign In',
        signup: 'Sign Up',
      },
    },
  }),
}));

describe('Header component', () => {
  it('redirects to login route when "Sign In" button is clicked', () => {
    const navigateMock = jest.fn();
    const auth = { auth: {} };
    const useAuthStateMock = jest.fn().mockReturnValue([null, false]);
    jest.mock('react-firebase-hooks/auth', () => ({
      useAuthState: useAuthStateMock,
    }));
    const useNavigateMock = jest.fn().mockReturnValue(navigateMock);
    jest.mock('react-router-dom', () => ({
      Link: 'a',
      useNavigate: useNavigateMock,
    }));

    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    act(() => {
      fireEvent.click(getByText('Sign In'));
    });

    expect(navigateMock).toHaveBeenCalledWith(LOGIN_ROUTE);
  });

  it('redirects to registration route when "Sign Up" button is clicked', () => {
    const navigateMock = jest.fn();
    const auth = { auth: {} };
    const useAuthStateMock = jest.fn().mockReturnValue([null, false]);
    jest.mock('react-firebase-hooks/auth', () => ({
      useAuthState: useAuthStateMock,
    }));
    const useNavigateMock = jest.fn().mockReturnValue(navigateMock);
    jest.mock('react-router-dom', () => ({
      Link: 'a',
      useNavigate: useNavigateMock,
    }));

    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    act(() => {
      fireEvent.click(getByText('Sign Up'));
    });

    expect(navigateMock).toHaveBeenCalledWith(REGISTRATION_ROUTE);
  });
});
/*import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import '@testing-library/jest-dom';

test('redirects user to login/registration form on button click', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const loginButton = getByText('Sign in');
  fireEvent.click(loginButton);
  expect(window.location.pathname).toBe(LOGIN_ROUTE);

  const registrationButton = getByText('Signup');
  fireEvent.click(registrationButton);
  expect(window.location.pathname).toBe(REGISTRATION_ROUTE);
});*/

/*import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';


describe('Header component', () => {
  it('redirects to login route when "Sign In" button is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const signInButton = getByText('Sign In');
    fireEvent.click(signInButton);
    expect(window.location.pathname).toBe(LOGIN_ROUTE);
  });

  it('redirects to registration route when "Sign Up" button is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const signUpButton = getByText('Sign Up');
    fireEvent.click(signUpButton);
    expect(window.location.pathname).toBe(REGISTRATION_ROUTE);
  });
});*/
