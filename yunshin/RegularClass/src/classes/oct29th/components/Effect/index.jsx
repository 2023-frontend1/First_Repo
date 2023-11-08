import { useEffect, useState } from 'react'
import { CusButton, CusContainer } from '../../../../components'
import Modal from '../Modal'

const UseEffect = () => {
  const [msg, setMsg] = useState('페이지가 열리기 전입니다.')
  const [isOpenModal, setIsOpenModal] = useState(false)

  /** 🔥 이 컴포넌트가 처음 사용자에게 보여졌을 때, console.log 를 실행한다.*/
  useEffect(
    () => {
      setMsg('페이지가 열렸습니다.')
    },
    [] // 의존성 배열이 비어있다면, 첫 렌더링 시에만 호출된다.
  )

  /** 🔥 모달이 열렸는지, 그 상태에 따라 console.log 를 실행한다.  */
  useEffect(
    () => {
      isOpenModal && console.log('모달이를 열었어요.') // 정말 보일때 만 console 에 기록하도록 분기처리
    },
    [isOpenModal] // 첫 랜더링시에는 무조건 실행, 이후엔 'isOpenModal' 값이 변할 때마다 실행
  )

  /** 🔥 호출 시, Modal 이 열리고 닫힌 상태를 변경한다. */
  const onClickButton = () => {
    setIsOpenModal((prev) => !prev)
  }

  return (
    <CusContainer direction="column">
      <h4>{msg}</h4>
      <CusButton onClick={onClickButton}>
        {isOpenModal ? '감추도록' : '보이도록'}
      </CusButton>
      {isOpenModal && <Modal />}
    </CusContainer>
  )
}
export default UseEffect
