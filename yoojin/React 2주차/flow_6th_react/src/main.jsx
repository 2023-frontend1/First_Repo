import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Button_page from "./React flow pages/react_flow_page02/Button_page";
import Number_page from "./React flow pages/react_flow_page02/Number_page";
import MainPage from "./MainPage";
import Q_and_A from "./React flow pages/react_flow_page01/Q&A";
import UseState from "./React flow pages/react_flow_page04/UseState";
import Example from "./React flow pages/react_flow_page04/Useref";
import Useref from "./React flow pages/react_flow_page04/Useref";


const router = createBrowserRouter([
  {
    path: "",
    element: <MainPage/>
  },
  {
    path: "react_flow_02_Btn_page",
    element: <Button_page/>
  },
  {
    path: ":number",
    element: <Number_page/>
  },
  {
    path: "react_flow_01_qna_page",
    element: <Q_and_A/>
  },
  // {
  //   path: "react_flow_04_page",
  //   element: <UseState />
  // },
  {
    path: "react_flow_04_page",
    element: <Useref/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);