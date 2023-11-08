import React from "react";
import { Link, useParams } from "react-router-dom";

function Page2() {
	const { number } = useParams();
	return (
		<div>
			<h1>2번 페이지</h1>
			<p>Number: {number}</p>
			<Link to="/">메인페이지로 이동</Link>
		</div>
	);
}

export default Page2;
