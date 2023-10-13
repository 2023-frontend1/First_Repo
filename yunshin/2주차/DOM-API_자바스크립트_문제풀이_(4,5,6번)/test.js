/*
  !~ 나홀로 컨벤션 ~!

    - dom 접근 객체명
        => "$(dom 요소)$(속성)$(속성값)"
      
      !속성 없는데, 유일하다면..
        => '$(dom 요소)'

      !속성 없는데, 특정 가능한 부모요소가 있다면..
        => '$(dom 요소)$in$(부모 dom)$(부모속성)$(부모속성값)'

    - querySelect() 또는 querySelectAll() 로 가져오기   
        선택자 형식 
            => '(dom 요소)(속성값)'
            => '(dom 요소)[(속성) = (속성값)]'
          
          !속성 없는데, 유일하다면..
            => '(dom 요소)'

          !속성 없는데, 특정 가능한 부모요소가 있다면..
            => '(부모 dom 요소)(부모 속성값) > (dom 요소)'
          
    
    - 일반 변수명
      => 소문자로 시작
      => snake_case

    - 직접 선언한 함수명
        => 대문자로 시작
        => CamelCase
            
*/

/* [4] */
const $div$id$te_input = document.querySelector('input#te_input')

$div$id$te_input.addEventListener('change', (e) => {
  // 사용자가 input 에 적는 값으로 접근
  const text = e.target.value
  // 숫자를 선택하는 정규식
  const regex = /[0-9]/g
  if (regex.test(text)) {
    // 알려주고
    alert('숫자 입력하셨어요.')
    // 지워주기
    e.target.value = text.replace(regex, '')
  }
})

/* [5] */
const $input$id$list_data = document.querySelector('input#list_data')
const $ul$id$list = document.querySelector('ul#list')
const $button$id$send = document.querySelector('button#send')
const $button$type$reset = document.querySelector('button[type=reset]')

// 1. 엔터를 누른 경우
$input$id$list_data.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const text = e.target.value
    CreateNewUlChild(text)
    // 페이지 새로고침 막기
    e.preventDefault()
  }
})

// 2. 저장버튼을 누른 경우
$button$id$send.addEventListener('click', (e) => {
  const text = $input$id$list_data.value
  CreateNewUlChild(text)
  e.preventDefault()
})

// 3. 초기화 버튼을 누른 경우
$button$type$reset.addEventListener('click', (e) => {
  RemoveUlChildAll()
  e.preventDefault()
})

/* [6] */

// 1. 삭제
$ul$id$list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete_btn')) {
    const delete_btn_group = Array.from(
      $ul$id$list.querySelectorAll('.delete_btn')
    )
    const delete_idx = delete_btn_group.indexOf(e.target)
    RemoveElementByIdx(delete_idx)
  }
})

// 2. 수정
$ul$id$list.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit_btn')) {
    const edit_btn_group = Array.from($ul$id$list.querySelectorAll('.edit_btn'))
    const edit_idx = edit_btn_group.indexOf(e.target)

    const $p$in$li$class$liclass = Array.from(
      $ul$id$list.querySelectorAll('li.liclass > p')
    )[edit_idx]

    const $input$class$new_save_input = $p$in$li$class$liclass.querySelector(
      'input.new_save_input'
    )

    // '.new_save_input' class 를 가진 input 태그가 이미 있다면
    if ($input$class$new_save_input) {
      $input$class$new_save_input.remove() // 해당 태그 지우기
      const $button$class$new_save_btn = $p$in$li$class$liclass.querySelector(
        'button.new_save_btn'
      )
      $button$class$new_save_btn.remove() // '새로 저장' 버튼도 삭제
    }
    // 없으면 '.new_save_input' class 를 가진 input 태그 만들기
    else {
      $new_input = document.createElement('input')
      $new_input.classList.add('new_save_input')
      // '새로 저장' 버튼도 생성 (변경된 값이 게시할 목적)
      $new_save_button = document.createElement('button')
      $new_save_button.classList.add('new_save_btn')
      $new_save_button.type = 'button'
      $new_save_button.innerHTML = '새로저장'

      $p$in$li$class$liclass.appendChild($new_input)
      $p$in$li$class$liclass.appendChild($new_save_button)
    }
  }
})

