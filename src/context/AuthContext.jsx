import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Simulate API call
    try {
      const userData = {
        id: 1,
        email,
        name: email.split('@')[0],
        role: 'student',
        profile: {
          age: null,
          class: null,
          interests: [],
          location: null,
          language: 'en'
        }
      }
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const signup = async (userData) => {
    try {
      const newUser = {
        id: Date.now(),
        ...userData,
        role: 'student',
        profile: {
          age: null,
          class: null,
          interests: [],
          location: null,
          language: 'en'
        }
      }
      setUser(newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const updateProfile = (profileData) => {
    if (user) {
      const updatedUser = {
        ...user,
        profile: { ...user.profile, ...profileData }
      }
      setUser(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))
    }
  }

  const value = {
    user,
    login,
    signup,
    logout,
    updateProfile,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
