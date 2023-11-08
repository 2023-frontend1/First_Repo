import mockPost from "./mock.json" assert { type: "json" };

const $postDetail = document.querySelector("#post-detail");
const $repliesList = document.querySelector("#replies-list");
const $input = document.querySelector("input"); //입력 인풋
const $addButton = document.querySelector("button"); //추가 버튼

// 게시글 내용 표시
$postDetail.innerHTML = `
  <h2>${mockPost.post.title}</h2>
  <p>작성자: ${mockPost.post.User.nickName} <br> ${mockPost.post.content}</p>
`;

// mock 객체 출력 함수
function displayReplies() {
	$repliesList.innerHTML = mockPost.post.Replies.map(
		(reply) => `
    <li>${reply.User.nickName}: ${reply.content}</li>
  `
	).join("");
}

displayReplies();

$addButton.addEventListener("click", () => {
	let inputTrim = $input.value.trim();
	mockPost.post.Replies.push({
		User: {
			nickName: "내이름은 김삼순",
		},
		content: inputTrim,
	});
	$input.value = "";
	console.log(inputTrim);
	console.log(mockPost);
	displayReplies();
});

/* 
    import(참조)한 json data를
    게시글 상세와 댓글창에 나타내고 게시글 객체의 상세 내용은 console.log로 출력해두었습니다

    댓글 추가 버튼을 누르면 댓글이 추가되도록 해보세요 :)

    삭제 및 수정기능은 본인의 자유로 구현하시면 됩니다 :)
*/
