document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Load tasks from LocalStorage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => addTaskToDOM(task.text, task.completed));
    };

    // Save tasks to LocalStorage
    const saveTasks = () => {
        const tasks = [];
        document.querySelectorAll("#taskList li").forEach(li => {
            tasks.push({ text: li.firstChild.textContent.trim(), completed: li.classList.contains("completed") });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    // Add Task to the DOM
    const addTaskToDOM = (taskText, completed = false) => {
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete">❌</button>`;

        if (completed) li.classList.add("completed");

        // Mark Task as Completed
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
            saveTasks();
        });

        // Delete Task
        li.querySelector(".delete").addEventListener("click", () => {
            li.remove();
            saveTasks();
        });

        taskList.appendChild(li);
    };

    // Add Task Button Click
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        addTaskToDOM(taskText);
        saveTasks();
        taskInput.value = "";
    });

    loadTasks(); // Load tasks when page loads
});
