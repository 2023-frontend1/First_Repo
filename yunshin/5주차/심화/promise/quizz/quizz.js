const 기초 = () => {
  const promise = new Promise((resolve, reject) =>
    setTimeout(() => {
      let data = 1
      if (data || data === 0) resolve(data)
      reject('NO_DATA')
    }, 700)
  )
  console.log('min size')
  promise
    .then((val) => {
      console.log('...0.7초 후')
      console.log('max size')
      console.log(`이번주 목표까지 ${val}% 남았습니다`)
    })
    .catch((e) => {
      console.log(e)
    })
}

const 심화 = async () => {
  console.log('min size')
  try {
    let val = await new Promise((resolve) =>
      setTimeout(() => {
        let data = 1
        resolve(data)
      }, 700)
    )
    if (val !== 0 && !val) throw Error('NO_DATA')
    console.log('...0.7초 후')
    console.log('max size')
    console.log(`이번주 목표까지 ${val}% 남았습니다`)
  } catch (e) {
    console.log(e.message)
  }
}

// 기초()
심화()
