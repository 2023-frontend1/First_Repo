import styled from 'styled-components'
import UseState from './pages/Q1/UseState';
import UseRef from './pages/Q2/Useref'
import Timer from './pages/Q3/Timer'
const Flow_pg4_main = () => {
    return (
      <Div>
            <UseState />
            <hr/>
            <UseRef />
            <hr />
            <Timer/>
            
      </Div>
    
  )
}

export default Flow_pg4_main;

const Div = styled.div`
justify-content: center;
align-items: center;
padding: 10px;
margin: 5px;

`;
