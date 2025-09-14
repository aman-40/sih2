import { useState } from 'react'
// All SVG and icon usage removed
import './css/Resources.css'

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedClass, setSelectedClass] = useState('all')

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'study', name: 'Study Materials' },
    { id: 'scholarships', name: 'Scholarships' },
    { id: 'career', name: 'Career Guides' }
  ]

  const classes = ['all', 'Class 10', 'Class 11', 'Class 12']

  const resources = [
    {
      id: 1,
      title: 'NCERT Class 12 Physics Textbook',
      category: 'study',
      class: 'Class 12',
      type: 'PDF',
      size: '15.2 MB',
      downloads: 1250,
      rating: 4.8,
      description: 'Complete NCERT Physics textbook for Class 12 students',
      subjects: ['Physics'],
      streams: ['Science'],
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 2,
      title: 'JEE Main Previous Year Papers (2020-2024)',
      category: 'study',
      class: 'Class 12',
      type: 'PDF',
      size: '8.5 MB',
      downloads: 2100,
      rating: 4.9,
      description: 'Complete collection of JEE Main question papers with solutions',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      streams: ['Science'],
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 3,
      title: 'Central Sector Scholarship Guide 2025',
      category: 'scholarships',
      class: 'all',
      type: 'PDF',
      size: '2.1 MB',
      downloads: 850,
      rating: 4.6,
      description: 'Complete guide to Central Sector Scholarship schemes',
      subjects: ['General'],
      streams: ['All Streams'],
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 4,
      title: 'Career Options in Commerce Stream',
      category: 'career',
      class: 'all',
      type: 'PDF',
      size: '3.8 MB',
      downloads: 1200,
      rating: 4.7,
      description: 'Comprehensive guide to career opportunities in Commerce',
      subjects: ['Commerce'],
      streams: ['Commerce'],
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 5,
      title: 'NEET Biology Study Notes',
      category: 'study',
      class: 'Class 12',
      type: 'PDF',
      size: '12.3 MB',
      downloads: 1800,
      rating: 4.8,
      description: 'Detailed study notes for NEET Biology preparation',
      subjects: ['Biology'],
      streams: ['Science'],
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 6,
      title: 'Merit Scholarship Application Form',
      category: 'scholarships',
      class: 'all',
      type: 'PDF',
      size: '0.8 MB',
      downloads: 650,
      rating: 4.5,
      description: 'Official application form for merit scholarships',
      subjects: ['General'],
      streams: ['All Streams'],
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 7,
      title: 'Arts Stream Career Pathways',
      category: 'career',
      class: 'all',
      type: 'PDF',
      size: '4.2 MB',
      downloads: 950,
      rating: 4.6,
      description: 'Explore various career options available in Arts stream',
      subjects: ['Arts'],
      streams: ['Arts'],
      downloadUrl: '#',
      previewUrl: '#'
    },
    {
      id: 8,
      title: 'CUET Sample Papers 2025',
      category: 'study',
      class: 'Class 12',
      type: 'PDF',
      size: '6.7 MB',
      downloads: 1400,
      rating: 4.7,
      description: 'Sample question papers for CUET 2025 preparation',
      subjects: ['General'],
      streams: ['All Streams'],
      downloadUrl: '#',
      previewUrl: '#'
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    const matchesClass = selectedClass === 'all' || resource.class === selectedClass
    
    return matchesSearch && matchesCategory && matchesClass
  })

  const ResourceCard = ({ resource }) => (
  <div className="resources-card">
      <div className="resources-card-header">
        <div className="resources-card-title">{resource.title}</div>
        <p className="resources-card-desc">{resource.description}</p>
        <div className="resources-card-meta">
          <span className="resources-card-type">Type: {resource.type}</span>
          <span className="resources-card-size">{resource.size}</span>
          <span className="resources-card-downloads">Downloads: {resource.downloads.toLocaleString()}</span>
          <span className="resources-card-rating">★ {resource.rating}</span>
        </div>
        <div className="resources-card-tags">
          {resource.subjects.map((subject, index) => (
            <span key={index} className="resources-card-tag resources-card-tag-primary">{subject}</span>
          ))}
          {resource.streams.map((stream, index) => (
            <span key={index} className="resources-card-tag resources-card-tag-secondary">{stream}</span>
          ))}
        </div>
      </div>
      <div className="resources-card-actions">
        <button className="resources-card-btn resources-card-btn-preview">Preview</button>
        <button className="resources-card-btn resources-card-btn-bookmark">Bookmark</button>
        <button className="resources-card-btn resources-card-btn-download">Download</button>
      </div>
    </div>
  )

  return (
    <div className="resources-bg">
      <div className="resources-container">
        {/* Header */}
        <div className="resources-header">
          <div className="resources-header-title">Resources</div>
          <h1 className="resources-header-main">Study Resources & Guides</h1>
          <p className="resources-header-desc">Access free study materials, scholarship guides, and career resources</p>
        </div>

        {/* Quick Stats */}
        <div className="resources-stats-grid">
          <div className="resources-stats-card resources-stats-study">
            <div className="resources-stats-value">50+</div>
            <div className="resources-stats-label">Study Materials</div>
          </div>
          <div className="resources-stats-card resources-stats-scholarship">
            <div className="resources-stats-value">25+</div>
            <div className="resources-stats-label">Scholarship Guides</div>
          </div>
          <div className="resources-stats-card resources-stats-career">
            <div className="resources-stats-value">15+</div>
            <div className="resources-stats-label">Career Guides</div>
          </div>
          <div className="resources-stats-card resources-stats-downloads">
            <div className="resources-stats-value">10K+</div>
            <div className="resources-stats-label">Downloads</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="resources-filters-card">
          <div className="resources-filters-row">
            <div className="resources-filters-search-wrap">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="resources-filters-search-input"
              />
            </div>
            <div className="resources-filters-select-wrap">
              <label className="resources-filters-label">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="resources-filters-select"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            <div className="resources-filters-select-wrap">
              <label className="resources-filters-label">Class</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="resources-filters-select"
              >
                {classes.map(cls => (
                  <option key={cls} value={cls}>
                    {cls === 'all' ? 'All Classes' : cls}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="resources-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`resources-tab-btn ${selectedCategory === category.id ? 'resources-tab-selected' : ''}`}
            >
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="resources-results-row">
          <p className="resources-results-label">
            Showing {filteredResources.length} of {resources.length} resources
          </p>
          <div className="resources-results-sort-wrap">
            <span className="resources-results-sort-label">Sort by:</span>
            <select className="resources-results-sort-select">
              <option>Most Popular</option>
              <option>Highest Rated</option>
              <option>Newest</option>
              <option>File Size</option>
            </select>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="resources-list-grid">
          {filteredResources.length > 0 ? (
            filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))
          ) : (
            <div className="resources-empty">
              <div className="resources-empty-label">No resources</div>
              <h3 className="resources-empty-title">No resources found</h3>
              <p className="resources-empty-desc">Try adjusting your search criteria or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                  setSelectedClass('all')
                }}
                className="resources-clear-btn"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Featured Resources */}
        <div className="resources-featured-wrap">
          <h2 className="resources-featured-title">Featured Resources</h2>
          <div className="resources-featured-grid">
            <div className="resources-featured-card resources-featured-scholarship">
              <div className="resources-featured-card-header">Scholarships</div>
              <h3 className="resources-featured-card-title">Top Scholarships</h3>
              <p className="resources-featured-card-desc">Complete guide to government scholarships available for students</p>
              <button className="resources-featured-card-btn">View Guide</button>
            </div>
            <div className="resources-featured-card resources-featured-career">
              <div className="resources-featured-card-header">Career</div>
              <h3 className="resources-featured-card-title">Career Pathways</h3>
              <p className="resources-featured-card-desc">Explore different career options based on your stream and interests</p>
              <button className="resources-featured-card-btn">Explore</button>
            </div>
            <div className="resources-featured-card resources-featured-exam">
              <div className="resources-featured-card-header">Exam</div>
              <h3 className="resources-featured-card-title">Exam Prep</h3>
              <p className="resources-featured-card-desc">Previous year papers and study materials for competitive exams</p>
              <button className="resources-featured-card-btn">Study Now</button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="resources-newsletter-card">
          <div className="resources-newsletter-content">
            <h3 className="resources-newsletter-title">Stay Updated</h3>
            <p className="resources-newsletter-desc">Get notified about new resources, scholarship updates, and important deadlines</p>
            <div className="resources-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="resources-newsletter-input"
              />
              <button className="resources-newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
