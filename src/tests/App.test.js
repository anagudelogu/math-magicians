import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('It Renders the Home page as Index', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Welcome to our page/)).not.toBeNull();
  });

  test('When the user clicks Calculator, it displays the Calculator component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const calculatorLink = screen.getByText('Calculator');
    fireEvent.click(calculatorLink);
    const acBtn = screen.getByText('AC');
    const equalBtn = screen.getByText('=');
    const divitionBtn = screen.getByText('÷');
    expect(acBtn).not.toBeNull();
    expect(equalBtn).not.toBeNull();
    expect(divitionBtn).not.toBeNull();
  });

  test('When the user clicks Quote, it displays the Quote component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const quoteLink = screen.getByText('Quote');

    fireEvent.click(quoteLink);

    const author = screen.getByText(/William Paul Thurston/);
    expect(author).not.toBeNull();
  });
});
