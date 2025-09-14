import { useState } from 'react'
// Removed all icon imports
import './css/AdminPanel.css'

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showAddModal, setShowAddModal] = useState(false)

  const tabs = [
  { id: 'dashboard', name: 'Dashboard' },
  { id: 'colleges', name: 'Colleges' },
  { id: 'content', name: 'Content' },
  { id: 'timeline', name: 'Timeline' },
  { id: 'users', name: 'Users' },
  { id: 'settings', name: 'Settings' }
  ]

  const stats = [
    { label: 'Total Colleges', value: '500+', change: '+12', changeType: 'positive' },
    { label: 'Active Users', value: '10,250', change: '+156', changeType: 'positive' },
    { label: 'Resources', value: '150+', change: '+8', changeType: 'positive' },
    { label: 'Career Tests', value: '2,450', change: '+89', changeType: 'positive' }
  ]

  const colleges = [
    {
      id: 1,
      name: 'Delhi University',
      location: 'Delhi',
      status: 'active',
      courses: 25,
      students: 50000,
      lastUpdated: '2024-12-10'
    },
    {
      id: 2,
      name: 'Jawaharlal Nehru University',
      location: 'New Delhi',
      status: 'active',
      courses: 15,
      students: 8000,
      lastUpdated: '2024-12-08'
    },
    {
      id: 3,
      name: 'University of Mumbai',
      location: 'Mumbai',
      status: 'pending',
      courses: 30,
      students: 75000,
      lastUpdated: '2024-12-05'
    }
  ]

  const recentActivity = [
    { action: 'New college added: Anna University', time: '2 hours ago', type: 'college' },
    { action: 'Career test completed by 25 students', time: '4 hours ago', type: 'test' },
    { action: 'Scholarship deadline updated', time: '1 day ago', type: 'timeline' },
    { action: 'New study material uploaded', time: '2 days ago', type: 'content' }
  ]

  const DashboardTab = () => (
  <div className="adminpanel-tab-content">
      {/* Stats Grid */}
  <div className="adminpanel-stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="adminpanel-stats-card">
            <div className="adminpanel-stats-label">{stat.label}</div>
            <div className="adminpanel-stats-value">{stat.value}</div>
            <div className={`adminpanel-stats-change ${stat.changeType === 'positive' ? 'adminpanel-stats-change-positive' : 'adminpanel-stats-change-negative'}`}>{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Charts Placeholder */}
  <div className="adminpanel-charts-grid">
        <div className="adminpanel-charts-card">
          <div className="adminpanel-charts-title">User Growth</div>
          <div className="adminpanel-charts-placeholder">Dashboard</div>
        </div>
        <div className="adminpanel-charts-card">
          <div className="adminpanel-charts-title">College Distribution</div>
          <div className="adminpanel-charts-placeholder">Colleges</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="adminpanel-activity-card">
        <div className="adminpanel-activity-title">Recent Activity</div>
        <div className="adminpanel-activity-list">
          {recentActivity.map((activity, index) => (
            <div key={index} className="adminpanel-activity-row">
              <div className="adminpanel-activity-dot"></div>
              <span className="adminpanel-activity-action">{activity.action}</span>
              <span className="adminpanel-activity-time">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const CollegesTab = () => (
  <div className="adminpanel-tab-content">
      <div className="adminpanel-colleges-header">
        <div className="adminpanel-colleges-title">College Management</div>
        <button onClick={() => setShowAddModal(true)} className="adminpanel-colleges-add-btn">
          <span className="adminpanel-colleges-add-icon">+</span>
          <span>Add College</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="adminpanel-colleges-filters-card">
        <div className="adminpanel-colleges-filters-row">
          <input type="text" placeholder="Search colleges..." className="adminpanel-colleges-search-input" />
          <select className="adminpanel-colleges-filter-select">
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Inactive</option>
          </select>
          <select className="adminpanel-colleges-filter-select">
            <option>All States</option>
            <option>Delhi</option>
            <option>Maharashtra</option>
            <option>Uttar Pradesh</option>
          </select>
        </div>
      </div>

      {/* Colleges Table */}
      <div className="adminpanel-colleges-table-card">
        <div className="adminpanel-colleges-table-wrap">
          <table className="adminpanel-colleges-table">
            <thead className="adminpanel-colleges-table-head">
              <tr>
                <th>College Name</th>
                <th>Location</th>
                <th>Status</th>
                <th>Courses</th>
                <th>Students</th>
                <th>Last Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="adminpanel-colleges-table-body">
              {colleges.map((college) => (
                <tr key={college.id}>
                  <td>{college.name}</td>
                  <td>{college.location}</td>
                  <td>
                    <span className={`adminpanel-colleges-status ${college.status === 'active' ? 'adminpanel-colleges-status-active' : 'adminpanel-colleges-status-pending'}`}>{college.status}</span>
                  </td>
                  <td>{college.courses}</td>
                  <td>{college.students.toLocaleString()}</td>
                  <td>{college.lastUpdated}</td>
                  <td>
                    <div className="adminpanel-colleges-actions">
                      <button className="adminpanel-colleges-action-btn adminpanel-colleges-action-view">View</button>
                      <button className="adminpanel-colleges-action-btn adminpanel-colleges-action-edit">Edit</button>
                      <button className="adminpanel-colleges-action-btn adminpanel-colleges-action-delete">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />
      case 'colleges':
        return <CollegesTab />
      case 'content':
        return <div className="card"><h3 className="text-lg font-semibold">Content Management</h3></div>
      case 'timeline':
        return <div className="card"><h3 className="text-lg font-semibold">Timeline Management</h3></div>
      case 'users':
        return <div className="card"><h3 className="text-lg font-semibold">User Management</h3></div>
      case 'settings':
        return <div className="card"><h3 className="text-lg font-semibold">System Settings</h3></div>
      default:
        return <DashboardTab />
    }
  }

  return (
    <div className="adminpanel-bg">
      <div className="adminpanel-container">
        {/* Header */}
        <div className="adminpanel-header">
          <h1 className="adminpanel-header-title">Admin Panel</h1>
          <p className="adminpanel-header-desc">Manage colleges, content, and platform settings</p>
        </div>

        <div className="adminpanel-main-row">
          <div className="adminpanel-sidebar">
            <nav className="adminpanel-sidebar-nav">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`adminpanel-sidebar-btn ${activeTab === tab.id ? 'adminpanel-sidebar-selected' : ''}`}
                >
                  <span className="adminpanel-sidebar-btn-label">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
          <div className="adminpanel-main-content">
            {renderTabContent()}
          </div>
        </div>

        {/* Add College Modal */}
        {showAddModal && (
          <div className="adminpanel-modal-bg">
            <div className="adminpanel-modal-card">
              <div className="adminpanel-modal-title">Add New College</div>
              <form className="adminpanel-modal-form">
                <div className="adminpanel-modal-form-row">
                  <label className="adminpanel-modal-label">College Name</label>
                  <input type="text" className="adminpanel-modal-input" placeholder="Enter college name" />
                </div>
                <div className="adminpanel-modal-form-row">
                  <label className="adminpanel-modal-label">Location</label>
                  <input type="text" className="adminpanel-modal-input" placeholder="Enter location" />
                </div>
                <div className="adminpanel-modal-form-row">
                  <label className="adminpanel-modal-label">State</label>
                  <select className="adminpanel-modal-select">
                    <option>Select State</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Uttar Pradesh</option>
                  </select>
                </div>
                <div className="adminpanel-modal-actions">
                  <button type="button" onClick={() => setShowAddModal(false)} className="adminpanel-modal-cancel-btn">Cancel</button>
                  <button type="submit" className="adminpanel-modal-submit-btn">Add College</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminPanel
