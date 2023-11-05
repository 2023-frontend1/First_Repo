import { useEffect } from 'react'

const Modal = () => {
  useEffect(() => {
    console.log('모달이 열렸습니다.')
    return () => {
      // 컴포넌트가 사라지면 실행.
      console.log('모달이 닫혔습니다.')
    }
  }, [])
  return <div>Modal</div>
}

export default Modal
