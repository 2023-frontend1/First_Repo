const users = [
	{
		id: 1,
		name: "김사과",
		age: 20,
		height: 190,
	},
	{
		id: 2,
		name: "이수박",
		age: 32,
		height: 185,
	},
	{
		id: 3,
		name: "오렌지",
		age: 20,
		height: 180,
	},
	{
		id: 4,
		name: "이멜론",
		age: 28,
		height: 175,
	},
];

const $info = document.querySelector("#info");
const buttonArray = document.querySelectorAll("button"); //버튼들 다 받아와서 배열로
$info.innerHTML = `
    <div>${users[0].name}</div>
    <div>${users[0].age}</div>
    <div>${users[0].height}</div>
`;

/* 
유저 목록 순서대로 보여주기
다음 버튼을 누르면 다음 유저가 보여져야합니다. 단, 마지막 유저일 시 다음은 다시 첫번째 유저가 되어야합니다.
이전 버튼을 누르면 이전 유저가 보여져야합니다. 단, 첫번째 유저일 시 이전은 마지막 유저가 되어야합니다.

또한 DOM API와 배열을 다뤄야할 때 인덱스가 필요한 시점이나 상황이 언제일지 고민해보세요 :)
*/

let Index = 0;
//인덱스 돌릴부분 미리 선언

const PreButton = buttonArray[0]; // 이전 버튼 설정
PreButton.addEventListener("click", () => {
	Index = (Index - 1 + users.length) % users.length;
	UserInfo();
});

const nexButton = buttonArray[1];
nexButton.addEventListener("click", () => {
	Index = (Index + 1) % users.length;
	UserInfo();
});

function UserInfo() {
	$info.innerHTML = `
  <div>${users[Index].name}</div>
  <div>${users[Index].age}</div>
  <div>${users[Index].height}</div>`;
}
