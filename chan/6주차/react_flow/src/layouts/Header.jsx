import styled from "styled-components";
import { flexAlignCenter, flexCenter } from "../styles/common";

const Header = () => {
  return (
   <>
     <Wrapper>
       <Text>
              React-flow-2nd  
       </Text>                    
    </Wrapper>
   </> 

  );
};

export default Header;
const Wrapper = styled.div`
margin-bottom: 30px;
${flexCenter}
`;

const Text = styled.p`
  font-size: 100px;
  ${flexCenter}
 
`;
