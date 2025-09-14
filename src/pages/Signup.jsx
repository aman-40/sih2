import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
// Removed all icon imports
import './css/Signup.css'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    class: '',
    age: '',
    location: '',
    language: 'en'
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { signup } = useAuth()
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

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      setLoading(false)
      return
    }

    try {
      const result = await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        class: formData.class,
        age: formData.age,
        location: formData.location,
        language: formData.language
      })
      
      if (result.success) {
        navigate('/dashboard')
      } else {
        setError(result.error || 'Signup failed')
      }
    } catch (err) {
      setError('An error occurred during signup')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="professional-signup-bg">
      <div className="professional-signup-outer">
        <div className="professional-signup-card">
          {/* Left Info Panel */}
          <div className="glassy-panel-signup">
            <h2 className="professional-signup-title">Why Join CareerGuide?</h2>
            <p className="professional-signup-desc">Get personalized career recommendations, college info, and more.</p>
            <ul className="professional-signup-list">
              <li><span className="professional-signup-icon signup-dashboard-icon" />Access exclusive resources</li>
              <li><span className="professional-signup-icon signup-progress-icon" />Get expert guidance</li>
              <li><span className="professional-signup-icon signup-support-icon" />Track your progress</li>
            </ul>
            <div className="professional-signup-social">
              <span className="professional-signup-social-icon signup-twitter-icon" />
              <span className="professional-signup-social-icon signup-instagram-icon" />
              <span className="professional-signup-social-icon signup-discord-icon" />
            </div>
          </div>
          {/* Right Form Panel */}
          <div className="professional-signup-form-panel">
            <h1 className="signup-title contact-title">Sign Up</h1>
            <p className="signup-desc contact-desc">Create your free account and start your career journey!</p>
            <form className="signup-form-panel" onSubmit={handleSubmit}>
              {error && (
                <div className="signup-error contact-error">{error}</div>
              )}
              <div className="signup-form-row contact-form-row-names">
                <div className="signup-form-group contact-form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="signup-input contact-input"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="signup-form-group contact-form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    name="age"
                    min="14"
                    max="20"
                    value={formData.age}
                    onChange={handleChange}
                    className="signup-input contact-input"
                    required
                    placeholder="Age"
                  />
                </div>
              </div>
              <div className="signup-form-row">
                <div className="signup-form-group contact-form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="signup-input contact-input"
                    required
                    placeholder="Enter your email"
                  />
                </div>
                <div className="signup-form-group contact-form-group">
                  <label>Class</label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    className="signup-input contact-input"
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="10">Class 10</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                  </select>
                </div>
              </div>
              <div className="signup-form-row">
                <div className="signup-form-group contact-form-group">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="signup-input contact-input"
                    required
                    placeholder="State/City"
                  />
                </div>
                <div className="signup-form-group contact-form-group">
                  <label>Preferred Language</label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="signup-input contact-input"
                    required
                  >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="bn">Bengali</option>
                    <option value="te">Telugu</option>
                    <option value="mr">Marathi</option>
                    <option value="ta">Tamil</option>
                    <option value="gu">Gujarati</option>
                    <option value="kn">Kannada</option>
                    <option value="ml">Malayalam</option>
                    <option value="pa">Punjabi</option>
                  </select>
                </div>
              </div>
              <div className="signup-form-row">
                <div className="signup-form-group contact-form-group">
                  <label>Password</label>
                  <div className="signup-password-wrapper contact-password-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="signup-input contact-input"
                      required
                      placeholder="Create a password"
                    />
                    <button
                      type="button"
                      className="signup-password-toggle contact-password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>
                <div className="signup-form-group contact-form-group">
                  <label>Confirm Password</label>
                  <div className="signup-password-wrapper contact-password-wrapper">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="signup-input contact-input"
                      required
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      className="signup-password-toggle contact-password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="signup-btn-primary contact-btn-primary"
              >
                {loading ? 'Creating account...' : 'Create account'}
              </button>
              <div className="signup-terms contact-terms">
                <span>By creating an account, you agree to our </span>
                <a href="#" className="signup-link contact-link">Terms of Service</a>
                <span> and </span>
                <a href="#" className="signup-link contact-link">Privacy Policy</a>
              </div>
              <div className="signup-link-text contact-link-text">
                Already have an account?{' '}
                <Link to="/login" className="signup-link contact-link">Sign in here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
