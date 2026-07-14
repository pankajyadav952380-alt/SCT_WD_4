function addTask(){

    let task=document.getElementById("taskInput").value;
    let date=document.getElementById("taskDate").value;
    let time=document.getElementById("taskTime").value;

    if(task===""){
        alert("Enter a task");
        return;
    }

    let li=document.createElement("li");

    li.innerHTML=`
        <strong>${task}</strong><br>
        ${date} ${time}<br>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value="";
    document.getElementById("taskDate").value="";
    document.getElementById("taskTime").value="";
}

function searchTask() {
    let input = document.getElementById("searchTask").value.toLowerCase();
    let tasks = document.querySelectorAll("#taskList li");

    tasks.forEach(task => {
        task.style.display = task.textContent.toLowerCase().includes(input)
            ? "block"
            : "none";
    });
} 

function completeTask(button){
    button.parentElement.classList.toggle("completed");
}

function deleteTask(button){
    button.parentElement.remove();
}

function editTask(button){
    let li=button.parentElement;
    let newTask=prompt("Edit Task", li.firstChild.textContent.trim());

    if(newTask){
        li.childNodes[1].textContent=newTask;
        li.innerHTML=`
            <strong>${newTask}</strong><br>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
    }
}