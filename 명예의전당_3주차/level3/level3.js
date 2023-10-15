/* 
레시피 재료 추가하기
*/

// const $form = document.getElementById("ingredient-form");
const $formData1 = document.getElementsByName('ingredient')[0] // 재료명 입력 위치
const $formData2 = document.getElementsByName('weight')[0] // 용량 입력 위치
const $addBtn = document.querySelector('.btn-add') // 재료명, 용량 추가 버튼
const $tbody = document.querySelector('tbody') // 재료명, 용량 추가될 tbody
const $submitBtn = document.getElementById('submit_button') // 제출버튼

$addBtn.addEventListener('click', (e) => {
  // e.preventDefault();

  // 조건 1. 등록된 재료와 같은 이름의 재료명은 추가할 수 없다.
  const $item = document.querySelectorAll('.item') // 추가된 재료명 위치 (재료명 입력 값과 비교)
  for (let element of $item) {
    if ($formData1.value == element.innerHTML) {
      return alert('같은 이름의 재료는 추가할 수 없습니다.')
      $formData1.value = ''
      $formData2.value = ''
    }
  }

  // 조건 2. 재료명과 용량에 데이터가 모두 있을때 추가할 수 있다.
  if (!$formData1.value.trim() || !$formData2.value.trim()) {
    return alert('재료명과 용량을 모두 입력해주세요')
  } else {
    const $trData = document.createElement('tr') // 재료명, 용량 추가될 tbody에 tr 생성
    $tbody.append($trData)
    $trData.innerHTML +=
      `
      <td class="item">` +
      $formData1.value +
      `</td>
      <td class="weight">` +
      $formData2.value +
      `</td>
      <td><button type="button" class="btn-delete">삭제</button></td>
    `
    $formData1.value = ''
    $formData2.value = ''
  }

  // 조건 3. 삭제버튼을 클릭하면 해당 행은 삭제된다.
  const $deleteBtn = document.querySelectorAll('.btn-delete') // 추가된 삭제버튼

  for (let element of $deleteBtn) {
    element.addEventListener('click', (e) => {
      e.target.parentNode.parentNode.remove()
    })
  }
})

// 조건 4. 제출 버튼을 클릭하면 하단에 리스트로 출력된다.
$submitBtn.addEventListener('click', (e) => {
  const $hasData = document.getElementsByTagName('tbody')
  const $result = document.getElementById('ingredient-list')
  $result.innerHTML = ''

  for (let element of $hasData) {
    // tbody가 데이터를 가지고 있을때
    if (element.hasChildNodes()) {
      for (var i = 0; i < element.childNodes.length; i++) {
        // tr의 인덱스를 구하고,
        const $listItem = document.getElementsByClassName('item')[i] // tr의 인덱스와 동일한 데이터르 찾아서
        const $listWeight = document.getElementsByClassName('weight')[i] // tr의 인덱스와 동일한 데이터르 찾아서

        $result.innerHTML +=
          `
          <li>` +
          $listItem.innerHTML +
          ` : ` +
          $listWeight.innerHTML +
          `</li>
        ` // 추가해준다
      }
    } else {
      alert('추가할 내용이 없습니다.')
    }
  }
})
