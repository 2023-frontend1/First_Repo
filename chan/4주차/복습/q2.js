const users = [
  {
    id: 1,
    name: '김성용',
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

/* 
CRUD 구현하기
배열의 고차함수
*/
/*문제1. 유저 추가하기
  내가 추가하고자 하는 유저를 추가해야합니다
  단 id는 고유 번호로 반드시 순서대로일 필요는 없지만, 어떠한 경우에도 겹쳐서 안됩니다*/

  // id값 만드는 함수
  const CreatID = () => {
    let randomNum = Math.random()*100000 >> 0
    return randomNum
  }
  // 이름,나이,키를 받아서 새로운 User생성하는 함수
  const CreatUser = (Name,Age,Height) => {
      const checkID = CreatID()
      // id값이 중복됬는지 early return
      //if(users.every(모든요소들이 checkId와 같지 않냐??? 모두다르면 true리턴 하나라도같으면 false리턴 ))
      //새로운 유저를추가할때마다 확인가능
      if(users.every((el)=>{return el.id !== checkID}) === false) {return console.log('id값이 중복됬습니다.')} 
      const NewUser = {
      id : checkID,
      name : Name,
      age : Age,
      height : Height
     }
    //새로생성된 User 원본배열에 push()
    users.push(NewUser)
}
  CreatUser('zi존성룡123',21,199)
// console.log(users)

//-------------------------------------------------------------------------------------
/*문제2. 유저 삭제하기
  내가 원하는 유저를 삭제할 수 있어야합니다.
  단, 동일한 유저의 이름이 있더라도 정확히 원하는 유저여야합니다.*/
  const removeUser = (targetUser) => {

  }
//-------------------------------------------------------------------------------------
/*문제3. 유저 수정하기
  내가 수정하고자 하는 유저의 개인정보를 수정해야합니다.*/
 //userList => 불러올 사용자 리스트
 //targetUser => 수정할유저이름
 //editList  => 수정항목
 //editText => 수정내용
const editUser = (userList,targetUser,editList,editText) => {
 // filter를 사용해서 수정하고싶은 유저의 이름이 있는 요소를 가져와서 target에 담는다 
    const target = userList.filter((el,i) => {
        return el.name === `${targetUser}`
    })
 //가저온 배열의[0]번째요소인 객체에 접근해서 수정해주면 원본 users가 수정된다.   
    target[0][`${editList}`] = editText
}
// editUser(users,'이멜론','name','박채윤')
// console.log(users)
//-------------------------------------------------------------------------------------
/*문제4. 유저 조회하기
  위의 모든 상황이 적용된 결과를을 콘솔창에 띄울 것
  단 위의 수정 내용은 모두 적용된 상태여야 한다.*/
// console.log(users)
//-------------------------------------------------------------------------------------
/*문제5. 조회한 유저를 height별 오름 차순으로 정렬하여 조회하기*/
//heigh값들을 sort로 비교하여 정렬 그인덱스를가지고 새로운 배열 생성 
const LineHeight = (userList) => {
  const HeightArr = Array(userList.length).fill(0)
  for(let i=0; i<userList.length; i++){
    HeightArr[i] = userList[i].height
  }

  const sortHeigt = HeightArr.sort((a,b)=>a-b)
  
  userList.map((el,i)=>{
    if(sortHeigt[i] === el.height) return  
  })

}

LineHeight(users)

