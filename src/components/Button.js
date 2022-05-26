import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { handleClick, classN, value } = props;

  const handleClickBtn = (e) => {
    handleClick(e.target.innerText);
  };

  return (
    <button type="button" className={classN} onClick={handleClickBtn}>
      {value}
    </button>
  );
};

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

export default Button;
