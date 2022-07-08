let date=new Date();
let currentDate=document.getElementById('currentDate');
currentDate.innerHTML=`<u>${date.toLocaleString()}</u>`;


let taskArray=[];
let tasks=[];
let $taskList=document.querySelector('.taskList');
let $checkMark=document.querySelector('#checkbox');
let $task=document.querySelector('#taskBox');
let $btn=document.querySelector('[name="btn-1"]');
$btn.addEventListener('click',saveTask);
function saveTask (event){
    event.preventDefault();
     $taskList.innerHTML+= `<tr><td>${$task.value}</td><td><input type="checkbox"></td> <td> <button id='btn-2'> Delete </button> </td></tr>`
     taskArray.push($task.value)
     console.log(taskArray);

}