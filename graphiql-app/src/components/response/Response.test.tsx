import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Response from './Response';

describe('Response component', () => {
  it('should save and load response data to/from localStorage', () => {
    const response = 'Test response';
    localStorage.setItem('response', JSON.stringify(response));

    render(<Response response={response} />);

    const responseInputs = screen.getAllByTestId('response');
    responseInputs.forEach((input) => {
      expect(input).toHaveTextContent(JSON.stringify(response, null, 2));
    });
  });

  it('should save new response data to localStorage when updated', () => {
    const response = 'Initial response';
    const newResponse = 'New response';
    localStorage.setItem('response', JSON.stringify(response));

    const { rerender } = render(<Response response={response} />);

    const responseInputs = screen.getAllByTestId('response');
    responseInputs.forEach((input) => {
      expect(input).toHaveTextContent(JSON.stringify(response, null, 2));
    });

    localStorage.setItem('response', JSON.stringify(newResponse));
    rerender(<Response response={newResponse} />);

    const updatedResponseInputs = screen.getAllByTestId('response');
    updatedResponseInputs.forEach((input) => {
      expect(input).toHaveTextContent(JSON.stringify(newResponse, null, 2));
    });
  });
});
