const Storage = () => {
  // data 변수에 { promise 갯수 - 1 } 이상을 적어야 정상적으로 실행된다.
  let data = 1
  const DrawOne = () => {
    if (data < 0) return
    data -= 1
    return data
  }
  return { DrawOne }
}

const storage = Storage()

const GetData = (resolve, reject, promise_id) => {
  setTimeout(() => {
    // 데이터 인출
    const data = storage.DrawOne()
    // data 에 값이 있을 경우, 값과 호출한 비동기함수의 아이디 반환
    if (data || data == 0) resolve({ id: promise_id, data: data })
    // 그렇지 않은 모든 경우, reject() 실행
    else reject({ id: promise_id })
  }, 700)
}

const 심화 = () => {
  const promise1 = new Promise((resolve, reject) => GetData(resolve, reject, 1))
  const promise2 = new Promise((resolve, reject) => GetData(resolve, reject, 2))
  const promise3 = new Promise((resolve, reject) => GetData(resolve, reject, 3))
  // Promise.all => 배열형태로 전달받은 비동기 함수가 모두 정상실행되어야 catch에 걸리지 않는다.
  const promiseAll = Promise.allSettled([promise1, promise2, promise3])

  promiseAll.then((response) => {
    const statusList = [
      response[0].status,
      response[1].status,
      response[2].status,
    ]
    const idList = [
      // value 가 있으면 id 라는 key 에 접근하여 값을 저장, 아니라면 reason 으로 전달된 id 값
      response[0].value ? response[0].value.id : response[0].reason.id,
      response[1].value ? response[1].value.id : response[1].reason.id,
      response[2].value ? response[2].value.id : response[2].reason.id,
    ]
    const dataList = [
      // value 가 있으면 data 라는 key 에 접근하여 값을 저장, -1
      response[0].value ? response[0].value.data : -1,
      response[1].value ? response[1].value.data : -1,
      response[2].value ? response[2].value.data : -1,
    ]

    if (statusList[0] === 'fulfilled' && dataList[0] != 1) {
      console.log('비동기 요청 ' + idList[0])
    } else {
      console.log('비동기 요청 ' + idList[0] + ' 호출 실패')
    }

    if (statusList[1] === 'fulfilled' && dataList[1] != 1) {
      console.log('비동기 요청 ' + idList[1])
    } else {
      console.log('비동기 요청 ' + idList[1] + ' 호출 실패')
    }

    if (statusList[2] === 'fulfilled' && dataList[2] != 1) {
      console.log('비동기 요청 ' + idList[2])
    } else {
      console.log('비동기 요청 ' + idList[2] + ' 호출 실패')
    }

    if (
      statusList[0] !== 'rejected' &&
      statusList[1] !== 'rejected' &&
      statusList[2] !== 'rejected'
    ) {
      console.log('결과값을 가지고 오는데 실패하였습니다.')
    } else {
      console.log('정상적으로 실행되었습니다.')
    }
  })
}

심화()
