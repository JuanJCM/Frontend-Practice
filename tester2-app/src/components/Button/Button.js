import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Button = ({className, value, onClick}) => (
  <div>
    <button className={className} onClick={onClick}>
    {value}
    </button> 
  </div>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
