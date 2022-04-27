import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper/Wrapper';
import Screen from '../Screen/Screen';


const ButtonBox = ({children}) => (
   <div className='buttonBox'>{children}</div>
);

ButtonBox.propTypes = {};

ButtonBox.defaultProps = {};

export default ButtonBox;
