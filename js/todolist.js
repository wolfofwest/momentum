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
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.Text;

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
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  svaeToDo();
}

function handlToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = { id: Date.now(), Text: newTodo };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  svaeToDo();
}

toDoForm.addEventListener("submit", handlToDoSubmit);

const saveedToDos = localStorage.getItem(TODOS_KEY);

if (saveedToDos !== null) {
  const parsedToDos = JSON.parse(saveedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
