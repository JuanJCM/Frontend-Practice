import React from 'react';
import PropTypes from 'prop-types';
import "./Wrapper.css";

const Wrapper = ({children}) => (
  <div className='wrapper'>{children}</div>
);

Wrapper.propTypes = {};

Wrapper.defaultProps = {};

export default Wrapper;
