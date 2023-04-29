import React from 'react';
import logo from '../img/logo.png';
import './logo.css';



function Logo() {
  return (
    <div>
       <img id= 'logo' src={logo} alt="JobFinder" />
    
    </div>   
  );
}

export default Logo;