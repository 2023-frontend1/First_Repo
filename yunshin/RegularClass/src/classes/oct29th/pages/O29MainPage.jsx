import { useNavigate } from 'react-router-dom'
import { CusButton, CusContainer } from '../../../components'
const O29MainPage = () => {
  const navigate = useNavigate()

  const goToHooksPractice = () => {
    navigate('./hooks-practice')
  }
  return (
    <CusContainer width="100%" height="100vh">
      <CusButton onClick={goToHooksPractice}>HooksPractice</CusButton>
    </CusContainer>
  )
}

export default O29MainPage
