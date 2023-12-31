# 1. 전역변수와 지역변수의 차이를 명확히 알고 있는가

## (1) 아래의 실행문 중 지역변수와 전역변수가 무엇인지 구분하고, 지역변수와 전역변수를 정의하세요.

> - 단, 여기서의 정의는 단순히 개념이 아닌 내가 이해하고 있는 언어로 바꾸어 정의할 것
> - 또한, 이렇게 나만의 바꾼 언어를 다른 사람도 이해가 가능한지 확인할 것
> - 이는 앞으로의 모든 정의 문제에 똑같이 적용됩니다.

```javascript
let engine = false

function on() {
  let engine = true
  return engine
}

console.log(on())
console.log(engine)
```

### 답변

- 위의 실행문에서 전역변수는 가장 상위에서 'false'로 초기화된 `engine` 변수이고, `on` 함수 내부에서 'true' 로 초기화된 `engine` 변수는 해당 함수의 내부에서만 접근 가능한 지역변수이다.

- 전역변수 란 모든 함수에서 접근이 가능한 변수

- 지역변수 란 선언한 함수 내에서만 접근이 가능한 변수
  (동일한 이름의 전역변수와 지역변수가 모두 존재할 경우, 지역변수로 우선 접근한다.)

- 출력 결과
  ```
  true
  false
  ```

<br/>
<br/>
