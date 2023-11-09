import React from "react";
import Modal from "./components/Modal";
import Active from "./components/Active";
import NonActive from "./components/NonActive";
import usePrev from "../../hooks/use-prev";
import { useNavigate } from "react-router-dom";

const UseState = () => {
  //   const [modalVisible, toggleModal, setModalVisible] = usePrev();
  //   const { state, onPrev } = usePrev();
  const { state: modalVisible, onPrev: toggleModal } = usePrev();
  const { state: activeVisible, onPrev: activeChange } = usePrev(true);
  const navigate = useNavigate();
  const pair2Click = () => {
    navigate("/useref");
  };
  const pair3Click = () => {
    navigate("/useeffect");
  };

  return (
    <>
      <button onClick={toggleModal}>
        {modalVisible ? "숨기기" : "보이기"}
      </button>
      <button onClick={activeChange}>
        {activeVisible ? <Active /> : <NonActive />}
      </button>
      {modalVisible && <Modal />}
      <div style={{ color: modalVisible ? "green" : "red" }}>
        {modalVisible
          ? "모달이 보여지고 있습니다"
          : "모달이 보여지지 않고 있습니다"}
      </div>
      <button onClick={pair2Click}>2번문제</button>
      <button onClick={pair3Click}>3번문제</button>
    </>
  );
};

export default UseState;
