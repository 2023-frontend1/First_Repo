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

/* [5] */
const 두번째_input = document.querySelector('#list_data')
const id가_list인_ul = document.querySelector('#list')
const 저장_button = document.querySelector('#send')
const 초기화_button = document.querySelector('[type=reset]')

// 1. 엔터를 누른 경우
두번째_input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const input_적힌_text = e.target.value
    새로운_리스트_요소_만들기(input_적힌_text)
    e.preventDefault() // 페이지 새로고침 막기
  }
})

// 2. 저장버튼을 누른 경우
저장_button.addEventListener('click', (e) => {
  const input_적힌_text = 두번째_input.value
  새로운_리스트_요소_만들기(input_적힌_text)
  e.preventDefault() // 페이지 새로고침 막기
})

// 3. 초기화 버튼을 누른 경우
초기화_button.addEventListener('click', (e) => {
  const input_적힌_text = 두번째_input.value
  while (id가_list인_ul.childElementCount) {
    // ul의 자식 요소 갯수가 0이 아닐동안
    const ul의_마지막자식 = id가_list인_ul.lastChild // ul 의 자식 중 마지막 요소부터
    id가_list인_ul.removeChild(ul의_마지막자식) // 하나씩 제거
  }
  e.preventDefault() // 페이지 새로고침 막기
})

const 새로운_리스트_요소_만들기 = (적을내용) => {
  const new_li = document.createElement('li')
  new_li.classList.add('liclass')

  const new_p = document.createElement('p')
  new_p.textContent = 적을내용

  const new_수정_button = document.createElement('button')
  new_수정_button.type = 'button'
  new_수정_button.innerHTML = '수정'

  const new_삭제_button = document.createElement('button')
  new_삭제_button.type = 'button'
  new_삭제_button.innerHTML = '삭제'

  new_p.appendChild(new_수정_button)
  new_p.appendChild(new_삭제_button)

  new_li.appendChild(new_p)

  id가_list인_ul.appendChild(new_li) // ui 에 추가
}

/* [6] */
