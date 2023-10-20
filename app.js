function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const listItem = document.createElement("li");
        listItem.innerHTML = `${taskText} <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(listItem);

        taskInput.value = "";
    }
}

function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

function editTask(button) {
    const listItem = button.parentElement;
    const taskText = listItem.firstChild.nodeValue;
    const newTaskText = prompt("Edit task:", taskText.trim());

    if (newTaskText !== null) {
        listItem.firstChild.nodeValue = newTaskText;
    }
}

function deleteAll() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
}
