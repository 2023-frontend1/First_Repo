/* [가정]
    - 사용자 정보를 서버로부터 받아왔다고 가정
    - 사용자의 id, nickname,email 정보를 이용하여, 각 사용자마다 고유의 테마 색상을 부여하는 함수 구현
*/

const response = [
  {
    id: 32135,
    userNickname: 'peter321',
    userEmail: 'kimsoungtyoung@email.com',
  },
  {
    id: 22139,
    userNickname: '김성용',
    userEmail: 'kimsoung@email.com',
  },
  {
    id: 51191,
    userNickname: 'teemo123',
    userEmail: 'teemo@email.com',
  },
  {
    id: 13134,
    userNickname: '그냥닉네임',
    userEmail: 'park@email.com',
  },
]
// id 의 마지막 자리 숫자로 R 값 지정하는 함수
const GetColorValueRed = (id) => {
  let colorValueR = ''
  switch (id % 10) {
    case 0:
      colorValueR = 'A1'
      break
    case 1:
      colorValueR = 'B2'
      break
    case 2:
      colorValueR = 'C3'
      break
    case 3:
      colorValueR = 'D4'
      break
    case 4:
      colorValueR = 'E5'
      break
    case 5:
      colorValueR = 'F6'
      break
    case 6:
      colorValueR = 'A7'
      break
    case 7:
      colorValueR = 'B8'
      break
    case 8:
      colorValueR = 'C9'
      break
    case 9:
      colorValueR = 'D0'
      break
    default:
      colorValueR = '00'
      break
  }
  return colorValueR
}
// 닉네임을 구성하는 문자에 따라 G 값을 지정하는 함수
const GetColorValueGreen = (nickname) => {
  // 숫자가 들어가 있으면 무조건 -> "50"
  // 숫자가 없고, 영어로 구성되어 있다면 -> "05"
  // 그외 모든 케이스 -> "3A"
  const numberStyle = /\d/
  const englishStyle = /[a-zA-Z]/
  if (numberStyle.test(nickname)) return '50'
  if (englishStyle.test(nickname)) return '05'
  else return '3A'
}
// 이메일의 @ 앞 문자열의 길이에 따라 B 값을 지정한느 함수
const GetColorValueBlue = (email) => {
  const frontString = email.split('@')[0]
  if (frontString.length < 3) return 'FF'
  if (frontString.length < 6) return 'B6'
  if (frontString.length < 9) return '45'
  if (frontString.length < 12) return '27'
  else return '1C'
}
// 유저마다 다른(일부 중복이 있을수도..) 색상을 출력해주는 함수
const PrintThemeColorForEachUser = () => {
  console.log()
  for (const userInfo of response) {
    const id = userInfo.id
    const nickname = userInfo.userNickname
    const email = userInfo.userEmail

    const color =
      '#' +
      GetColorValueRed(id) +
      GetColorValueGreen(nickname) +
      GetColorValueBlue(email)
    console.log(
      '- ' + nickname + ' 님의 기본 프로필 색상은 ' + color + ' 입니다.'
    )
  }
  console.log()
}

PrintThemeColorForEachUser()
