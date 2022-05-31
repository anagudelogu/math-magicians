import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const { handleClick, value, isOperation } = props;

  const handleClickBtn = (e) => {
    handleClick(e.target.innerText);
  };

  return (
    <button
      type="button"
      className={`btn ${isOperation ? 'operation__btn' : ''}`}
      onClick={handleClickBtn}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func,
  isOperation: PropTypes.bool,
};

Button.defaultProps = {
  value: undefined,
  handleClick: () => {},
  isOperation: false,
};

export default Button;
