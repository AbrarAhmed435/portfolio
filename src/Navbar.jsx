import './Navbar.css'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className="navbar">
      <img src="../public/logo.png" alt="logo" /> 
      <ul className="nav-menu">
        <li><NavLink to='/' className='navlinks'>Home</NavLink></li>
        <li><NavLink to='/about' className='navlinks'>About</NavLink></li>
        <li><NavLink to='/projects' className='navlinks'>Projects</NavLink></li>
        <li><NavLink to='/contact' className='navlinks'>Contact</NavLink></li>
        <li><NavLink to='/others' className='navlinks'>Others</NavLink></li>
      </ul>
      <button className='nav-connect'>Connect With Me</button>
    </div>
  )
}
