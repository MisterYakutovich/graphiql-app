
import { render } from '@testing-library/react';
import Page_404 from './Page_404';
import '@testing-library/jest-dom'


test('renders 404 page', () => {
  const { getByText } = render(<Page_404 />);
  const page404Element = getByText(/Page_404/i);
  expect(page404Element).toBeInTheDocument();
});