let tasks = [];
<script src="script.js"></script>
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskCount = document.getElementById("taskCount");

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
}

addBtn.addEventListener("click", addTask);
function displayTasks() {

    taskList.innerHTML = "";

    emptyMessage.style.display =
        tasks.length === 0 ? "block" : "none";

    tasks.forEach(function(task) {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task.text}</span>

            <button onclick="deleteTask(${task.id})">
                حذف
            </button>
        `;

        if (task.completed) {
            li.classList.add("completed");
        }

        taskList.appendChild(li);
    });

    taskCount.textContent = tasks.length;
}

function deleteTask(id) {

    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    displayTasks();
}

filter()
li.innerHTML = `
    <span onclick="toggleTask(${task.id})">
        ${task.text}
    </span>

    <button onclick="deleteTask(${task.id})">
        حذف
    </button>
`;
function toggleTask(id) {

    tasks = tasks.map(function(task) {

        if (task.id === id) {
            task.completed = !task.completed;
        }

        return task;
    });

    displayTasks();
}
task.completed = !task.completed;
localStorage.setItem("tasks", JSON.stringify(tasks));
const savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
    tasks = JSON.parse(savedTasks);
}

displayTasks();
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
saveTasks();