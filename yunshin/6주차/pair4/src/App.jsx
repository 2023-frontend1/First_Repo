import P4Divider from './components/P4Divider'
import P4Wrapper from './components/P4Wrapper'
import { Q1_1 } from './pages/q1/Q1_1'
import { Q2_1 } from './pages/q2/Q2_1'
import { Q3_1 } from './pages/q3/Q3_1'

function App() {
  return (
    <>
      <P4Divider />
      <P4Wrapper>
        1. state에 맞는 화면 랜더링하기 - button 으로 Modal 조작하기{' '}
      </P4Wrapper>
      <Q1_1 />
      <P4Divider />
      <P4Wrapper>2. useRef 활용하기 - 특정 조건을 채웠는지 확인하기</P4Wrapper>
      <Q2_1 />
      <P4Divider />
      <P4Wrapper>3. useEffect 활용하기 - 타이머 만들기</P4Wrapper>
      <Q3_1 />
      <P4Divider />
    </>
  )
}

export default App
