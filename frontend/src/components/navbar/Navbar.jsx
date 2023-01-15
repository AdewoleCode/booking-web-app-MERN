import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">AdewoleBookings</span>
        <div className="navItems">
          <button className="reg navButton">Register</button>
          <button className="log navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar