import { useNavigate } from 'react-router-dom'
import { CusButton, CusContainer, CusDivider } from './components'

const App = () => {
  const navigate = useNavigate()
  const goToClassPractice = (endPoint) => {
    navigate(endPoint)
  }
  return (
    <CusContainer height="100vh" direction="column">
      <CusDivider margin="10px" />
      <CusButton
        onClick={() => {
          goToClassPractice('/Oct-29')
        }}
      >
        11월 11일 자료
      </CusButton>
      <CusDivider margin="10px" />
    </CusContainer>
  )
}

export default App
