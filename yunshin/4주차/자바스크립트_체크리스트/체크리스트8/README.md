# 8. 객체의 키와 값을 따로 빼내어 쓸 수 있는가, 객체는 어느 순간에 사용하는게 올바른가?

## (1) 객체와 배열은 각각 어느 순간에 사용해야할까요 key와 index를 중심으로 정의해보세요 :D

### 답변 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4주차/자바스크립트_체크리스트/체크리스트8/배열과_객체_사용의_의미론적_해석.js) )

- 특정 데이터에 접근할 떄, 의미를 부여하는 지 여부?? 에 따라 사용이 달라지는 것 같다.?
- 배열로 저장할 경우, 협업하는 사람과 각 요소의 위치에 따라 의미를 따로 명시를 해야, 인덱스를 통해 필요한 데이터에 접근할 수 있다.
- 객체 형식으로 값을 저장할 경우, key 이름에 의미를 부여할 수 있어 직관적으로 접근할 수 있을 것 같다.
- 데이터의 의미를 따지지 않고 단순 순회를 하거나 정렬 등의 기능이 필요할 경우 배열을 사용하는 것이 유리할 것 같다.

</br>
</br>

## (2) 아래의 object 관련 메서드들의 반환 값의 형태가 무엇인지 정의하고 모두 예시를 구현해보세요

- 2-1) Object().values()

### 답변

- 변환값의 형태 : [value1, value2, value3 ...]
- 사용예시:

```js
// 회원가입 시, 입력 필수 사항을 명시해주는 기능 구현
const checkForm = {
  이름: {
    isEssential: true, // 필수항목
    inputValue: '김성룡',
  },
  이메일: {
    isEssential: true, // 필수항목
    inputValue: 'email@email.com',
  },
  거주지: {
    isEssential: false, // 선택항목
    inputValue: '우리 집',
  },
}

// 회원가입 시, 입력 값을 제출하기 전 사용자에게 확인하는 함수
const CheckBeforeSummit = () => {
  const values = Object.values(checkForm)
  for (const { inputValue } of values) {
    console.log(inputValue)
  }
  console.log('-------------------------')
  console.log('위와 같이 입력하셨습니다. 제출하시겠습니까?')
}

CheckBeforeSummit()
```

</br>
</br>

---

- 2-2) Obejct().keys()

### 답변

- 변환값의 형태 : [key1, key2, key3 ...]
- 사용예시:

```js
const checkForm = {
  이름: {
    isEssential: true, // 필수항목
    inputValue: '',
  },
  이메일: {
    isEssential: true, // 필수항목
    inputValue: '',
  },
  거주지: {
    isEssential: false, // 선택항목
    inputValue: '',
  },
}
// 회원가입 시, 필수 입력 여부를 확인시켜주는 함수
const NoticeItem = () => {
  for (const key of Object.keys(checkForm)) {
    if (checkForm[key]) console.log(key + ' 은 필수로 입력해야합니다.')
    else console.log(key + ' 은 선택 항목입니다.')
  }
}
NoticeItem()
```

</br>
</br>

---

- 2-3) Obejct().entries()

### 답변

- 변환값의 형태 : [[key1,value1], [key2,value2], [key1,value1], ...]

```js
const checkForm = {
  이름: {
    isEssential: true, // 필수항목
    inputValue: '김성룡',
  },
  이메일: {
    isEssential: true, // 필수항목
    inputValue: ' ',
  },
  거주지: {
    isEssential: false, // 선택항목
    inputValue: '우리 집',
  },
}

const Summit = () => {
  const wrongKeys = []
  for (const [key, value] of Object.entries(checkForm)) {
    if (value.isEssential && !value.inputValue.trim()) {
      wrongKeys.push(key)
    }
  }

  if (wrongKeys.length) {
    console.log(wrongKeys)
    console.log('위 항목은 필수 항목입니다.')
  } else {
    console.log('정상 제출되었습니다.')
  }
}
Summit()
```
