import React, { useState } from 'react';
import calculate from './logic/calculate';
import Button from '../../components/Button';
import './Calculator.css';
import * as keys from './logic/keys';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next, operation } = state;

  const handleClick = (buttonName) => {
    setState((prevState) => calculate(prevState, buttonName));
  };

  const createDigits = (digits) => {
    const digitsBtns = digits.map((digit) => (
      <Button
        key={`${digit}`}
        isOperation={false}
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
        isOperation
        value={operation}
        handleClick={handleClick}
      />
    ));
    return operationsArr;
  };

  return (
    <div data-testid="Calculator" className="calculator">
      <div className="calculator__display">
        <span data-testid="value" className="calculator__value">
          {' '}
          {next || operation || total || '0'}
        </span>
      </div>

      <div className="calculator__keypad">
        <div className="operations right">
          {createOperations(keys.OPERATIONS_RIGHT)}
        </div>

        <div className="operations center">
          {createOperations(keys.OPERATIONS_CENTER)}
        </div>

        <div className="digits">{createDigits(keys.DIGITS)}</div>
      </div>
    </div>
  );
};

export default Calculator;
