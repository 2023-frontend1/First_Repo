import styled from "styled-components"

const Modal = ({isVisible}) => {
    return(
        <>
            {isVisible && <ModalBtn>I'm Modal</ModalBtn> }
        </>
    )
}

export default Modal    

const ModalBtn = styled.button`
  margin: 0px 20px;
  background-color: yellow;
  width: 200px;
  height: 100px;
  border-radius: 30px;
  font-size: larger;
  font-weight: bold;
  &:hover {
    background-color: #676722;
  }
`;
    