import { React, useEffect } from 'react';

import './footer.css';

import { Link } from 'react-router-dom';

import { addObserver } from './floatingscript';

const facebookIcon = require('./images/facebook.png');
const instagramIcon = require('./images/instagram.png');
const soundcloudIcon = require('./images/soundcloud.png');
const spotifyIcon = require('./images/spotify.png');
const youtubeIcon = require('./images/youtube.png');


export const Footer = props => {
  useEffect(addObserver,[]);

  return (
    <footer className='base-line'>
			<div className='social-media-links-container'>
				<a href='https://www.facebook.com/ShankaraNewZealand' target='_blank'>
          <img src={facebookIcon} alt='facebook link'/>
        </a>
				<Link to='http://instagram.com/shankaranewzealand/?hl=en' target='_blank'>
          <img src={instagramIcon} alt='instagram link'/>
        </Link>
				<Link to='https://soundcloud.com/shankaranewzealand' target='_blank'>
          <img src={soundcloudIcon} alt='soundcloud link'/>
        </Link>
				<Link to='http://open.spotify.com/artist/4Qtb8BZuGO3kLIAmCVxH29' target='_blank'>
          <img src={spotifyIcon} alt='spotify link'/>
        </Link>
				<Link to='http://youtube.com/channel/UC4398ud5Nr8Gk90NJnZB8SA' target='_blank'>
          <img src={youtubeIcon} alt='youtube link'/>
        </Link>
			</div>
		</footer>
  )
}
