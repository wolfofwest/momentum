const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function svaeToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const btn = document.createElement("button");
  btn.innerText = "❎";

  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);

  btn.addEventListener("click", dltTOdo);
}

function dltTOdo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function handlToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  svaeToDo();
}

toDoForm.addEventListener("submit", handlToDoSubmit);

const saveedToDos = localStorage.getItem(TODOS_KEY);

if (saveedToDos !== null) {
  const parsedToDos = JSON.parse(saveedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
