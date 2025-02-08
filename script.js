// ToDo Update Instruction
// - Add an onclick event to the update button/element.
// - Use prompt() to take user input (search online for how prompt works in JavaScript if needed).
// - Assign the updated value to the corresponding DOM element.
// - Save the updated value in localStorage.

document.addEventListener('DOMContentLoaded', loadTask);

function loadTask() {
    // database theke data dekhabo
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.forEach(task => addTaskToDOM(task));
}


function addTask() {
    let textInput = document.getElementById('taskInput');
    let taskText = textInput.value;
    
    // DOM vitore dekhaite hbe
    

    addTaskToDOM(taskText)
    // local storage save korte hbe

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    textInput.value = "";
}


function addTaskToDOM(taskText) {
    let ul = document.getElementById('taskList');
    console.log(ul)
    let li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <span>
            <span class="delete btn btn-danger" onclick="deleteTask(this)" >Delete</span>
        </span>
    `
    ul.appendChild(li)       
}

function deleteTask(element) {
    let li = element.parentElement.parentElement;
    let taskText = li.firstElementChild.innerText;

    li.remove()

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks = tasks.filter(task => task !== taskText)
    localStorage.setItem("tasks",JSON.stringify(tasks))

}
