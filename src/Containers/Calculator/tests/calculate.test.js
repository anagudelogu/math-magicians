import calculate from '../logic/calculate';

describe('Calculate function', () => {
  let obj = {
    total: null,
    next: null,
    operation: null,
  };

  afterEach(() => {
    obj = {
      total: null,
      next: null,
      operation: null,
    };
  });

  const oneBtn = '1';
  const zeroBtn = '0';
  const plusBtn = '+';
  const equalBtn = '=';

  describe('Button is a number', () => {
    test('If is the first digit, set next value to number', () => {
      const res = calculate(obj, oneBtn);
      const expectedObj = {
        total: null,
        next: oneBtn,
      };
      expect(res).toEqual(expectedObj);
    });

    test("If there's a number, concatenate the next value", () => {
      obj = {
        total: null,
        next: oneBtn,
      };
      const res = calculate(obj, oneBtn);
      const expectedObj = {
        total: null,
        next: oneBtn + oneBtn,
      };
      expect(res).toEqual(expectedObj);
    });

    test('If the user tries to add subsequent 0, do nothing', () => {
      obj = {
        total: null,
        next: zeroBtn,
      };
      const res = calculate(obj, zeroBtn);
      const expectedObj = {};
      expect(res).toEqual(expectedObj);
    });

    test('If the User types a number right after an operation, set next value to number ', () => {
      obj = {
        total: oneBtn,
        next: null,
        operation: plusBtn,
      };
      const res = calculate(obj, oneBtn);
      const expectedObj = {
        total: oneBtn,
        next: oneBtn,
        operation: plusBtn,
      };
      expect(res).toEqual(expectedObj);
    });

    test("If there's and operation going, and the user types multiple numbers, concatenate", () => {
      obj = {
        total: oneBtn,
        next: oneBtn,
        operation: plusBtn,
      };
      const res = calculate(obj, oneBtn);
      const expectedObj = {
        total: oneBtn,
        next: oneBtn + oneBtn,
        operation: plusBtn,
      };
      expect(res).toEqual(expectedObj);
    });
  });

  describe('Button is "="', () => {
    test("If There's no operation going, do nothing", () => {
      const res = calculate(obj, equalBtn);
      const expectedObj = {};

      expect(res).toEqual(expectedObj);
    });

    test("If there's an operation going, operate total", () => {
      obj = {
        total: oneBtn,
        next: oneBtn,
        operation: plusBtn,
      };
      const res = calculate(obj, equalBtn);
      const expectedObj = {
        total: '2',
        next: null,
        operation: null,
      };
      expect(res).toEqual(expectedObj);
    });
  });

  describe('Button is "AC"', () => {
    it('Clears the object', () => {
      obj = {
        total: oneBtn,
        next: oneBtn,
        operation: plusBtn,
      };
      const res = calculate(obj, 'AC');
      const expectedObj = {
        total: null,
        next: null,
        operation: null,
      };
      expect(res).toEqual(expectedObj);
    });
  });

  describe('Button is "."', () => {
    test("If there's no number before, return 0.", () => {
      const res = calculate(obj, '.');
      const expectedObj = {
        total: null,
        next: '0.',
        operation: null,
      };

      expect(res).toEqual(expectedObj);
    });

    test("If user types '.' right after an operation", () => {
      obj = {
        total: oneBtn,
        next: null,
        operation: plusBtn,
      };
      const res = calculate(obj, '.');
      const expectedObj = {
        total: oneBtn,
        next: '0.',
        operation: plusBtn,
      };

      expect(res).toEqual(expectedObj);
    });

    test('If the user is typing numbers, and the value already has a ".", don\'t do anything', () => {
      obj = {
        total: oneBtn,
        next: '1.1',
        operation: null,
      };
      const res = calculate(obj, '.');

      expect(res).toEqual(obj);
    });

    test('If the user is typing numbers, and the value doesn\'t have a ".", add it', () => {
      obj = {
        total: oneBtn,
        next: oneBtn,
        operation: null,
      };
      const res = calculate(obj, '.');
      const expectedObj = {
        total: oneBtn,
        next: `${oneBtn}.`,
        operation: null,
      };

      expect(res).toEqual(expectedObj);
    });

    test('If user types "." right after equal sign, and the total already has a ".", clear the value', () => {
      obj = {
        total: '1.1',
        next: null,
        operation: null,
      };
      const res = calculate(obj, '.');
      const expectedObj = {};

      expect(res).toEqual(expectedObj);
    });

    test('If user types "." right after equal sign, and the total doesn\'t have a ".", add it', () => {
      obj = {
        total: oneBtn,
        next: null,
        operation: null,
      };
      const res = calculate(obj, '.');
      const expectedObj = {
        total: obj.total,
        next: `${obj.total}.`,
        operation: null,
      };

      expect(res).toEqual(expectedObj);
    });
  });

  describe('Button is "+/-"', () => {
    test('The user is typing numbers, and press "+/-", change the sign of the number', () => {
      obj = {
        total: null,
        next: oneBtn,
        operation: null,
      };
      const res = calculate(obj, '+/-');
      const expectedObj = {
        total: null,
        next: `-${obj.next}`,
        operation: null,
      };

      expect(res).toEqual(expectedObj);
    });

    test('The user press "+/-", right after equal sign or operation, change the sign of the number', () => {
      obj = {
        total: oneBtn,
        next: null,
        operation: null,
      };
      const res = calculate(obj, '+/-');
      const expectedObj = {
        total: `-${obj.total}`,
        next: null,
        operation: null,
      };

      expect(res).toEqual(expectedObj);
    });
  });

  describe('Button is an Operation', () => {
    test('It does nothing without entering a number first', () => {
      const res = calculate(obj, '-');
      const expectedObj = {};

      expect(res).toEqual(expectedObj);
    });

    test('If the user press an operation right after "=", set the operation and keep the total', () => {
      obj = {
        total: oneBtn,
        next: null,
        operation: null,
      };
      const res = calculate(obj, '-');
      const expectedObj = {
        total: obj.total,
        next: null,
        operation: '-',
      };

      expect(res).toEqual(expectedObj);
    });

    test('If the user press an operation after "=", and then press another operation, override it', () => {
      obj = {
        total: oneBtn,
        next: null,
        operation: '-',
      };
      const res = calculate(obj, plusBtn);
      const expectedObj = {
        total: obj.total,
        next: null,
        operation: plusBtn,
      };

      expect(res).toEqual(expectedObj);
    });

    test('If the user press an operation and had a number typed, operate and then save the last operation to queue', () => {
      obj = {
        total: oneBtn,
        next: oneBtn,
        operation: '-',
      };
      const res = calculate(obj, plusBtn);
      const expectedObj = {
        total: '0',
        next: null,
        operation: plusBtn,
      };

      expect(res).toEqual(expectedObj);
    });

    test('If the user press an Operation after writing a number for the first time, save the operation', () => {
      obj = {
        total: null,
        next: oneBtn,
        operation: null,
      };
      const res = calculate(obj, plusBtn);
      const expectedObj = {
        total: obj.next,
        next: null,
        operation: plusBtn,
      };

      expect(res).toEqual(expectedObj);
    });
  });
});
