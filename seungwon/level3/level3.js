/* 
레시피 재료 추가하기
1. 레시피는 각각 재료와 무게를 입력하면 아래 테이블에 데이터가 추가됩니다.
2. 같은 이름의 재료는 추가할 수 없습니다. > 로그 뜨면서 이미 존재하는 재료입니다.
3. 각각의 재료는 삭제버튼이 존재하며 삭제를 누르면 테이블에서 데이터가 삭제됩니다.
4. 제출 버튼을 누르면 현재 테이블에 나와있는 데이터가 key: value와 같은 형태로 재료:무게로 나타납니다.

추가 버튼 누르면 테이블에 내용 추가되게,
제출 버튼 누르면 key value처럼 나오게
삭제는 삭제되게
*/
//선언부
const form = document.getElementById("ingredient-form");
const Dataingredient = {};
const table = document.querySelector("table");
const submitButton = document.getElementById("submit_button");
const 내용추가 = document.getElementById("ingredient-list");

// 제출버튼
console.log(Dataingredient);
form.addEventListener("submit", (event) => {
	event.preventDefault();
	let ing_name = document.getElementsByName("ingredient")[0].value;
	let wei_name = document.getElementsByName("weight")[0].value;
	if (DataCheck(ing_name)) {
		alert("같은 재료가 있습니다.");
		return;
	}
	Dataingredient[ing_name] = wei_name;
	//테이블 부분
	let row = table.insertRow(-1); // 제일 마지막 row
	let 재료 = row.insertCell(0);
	let 무게 = row.insertCell(1);
	let 관리 = row.insertCell(2);
	재료.innerHTML = ing_name;
	무게.innerHTML = wei_name;
	관리.innerHTML = '<button onclick="deleteIngredient(this)">삭제</button>';
});
//삭제버튼
function deletebtn(button) {
	let row = button.parentNode.parentNode; //버튼위 부모 부모 노드
	let ing_name = row.cells[0].innerHTML; // 버튼있는 부분의 재료
	table.deleteRow(row.rowIndex);
	delete Dataingredient[ing_name]; //재료가 있는 무게 객체 삭제
}

//출력버튼
submitButton.addEventListener("click", function () {
	let 추가 = document.createElement("ul");

	for (let key in Dataingredient) {
		if (Dataingredient.hasOwnProperty(key)) {
			let value = Dataingredient[key];
			let li_app = document.createElement("li");
			li_app.textContent = `${key} : ${value}`;
			추가.appendChild(li_app);
		}
	}
	내용추가.innerHTML = ""; //초기화
	내용추가.appendChild(추가);
});
console.log(1);
// 여기는 중복값 검사
function DataCheck(ing_name) {
	// console.log(Object.keys(Dataingredient).length);
	// console.log(Object.key(Dataingredient)[1]);
	console.log(ing_name);
	for (let i = 0; i < Object.keys(Dataingredient).length; i++) {
		if (Object.keys(Dataingredient)[i] === ing_name) {
			return true;
		}
	}
}
