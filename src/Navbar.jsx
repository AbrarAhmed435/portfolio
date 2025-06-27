import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '/logo.png'; // Use logo from public folder or src

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li><NavLink to='/' className='navlinks'>Home</NavLink></li>
        <li><NavLink to='/about' className='navlinks'>About</NavLink></li>
        <li><NavLink to='/projects' className='navlinks'>Projects</NavLink></li>
        <li><NavLink to='/contact' className='navlinks'>Contact</NavLink></li>
        <li><NavLink to='/others' className='navlinks'>Others</NavLink></li>
      </ul>

      <button className='nav-connect'>Connect With Me</button>
    </div>
  );
}
