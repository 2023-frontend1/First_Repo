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

const GetData = (resolve, reject, promise_idx) => {
  setTimeout(() => {
    // 데이터 인출
    const data = storage.DrawOne()
    // data 에 값이 있을 경우, 값과 호출한 비동기함수의 인덱스 반환
    if (data || data == 0) {
      console.log('비동기 요청 ' + promise_idx)
      resolve([data, promise_idx])
    }
    // 그렇지 않은 모든 경우, reject() 실행
    else {
      console.log('비동기 요청 ' + promise_idx + ' 호출 실패')
      reject('결과값을 가지고 오는데 실패하였습니다.')
    }
  }, 700)
}

const 심화 = () => {
  const promise1 = new Promise((resolve, reject) => GetData(resolve, reject, 0))
  const promise2 = new Promise((resolve, reject) => GetData(resolve, reject, 1))
  const promise3 = new Promise((resolve, reject) => GetData(resolve, reject, 2))
  // Promise.all => 배열형태로 전달받은 비동기 함수가 모두 정상실행되어야 catch에 걸리지 않는다.
  const promiseAll = Promise.allSettled([promise1, promise2, promise3])

  promiseAll.then((response) => {
    if (
      response[0].status == 'fulfilled' ||
      response[1].status == 'fulfilled' ||
      response[2].status == 'fulfilled'
    )
      console.log('정상적으로 실행되었습니다.')
    else {
      console.log(response[0].reason)
    }
  })
}

심화()
