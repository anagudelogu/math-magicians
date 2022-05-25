import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classN, value } = this.props;
    return (
      <button type="button" className={classN}>
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  classN: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  classN: 'btn',
  value: undefined,
};
