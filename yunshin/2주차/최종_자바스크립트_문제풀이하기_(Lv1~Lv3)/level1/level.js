import { BANK_LIST } from './account.js'

/* 
    - dom 접근 객체 
        => "$(class 혹은 id 속성값)$(속성)$(dom 요소)"
        
    - querySelect() 또는 querySelectAll() 로 가져오기   
        선택자 형식 
            => '(dom 요소), (class 혹은 id 속성값)'
*/

// 페이지 로딩 직후, 드롭박스에 은행이름 넣기
document.addEventListener('DOMContentLoaded', () => {
  for (const bankName of Object.values(BANK_LIST)) {
    InsertOption(bankName)
  }
})
const $account_input$id$input = document.querySelector('input, #account-input')
$account_input$id$input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const writtenText = e.target.value

    if (writtenText.length < 12) {
      alert('12자리가 아닙니다.')
      e.preventDefault()
      return
    }
    const parsedAccount = ParseAccount(writtenText)
    const completedText = AppendBankName(parsedAccount)
    SummitAccount(completedText)
    e.preventDefault()
  }
})
// 전달된 계좌 번호에 은행이름 붙혀주기
const AppendBankName = (account) => {
  const $back_selector$id$select = document.querySelector(
    'select, #bank-selector'
  )
  return $back_selector$id$select.value + ' : ' + account
}
// 전달된 계좌번호 중간부분 가려주기
const ParseAccount = (account) => {
  const rawAccountArray = account.split('')
  const parsedAccountArray = rawAccountArray.map((num, idx) => {
    if (idx === 2) return '-*'
    if (2 < idx && idx < 9) return '*'
    if (idx === 9) return '*-'
    return num
  })
  return parsedAccountArray.join('')
}
// 전달된 Text를 li 태그로 감싸서 올리기
const SummitAccount = (insertText) => {
  const $account_list$id$ul = document.querySelector('ul, #account-list')
  const $li = document.createElement('li')
  $li.innerText = insertText
  $account_list$id$ul.appendChild($li)
}
// 전달받은 Text를 option 태그로 감싸서 select 항목으로 만들기
const InsertOption = (insertText) => {
  const $back_selector$id$select = document.querySelector(
    'select, #bank-selector'
  )
  const $option = document.createElement('option')
  $option.innerText = insertText
  $back_selector$id$select.appendChild($option)
}
