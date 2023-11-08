import { BANK_LIST, ACCOUNT_FORM } from "./account.js";

// console.log(BANK_LIST);
// console.log(ACCOUNT_FORM);

//1번문제
// 1. 계좌번호 양식과 은행명은 import 되어 js에 console.log에 찍어두었습니다.
// 2. 은행을 드롭 박스로 선택할 수 있게 해야하며 양식에 맞추어 계좌번호 12자리를 파싱하면 됩니다.

//        단, 앞 2자리와 맨끝 2자리를 제외하면 모두 ********로 나타나야합니다.

// 1. 어떠한 경우에도 HTML 하드 코딩이 되서는 안되며 계좌번호 12자리가 되지 않는다면 alert를 띄워야합니다.

const bank_selected = document.getElementById("bank-selector");
// console.log(Object.keys(BANK_LIST).length);
for (let i = 1; i <= Object.keys(BANK_LIST).length; i++) {
	const opt = document.createElement("option");
	opt.value = BANK_LIST[i];
	opt.text = BANK_LIST[i];
	// console.log(BANK_LIST[i]);
	// console.log(opt.value);
	bank_selected.add(opt);
} // select에 값 넣기
const form = document.getElementById("account-send-form");
form.addEventListener("submit", (event) => {
	const sel_opt = bank_selected.options[bank_selected.selectedIndex].text; //현재 내가 선택한 옵션 의 값을 가져옴
	// console.log(sel_opt);
	// console.log(bank_selected.selectedIndex);
	event.preventDefault();
	const acc_input = document.getElementById("account-input");
	const inp_value = acc_input.value.trim();
	// console.log(inp_value);
	// console.log(typeof inp_value);
	let 암호화값 = "";
	if (inp_value !== "") {
		let pas_pattern = ACCOUNT_FORM[bank_selected.selectedIndex + 1];
		// console.log(ACCOUNT_FORM[bank_selected.selectedIndex + 1]);
		for (let j = 0; j < 12; j++) {
			const 받은값 = inp_value.charAt(j);
			// console.log(받은값);
			pas_pattern = pas_pattern.replace(0, 받은값);
		}
		console.log(pas_pattern);
		// console.log(pas_pattern.charAt(pas_pattern.length - 2));
		암호화값 =
			sel_opt +
			" : " +
			pas_pattern.slice(0, 2) +
			pas_pattern.replace(/[0-9]/g, "*").slice(2, -2) +
			pas_pattern.slice(-2);
		console.log(암호화값);
		// if (pas_pattern.charAt(pas_pattern.length - 2) == "-") {
		// 	암호화값 =
		// 		sel_opt +
		// 		" : " +
		// 		pas_pattern.slice(0, 2) +
		// 		pas_pattern.replace(/[0-9]/g, "*").slice(2, -3) +
		// 		pas_pattern.slice(-3);
		// 	// console.log(암호화값);
		let num_ind = 0;
		let arr_loc = []; // -위치의 인덱스 번호를 저장하기 위해
		let change_pattern = pas_pattern.replace(/[0-9]/g, "*");
		for (let k = 0; k < pas_pattern.length; k++) {
			if (pas_pattern[k] == "-") {
				arr_loc.push(k);
			}
			console.log(isNaN(pas_pattern[k]));
			if (isNaN(pas_pattern[k])) {
				if (k > 11) {
					암호화값 =
						sel_opt +
						" : " +
						pas_pattern.slice(0, 2) +
						pas_pattern.replace(/[0-9]/g, "*").slice(2, -3) +
						pas_pattern.slice(-3);
					console.log(암호화값);
				}
			}
		}
		// console.log(num_ind);
		// console.log(k);

		// -의 갯수를 센다, 포문을 통해 그 갯수만큼 indexof로 값들을 저장한다,배열에, 그리고 값에 append로 추가해버려
	}
	// console.log(암호화값);

	// console.log(pas_pattern);
	const newLi = document.createElement("li");
	newLi.textContent = 암호화값;
	const acc_list = document.getElementById("account-list");
	acc_list.appendChild(newLi);
});
