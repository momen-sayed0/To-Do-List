let taskInput = document.querySelector("input[name ='inputText']");
let button = document.querySelector("button[name ='submit']");
let ShowTasks = document.querySelector(".tasks");
ShowTasks.innerHTML = "";
let AllTasks = [];

//ADD
let renderTask = () => {
     let newTask = {
          task: taskInput.value,
     };
     AllTasks.push(newTask);
     taskInput.value = "";
     ShowALLTasks();
};
//Delete
let deleteTask = (index) => {
     AllTasks.splice(index, 1);
     ShowALLTasks();
}

// Edit
let editTask = (index) => {
     update = document.querySelectorAll(".tasks .update");
     if(update.length == 0){
          inputTask = document.querySelectorAll(".tasks input");
          editbtn = document.querySelectorAll(".tasks .edit");
          inputTask[index].removeAttribute("readonly");
          editbtn[index].innerText = "Update";
          editbtn[index].setAttribute("onclick", `updateTask(${index})`);
          editbtn[index].classList.replace("edit", "update");
     }else{
          alert("update the current task first!")
     }
};
// Update
let updateTask = (index) => {
     inputTask = document.querySelectorAll(".tasks input");
     editbtn = document.querySelector(".tasks .update");
     inputTask[index].setAttribute("readonly", "readonly");
     AllTasks[index].task = inputTask[index].value;
     editbtn.setAttribute("onclick", `editTask(${index})`)
     editbtn.innerText = "edit";
     editbtn.classList.replace("update", "edit")
     ShowALLTasks()
};


let ShowALLTasks = () => {
     ShowTasks.innerHTML = "";
     AllTasks.forEach((element, index) => {
          ShowTasks.innerHTML += `
          <div class="row">
               <div class="inputt">
                    <input type="text" value="${element.task}" readonly >
               </div>
               <div class="btns">
                    <button onclick = "editTask(${index})" class="edit">Edit</button>
                    <button onclick = "deleteTask(${index})" class="delete">Delete</button>
               </div>
          </div>
          `;
     });
};






button.addEventListener('click', renderTask);

taskInput.addEventListener('keyup', (event) => {
     if (event.key === "Enter") {
          renderTask();
     }
});