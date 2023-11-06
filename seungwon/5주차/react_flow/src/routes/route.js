import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
} from "react-router-dom";
import Home from "../pages/home";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";
import Page3 from "../pages/page3";

function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/page1" element={<Page1 />} />
				<Route path="/page2/:number" element={<Page2 />} />
				<Route path="/page3" element={<Page3 />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default AppRouter;
