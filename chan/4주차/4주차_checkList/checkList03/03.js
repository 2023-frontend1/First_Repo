
/*checkList 3.분기점이 언제 생기는지 정의하고 구현할 수 있는가
(1) 자바스크립트에서 분기점을 구현하기 위해서는 어떠한 실행문을 응용할 수 있을까요?*/
//==> 1. if문을 사용해서 분기점을 나눌 수 있다.
//==> 2. 분기 점이 많다면 switch case로 작성하면 가독성이 더 좋다.


//(2) 자바스크립트에서 분기점이 생성되는 상황은 언제일까요?
/*	- 경우에 따라 값이 다를 때
   case별로 값이 다를때 if문이나 switch문을 사용 할 수있는데. 
   분기점이 특정 값마다 나눠질 경우 ==> switch case 사용
   ex) 연산자 (1:+, 2:-, 3:*, 4:/)와 숫자2개를 입력받아 계산하는 함수 실행*/
   const calc = (oper, num1,num2) => {
    let result;
    switch(oper){
        case 1 : result = num1 + num2
        break;
        case 2 : result = num1 - num2
        break;
        case 3 : result = num1 * num2
        break;
        case 4 : result = num1 / num2
        break;
        default : console.log("연산자를 잘못 입력 했습니다.") 
        }
      return result
    }
    console.log(calc(4,100,20))
  /* 분기점이 범위별로 나눠질 경우 
   if문 사용*/

 /* - 예외 상황을 처리해야할 때
  예외 상황을 처리해야 할때는 early return을 사용 하면 가독성면에서 효과적일것 같다.
  ex) 시험점수를 입력해서 70점이상이면 합격 */

    const pass = (score) =>{
      if(score < 70){return console.log('당신은 실패했습니다.')}
      console.log("합격입니다.")
    }


    //각 상황을 정의하고 예시를 하나씩 본인이 스스로 "상상"하여 구현해보세요



