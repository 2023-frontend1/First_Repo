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
];


const $prevBtn = document.querySelector('button:nth-child(2)')
const $nextBtn = document.querySelector('button:nth-child(3)')
const $info = document.querySelector('#info');
let count=0// 현재위치 확인하는 변수count

$info.innerHTML = `
    <div>${users[0].name}</div>
    <div>${users[0].age}</div>
    <div>${users[0].height}</div>
`;
//nextBtn 누를때 동작하는 함수
const nextCount = (e) =>{
  count++
  if(count >= users.length ){ count = 0}
  $info.innerHTML = `
  <div>${users[count].name}</div>
  <div>${users[count].age}</div>
  <div>${users[count].height}</div>
`;
 e.preventDefault()
//  return count
}

//preVBtn누를때 동작하는 함수
const prevCount = (e) =>{
  count--
  if(count < 0 ){ count = users.length-1}
  $info.innerHTML = `
  <div>${users[count].name}</div>
  <div>${users[count].age}</div>
  <div>${users[count].height}</div>
`;
  
  e.preventDefault()
  // return count
}


$prevBtn.addEventListener('click', prevCount)  
$nextBtn.addEventListener('click',nextCount)