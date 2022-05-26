import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

export default function Calculator() {
  const OPERATIONS_RIGHT = ['÷', 'x', '-', '+', '='];
  const OPERATIONS_CENTER = ['AC', '+/-', '%'];
  const DIGITS = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '.',
  ];

  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next } = state;

  const handleClick = (buttonName) => {
    setState((prevState) => calculate(prevState, buttonName));
  };

  const createDigits = (digits) => {
    const digitsBtns = digits.map((digit) => (
      <Button
        key={`${digit}`}
        classN="btn digits__btn"
        value={`${digit}`}
        handleClick={handleClick}
      />
    ));
    return digitsBtns;
  };

  const createOperations = (operations) => {
    const operationsArr = operations.map((operation) => (
      <Button
        key={operation}
        classN="btn operation__btn"
        value={operation}
        handleClick={handleClick}
      />
    ));
    return operationsArr;
  };

  return (
    <div className="calculator">
      <div className="calculator__display">
        <span className="calculator__value">
          {' '}
          {next || total || '0'}
        </span>
      </div>

      <div className="calculator__keypad">
        <div className="operations right">
          {createOperations(OPERATIONS_RIGHT)}
        </div>

        <div className="operations center">
          {createOperations(OPERATIONS_CENTER)}
        </div>

        <div className="digits">{createDigits(DIGITS)}</div>
      </div>
    </div>
  );
}
