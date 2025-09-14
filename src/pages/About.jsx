// Removed all icon imports
import './css/About.css'

const About = () => {
  const team = [
    {
      name: 'Government Education Departments',
      role: 'Data Partners',
      description: 'Providing authentic college and course information'
    },
    {
      name: 'Career Counselors',
      role: 'Expert Advisors',
      description: 'Creating knowledge base and guidance content'
    },
    {
      name: 'NGOs & Teachers',
      role: 'Rural Outreach',
      description: 'Ensuring accessibility in remote areas'
    }
  ]

  const values = [
    {
      title: 'Reliability',
      description: 'Official data integration ensures accuracy and credibility'
    },
    {
      title: 'Accessibility',
      description: 'Multi-language support and offline capability for all students'
    },
    {
      title: 'Equity',
      description: 'Equal opportunities for rural and urban students'
    },
    {
      title: 'Impact',
      description: 'Measurable outcomes in enrollment and career success'
    }
  ]

  return (
    <div className="about-container">
      <div className="about-inner">
        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="about-title">About CareerGuide</h1>
          <p className="about-description">
            We're on a mission to democratize career guidance and make quality education 
            accessible to every student across India, regardless of their location or background.
          </p>
        </div>

        {/* Mission Section */}
        <div className="about-mission">
          <h2 className="about-mission-title">Our Mission</h2>
          <p className="about-mission-description">
            To provide personalized, AI-powered career guidance that helps students 
            make informed decisions about their education and career paths, ultimately 
            increasing enrollment in government colleges and reducing dropout rates.
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="about-problem-solution">
          <div className="about-problem">
            <h3 className="about-section-title">The Problem</h3>
            <ul className="about-list">
              <li className="about-list-item">Students lack access to reliable career guidance</li>
              <li className="about-list-item">Limited awareness of government college options</li>
              <li className="about-list-item">High dropout rates after Class 10/12</li>
              <li className="about-list-item">Rural students have less access to counseling</li>
            </ul>
          </div>
          <div className="about-solution">
            <h3 className="about-section-title">Our Solution</h3>
            <ul className="about-list">
              <li className="about-list-item">AI-powered personalized career recommendations</li>
              <li className="about-list-item">Comprehensive government college directory</li>
              <li className="about-list-item">Smart timeline tracking for deadlines</li>
              <li className="about-list-item">Offline access for rural areas</li>
            </ul>
          </div>
        </div>

        {/* Stakeholders */}
        <div className="about-stakeholders">
          <h2 className="about-section-title">Our Stakeholders</h2>
          <div className="about-stakeholders-grid">
            {team.map((member, index) => (
              <div key={index} className="about-card">
                <h3 className="about-card-title">{member.name}</h3>
                <p className="about-card-role">{member.role}</p>
                <p className="about-card-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="about-values">
          <h2 className="about-section-title">Our Values</h2>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-card">
                <h3 className="about-card-title">{value.title}</h3>
                <p className="about-card-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="about-impact">
          <div className="about-impact-header">
            <h2 className="about-section-title">Our Impact</h2>
            <p className="about-impact-description">
              Making a real difference in students' lives across India
            </p>
          </div>
          <div className="about-impact-grid">
            <div className="about-impact-card">
              <div className="about-impact-number">95%</div>
              <div className="about-impact-label">Success Rate</div>
            </div>
            <div className="about-impact-card">
              <div className="about-impact-number">10K+</div>
              <div className="about-impact-label">Students Helped</div>
            </div>
            <div className="about-impact-card">
              <div className="about-impact-number">500+</div>
              <div className="about-impact-label">Colleges Listed</div>
            </div>
            <div className="about-impact-card">
              <div className="about-impact-number">25</div>
              <div className="about-impact-label">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
