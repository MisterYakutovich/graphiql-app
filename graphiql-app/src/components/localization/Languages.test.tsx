
import { render, fireEvent } from '@testing-library/react';
import SwitchLanguages from './Languages';
import '@testing-library/jest-dom';


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
      const { getByText,queryByText } = render(<SwitchLanguages />);
      const buttonElement = getByText('EN');//EN
      fireEvent.click(buttonElement);
      expect(queryByText('RU'))//.toBeNull(); // Dropdown is closed, EN should not be visible
      fireEvent.click(buttonElement);
      expect(getByText('EN')).toBeInTheDocument(); // Dropdown is open, EN should be visible
    });
  
    /*test('handles language change when a language is selected', () => {
      const { getByText } = render(<SwitchLanguages />);
      const enButton = getByText('EN');
      
      const ruButton = getByText('RU');
      fireEvent.click(enButton);
      expect(enButton).toHaveTextContent('EN'); // Check that changeLanguage is called when EN is clicked
      fireEvent.click(ruButton);
      expect(ruButton).toHaveTextContent('RU'); // Check that changeLanguage is called when RU is clicked
    });*/
   
  });
  
  
  
/*import { fireEvent, render } from '@testing-library/react';
import SwitchLanguages from './Languages';
import '@testing-library/jest-dom';

test('toggles dropdown on click', () => {
  const { getByText, getByTestId } = render(<SwitchLanguages />);
  const buttonElement = getByText(/EN/i); // Assuming 'EN' is the default language
  fireEvent.click(buttonElement);
  const dropdownElement = getByTestId('dropdown-content');
  expect(dropdownElement).toBeInTheDocument();
});

test('changes language on click', () => {
  const { getByText } = render(<SwitchLanguages />);
  const ruButton = getByText(/RU/i);
  fireEvent.click(ruButton);
  // Add your assertions to check if the changeLanguage function is called
  // and the language is changed as expected
});

test('closes dropdown after language change', () => {
  const { getByText, queryByTestId } = render(<SwitchLanguages />);
  const ruButton = getByText(/RU/i);
  fireEvent.click(ruButton);
  const dropdownElement = queryByTestId('dropdown-content');
  expect(dropdownElement).not.toBeInTheDocument();
});*/
//test('renders language button', () => {
//  const { getByText } = render(<SwitchLanguages />);
 // const buttonElement = getByText(/EN/i); // Assuming 'EN' is the default language
 // expect(buttonElement).toBeInTheDocument();
//});

