📌 React
<br/>
<br/>
#. 작동원리
<br/>
<br/>
  React는, 
<br/>
  > 가상돔(Virtual Dom)을 사용해서 UI가 변경되면 Virtual Dom에 변경된 UI를 랜더링해주고,<br>Virtual Dom과 browser의 실제 Dom을 비교한 뒤, 그 차이만 실제 Dom에 반영해준다.

<br/>
<br/>

#. 장점
  - Virtual Dom을 사용해서 UI를 빠르게 랜더링해준다.
  - 컴포넌트에 각각의 ui조각을 담아서 하나로 관리해준다.(view역할)
  - ui 업데이트가 편리하고, 재사용하기 좋다.

<br/>
<br/>

#. 단점
  - 초기 로딩시간이 길다.
  - 처음 로딩시, 빈페이지로 보여주기때문에 페이지 정보를 알 수 없다.