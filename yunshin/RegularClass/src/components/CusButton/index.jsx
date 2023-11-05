import * as Style from './CusButton.styles'

const CusButton = ({ bgcolor = 'black', children, ...rest }) => {
  return (
    <Style.Button $bgcolor={bgcolor} {...rest}>
      {children}
    </Style.Button>
  )
}

export default CusButton
