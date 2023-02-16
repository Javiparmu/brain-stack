import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import {
  Home,
  HowItWorks,
  Login,
  Register,
  Pricing,
  Profile,
} from './features'
import { PrivateRoutes } from './routes/PrivateRoutes'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './features/auth/authSlice'

function App() {
  const dispatch = useDispatch()
  const user = JSON.parse(
    localStorage.getItem('user') || 'null',
  )
  const token = localStorage.getItem('token') || ''

  useEffect(() => {
    dispatch(setCurrentUser({ user, token }))
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/signup" />
        </Route>
        <Route
          element={<HowItWorks />}
          path="/how-it-works"
        />
        <Route element={<Pricing />} path="/pricing" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Home />} path="*" />
      </Routes>
    </>
  )
}

export default App
