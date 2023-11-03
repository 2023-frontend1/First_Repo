import { useState } from 'react'
import P4Button from '../../components/P4Button.jsx'
import P4Container from '../../components/P4Container.jsx'
import P4Wrapper from '../../components/P4Wrapper.jsx'
import Modal from './components/Modal.jsx'

export const Q1_1 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const constants = {
    true: {
      color: 'green',
      text: '모달이 보이고 있습니다.',
      buttonContent: '감추기',
    },
    false: {
      color: 'red',
      text: '모달이 보이지 않고 있습니다.',
      buttonContent: '보이기',
    },
  }

  return (
    <P4Container direction={'column'}>
      <P4Button
        onClick={() => {
          setIsVisible((prev) => !prev)
        }}
      >
        {constants[isVisible].buttonContent}
      </P4Button>
      <P4Wrapper style={{ color: constants[isVisible].color }}>
        {constants[isVisible].text}
      </P4Wrapper>

      {isVisible && <Modal />}
    </P4Container>
  )
}
