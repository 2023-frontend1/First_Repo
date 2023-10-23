# 자바스크립트 복습문제 1

```js
const user = {
  name: '김성용',
  age: 20,
  height: 190,
}
```

## 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것

```
(1) user[”key”], user.key
(2) Object.keys()
(3) Object.values()
(4) Object.entries()
(5) for in
```

### 답변 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4주차/복습/q1/q1.js#L10) )

- (1) user[”key”], user.key

  - user 라는 객체에서 특정 key 를 가진 data 를 가져온다.

- (2) Object.keys()

  - 객체의 모든 key 을 배열 형식으로 가져온다.

- (3) Object.values()

  - 객체의 모든 value 를 배열 형식으로 가져온다.

- (4) Object.entries()

  - 객체의 모든 [key,value] 쌍을 배열 형식으로 가져온다.

- (5) for in

  - 객체의 키 값을 하나씩 순회한다. (순서 보장 x)

<div align = "center">

<img width="585" alt="스크린샷 2023-10-23 오후 10 55 15" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/bed0b3d6-5718-48de-ae30-c9c425e1e1bc">

</div>

## 문제2. 값이 “김성용”인 속성의 key 찾기

### 답변 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4주차/복습/q1/q1.js#L38) )

<div align = "center">
<img width="390" alt="스크린샷 2023-10-23 오후 10 58 00" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/6df5204e-0188-4bec-8285-9944e136057a">
</div>

## 문제3. 깊은 복사를 통해 user 객체의 복사본을 만든 후 name을 본인의 이름으로 수정

### 답변 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4주차/복습/q1/q1.js#L45) )

<div align = "center">
<img width="394" alt="스크린샷 2023-10-23 오후 11 02 20" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/2b35a69a-d773-493e-bacb-0c4e4a236d1e">
</div>
