// const todoInput = document.querySelector(".todo-input");
// const todoButton = document.querySelector(".todo-button");
// const todoList = document.querySelector(".todo-list");
// const filterOption = document.querySelector(".filter-todo");

// document.addEventListener("DOMContentLoaded", loadLocalTodos);
// todoButton.addEventListener("click", addTodo);
// todoList.addEventListener("click", handleTodoClick);
// filterOption.addEventListener("change", filterTodo);

// function createTodoElement(todoText) {
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");

//     const newTodo = document.createElement("li");
//     newTodo.innerText = todoText;
//     newTodo.classList.add("todo-item");
//     todoDiv.appendChild(newTodo);

//     const completedButton = document.createElement("button");
//     completedButton.innerHTML = '<i class="fas fa-check-circle"></i>';
//     completedButton.classList.add("complete-btn");
//     todoDiv.appendChild(completedButton);

//     const trashButton = document.createElement("button");
//     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
//     trashButton.classList.add("trash-btn");
//     todoDiv.appendChild(trashButton);

//     return todoDiv;
// }

// function addTodo(event) {
//     event.preventDefault();
//     if (todoInput.value.trim() !== "") {
//         const todoDiv = createTodoElement(todoInput.value);
//         todoList.appendChild(todoDiv);
//         saveLocalTodos(todoInput.value);
//         todoInput.value = "";
//     } else {
//         alert("Please enter a valid todo.");
//     }
// }

// function handleTodoClick(e) {
//     const item = e.target;
//     const todo = item.closest(".todo");

//     if (item.classList.contains("trash-btn")) {
//         todo.classList.add("slide");
//         todo.addEventListener("transitionend", () => {
//             todo.remove();
//             removeLocalTodos(todo);
//         });
//     }

//     if (item.classList.contains("complete-btn")) {
//         todo.classList.toggle("completed");
//     }
// }

// function filterTodo(e) {
//     const todos = Array.from(todoList.children);
//     todos.forEach(todo => {
//         if (todo.nodeType === 1) { // Ensures only element nodes are processed
//             switch (e.target.value) {
//                 case "all":
//                     todo.style.display = "flex";
//                     break;
//                 case "completed":
//                     todo.style.display = todo.classList.contains("completed") ? "flex" : "none";
//                     break;
//                 case "incomplete":
//                     todo.style.display = !todo.classList.contains("completed") ? "flex" : "none";
//                     break;
//             }
//         }
//     });
// }

// function saveLocalTodos(todo) {
//     let todos = JSON.parse(localStorage.getItem("todos") || "[]");
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// function loadLocalTodos() {
//     let todos = JSON.parse(localStorage.getItem("todos") || "[]");
//     todos.forEach(todoText => {
//         const todoDiv = createTodoElement(todoText);
//         todoList.appendChild(todoDiv);
//     });
// }

// function removeLocalTodos(todo) {
//     let todos = JSON.parse(localStorage.getItem("todos") || "[]");
//     const todoText = todo.querySelector(".todo-item").innerText;
//     todos = todos.filter(t => t !== todoText);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }



const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded", loadLocalTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", handleTodoClick);
filterOption.addEventListener("change", filterTodo);

function createTodoElement(todoText) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoText;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Thumbs Up Button
    const thumbsUpButton = document.createElement("button");
    thumbsUpButton.innerHTML = '<i class="fas fa-thumbs-up"></i>';
    thumbsUpButton.classList.add("thumbs-up-btn");
    todoDiv.appendChild(thumbsUpButton);

    // Thumbs Down Button
    const thumbsDownButton = document.createElement("button");
    thumbsDownButton.innerHTML = '<i class="fas fa-thumbs-down"></i>';
    thumbsDownButton.classList.add("thumbs-down-btn");
    todoDiv.appendChild(thumbsDownButton);

    return todoDiv;
}

function addTodo(event) {
    event.preventDefault();
    if (todoInput.value.trim() !== "") {
        const todoDiv = createTodoElement(todoInput.value);
        todoList.appendChild(todoDiv);
        saveLocalTodos(todoInput.value);
        todoInput.value = "";
    } else {
        alert("Please enter a valid todo.");
    }
}

function handleTodoClick(e) {
    const item = e.target;
    const todo = item.closest(".todo");

    if (item.classList.contains("thumbs-down-btn")) {
        todo.classList.add("slide");
        todo.addEventListener("transitionend", () => {
            todo.remove();
            removeLocalTodos(todo);
        });
    }

    if (item.classList.contains("thumbs-up-btn")) {
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = Array.from(todoList.children);
    todos.forEach(todo => {
        if (todo.nodeType === 1) {
            switch (e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    todo.style.display = todo.classList.contains("completed") ? "flex" : "none";
                    break;
                case "incomplete":
                    todo.style.display = !todo.classList.contains("completed") ? "flex" : "none";
                    break;
            }
        }
    });
}

function saveLocalTodos(todo) {
    let todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadLocalTodos() {
    let todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos.forEach(todoText => {
        const todoDiv = createTodoElement(todoText);
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    let todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const todoText = todo.querySelector(".todo-item").innerText;
    todos = todos.filter(t => t !== todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}
