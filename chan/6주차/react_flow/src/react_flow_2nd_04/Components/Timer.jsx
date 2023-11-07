import { useEffect, useState } from "react";
import styled from "styled-components";

const Timer = ({ ...rest }) => {

    const [count, setCount] = useState(0);  
    const [isActive,setIsActive] = useState(true)

    useEffect(() => {
        
        return()=>{
            setTimeout(() => {
                setCount((prev) => prev + 1);
              }, 1000);
        }
      }, [count]);

  return (
    <Wrapper>
      <Text>Timer</Text>
      <Text>{count}</Text>
      <div style={{ flexDirection: "row" }}>
        <TimerBtn>stop</TimerBtn>
        <TimerBtn>restart</TimerBtn>
        <TimerBtn>reset</TimerBtn>
      </div>
    </Wrapper>
  );
};
export default Timer;

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
