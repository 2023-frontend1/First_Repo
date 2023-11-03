import { createBrowserRouter } from 'react-router-dom'
import PrintNumberPage from './pages/PrintNumberPage'
import PrintQueryParamPage from './pages/PrintQueryParamPage'
import SingleBtnPage from './pages/SingleBtnPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SingleBtnPage />,
  },
  {
    path: '/:number',
    element: <PrintNumberPage />,
  },
  {
    path: '/number',
    element: <PrintQueryParamPage />,
  },
])
export default router
