let addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
  let todoInput = document.querySelector("#todo-input");

  let todo = todoInput.value;

  let li = document.createElement("li");

  li.innerText = todo;

  let remove = document.createElement("button");

  remove.innerText = "Remove";

  remove.addEventListener("click", () => {
    li.remove();
  });

  li.append(remove);

  let todoList = document.getElementById("todo-list");

  todoList.prepend(li);
});
