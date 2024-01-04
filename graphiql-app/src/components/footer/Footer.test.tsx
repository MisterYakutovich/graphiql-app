import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('should render the footer', () => {
    const { getByTestId } = render(<Footer />);
    const footerElement = getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });
});

describe('<Footer />', () => {
  test('рендерит Footer компонент', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass('footer');

    const currentYear = '2023';
    const yearElement = screen.getByText(currentYear);
    expect(yearElement).toBeInTheDocument();
  
    const githubLink = screen.getByText('Github');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/MisterYakutovich'
    );

    const rollingScopesLink = screen.getByText('Rolling Scopes');
    expect(rollingScopesLink).toBeInTheDocument();
    expect(rollingScopesLink).toHaveAttribute(
      'href',
      'https://rs.school/react/'
    );

    const svgLogo = screen.getByTitle('rs_school');
    expect(svgLogo).toBeInTheDocument();
  });
});
