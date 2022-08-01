import React from 'react';

import { Link } from 'react-router-dom';

import './logo.css';

const logo = require('../../resources/images/shankara-logo.png');

export const Logo = () => {
  return (
    <div className='main-logo'>
      <Link to='/'>
        <img alt='main logo' src={logo}/>
      </Link>
    </div>
  )
}
