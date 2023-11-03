import React, { useState } from 'react'
import Modal from './components/Modal';
import styled from 'styled-components';

const UseState = () => {
    const [isVisible, setIsVisible] = useState(false)
    const colors = ["red","green"]
    return (
      <Div>
        <button onClick={() => {setIsVisible(prev => !prev)}} >{isVisible ? "보이기" : "숨기기"}</button>
            <p style={{color: isVisible? 'green' : 'red'}}> { isVisible ? "모달이 보여지고 있습니다" : "모달이 보여지지 않고 있습니다"}</p>
        <Modal isVisible = {isVisible}/>
            
      </Div>
  )
}

export default UseState;

const Div = styled.div`
justify-content: center;
align-items: center;
padding: 10px;
margin: 5px;

`;