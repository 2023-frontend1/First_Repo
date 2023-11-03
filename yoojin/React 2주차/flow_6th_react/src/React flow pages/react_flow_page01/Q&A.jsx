import React from 'react'
import styled from 'styled-components'

const Q_and_A = () => {
  return (
    <div>
          <NoBullet>
              <NoBullet>
                  <P_padding>
                      Q1: 리액트를 사용하는 이유를 설명해보세요 (2가지 이상) <br />
                      -  <br />
                      -  <br/>
                  </P_padding>
              </NoBullet>
              <NoBullet>
                  <P_padding>
                      Q2: 리액트가 가상 돔을 사용하는 이유는 무엇일까요? <br />
                      -   <br />
                      -   <br/>
                  </P_padding>
              </NoBullet>
              <NoBullet>
                   <P_padding>
                      Q3: 리액트가 가상 돔과 돔 트리를 비교하여 바뀐 부분이 있다면 화면을 다시 그리는 행위를 무엇이라 할까요?<br />
                      - <br/>
                  </P_padding>
              </NoBullet>
              <NoBullet>
                    <P_padding>
                      Q4: (Q3)의 행위를 통해 얻을 수 있는 이점은 무엇이며 언제 실행될까요? <br />
                      
                  </P_padding>
              </NoBullet>
              <NoBullet>
                    <P_padding>
                      Q5: 리액트는 SP_paddingA입니다. 이에 따라 index.html이 하나 뿐인데요.<br/>
                      어떻게 주소마다 다른 화면을 보여줄 수 있을까요? 그리고 그로 인한 장점은 무엇일까요?<br />
                      
                      
                  </P_padding>
              </NoBullet>
              <NoBullet>
                    <P_padding>
                      Q6: 훅 함수는 왜 만들게 되었을까요? <br/>
                         아래의 각 훅함수의 어떠한 장점이 있는지 정의를 선언하고<br/>
		                    반드시 그에 대한 예시를 한가지 씩 작성해보세요.<br/>
                            <br/>
                                (1) useState<br/>
                                (2) useRef<br/>
                                (3) useEffect<br/>
                                (4) useCallback<br/>
                                (5) useMemo
                  </P_padding>
              </NoBullet>
              <NoBullet>
                    <P_padding>
                      Q7: 팀원들과 리액트로 프로젝트를 만들려고할 때 고려해야하는 사항들을 아는대로 작성해보세요 (3가지 이상) <br />
                      - <br />
                      - <br />
                      - <br/>
                  </P_padding>
              </NoBullet>
              <NoBullet>
                     <P_padding>
                      Q8: 리액트에서 컴포넌트를 나누는 기준은 어떻게 되어야할까요? <br/>
                  </P_padding>
              </NoBullet>
              
          </NoBullet>

    </div>
  )
}

export default Q_and_A;

const NoBullet = styled.li`
list-style-type: none;
margin: 5px;
padding: 10px;
`;

const  P_padding = styled.p`
padding: 10px;
line-height: 1.5;
`;