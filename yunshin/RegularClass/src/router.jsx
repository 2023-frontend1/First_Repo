import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import O29MainPage from './classes/oct29th/pages/O29MainPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Oct',
    children: [
      {
        path: '/Oct/29',
        element: <O29MainPage />,
      },
      {
        path: '/Oct/28',
        element: <O29MainPage />,
      },
    ],
  },
])
export default router
