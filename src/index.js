document.addEventListener("DOMContentLoaded", () => {
const newTaskForm = document.querySelector("#create-task-form");
const newTaskInput = document.querySelector("#new-task-description");
const taskList = document.querySelector("#tasks");

newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();


const NewTask = document.createElement("li");
NewTask.innerText = newTaskInput.value;
taskList.appendChild(NewTask);

newTaskForm.reset()

})

})