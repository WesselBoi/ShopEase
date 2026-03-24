import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../slices/authApiSlice'
import { logout } from '../slices/authSlice'

function LogoutButton({ className }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [logoutApiCall] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      // Call logout API to clear server-side session/cookie
      await logoutApiCall().unwrap()
      
      // Clear Redux state and localStorage
      dispatch(logout())
      
      // Redirect to home page
      navigate('/login')
    } catch (err) {
      // Even if API call fails, still logout locally
      dispatch(logout())
      navigate('/')
    }
  }

  return (
    <button 
      onClick={handleLogout}
      className={className || "rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 hover:border-goldish hover:text-goldish"}
    >
      Logout
    </button>
  )
}

export default LogoutButton