import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { HooksPracticePage, O29MainPage } from './classes/oct29th/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Oct-29',
    children: [
      {
        path: '',
        element: <O29MainPage />,
      },
      {
        path: 'hooks-practice',
        element: <HooksPracticePage />,
      },
    ],
  },
])
export default router
