import { useState, useEffect } from 'react'
// Removed all icon imports
import './css/CollegeDirectory.css'

const CollegeDirectory = () => {
  const [colleges, setColleges] = useState([])
  const [filteredColleges, setFilteredColleges] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedStream, setSelectedStream] = useState('')
  const [selectedCourse, setSelectedCourse] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  // Sample college data
  const sampleColleges = [
    {
      id: 1,
      name: 'Delhi University',
      location: 'Delhi',
      state: 'Delhi',
      type: 'Central University',
      rating: 4.5,
      students: 50000,
      established: 1922,
      courses: ['B.A.', 'B.Sc.', 'B.Com.', 'B.Tech', 'M.A.', 'M.Sc.', 'M.Com.'],
      streams: ['Arts', 'Science', 'Commerce'],
      facilities: ['Hostel', 'Library', 'Sports', 'Laboratory'],
      cutOff: '95%',
      website: 'www.du.ac.in',
      phone: '+91-11-27667800',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'Jawaharlal Nehru University',
      location: 'New Delhi',
      state: 'Delhi',
      type: 'Central University',
      rating: 4.7,
      students: 8000,
      established: 1969,
      courses: ['B.A.', 'M.A.', 'M.Sc.', 'M.Phil', 'Ph.D'],
      streams: ['Arts', 'Science'],
      facilities: ['Hostel', 'Library', 'Sports', 'Research Center'],
      cutOff: '98%',
      website: 'www.jnu.ac.in',
      phone: '+91-11-26742676',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      name: 'University of Mumbai',
      location: 'Mumbai',
      state: 'Maharashtra',
      type: 'State University',
      rating: 4.2,
      students: 75000,
      established: 1857,
      courses: ['B.A.', 'B.Sc.', 'B.Com.', 'B.Tech', 'M.A.', 'M.Sc.', 'M.Com.'],
      streams: ['Arts', 'Science', 'Commerce'],
      facilities: ['Hostel', 'Library', 'Sports', 'Laboratory'],
      cutOff: '90%',
      website: 'www.mu.ac.in',
      phone: '+91-22-26543000',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      name: 'Banaras Hindu University',
      location: 'Varanasi',
      state: 'Uttar Pradesh',
      type: 'Central University',
      rating: 4.4,
      students: 30000,
      established: 1916,
      courses: ['B.A.', 'B.Sc.', 'B.Com.', 'B.Tech', 'M.A.', 'M.Sc.', 'M.Com.'],
      streams: ['Arts', 'Science', 'Commerce'],
      facilities: ['Hostel', 'Library', 'Sports', 'Laboratory', 'Medical'],
      cutOff: '92%',
      website: 'www.bhu.ac.in',
      phone: '+91-542-2368428',
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      name: 'University of Calcutta',
      location: 'Kolkata',
      state: 'West Bengal',
      type: 'State University',
      rating: 4.1,
      students: 20000,
      established: 1857,
      courses: ['B.A.', 'B.Sc.', 'B.Com.', 'M.A.', 'M.Sc.', 'M.Com.'],
      streams: ['Arts', 'Science', 'Commerce'],
      facilities: ['Hostel', 'Library', 'Sports', 'Laboratory'],
      cutOff: '88%',
      website: 'www.caluniv.ac.in',
      phone: '+91-33-22410071',
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      name: 'Anna University',
      location: 'Chennai',
      state: 'Tamil Nadu',
      type: 'State University',
      rating: 4.3,
      students: 40000,
      established: 1978,
      courses: ['B.Tech', 'M.Tech', 'M.Sc.', 'Ph.D'],
      streams: ['Science'],
      facilities: ['Hostel', 'Library', 'Sports', 'Laboratory', 'Research Center'],
      cutOff: '94%',
      website: 'www.annauniv.edu',
      phone: '+91-44-22351723',
      image: '/api/placeholder/300/200'
    }
  ]

  const states = ['All States', 'Delhi', 'Maharashtra', 'Uttar Pradesh', 'West Bengal', 'Tamil Nadu', 'Karnataka', 'Gujarat']
  const streams = ['All Streams', 'Arts', 'Science', 'Commerce']
  const courses = ['All Courses', 'B.A.', 'B.Sc.', 'B.Com.', 'B.Tech', 'M.A.', 'M.Sc.', 'M.Com.', 'M.Tech']

  useEffect(() => {
    setColleges(sampleColleges)
    setFilteredColleges(sampleColleges)
  }, [])

  useEffect(() => {
    let filtered = colleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesState = selectedState === '' || selectedState === 'All States' || college.state === selectedState
      const matchesStream = selectedStream === '' || selectedStream === 'All Streams' || college.streams.includes(selectedStream)
      const matchesCourse = selectedCourse === '' || selectedCourse === 'All Courses' || college.courses.includes(selectedCourse)
      
      return matchesSearch && matchesState && matchesStream && matchesCourse
    })
    setFilteredColleges(filtered)
  }, [searchTerm, selectedState, selectedStream, selectedCourse, colleges])

  const CollegeCard = ({ college }) => (
  <div className="college-card">
      <div className="college-card-row">
        <div className="college-card-img">
          <span className="college-card-img-label">College</span>
        </div>
        <div className="college-card-info">
          <div className="college-card-header">
            <div>
              <h3 className="college-card-title">{college.name}</h3>
              <div className="college-card-location">
                <span className="college-card-location-icon">📍</span>
                <span>{college.location}, {college.state}</span>
              </div>
              <span className="college-card-type">{college.type}</span>
            </div>
            <div className="college-card-rating">
              <span className="college-card-rating-icon">★</span>
              <span className="college-card-rating-value">{college.rating}</span>
            </div>
          </div>
          <div className="college-card-stats-row">
            <div className="college-card-stats-item">
              <span className="college-card-stats-icon">👥</span>
              <span className="college-card-stats-text">{college.students.toLocaleString()} students</span>
            </div>
            <div className="college-card-stats-item">
              <span className="college-card-stats-icon">📖</span>
              <span className="college-card-stats-text">Est. {college.established}</span>
            </div>
          </div>
          <div className="college-card-streams">
            <h4 className="college-card-streams-title">Available Streams:</h4>
            <div className="college-card-streams-list">
              {college.streams.map((stream, index) => (
                <span key={index} className="college-card-streams-item">{stream}</span>
              ))}
            </div>
          </div>
          <div className="college-card-courses">
            <h4 className="college-card-courses-title">Popular Courses:</h4>
            <div className="college-card-courses-list">
              {college.courses.slice(0, 4).map((course, index) => (
                <span key={index} className="college-card-courses-item">{course}</span>
              ))}
              {college.courses.length > 4 && (
                <span className="college-card-courses-more">+{college.courses.length - 4} more</span>
              )}
            </div>
          </div>
          <div className="college-card-footer">
            <div className="college-card-cutoff">
              <span className="college-card-cutoff-label">Cut-off: </span>
              <span className="college-card-cutoff-value">{college.cutOff}</span>
            </div>
            <div className="college-card-actions">
              <button className="college-card-details-btn">View Details</button>
              <button className="college-card-apply-btn">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="college-directory-bg">
      <div className="college-directory-container">
        {/* Header */}
        <div className="college-directory-header">
          <span className="college-directory-header-title">Location</span>
          <h1 className="college-directory-header-main">Government College Directory</h1>
          <p className="college-directory-header-desc">Discover government colleges across India with detailed information</p>
        </div>

        {/* Search and Filters */}
        <div className="college-directory-search-card">
          <div className="college-directory-search-row">
            <div className="college-directory-search-input-wrap">
              <input
                type="text"
                placeholder="Search colleges by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="college-directory-search-input"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="college-directory-filter-btn"
            >
              <span className="college-directory-filter-icon">Filter</span>
              <span>Filters</span>
            </button>
          </div>

          {showFilters && (
            <div className="college-directory-filters-wrap">
              <div className="college-directory-filters-grid">
                <div>
                  <label className="college-directory-filter-label">State</label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="college-directory-filter-select"
                  >
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="college-directory-filter-label">Stream</label>
                  <select
                    value={selectedStream}
                    onChange={(e) => setSelectedStream(e.target.value)}
                    className="college-directory-filter-select"
                  >
                    {streams.map(stream => (
                      <option key={stream} value={stream}>{stream}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="college-directory-filter-label">Course</label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="college-directory-filter-select"
                  >
                    {courses.map(course => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="college-directory-results-row">
          <p className="college-directory-results-count">Showing {filteredColleges.length} of {colleges.length} colleges</p>
          <div className="college-directory-results-sort-wrap">
            <span className="college-directory-results-sort-label">Sort by:</span>
            <select className="college-directory-results-sort-select">
              <option>Relevance</option>
              <option>Rating</option>
              <option>Cut-off</option>
              <option>Name</option>
            </select>
          </div>
        </div>

        {/* Colleges Grid */}
  <div className="college-directory-list">
          {filteredColleges.length > 0 ? (
            filteredColleges.map(college => (
              <CollegeCard key={college.id} college={college} />
            ))
          ) : (
            <div className="college-directory-empty">
              <span className="college-directory-empty-label">No Colleges</span>
              <h3 className="college-directory-empty-title">No colleges found</h3>
              <p className="college-directory-empty-desc">Try adjusting your search criteria or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedState('')
                  setSelectedStream('')
                  setSelectedCourse('')
                }}
                className="college-directory-clear-btn"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Load More */}
        {filteredColleges.length > 0 && (
          <div className="college-directory-loadmore-wrap">
            <button className="college-directory-loadmore-btn">Load More Colleges</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CollegeDirectory
