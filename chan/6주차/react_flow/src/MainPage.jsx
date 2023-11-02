import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "./styles/common";

const MainPage = () => {
  const navi = useNavigate();
  return (
    <>
      <AlignDiv >
      <QuizButton>Q1</QuizButton>
      <QuizButton
        onClick={() => {
          navi("/react_2nd_flow_quiz2");
        }}
      >
        Q2
      </QuizButton>
      <QuizButton>Q3</QuizButton>
      <QuizButton>Q4</QuizButton>
      </AlignDiv>
    </>
  );
};
export default MainPage;

const QuizButton = styled.button`
  margin: 0px 20px;
  background-color: #73f173;
  width: 200px;
  height: 100px;
  border-radius: 30px;
  font-size: larger;
  font-weight: bold;
  &:hover{
    background-color: #104210;
  }
`;
const AlignDiv = styled.div`
  margin: 50px 0;
  ${flexCenter}
`