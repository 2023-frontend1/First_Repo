// 4번 문제
const inputElement = document.getElementById('te_input')

inputElement.addEventListener('input', function (event) {
  const inputValue = event.target.value

  // .test() 함수는 해당하는 값이 있는지 찾는다
  // /\d/ 이게 정규표현식으로 숫자를 뜻한다고함
  const number = /\d/.test(inputValue)
  // console.log(number)
  if (number) {
    alert('숫자는 입력할 수 없습니다!')
    event.target.value = ''
    // console.log(number)
    // const numDel = inputValue.replace(/\d/g, '');
    // event.target.value = numDel;
  }
})

// 5-6번 문제 여기부터 보시면 될것같아여 위는4번이 네ㅔ네
// 필요한 요소들 가져온다
const list = document.getElementById('list')
const listData = document.getElementById('list_data')
const addBtn = document.getElementById('send')
const resetBtn = document.getElementById('reset')
const deleteBtn = document.createElement('button')
const updateBtn = document.createElement('button')
const $form = document.getElementById('form')

// Form태그의 action속성을 막기위해
$form.addEventListener('submit', (e) => {
  e.preventDefault()
})

// button 생성
deleteBtn.innerText = '삭제'
$form.append(deleteBtn)
updateBtn.innerText = '수정'
$form.append(updateBtn)

// 리스트가 추가되거나 수정할 때 필요한 요소 만들기
function createLi(text) {
  const li = document.createElement('li')
  li.className = 'liclass'

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'

  const label = document.createElement('label')
  label.setAttribute('class', 'text_label')
  label.innerText = text

  li.append(checkbox, label)
  return li
}

// 저장버튼 눌렀을 때
addBtn.addEventListener('click', () => {
  if (!listData.value.trim()) {
    return alert('내용을 입력해주세요')
  }

  // listData input으로 받은값을 넣어준다
  let newLi = createLi(listData.value)

  // // 저장누르고, 지우고 다시 쓰기 귀찮아서
  // listData.value = ''

  // // 삭제 버튼 눌렀을 때
  // deleteBtn.addEventListener('click', () => {
  //   if (newLi.querySelector('input[type=checkbox]').checked) {
  //     list.removeChild(newLi)
  //   }
  // })

  // // 수정버튼 누르면 input으로 바꿔주기 위해 생성
  // let input = document.createElement('input')
  // input.textContent = newLi.innerText
  // // 처음 수정 버튼 눌렀을 때 input으로 바뀐다

  // function edit() {
  //   const checkbox = newLi.querySelector('input[type=checkbox]')
  //   console.log(checkbox)
  //   if (checkbox.checked) {
  //     newLi.replaceWith(input)
  //     updateBtn.removeEventListener('click', edit)
  //     updateBtn.addEventListener('click', update)
  //   }
  // }
  // // 두번째 수정버튼 눌렀을 때 입력된 값을 넣어준다
  // function update() {
  //   const updatedText = input.value
  //   const updatedLi = createLi(updatedText)
  //   newLi = updatedLi

  //   // console.log(updatedLi);
  //   input.replaceWith(updatedLi)
  //   //수정된 글도 삭제할 수 있게하기 위해
  //   deleteBtn.addEventListener('click', () => {
  //     if (updatedLi.querySelector('input[type=checkbox]').checked) {
  //       list.removeChild(updatedLi)
  //     }
  //   })
  //   updateBtn.removeEventListener('click', update)
  //   updateBtn.addEventListener('click', edit)
  // }

  // updateBtn.addEventListener('click', edit)
  list.append(newLi)
  //   console.log(newLi)
})

// 삭제 버튼
deleteBtn.addEventListener('click', () => {
  const checkBoxGroup = document.querySelectorAll('[type=checkbox]')
  checkBoxGroup.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.parentNode.remove()
    }
  })
})

// 첫번째 눌렀을 때, on 이 없는 상태로 들어온다. on 을 켜주자. , input 태그를 만들기
// 두번쨰 눌렀을 때, on 이 있는 상태로 들어온다 on 을 꺼주고, input 에 있는 값으로 바꾸기

// 수정 버튼
updateBtn.addEventListener('click', () => {
  const checkBoxGroup = document.querySelectorAll('[type=checkbox]')
  const checkedBox = []
  checkBoxGroup.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedBox.push(checkbox)
    }
  })
  if (checkedBox.length >= 2) {
    alert('하나만 체크해라!')
    return
  }
  const parentLi = checkedBox[0].parentNode

  if (!updateBtn.classList.contains('on')) {
    console.log(checkedBox[0])
    // input 태그 만들기
    const newInput = document.createElement('input')
    newInput.setAttribute('id', 'new_input')

    parentLi.removeChild(parentLi.querySelector('.text_label'))
    parentLi.appendChild(newInput)

    updateBtn.classList.add('on')
    return
  }
  updateBtn.classList.remove('on')

  // 수정하기

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'

  const label = document.createElement('label')
  label.setAttribute('class', 'text_label')
  const newInput = document.querySelector('#new_input')
  label.innerText = newInput.value
  parentLi.appendChild(checkbox)
  parentLi.appendChild(label)

  parentLi.removeChild(checkedBox[0])
  parentLi.removeChild(newInput)
})

// 초기화 버튼
resetBtn.addEventListener('click', () => {
  list.innerHTML = ''
})
