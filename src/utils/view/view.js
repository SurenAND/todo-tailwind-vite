export function viewRow(e, selectedRowId) {
  e.preventDefault();
  const viewBox = document.getElementById("view-box");

  const loading = document.getElementById("loading");

  const selectedRow = document.getElementById(`${selectedRowId}`);

  // get button id as index of the object that should show
  const idToShow = +selectedRow.id;

  // Fetch all tasks and find the task to be viewed
  openModal(loading);
  fetchTasks().then((response) => {
    closeModal(loading);
    const tasks = response.data;
    const taskToView = tasks.find((task) => task.id === idToShow);
    changeViewModal(taskToView);
    openModal(viewBox);
  });
  // close add modal
  viewBox.addEventListener("click", (e) => {
    e.target.dataset.close ? closeModal(viewBox) : null;
  });
}

function changeViewModal(data) {
  const viewTaskName = document.getElementById("view-task-name");
  const viewPriority = document.getElementById("view-priority");
  const viewStatus = document.getElementById("view-status");
  const viewDeadline = document.getElementById("view-deadline");
  const viewDesc = document.getElementById("view-description");

  viewTaskName.innerText = data.taskName;
  viewPriority.innerText = data.taskPriority;
  viewStatus.innerText = data.taskStatus;
  viewDeadline.innerText = data.taskDeadline;
  if (data.taskDescription) {
    viewDesc.innerText = data.taskDescription;
  } else {
    viewDesc.innerText = "No Detail or Description";
  }
}
