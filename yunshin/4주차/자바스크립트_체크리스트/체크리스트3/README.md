# 3. 분기점이 언제 생기는지 정의하고 구현할 수 있는가

## (1) 자바스크립트에서 분기점을 구현하기 위해서는 어떠한 실행문을 응용할 수 있을까요?

### 답변

=> if 문, switch 문, try-catch 문 (?)

<br/>
<br/>

## (2) 자바스크립트에서 분기점이 생성되는 상황은 언제일까요?

### 1. 경우에 따라 값이 다를 때

#### 답변1 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4%EC%A3%BC%EC%B0%A8/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8_%EC%B2%B4%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8A%B8/%EC%B2%B4%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8A%B83/%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%85%8C%EB%A7%88%EC%83%89%EC%83%81%EC%A7%80%EC%A0%95.js) )

- 디스코드에서, 프로필 사진을 별도로 지정하지 않을 경우, 사용자의 정보에 따라 기본 프로필 배경 색상이 지정된다.

<div align ="center">

![image](https://github.com/2023-frontend1/First_Repo/assets/50646145/d81bec28-e944-4364-8aa3-49c9ed2159e1)

</div>

- 사용자 정보를 서버로부터 받아왔다고 가정
- 사용자의 id, nickname,email 정보를 이용하여, 각 사용자마다 고유의 테마 색상을 부여하는 함수 구현
- 출력 결과 

<img width="330" alt="사용자별_고유의_색상_부여" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/3290bef5-28ee-4494-acd0-3936615fac4c">

<br/>
<br/>

### 2. 예외 상황을 처리해야할 때

#### 답변2 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4%EC%A3%BC%EC%B0%A8/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8_%EC%B2%B4%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8A%B8/%EC%B2%B4%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8A%B83/%EC%98%88%EC%99%B8%EC%B2%98%EB%A6%AC.js) )

- 온라인 동영상 스트리밍 사이트 를 운영 중임을 가정
- 사용자 id 를 사용해서, 사용자의 정보를 출력하는 기능을 구현 중..
- id 가 없을 경우, 오류 메시지를 콘솔에 출력
- 출력 결과 

    _*정상분기_

    <img width="369" alt="정상분기" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/1e42f708-b268-4a01-8229-a3618f3b0804">

    _*예외분기_

    <img width="344" alt="예외처리" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/47dd4a7b-3689-4a84-ab4c-0276390111f6">
