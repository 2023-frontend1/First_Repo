import styled from "styled-components";

const Quiz1 = () => {
  return (
    <ul>
      <QustionLi>
        Q1 리액트를 사용하는 이유를 설명해보세요 (2가지 이상)
        <AnswerDiv>
          1. 컴포넌트단위의 개발을 하기 좋아서 팀단위의 개발이 편리하다.
        </AnswerDiv>
        <AnswerDiv>2. 가상돔을 사용하기때문에 rendering할때 효율적이다.</AnswerDiv>
      </QustionLi>
      <br />
      <QustionLi>
        Q2 리액트가 가상 돔을 사용하는 이유는 무엇일까요?
        <AnswerDiv>
          가상돔을 사용해서 변화된 가상돔의 컴포넌트 만을 비교해서 달라진 부분을
          한번만 리랜더링 하기때문에 실제돔을 렌더링하는거보다 효율이 좋다.
        </AnswerDiv>
      </QustionLi>
      <br />
      <QustionLi>
        Q3 리액트가 가상 돔과 돔 트리를 비교하여 바뀐 부분이 있다면 화면을 다시
        그리는 행위를 무엇이라 할까요?
        <AnswerDiv>rerendering</AnswerDiv>
      </QustionLi>
      <br />
      <QustionLi>
        Q4 (Q3)의 행위를 통해 얻을 수 있는 이점은 무엇이며 언제 실행될까요?
        <AnswerDiv>
          바뀐부분만 랜더링 해주기때문에 효과적이고 state라는 상태가 변할때만
          랜더링을 해준다.
        </AnswerDiv>
      </QustionLi>
      <br />
      <QustionLi>
        Q5 리액트는 SPA입니다. 이에 따라 index.html이 하나 뿐인데요. 어떻게
        주소마다 다른 화면을 보여줄 수 있을까요? 그리고 그로 인한 장점은
        무엇일까요?
      </QustionLi>
      <br />
      <QustionLi>
        Q6 훅 함수는 왜 만들게 되었을까요? 아래의 각 훅함수의 어떠한 장점이
        있는지 정의를 선언하고 반드시 그에 대한 예시를 한가지 씩 작성해보세요.
        <br /> <AnswerDiv>(1) useState</AnswerDiv>
        <br />
        <AnswerDiv>(2) useRef</AnswerDiv>
        <br />
        <AnswerDiv>(3) useEffect</AnswerDiv>
        <br />
        <AnswerDiv>(4) useCallback</AnswerDiv>
        <br />
        <AnswerDiv>(5) useMemo</AnswerDiv> 
      </QustionLi>
      <br />
      <QustionLi>
        Q7 팀원들과 리액트로 프로젝트를 만들려고할 때 고려해야하는 사항들을
        아는대로 작성해보세요 (3가지 이상)
        <AnswerDiv></AnswerDiv>
      </QustionLi>
      <br />
      <QustionLi>Q8 리액트에서 컴포넌트를 나누는 기준은 어떻게 되어야할까요?
        <AnswerDiv></AnswerDiv>
      </QustionLi>
    </ul>
  );
};
export default Quiz1;

const QustionLi = styled.li`
    font-size: 18px;
    color : #2a642a
`

const AnswerDiv = styled.div`
    font-size: 15px;
    color: black;
`
