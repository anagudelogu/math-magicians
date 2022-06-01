import Calculator from '../index';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Calculator', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('User clicked a Button in calculator', () => {
    render(<Calculator />);
    const button = screen.getByText('7');
    const value = screen.getByTestId('value');

    fireEvent.click(button, {target: {innerText: '7'}});

    expect(value.textContent).toBe(` ${button.textContent}`);
  });

  it('Should do operations', () => {
    render(<Calculator />);
    const value = screen.getByTestId('value');

    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('='));

    expect(value.textContent).toBe(' 35');
  });
});