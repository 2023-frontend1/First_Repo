import { RESERVATION_LIST } from './reservation .js'
console.log(RESERVATION_LIST)

/* 예약 고객확인하기 */

const $input$name$user_name = document.querySelector('input[name=user-name]')
const $input$name$user_phone = document.querySelector('input[name=user-phone]')
const $button = document.querySelector('button')

const input_cached_data = {
  name: '',
  phone: '',
}

// 이름 입력 관련하여, 이벤트 처리
$input$name$user_name.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // input 값을 input_cached_data 객체의 name 에 저장
    input_cached_data.name = e.target.value
    e.preventDefault()
  }
})
// 전화번호 입력 관련하여, 이벤트 처리
$input$name$user_phone.addEventListener('keypress', (e) => {
  // 이름이 입력되어 있지 않다면, alert 후 early return
  if (input_cached_data.name.length === 0) {
    alert("이름 먼저 입력 후, ⛔️ 'Enter' 를 꼭 입력해주세요!")
    e.preventDefault()
    return
  }
  if (e.key === 'Enter') {
    input_cached_data.phone = e.target.value
    e.preventDefault()
  }
})
// 버튼 클릭 시, 이벤트 처리
$button.addEventListener('click', (e) => {
  // 전화번호가 입력되어 있지 않다면, alert 후 early return
  if (input_cached_data.phone.length === 0) {
    alert("전화번호 먼저 입력 후, ⛔️ 'Enter' 를 꼭 입력해주세요!")
    e.preventDefault()
    return
  }
  // RESERVATION_LIST 를 순회하며, name 과 phone 이 같으면, 예약번호 출력
  for (const { name, phone, number } of RESERVATION_LIST) {
    if (input_cached_data.name === name && input_cached_data.phone === phone) {
      PrintReservationNumber(number)
    }
  }
  e.preventDefault()
})

// 예약 번호를 p 태그 안에 출력
const PrintReservationNumber = (number) => {
  const $p$id$reservation_number = document.querySelector(
    'p#reservation-number'
  )
  $p$id$reservation_number.textContent = number
}
