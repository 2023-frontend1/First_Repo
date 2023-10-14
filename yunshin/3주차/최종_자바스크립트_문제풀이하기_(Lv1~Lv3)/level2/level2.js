import { RESERVATION_LIST } from './reservation .js'

/* 예약 고객확인하기 */

const $button = document.querySelector('button')

// 버튼 클릭 시, 이벤트 처리
$button.addEventListener('click', (e) => {
  const input_name = GetUserName()
  const input_phone = GetUserPhone()

  let reservation_number = -1
  for (const { name, phone, number } of RESERVATION_LIST) {
    if (input_name === name && input_phone === phone) {
      reservation_number = number
      break
    }
  }
  // 예약 번호가 없으면
  reservation_number === -1
    ? alert('일치하는 내역이 없습니다.') // 경고창
    : PrintReservationNumber(reservation_number) // 있으면, 출력

  e.preventDefault()
})

// 이름 관련 input 의 값을 가져온다.
const GetUserName = () => {
  const $input$name$user_name = document.querySelector('input[name=user-name]')
  return $input$name$user_name.value
}
// 전화번호 관련 input 의 값을 가져온다.
const GetUserPhone = () => {
  const $input$name$user_phone = document.querySelector(
    'input[name=user-phone]'
  )
  return $input$name$user_phone.value
}
// 예약 번호를 p 태그 안에 출력
const PrintReservationNumber = (number) => {
  const $p$id$reservation_number = document.querySelector(
    'p#reservation-number'
  )
  $p$id$reservation_number.textContent = number
}
