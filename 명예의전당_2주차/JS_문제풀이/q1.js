/*
변수 위치 찾기

변수 a는 main 함수 안에서 사용된다
변수 b는 dom api selector로 다른 함수에서 재사용 될 수 있다

변수 c와 solution은 각각 main의 매개변수 및 콜백함수이다.
변수 c는 콜백함수 solution의 매게변수로 사용된다.

변수 d는 main의 콜백함수인 솔루션 함수에서 전달받은 c와 연산할 변수이다.
변수 e는 main함수의 최종 반환 값으로 solution에서 d와 c를 더한 값의 반환 값이기도 하다.

문제 해석은 각기 다를 수 있습니다. 중요한 것은 자신만의 관념으로 변수 위치를 찾는 것으로
따로 답이 존재하지 않습니다.
/
/  a: main함수안에사용 -> a의 지역변수
    b: b -> html의 특정 태그를 가져와 담는변수(document.querySelect)
    c: 1. main의 매개변수 2. 콜백함수solution(c)의 매개변수형태로사용됨
    d: main의 콜백함수 의 return값 c와 연산을한다 --> c+d형태로 값은 e에저장될것
    e: main의 return으로 d+c
    solution : 1.함수  2.main의 콜백함수 
    */

let b = document.querySelector() // 다른함수에서도 사용할 수있다 => 전역변수로 선언

function solution(c) {
  return c + d
}

function parse() {
  return b //재사용 ㅎㅎ
}

function main(c, solution) {
  // c와 solution은 매개변수로 선언됨
  let a // main function의 지역변수로 선언

  let e = solution(c) //호출된 solution에의해 불러진 c+d값을 변수 e에 저장

  return e // e값 return
}
