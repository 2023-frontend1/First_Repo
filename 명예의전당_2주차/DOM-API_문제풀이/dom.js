// 1번문제
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('display').innerText = '페이지가 로딩되었습니다.'
})

// 2번문제
const $tab = document.getElementsByClassName('tab')
const $block = document.getElementsByClassName('block')
let active = null
console.log($tab)
console.log($block)
for (let i = 0; i < $tab.length; i++) {
  $tab[i].addEventListener('click', function () {
    if (active) {
      active.style.color = ''
      active.style.backgroundColor = ''
    }
    // 탭을 클릭했을 때 글자색을 빨간색으로 변경
    this.style.color = 'blue'

    // 탭을 클릭했을 때 배경색을 검정색으로 변경
    this.style.backgroundColor = 'pink'
    active = this
    const tabNumber = parseInt(this.innerText.replace('탭', ''))
    showContent(tabNumber)
  })
}

//3번문제

function showContent(tabNum) {
  // 모든 컨텐츠 숨기기
  for (let i = 0; i < $block.length; i++) {
    $block[i].style.opacity = '0'
  }
  for (let j = 0; j < $block.length; j++) {
    const Num_check = parseInt($block[j].innerText.replace('탭', ''))
    if (Num_check == tabNum) {
      $block[j].style.opacity = '1'
    }
  }

  // 클릭한 탭에 해당하는 컨텐츠만 보이도록 설정
  console.log(tabNum)
  // console.log($block[tabNum - 1]); // 인덱스는 0부터 시작하므로 탭 번호에서 1을 뺍니다.
}
