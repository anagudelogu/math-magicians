import React from 'react';
import Button from './Button';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.operationsRight = ['÷', 'x', '-', '+', '='];
    this.operationsCenter = ['AC', '+/-', '%'];
  }

  createDigits() {
    this.digits = [];

    for (let i = 0; i < 10; i += 1) {
      this.digits.push(<Button classN="btn digits__btn" value={i} />);
    }
    return this.digits;
  }

  createOperations(operations) {
    this.operationsArr = [];
    operations.forEach((operation) => {
      this.operationsArr.push(
        <Button classN="btn operation__btn" value={operation} />,
      );
    });
    return this.operationsArr;
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator__display">
          <span className="calculator__temp">(0)</span>
          <span className="calculator__value"> 0 </span>
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
            <Button classN="btn digits__btn" value="." />
          </div>
        </div>
      </div>
    );
  }
}
