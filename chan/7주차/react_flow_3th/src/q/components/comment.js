import { useRef, useState } from "react"
import styled from "styled-components"

function Comment(post) {
  const [state, setState] = useState(true)
  const refNewComment = useRef("")

  const onClickDeletComnent = (idx) => {
    if (!state) return
    const newPost = { ...post }
    newPost.Comments.splice(idx, 1)
    const confirm = window.confirm("정말 삭제 하시겠습니까?")
    if (confirm === true) {
      post.setPost(newPost)
    }
  }

  const onClickFixComnent = () => {
    setState((prev) => !prev)
  }

  const onClickFixConfirmComnent = (idx) => {
    const newPost = { ...post }
    const fixComment = newPost.Comments.slice(idx, idx + 1)
    fixComment.content = refNewComment.current.value
    newPost.Comments[idx].content = fixComment.content
    const confirm = window.confirm("정말 수정 하시겠습니까?")
    if (confirm === true) {
      post.setPost(newPost)
      setState((prev) => !prev)
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
                {state ? (
                  <button onClick={onClickFixComnent}>수정</button>
                ) : (
                  <button
                    onClick={() => {
                      onClickFixConfirmComnent(idx)
                    }}
                  >
                    확인
                  </button>
                )}

                <button
                  onClick={() => {
                    onClickDeletComnent(idx)
                  }}
                >
                  삭제
                </button>
                {!state && <input ref={refNewComment} defaultValue=" "></input>}
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
