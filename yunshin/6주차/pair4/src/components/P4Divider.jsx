import styled from 'styled-components'
import P4Wrapper from './P4Wrapper'

const P4Divider = () => {
  return (
    <P4Wrapper>
      <Styled.Divider />
    </P4Wrapper>
  )
}

export default P4Divider

const Divider = styled.div`
  width: 80%;
  height: 1px;
  background-color: black;
`

const Styled = {
  Divider,
}
