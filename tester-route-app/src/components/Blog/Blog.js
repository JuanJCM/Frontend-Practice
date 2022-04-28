import React from 'react';
import PropTypes from 'prop-types';
import {Outlet} from "reac-router-dom";

function Blog(){
  return(
    <div className='home'>
      <div class = "container">
        <h1 className='text-center mt-5'> Blog page</h1>
        <Outlet/>
      </div>
    </div>
  );
}

Blog.propTypes = {};

Blog.defaultProps = {};

export default Blog;
