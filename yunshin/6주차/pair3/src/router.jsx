import { createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/detail',
    element: <></>,
  },
  {
    path: '/number',
    element: <></>,
  },
])
export default router
