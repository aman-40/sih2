import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
// Removed all icon imports
import './css/Layout.css'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Contact', href: '/contact' },
  ]

  const studentNavigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Career Test', href: '/career-test' },
    { name: 'Colleges', href: '/colleges' },
    { name: 'Timeline', href: '/timeline' },
    { name: 'Resources', href: '/resources' },
  ]

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const currentNavigation = user ? studentNavigation : navigation

  return (
  <div className="layout-container">
      {/* Navigation */}
  <nav className="navbar">
  <div className="navbar-inner">
          <div className="navbar-flex">
            <div className="navbar-brand-container">
              <Link to="/" className="navbar-brand">
                {/* <AcademicCapIcon className="h-6 w-6 text-primary-600" /> */}
                <span className="brand-title">CareerGuide</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links">
              {currentNavigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-link${isActive ? ' active' : ''}`}
                  >
                    {/* Removed icon */}
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>

            {/* User Menu */}
            <div className="user-menu">
              {user ? (
                <div className="user-info">
                  <span className="welcome-text">Welcome, {user.name}</span>
                  <button
                    onClick={handleLogout}
                    className="logout-btn"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="auth-links">
                  <Link
                    to="/login"
                    className="login-link"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="signup-btn"
                  >
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="mobile-menu-btn"
              >
                <span className="menu-btn-text">{isMenuOpen ? 'Close' : 'Menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-links">
              {currentNavigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`mobile-nav-link${isActive ? ' active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
  <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-brand-title">
                <span className="brand-title">CareerGuide</span>
              </div>
              <p className="footer-description">
                Your personalized career and education advisor platform. 
                Making informed decisions for Classes 10-12 students across India.
              </p>
            </div>
            <div className="footer-links">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-list">
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/features" className="footer-link">Features</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-support">
              <h3 className="footer-heading">Support</h3>
              <ul className="footer-list">
                <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
                <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
                <li><Link to="/accessibility" className="footer-link">Accessibility</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            <p className="footer-copyright-text">
              © 2024 CareerGuide. All rights reserved. Built for SIH 2024.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
