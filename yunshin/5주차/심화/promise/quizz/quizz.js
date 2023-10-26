const 기초 = () => {
  console.log('min size')
  const promise = new Promise((resolve, reject) => {
    let data = 1
    setTimeout(() => {
      if (data || data === 0) resolve(data)
      reject('NO_DATA')
    }, 700)
  })
  promise
    .then((val) => {
      console.log('...0.7초 후')
      console.log('max size')
      console.log(`이번주 목표까지 ${val}% 남았습니다`)
    })
    .catch(() => {
      console.log('이번주 목표를 모르겠는데요?? ㅎㅎ')
    })
}

기초()
