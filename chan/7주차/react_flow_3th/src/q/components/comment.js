import { useRef, useState } from "react"
import styled from "styled-components"

function Comment(post) {
  const [isFixable, setIsFixable] = useState(Array(post.length).fill(false))
  const refNewComment = useRef("")

  const OnAppearInput = (idx) => {
    const copy = [...isFixable]
    copy[idx] = true
    setIsFixable(copy)
  }

  const OnDisAppearInput = (idx) => {
    const copy = [...isFixable]
    copy[idx] = false
    setIsFixable(copy)
  }

  const onClickDeletComnent = (idx) => {
    if (isFixable[idx]) return
    const newPost = { ...post }
    newPost.Comments.splice(idx, 1)
    const confirm = window.confirm("정말 삭제 하시겠습니까?")
    if (confirm === true) {
      post.setPost(newPost)
    }
  }

  const onClickFixConfirmComnent = (idx) => {
    const newPost = { ...post }
    const fixComment = newPost.Comments.slice(idx, idx + 1)
    fixComment.content = refNewComment.current.value
    newPost.Comments[idx].content = fixComment.content
    const confirm = window.confirm("정말 수정 하시겠습니까?")
    if (confirm === true) {
      OnDisAppearInput(idx)
      post.setPost(newPost)
    }
  }

  return (
    <>
      {post.Comments.map((comment, idx) => {
        return (
          <S.CommentItem key={idx}>
            <p>
              작성자: <span>{comment.User.nickname}</span>
            </p>
            <p>
              댓글 내용: <span>{comment.content}</span>
            </p>
            {comment.myComment && (
              <>
                <button onClick={() => OnAppearInput(idx)}>수정</button>
                <button
                  onClick={() => {
                    onClickDeletComnent(idx)
                  }}
                >
                  삭제
                </button>
                {isFixable[idx] && (
                  <>
                    <button onClick={() => onClickFixConfirmComnent(idx)}>
                      확인
                    </button>
                    <input ref={refNewComment} defaultValue=" "></input>
                  </>
                )}
              </>
            )}
          </S.CommentItem>
        )
      })}
    </>
  )
}
export default Comment

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`

const S = {
  CommentItem,
}
