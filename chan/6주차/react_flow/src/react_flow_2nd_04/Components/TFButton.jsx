import styled from "styled-components";
import { useRef } from "react";

const TFButton = () => {
  const TFArray = useRef([]);

  const ClickTFBtn = (TF) => {
    TFArray.current.push(TF);
    const CheckArray = TFArray.current.filter((el) => el);
    if (CheckArray.length >= 3) {
      alert("테스트가 종료됬습니다");
      TFArray.current = [];
    }
  };


  return (
    <>
      <CheckButton onClick={()=>ClickTFBtn(true)}>알아요</CheckButton>
      <CheckButton onClick={()=>ClickTFBtn(false)}>몰라요</CheckButton>
    </>
  );
};

export default TFButton;

const CheckButton = styled.button`
  margin: 0px 5px;
  background-color: #73f173;
  width: 150px;
  height: 100px;
  border-radius: 30px;
  font-size: larger;
  font-weight: bold;
  &:hover {
    background-color: #104210;
  }
`;
