/*
checkList 1.전역변수와 지역변수의 차이를 명확히 알고 있는가
(1) 아래의 실행문 중 지역변수와 전역변수가 무엇인지 구분하고, 지역변수와 지역변수를 정의하세요.
	단, 여기서의 정의는 단순히 개념이 아닌 내가 이해하고 있는 언어로 바꾸어 정의할 것
	또한, 이렇게 나만의 바꾼 언어를 다른 사람도 이해가 가능한지 확인할 것
	이는 앞으로의 모든 정의 문제에 똑같이 적용됩니다.
*/    

let engine = false      // 변수 engine은 {}블럭안에 선언한것이 아니기 때문에 전체 코드에 영향을 줄 수있음 => 전역변수

function on() {
 let engine = true;     // 변수 engine은 {}블럭안에 선언됨; 함수의 선언부에 선언된것이기때문에 
 return engine          // function on이 호출될때만 engine = true 라는 값을 대입해 줄 수 있음. 
}                       // on()이 실행되고 나면 engine에 true값을 넣어준 engine변수를 return해준다.
console.log(on()) // 결과값은?  // on()이 호출 되고 engine = true 값을 반환해주기때문에 console.log(on()) => true 
console.log(engine) // 결과값은?  // on()이 실행되지 않았기때문에 console.log(engine) => false

