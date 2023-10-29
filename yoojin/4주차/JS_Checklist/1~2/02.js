/* 
2. 전역변수를 활용하여 함수 설계를 할 수 있는가

(1) 자동차의 엔진 시동을 걸려고 합니다. 
한번 시동을 킨 자동차는 다시 시동을 걸 수 없다고 하였을 때
아래의 결과가 나오도록 함수를 설계하고 구현해보세요

-- 올바른 경우 --
on()  // 시동이 걸렸습니다.
off() // 시동이 꺼져있습니다.
on() // 시동이 걸렸습니다.

-- 이미 엔진이 걸려있는 경우 --
on() // 시동이 걸렸습니다.
on() // 이미 시동이 걸려있습니다.
*/

//-----------------------//

// const engineOn = 'engine is on'
// const engineOff = 'engine is off'

// const on = () => {
//    console.log(engineOn)
//    if ('engine is on' === engineOn){
// setTimeout(()=>{
//     console.log('engine is already on')
// }, 1000);
//    }
// }

// function off (){
//     console.log(engineOff)
// }

// on();
// off();
// on();

//--------------------------//
let engineOn = true;
// true 이면 "엔진이 꺼진상태"
// false 이면 "엔진이 켜진상태"

const engineOff = 'engine is off'

const on = () => {
   if(engineOn){ // true 라면 (== "엔진이 꺼진상태")
    engineOn = !engineOn;
   console.log('engine is on')
   } else{ // false 라면 (== "엔진이 켜진상태")
        console.log('engine is already on')
    } 
}

const off = () =>{
    engineOn = true;
    console.log(engineOff)
}

on(); // 엔진을 켜진 상태로 바꾼다.
on(); // 엔진을 켰는데 또 키라고 하네?

// on(); // 엔진을 켜진 상태로 바꾼다.
// off(); // 엔진을 꺼라.
// on(); // 엔진을 켰는데 또 키라고 하네?


//-----------------------//