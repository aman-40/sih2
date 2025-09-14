// Removed all icon imports
import './css/Features.css'

const Features = () => {
  const mainFeatures = [
    {
          // icon removed
      title: 'AI-Powered Career Test',
      description: 'Comprehensive aptitude and interest assessment',
      details: [
        'Short quizzes assessing skills, interests, and personality',
        'Personalized stream recommendations (Arts, Science, Commerce, Vocational)',
        'Career simulation pathways with visual maps',
        'Machine learning feedback loop for improved recommendations'
      ]
    },
    {
          // icon removed
      title: 'College Discovery',
      description: 'Location-based government college directory',
      details: [
        'Courses offered with detailed information',
        'Cut-offs and eligibility requirements',
        'Facilities information (hostels, labs, libraries)',
        'Offline access for rural areas with poor internet'
      ]
    },
    {
          // icon removed
      title: 'Smart Timeline Tracker',
      description: 'Never miss important deadlines',
      details: [
        'Admission deadlines and requirements',
        'Scholarship application timelines',
        'Entrance test schedules and counseling updates',
        'Push notifications and SMS alerts'
      ]
    },
    {
          // icon removed
      title: 'Learning & Support',
      description: 'Comprehensive study resources',
      details: [
        'Open-source study materials (NCERT, e-books)',
        'Previous year question papers',
        'Scholarship and financial aid guidance',
        'Ask a Mentor section for live Q&A'
      ]
    }
  ]

  const technicalFeatures = [
    {
          // icon removed
      title: 'Mobile-First Design',
      description: 'Progressive Web App that works offline with low data usage'
    },
    {
          // icon removed
      title: 'Multi-Language Support',
      description: 'Accessible across India with regional language support'
    },
    {
          // icon removed
      title: 'Government Backed',
      description: 'Official data integration ensures accuracy and credibility'
    },
    {
          // icon removed
      title: 'AI-Driven Personalization',
      description: 'Dynamic profiles with machine learning recommendations'
    }
  ]

  const benefits = [
    {
      title: 'For Students',
      items: [
        'Personalized career guidance',
        'Access to verified college data',
        'Timely deadline reminders',
        'Free study resources',
        'Offline accessibility'
      ]
    },
    {
      title: 'For Parents',
      items: [
        'Reliable career information',
        'Feature',
        'Scholarship opportunities',
        'Progress tracking',
        'Expert guidance access'
      ]
    },
    {
      title: 'For Educators',
      items: [
        'Student progress insights',
        'Career counseling tools',
        'Resource sharing platform',
        'Analytics and reports',
        'Mentor opportunities'
      ]
    }
  ]

  return (
    <div className="features-container">
      <div className="features-inner">
        <div className="features-hero">
          <h1 className="features-title">Platform Features</h1>
          <p className="features-description">
            Discover all the powerful features that make CareerGuide the most 
            comprehensive career guidance platform for Indian students.
          </p>
        </div>

        {/* Main Features */}
        <div className="features-main">
          <h2 className="features-section-title">Core Features</h2>
          {mainFeatures.map((feature, index) => (
            <div key={index} className={`features-main-row ${index % 2 === 0 ? 'features-main-row-left' : 'features-main-row-right'}`}>
              {index % 2 === 0 ? (
                <>
                  <div className="features-main-content">
                    <h3 className="features-main-title">{feature.title}</h3>
                    <p className="features-main-description">{feature.description}</p>
                    <ul className="features-main-list">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="features-main-list-item">{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="features-main-image">
                    <span className="features-main-image-placeholder">Feature</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="features-main-image">
                    <span className="features-main-image-placeholder">Feature</span>
                  </div>
                  <div className="features-main-content">
                    <h3 className="features-main-title">{feature.title}</h3>
                    <p className="features-main-description">{feature.description}</p>
                    <ul className="features-main-list">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="features-main-list-item">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Technical Features */}
        <div className="features-technical">
          <h2 className="features-section-title">Technical Excellence</h2>
          <div className="features-technical-grid">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="features-technical-card">
                <span className="features-technical-icon">Feature</span>
                <h3 className="features-technical-title">{feature.title}</h3>
                <p className="features-technical-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits by User Type */}
        <div className="features-benefits">
          <h2 className="features-section-title">Benefits for Everyone</h2>
          <div className="features-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="features-benefits-card">
                <h3 className="features-benefits-title">{benefit.title}</h3>
                <ul className="features-benefits-list">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="features-benefits-list-item">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Strategy */}
        <div className="features-strategy">
          <div className="features-strategy-header">
            <h2 className="features-section-title">Implementation Strategy</h2>
            <p className="features-strategy-description">
              Our phased approach ensures reliable rollout and maximum impact
            </p>
          </div>
          <div className="features-strategy-grid">
            <div className="features-strategy-card">
              <div className="features-strategy-step">1</div>
              <h3 className="features-strategy-title">Pilot Phase</h3>
              <p className="features-strategy-detail">
                Launch in 1-2 districts with low enrollment. Collect feedback and improve UX.
              </p>
            </div>
            <div className="features-strategy-card">
              <div className="features-strategy-step">2</div>
              <h3 className="features-strategy-title">State Rollout</h3>
              <p className="features-strategy-detail">
                Integrate with government portals for scholarships and admissions.
              </p>
            </div>
            <div className="features-strategy-card">
              <div className="features-strategy-step">3</div>
              <h3 className="features-strategy-title">National Scale</h3>
              <p className="features-strategy-detail">
                Integrate with Diksha, Skill India, and PMKVY platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
