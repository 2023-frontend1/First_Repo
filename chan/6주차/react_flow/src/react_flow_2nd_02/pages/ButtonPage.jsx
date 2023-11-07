import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexCenter } from "../../styles/common";
const ButtonPage = () => {
  const navi = useNavigate();

  return (
  
    <AlignDiv>
    <CustomBtn
      onClick={() => {
        alert("비상비상");
        navi(`${120000}`);
      }}  
    >
      버튼 클릭시 페이지 이동~ 
    </CustomBtn>
    
    
    <CustomBtn
      onClick={() => {
        navi(`${120000}`);
      }}
    >
      둘버튼
    </CustomBtn>
    </AlignDiv>

  );
};

export default ButtonPage;

const CustomBtn = styled.button`
  margin : 20px 20px;
  width: 150px;
  height: 100px;
  background-color: #73f173;
  font-size: 15px;
  border-radius: 20px;
  &:hover {
    background-color:#104210;
  }
`;

const AlignDiv = styled.div`
  margin: 50px 0;
  ${flexCenter}
`
