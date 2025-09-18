import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
// Removed all icon imports
import './css/DashboardPro.css'

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
    <div className="dashboard-bg-glassy">
      <div className="dashboard-container-pro">
        {/* Welcome Section */}
        <div className="dashboard-welcome-pro">
          <h1 className="dashboard-welcome-title-pro">Welcome back, {user?.name || 'Student'}!</h1>
          <p className="dashboard-welcome-desc-pro">Ready to continue your career journey? Here's what's happening with your profile.</p>
        </div>

        {/* Stats Grid */}
        <div className="dashboard-stats-pro">
          {stats.map((stat, index) => (
            <div key={index} className="dashboard-stat-card-pro">
              <div className="dashboard-stat-number-pro">{stat.value}</div>
              <div className="dashboard-stat-label-pro">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="dashboard-main-pro">
          {/* Quick Actions */}
          <div className="dashboard-actions-pro">
            <h2 className="dashboard-actions-title-pro">Quick Actions</h2>
            <div className="dashboard-actions-grid-pro">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.link} className="dashboard-action-card-pro">
                  <h3 className="dashboard-action-title-pro">{action.title}</h3>
                  <p className="dashboard-action-desc-pro">{action.description}</p>
                  <div className="dashboard-action-link-pro">Get Started</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="dashboard-sidebar-pro">
            {/* Upcoming Deadlines */}
            <div className="dashboard-sidebar-card-pro">
              <div className="dashboard-sidebar-header-pro">
                <h3 className="dashboard-sidebar-title-pro">Upcoming Deadlines</h3>
                <Link to="/timeline" className="dashboard-sidebar-link-pro">View All</Link>
              </div>
              <div className="dashboard-deadline-list-pro">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="dashboard-deadline-row-pro">
                    <div className={`dashboard-deadline-dot-pro ${deadline.type === 'exam' ? 'dashboard-dot-exam-pro' : 'dashboard-dot-scholarship-pro'}`}></div>
                    <div>
                      <div className="dashboard-deadline-title-pro">{deadline.title}</div>
                      <div className="dashboard-deadline-date-pro">{deadline.date}</div>
                    </div>
                    {deadline.urgent && (
                      <span className="dashboard-deadline-urgent-pro">Urgent</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="dashboard-sidebar-card-pro">
              <div className="dashboard-sidebar-header-pro">
                <h3 className="dashboard-sidebar-title-pro">Recent Activity</h3>
                <Link to="/dashboard" className="dashboard-sidebar-link-pro">View All</Link>
              </div>
              <div className="dashboard-activity-list-pro">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="dashboard-activity-row-pro">
                    <div className="dashboard-activity-action-pro">{activity.action}</div>
                    <div className="dashboard-activity-time-pro">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Completion */}
            <div className="dashboard-sidebar-card-pro">
              <h3 className="dashboard-sidebar-title-pro">Profile Completion</h3>
              <div className="dashboard-profile-list-pro">
                <div className="dashboard-profile-row-pro">
                  <span className="dashboard-profile-label-pro">Basic Info</span>
                  <span className="dashboard-profile-status-pro dashboard-status-complete-pro">✓ Complete</span>
                </div>
                <div className="dashboard-profile-row-pro">
                  <span className="dashboard-profile-label-pro">Career Test</span>
                  <span className="dashboard-profile-status-pro dashboard-status-pending-pro">Pending</span>
                </div>
                <div className="dashboard-profile-row-pro">
                  <span className="dashboard-profile-label-pro">Preferences</span>
                  <span className="dashboard-profile-status-pro dashboard-status-notstarted-pro">Not Started</span>
                </div>
                <div className="dashboard-profile-progress-pro">
                  <div className="dashboard-profile-bar-pro" style={{ width: '33%' }}></div>
                </div>
                <p className="dashboard-profile-percent-pro">33% Complete</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="dashboard-recommend-pro">
          <h2 className="dashboard-recommend-title-pro">Recommended for You</h2>
          <div className="dashboard-recommend-grid-pro">
            <div className="dashboard-recommend-card-pro">
              <h3 className="dashboard-recommend-card-title-pro">Top Scholarships</h3>
              <p className="dashboard-recommend-card-desc-pro">
                Based on your profile, here are scholarships you might be eligible for.
              </p>
              <Link to="/resources" className="dashboard-recommend-link-pro">View Scholarships →</Link>
            </div>
            <div className="dashboard-recommend-card-pro">
              <h3 className="dashboard-recommend-card-title-pro">Career Insights</h3>
              <p className="dashboard-recommend-card-desc-pro">
                Discover trending career paths and job opportunities in your field.
              </p>
              <Link to="/career-test" className="dashboard-recommend-link-pro">Take Test →</Link>
            </div>
            <div className="dashboard-recommend-card-pro">
              <h3 className="dashboard-recommend-card-title-pro">Find Mentors</h3>
              <p className="dashboard-recommend-card-desc-pro">
                Connect with career counselors and industry experts for guidance.
              </p>
              <Link to="/contact" className="dashboard-recommend-link-pro">Get Help →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
