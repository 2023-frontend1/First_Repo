/*checkList 5.콜백함수를 구분할 수 있는가
(1) 아직도 콜백함수가 무엇인지 모른다면 콜백함수 이해에 어떠한 것이 어려운 점이 있는지 확인해보세요.
    아래의 함수 중 콜백함수를 사용한 것과 콜백함수가 아닌 것을 구분해보세요.
*/    

//---

//	1-1)
			function f1(){
			}
	
			function 실행문(){
			 f1()
			}
	    실행문()
// ====> 위의 함수는 callback 함수가 아니다 function 실행문() 을 호출하면 단순히 그안에 f1()함수가 실행되기때문에
//       f1()은 실행문()의 내부함수일뿐이다.
//---

//	1-2)
			function f1(e){
				console.log(e.currentTarget)
			}

			$dom.addEventListner(f1)
//===> 위의 함수는 callback함수이다 addEventListner의 특정 이벤트가 실행 될때 f1함수가 실행되고 
//     f1에 필요한 매개변수 e는 addEventListner에서 제공해준다.
//---

//	1-3)
			array.map((el,index) => el+1)
//===>위의 함수는 callback함수이다 map이라는 고차함수의 매개변수로 익명함수(el,index)를 실행시키며
//    익명함수의 매개변수 el,index는 map함수안에서 제공하기때문이다.
//---

//  1-4)
		  function f1(number){
			}

			function 실행문(func){
				let a = 5;
				func(a)
			}
			실행문(f1)
//===> 위의 함수는 callback 함수이다 function 실행문()의 매개변수로 따로정의된 함수 f1을 넣어주며 
//     f1이 실행될때 필요한 매개변수(number)를 f1을 호출한 함수 실행문에서 a=5의형태로 매개변수를 준다.
//---