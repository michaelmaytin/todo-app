/*
- We create 3 const variables
- We use the socument object
    - The document object is a part of the Document class
    - This object is a special object which represents the entire webpage
    - it is a global object automatically avaliable in any browser
- We use then use the getElementId() method
    - This is a method that belongs to the document object
    - It finds the HTML element by its id attricute and gives a reference to that element
    - This allows javaScript to interact with the HTML element
    - We then store it in our own variable
*/
const add_button = document.getElementById("add-button");
const task_input = document.getElementById("task-input");
const task_list = document.getElementById("task-list");

/*
- We take the add button variable and add an event listener
    - Event listeners listen for an event
        - click
        - keypress
        - hover
        - etc...
- We then specify our desired even: click
- We then create a callbacl function which activates upon an event
    - In this case, when we click the 'addTask; fucntion will activate
*/
add_button.addEventListener("click", addTask);

/*
- Here we are now defining the addTask function

- We create the variable task_text which represent the input box value
    - The line takes the value of task_input, trums the extra space, then asigns it to task_text
- We create a conditional statement so that if the input box is empty nithing happens
- Next we create a list element for out hypotheical <li></li>
- Next we crate a span element for our hypotetical <span></span>
- We ise the createElement() fucntion from document
- span wraps small pieces of text or inline content so you can style it or target it with JavaScript
- we then use an addEventListener to make the span listen for clicks
- We the define the event lister such that when the li.classList is clicked it is marked as completed to the HTML
- Next we creare a delete button using document.createElement
- We instantiate it to HTML 'button'
- We then create an event listener for delete button that listens for a click
- Upon click the li.remove fucniton is activated, removing the element from the unordered list
- After all this, we use the .appendChilld to append the created elements onto new <li>
- Basically we add span, delete_button, to <li>
- then we append li to task_list which is our id for th <ul>
*/
function addTask() {
    const task_text = task_input.value.trim();
    if (task_text === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    
    span.textContent = task_text;

    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const delete_button = document.createElement("button");
    delete_button.textContent = "✓";
    delete_button.addEventListener("click", () => li.remove());

    li.appendChild(span);
    li.appendChild(delete_button);
    task_list.appendChild(li);

    task_input.value = "";
}