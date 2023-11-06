import React from "react";
import { Link } from "react-router-dom";

function Page1() {
	return (
		<div>
			<h1>1번 페이지</h1>
			<button
				onClick={() => {
					alert("버튼 클릭됨.");
				}}
			>
				클릭
			</button>
			<br />
			<Link to="/">메인페이지로 이동</Link>
		</div>
	);
}

export default Page1;
