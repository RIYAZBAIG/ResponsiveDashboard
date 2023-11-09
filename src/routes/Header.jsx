import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router

function Header() {
  return (
    <nav className='header' style={{marginLeft:"225px"}} >
      <ul>
        <li><Link to="/"  >Home</Link></li> 
      </ul>
    </nav>
  );
}

export default Header;
