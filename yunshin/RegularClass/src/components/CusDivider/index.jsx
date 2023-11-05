import CusContainer from '../CusContainer'
import * as Style from './CusDivider.styles'

const CusDivider = ({ margin = 0 }) => {
  return (
    <CusContainer width="100%" height="fit-content">
      <Style.Divider $margin={margin} />
    </CusContainer>
  )
}

export default CusDivider
