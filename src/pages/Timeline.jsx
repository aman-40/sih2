import { useState } from 'react'
// Removed all icon imports
import './css/Timeline.css'

const Timeline = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedMonth, setSelectedMonth] = useState('all')

  const categories = [
  { id: 'all', name: 'All Events' },
  { id: 'admissions', name: 'Admissions' },
  { id: 'exams', name: 'Exams' },
  { id: 'scholarships', name: 'Scholarships' }
  ]

  const months = [
    'all', 'December 2024', 'January 2025', 'February 2025', 
    'March 2025', 'April 2025', 'May 2025', 'June 2025'
  ]

  const timelineEvents = [
    {
      id: 1,
      title: 'JEE Main Registration',
      date: '2024-12-15',
      time: '10:00 AM',
      category: 'exams',
      priority: 'high',
      description: 'Registration deadline for JEE Main 2025',
      status: 'upcoming',
      reminder: true,
      website: 'https://jeemain.nta.ac.in'
    },
    {
      id: 2,
      title: 'NEET Application Form',
      date: '2024-12-20',
      time: '11:59 PM',
      category: 'exams',
      priority: 'high',
      description: 'Last date to submit NEET 2025 application',
      status: 'upcoming',
      reminder: true,
      website: 'https://neet.nta.nic.in'
    },
    {
      id: 3,
      title: 'Delhi University Admission',
      date: '2025-01-05',
      time: '9:00 AM',
      category: 'admissions',
      priority: 'medium',
      description: 'DU admission portal opens for undergraduate courses',
      status: 'upcoming',
      reminder: true,
      website: 'https://admission.uod.ac.in'
    },
    {
      id: 4,
      title: 'Central Sector Scholarship',
      date: '2025-01-10',
      time: '5:00 PM',
      category: 'scholarships',
      priority: 'medium',
      description: 'Application deadline for CSS scheme',
      status: 'upcoming',
      reminder: false,
      website: 'https://scholarships.gov.in'
    },
    {
      id: 5,
      title: 'JEE Main Exam',
      date: '2025-01-24',
      time: '9:00 AM',
      category: 'exams',
      priority: 'high',
      description: 'JEE Main 2025 Paper 1 examination',
      status: 'upcoming',
      reminder: true,
      website: 'https://jeemain.nta.ac.in'
    },
    {
      id: 6,
      title: 'CUET Registration',
      date: '2025-02-01',
      time: '10:00 AM',
      category: 'exams',
      priority: 'high',
      description: 'CUET 2025 registration begins',
      status: 'upcoming',
      reminder: true,
      website: 'https://cuet.samarth.ac.in'
    },
    {
      id: 7,
      title: 'Class 12 Board Exams',
      date: '2025-02-15',
      time: '10:30 AM',
      category: 'exams',
      priority: 'high',
      description: 'CBSE Class 12 board examinations begin',
      status: 'upcoming',
      reminder: true,
      website: 'https://cbse.gov.in'
    },
    {
      id: 8,
      title: 'Merit Scholarship',
      date: '2025-03-01',
      time: '11:59 PM',
      category: 'scholarships',
      priority: 'low',
      description: 'Last date for merit scholarship applications',
      status: 'upcoming',
      reminder: false,
      website: 'https://scholarships.gov.in'
    }
  ]

  const filteredEvents = timelineEvents.filter(event => {
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory
    const monthMatch = selectedMonth === 'all' || 
      new Date(event.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) === selectedMonth
    
    return categoryMatch && monthMatch
  })

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <span className="text-green-500">✔</span>
      case 'upcoming': return <span className="text-blue-500">⏰</span>
      case 'overdue': return <span className="text-red-500">!</span>
      default: return <span className="text-gray-500">•</span>
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const getDaysUntil = (dateString) => {
    const today = new Date()
    const eventDate = new Date(dateString)
    const diffTime = eventDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays < 0) return 'Overdue'
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Tomorrow'
    return `${diffDays} days left`
  }

  return (
    <div className="timeline-bg">
      <div className="timeline-container">
        {/* Header */}
        <div className="timeline-header">
          <span className="timeline-header-title">Event</span>
          <h1 className="timeline-header-main">Smart Timeline Tracker</h1>
          <p className="timeline-header-desc">Never miss important deadlines and events</p>
        </div>

        {/* Quick Stats */}
        <div className="timeline-stats-grid">
          <div className="timeline-stats-card timeline-stats-urgent">
            <div className="timeline-stats-value">3</div>
            <div className="timeline-stats-label">Urgent Deadlines</div>
          </div>
          <div className="timeline-stats-card timeline-stats-upcoming">
            <div className="timeline-stats-value">8</div>
            <div className="timeline-stats-label">Upcoming Events</div>
          </div>
          <div className="timeline-stats-card timeline-stats-completed">
            <div className="timeline-stats-value">5</div>
            <div className="timeline-stats-label">Completed</div>
          </div>
          <div className="timeline-stats-card timeline-stats-total">
            <div className="timeline-stats-value">12</div>
            <div className="timeline-stats-label">Total Tracked</div>
          </div>
        </div>

        {/* Filters */}
        <div className="timeline-filters-card">
          <div className="timeline-filters-row">
            <div className="timeline-filters-category-wrap">
              <label className="timeline-filters-label">Category</label>
              <div className="timeline-filters-category-list">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`timeline-filters-category-btn ${selectedCategory === category.id ? 'timeline-filters-category-selected' : ''}`}
                  >
                    <span className="timeline-filters-category-name">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="timeline-filters-month-wrap">
              <label className="timeline-filters-label">Month</label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="timeline-filters-month-select"
              >
                {months.map(month => (
                  <option key={month} value={month}>
                    {month === 'all' ? 'All Months' : month}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Add Event Button */}
        <div className="timeline-add-btn-wrap">
          <button className="timeline-add-btn">
            <span className="timeline-add-btn-icon">+</span>
            <span>Add Custom Event</span>
          </button>
        </div>

        {/* Timeline */}
  <div className="timeline-list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div key={event.id} className="timeline-event-card">
                <div className="timeline-event-row">
                  <div className="timeline-event-status">{getStatusIcon(event.status)}</div>
                  <div className="timeline-event-info">
                    <div className="timeline-event-header">
                      <h3 className="timeline-event-title">{event.title}</h3>
                      <div className="timeline-event-priority-wrap">
                        <span className={`timeline-event-priority ${getPriorityColor(event.priority)}`}>{event.priority.toUpperCase()}</span>
                        {event.reminder && (
                          <span className="timeline-event-reminder">🔔</span>
                        )}
                      </div>
                    </div>
                    <p className="timeline-event-desc">{event.description}</p>
                    <div className="timeline-event-details-row">
                      <div className="timeline-event-details-list">
                        <span className="timeline-event-details-date">📅 {formatDate(event.date)}</span>
                        <span className="timeline-event-details-time">⏰ {event.time}</span>
                        <span className="timeline-event-details-days">{getDaysUntil(event.date)}</span>
                      </div>
                      <div className="timeline-event-actions">
                        <button className="timeline-event-details-btn">View Details</button>
                        <a
                          href={event.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="timeline-event-apply-btn"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="timeline-empty">
              <span className="timeline-empty-label">No Events</span>
              <h3 className="timeline-empty-title">No events found</h3>
              <p className="timeline-empty-desc">Try adjusting your filters or add a custom event</p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedMonth('all')
                }}
                className="timeline-clear-btn"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Notification Settings */}
        <div className="timeline-notification-card">
          <h3 className="timeline-notification-title">Notification Settings</h3>
          <div className="timeline-notification-grid">
            <div className="timeline-notification-section">
              <h4 className="timeline-notification-section-title">Email Notifications</h4>
              <div className="timeline-notification-list">
                <label className="timeline-notification-label">
                  <input type="checkbox" className="timeline-notification-checkbox" defaultChecked />
                  <span className="timeline-notification-label-text">7 days before deadline</span>
                </label>
                <label className="timeline-notification-label">
                  <input type="checkbox" className="timeline-notification-checkbox" defaultChecked />
                  <span className="timeline-notification-label-text">1 day before deadline</span>
                </label>
                <label className="timeline-notification-label">
                  <input type="checkbox" className="timeline-notification-checkbox" />
                  <span className="timeline-notification-label-text">Same day reminder</span>
                </label>
              </div>
            </div>
            <div className="timeline-notification-section">
              <h4 className="timeline-notification-section-title">SMS Notifications</h4>
              <div className="timeline-notification-list">
                <label className="timeline-notification-label">
                  <input type="checkbox" className="timeline-notification-checkbox" />
                  <span className="timeline-notification-label-text">Urgent deadlines only</span>
                </label>
                <label className="timeline-notification-label">
                  <input type="checkbox" className="timeline-notification-checkbox" />
                  <span className="timeline-notification-label-text">Exam day reminders</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
