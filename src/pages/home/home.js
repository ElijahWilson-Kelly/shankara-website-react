import React from 'react';

import './home.css';

const shankaraLogo = require('../../resources/images/shankara-logo.png');

export const Home = (props) => {
  return (
    <div>
      <div className='main-logo-container'>
        <img className='main-logo' src={shankaraLogo} alt='logo'/>
      </div>
    </div>
  )
}
