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
