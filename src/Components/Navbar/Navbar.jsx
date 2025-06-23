import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <img src="../public/logo.png" alt="logo" /> 
      <ul className="nav-menu">
        <li><Link to='/' className='navlinks'>Home</Link></li>
        {/* <li><NavLink to='/' className='navLinks'>Home</NavLink></li> */}
        <li><Link to='/about' className='navlinks'>About77</Link></li>
        <li><Link to='/about' className='navlinks'>About</Link></li>
        <li><Link to='/projects' className='navlinks'>Projects</Link></li>
        <li><Link to='/contact' className='navlinks'>Contact</Link></li>
        <li><Link to='/others' className='navlinks'>Others</Link></li>
      </ul>
      <button className='nav-connect'>Connect With Me</button>
    </div>
  )
}
