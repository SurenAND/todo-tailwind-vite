export function clearInputs(form) {
  const inputs = form.querySelectorAll("input, textarea");

  inputs.forEach((input) => {
    if (input.type !== "radio") {
      input.value = "";
    } else if (input.type === "radio") {
      input.checked = false;
    }
  });
}

export function addToData(target) {
  // get data
  const task = target.querySelector('input[name="task-name"]');
  const priority = target.querySelector('input[name="priority"]:checked');
  const status = target.querySelector('input[name="status"]:checked');
  const deadline = target.querySelector('input[name="deadline"]');
  const desc = target.querySelector('textarea[name="description"]');
  const newTask = {
    id: Date.now(),
    taskName: task.value,
    taskPriority: priority.value,
    taskStatus: status.value,
    taskDeadline: deadline.value,
    taskDescription: desc.value,
  };

  // Save the new task using the API
  addTaskApi(newTask).then(() => {
    // Render tasks after adding the new task
    fetchTasks().then(renderTasks);
  });
}

export function preFillInputs(data) {
  // Pre-fill the form inputs with the task's data
  const task = data.taskName;
  const priority = data.taskPriority;
  const status = data.taskStatus;
  const deadline = data.taskDeadline;
  const desc = data.taskDescription;

  // Fill the form inputs with the task's data
  const taskInput = document.querySelector('input[name="task-name"]');
  taskInput.value = task;

  // Pre-fill the priority radio inputs
  const priorityInputs = document.querySelectorAll('input[name="priority"]');
  priorityInputs.forEach((input) => {
    if (input.value === priority) {
      input.checked = true;
    }
  });

  // Pre-fill the status radio inputs
  const statusInputs = document.querySelectorAll('input[name="status"]');
  statusInputs.forEach((input) => {
    if (input.value === status) {
      input.checked = true;
    }
  });

  // Fill the deadline and description inputs
  const deadlineInput = document.querySelector('input[name="deadline"]');
  deadlineInput.value = deadline;

  const descTextarea = document.querySelector('textarea[name="description"]');
  descTextarea.value = desc;
}
