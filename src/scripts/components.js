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
