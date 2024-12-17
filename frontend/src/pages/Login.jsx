import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

function Login() {
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google'
  }

  useEffect(() => {
    // Check if there's an error parameter in the URL
    const urlParams = new URLSearchParams(window.location.search)
    const error = urlParams.get('error')
    if (error) {
      alert('Login failed. Please try again.')
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1>Welcome</h1>
        <p>Please sign in to continue</p>
        <button onClick={handleGoogleLogin} className={styles.googleButton}>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default Login
