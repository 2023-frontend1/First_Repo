import { useCallback, useState } from 'react'
import { CusButton, CusContainer } from '../../../../../components'
function UseCallback() {
  const [count, setCount] = useState(0)
  const addNumber = useCallback(() => {
    /**
     *
     *
     *
     *
     * 😈아주 복잡하고 거대한 로직👻
     * ex) axios, fetch
     *     반복, 순회
     *     매우 거대한 로직
     *     UI 컴포넌트를 return 하는 경우 (아래 예시있음.)
     *
     */

    // 👇 이럴 경우, 최초 랜더링 당시의 count 값 (=0) 에 +1 하는 연산을 캐싱한다. => 결과는 항상 1
    // setCount(count + 1)

    // 👇 이럴 경우, setCount 호출 시에 useState 내부에 저장된 count 값에 +1 을 한다. => 계속 증가
    setCount((prev) => prev + 1)
  }, [])

  /**
   * 🔥 순수 UI 를 return 하는 경우 useCallback 을 사용하는 것이 좋다.
   * 파일이 많아지면 DX 를 해친다. => 컴포넌트를 많이 나눈다고 좋은게 아니다.
   * 조건부 랜
   */
  const Props전달없는Component = useCallback(() => {
    return (
      <>
        <CusContainer
          borderSize="10px"
          bgColor="skyblue"
          width="fit-content"
          style={{ padding: '1%' }}
        >
          <h3>(useCallback 으로 return 된 컴포넌트) </h3>
          <h4>지금 count 값: {count}</h4>
        </CusContainer>
      </>
    )
  }, [count])

  return (
    <CusContainer direction="column">
      {count}
      <CusButton onClick={addNumber}>+</CusButton>

      <Props전달없는Component />
    </CusContainer>
  )
}
export default UseCallback
