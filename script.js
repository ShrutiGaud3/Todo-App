const body= document.querySelector('body')
const input =document.querySelector('input')
const form =document.querySelector('form')
const ul = document.querySelector('ul')

form.addEventListener('submit', saveTodo)

function saveTodo(e){
    e.preventDefault()

    // create list


    const list =document.createElement('li')
    list.className='list-group-item'
    list.style.borderBottom='2px solid black'
    list.style.marginTop='5px'
    list.innerText= input.value
    ul.appendChild(list)

    form.reset()



    //   delete button

    const deletebtn= document.createElement('button')
    deletebtn.innerText='Delete'
    deletebtn.className='btn btn-dark float-end '
    list.appendChild(deletebtn)


}

ul.addEventListener('click', deleteTodo)
function deleteTodo(e){
    if(e.target.className.includes('btn-dark')){
        let li = e.target.parentElement
        li.remove()
    }
}

