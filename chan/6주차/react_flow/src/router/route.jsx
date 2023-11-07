import {createBrowserRouter} from 'react-router-dom'
import ButtonPage from "../react_flow_2nd_02/pages/ButtonPage";
import NumberPage from "../react_flow_2nd_02/pages/NumberPage";
import MainPage from "../MainPage";
import Layout from "../layouts/Layout";
import Quiz1 from "../react_flow_2nd_01/Quiz1";
import Quiz4 from "../react_flow_2nd_04/Quiz4";
const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout/>,
      children : [
        {
          path : '',
          element : <MainPage/>
        } 
         ,
         {
          path : 'react_2nd_flow_quiz1',
          element: <Quiz1/>
         },
         {
          path : 'react_2nd_flow_quiz2',
          element: <ButtonPage/>
         },
      
        {
          path: 'react_2nd_flow_quiz2/:number',
          element : <NumberPage/>
        },
        {
          path : 'react_2nd_flow_quiz4',
          element: <Quiz4/>
        }
      ]
    },
  ]);
export default router