import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './css/Navbar.css'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">CareerConnect</NavLink>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>About</NavLink>
          <NavLink to="/features" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Features</NavLink>
          <NavLink to="/resources" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Resources</NavLink>
          <NavLink to="/colleges" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Colleges</NavLink>
          <NavLink to="/timeline" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Timeline</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Contact</NavLink>
          {user?.isAdmin && (
            <NavLink to="/admin" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Admin</NavLink>
          )}
        </div>
        <div className="navbar-auth">
          {user ? (
            <>
              <span className="navbar-link">{user.name}</span>
              <button className="navbar-auth-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="navbar-auth-btn navbar-auth-login">Login</NavLink>
              <NavLink to="/signup" className="navbar-auth-btn navbar-auth-signup">Signup</NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
