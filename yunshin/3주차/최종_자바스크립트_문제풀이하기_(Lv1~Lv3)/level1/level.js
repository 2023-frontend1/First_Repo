import { ACCOUNT_FORM, BANK_LIST } from './account.js'

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
    const bank_name = GetBankName()
    const parsed_account = ParseAccount(text, bank_name)
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
  const bank_name = GetBankName()
  const parsed_account = ParseAccount(text, bank_name)
  const completed_text = AppendBankName(parsed_account)
  SummitAccount(completed_text)
  e.preventDefault()
})

const GetBankName = () => {
  const $select$id$back_selector = document.querySelector(
    'select#bank-selector'
  )
  return $select$id$back_selector.value
}

// 전달된 계좌 번호에 은행이름 붙혀주기
const AppendBankName = (account) => {
  const $select$id$back_selector = document.querySelector(
    'select#bank-selector'
  )
  return $select$id$back_selector.value + ' : ' + account
}
// 전달된 계좌번호 중간부분 가려주기
const ParseAccount = (account, bank_name) => {
  const raw_account_array = account.split('')
  // 성용은행

  let key = 0
  for (const 변수명 of Object.entries(BANK_LIST)) {
    if (변수명[1] == bank_name) {
      key = 변수명[0]
      break
    }
  }

  for (let idx = 0; idx < raw_account_array.length; idx++) {
    if (2 <= idx && idx < 10) {
      raw_account_array[idx] = '*'
    }
  }
  // 2,9,1
  const pattern = ACCOUNT_FORM[key] //   2  9  1
  const numbers = pattern.split('-') // ['00','000000000','0']
  // numbers.unshift(0)
  const result = []
  for (let idx = 0; idx < numbers.length; idx++) {
    const cur = numbers[idx].length // 2
    result.push(raw_account_array.slice(0, cur))
    raw_account_array.splice(0, cur)
  }
  return result.map((x) => x.join('')).join('-')
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
