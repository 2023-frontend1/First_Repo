const users = [
  {
    id: 1,
    name: '김사과',
    age: 20,
    height: 190,
  },
  {
    id: 2,
    name: '이수박',
    age: 32,
    height: 185,
  },
  {
    id: 3,
    name: '오렌지',
    age: 20,
    height: 180,
  },
  {
    id: 4,
    name: '이멜론',
    age: 28,
    height: 175,
  },
]

let trackId = 1
const $info = document.querySelector('#info')

$info.innerHTML = `
    <div>${users[0].name}</div>
    <div>${users[0].age}</div>
    <div>${users[0].height}</div>
`
// 버튼에 class 부여
const $buttons = document.querySelectorAll('button')
const $prevBtn = $buttons[0]
const $nextBtn = $buttons[1]

// prev 버튼 클릭 시, 이벤트 부여
$prevBtn.addEventListener('click', function () {
  trackId -= 1
  if (trackId == 0) trackId = users.length
  PrintInfo(trackId)
})

// next 버튼 클릭 시, 이벤트 부여
$nextBtn.addEventListener('click', function () {
  trackId += 1
  if (trackId > users.length) trackId = 1
  PrintInfo(trackId)
})

// 아이디를 전달받으면 해당 아이디를 가진 객체를 info 에 출력한다.
const PrintInfo = (findId) => {
  const curUser = users.filter((item) => item.id === findId)
  $info.innerHTML = `
    <div>${curUser[0].name}</div>
    <div>${curUser[0].age}</div>
    <div>${curUser[0].height}</div>
`
}

/* 
유저 목록 순서대로 보여주기
다음 버튼을 누르면 다음 유저가 보여져야합니다. 단, 마지막 유저일 시 다음은 다시 첫번째 유저가 되어야합니다.
이전 버튼을 누르면 이전 유저가 보여져야합니다. 단, 첫번째 유저일 시 이전은 마지막 유저가 되어야 합니다.

또한 DOM API와 배열을 다뤄야할 때 인덱스가 필요한 시점이나 상황이 언제일지 고민해보세요 :)
*/
