import React, { useState } from "react";

function StateFun() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isActive, setIsActive] = useState(true);

	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
		setIsActive(true);
	};

	const toggleActive = () => {
		setIsActive(!isActive);
	};

	return (
		<div>
			{isModalVisible ? (
				<div>
					<Modal />
				</div>
			) : (
				<div>
					<NonActive />
				</div>
			)}
			<button onClick={toggleModal}>
				{isModalVisible ? "숨기기" : "보이기"}
			</button>
			<button onClick={toggleActive}>
				{isActive ? <Active /> : <NonActive />}
			</button>
		</div>
	);
}

function Modal() {
	return <div>Modal이 보여집니다</div>;
}

function Active() {
	return <div style={{ color: "green" }}>모달이 보여지고 있습니다</div>;
}

function NonActive() {
	return <div style={{ color: "red" }}>모달이 보여지지 않고 있습니다</div>;
}

export default StateFun;
