let taskName = document.getElementById("task-name");
let btn = document.getElementById("create-btn");
let listaTaskova = document.getElementById("lista-taskova");

btn.addEventListener("click", addTask);

function addTask() {
  const text = taskName.value;
  const li = document.createElement("li");

  const check = document.createElement("input");
  check.type = "checkbox";
  li.textContent = text;

  li.appendChild(check);

  li.addEventListener("click", completed);
  listaTaskova.appendChild(li);
}

function completed(event) {
  const taskItem = event.target;
  taskItem.classList.toggle("completed");
}
