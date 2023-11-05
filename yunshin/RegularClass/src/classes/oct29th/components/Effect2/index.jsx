/**
 * 1
 * useEffect 의 의존성 배열에 객체나 배열를 넣을 경우, 그것의 주소값이 넣어진거다.
 * 객체와 배열의 주소값은 변하지 않는다. => useEffect 실행이 원할 되지 않을 것
 * 그러므로, 겍체의 키값이나 배열의 길이를 의존성 배열에 넣어라 => 그것의 변화가 감지되면 특정 로직이 동작하도록!
 *
 * 2
 * useEffect 는 왜 사용하는가?
 * - setState 는 비동기 함수,
 * - 클릭 이벤트 함수를 정의하고 setState()를 사용해봤자, 해당 클릭 이벤트 함수가 완전히 사라질 때까지 상태는 변하지 않는다.
 * - state 의 실제 변화를 감지하고 실행하는 별도의 함수 => 그게 useEffect
 */

import { useEffect, useState } from 'react'
import { CusButton } from '../../../../components'

const UseEffect2 = () => {
  /** 🔥 [1] */
  const testList = [1, 2, 3, 4, 5, 6]
  useEffect(
    () => {
      console.log('배열이 변했어!')
    },
    // [testList] // 이렇게 쓰면 안된다.
    [testList.length] // 이렇게 사용해라. 이유는 1 번에 적어놨다..
  )

  /** 🔥 [2] */
  const [flagState, setFlagState] = useState(true)
  const Click = () => {
    setFlagState(false)

    // flagState 가 false 일 때, 실행할 코드를 Click 안에 작성한 경우,
    if (!flagState) {
      // 이 안의 로직은 실행되지 않는다. setFlagState 가 비동기이기 때문에, Click() 가 완전히 끝날 떄까지 상태 변환 x
      console.log('flagState 가 false 일 때, console 찍혀라')
    }
  }
  useEffect(() => {
    // 이 안에 적어야, flagState 값이 변경된 이후에 함수가 실행된다.
    if (!flagState) {
      console.log('flagState 가 false 일 때, console 찍혀라')
    }
  }, [flagState])

  return (
    <>
      <CusButton onClick={Click}></CusButton>
      <></>
    </>
  )
}
export default UseEffect2
