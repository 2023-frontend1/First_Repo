import PlayListMock from "../__mock__/playList.json";
import { useRef, useState } from "react";
function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */
  const [playList, setPlayList] = useState(PlayListMock.playlist);
  const inputTitleValue = useRef("");
  const inputSignerValue = useRef("");
  console.log(playList);

  const onClickDelteList = (idx) => {
    const newPlayList = [...playList];
    newPlayList.splice(idx, 1);
    setPlayList(newPlayList);
  };

  const onClickAddList = () => {
    if (
      inputTitleValue.current.value.length &&
      inputSignerValue.current.value.length
    ) {
      const addPlayList = [...playList];
      addPlayList.push({
        title: inputTitleValue.current.value,
        signer: inputSignerValue.current.value,
      });
      setPlayList(addPlayList);
      inputTitleValue.current.value = "";
      inputSignerValue.current.value = "";
    }
  };

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {playList.map((list, idx) => {
          return (
            <li key={idx}>
              <h3>{list.title}</h3>
              <p>{list.signer}</p>
              <button
                onClick={() => {
                  onClickDelteList(idx);
                }}
              >
                삭제{" "}
              </button>
            </li>
          );
        })}
      </ul>
      <div>
        <p>
          곡명 : <input ref={inputTitleValue} defaultValue="" />
        </p>
        <p>
          가수/작곡 : <input ref={inputSignerValue} defaultValue="" />
        </p>
        <p>
          <button onClick={onClickAddList}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
