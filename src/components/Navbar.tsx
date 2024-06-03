import { NavLink } from "react-router-dom"
import logo from "/favicon-32x32.png"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img src={logo} alt="The website logo, a parrot" />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/sightings">Sightings</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
