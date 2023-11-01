import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import SingleBtnPage from './pages/SingleBtnPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SingleBtnPage />,
  },
  {
    path: '/app',
    element: <App />,
  },
])
export default router
