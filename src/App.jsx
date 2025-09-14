import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import CareerTest from './pages/CareerTest'
import CollegeDirectory from './pages/CollegeDirectory'
import Timeline from './pages/Timeline'
import Resources from './pages/Resources'
import AdminPanel from './pages/AdminPanel'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        {/* <Layout> */}
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Protected Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/career-test" element={<CareerTest />} />
            <Route path="/colleges" element={<CollegeDirectory />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        {/* </Layout> */}
      </Router>
    </AuthProvider>
  )
}

export default App
