document.addEventListener("DOMContentLoaded", ()=>{
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", ()=>{
        const taskText = taskInput.value.trim();

        if(taskText === "") return;

        const li = document.createElement('li');

        li.innerHTML = `
        ${taskText} 
        <button class="delete">❌</button>`;

        taskList.appendChild(li);

        li.addEventListener("click", ()=>{
            console.log("li have clicked to check is it completed or not")
            li.classList.toggle("completed");
        })

        li.querySelector(".delete").addEventListener("click", () => {
            li.remove();
        });


        taskInput.value = "";
    })
})