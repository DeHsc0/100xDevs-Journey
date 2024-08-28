'use strict';


function addTask() { 

    let taskText = document.getElementById('todoInput').value
    
    const taskBox = document.createElement('div')
    taskBox.className = 'taskBox'

    const taskContent = document.createElement('p')
    taskContent.textContent = taskText
    taskBox.appendChild(taskContent)

    let doneBtn = document.createElement('button')
    doneBtn.textContent = 'Done'
    doneBtn.className = 'completeBtn'
    taskBox.appendChild(doneBtn)  
    

    doneBtn.addEventListener('click' , function(e){
       
        taskContent.style.textDecoration = 'line-through';        
    })

    let delBtn = document.createElement('button');
    delBtn.textContent = 'Delete'
    delBtn.className = 'removeBtn'
    taskBox.appendChild(delBtn)
    delBtn.addEventListener('click', function(e) {
        e.target.parentElement.remove();
      });

    const container = document.getElementById('taskContainer')
    container.appendChild(taskBox)
}