/* 
유저 목록 순서대로 보여주기
다음 버튼을 누르면 다음 유저가 보여져야합니다. 단, 마지막 유저일 시 다음은 다시 첫번째 유저가 되어야합니다.
이전 버튼을 누르면 이전 유저가 보여져야합니다. 단, 첫번째 유저일 시 이전은 마지막 유저가 되어야합니다.

또한 DOM API와 배열을 다뤄야할 때 인덱스가 필요한 시점이나 상황이 언제일지 고민해보세요 :)
*/


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

//버튼을 누를때마다 인덱스를 활용해서 html을 꾸며줌



const $info = document.querySelector('#info');
const $prevBtn = document.querySelector('.prevbtn')
const $nextBtn = document.querySelector('.nextbtn')

$info.innerHTML = `
<div>${users[0].name}</div>
<div>${users[0].age}</div>
<div>${users[0].height}</div>
`;

let i = 0 // index

const nextBtnFunc=()=>{
  if(i === 3){ //if the index is on the last one
    i = 0; //move it to the beginning
  }
  else{ //if not 
    i++; //just keep adding
  }
  $info.innerHTML = `
  <div>${users[i].name}</div>
  <div>${users[i].age}</div>
  <div>${users[i].height}</div>
  `;
}

$nextBtn.addEventListener('click', nextBtnFunc);

const prevBtnFunc = () => {
  if (i === 0){ //if the index is at the beginning
    i = 3; //move it to the end
  } else{ //if not just move a step behind
    i--;
  }
  $info.innerHTML = `
  <div>${users[i].name}</div>
  <div>${users[i].age}</div>
  <div>${users[i].height}</div>
  `;
}

$prevBtn.addEventListener('click', prevBtnFunc);

