import { render, fireEvent, screen } from '@testing-library/react';
import SwitchLanguages from './Languages';
import '@testing-library/jest-dom';

describe('SwitchLanguages component', () => {
  test('renders the language button', () => {
    render(<SwitchLanguages />);
    const buttonElement = screen.getByText(/EN/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
jest.mock('../../main', () => ({
  useLanguage: () => ({
    language: 'EN',
    changeLanguage: jest.fn(),
  }),
}));
describe('SwitchLanguages', () => {
  test('renders the default language button', () => {
    const { getByText } = render(<SwitchLanguages />);
    const buttonElement = getByText('EN');
    expect(buttonElement).toBeInTheDocument();
  });

  test('toggles the dropdown when clicked', () => {
    const { getByText, queryByText } = render(<SwitchLanguages />);
    const buttonElement = getByText('EN'); //EN
    fireEvent.click(buttonElement);
    expect(queryByText('RU'));
    fireEvent.click(buttonElement);
    expect(getByText('EN')).toBeInTheDocument();
  });
});
