const promise1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('비동기1')
      resolve(1)
    }, 3000)
  })

const promise2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('비동기2')
      resolve(2)
    }, 3000)
  })

const promise3 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('비동기3')
      resolve(3)
    }, 3000)
  })

const ExecPromiseRelay = async () => {
  try {
    await promise1()
    await promise2()
    await promise3()
  } catch (e) {
    console.log('정보를 불러오는데 실패하였습니다.')
  }
}

ExecPromiseRelay()
