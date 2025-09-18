import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// Removed all icon imports
import './css/CareerTest.css'

const CareerTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [testCompleted, setTestCompleted] = useState(false)
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const questions = [
    {
      id: 1,
      category: 'Academic Interest',
      question: 'Which subjects do you enjoy studying the most?',
      options: [
        { text: 'Mathematics and Science', value: 'science', weight: { science: 3, commerce: 1, arts: 0 } },
        { text: 'Languages and Literature', value: 'arts', weight: { science: 0, commerce: 1, arts: 3 } },
        { text: 'Social Studies and History', value: 'arts', weight: { science: 0, commerce: 2, arts: 3 } },
        { text: 'Economics and Business', value: 'commerce', weight: { science: 1, commerce: 3, arts: 1 } }
      ]
    },
    {
      id: 2,
      category: 'Problem Solving',
      question: 'How do you prefer to solve problems?',
      options: [
        { text: 'Using logical reasoning and formulas', value: 'science', weight: { science: 3, commerce: 2, arts: 0 } },
        { text: 'Through creative thinking and innovation', value: 'arts', weight: { science: 1, commerce: 1, arts: 3 } },
        { text: 'By analyzing data and trends', value: 'commerce', weight: { science: 2, commerce: 3, arts: 1 } },
        { text: 'Through discussion and collaboration', value: 'arts', weight: { science: 1, commerce: 2, arts: 2 } }
      ]
    },
    {
      id: 3,
      category: 'Career Goals',
      question: 'What type of work environment appeals to you?',
      options: [
        { text: 'Laboratory or research facility', value: 'science', weight: { science: 3, commerce: 0, arts: 0 } },
        { text: 'Office with business meetings', value: 'commerce', weight: { science: 1, commerce: 3, arts: 1 } },
        { text: 'Creative studio or cultural center', value: 'arts', weight: { science: 0, commerce: 1, arts: 3 } },
        { text: 'Field work and outdoor activities', value: 'science', weight: { science: 2, commerce: 1, arts: 2 } }
      ]
    },
    {
      id: 4,
      category: 'Skills Assessment',
      question: 'Which skills do you consider your strongest?',
      options: [
        { text: 'Mathematical calculations and analysis', value: 'science', weight: { science: 3, commerce: 2, arts: 0 } },
        { text: 'Communication and presentation', value: 'arts', weight: { science: 1, commerce: 2, arts: 3 } },
        { text: 'Financial planning and management', value: 'commerce', weight: { science: 1, commerce: 3, arts: 1 } },
        { text: 'Artistic expression and design', value: 'arts', weight: { science: 0, commerce: 1, arts: 3 } }
      ]
    },
    {
      id: 5,
      category: 'Values & Interests',
      question: 'What motivates you the most?',
      options: [
        { text: 'Discovering new knowledge and innovation', value: 'science', weight: { science: 3, commerce: 1, arts: 1 } },
        { text: 'Helping others and making a social impact', value: 'arts', weight: { science: 1, commerce: 1, arts: 3 } },
        { text: 'Building wealth and business success', value: 'commerce', weight: { science: 1, commerce: 3, arts: 1 } },
        { text: 'Expressing creativity and artistic vision', value: 'arts', weight: { science: 0, commerce: 1, arts: 3 } }
      ]
    },
    {
      id: 6,
      category: 'Learning Style',
      question: 'How do you learn best?',
      options: [
        { text: 'Through experiments and hands-on practice', value: 'science', weight: { science: 3, commerce: 1, arts: 1 } },
        { text: 'By reading and analyzing texts', value: 'arts', weight: { science: 1, commerce: 2, arts: 3 } },
        { text: 'Through case studies and real-world examples', value: 'commerce', weight: { science: 1, commerce: 3, arts: 1 } },
        { text: 'By creating and expressing ideas', value: 'arts', weight: { science: 0, commerce: 1, arts: 3 } }
      ]
    },
    {
      id: 7,
      category: 'Future Aspirations',
      question: 'What do you see yourself doing in 10 years?',
      options: [
        { text: 'Working as a scientist or engineer', value: 'science', weight: { science: 3, commerce: 0, arts: 0 } },
        { text: 'Running my own business', value: 'commerce', weight: { science: 1, commerce: 3, arts: 1 } },
        { text: 'Teaching or working in social services', value: 'arts', weight: { science: 1, commerce: 1, arts: 3 } },
        { text: 'Working in media or creative industries', value: 'arts', weight: { science: 0, commerce: 1, arts: 3 } }
      ]
    },
    {
      id: 8,
      category: 'Personality Traits',
      question: 'Which describes you best?',
      options: [
        { text: 'Analytical and detail-oriented', value: 'science', weight: { science: 3, commerce: 2, arts: 0 } },
        { text: 'Creative and imaginative', value: 'arts', weight: { science: 0, commerce: 1, arts: 3 } },
        { text: 'Practical and goal-oriented', value: 'commerce', weight: { science: 1, commerce: 3, arts: 1 } },
        { text: 'Social and people-oriented', value: 'arts', weight: { science: 1, commerce: 2, arts: 2 } }
      ]
    }
  ]

  const handleAnswer = (questionId, option) => {
    setAnswers({
      ...answers,
      [questionId]: option
    })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateResults = () => {
    setLoading(true)
    // Calculate scores locally
    const scores = { science: 0, commerce: 0, arts: 0 }
    Object.values(answers).forEach(answer => {
      if (answer && answer.weight) {
        scores.science += answer.weight.science || 0
        scores.commerce += answer.weight.commerce || 0
        scores.arts += answer.weight.arts || 0
      }
    })
    const totalScore = scores.science + scores.commerce + scores.arts
    const percentages = {
      science: Math.round((scores.science / totalScore) * 100),
      commerce: Math.round((scores.commerce / totalScore) * 100),
      arts: Math.round((scores.arts / totalScore) * 100)
    }
    const recommendedStream = Object.keys(percentages).reduce((a, b) => 
      percentages[a] > percentages[b] ? a : b
    )
    const streamDetails = {
      science: {
        name: 'Science Stream',
        description: 'Perfect for students interested in mathematics, physics, chemistry, biology, and technology.',
        careers: ['Engineer', 'Doctor', 'Scientist', 'Researcher', 'Data Analyst'],
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology/Computer Science'],
        colleges: ['IITs', 'NITs', 'Medical Colleges', 'Engineering Institutes']
      },
      commerce: {
        name: 'Commerce Stream',
        description: 'Ideal for students interested in business, economics, finance, and management.',
        careers: ['CA', 'Business Analyst', 'Banker', 'Entrepreneur', 'Financial Advisor'],
        subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics/Informatics'],
        colleges: ['Delhi University', 'SRCC', 'Christ University', 'Symbiosis']
      },
      arts: {
        name: 'Arts/Humanities Stream',
        description: 'Great for students interested in languages, social sciences, and creative fields.',
        careers: ['Teacher', 'Journalist', 'Social Worker', 'Artist', 'Civil Services'],
        subjects: ['History', 'Political Science', 'Geography', 'Literature', 'Psychology'],
        colleges: ['JNU', 'DU Arts', 'Jamia Millia', 'TISS']
      }
    }
    // Fetch AI-generated conclusion from backend
    fetch('http://localhost:5000/api/ollama-conclusion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers })
    })
      .then(res => res.json())
      .then(data => {
        setResults({
          recommendedStream,
          percentages,
          details: streamDetails[recommendedStream],
          allStreams: streamDetails,
          aiConclusion: data.conclusion || '',
          flowchart: data.flowchart || null
        })
        setTestCompleted(true)
        setLoading(false)
      })
      .catch(() => {
        setResults({
          recommendedStream,
          percentages,
          details: streamDetails[recommendedStream],
          allStreams: streamDetails,
          aiConclusion: 'Unable to fetch AI conclusion at this time.',
          flowchart: null
        })
        setTestCompleted(true)
        setLoading(false)
      })
  }

  const retakeTest = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setTestCompleted(false)
    setResults(null)
  }

  if (loading) {
    return (
  <div className="career-test-loading-bg">
        <div className="career-test-loading-content">
          <div className="career-test-loading-spinner"></div>
          <h2 className="career-test-loading-title">Analyzing Your Responses</h2>
          <p className="career-test-loading-desc">Our AI is processing your answers to provide personalized recommendations...</p>
        </div>
      </div>
    )
  }

  if (testCompleted && results) {

    // Helper to format AI conclusion as point-wise list
    const formatAiConclusion = (text) => {
      if (!text) return ['No AI conclusion available.'];
      // Split by line or numbered/bulleted points
      const points = text
        .split(/\n|\r|\d+\. |• |\- /)
        .map(p => p.trim())
        .filter(p => p.length > 0);
      return points;
    };

    // Flowchart Component
    const FlowchartNode = ({ node, level = 0 }) => {
      const [isExpanded, setIsExpanded] = useState(true);
      
      return (
        <div className={`flowchart-node flowchart-level-${level}`}>
          <div 
            className="flowchart-node-content"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flowchart-node-header">
              <span className="flowchart-node-title">{node.name}</span>
              {node.children && node.children.length > 0 && (
                <span className={`flowchart-expand-icon ${isExpanded ? 'expanded' : ''}`}>
                  ▼
                </span>
              )}
            </div>
            {node.value && (
              <div className="flowchart-node-value">{node.value}</div>
            )}
          </div>
          
          {node.children && node.children.length > 0 && isExpanded && (
            <div className="flowchart-children">
              {node.children.map((child, index) => (
                <FlowchartNode key={index} node={child} level={level + 1} />
              ))}
            </div>
          )}
        </div>
      );
    };

    return (
      <div className="career-test-results-bg">
        <div className="career-test-results-container">
          {/* Results Header */}
          <div className="career-test-results-header">
            <span className="career-test-results-check">✔</span>
            <h1 className="career-test-results-title">Career Test Complete!</h1>
            <p className="career-test-results-desc">Here are your personalized recommendations</p>
          </div>

          {/* AI Conclusion - Now at Top */}
          <div className="career-test-results-ai-conclusion-card">
            <div className="career-test-results-ai-icon" />
            <div className="career-test-results-ai-text">
              <h2 className="career-test-results-ai-title">AI Career Guidance</h2>
              <ul className="career-test-results-ai-list">
                {formatAiConclusion(results.aiConclusion).map((point, idx) => (
                  <li key={idx} className="career-test-results-ai-list-item">{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Career Path Flowchart */}
          {results.flowchart && (
            <div className="career-test-results-card">
              <h2 className="career-test-results-flowchart-title">
                📊 Your Career Journey Roadmap
              </h2>
              <p className="career-test-results-flowchart-desc">
                Here's a visual guide to help you navigate your career path based on your test results
              </p>
              <div className="career-test-flowchart-container">
                <FlowchartNode node={results.flowchart} />
              </div>
            </div>
          )}

          {/* Main Recommendation */}
          <div className="career-test-results-card">
            <div className="career-test-results-main">
              <h2 className="career-test-results-main-title">Recommended Stream: {results.details.name}</h2>
              <p className="career-test-results-main-desc">{results.details.description}</p>
            </div>

            <div className="career-test-results-grid">
              <div>
                <h3 className="career-test-results-list-title">Career Options</h3>
                <ul className="career-test-results-list">
                  {results.details.careers.map((career, index) => (
                    <li key={index} className="career-test-results-list-item">
                      <span className="career-test-results-list-dot">•</span>
                      <span className="career-test-results-list-text">{career}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="career-test-results-list-title">Subject Options</h3>
                <ul className="career-test-results-list">
                  {results.details.subjects.map((subject, index) => (
                    <li key={index} className="career-test-results-list-item">
                      <span className="career-test-results-list-dot">•</span>
                      <span className="career-test-results-list-text">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


          {/* Stream Comparison */}
          <div className="career-test-results-card">
            <h3 className="career-test-results-list-title">Stream Compatibility Scores</h3>
            <div className="career-test-results-score-list">
              {Object.entries(results.percentages).map(([stream, percentage]) => (
                <div key={stream} className="career-test-results-score-row">
                  <div className={`career-test-results-score-dot ${stream === results.recommendedStream ? 'career-test-dot-recommended' : 'career-test-dot-other'}`}></div>
                  <span className="career-test-results-score-label">{results.allStreams[stream].name}</span>
                  <div className="career-test-results-score-bar-bg">
                    <div className={`career-test-results-score-bar ${stream === results.recommendedStream ? 'career-test-bar-recommended' : 'career-test-bar-other'}`}
                      style={{ width: `${percentage}%` }}></div>
                  </div>
                  <span className="career-test-results-score-percent">{percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="career-test-results-card">
            <h3 className="career-test-results-list-title">Next Steps</h3>
            <div className="career-test-results-next-grid">
              <button
                onClick={() => navigate('/colleges')}
                className="career-test-btn-primary"
              >
                <span>Explore Colleges</span>
                <span className="font-bold text-gray-400">→</span>
              </button>
              <button
                onClick={() => navigate('/timeline')}
                className="career-test-btn-secondary"
              >
                <span>View Timeline</span>
                <span className="font-bold text-gray-400">→</span>
              </button>
              <button
                onClick={retakeTest}
                className="career-test-btn-retake"
              >
                <span>Retake Test</span>
                <span className="font-bold text-gray-400">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="career-test-bg professional-career-test-bg">
      <div className="professional-career-test-outer">
        <div className="professional-career-test-card">
          {/* Left Info Panel */}
          <div className="glassy-panel-career-test">
            <h2 className="professional-career-test-title">Career Aptitude Test</h2>
            <p className="professional-career-test-desc">Answer these questions to discover your ideal career path. Your responses are confidential and help us recommend the best stream for you.</p>
            <div className="professional-career-test-tips">
              <h4 className="career-test-tips-title">Test Tips</h4>
              <ul className="career-test-tips-list">
                <li>• Answer honestly based on your interests and preferences</li>
                <li>• There are no right or wrong answers</li>
                <li>• Take your time to think about each question</li>
                <li>• You can change your answers before moving to the next question</li>
              </ul>
            </div>
          </div>
          {/* Right Test Panel */}
          <div className="professional-career-test-form-panel">
            {/* Progress Bar */}
            <div className="career-test-progress-section">
              <div className="career-test-progress-labels">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <div className="career-test-progress-bar-bg">
                <div className="career-test-progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            {/* Navigation - Now Above Question Card */}
            <div className="career-test-nav-row">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className="career-test-nav-btn career-test-nav-prev"
              >
                <span className="career-test-nav-arrow">←</span>
                <span>Previous</span>
              </button>
              <button
                onClick={nextQuestion}
                disabled={!answers[currentQ.id]}
                className="career-test-nav-btn career-test-nav-next"
              >
                <span>{currentQuestion === questions.length - 1 ? 'Complete Test' : 'Next'}</span>
                <span className="career-test-nav-arrow">→</span>
              </button>
            </div>

            {/* Question Card */}
            <div className="career-test-question-card">
              <div className="career-test-question-header">
                <span className="career-test-question-category">{currentQ.category}</span>
                <h2 className="career-test-question-title">{currentQ.question}</h2>
              </div>

              <div className="career-test-options-list">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQ.id, option)}
                    className={`career-test-option-btn ${answers[currentQ.id]?.value === option.value ? 'career-test-option-selected' : ''}`}
                  >
                    <div className="career-test-option-row">
                      <div className={`career-test-option-dot ${answers[currentQ.id]?.value === option.value ? 'career-test-dot-selected' : ''}`}></div>
                      <span className="career-test-option-text">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerTest
