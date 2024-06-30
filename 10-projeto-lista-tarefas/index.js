const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list-ul");

let tasks = [];

window.onload = () => {
  const storagedTasks = localStorage.getItem("tasks");
  if (!storagedTasks) return;

  tasks = JSON.parse(storagedTasks);
  tasks.forEach((task) => {
    adicionarTaskNaLista(task);
  });
  const liElements = document.querySelectorAll("#todo-list-ul > li");
  liElements.forEach((liEl) => aplicarTaskCss(liEl));
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskTitle = taskTitleInput.value;

  if (taskTitle.length < 3) {
    alert("Sua tarefa precisa ter, pelo menos, 3 caracteres.");
    return;
  }

  let taskObject = { title: taskTitle, done: false };

  //adicionando a nova tarefa no array de tasks
  tasks.push(taskObject);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  //adicionar a nova tarefa no HTML
  adicionarTaskNaLista(taskObject);

  taskTitleInput.value = "";
});

function adicionarTaskNaLista(task) {
  const liElement = document.createElement("li");

  const taskCheckboxInput = document.createElement("input");
  taskCheckboxInput.setAttribute("type", "checkbox"); // Ou pode ser feito assim => taskCheckboxInput.type = "checkbox";
  taskCheckboxInput.checked = task.done;

  taskCheckboxInput.addEventListener("change", (event) => {
    const liElement = event.target.parentElement;

    const span = liElement.querySelector("span");
    const done = event.target.checked;

    // tasks.forEach((task) => {
    //   if (task.title === span.textContent) {
    //     task.done = done;
    //   }
    // });

    tasks = tasks.map((task) => {
      if (task.title === span.textContent) {
        task.done = done;
      }
      return task;
    });

    aplicarTaskCss(liElement);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const taskTitleSpan = document.createElement("span");
  taskTitleSpan.textContent = task.title;

  const taskRemoveButtom = document.createElement("button");
  taskRemoveButtom.setAttribute("type", "buttom");
  taskRemoveButtom.textContent = "Remover";
  /**
   * * Obviamente não é o ideal comparar pelo texto, prorém, o objetivo
   * * aqui é apenas treinar a remoção de elementos do HTML
   */
  taskRemoveButtom.addEventListener("click", (event) => {
    const liToBeRemoved = event.target.parentElement;
    const spanTitle = liToBeRemoved.querySelector("span");

    // tasks.forEach((el, index) => {
    //   if (el.title === spanTitle.textContent) {
    //     tasks.splice(index, 1);
    //   }
    // });

    tasks = tasks.filter((task) => task.title !== spanTitle.textContent);

    todoListUl.removeChild(liToBeRemoved);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  liElement.appendChild(taskCheckboxInput);
  liElement.appendChild(taskTitleSpan);
  liElement.appendChild(taskRemoveButtom);

  todoListUl.appendChild(liElement);
}

function aplicarTaskCss(liElement) {
  const span = liElement.querySelector("span");
  const input = liElement.querySelector("input");
  const done = input.checked;
  if (done) {
    span.style.textDecoration = "line-through";
  } else {
    span.style.textDecoration = "none";
  }
}
