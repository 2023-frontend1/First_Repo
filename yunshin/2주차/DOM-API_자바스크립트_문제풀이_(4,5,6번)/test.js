/* [4] */
const $첫번째_input = document.querySelector('input') // 첫번째 input 태그 요소에 접근

$첫번째_input.addEventListener('change', (e) => {
  const 적힌_text = e.target.value // 사용자가 input 에 적는 값으로 접근
  const regex = /[0-9]/g // 숫자를 선택하는 정규식
  if (regex.test(적힌_text)) {
    alert('숫자 입력하셨어요.')
    e.target.value = 적힌_text.replace(regex, '')
  }
})

/* [5] */
const $두번째_input = document.querySelector('#list_data')
const $id가_list인_ul = document.querySelector('#list')
const $저장_button = document.querySelector('#send')
const $초기화_button = document.querySelector('button[type=reset]')

// 1. 엔터를 누른 경우
$두번째_input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const input_적힌_text = e.target.value
    새로운_리스트_요소_만들기(input_적힌_text)
    e.preventDefault() // 페이지 새로고침 막기
  }
})

// 2. 저장버튼을 누른 경우
$저장_button.addEventListener('click', (e) => {
  const input_적힌_text = $두번째_input.value
  새로운_리스트_요소_만들기(input_적힌_text)
  e.preventDefault() // 페이지 새로고침 막기
})

// 3. 초기화 버튼을 누른 경우
$초기화_button.addEventListener('click', (e) => {
  ul_있는거_다_없애기()
  e.preventDefault() // 페이지 새로고침 막기
})

const ul_있는거_다_없애기 = () => {
  while ($id가_list인_ul.childElementCount) {
    // ul의 자식 요소 갯수가 0이 아닐동안
    const ul의_마지막자식 = $id가_list인_ul.lastChild // ul 의 자식 중 마지막 요소부터
    $id가_list인_ul.removeChild(ul의_마지막자식) // 하나씩 제거
  }
}

const 새로운_리스트_요소_만들기 = (적을내용) => {
  const $new_li = document.createElement('li')
  $new_li.classList.add('liclass')

  const $new_p = document.createElement('p')
  $new_p.textContent = 적을내용

  const $new_수정_button = document.createElement('button')
  $new_수정_button.type = 'button'
  $new_수정_button.classList.add('edit_btn')
  $new_수정_button.innerHTML = '수정'

  const $new_삭제_button = document.createElement('button')
  $new_삭제_button.type = 'button'
  $new_삭제_button.classList.add('delete_btn')
  $new_삭제_button.innerHTML = '삭제'

  $new_p.appendChild($new_수정_button)
  $new_p.appendChild($new_삭제_button)

  $new_li.appendChild($new_p)

  $id가_list인_ul.appendChild($new_li) // ui 에 추가
}

/* [6] */

// 1. 삭제
/**
 * 이벤트 위임
 *
 * 동적으로 요소를 추가한 경우, querySelector 로 직접 접근불가
 * 정적인 상위 부모 요소로부터 원하는 요소로 접근해야한다.
 */
$id가_list인_ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete_btn')) {
    const 삭제_버튼_모임 = Array.from(
      $id가_list인_ul.querySelectorAll('.delete_btn')
    )
    const 지워야할_요소의_idx = 삭제_버튼_모임.indexOf(e.target)
    idx_주면_list요소_지워드림(지워야할_요소의_idx)
  }
})

const idx_주면_list요소_지워드림 = (idx) => {
  const liclass_모임 = Array.from($id가_list인_ul.querySelectorAll('.liclass'))
  liclass_모임[idx].remove()
}

// 2. 수정
$id가_list인_ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit_btn')) {
    const 수정_버튼_모임 = Array.from(
      $id가_list인_ul.querySelectorAll('.edit_btn')
    )
    const 수정할_요소의_idx = 수정_버튼_모임.indexOf(e.target)
    console.log(수정할_요소의_idx)

    const $수정할_요소의_li_속_p = Array.from(
      $id가_list인_ul.querySelectorAll('.liclass > p')
    )[수정할_요소의_idx]

    const hasInputTag = $수정할_요소의_li_속_p.querySelector('input')

    if (hasInputTag) {
      hasInputTag.remove()
    } else {
      $new_input = document.createElement('input')
      $new_input.classList.add('new_save_input')
      $new_새로저장_button = document.createElement('button')
      $new_새로저장_button.classList.add('new_save_btn')
      $new_새로저장_button.type = 'button'
      $new_새로저장_button.innerHTML = '새로저장'

      $수정할_요소의_li_속_p.appendChild($new_input)
      $수정할_요소의_li_속_p.appendChild($new_새로저장_button)
    }
  }
})

$id가_list인_ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('new_save_btn')) {
    const 새로저장_버튼 = e.target
    const 부모_liclass = 새로저장_버튼.closest('.liclass')
    const 부모_liclass_idx = Array.from(
      $id가_list인_ul.querySelectorAll('.liclass')
    ).indexOf(부모_liclass)

    const 변경_text = 부모_liclass.querySelector('input').value

    const liclass_모임 = Array.from(
      $id가_list인_ul.querySelectorAll('.liclass')
    )

    ul_있는거_다_없애기()

    for (let i = 0; i < 부모_liclass_idx; i++) {
      새로운_리스트_요소_만들기(
        liclass_모임[i].querySelector('p').textContent.split('수정')[0].trim()
      )
    }
    새로운_리스트_요소_만들기(변경_text)
    for (let i = 부모_liclass_idx + 1; i < liclass_모임.length; i++) {
      새로운_리스트_요소_만들기(
        liclass_모임[i].querySelector('p').textContent.split('수정')[0].trim()
      )
    }
  }
})
