import operate from '../logic/operate';

describe('Operate function', () => {
  it('Sums', () => {
    const sum = operate('1', '2', '+');

    expect(sum).toBe('3');
  });
  it('Subsctracts', () => {
    const difference = operate('3', '2', '-');

    expect(difference).toBe('1');
  });
  it('Multiplies', () => {
    const product = operate('1', '2', 'x');

    expect(product).toBe('2');
  });
  it('Divides', () => {
    const quotient = operate('14', '2', '÷');

    expect(quotient).toBe('7');
  });

  test('If user try to divide by 0, returns error', () => {
    const quotient = operate('14', '0', '÷');

    expect(quotient).toBe("Can't divide by 0.");
  });

  it('Gets the modulo', () => {
    const modulo = operate('8', '2', '%');

    expect(modulo).toBe('0');
  });

  test('If user try to get the modulo of 0, returns error', () => {
    const modulo = operate('14', '0', '%');

    expect(modulo).toBe("Can't find modulo as can't divide by 0.");
  });
});
