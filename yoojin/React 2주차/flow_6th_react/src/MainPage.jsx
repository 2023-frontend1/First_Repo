import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const MainPage = () => {
    const navigate = useNavigate()

    return( 
    <>
    <BtnStyle onClick={()=>{navigate("react_flow_01_qna_page")}}>1번</BtnStyle>
    <BtnStyle onClick={()=>{navigate("react_flow_02_Btn_page")}}>2번</BtnStyle>
    <BtnStyle>3번</BtnStyle>
    <BtnStyle onClick={()=>{navigate("react_flow_04_page")}}>4번</BtnStyle>
    </>
    )
}

export default MainPage

const BtnStyle = styled.button`
width: 150px;
height: 10vh;
background-color: #afb4d6;
color: #ffff;
border-radius: 30px;
border: #afb4d6;

`