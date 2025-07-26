const addButton = document.getElementById("add-button");
const taskInput = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = taskText;

    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✓";
    deleteButton.addEventListener("click", () => li.remove());

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}