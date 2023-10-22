import mockPost from './mock.json' assert { type: 'json' }
console.log(mockPost)

const $postDetail = document.querySelector('#post-detail')
const $repliesList = document.querySelector('#replies-list')

/* 
    import(참조)한 json data를
    게시글 상세와 댓글창에 나타내고 게시글 객체의 상세 내용은 console.log로 출력해두었습니다

    댓글 추가 버튼을 누르면 댓글이 추가되도록 해보세요 :)

    삭제 및 수정기능은 본인의 자유로 구현하시면 됩니다 :)
*/

// 배치를 먼저하고, 추가 버튼은 맨 아래 하나, 삭세,수정버튼은 댓글마다 존재

// 기능: 댓글 추가, 삭제, 수정

$postDetail.innerHTML = `
    <div class="post">
        <h1>제목: ${mockPost.post.title}</h1>
        <span>${mockPost.post.User.nickName}</span>
        <div>${mockPost.post.content}</div>
    <div>
`

const CreateNewComment = (nickName, content) => {
  const $new_li = document.createElement('li')
  $new_li.classList.add('comment_li')
 
  // 제목
  const $new_p = document.createElement('p');
  $new_p.textContent = content
  // 사용자 이름
  const $new_span = document.createElement('span')
  $new_span.textContent = nickName
  // 수정 버튼
  const $new_edit_button = document.createElement('button')
  $new_edit_button.classList.add('edit_btn')
  $new_edit_button.textContent = '수정'
  // 삭제 버튼
  const $new_delete_button = document.createElement('button')
  $new_delete_button.classList.add('delete_btn')
  $new_delete_button.textContent = '삭제'

  $new_li.appendChild($new_p)
  $new_li.appendChild($new_span)
  $new_li.appendChild($new_edit_button)
  $new_li.appendChild($new_delete_button)
  $repliesList.appendChild($new_li)
}

// 불러온 댓글 출력
mockPost.post.Replies.forEach((reply) => {
  CreateNewComment(reply.User.nickName, reply.content)
})

// 랜덤으로 이름 생성
const CreateUserName = () => {
  const randomNum = (Math.random() * 10000) >> 0
  return '익명 ' + randomNum
}

// 댓글 추가
const $input = document.querySelector('input')

document.querySelector('button').addEventListener('click', () => {
  CreateNewComment(CreateUserName(), $input.value)
})

$repliesList.addEventListener('click', (e) => {
  // 댓글 삭제
  if (e.target.classList.contains('delete_btn')) {
    const $deleteButtons = Array.from(document.querySelectorAll('.delete_btn'))
    const deleteIndex = $deleteButtons.indexOf(e.target) // 1 2  2 3
    Array.from(document.querySelectorAll('.comment_li'))[deleteIndex].remove()
  }

  // 댓글 수정
  if (e.target.classList.contains('edit_btn')) {
    const changeText = prompt('수정할 내용을 입력해주세요.')
    const $editButtons = Array.from(document.querySelectorAll('.edit_btn'))
    const editIndex = $editButtons.indexOf(e.target)
    const editLi = Array.from(document.querySelectorAll('.comment_li'))[
      editIndex
    ]
    editLi.firstElementChild.textContent = changeText
  }
})
