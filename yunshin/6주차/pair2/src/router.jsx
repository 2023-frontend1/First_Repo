import { createBrowserRouter } from 'react-router-dom'
import ButtonPage from './pages/ButtonPage'
import PrintPathVariablePage from './pages/PrintPathVariablePage'
import PrintQueryParamPage from './pages/PrintQueryParamPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ButtonPage />,
  },
  {
    path: '/number/:number',
    element: <PrintPathVariablePage />,
  },
  {
    path: '/number',
    element: <PrintQueryParamPage />,
  },
])
export default router
