import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Documentation from './Documentation';

describe('Documentation component', () => {
  it('renders schema types', async () => {
    const apiUrl = 'https://rickandmortyapi.com/graphql';

    global.fetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve({
          data: {
            __schema: {
              types: [{ name: 'Type1' }, { name: 'Type2' }],
            },
          },
        }),
    });

    const { findByText } = render(<Documentation apiUrl={apiUrl} />);
    await new Promise((resolve) => setTimeout(resolve, 0));
    // await waitFor(async () => {
    expect(fetch).toHaveBeenCalledWith(apiUrl, expect.any(Object));
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(await findByText('Type1')).toBeInTheDocument();
    expect(await findByText('Type2')).toBeInTheDocument();
    // });
  });

  it('handles error when fetching schema', async () => {
    const apiUrl = 'https://rickandmortyapi.com/graphql';

    global.fetch = jest.fn().mockRejectedValue(new Error('Failed to fetch'));

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    render(<Documentation apiUrl={apiUrl} />);
    await new Promise((resolve) => setTimeout(resolve, 0));
    // await waitFor(() => {
    expect(fetch).toHaveBeenCalledWith(apiUrl, expect.any(Object));
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error fetching schema:',
      expect.any(Error)
    );
    // });

    consoleErrorSpy.mockRestore();
  });
});
