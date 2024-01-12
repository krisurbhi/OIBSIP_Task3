const inputtdl = document.querySelector('#input')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault();
    addTodo();
}

function addTodo() {
    const items = document.createElement('div')
    items.classList.add('items')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputtdl.value
    items.appendChild(item)

    if (inputtdl.value === '') return

    const check = document.createElement("button")
    check.innerHTML = '<i class="fa-solid fa-check"></i>'
    check.classList.add("check-button")
    items.appendChild(check)

    const trash = document.createElement("button")
    trash.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trash.classList.add("trash-button")
    items.appendChild(trash)

    listtdl.appendChild(items)
    inputtdl.value = ''
}

// Checking and Delete to-doList 
function check_del(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttontdl.addEventListener('click', clickButton)
listtdl.addEventListener('click', check_del)