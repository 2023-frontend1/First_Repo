// 3. 분기점이 언제 생기는지 정의하고 구현할 수 있는가

/*
(1) 자바스크립트에서 분기점을 구현하기 위해서는 어떠한 실행문을 응용할 수 있을까요?
        => if 문
        => switch 문 

(2) 자바스크립트에서 분기점이 생성되는 상황은 언제일까요?
	if-else is best used when there are two discrete values or a few different ranges of values for which to test. 
    When there are more than two discrete values for which to test, the switch statement is the most optimal choice.

*/

//----------------------------------------//

//if 문 예시 

function ifTest(b){
    if (b < 6){
        console.log('b is less than 6')
    } else {
        console.log('b is equal or greater than 6')}

    return;
}

ifTest(7);

//switch문 예시

// const switchTest = 'example'

// switch(switchTest){
//  case 'test': 
//     console.log('this case says "test"')
//     break;
//  case 'example':
//     console.log('this case says "example')
//     break;
//  case 'TEST' :
//     console.log('this case says "TEST"')
//     break;
//  case 'Hi' :
//     console.log('Hello')
//     break;
//  case 'How are you today?' :
//     console.log('I dont know')

//  default : console.log('Well.. you tried :)')
// }