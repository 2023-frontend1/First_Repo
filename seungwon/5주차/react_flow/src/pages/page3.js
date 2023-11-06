import React from "react";
import { Link, useLocation } from "react-router-dom";

function Page3() {
	const query = new URLSearchParams(useLocation().search).get("number");
	return (
		<div>
			<h1>3번 페이지</h1>
			<p>Query Number: {query}</p>
			<Link to="/">메인 페이지로 이동</Link>
		</div>
	);
}

export default Page3;
