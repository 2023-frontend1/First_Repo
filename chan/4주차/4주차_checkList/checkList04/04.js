/*checkList 4.배열에서 인덱스가 어느 순간 필요할지 정의할 수 있는가 
(1) 자바스크립트에서 배열은 어느 순간 사용하는게 올바를까요? 객체와 구분지어 설명해보세요.
   1) 객체의 특징은 key와 value로 이루어져 있지만 순서가 없기 때문에 값을 확인하기 위해서는 
      객체의 key를이용해서 값에 접근할 수 있다.
   2) 배열은 객체와 다르게 순서가 보장되며 그 순서는 index를 통해서 확인할 수 있다.
      ===> 따라서 내가 가저온 배열 또는 객체의 특정 index에 접근해서 원하는 값을 가져오고 싶을때 배열을 사용하고
      유사배열 객체인 경우 Array.from()을 통해 배열화 시켜서 index를 사용 할 수있다.
      또한 index를 효과적으로 사용 할 수있는 내장함수,고차함수를 사용하면 더 효과적으로 배열을 다룰 수 있다.
      ex) for, forEach, reduce, map ...
*/
/*          
(2) 배열에서의 인덱스는 특정 요소의 위치를 가르키기 위해 사용하며 해당 요소를 참조하여 
    특정 변수에 할당할 수도 있습니다. ( 복습 문제에도 관련 문제가 포함되어있어요! )

    배열에서 인덱스를 사용해야하는 순간은 언제일까요?

    이미지 케러셀, 슬라이드 베너와 같이 인덱스가 필요한 설계에 관하여 찾아보고
    해당 문항에서 왜 인덱스가 필요할지 정의해보세요.

    정확히는 배열에서의 인덱스의 역할을 깨닫는 것이 중요하며
    이를 어느 순간 활용해야할지 익숙해지는 것이 중요합니다.
   1) 위의 예시처럼 배열의 몇번째 요소에 저장된 값들을 가져오기위해 index가 사용되고 index를 통해
     배열의 요소들을 순회하면서 특정 요소가가진 값들을 가져올 수 있다.
*/
/*
(3) 빨,주,노,초,파,남,보 색상으로 변경이 가능한 "무지개"라는 텍스트가 있습니다.
    해당 텍스트는 생상 변경버턴을 누르면 위의 7가지 색이 순서대로 변경되어야합니다.

    무지개
    [변경버튼] <-- 클릭시 위의 무지개는 빨,주,노,초,파,남,보 색상으로 순서대로 변경되어야합니다.
						     보라색일 경우에는 다시 빨간색으로 돌아가야합니다 :)
    04.html파일에 구현했음
*/