// 수정한 텍스트로 변경하는 경우 == '새로 저장' 버튼을 누른경우
$ul$id$list.addEventListener('click', (e) => {
  if (e.target.classList.contains('new_save_btn')) {
    const $button$class$new_save_btn = e.target
    // 해당 버튼의 부모 요소인 li 에 접근
    const $li$class$liclass = $button$class$new_save_btn.closest('.liclass')
    // 해당 li 객체 의 idx 를 찾는다.
    const edit_idx = Array.from(
      $ul$id$list.querySelectorAll('.liclass')
    ).indexOf($li$class$liclass)
    // li > input 태그에 적힌 값을 읽는다.
    const text = $li$class$liclass.querySelector('input').value
    // li 태그의 정보를 모두 저장
    const li_group = Array.from($ul$id$list.querySelectorAll('.liclass'))
    RemoveUlChildAll() // ul 태그 내부 모든 자식요소 지우기
    // 위에서 찾은 idx (edit_idx) 전까지 li_group 있는 순서대로 ul 자식으로 추가
    for (let i = 0; i < edit_idx; i++) {
      CreateNewUlChild(
        li_group[i].querySelector('p').textContent.split('수정')[0].trim()
      )
    }
    // edit_idx 위치에서 수정한 문자를 적은 li 요소 삽입
    CreateNewUlChild(text)
    // 나머지는 li_group 있는 순서대로 ul 자식으로 추가
    for (let i = edit_idx + 1; i < li_group.length; i++) {
      CreateNewUlChild(
        li_group[i].querySelector('p').textContent.split('수정')[0].trim()
      )
    }
  }
})

/* ul 태그 내부에 모든 요소 초기화 */
const RemoveUlChildAll = () => {
  // ul의 자식 요소 갯수가 0이 아닐동안
  while ($ul$id$list.childElementCount) {
    // ul 의 자식 중 마지막 요소부터
    const lastChild = $ul$id$list.lastChild
    // 하나씩 제거
    $ul$id$list.removeChild(lastChild)
  }
}

/* list 에 전달받은 text 를 포함한 요소를 만들어 삽입 */
const CreateNewUlChild = (text) => {
  // li 추가
  const $new_li = document.createElement('li')
  // class 속성 부여
  $new_li.classList.add('liclass')

  // p 추가
  const $new_p = document.createElement('p')
  // 입력받은 text 삽입
  $new_p.textContent = text

  // 수정 목적의 버튼 생성
  const $new_edit_button = document.createElement('button')
  $new_edit_button.type = 'button'
  $new_edit_button.classList.add('edit_btn')
  $new_edit_button.innerHTML = '수정'

  // 삭제 목적의 버튼 생성
  const $new_delete_button = document.createElement('button')
  $new_delete_button.type = 'button'
  $new_delete_button.classList.add('delete_btn')
  $new_delete_button.innerHTML = '삭제'

  // p 태그 내부에 '수정 버튼' ,'삭제 버튼' 삽입
  $new_p.appendChild($new_edit_button)
  $new_p.appendChild($new_delete_button)
  // li 태그 내부에 p 태그 삽입
  $new_li.appendChild($new_p)
  // ul 태그 내부에 li 태그 삽입
  $ul$id$list.appendChild($new_li)

  /**
   * <ul>
   *  <li>
   *    <p>
   *      <button>
   *      <button>
   *    </p>
   *  </li>
   * </ul>
   */
}

/* list에서 전달받은 idx 위치의 요소 삭제 */
const RemoveElementByIdx = (idx) => {
  const li_group = Array.from($ul$id$list.querySelectorAll('.liclass'))
  li_group[idx].remove()
}
