import styled from 'styled-components'

const P4Button = ({ bgcolor = 'black', children, ...rest }) => {
  return (
    <Styled.Button $bgcolor={bgcolor} {...rest}>
      {children}
    </Styled.Button>
  )
}

export default P4Button

const Button = styled.button`
  width: auto;
  height: auto;
  padding: 10px 10px;
  border: none;
  border-radius: 20px;
  color: white;
  font-size: large;

  background-color: ${({ $bgcolor }) => $bgcolor};
  transition: background-color, color 250ms;
  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0 0 3px black;
  }
`

const Styled = {
  Button,
}
