import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";


const Navbar = () => {

  const user = useSelector(state => state.auth.user)


  return (

    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            AdewoleBookings
          </Link>
        </span>
        <span className="logo">
          <Link to="/hotelpage" style={{ textDecoration: "none", color: "inherit" }}>
            Hotels
          </Link>
        </span>
        {
          user ? user.username : (
            <div className="navItems">
              <button className="reg navButton" > <Link style={{ textDecoration: "none", color: "inherit" }} to='/register'>Register</Link></button>
              <button className="log navButton" ><Link style={{ textDecoration: "none", color: "inherit" }} to='/login'>Login</Link></button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar