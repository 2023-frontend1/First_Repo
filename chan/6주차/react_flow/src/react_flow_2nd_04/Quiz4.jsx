import Modal from "./Components/Modal";
import Button from "./Components/Button";
import styled from "styled-components";
import { useState } from "react";
import TFButton from "./Components/TFButton";
import Timer from "./Components/Timer";

const Quiz4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ClickModalBtn = () => {
    setIsVisible((prev) => !prev);
  };

  const [isTimerVisivle,setIsTimerVisivle] = useState(false)

  return (
    <AlignDiv>
      <div>
        <Button onClick={ClickModalBtn} isVisible={isVisible}></Button>
        <p style={{color : (isVisible ? 'green' : "red")}}>
          {isVisible
            ? "모달이 보여지고 있습니다"
            : "모달이 보여지지 않고 있습니다"}
        </p>
        <Modal isVisible={isVisible} />
      </div>
      <div>
        <TFButton />
      </div>
      <Wrapper>
      <Text>Timer</Text>
      <TimerBtn onClick={()=>{setIsTimerVisivle((prev)=>!prev)}}>타이머 보이기</TimerBtn>
      {isTimerVisivle&&<Timer/>}
      </Wrapper>
    </AlignDiv>
  );
};

export default Quiz4;

const AlignDiv = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  font-size: 30px;
`;
const TimerBtn = styled.button`
  background-color: #73f173;
  width: 100px;
  height: 50px;
  border-radius: 30px;
  font-weight: bold;
  &:hover {
    background-color: #104210;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;