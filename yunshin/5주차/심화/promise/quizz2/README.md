# 문제 2

## 1. 개요

당신은 3가지 비동기 요청에 대하여 이 3가지 요청이 모두 실행되고 나서
console.log로 (정상적으로 실행되었습니다)라는 콘솔로그를 보여주려고 한다.

</br>

각각의 비동기 요청은

```js
console.log('비동기 요청 1')
console.log('비동기 요청 2')
console.log('비동기 요청 3')
```

를 결과값으로 출력한다

## 2. 결과

> [콘솔창] > </br>
> ... 비동기 요청
> </br></br>

### 1. case: success(fullfield) </br>

> "비동기 요청 1" </br>
> "비동기 요청 2" </br>
> "비동기 요청 3" </br>
> "정상적으로 실행되었습니다" </br>

### 2. case errer(rejected) </br>

> "결과값을 가지고 오는데 실패하였습니다"

### 3. 조건

- 기초. 반복문 (for)을 사용하지말 것, resolve, reject의 반환 값으로 전달하는 데이터의 제한은 없다.

  - 기초. 모든 요청 중 단 하나의 요청이라도 실패하면 `"결과값을 가지고 오는데 실패하였습니다."`를 출력 할 것

- 심화. 모든 요청 중 일부가 실패했다면 나머지 비동기 요청에 대해서는 정상적으로 console.log를 실행할 것

  - 만약 실패하였다면 어느 요청이 실패하였는지 console.log로 출력할 것 `ex) "비동기 요청 2 호출 실패"`
  - 모든 요청에 대하여 일부요청이 실패하고 나머지는 정상적으로 작동되었기 때문에
    결과 값으로는 반드시 `정상적으로 실행되었습니다.` 가 출력되어야한다
  - 그러나, 3가지 요청이 모두 실패했을 때는 `결과값을 가지고 오는데 실패하였습니다.` 가 출력되어야한다.

### 풀이 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/5주차/심화/promise/quizz2/quizz2.js) )

- 기초

  - 전부 성공

    <img width="339" alt="quizz2_기초_전부성공" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/0f0a9149-3980-42e7-847a-7c3bed7f180d">

  - 전부 실패

    <img width="357" alt="quizz2_기초_전부실패" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/41864990-df49-4021-b54f-7e8c273aa1cd">

- 심화

  - 전부 성공

    <img width="366" alt="quizz2_심화_전부성공" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/04231a54-221e-4ee1-a6e0-1d3b0f98b4fb">

  - 일부 성공

    <img width="337" alt="quizz2_심화_일부성공" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/71272cf4-e644-4bf6-8028-70a160fce896">

  - 전부 실패

    <img width="348" alt="quizz2_심화_전부실패" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/ba3c9a60-d034-4295-bf14-8ce90192b52f">
