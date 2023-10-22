/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/

function division(길이, 분해할_수) {
  const 배열 = new Array(길이).fill(0).map((_, idx) => idx + 1)
  const answer = []
  while (배열.length) {
    const sliced배열 = 배열.slice(0, 분해할_수) // 원본 배열에서 앞에 있는 5개 추출
    배열.splice(0, 분해할_수) // 원본 배열에서 앞에 있는 5개 삭제
    answer.push([...sliced배열]) // 추출한 배열을 모은다.
  }
  console.log(answer)
}

division(80, 5)
