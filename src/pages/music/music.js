import React from 'react';

import { Link } from 'react-router-dom';

import { Logo } from '../../components/logo/logo.js';

import { albums } from '../../resources/albuminfo.js';
import './music.css';

export const Music = (props) => {

  return (
    <div>
      <Logo />
      <div className='music-page-main'>
        {albums.map(album => {
          const image = require(`../../resources/images/album-covers/${album.img}`);
          return (
            <div className='albumcover'>
              <img src={image} alt='album-cover'/>
              <div className='moreinfo'>
                <Link to='/'>Buy</Link>
                <Link to='/'>Info</Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
