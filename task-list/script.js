// Constants declared for input button and task list area
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector(".tasks");

// Listener for the enter key. Used to add a new task
taskInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    createTask();
  }
});
// The onclick event for the 'Add' button
document.querySelector("#push").onclick = function () {
  createTask();
};
// The function that creates a task
function createTask() {
  if (taskInput.value.length == 0) {
    alert("The task field is blank. Enter a task name and try again.");
  } else {
    // Create task container
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Create label for task name
    let taskLabel = document.createElement("label");
    taskLabel.id = "taskname";

    // Create checkbox
    let taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.id = "check-task";
    taskCheckbox.onclick = function () {
      updateTask(this);
    };

    // Create paragraph for task text
    let taskText = document.createElement("p");
    taskText.textContent = taskInput.value;

    // Append checkbox and text to label
    taskLabel.appendChild(taskCheckbox);
    taskLabel.appendChild(taskText);

    // Create delete button with trash icon
    let deleteDiv = document.createElement("div");
    deleteDiv.classList.add("delete");
    let trashIcon = document.createElement("i");
    trashIcon.classList.add("uil", "uil-trash");
    deleteDiv.appendChild(trashIcon);

    // Append label and delete button to task container
    taskDiv.appendChild(taskLabel);
    taskDiv.appendChild(deleteDiv);

    // Append task container to task section
    taskSection.appendChild(taskDiv);

    // Add delete event
    deleteDiv.onclick = function () {
      taskDiv.remove();
    };

    // Manage overflow
    taskSection.offsetHeight >= 300
      ? taskSection.classList.add("overflow")
      : taskSection.classList.remove("overflow");
  }
}

function updateTask(task) {
  let taskItem = task.parentElement.lastElementChild;
  if (task.checked) {
    taskItem.classList.add("checked");
  } else {
    taskItem.classList.remove("checked");
  }
}
