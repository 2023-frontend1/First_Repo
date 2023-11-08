import { useRef, useState } from 'react'
import PlayListMock from '../__mock__/playList.json'

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  // console.log(PlayListMock.playlist)
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  const [playlist, setPlaylist] = useState(PlayListMock.playlist)

  const refTitle = useRef('')
  const refSigner = useRef('')

  const handleDeleteBtn = (idx) => {
    const cpyList = [...playlist]
    cpyList.splice(idx, 1)
    setPlaylist(cpyList)
  }

  const handleAddBtn = () => {
    if (refTitle.current.value && refSigner.current.value) {
      const cpyList = [...playlist]
      cpyList.push({
        title: refTitle.current.value,
        signer: refSigner.current.value,
      })
      setPlaylist(cpyList)
      refTitle.current.value = ''
      refSigner.current.value = ''
    }
  }

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {playlist.map((elem, idx) => {
          return (
            <li key={idx}>
              <h3>{elem.title}</h3>
              <p>{elem.signer}</p>
              <button
                onClick={() => {
                  handleDeleteBtn(idx)
                }}
              >
                삭제{' '}
              </button>
            </li>
          )
        })}
      </ul>
      <div>
        <p>
          곡명 : <input ref={refTitle} />
        </p>
        <p>
          가수/작곡 : <input ref={refSigner} />
        </p>
        <p>
          <button onClick={handleAddBtn}>추가</button>
        </p>
      </div>
    </>
  )
}
export default State1
