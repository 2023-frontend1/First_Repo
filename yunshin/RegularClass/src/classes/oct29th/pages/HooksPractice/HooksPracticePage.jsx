import { CusContainer, CusDivider } from '../../../../components'
import { UseCallback, UseEffect, UseMemo } from '../../components/HooksPractice'
const HooksPracticePage = () => {
  return (
    <CusContainer>
      <h1>useEffect 실습</h1>
      <UseEffect />
      <CusDivider />

      <h1>useMemo 실습</h1>
      <UseMemo />
      <CusDivider />

      <h1>useCallback 실습</h1>
      <UseCallback />
      <CusDivider />
    </CusContainer>
  )
}

export default HooksPracticePage
