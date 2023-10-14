/* 레시피 재료 추가하기 */

const $button = document.querySelector('button')
const $button$id$summit_button = document.querySelector('button#submit_button')

// "추가" 버튼 클릭 시, 이벤트 처리
$button.addEventListener('click', (e) => {
  const ingredient = GetIngredient()
  const weight = GetWeight()
  AppendTableItem(ingredient, weight)
  e.preventDefault()
})

// 재료 이름을 가져온다.
const GetIngredient = () => {
  const $input$name$ingredient = document.querySelector(
    'input[name=ingredient]'
  )
  return $input$name$ingredient.value
}

// 용량(무게) 에 대한 값을 가져온다.
const GetWeight = () => {
  const $input$name$weight = document.querySelector('input[name=weight]')
  return $input$name$weight.value
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

  const $table = document.querySelector('table')
  $table.appendChild($new_tr)
}
