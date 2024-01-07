import { render } from '@testing-library/react';
import Loader from './Loader';
import '@testing-library/jest-dom';

test('displays loader during app loading', () => {
  const { getByTestId } = render(<Loader />);
  const loaderElement = getByTestId('loader');
  expect(loaderElement).toBeInTheDocument();
});
