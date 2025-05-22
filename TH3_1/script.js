let tasks = [];

window.onload = function () {
  loadTasksFromLocalStorage();
  renderTasks();
};

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Vui lòng nhập nội dung công việc!");
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
    isDone: false,
  };

  tasks.push(newTask);
  saveTasksToLocalStorage();
  renderTasks();
  taskInput.value = "";
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = task.isDone ? "completed" : "";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;
    span.onclick = () => toggleTaskStatus(task.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.onclick = () => deleteTask(task.id);

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasksToLocalStorage();
  renderTasks();
}

function toggleTaskStatus(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      task.isDone = !task.isDone;
    }
    return task;
  });
  saveTasksToLocalStorage();
  renderTasks();
}

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}
