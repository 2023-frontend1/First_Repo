import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1>메인 페이지</h1>
			<Link to="/page1">1번 페이지로 이동</Link>
			<br />
			<Link to="/page2/42">2번 페이지로 이동</Link>
			<br />
			<Link to="/page3?number=7">3번 페이지로 이동</Link>
			<br />
			<Link to="/stateFun">useState로 이동</Link>
		</div>
	);
}

export default Home;
