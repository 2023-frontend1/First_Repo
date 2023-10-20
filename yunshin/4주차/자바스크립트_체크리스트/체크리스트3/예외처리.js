/* [가정]
    - 온라인 동영상 스트리밍 사이트 를 운영 중
    - 사용자 id 를 사용해서, 사용자의 정보를 출력하는 기능을 구현 중..
    - id 가 없을 경우, 오류 메시지를 콘솔로 출력하도록 설정 
*/

const data = [
  {
    id: 1,
    nickname: '닉네임1',
    email: 'testEmail11@eamil.com',
    구독정보: ['침착맨', '안될과학'],
  },
  {
    id: 2,
    nickname: '닉네임2',
    email: 'testEmail12@eamil.com',
    구독정보: ['노마드코더', '애플코딩', '조코딩'],
  },
  {
    id: 3,
    nickname: '닉네임3',
    email: 'testEmail13@eamil.com',
    구독정보: ['잼민TV', '노동TV', '꽂언니', '우마'],
  },
  { id: 4, nickname: '닉네임4', email: 'testEmail14@eamil.com', 구독정보: [] },
]

// id 를 입력받아, 해당 사용자의 정보를 출력하는 함수
const PrintUserInfo = (userId) => {
  try {
    const curUser = data.filter((userinfo) => userinfo.id === userId) // 현재 사용자 정보
    if (!curUser[0])
      throw new Error('전달된 id의 사용자 정보를 찾을 수 없습니다.') // 아이디가 잘못된 경우
    console.log()
    PrintNickname(curUser[0].nickname)
    PrintEmail(curUser[0].email)
    Print구독정보(curUser[0].구독정보)
    console.log()
  } catch (e) {
    console.log(e.message)
    console.log()
    PrintNickname('')
    PrintEmail('')
    Print구독정보([])
    console.log()
  }
}
// 사용자 닉네임을 출력하는 함수
const PrintNickname = (nickname) => {
  console.log('닉네임: ' + nickname)
}
// 사용자 이메일을 출력하는 함수
const PrintEmail = (email) => {
  console.log('이메일 정보: ' + email)
}
// 사용자가 구독한 채널을 출력하는 함수
const Print구독정보 = (구독정보) => {
  console.log('구독한 채널: ')
  구독정보.forEach((채널명) => [console.log('\t - ' + 채널명)])
}

PrintUserInfo(2)
