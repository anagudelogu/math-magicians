import React from 'react';
import calculate from '../js/calculate';
import Button from './Button';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calc: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.operationsRight = ['÷', 'x', '-', '+', '='];
    this.operationsCenter = ['AC', '+/-', '%'];
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState((state) => ({
      calc: calculate(state.calc, buttonName),
    }));
  }

  createDigits() {
    this.digits = [];

    for (let i = 0; i < 10; i += 1) {
      this.digits.push(
        <Button
          classN="btn digits__btn"
          value={`${i}`}
          handleClick={this.handleClick}
        />,
      );
    }
    return this.digits;
  }

  createOperations(operations) {
    this.operationsArr = [];
    operations.forEach((operation) => {
      this.operationsArr.push(
        <Button
          classN="btn operation__btn"
          value={operation}
          handleClick={this.handleClick}
        />,
      );
    });
    return this.operationsArr;
  }

  render() {
    const { calc } = this.state;
    const { total, next } = calc;
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
            {this.createOperations(this.operationsRight)}
          </div>

          <div className="operations center">
            {this.createOperations(this.operationsCenter)}
          </div>

          <div className="digits">
            {this.createDigits()}
            <Button
              classN="btn digits__btn"
              value="."
              handleClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
