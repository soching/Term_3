// Select DOM for needed----------------
let taskInput = document.querySelector("#task");
let priorityInput = document.querySelector("#priority");
let btn = document.querySelector("button");
btn.addEventListener('click', addTask)

//save data------------------------

function saveData(){
    localStorage.setItem('tasks',JSON.stringify(tasks));

}

function loadData(){
    let Data =localStorage.getItem('tasks');
    return Data;
}


// Database to store all the tasks---------

let tasks = [

]
// saveData();
loadData();



function addTask(e){
    e.preventDefault();
    let task = {description:taskInput.value, priority:parseInt(priorityInput.value)};
    tasks.push(task);
    displayTask();

    saveData();

}
// Function used for display all the tasks

function displayTask(){
    //add to display ----------------
    tasks=JSON.parse(loadData());

    let result = document.querySelector(".result");
    if (result){
        result.remove()
    }
    let output = document.createElement("div");
    output.className = "result";

    for (value of tasks){
        let div = document.createElement("div");
        div.className = "list";
        let h1 = document.createElement("h1");
        if (value.priority === 0){
            div.style.background = "gray";
        }
        h1.textContent = value.description;

        div.appendChild(h1)
        output.appendChild(div);
    }
    document.body.appendChild(output);
}
displayTask();