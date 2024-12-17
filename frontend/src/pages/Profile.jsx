import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Profile.module.css'

function Profile() {
  const [user, setUser] = useState(null)
  const [sampleData, setSampleData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch user data
    fetch('http://localhost:8080/user', {
      credentials: 'include'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Not authenticated')
        }
        return response.json()
      })
      .then(data => setUser(data))
      .catch(() => navigate('/login'))

    // Fetch sample data
    fetch('http://localhost:8080/api/sample-data', {
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => setSampleData(data.items))
  }, [navigate])

  const handleLogout = () => {
    window.location.href = 'http://localhost:8080/logout'
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Welcome, {user.name}!</h1>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Logout
        </button>
      </div>

      <div className={styles.content}>
        <h2>Sample Data</h2>
        <div className={styles.grid}>
          {sampleData.map(item => (
            <div key={item.id} className={styles.card}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
