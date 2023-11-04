import { useCallback, useEffect, useRef, useState } from 'react'
import P4Button from '../../../components/P4Button'
import P4Container from '../../../components/P4Container'
import P4Wrapper from '../../../components/P4Wrapper'

const Timer = () => {
  const [count, start, stop, reset] = useCount()

  useEffect(() => {
    start()
  }, [])

  return (
    <P4Container>
      <h1>Timer</h1>
      <P4Wrapper>{count}</P4Wrapper>
      <P4Button onClick={stop}>stop</P4Button>
      <P4Button onClick={start}>restart</P4Button>
      <P4Button onClick={reset}>reset</P4Button>
    </P4Container>
  )
}
export default Timer

const useCount = () => {
  const [count, setCount] = useState(0)
  let refSwitch = useRef(null)

  const start = useCallback(() => {
    if (refSwitch.current !== null) return
    refSwitch.current = setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
  }, [])

  const stop = useCallback(() => {
    if (refSwitch.current === null) return
    clearInterval(refSwitch.current)
    refSwitch.current = null
  }, [])

  const reset = useCallback(() => {
    setCount(0)
    stop()
  }, [])

  return [count, start, stop, reset]
}
