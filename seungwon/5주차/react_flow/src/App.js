import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "./pages/home";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import StateFun from "./pages/useState";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/page1" element={<Page1 />} />
				<Route path="/page2/:number" element={<Page2 />} />
				<Route path="/page3" element={<Page3 />} />
				<Route path="*" element={<Navigate to="/" />} />
				<Route path="/stateFun" element={<StateFun />} />
			</Routes>
		</Router>
	);
}

export default App;
