import { BANK_LIST } from './account.js'

// 페이지 로딩 직후, 드롭박스에 은행이름 넣기
document.addEventListener('DOMContentLoaded', () => {
  for (const bank_name of Object.values(BANK_LIST)) {
    InsertOption(bank_name)
  }
})

const $input$id$account_input = document.querySelector('input#account-input')
const $button = document.querySelector('button')

// Enter 눌렀을 때, input 의 값이 12자리 이상이면 게시
$input$id$account_input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const text = e.target.value

    if (text.length < 12) {
      alert('12자리가 아닙니다.')
      e.preventDefault()
      return
    }
    const parsed_account = ParseAccount(text)
    const completed_text = AppendBankName(parsed_account)
    SummitAccount(completed_text)
    e.preventDefault()
  }
})
// 버튼 눌렀을 때, input 의 값이 12자리 이상이면 게시
$button.addEventListener('click', (e) => {
  const text = $input$id$account_input.value
  if (text.length < 12) {
    alert('12자리가 아닙니다.')
    e.preventDefault()
    return
  }
  const parsed_account = ParseAccount(text)
  const completed_text = AppendBankName(parsed_account)
  SummitAccount(completed_text)
  e.preventDefault()
})

// 전달된 계좌 번호에 은행이름 붙혀주기
const AppendBankName = (account) => {
  const $select$id$back_selector = document.querySelector(
    'select#bank-selector'
  )
  return $select$id$back_selector.value + ' : ' + account
}
// 전달된 계좌번호 중간부분 가려주기
const ParseAccount = (account) => {
  const raw_account_array = account.split('')
  const parsed_account_array = raw_account_array.map((num, idx) => {
    if (idx === 2) return '-*'
    if (2 < idx && idx < 9) return '*'
    if (idx === 9) return '*-'
    return num
  })
  return parsed_account_array.join('')
}
// 전달된 Text를 li 태그로 감싸서 올리기
const SummitAccount = (insert_text) => {
  const $ul$id$account_list = document.querySelector('ul#account-list')
  const $li = document.createElement('li')
  $li.innerText = insert_text
  $ul$id$account_list.appendChild($li)
}
// 전달받은 Text를 option 태그로 감싸서 select 항목으로 만들기
const InsertOption = (insert_text) => {
  const $select$id$back_selector = document.querySelector(
    'select#bank-selector'
  )
  const $option = document.createElement('option')
  $option.innerText = insert_text
  $select$id$back_selector.appendChild($option)
}
