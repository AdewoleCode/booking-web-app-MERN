import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../../redux/slices/AuthSlice";


const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)

  const handleLogout = () => {
    dispatch(AuthActions.logout())
    localStorage.clear('user')
    navigate('/')
  }


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
          user ? (
            <div>
              <h1>user.username</h1>
              <button onClick={handleLogout} className="log navButton">Logout</button>
            </div>
          )

            : (
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