const newTask = document.getElementById('newTask');
const addBtn = document.getElementById('add-btn');
const openDiv = document.getElementById("open");
const inProgressDiv = document.getElementById('inProgress');
const inReviewDiv = document.getElementById('inReview');
const doneDiv = document.getElementById('done');


const createTask = ()=>{
 var taskName = newTask.value;
 if(taskName){
    var task = document.createElement("span");
    task.style.display = "flex";
    task.style.border = "2px solid black";
    task.style.padding = "5px"
    task.style.borderRadius = "10px";
    task.style.backgroundColor = "white";
    task.className = "task";
    task.innerText = taskName;
      openDiv.appendChild(task);
      newTask.value = " "; 
      task.onclick(popup);
    }
  }

  
const popup = document.createElement("dialog");
popup.addEventListener('click', function(){
    popup.setAttribute = open;
  const discription = document.createElement("textarea");
  discription.innerText = discription.value
  openDiv.appendChild();
});

