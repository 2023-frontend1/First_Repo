import { CusButton, CusContainer, CusDivider } from './components'

const App = () => {
  return (
    <CusContainer height="100vh" bgColor="pink" direction="column">
      <CusDivider margin="10px" />
      <CusButton>11월 11일 자료</CusButton>
      <CusDivider margin="10px" />
    </CusContainer>
  )
}

export default App
