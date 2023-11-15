import { useRef, useState } from 'react'
import styled from 'styled-components'

function Comment({ nickname, content, myComment, order, setPost }) {
  const [isInputVisible, setIsInputVisible] = useState(false)
  const refEditText = useRef('')

  const OnClickDeleteBtn = () => {
    setPost((prev) => {
      const copy = { ...prev }
      const newComments = copy.Comments.filter((_, idx) => idx !== order)
      copy.Comments = newComments
      return copy
    })
  }
  const OnClickEditBtn = () => {
    setIsInputVisible((prev) => !prev)
  }
  const onClickConfirmBtn = () => {
    if (!refEditText.current.value) return // 입력창에 적은 값이 없다면 early return

    if (window.confirm('댓글을 수정하시겠습니까?')) {
      setIsInputVisible(false)
      setPost((prev) => {
        const copy = { ...prev }
        copy.Comments[order].content = refEditText.current.value
        return copy
      })
      refEditText.current.value = ''
    }
  }
  return (
    <S.CommentItem>
      <p>
        작성자: <span>{nickname}</span>
      </p>
      <p>
        댓글 내용: <span>{content}</span>
      </p>
      {myComment && (
        <p>
          <button onClick={OnClickDeleteBtn}>삭제</button>
          <button onClick={OnClickEditBtn}>
            {' '}
            {isInputVisible ? '수정 안하기' : '수정'}
          </button>
        </p>
      )}
      {isInputVisible && (
        <p>
          <input placeholder="수정할 댓글을 적어주세요." ref={refEditText} />
          <button onClick={onClickConfirmBtn}>확인</button>{' '}
        </p>
      )}
    </S.CommentItem>
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
