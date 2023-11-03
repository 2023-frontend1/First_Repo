import { useRef } from 'react'
import P4Button from '../../components/P4Button'
import P4Container from '../../components/P4Container'

export const Q2_1 = () => {
  const flagsArray = useRef([])

  const AddFlag = (flag) => {
    flagsArray.current.push(flag)
    console.log(flagsArray.current)
    if (flagsArray.current.length >= 3) {
      const tCnt = flagsArray.current.filter((val) => val).length
      if (tCnt >= 3) {
        alert('테스트가 종료되었습니다.')
        flagsArray.current = []
      }
    }
  }

  return (
    <P4Container>
      <P4Button
        onClick={() => {
          AddFlag(true)
        }}
      >
        알아요
      </P4Button>
      <P4Button
        onClick={() => {
          AddFlag(false)
        }}
      >
        몰라요
      </P4Button>
    </P4Container>
  )
}
