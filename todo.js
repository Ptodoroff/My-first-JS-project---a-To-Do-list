let date=new Date();
let currentDate=document.getElementById('currentDate');
currentDate.innerHTML=`<u>${date.toLocaleString()}</u>`;

let todo={
    id: '',
    name: '',
    completed: false
}

function addTodo(item) {
    if (item!=='') {
        const todo={
            id: String (Date()),
            name: item,
            completed: false
        }
        tasks.push(todo);
        console.log(tasks);
        $taskList.innerHTML=tasks.map(todo=>`<li class="${todo.id} listItem">
                              ${todo.name}
                              <button type='submit' class="complete" > Complete </button>
                              </li>`).join('');
    }
   


for (let $complete of $taskList.querySelectorAll('.complete')) {
    $complete.addEventListener('click' ,checkCompleted);
    function checkCompleted (event) {
        
        console.log(todo.completed);
        console.log(event.target);
         $complete.parentNode.classList.toggle("checked");
    }
}



}

let tasks=[];
let $taskList=document.querySelector('.taskList');
let $task=document.querySelector('#todo-input');
let $todoItemsLsit=document.querySelector('.item')
let $btn=document.querySelector('[name="btn-1"]');
$btn.addEventListener('click',saveTask);
function saveTask (event){
    event.preventDefault();
    addTodo($task.value)
}
