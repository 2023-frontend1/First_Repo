import { RESERVATION_LIST } from './reservation .js'
console.log(RESERVATION_LIST)

/* 
예약 고객확인하기
고객 리스트에 없는 고객정보의 경우 일치하는 항목이 없습니다라는
console.log와 함께 텍스트가 나타납니다.
*/
let Res_num = document.getElementById('reservation-number')
let Check_List = {}
// console.log(Check_List);
// console.log(Check_List);
document.addEventListener('submit', (event) => {
  event.preventDefault()
  let User_name = document.getElementsByName('user-name')[0].value
  let User_phone = document.getElementsByName('user-phone')[0].value
  Check_List.name = User_name
  Check_List.phone = User_phone
  Res_num.innerHTML = ''
  for (let i = 0; i < RESERVATION_LIST.length; i++) {
    // console.log(User_name.value);
    // console.log(User_phone.value);
    // console.log(RESERVATION_LIST[i].name);
    if (
      User_name == RESERVATION_LIST[i].name &&
      User_phone == RESERVATION_LIST[i].phone
    ) {
      return (Res_num.innerHTML = RESERVATION_LIST[i].number)
      //   console.log(Res_num);
    }
  }
  if (Res_num.innerHTML == '') {
    alert('일치하는 내역이 없습니다')
    Res_num.innerHTML = '일치하는 내역이 없습니다'
  }
})
