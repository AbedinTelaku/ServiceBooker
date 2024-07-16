import { Link } from 'react-router-dom';
import React from 'react';
import "./navbar.css";

function Home() {
  return (
    <nav>
      <ul>
        <li className='components'><Link to="/">Home</Link></li>
        <li className='components'><Link to="/about">About</Link></li>
        <li className='components'><Link to="/company">Company</Link></li>
        <li className='components'><Link to="/contact">Contact us</Link></li>
      </ul>
    </nav>
  );
}

export default Home;
