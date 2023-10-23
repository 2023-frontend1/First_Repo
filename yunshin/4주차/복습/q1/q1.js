const user = {
  name: '김성용',
  age: 20,
  height: 190,
}

// 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것

//(1)
console.log(" - user['name'] : " + user['name'])
console.log(' - user.name : ' + user.name)
console.log('--------------------------------------------------')
//(2)
console.log(' - Object.keys(user) : ' + Object.keys(user))
console.log('--------------------------------------------------')
//(3)
console.log(' - Object.values(user) : ' + Object.values(user))
console.log('--------------------------------------------------')
//(4)
console.log(' - Object.entries(user) : ' + Object.entries(user))
console.log('--------------------------------------------------')
//(5)
console.log(' - "for in" :')
for (const key in user) {
  console.log(key)
}

// 문제2. 값이 “김성용”인 속성의 key 찾기

// (1) Object.entries 으로 찾기
const findTargetsKeyByObjectEntries = (target) => {
  for (const [key, value] of Object.entries(user)) {
    if (value === target) return key
  }
}

// (2) Object.keys 로 찾기
const findTargetsKeyByObjectKeys = (target) => {
  for (const key of Object.entries(user)) {
    if (user[key] === target) return key
  }
}

// (3) for in 으로 찾기
const findTargetKeyByForIn = (target) => {
  for (const key in user) {
    if (user[key] === target) return key
  }
}
console.log('--------------------------------------------------')
console.log(
  'Object.entries 으로 찾기 : ' + findTargetsKeyByObjectEntries('김성용')
)
console.log('--------------------------------------------------')
console.log('Object.keys 로 찾기 : ' + findTargetsKeyByObjectEntries('김성용'))
console.log('--------------------------------------------------')
console.log('for in 으로 찾기 : ' + findTargetKeyByForIn('김성용'))

// 문제3. 깊은 복사를 통해 user 객체의 복사본을 만든 후 name을 본인의 이름으로 수정

userCopy = { ...user, name: '이윤신' }
console.log('--------------------------------------------------')
console.log('user 원본 : ')
console.log(user)
console.log('--------------------------------------------------')
console.log('user 복사 후 수정 : ')
console.log(userCopy)
