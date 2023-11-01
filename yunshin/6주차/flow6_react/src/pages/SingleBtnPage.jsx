import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SingleBtnPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <CustomButton
        onClick={() => {
          alert('아 왜요?')
          navigate(`/12`)
        }}
      >
        1번 버튼
      </CustomButton>
    </>
  )
}

export default SingleBtnPage

const CustomButton = styled.button`
  width: 200px;
  height: 100px;
  background-color: #0080ff;
  color: white;
  border: none;
  border-radius: 100px;
  &:hover {
    background-color: #fa8258;
  }
`
