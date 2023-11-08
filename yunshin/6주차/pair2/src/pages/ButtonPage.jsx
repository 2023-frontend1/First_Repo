import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const ButtonPage = () => {
  const navigate = useNavigate()

  const GoPathVariablePage = () => {
    alert('아 왜요?')
    navigate('/number/12')
  }
  const GoQueryParamPage = () => {
    navigate('/number?number=12')
  }
  return (
    <Style.Container>
      <Style.CustomButton onClick={GoPathVariablePage}>
        /number/:number 로 전달
      </Style.CustomButton>
      <Style.CustomButton onClick={GoQueryParamPage}>
        /number?number= 로 전달
      </Style.CustomButton>
    </Style.Container>
  )
}

export default ButtonPage

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: yellowgreen;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
`

const CustomButton = styled.button`
  width: 200px;
  height: 100px;
  background-color: #0080ff;
  color: white;
  border: none;
  border-radius: 100px;
  &:hover {
    background-color: #fa8258;
  }
`

const Style = {
  Container,
  CustomButton,
}
