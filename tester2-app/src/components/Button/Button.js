import React, {useState} from 'react';
import PropTypes from 'prop-types';
import "./Button.css";

const Button = ({className, value, onClick}) => (
    <button className={className} onClick={onClick}>
    {value}
    </button> 
  
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
