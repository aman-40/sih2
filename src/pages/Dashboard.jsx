import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
// Removed all icon imports
import './css/Dashboard.css'

const Dashboard = () => {
  const { user } = useAuth()

  const quickActions = [
    {
      title: 'Take Career Test',
      description: 'Discover your ideal career path',
        icon: null,
      link: '/career-test',
      color: 'bg-blue-500'
    },
    {
      title: 'Find Colleges',
      description: 'Explore nearby government colleges',
        icon: null,
      link: '/colleges',
      color: 'bg-green-500'
    },
    {
      title: 'View Timeline',
      description: 'Track important deadlines',
        icon: null,
      link: '/timeline',
      color: 'bg-purple-500'
    },
    {
      title: 'Study Resources',
      description: 'Access free study materials',
        icon: null,
      link: '/resources',
      color: 'bg-orange-500'
    }
  ]

  const upcomingDeadlines = [
    {
      title: 'JEE Main Registration',
      date: 'Dec 15, 2024',
      type: 'exam',
      urgent: true
    },
    {
      title: 'NEET Application',
      date: 'Dec 20, 2024',
      type: 'exam',
      urgent: false
    },
    {
      title: 'Scholarship Application',
      date: 'Jan 5, 2025',
      type: 'scholarship',
      urgent: false
    }
  ]

  const recentActivity = [
    {
      action: 'Completed Career Test',
      time: '2 hours ago',
        icon: null
    },
    {
      action: 'Viewed Delhi University',
      time: '1 day ago',
        icon: null
    },
    {
      action: 'Downloaded Study Material',
      time: '3 days ago',
        icon: null
    }
  ]

  const stats = [
    { label: 'Career Tests Taken', value: '1' },
    { label: 'Colleges Viewed', value: '5' },
    { label: 'Resources Downloaded', value: '3' },
    { label: 'Deadlines Tracked', value: '2' }
  ]

  return (
    <div className="dashboard-page-bg">
      <div className="dashboard-container">
        {/* Welcome Section */}
        <div className="dashboard-welcome-section">
          <h1 className="dashboard-welcome-title">Welcome back, {user?.name || 'Student'}!</h1>
          <p className="dashboard-welcome-desc">Ready to continue your career journey? Here's what's happening with your profile.</p>
        </div>

        {/* Stats Grid */}
  <div className="dashboard-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="flex items-center">
                <div>
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

  <div className="dashboard-main-grid">
          {/* Quick Actions */}
          <div className="dashboard-actions-section">
            <h2 className="dashboard-actions-title">Quick Actions</h2>
            <div className="dashboard-actions-grid">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.link} className="dashboard-action-card">
                  <h3 className="dashboard-action-title">{action.title}</h3>
                  <p className="dashboard-action-desc">{action.description}</p>
                  <div className="dashboard-action-link">Get Started</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="dashboard-sidebar-section">
            {/* Upcoming Deadlines */}
            <div className="dashboard-sidebar-card">
              <div className="dashboard-sidebar-header">
                <h3 className="dashboard-sidebar-title">Upcoming Deadlines</h3>
                <Link to="/timeline" className="dashboard-sidebar-link">View All</Link>
              </div>
              <div className="dashboard-deadline-list">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="dashboard-deadline-row">
                    <div className={`dashboard-deadline-dot ${deadline.type === 'exam' ? 'dashboard-dot-exam' : 'dashboard-dot-scholarship'}`}></div>
                    <div>
                      <div className="dashboard-deadline-title">{deadline.title}</div>
                      <div className="dashboard-deadline-date">{deadline.date}</div>
                    </div>
                    {deadline.urgent && (
                      <span className="dashboard-deadline-urgent">Urgent</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="dashboard-sidebar-card">
              <div className="dashboard-sidebar-header">
                <h3 className="dashboard-sidebar-title">Recent Activity</h3>
                <Link to="/dashboard" className="dashboard-sidebar-link">View All</Link>
              </div>
              <div className="dashboard-activity-list">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="dashboard-activity-row">
                    <div className="dashboard-activity-action">{activity.action}</div>
                    <div className="dashboard-activity-time">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Completion */}
            <div className="dashboard-sidebar-card">
              <h3 className="dashboard-sidebar-title">Profile Completion</h3>
              <div className="dashboard-profile-list">
                <div className="dashboard-profile-row">
                  <span className="dashboard-profile-label">Basic Info</span>
                  <span className="dashboard-profile-status dashboard-status-complete">✓ Complete</span>
                </div>
                <div className="dashboard-profile-row">
                  <span className="dashboard-profile-label">Career Test</span>
                  <span className="dashboard-profile-status dashboard-status-pending">Pending</span>
                </div>
                <div className="dashboard-profile-row">
                  <span className="dashboard-profile-label">Preferences</span>
                  <span className="dashboard-profile-status dashboard-status-notstarted">Not Started</span>
                </div>
                <div className="dashboard-profile-progress">
                  <div className="dashboard-profile-bar" style={{ width: '33%' }}></div>
                </div>
                <p className="dashboard-profile-percent">33% Complete</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="dashboard-recommend-section">
          <h2 className="dashboard-recommend-title">Recommended for You</h2>
          <div className="dashboard-recommend-grid">
            <div className="dashboard-recommend-card">
              <h3 className="dashboard-recommend-card-title">Top Scholarships</h3>
              <p className="dashboard-recommend-card-desc">
                Based on your profile, here are scholarships you might be eligible for.
              </p>
              <Link to="/resources" className="dashboard-recommend-link">View Scholarships →</Link>
            </div>
            <div className="dashboard-recommend-card">
              <h3 className="dashboard-recommend-card-title">Career Insights</h3>
              <p className="dashboard-recommend-card-desc">
                Discover trending career paths and job opportunities in your field.
              </p>
              <Link to="/career-test" className="dashboard-recommend-link">Take Test →</Link>
            </div>
            <div className="dashboard-recommend-card">
              <h3 className="dashboard-recommend-card-title">Find Mentors</h3>
              <p className="dashboard-recommend-card-desc">
                Connect with career counselors and industry experts for guidance.
              </p>
              <Link to="/contact" className="dashboard-recommend-link">Get Help →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
