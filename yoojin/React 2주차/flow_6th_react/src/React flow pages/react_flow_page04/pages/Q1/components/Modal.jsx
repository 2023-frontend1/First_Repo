import React from 'react'
import styled from 'styled-components'

const Modal = ({ isVisible }) => {
 
  return (
      <div>
          { isVisible ? <Design><Text>HI :) </Text></Design> : <></>}
      </div> 
      
  )
}

export default Modal;

const Design = styled.div`
    border: 2px solid;
    border-color: black;
    padding: 10px;
    margin: 5px;
    width: 15vw;
    height: 12vh;
    border-radius: 50px;
    text-align: center;
    bottom: 12px;
`;
const Text = styled.p`
color: green;
`;
const Redtext = styled.p`
color: red;
`;