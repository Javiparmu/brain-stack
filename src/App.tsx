import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { routes } from './features/routes'

const router = createBrowserRouter(routes)

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
