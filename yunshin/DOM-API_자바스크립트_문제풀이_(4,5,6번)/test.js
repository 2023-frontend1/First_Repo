/* [4] */
const 첫번째_input = document.querySelector('input') // 첫번째 input 태그 요소에 접근

첫번째_input.addEventListener('change', (e) => {
  const 적힌_text = e.target.value // 사용자가 input 에 적는 값으로 접근
  const regex = /[0-9]/g // 숫자를 선택하는 정규식
  if (regex.test(적힌_text)) {
    alert('숫자 입력하셨어요.')
    e.target.value = 적힌_text.replace(regex, '')
  }
})
