import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { handleClick } = this.props;
    handleClick(e.target.innerText);
  }

  render() {
    const { classN, value } = this.props;
    return (
      <button
        type="button"
        className={classN}
        onClick={this.handleClick}
      >
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  classN: PropTypes.string,
  value: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  classN: 'btn',
  value: undefined,
  handleClick: () => {},
};
