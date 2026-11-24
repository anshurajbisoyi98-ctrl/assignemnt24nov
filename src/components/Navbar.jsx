import { NavLink } from 'react-router'

function Navbar({ appliedCount }) {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        Work<span>Lane</span>
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/jobs">Browse Jobs</NavLink>
        <NavLink to="/applied">Applied ({appliedCount})</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
