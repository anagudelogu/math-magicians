import { render, screen } from '@testing-library/react';
import Button from './index';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('Renders', () => {
    render(<Button />);
    expect(screen.getByRole('button')).not.toBeNull();
  });

  it('Renders a Button component', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('If the Button isOperation, adds a class operation__btn', () => {
    render(<Button isOperation />);
    expect(screen.getByRole('button').className).toMatch(
      /operation__btn/,
    );
  });
});
