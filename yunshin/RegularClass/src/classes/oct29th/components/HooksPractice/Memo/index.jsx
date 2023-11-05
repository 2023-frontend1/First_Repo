import { useMemo, useRef, useState } from 'react'
import { CusButton, CusContainer } from '../../../../../components'

const UseMemo = () => {
  const arr = useRef([1, 2, 3, 4, 5])
  const [forceRender, setForceRender] = useState(false)

  /**
   * 🔥 Rerender 가 되어도, useMemo 는 실행하지 않는다.
   * 의존성 배열 에 있는 값이 변경될 때마다, 실행이 이뤄진다.
   * 복잡한 연산의 결과값이 리렌더 될 때마다 새로 생성되는 것을 막기 위함이다.
   */

  const arrlength = useMemo(() => arr.current.length, [forceRender])
  return (
    <CusContainer style={{ gap: '10px' }}>
      useRef 에 저장된 길이: {arrlength}
      <CusButton
        onClick={() => {
          arr.current.push(arr.current.at(-1) + 1)
          console.log(arr.current)
        }}
      >
        push
      </CusButton>
      <CusButton
        onClick={() => {
          setForceRender((prev) => !prev)
        }}
      >
        forceRender
      </CusButton>
    </CusContainer>
  )
}

export default UseMemo
