import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectCurrentUser } from '../features/auth/authSlice'

export const PrivateRoutes = () => {
  const user = useAppSelector(selectCurrentUser)

  return user ? <Navigate to="/" /> : <Outlet />
}
