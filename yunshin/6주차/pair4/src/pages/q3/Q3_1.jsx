import { useState } from 'react'
import P4Button from '../../components/P4Button'
import P4Container from '../../components/P4Container'
import P4Wrapper from '../../components/P4Wrapper'
import Timer from './components/Timer'

export const Q3_1 = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <P4Wrapper>
      <P4Container direction="column">
        <h1>Timer</h1>
        <P4Button
          onClick={() => {
            setIsVisible((prev) => !prev)
          }}
        >
          {isVisible ? '끌까요??' : '보여줄까요?'}
        </P4Button>
        {isVisible && <Timer />}
      </P4Container>
    </P4Wrapper>
  )
}
