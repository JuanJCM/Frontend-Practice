import React from 'react';
import PropTypes from 'prop-types';
import { Textfit } from 'react-textfit';
import "./Screen.css";

const Screen = ({value}) => (
  <div>
    <Textfit className= 'screen' mode = "single" max = {70}>
      {value}
    </Textfit>
  </div>

);

Screen.propTypes = {};

Screen.defaultProps = {};

export default Screen;
