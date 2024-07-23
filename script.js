const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask);
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector("#todoCards");

function addTask() {
  const newTask = taskCard.cloneNode(true);

  const newTextArea = newTask.querySelector('.task');
  newTextArea.value = "New Task";

  const newDelBtn = newTask.querySelector(".delBtn");//newdellbtn etait undefined(et ca marchait pas aussi alors j'ai totu tenté)

  newDelBtn.addEventListener("click", function () {
    deleteTask(newTask);
  });

  tasksContainer.appendChild(newTask);
  updateCount();
}

const delBtn = document.querySelector(".delBtn");
delBtn.addEventListener("click", function () {
  deleteTask(taskCard);
});

function deleteTask(task) {
  task.remove();
  updateCount();
}


// const count = document.querySelector('#count');
// count.value = 1;
// const tasks = document

function updateCount(){
    // count.textContent = "TAsks: ".tasks.length;
    const tasks = document.querySelectorAll('.todoCard');
    const count = document.querySelector('#count').textContent = `Tasks: ${tasks.length}`;
}