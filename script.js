//Task List variables
const addButton = document.getElementById("add-task");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", addTask);


//Clock variables
const hr = document.getElementById("hours");
const min = document.getElementById("mins");
const sec = document.getElementById("sec");


//Task List fucntion
function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const li = document.createElement("li")
    const span = document.createElement("span");

    span.textContent = taskText;

    span.addEventListener("click", ()=> {
        li.classList.toggle("completed");
    })

    const deleteButton = document.createElement("delete-button");
    deleteButton.textContent = "✓";
    deleteButton.addEventListener("click", ()=> {
        li.remove();
    })

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.append(li);

    taskInput.value = "";
}

//Clock fucntion
function displayTime() {
    let date = new Date;

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotate = 30 * hh + mm / 2;
    let mRotate = 6 * mm;
    let sRotate = 6 * ss;

    hr.style.transform = `rotate(${hRotate}deg)`;
    min.style.transform = `rotate(${mRotate}deg)`;
    sec.style.transform = `rotate(${sRotate}deg)`;
}

setInterval(displayTime, 1000);