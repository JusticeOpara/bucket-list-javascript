const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo)

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    
    //   check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>'
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    // check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // append to list
    todoList.appendChild(todoDiv);
    // clear todo input value
    todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target;
    // Delete todo list
    if (item.classList[0] === 'trash-btn') {
        let todo = item.parentElement;
        todo.remove();
    }
    // check mark
    if (item.classList[0] === 'complete-btn') {
        let todo = item.parentElement;
        todo.classList.toggle("completed");
        
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display ="flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }else{
                    todo.styles.display = "none";
                }
                break;
                case"uncompleted":
                if(!todo.classList.contains("uncompleted")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    })
}

