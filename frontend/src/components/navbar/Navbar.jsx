import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            AdewoleBookings
          </Link>
        </span>
        <div className="navItems">
          <button className="reg navButton">Register</button>
          <button className="log navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar