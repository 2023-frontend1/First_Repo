import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const Button_page = () => {
    const navigate = useNavigate();
  return (<div>
    <StyledBtn onClick={() => { alert("Goodbye"); navigate(`/${121}`)}}>Click me</StyledBtn>
    {/* <StyledBtn onClick={()=>{navigate()}}>Click!</StyledBtn> */}
  </div>

  )
}


export default Button_page

const StyledBtn = styled.button`
width: 150px;
height: 10vh;
background-color: #afb4d6;
color: #ffff;
border-radius: 30px;
border: #afb4d6;

`
