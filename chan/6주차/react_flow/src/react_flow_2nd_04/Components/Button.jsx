import styled from 'styled-components'
const Button = ({isVisible,...rest}) => {


    return(
        <>
        <QuizButton {...rest} >{isVisible ? "숨기기" : "보이기 "}</QuizButton>
        </>
    )
}

export default Button

const QuizButton = styled.button`
  margin: 0px 20px;
  background-color: #73f173;
  width: 200px;
  height: 100px;
  border-radius: 30px;
  font-size: larger;
  font-weight: bold;
  &:hover {
    background-color: #104210;
  }
`;