// Get references to the input field and the "Add Item" button
const inputText = document.getElementById("input_text");
const addItemButton = document.getElementById("add_item");
const createItems = document.getElementById("create_items");

function addtask(){
   const taskText =inputText.value 
   if(taskText.trim()==="" ){ // check donot  input text
    alert("Input Data")
    return
   }
   const taskDiv = document.createElement("div"); /// create main div 
    taskDiv.classList.add("flex", "justify-between", "mt-4");

    const taskContent = document.createElement("div"); // create h1 dive
    taskContent.innerHTML = `<h3>${taskText}</h3>`; // create h1 element & add value

    const taskButtons = document.createElement("div"); // create dive for buttons
    taskButtons.innerHTML = `           
        <button class="btn btn-info">Edit</button>
        <button class="btn btn-success">Delete</button>
        <button class="btn btn-error">Mark</button>
    `;

    const editButton = taskButtons.querySelector(".btn-info");
    editButton.addEventListener("click", () => {
        editTask(taskContent);
    });

    const deleteButton = taskButtons.querySelector(".btn-success");
    deleteButton.addEventListener("click", () => {
        deleteTask(taskDiv);
    });

    const markButton = taskButtons.querySelector(".btn-error");
    markButton.addEventListener("click", () => {
        markTask(taskContent);
    });


    taskDiv.appendChild(taskContent); //add h1 element value in main div
    taskDiv.appendChild(taskButtons); //add button element in main div
    createItems.appendChild(taskDiv);

    inputText.value = "";

    function editTask(taskContent) {
        const newText = prompt("Edit the task:", taskContent.textContent);
        if (newText !== null) {
            taskContent.textContent = newText;
        }
    }
    
    function deleteTask(taskDiv) {
        if (confirm("Are you sure you want to delete this task?")) {
            createItems.removeChild(taskDiv);
        }
    }
    
    function markTask(taskContent) {

        if (taskContent.style.textDecoration === "line-through") {
        taskContent.style.textDecoration = "none";
    } else {
        taskContent.style.textDecoration = "line-through";
    }
    }
   
}
addItemButton.addEventListener("click", addtask);

