    {/* Footer - Professional Theme */}
    <footer className="home-footer professional-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="/career-test" className="footer-link">Career Test</a>
          <a href="/colleges" className="footer-link">Colleges</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/about" className="footer-link">About</a>
        </div>
        <div className="footer-social">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" className="footer-social-icon footer-instagram" aria-label="Instagram" />
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener" className="footer-social-icon footer-linkedin" aria-label="LinkedIn" />
          <a href="https://www.youtube.com/" target="_blank" rel="noopener" className="footer-social-icon footer-youtube" aria-label="YouTube" />
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} CareerGuide. All rights reserved.
        </div>
      </div>
    </footer>
    {/* Professional Step-by-Step Section */}
    <section className="home-steps professional-steps">
      <div className="steps-inner">
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">01</div>
            <div className="step-icon step-icon-calendar" />
            <div className="step-desc">Book a mock interview whenever you like.</div>
          </div>
          <div className="step-card">
            <div className="step-number">02</div>
            <div className="step-icon step-icon-virtual" />
            <div className="step-desc">Meet with your interviewer virtually.</div>
          </div>
          <div className="step-card">
            <div className="step-number">03</div>
            <div className="step-icon step-icon-feedback" />
            <div className="step-desc">Get detailed feedback and crack your interview.</div>
          </div>
        </div>
      </div>
    </section>
import { Link } from 'react-router-dom'
// Removed all icon imports
import './css/Home.css'

const Home = () => {
  const features = [
    {
      title: 'AI-Powered Career Test',
      description: 'Take our comprehensive aptitude and interest assessment to discover your ideal career path.'
    },
    {
      title: 'Location-Based College Discovery',
      description: 'Find government colleges near you with detailed information about courses, cut-offs, and facilities.'
    },
    {
      title: 'Smart Timeline Tracker',
      description: 'Never miss important deadlines for admissions, scholarships, and entrance exams.'
    },
    {
      title: 'Study Resources',
      description: 'Access free study materials, previous papers, and scholarship guides.'
    }
  ]

  const stats = [
    { label: 'Students Helped', value: '10,000+' },
    { label: 'Colleges Listed', value: '500+' },
    { label: 'Career Paths', value: '50+' },
    { label: 'Success Rate', value: '95%' }
  ]

  const benefits = [
    'Personalized stream recommendations (Arts, Science, Commerce, Vocational)',
    'Real-time admission and scholarship updates',
    'Offline access for rural areas with poor internet',
    'Multi-language support for accessibility',
    'Government-backed verified data',
    'Free access to all features'
  ]

  return (
  <div className="home-container home-centered">
    {/* Hero Section - Glassy Split Layout */}
    <section className="home-hero-split">
      <div className="home-hero-split-inner">
        <div className="home-hero-split-left">
          <h1 className="hero-title professional-title">Your Personal Career & Education Advisor</h1>
          <p className="hero-description professional-desc">AI-powered guidance platform for Classes 10-12 students.<br/>Make informed decisions about your future with personalized recommendations.</p>
          <div className="hero-actions">
            <button className="home-btn-primary" onClick={() => window.location.href='/career-test'}>
              Take Career Test →
            </button>
            <button className="home-btn-secondary" onClick={() => window.location.href='/colleges'}>
              Explore Colleges →
            </button>
          </div>
        </div>
        <div className="home-hero-split-right">
          <div className="home-hero-contact-card">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-desc">Any question or remarks? Just write us a message!</p>
            <button className="home-btn-primary" onClick={() => window.location.href='/contact'}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>



        {/* Features Section - Gradient Cards */}
    <section className="home-features professional-features">
      <div className="features-inner home-centered">
        <div className="features-header">
          <h2 className="features-title">Everything You Need for Career Success</h2>
          <p className="features-description">Our comprehensive platform provides all the tools and information you need to make the best career decisions.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card feature-card-gradient ${index % 2 === 0 ? 'feature-card-left' : 'feature-card-right'}`}>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats Section - Enhanced Professional Cards */}
    <section className="home-stats professional-stats">
      <div className="stats-inner home-centered">
        <div className="stats-grid stats-grid-enhanced">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card stat-card-glass stat-card-enhanced">
              <div className="stat-icon">
                {index === 0 && <span role="img" aria-label="students" className="stat-emoji">🎓</span>}
                {index === 1 && <span role="img" aria-label="colleges" className="stat-emoji">🏫</span>}
                {index === 2 && <span role="img" aria-label="career paths" className="stat-emoji">🛤️</span>}
                {index === 3 && <span role="img" aria-label="success" className="stat-emoji">🌟</span>}
              </div>
              <div className="stat-number stat-number-large">{stat.value}</div>
              <div className="stat-label stat-label-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>



    {/* Benefits Section - Professional Card */}
    <section className="home-benefits professional-benefits">
      <div className="benefits-inner home-centered vertical-benefits-cta">
        <div className="professional-benefits-card-glass vertical-benefits-card">
          <h2 className="benefits-title professional-benefits-title">Why Choose CareerGuide?</h2>
          <p className="benefits-description professional-benefits-desc">We understand the challenges students face when choosing their career path. Our platform is designed to provide reliable, personalized guidance that helps you make informed decisions about your future.</p>
          <ul className="benefits-list no-bullets professional-benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index} className="benefit-item professional-benefit-item">
                <span className="benefit-text professional-benefit-text">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="refined-cta-section-no-card vertical-cta-section">
          <div className="refined-cta-inner-no-card vertical-cta-inner">
            <h2 className="refined-cta-title-no-card">Ready to Discover Your Career Path?</h2>
            <div className="refined-cta-divider-no-card" />
            <p className="refined-cta-desc-no-card">Students across India are already using CareerGuide to discover their perfect career path and find the right colleges.<br/>Take our free career test and get personalized recommendations for your ideal stream and college options.</p>
            <button className="home-btn-primary refined-cta-btn-no-card" onClick={() => window.location.href='/signup'}>
              Start Your Journey →
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home
