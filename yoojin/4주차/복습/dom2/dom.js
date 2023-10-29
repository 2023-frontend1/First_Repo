/* 
    import(참조)한 json data를
    게시글 상세와 댓글창에 나타내고 게시글 객체의 상세 내용은 console.log로 출력해두었습니다

    댓글 추가 버튼을 누르면 댓글이 추가되도록 해보세요 :)

    삭제 및 수정기능은 본인의 자유로 구현하시면 됩니다 :)
*/

import mockPost from './mock.json' assert { type: 'json' };
// console.log(mockPost);

const $postDetail = document.querySelector('#post-detail'); //div
const $repliesList = document.querySelector('#replies-list'); //ul

//게시글 내용 표시
$postDetail.innerHTML = `
<div> 
    <h2> ${mockPost.post.title} </h2>
    <p> ${mockPost.post.content} </p>
    <h3> ${mockPost.post.User.nickName} </h3>
</div>
`


// Needed buttons: edit / delete
// edit : when clicked should open a prompt and add new input to comment section
// delete : when clicked should delete 

// 추가 button click => should pass the input value to a new li 

// create elements : 2 buttons for edit and delete 
// an element for the nickname / li for adding the comments into a list 




const $addComment = document.querySelector('input') //input box/comment box

const $commentBtn = document.getElementById('commentBtn')

let $replyNames = Object.values(mockPost.post.Replies) //HOF
console.log($replyNames)

$commentBtn.addEventListener('click', ()=>{
    let comments = []
   
    if ($addComment.value != ''){ //if input value is not empty
        comments.push({text : $addComment.value}) //push input's value to comments array
    }
    newComment($addComment.value);
    $addComment.value = '';
}) //when 추가 button is clicked run newComment function


const newComment = (c) => {
    const $li = document.createElement('li') //li element for comments
    $li.className = 'new_comment'
    
    const $p = document.createElement('p')
    $p.className = 'comment_content'
    $p.textContent = c
    
    const $edit = document.createElement('button')
    $edit.className = 'editBtn' //adding class name to button 
    $edit.innerText = 'edit'
    
    const $delete = document.createElement('button')
    $delete.className = 'deleteBtn'
    $delete.innerText = 'delete'
    
    const $span = document.createElement('span') // span element for nickname
    $span.className = 'nickname'
  
    //"User": {nickName: name} --> bring all of these 

    $li.appendChild($p)
    $li.appendChild($span) // adding comment nickname to li
    $li.appendChild($edit) // adding edit button to li
    $li.appendChild($delete) //adding delete button to li
    
    $repliesList.appendChild($li) // adding li to ul
    // console.log($repliesList)
    
    
    $edit.addEventListener('click', (e) => {
        
        let n = prompt('input edit here')
        $p.textContent = n;
        
        
    })
    
    $delete.addEventListener('click', (e) => {
        
        $repliesList.removeChild($li) //delete a li from ul 
        
        e.preventDefault();
    })
}
