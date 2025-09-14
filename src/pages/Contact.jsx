import { useState } from 'react'
// Removed all icon imports
import './css/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

    return (
      <div className="contact-bg">
        <div className="contact-container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-desc">Any question or remarks? Just write us a message!</p>
          <div className="contact-main-grid contact-theme-grid">
            {/* Left Info Panel */}
            <div className="contact-info-panel">
              <h2 className="contact-info-title">Contact Information</h2>
              <p className="contact-info-desc">Say something to start a live chat!</p>
              <div className="contact-info-list">
                <div className="contact-info-row">
                  <span className="contact-info-icon contact-info-icon-phone" />
                  <span className="contact-info-value">+1 012 3456 789</span>
                </div>
                <div className="contact-info-row">
                  <span className="contact-info-icon contact-info-icon-email" />
                  <span className="contact-info-value">demo@gmail.com</span>
                </div>
                <div className="contact-info-row">
                  <span className="contact-info-icon contact-info-icon-location" />
                  <span className="contact-info-value">132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</span>
                </div>
              </div>
              <div className="contact-info-social">
                <span className="contact-info-social-icon contact-info-social-twitter" />
                <span className="contact-info-social-icon contact-info-social-instagram" />
                <span className="contact-info-social-icon contact-info-social-discord" />
              </div>
              <div className="contact-info-bg-circles" />
            </div>
            {/* Right Form Panel */}
            <form className="contact-form-panel">
              <div className="contact-form-row contact-form-row-names">
                <div className="contact-form-group">
                  <label>First Name</label>
                  <input type="text" className="contact-input" />
                </div>
                <div className="contact-form-group">
                  <label>Last Name</label>
                  <input type="text" className="contact-input" />
                </div>
              </div>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>Email</label>
                  <input type="email" className="contact-input" />
                </div>
                <div className="contact-form-group">
                  <label>Phone Number</label>
                  <input type="text" className="contact-input" />
                </div>
              </div>
              <div className="contact-form-row">
                <label>Select Subject?</label>
                <div className="contact-form-radio-group">
                  <label><input type="radio" name="subject" defaultChecked /> General Inquiry</label>
                  <label><input type="radio" name="subject" /> General Inquiry</label>
                  <label><input type="radio" name="subject" /> General Inquiry</label>
                  <label><input type="radio" name="subject" /> General Inquiry</label>
                </div>
              </div>
              <div className="contact-form-row">
                <label>Message</label>
                <textarea className="contact-textarea" rows={3} placeholder="Write your message.."></textarea>
              </div>
              <div className="contact-form-row contact-form-row-submit">
                <button type="submit" className="contact-submit-btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need help? We're here to support you on your career journey. 
            Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Information */}
        <div className="contact-info-grid">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <h3 className="contact-card-title">{info.title}</h3>
              <p className="contact-card-details">{info.details}</p>
              <p className="contact-card-description">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="contact-form-grid">
          <div className="contact-form-section">
            <h2 className="contact-form-title">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-group">
                <label htmlFor="name" className="contact-form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email" className="contact-form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="contact-form-group">
                <label htmlFor="subject" className="contact-form-label">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-input"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="career">Career Guidance</option>
                  <option value="college">College Information</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div className="contact-form-group">
                <label htmlFor="message" className="contact-form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="contact-input"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              <button
                type="submit"
                className="contact-btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-why-section">
            <h2 className="contact-why-title">Why Contact Us?</h2>
            <div className="contact-why-list">
              <div className="contact-why-item">
                <h3 className="contact-why-item-title">Career Guidance</h3>
                <p className="contact-why-item-description">
                  Need personalized advice on choosing your stream or career path? 
                  Our experts are here to help.
                </p>
              </div>
              <div className="contact-why-item">
                <h3 className="contact-why-item-title">Technical Support</h3>
                <p className="contact-why-item-description">
                  Facing issues with the platform? Our technical team will 
                  resolve your problems quickly.
                </p>
              </div>
              <div className="contact-why-item">
                <h3 className="contact-why-item-title">Feedback & Suggestions</h3>
                <p className="contact-why-item-description">
                  Help us improve by sharing your feedback and suggestions 
                  for new features.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="contact-faq-section">
          <h2 className="contact-faq-title">Frequently Asked Questions</h2>
          <div className="contact-faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="contact-faq-card">
                <h3 className="contact-faq-question">{faq.question}</h3>
                <p className="contact-faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Hours */}
        <div className="contact-support-section">
          <h2 className="contact-support-title">Support Hours</h2>
          <div className="contact-support-grid">
            <div className="contact-support-card">
              <h3 className="contact-support-type">Email Support</h3>
              <p className="contact-support-detail">24/7 - We respond within 24 hours</p>
            </div>
            <div className="contact-support-card">
              <h3 className="contact-support-type">Phone Support</h3>
              <p className="contact-support-detail">Monday - Friday: 9 AM - 6 PM IST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
