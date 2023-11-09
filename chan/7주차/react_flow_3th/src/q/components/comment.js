import styled from "styled-components"

function Comment(post) {
  const onClickDeletComnent = (idx) => {
    const newPost = { ...post }
    newPost.Comments.splice(idx, 1)
    post.setPost(newPost)
  }

  const onClickRetouchComnent = () => {}

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
                <button
                  onClick={() => {
                    onClickRetouchComnent(idx)
                  }}
                >
                  수정
                </button>{" "}
                <button
                  onClick={() => {
                    onClickDeletComnent(idx)
                  }}
                >
                  삭제
                </button>
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
