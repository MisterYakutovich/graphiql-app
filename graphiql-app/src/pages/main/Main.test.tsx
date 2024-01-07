import { render, fireEvent } from '@testing-library/react';
import Main from './Main';
import '@testing-library/jest-dom';

test('сохранение и получение данных из localStorage', () => {
  const { getByTestId } = render(<Main />);

  const queryInput = getByTestId('query-input') as HTMLTextAreaElement;

  fireEvent.change(queryInput, { target: { value: 'New request' } });

  expect(localStorage.getItem('query')).toEqual(JSON.stringify('New request'));

  const loadedQuery = localStorage.getItem('query');
  expect(loadedQuery).toEqual(JSON.stringify(queryInput.value));
});

test('saving and retrieving data from localStorage API URL', () => {
  const { getByTestId } = render(<Main />);

  const apiUrl = getByTestId('apiUrl-input') as HTMLTextAreaElement;
  fireEvent.change(apiUrl, { target: { value: 'New request' } });
  expect(localStorage.getItem('apiUrl')).toEqual(JSON.stringify('New request'));
  const loadedQuery = localStorage.getItem('apiUrl');
  expect(loadedQuery).toEqual(JSON.stringify(apiUrl.value));
});

test('saving and retrieving data from localStorage Variables', () => {
  const { getByTestId } = render(<Main />);

  const variables = getByTestId('variables-input') as HTMLTextAreaElement;
  fireEvent.change(variables, { target: { value: 'New request' } });
  expect(localStorage.getItem('variables')).toEqual(
    JSON.stringify('New request')
  );
  const loadedQuery = localStorage.getItem('variables');
  expect(loadedQuery).toEqual(JSON.stringify(variables.value));
});

test('saving and retrieving data from localStorage Variables', () => {
  const { getByTestId } = render(<Main />);

  const headers = getByTestId('headers-input') as HTMLTextAreaElement;
  fireEvent.change(headers, { target: { value: 'New request' } });
  expect(localStorage.getItem('headers')).toEqual(
    JSON.stringify('New request')
  );
  const loadedQuery = localStorage.getItem('headers');
  expect(loadedQuery).toEqual(JSON.stringify(headers.value));
});
