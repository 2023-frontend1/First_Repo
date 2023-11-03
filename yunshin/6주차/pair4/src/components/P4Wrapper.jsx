import styled from 'styled-components'

const P4Wrapper = ({ bgcolor, children }) => {
  return <Styled.Wrapper $bgcolor={bgcolor}>{children}</Styled.Wrapper>
}

export default P4Wrapper

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $bgcolor }) => $bgcolor};
`
const Styled = {
  Wrapper,
}
