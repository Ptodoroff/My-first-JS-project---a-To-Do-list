let date=new Date();
let currentDate=document.getElementById('currentDate');
currentDate.innerHTML=`<u>${date.toLocaleString()}</u>`;


let tasks;
tasks=tasks? JSON.parse(localStorage.getItem("tasks")):[];
let $taskList=document.querySelector('.taskList');
let $task=document.querySelector('#todo-input');
let $todoItemsLsit=document.querySelector('.item')
let $btn=document.querySelector('[name="btn-1"]');

let todo={
    id: '',
    name: '',
    completed: false
};
        function getLS(){
            tasks=JSON.parse(localStorage.getItem("tasks"))
            if (tasks) {
                $taskList.innerHTML=tasks.map(todo=>`<li class="listItem" data-key="${todo.id}">
                ${todo.name}
                <button type='submit' class="complete" > Complete </button> <button class='delete' ${todo.id}> Delete task </button>
                </li>`).join('');

                for (let $complete of $taskList.querySelectorAll('.complete')) {
                    $complete.addEventListener('click' ,checkCompleted);
                    function checkCompleted (event) {
                        
                        console.log(todo.completed);
                        console.log(event.target);
                         $complete.parentElement.classList.toggle("checked");
                         $complete.classList.toggle("checked");
                    }
                }
                
                for (let $delete of $taskList.querySelectorAll('.delete')){
                    $delete.addEventListener('click',deleteCompleted)
                    function deleteCompleted (){
                        $delete.parentElement.remove();
                    }
                }
        }
    }   



getLS();
console.log(tasks);

function addTodo(item) {
    
    if (item!=='') {
         todo={
            id: JSON.stringify(Date.now()),
            name: item,
            completed: false
        }
         
        

        $taskList.innerHTML+=tasks.map(todo=>`<li class="listItem" data-key="${todo.id}">
                              ${todo.name}
                              <button type='submit' class="complete" > Complete </button> <button class='delete'> Delete task </button>
                              </li>`).join('');
         tasks=JSON.parse(localStorage.getItem('tasks'))
         localStorage.setItem('todo', JSON.stringify(todo));
         tasks.push(todo);
        localStorage.setItem('tasks', JSON.stringify(tasks))                    
    }
   
    for (let $complete of $taskList.querySelectorAll('.complete')) {
        $complete.addEventListener('click' ,checkCompleted);
        function checkCompleted (event) {
            
            console.log(todo.completed);
            console.log(event.target);
             $complete.parentElement.classList.toggle("checked");
             $complete.classList.toggle("checked");
        }
    }
    
    for (let $delete of $taskList.querySelectorAll('.delete')){
        $delete.addEventListener('click',deleteCompleted)
        function deleteCompleted (){
            $delete.parentElement.remove();
        }
    }
    





}




$btn.addEventListener('click',saveTask);
function saveTask (event){
    event.preventDefault();
    addTodo($task.value)
}
