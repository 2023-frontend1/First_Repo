import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import DetailPage from './pages/Detail'
import StatesPage from './pages/State'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <StatesPage />,
    },
    {
      path: '/detail/:productNumber',
      element: <DetailPage />,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
