import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
// Removed all icon imports
import './css/Login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await login(formData.email, formData.password)
      if (result.success) {
        navigate('/dashboard')
      } else {
        setError(result.error || 'Login failed')
      }
    } catch (err) {
      setError('An error occurred during login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-bg contact-bg professional-login-bg">
      <div className="professional-login-outer">
        <div className="professional-login-card">
          {/* Left Info Panel */}
          <div className="professional-login-info glassy-panel">
            <h2 className="professional-login-title">Welcome Back!</h2>
            <p className="professional-login-desc">Sign in to continue your career journey with CareerGuide.</p>
            <ul className="professional-login-list">
              <li><span className="professional-login-icon dashboard-icon" />Access your dashboard</li>
              <li><span className="professional-login-icon progress-icon" />Track your progress</li>
              <li><span className="professional-login-icon support-icon" />Get expert support</li>
            </ul>
            <div className="professional-login-social">
              <span className="professional-login-social-icon twitter-icon" />
              <span className="professional-login-social-icon instagram-icon" />
              <span className="professional-login-social-icon discord-icon" />
            </div>
          </div>
          {/* Right Form Panel */}
          <div className="professional-login-form-panel">
            <h1 className="login-title contact-title">Login</h1>
            <p className="login-desc contact-desc">Sign in to access your personalized dashboard and resources.</p>
            <form className="login-form-panel contact-form-panel" onSubmit={handleSubmit}>
              {error && (
                <div className="login-error contact-error">{error}</div>
              )}
              <div className="login-form-row">
                <div className="login-form-group contact-form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="login-input contact-input"
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="login-form-row">
                <div className="login-form-group contact-form-group">
                  <label>Password</label>
                  <div className="login-password-wrapper contact-password-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="login-input contact-input"
                      required
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="login-password-toggle contact-password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>
              </div>
              <div className="login-options contact-options">
                <label className="login-checkbox-label contact-checkbox-label">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="login-checkbox contact-checkbox"
                  />
                  Remember me
                </label>
                <a href="#" className="login-forgot-link contact-forgot-link">Forgot your password?</a>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="login-btn-primary contact-btn-primary"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
              <div className="login-signup-link contact-signup-link">
                <span>Don't have an account? </span>
                <Link to="/signup" className="login-link contact-link">Sign up here</Link>
              </div>
              <div className="login-demo-credentials contact-demo-credentials">
                <h3 className="login-demo-title contact-demo-title">Demo Credentials</h3>
                <p className="login-demo-text contact-demo-text">Email: demo@careerguide.com</p>
                <p className="login-demo-text contact-demo-text">Password: demo123</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
