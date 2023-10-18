const user = {
  name: '김성용',
  age: 20,
  height: 190,
};

// 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것


// // (1) user[”key”], user.key
//   console.log(user['name']) 
//   console.log(user.age)
// // (2) Object.keys()
//  console.log(Object.keys(user)) // user의 키들을 배열형태로 반환해줌
// // (3) Object.values()
//  console.log(Object.values(user)) // user의 값들을 배열형태로 반환해줌
// // (4) Object.entries()
//  console.log(Object.entries(user)) // user의 키와값의 배열쌍들을 배열형태로 반환해줌
// // (5) for in                     // 객채인 user를 순회하면서 키값들을 console로찍어줌
// for(let el in user){
//   console.log(el)
// }

// 문제2. 값이 “김성용”인 속성의 key 찾기
// 값들을 가져와서 배열화
user.find((key) => {key})
// 문제3. 깊은 복사를 통해 user 객체의 복사본을 만든 후 name을 본인의 이름으로 수정
