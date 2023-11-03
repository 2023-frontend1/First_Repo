/*
 1. 알아요, 몰라요 두 버튼이 존재합니다.
    two buttons: ik/idk
 알아요 버튼을 누르면 어떠한 배열에 true,
 ikbtn = true
 몰라요 버튼을 누르면 false가 쌓입니다.
 idkbtn = false
 2. 만약 배열에 true가 3개 이상 쌓였다면, 
 true > 3
 alert로 테스트가 종료되었습니다를 출력해주세요.
 alert("test has finished")
 */
import { useRef, useState } from 'react'
const Useref = () => {
    const EmptyArray = useRef([])

    const handleClickTrue = () => {
        EmptyArray.current.push(true)
        console.log(EmptyArray.current)
        const trueArray = EmptyArray.current.filter(el => {
            return el 
        })
        if (trueArray.length >= 3) {
            alert("테스트가 종료되었습니다");
            EmptyArray.current = []
        }
    }

    const handleClickFalse = () => {
        console.log(EmptyArray.current)
        EmptyArray.current.push(false)
    }

   
    

    return (
  <>
            <button className='ik-btn' onClick={()=>{handleClickTrue()}}>I know</button>
            <button className='idk-btn' onClick={()=>{handleClickFalse()}}>I don't know</button>
 </>
  )
}

export default Useref;


// const Example = () => {
//     const divRef = useRef();
//     const handleClick = () => {
//         divRef.current.style.color = 'red'
//     };
   
//     return (
//         <div>
//             <div ref={divRef}>This is a sample div</div>
//             <button onClick={handleClick}>Change Color</button>
//          </div>
//   )
    /////////////////////////////////////
    // const [count, setCount] = useState(0);
    // const increment = () => {
    //     setCount(count + 1)
    // }
    // return (
        
    //     <>
    //         <p>
    //             Count : {count}
    //         </p>
    //         <button onClick={increment}>increment</button>
    //     </>
    // )
    ////////////////////////
//     const countRef = useRef(0);
//     const increment = () => {
//         countRef.current = countRef.current + 1;
//         console.log('Count:', countRef.current);
//     }
//     return (
//         <>
//             <p>
//                 Count: {countRef.current}
//                 <button onClick={increment}>
//                     increment
//                 </button>
//         </p>
//         </>
//     )

// }

// export default Example
