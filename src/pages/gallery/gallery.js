import { React, useState, useEffect }from 'react';
import { photoArray, shutterEffect } from './galleryscript.js';
import './gallery.css';

const nextButton = require('./next-1.png');

export const Gallery = (props) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [image, setImage] = useState(photoArray[0]);

  const changePhoto = direction => {
    shutterEffect();
    let newIndex = imageIndex + direction;

    if (newIndex >= photoArray.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = photoArray.length - 1;
    }

    setImageIndex(newIndex);
  }

  useEffect(() => {
    setImage(photoArray[imageIndex]);
  },[imageIndex])

  return (
    <div>
      <div id='gallery-display'>
        <div id='gallery-previous' className='gallery-navigation' onClick={() => {changePhoto(-1)}}>
          <img src={nextButton} className='gallery-nav-icons' alt=''/>
        </div>
        <div id='photo-div'>
          <div className='shutter-effect-container'></div>
          <img className='gallery-photo' alt='' src={image}/>
        </div>
        <div id='gallery-next' className='gallery-navigation' onClick={() => {changePhoto(1)}}>
          <img src={nextButton} className='gallery-nav-icons' alt=''/>
        </div>
      </div>
    </div>
  )
}
