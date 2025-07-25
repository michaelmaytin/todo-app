const addBtn = document.getElementById("add-button");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = taskText;
    
    span.addEventListener("click", ()=> {
        li.classList.toggle("completed");
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "✓";
    delBtn.addEventListener("click", ()=> li.remove());

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}


