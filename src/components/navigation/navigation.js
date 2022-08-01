import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css'

export const Navigation = (props) => {


  return (
    <nav>
  		<ul>
  			<li><NavLink to='/'>Home</NavLink></li>
  		  <li><NavLink to='/music'>Music</NavLink></li>
  			<li><a href='https://shankaranz.bandcamp.com/' target='_blank'>Music Store</a></li>
  			<li><NavLink to='/gallery'>Gallery</NavLink></li>
  			<li><NavLink to='/contact'>Contact</NavLink></li>
  		</ul>
  	</nav>
  )
}
