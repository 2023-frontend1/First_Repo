let active = false
//시동이 걸렸을때
function on() {
  if (active === true) {
    console.log('이미 시동이 걸렸습니다.')
  } else {
    active = true
    console.log('시동이 걸렸습니다.')
  }
}
//시동이 꺼졌을때
function off() {
  active = false
  console.log('시동이 꺼져있습니다.')
}

// -- 올바른 경우 --
on() // 시동이 걸렸습니다.
off() // 시동이 꺼져있습니다.
on() // 시동이 걸렸습니다.

// -- 이미 엔진이 걸려있는 경우 --
// off() // 시동이 꺼져있습니다.
// on() // 시동이 걸렸습니다.
// on() // 이미 시동이 걸려있습니다.
