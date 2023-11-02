import styled from "styled-components";
import { flexAlignCenter,flexCenter } from "../styles/common";
const Footer = () => {
    return(
        <>
        <Wrapper>
          <Text>
                 Made-by-chan  
          </Text>                    
       </Wrapper>
      </> 
    )

}

export default Footer

const Wrapper = styled.div`
margin-bottom: 30px;
${flexCenter}
`;

const Text = styled.p`
  font-size: 80px;
  ${flexCenter}
 
`;

