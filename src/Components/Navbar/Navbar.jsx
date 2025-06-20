import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <img src="../public/logo.png" alt="logo" /> 
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Other</li>
      </ul>
      <button className='nav-connect'>Connect With Me</button>
    </div>
  )
}
