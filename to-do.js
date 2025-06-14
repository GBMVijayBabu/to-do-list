

let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById('task-input');
    const text = taskInput.value.trim(); 

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = ""; 
        updateTasksList();
    }
};

const updateTasksList = () => {
    const taskList = document.querySelector(".task-list"); 
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="taskItem">
                <div class="task ${task.completed ? 'completed' : ''}">
                    <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskComplete(${index})"/>
                    <p>${task.text}</p>
                </div>
                <div class="icons">
                    <i class="bi bi-pencil-square" onclick="editTask(${index})"></i>
                    <i class="bi bi-trash" onclick="deleteTask(${index})"></i>
                </div>
            </div>
        `;
        taskList.appendChild(listItem);
    });

    updateProgress();
};


const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
};

const editTask = (index) => {
    const taskInput = document.getElementById('task-input');
    taskInput.value = tasks[index].text;
taskInput.value = tasks[index].text
tasks.splice(index, 1)
updateTasksList()

    editIndex = index; 
};



const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTasksList();
};


const updateProgress = () => {
    const completed = tasks.filter(task => task.completed).length;
    const total = tasks.length;
    const progress = document.getElementById("progress");
    const hero = document.getElementById("hero");

    const percentage = total > 0 ? (completed / total) * 100 : 0;
    progress.style.width = `${percentage}%`;
    hero.textContent = `${completed}/${total}`;
};

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    addTask();
});


