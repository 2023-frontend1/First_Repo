import * as Style from './CusContainer.styles'

const CusContainer = ({
  width = '100%',
  height = '100%',
  bgColor = 'none',
  direction = 'column',
  borderSize = 0,
  children,
  ...rest
}) => {
  return (
    <Style.Container
      $width={width}
      $height={height}
      $bgColor={bgColor}
      $direction={direction}
      $borderSize={borderSize}
      {...rest}
    >
      {children}
    </Style.Container>
  )
}
export default CusContainer
