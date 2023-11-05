import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ $bgColor }) => $bgColor};
  border-radius: ${({ $borderSize }) => $borderSize};
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: center;
  align-items: center;
  text-align: center;
`
