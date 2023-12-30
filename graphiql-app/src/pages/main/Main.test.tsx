import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';
import '@testing-library/jest-dom';

describe('executeQuery', () => {
  it('should make an asynchronous request and update the response state', async () => {
    render(<Main />);

    // Здесь вы можете получить доступ к вашему компоненту и симулировать ввод данных
    const queryInput = screen.getByLabelText('Query');
    userEvent.type(queryInput, 'Your test query here');

    const apiUrlInput = screen.getByLabelText('API URL');
    userEvent.type(apiUrlInput, 'Your test API URL here');

    // Нажмите кнопку для выполнения запроса
    const executeButton = screen.getByText('Execute');
    userEvent.click(executeButton);

    // Дождитесь обновления состояния response
    await waitFor(() => {
      expect(screen.getByText('Your expected response')).toBeInTheDocument();
    });
  });
});


/*describe('executeQuery', () => {
  it('should make an asynchronous request and update the response state', async () => {
    render(<Main />);

    // Дождитесь завершения загрузки компонента
    await waitFor(() => {
      // Здесь вы можете получить доступ к вашему компоненту и симулировать ввод данных
      const queryInput = screen.getByLabelText('Query');
      userEvent.type(queryInput, 'Your test query here');

      const apiUrlInput = screen.getByLabelText('API URL');
      userEvent.type(apiUrlInput, 'Your test API URL here');

      // Нажмите кнопку для выполнения запроса
      const executeButton = screen.getByText('Execute');
      userEvent.click(executeButton);
    });

    // Дождитесь обновления состояния response
    await waitFor(() => {
      expect(screen.getByText('Your expected response')).toBeInTheDocument();
    });
  });
});*/