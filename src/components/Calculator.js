/* eslint-disable class-methods-use-this */

import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <button type="button" className="btn operation__btn">
              ÷
            </button>
            <button type="button" className="btn operation__btn">
              x
            </button>
            <button type="button" className="btn operation__btn">
              -
            </button>
            <button type="button" className="btn operation__btn">
              +
            </button>
            <button type="button" className="btn operation__btn">
              =
            </button>
          </div>

          <div className="operations main">
            <button type="button" className="btn operation__btn">
              AC
            </button>
            <button type="button" className="btn operation__btn">
              +/-
            </button>
            <button type="button" className="btn operation__btn">
              %
            </button>
          </div>

          <div className="digits">
            <button type="button" className="btn digits__btn">
              1
            </button>
            <button type="button" className="btn digits__btn">
              2
            </button>
            <button type="button" className="btn digits__btn">
              3
            </button>
            <button type="button" className="btn digits__btn">
              4
            </button>
            <button type="button" className="btn digits__btn">
              5
            </button>
            <button type="button" className="btn digits__btn">
              6
            </button>
            <button type="button" className="btn digits__btn">
              7
            </button>
            <button type="button" className="btn digits__btn">
              8
            </button>
            <button type="button" className="btn digits__btn">
              9
            </button>
            <button type="button" className="btn digits__btn">
              0
            </button>

            <button type="button" className="btn digits__btn">
              .
            </button>
          </div>
        </div>
      </div>
    );
  }
}
