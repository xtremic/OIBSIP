
var input = document.getElementById('text')
var todo_text = document.getElementById('todo-text')
var root = document.getElementById('root')
var textbtn = document.getElementById('text-btn')
var status = document.getElementById('status')

var statNUM = 0

function addTodos(){
    if(input.value !== ''){
    
        createTodos(input.value)

        input.value = ''
        
    }

   
}





input.addEventListener('keypress', (e)=>{
    
    if(e.key === 'Enter'){
        addTodos()
    }

})



function createTodos(text){
    var todo = document.createElement('div')
    var checkbox = document.createElement('input')
    var todo_txt = document.createElement('span')

    todo.id = 'todo'
    checkbox.id = 'checkbox'
    checkbox.setAttribute('type', 'checkbox')
    todo_txt.id = 'todo-txt'

    todo.append(checkbox)
    todo.append(todo_txt)

    root.append(todo)

    todo_txt.innerHTML = text

    var status = document.getElementById('status')



checkbox.addEventListener('click', (e)=>{
    
    setTimeout(() => {
        root.removeChild(e.target.parentNode)
    }, 300);

    statNUM++

    status.innerHTML = "Completed " + statNUM
})

   
    



}

var date = new Date

var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
var months = ['january', 'february', 'march', 'april','may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

var info = document.getElementById('date')

info.innerHTML = days[date.getDay()] + ',' + ' '+ months[date.getMonth()] + ' ' +date.getDate()














