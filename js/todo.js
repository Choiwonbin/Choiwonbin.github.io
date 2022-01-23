const toDoForm = document.querySelector(".footer__todo-form");
const toDoInput = document.querySelector(".footer__input");
const toDoList = document.querySelector(".footer__todolist");
const toDoBox = document.querySelector(".footer__todobox");
const toDoText = document.querySelector(".footer__todo div:last-child");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDo.text;
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newTodoObj);;
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function boxHandler() {
    if (toDoBox.style.display === "block") {
        toDoBox.style.display = "none";
        toDoText.style.opacity = "0.8";
    } else {
        toDoBox.style.display = "block";
        toDoText.style.opacity = "1";
    }
   ;
}

toDoText.addEventListener("click", boxHandler);