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
]

/* 
문제1. 유저 추가하기
  내가 추가하고자 하는 유저를 추가해야합니다
  단 id는 고유 번호로 반드시 순서대로일 필요는 없지만, 어떠한 경우에도 겹쳐서 안됩니다
*/
const AddUser = (userName, userAge, userHeight) => {
  users.push({
    id: users.length + 1,
    name: userName,
    age: userAge,
    height: userHeight,
  })
}

/* 
문제2. 유저 삭제하기
  내가 원하는 유저를 삭제할 수 있어야합니다.
  단, 동일한 유저의 이름이 있더라도 정확히 원하는 유저여야합니다.
*/
const DeleteUserById = (userId) => {
  const userOne = users.filter((user) => user.id === userId)[0]
  if (!userOne) return
  const deleteIdx = users.indexOf(userOne)
  users.splice(deleteIdx, 1)
}

/*
문제3. 유저 수정하기
  내가 수정하고자 하는 유저의 개인정보를 수정해야합니다.
*/
const UpdateUserById = (userId, updateObject) => {
  const userOne = users.filter((user) => user.id === userId)[0]
  if (!userOne) return
  const updateIdx = users.indexOf(userOne)

  PreprocessingDataForm(updateObject, userOne)

  users[updateIdx] = {
    ...users[updateIdx],
    ...updateObject,
  }
}

const PreprocessingDataForm = (targetObject, targetUser) => {
  for (const key of Object.keys(targetObject)) {
    // user 객체에 없는 key 가 있다면, 해당 key-value 는 삭제
    if (!Object.keys(targetUser).includes(key)) {
      delete targetObject[key]
    }
    // value 가 없는 key 가 있다면, 해당 key-value 는 삭제
    if (!targetObject[key]) {
      delete targetObject[key]
    }
  }
}

/*
문제4. 유저 조회하기
  위의 모든 상황이 적용된 결과를을 콘솔창에 띄울 것
  단 위의 수정 내용은 모두 적용된 상태여야 한다.
*/
console.log(' - 변경 전')
console.log(users)
console.log()

AddUser('Jeff', 10, 120) // user 추가
AddUser('Alice', 15, 125) //  user 추가
DeleteUserById(3) //  '오렌지' 씨 삭제
UpdateUserById(5, { name: '남궁제프' }) // 한국식으로 이름을 개명한 (구)'Jeff' 군
UpdateUserById(1, { height: 176, age: 45 }) // 나이와 키를 속였었던 과거를 바로잡는 김성룡 씨

console.log(' - 변경 후')
console.log(users)

/*
문제5. 조회한 유저를 height별 오름 차순으로 정렬하여 조회하기
*/
const PrintSortedByHeight = () => {
  const sortedUsers = users.sort((a, b) => b.height - a.height)
  sortedUsers.forEach((item) => console.log(item))
}

PrintSortedByHeight()
