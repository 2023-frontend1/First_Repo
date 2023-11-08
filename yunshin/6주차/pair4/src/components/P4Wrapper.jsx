import styled from 'styled-components'

const P4Wrapper = ({ bgcolor = 'none', children, ...rest }) => {
  return (
    <Styled.Wrapper $bgcolor={bgcolor} {...rest}>
      {children}
    </Styled.Wrapper>
  )
}

export default P4Wrapper

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $bgcolor }) => $bgcolor};
  padding: 10px;
`
const Styled = {
  Wrapper,
}
