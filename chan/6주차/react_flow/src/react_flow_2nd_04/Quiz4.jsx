import Modal from "./Components/Modal";
import Button from "./Components/Button";
import styled from "styled-components";
import { useState } from "react";
import TFButton from "./Components/TFButton";

const Quiz4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ClickModalBtn = () => {
    setIsVisible((prev) => !prev);
  };

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
      <div>gdgd</div>
    </AlignDiv>
  );
};

export default Quiz4;

const AlignDiv = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
`;
