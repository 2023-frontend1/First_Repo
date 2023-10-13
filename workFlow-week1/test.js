// 아래의 입력창에 숫자가 입력되지 않도록 하고 길이 제한은 10자로 하시오.
// 숫자가 입력된다면 숫자가 입력되었다고 alert로 알려주시오 id="te_input" maxlength="9" 아래의 입력창에 숫자가 입력되지 않도록 하고 길이 제한은 10자로 하시오.
//숫자가 입력된다면 숫자가 입력되었다고 alert로 알려주시오
// 1. 숫자를 입력되지 않게 해야한다., max length가 9니까 자동으로 길이 제한은 10이 아닌가? >> 확인 >> 10자리로 바꾸기
// 2. 예외처리 > 숫자가 입력되었을때 >if문 > alert나오게 해서 숫자가 입력되었습니다 나오게 하기.

// 5번문제는 수업시간에 한 내용이랑 같게, lost내용 모두 지워지는 쪽으로
// 6번 추가된 내용만 , 각 각 글자를 클릭했을때 > input으로 바뀌어서 버튼을 눌러서 수정완료하는식 > 태그 input > li > 버튼 > visible >

//4번문제
const 인풋태그 = document.getElementById("te_input");
document.addEventListener("DOMContentLoaded", () => {
	인풋태그.setAttribute("maxlength", "10");
});
인풋태그.addEventListener("keypress", (event) => {
	console.log(event.key);
	if (!오류검사(event.key)) {
		인풋태그.style.borderColor = "red";
		alert("숫자입니다,문자로 입력해주세요");
	} else {
		인풋태그.style.borderColor = "";
	}
});
function 오류검사(asValue) {
	let 숫자일경우 = /[^0-9]/g;
	console.log(숫자일경우.test(asValue));
	return 숫자일경우.test(asValue);
}

//5번문제
form.addEventListener("submit", (event) => {
	event.preventDefault(); // 기본 폼 전송 동작 막기

	const listDataInput = document.getElementById("list_data");
	const inputValue = listDataInput.value.trim();

	if (inputValue !== "") {
		const newLi = document.createElement("li");
		newLi.textContent = inputValue;
		newLi.classList.add("liclass");

		const editButton = createButton("수정", () => openModal(newLi));
		const deleteButton = createButton("삭제", () => {
			if (confirm("정말 삭제하시겠습니까?")) {
				newLi.remove();
			}
		});

		newLi.appendChild(editButton);
		newLi.appendChild(deleteButton);

		// 기존 리스트에 추가
		const list = document.getElementById("list");
		list.appendChild(newLi);

		listDataInput.value = ""; // 입력 창 초기화
	}
});

form.addEventListener("reset", () => {
	// 리스트 초기화
	const list = document.getElementById("list");
	list.innerHTML = "";
});

// 유틸리티 함수: 버튼 생성
function createButton(text, onClick) {
	const button = document.createElement("button");
	button.textContent = text;
	button.addEventListener("click", onClick);
	return button;
}

// 유틸리티 함수: 모달 열기
function openModal(liElement) {
	const newText = prompt("수정할 내용을 입력하세요.", liElement.textContent);
	if (newText !== null) {
		liElement.textContent = newText;
		const editButton = createButton("수정", () => openModal(liElement));
		const deleteButton = createButton("삭제", () => {
			if (confirm("정말 삭제하시겠습니까?")) {
				liElement.remove();
			}
		});

		liElement.appendChild(editButton);
		liElement.appendChild(deleteButton);
	}
}
