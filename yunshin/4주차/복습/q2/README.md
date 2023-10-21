# CRUD 구현하기 / 배열의 고차함수

```js
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
```

## 문제1. 유저 추가하기

- 내가 추가하고자 하는 유저를 추가해야합니다
- 단 id는 고유 번호로 반드시 순서대로일 필요는 없지만, 어떠한 경우에도 겹쳐서 안됩니다

### 풀이 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4주차/복습/q2/q2.js#L33) )

- 이름,나이,키 값을 입력.
- id 는 현재 users 배열의 길이를 이용하여 유일한 값을 생성.

<br/>
<br/>

## 문제2. 유저 삭제하기

- 내가 원하는 유저를 삭제할 수 있어야합니다.
- 단, 동일한 유저의 이름이 있더라도 정확히 원하는 유저여야합니다.

### 풀이 [SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4주차/복습/q2/q2.js#L47) )

- 삭제할 유저의 id를 입력받아, `users` array 에서 해당 id 를 가진 객체의 index 를 구함.
- splice() 에 index 를 입력으로 넣어, 원본 array 에서 해당 객체 제거.

<br/>
<br/>

## 문제3. 유저 수정하기

- 내가 수정하고자 하는 유저의 개인정보를 수정해야합니다.

### 풀이 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4주차/복습/q2/q2.js##L58) )

- 수정하고 싶은 유저의 id 와 수정할 정보를 입력받는다. (수정할 정보의 객체 형식으로 입력받는다.)
- 다음은 수정할 정보의 객체 형식에 대한 예시이다.

```JS
{
    "name": "김이름"
}
```

```JS
{
    "age": 10
}
```

```JS
{
    "name": "이이름",
    "height": 120
}
```

```JS
{
    "name": "박이름",
    "age": 13,
    "height": 180
}
```

- 입력받은 id 를 사용하여, `users` array 에서 해당 id 를 가진 객체의 index 를 구한다.
- 수정할 정보를 담은 객체의 형식이 정확한 경우만, 수정에 반영한다.
- 스프레드 연산자(...)를 통해, 새로운 정보로 덮어씌운다.

<br/>
<br/>

## 문제4. 유저 조회하기

- 위의 모든 상황이 적용된 결과를을 콘솔창에 띄울 것
- 단 위의 수정 내용은 모두 적용된 상태여야 한다.

### 출력결과 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4주차/복습/q2/q2.js#L89) )

<img width="417" alt="스크린샷 2023-10-21 오후 6 50 37" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/7950a46e-c2ab-4b14-87c0-4a97a54586b2">

<br/>
<br/>

## 문제5. 조회한 유저를 height별 오름 차순으로 정렬하여 조회하기

### 풀이 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4주차/복습/q2/q2.js#L105) )

<img width="451" alt="스크린샷 2023-10-21 오후 6 55 57" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/c1659778-4f15-4abc-9516-5a4137d2ad8a">
