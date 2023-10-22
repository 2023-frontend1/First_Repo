// 같은 순서로 값을 가지되, 배열 형식과 Object 형식으로 데이터 저장
const arrs = [
  ['김성용', 10, 180],
  ['이성용', 12, 170],
  ['박성용', 15, 108],
]

const objs = [
  {
    name: '김성용',
    age: 10,
    height: 180,
  },
  {
    name: '이성용',
    age: 12,
    height: 170,
  },
  {
    name: '박성용',
    age: 15,
    height: 108,
  },
]

function PrintUserInfo(data) {
  if (Array.isArray(data)) {
    console.log('이름출력: ' + data[0]) // 인덱스로 접근하면 의미가 사라짐.
    console.log('나이출력: ' + data[1])
    console.log('신장출력: ' + data[2])
    console.log('------------------')
  } else {
    console.log('이름출력: ' + data.name) // 의미적으로 데이터를 접근 가능.
    console.log('나이출력: ' + data.age)
    console.log('신장출력: ' + data.height)
    console.log('------------------')
  }
}

// 같은 값을 출력한다.
PrintUserInfo(arrs[2])
PrintUserInfo(objs[2])
