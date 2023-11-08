import styled from 'styled-components'

const P4Container = ({ children, direction = 'row', ...rest }) => {
  return (
    <Container $direction={direction} {...rest}>
      {children}
    </Container>
  )
}

export default P4Container

const Container = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: space-around;
  align-items: center;
  margin: 50px;
  gap: 10px;
`
