/* 레시피 재료 추가하기 */

const $button = document.querySelector('button')
const $button$id$summit_button = document.querySelector('button#submit_button')
const $table = document.querySelector('table')
const $ul$id$ingredient_list = document.querySelector('ul#ingredient-list')

// "추가" 버튼 클릭 시, 이벤트 처리
$button.addEventListener('click', (e) => {
  const ingredient = GetIngredientFromInput()
  const weight = GetWeightFromInput()
  AppendTableItem(ingredient, weight)
  e.preventDefault()
})

// "삭제" 버튼 클릭 시, 이벤트 처리
$table.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete_button')) {
    const delete_idx = Array.from(
      $table.querySelectorAll('button.delete_button')
    ).indexOf(e.target)
    RemoveTableItemByIdx(delete_idx)
  }
  e.preventDefault()
})

// "제출" 버튼 클릭 시, 이벤트 처리
$button$id$summit_button.addEventListener('click', (e) => {
  ClearUlChild()
  const pairs_ingredient_weight = GetIngredientAndWeightAllFromTr()
  pairs_ingredient_weight.forEach((pair) => AppendUlItem(pair.join(' ')))
  e.preventDefault()
})

// input 태그에서 재료 이름을 가져온다.
const GetIngredientFromInput = () => {
  const $input$name$ingredient = document.querySelector(
    'input[name=ingredient]'
  )
  return $input$name$ingredient.value
}

// input 태그에서 용량(무게) 에 대한 값을 가져온다.
const GetWeightFromInput = () => {
  const $input$name$weight = document.querySelector('input[name=weight]')
  return $input$name$weight.value
}

// table 에 있는 모든 tr 태그로부터 [재료, 무게] 을 가져온다.
const GetIngredientAndWeightAllFromTr = () => {
  const tr_group = Array.from($table.querySelectorAll('tr.tbody'))
  return tr_group.map((tr) =>
    tr.innerHTML.split('</th>', 2).map((x) => x.trim().replace('<th>', ''))
  )
}

// table 태그 하위 항목을 추가한다.
const AppendTableItem = (ingredient, weight) => {
  const $new_th_재료 = document.createElement('th')
  const $new_th_무게 = document.createElement('th')
  const $new_th_관리 = document.createElement('th')

  const $new_button = document.createElement('button')
  $new_button.classList.add('delete_button')
  $new_button.type = 'button'
  $new_button.textContent = '삭제'

  $new_th_재료.textContent = ingredient
  $new_th_무게.textContent = weight
  $new_th_관리.appendChild($new_button)

  const $new_tr = document.createElement('tr')
  $new_tr.classList.add('tbody')
  $new_tr.appendChild($new_th_재료)
  $new_tr.appendChild($new_th_무게)
  $new_tr.appendChild($new_th_관리)

  $table.appendChild($new_tr)
}
// 삭제할 table 하위 항목의 index 를 전달받아, 삭제한다.
const RemoveTableItemByIdx = (idx) => {
  const tr_group = Array.from($table.querySelectorAll('tr.tbody'))
  if (idx >= tr_group.length) return
  tr_group[idx].remove()
}

// ul 태그 하위 항목을 모두 삭제한다.
const ClearUlChild = () => {
  $ul$id$ingredient_list.innerHTML = ''
}

// ul 태그 하위 항목을 추가한다.
const AppendUlItem = (text) => {
  const $new_li = document.createElement('li')
  $new_li.textContent = text
  $ul$id$ingredient_list.appendChild($new_li)
}
