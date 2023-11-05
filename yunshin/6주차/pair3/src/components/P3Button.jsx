import { css, styled } from 'styled-components'

const P3Button = ({
  bgColor = 'none',
  size = 'default',
  round = 'default',
  children,
  ...rest
}) => {
  return (
    <Style.Button $bgColor={bgColor} $size={size} $round={round} {...rest}>
      {children}
    </Style.Button>
  )
}

export default P3Button

const Button = styled.button`
  ${({ $size }) => sizeCSS[$size]}
  ${({ $round }) => roundCSS[$round]}
  
  color: white;
  background-color: ${({ $bgColor }) => $bgColor};
  cursor: pointer;
`
const Style = {
  Button,
}
const roundCSS = {
  default: css`
    border-radius: 15px;
  `,
  slightly: css`
    border-radius: 5px;
  `,
  very: css`
    border-radius: 1000px;
  `,
}
const sizeCSS = {
  default: css``,
  fit: css``,
  full: css``,
}
