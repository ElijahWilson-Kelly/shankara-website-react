import { React, useState, useEffect }from 'react';

import './background.css';

export const Background = (props) => {
  const [src,setSRC] = useState();

  useEffect(() => {
    setSRC(require('../../resources/images/shankaralogo2.jpeg'))
  },[])

  return (
    <div className="background">
      <img src={src} alt='background'/>
    </div>
  )
}
