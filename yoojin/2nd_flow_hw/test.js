//4
const input = document.getElementById('te_input')

input.setAttribute('maxlength','10')

input.addEventListener('input', function (event){
   const value = event.target.value
   const number = /\d/.test(value)
    if(number){
        alert('숫자가 입력되었습니다')
    } 
    event.target.value = ''
})

//5

const textBox = document.querySelector("#list_data")
const send = document.querySelector('#send')
const resetBtn = document.querySelector('#reset')
const ul = document.querySelector('#list')


//Enter버튼

textBox.addEventListener('keydown', function(e){
    if (e.key === 'Enter'){
    const inputContent = e.target.value
        CreateNewUlChild(inputContent)
        e.preventDefault();
    }
})

//저장 버튼 누를때

send.addEventListener('click', function(e){
    const inputContent = textBox.value
    CreateNewUlChild(inputContent)
    e.preventDefault();
})

//초기화
resetBtn.addEventListener('click', (event)=>{
    ResetUlChild()
    console.log('resetBtn')
    event.preventDefault();
})


const CreateNewUlChild = (text) => {
const newLi = document.createElement('li')


newLi.textContent = text
newLi.classList.add('on')


newLi.appendChild(editBtn())
newLi.appendChild(deleteBtn())
ul.appendChild(newLi)

}

const ResetUlChild = () => {
    const listAll = document.querySelectorAll('#list > li')
    listAll.forEach((el,_) => {
        if(el.className.includes('on')){
            el.remove()
        }
    })
    
}

const editBtn = ( ) => {
        const edit = document.createElement('button')
        edit.innerText = "edit"
        edit.addEventListener('click',(e)=>{
           const newInput = prompt('수정할내용을 입력하시오')
           
           e.preventDefault();
        })
        return edit;
    }
const deleteBtn = ( ) => {
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "delete"
       return deleteBtn;
    }





// $form.addEventListener('submit', (e) => {
//     e.preventDefault();