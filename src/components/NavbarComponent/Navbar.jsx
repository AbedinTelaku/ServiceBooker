import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './navbar.css';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className='components'><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li className='components'><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li className='components'><Link to="/company" onClick={toggleMenu}>Company</Link></li>
        <li className='components'><Link to="/contact" onClick={toggleMenu}>Contact us</Link></li>
      </ul>
    </nav>
  );
}

export default Home;
