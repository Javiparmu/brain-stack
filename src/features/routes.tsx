import {
  Home,
  HowItWorks,
  Pricing,
  Profile,
  Login,
  Register,
} from './index'

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/how-it-works',
    element: <HowItWorks />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
]
