import { addToData, preFillInputs } from "./components";
import { closeModal, openModal } from "./modalAction";

// persian date picker
jalaliDatepicker.startWatch();

let tasks = [];
let isEdit = false;
let editActive = false;
let toEdit;

// addModal
const addBtn = document.getElementById("add");
const modalBox = document.getElementById("modal-box");

// close add modal
modalBox.addEventListener("click", (e) => {
  e.target.dataset.close ? closeModal(modalBox) : null;
});
// close with cancel btn
const cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click", () => closeModal(modalBox));

// open add modal
addBtn.addEventListener("click", () => {
  openModal(modalBox);
});

// addModal form
const addForm = document.getElementById("form");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isEdit === false) {
    addToData(e.target);
  } else {
    isEdit = false;
    editActive = true;
    editRow(e.target, toEdit);
  }

  closeModal(modalBox);
});

//Edit the selected row
let rowToEdit;
function editRow(e, selectedRow = {}) {
  if (editActive === false) {
    e.preventDefault();
    isEdit = true;

    // get button id as index of the object that should edited
    const idToEdit = +selectedRow.id;
    toEdit = idToEdit;

    // Fetch all tasks and find the task to be edited
    fetchTasks().then((tasks) => {
      const taskToEdit = tasks.find((task) => task.id === idToEdit);
      preFillInputs(taskToEdit);
      openModal(modalBox);
    });
  } else {
    // Get updated data from the form inputs
    const task = e.querySelector('input[name="task-name"]').value;
    const priority = e.querySelector('input[name="priority"]:checked').value;
    const status = e.querySelector('input[name="status"]:checked').value;
    const deadline = e.querySelector('input[name="deadline"]').value;
    const desc = e.querySelector('textarea[name="description"]').value;

    // Fetch updated tasks, replace the specific task, and re-render the tasks
    fetchTasks().then((tasks) => {
      const taskToEdit = tasks.find((task) => task.id === toEdit);

      // Create a new task object with the updated data
      const newTask = {
        ...taskToEdit,
        taskName: task,
        taskPriority: priority,
        taskStatus: status,
        taskDeadline: deadline,
        taskDescription: desc,
      };

      console.log(newTask);
      console.log(taskToEdit);
      console.log(tasks);

      editTaskApi(newTask).then(() => {
        editActive = false;
        closeModal(modalBox);
        renderTasks();
      });
    });
  }
}

function renderTasks() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  if (tasksFromApi) {
    tasksFromApi.forEach((task) => {
      const row = document.createElement("tr");
      row.id = `${task.id}`;
      row.classList.add("text-center", "border", "h-full", "w-full");

      // taskName column
      const taskNameCol = document.createElement("td");
      taskNameCol.classList.add(
        "text-start",
        "border-l-2",
        "border-b-2",
        "py-4",
        "pl-6"
      );
      taskNameCol.innerText = `${task.taskName}`;
      row.append(taskNameCol);

      // taskPriority column
      const taskPriorityCol = document.createElement("td");
      taskPriorityCol.classList.add("border-l-2", "border-b-2");
      const prioritySpan = document.createElement("span");
      prioritySpan.classList.add(
        "select-none",
        "rounded-3xl",
        "border-2",
        `${handlePriorityBorder(task.taskPriority)}`,
        `${handlePriorityBg(task.taskPriority)}`,
        `${handlePriorityText(task.taskPriority)}`,
        "py-1",
        "px-3",
        "font-bold"
      );
      prioritySpan.innerText = `${task.taskPriority}`;
      taskPriorityCol.append(prioritySpan);
      row.append(taskPriorityCol);

      // taskStatus column
      const taskStatusCol = document.createElement("td");
      taskStatusCol.classList.add("border-l-2", "border-b-2");
      const statusSpan = document.createElement("span");
      statusSpan.classList.add(
        "select-none",
        "rounded-3xl",
        "border-2",
        `${handleStatusBorder(task.taskStatus)}`,
        `${handleStatusBg(task.taskStatus)}`,
        `${handleStatusText(task.taskStatus)}`,
        "py-1",
        "px-3",
        "font-bold"
      );
      statusSpan.innerText = `${task.taskStatus}`;
      taskStatusCol.append(statusSpan);
      row.append(taskStatusCol);

      // taskDeadline column
      const taskDeadlineCol = document.createElement("td");
      taskDeadlineCol.classList.add("border-l-2", "border-b-2");
      const deadlineSpan = document.createElement("span");
      deadlineSpan.classList.add(
        "select-none",
        "rounded-3xl",
        "border-2",
        "border-blue-400",
        "py-1",
        "px-3"
      );
      deadlineSpan.innerText = `${task.taskDeadline}`;
      taskDeadlineCol.append(deadlineSpan);
      row.append(taskDeadlineCol);

      // taskActions column
      const taskActionsCol = document.createElement("td");
      taskActionsCol.classList.add("border-l-2", "border-b-2");
      const taskActionsSec = document.createElement("div");
      taskActionsSec.classList.add(
        "flex",
        "flex-col",
        "md:block",
        "items-center",
        "justify-center",
        "p-2",
        "gap-1"
      );

      // delete
      const deleteTask = document.createElement("button");
      deleteTask.classList.add("bg-red-600", "mx-1", "rounded", "text-center");
      deleteTask.id = `${task.id}`;
      const deleteIcon = document.createElement("img");
      deleteIcon.src = "./assets/delete.svg";
      deleteIcon.alt = "delete";
      deleteIcon.classList.add("w-5", "my-1", "mx-2");
      deleteTask.append(deleteIcon);
      taskActionsSec.append(deleteTask);

      // edit
      const editTask = document.createElement("button");
      editTask.classList.add("bg-blue-600", "mx-1", "rounded", "text-center");
      editTask.id = `${task.id}`;
      const editIcon = document.createElement("img");
      editIcon.src = "./assets/edit.svg";
      editIcon.alt = "edit";
      editIcon.classList.add("w-5", "my-1", "mx-2");
      editTask.append(editIcon);
      taskActionsSec.append(editTask);

      // view
      const viewTask = document.createElement("button");
      viewTask.classList.add("bg-gray-500", "mx-1", "rounded", "text-center");
      viewTask.id = `${task.id}`;
      const viewIcon = document.createElement("img");
      viewIcon.src = "./assets/view.svg";
      viewIcon.alt = "view";
      viewIcon.classList.add("w-5", "my-1", "mx-2");
      viewTask.append(viewIcon);
      taskActionsSec.append(viewTask);

      // append taskActionsSec
      taskActionsCol.append(taskActionsSec);
      row.append(taskActionsCol);

      // append new row
      tbody.append(row);

      // delete
      deleteTask.addEventListener("click", (e) => {
        confirmAndDelete(e, row);
      });

      // edit
      editTask.addEventListener("click", (e) => {
        editRow(e, row);
      });

      // view
      viewTask.addEventListener("click", (e) => {
        viewRow(e, row);
      });
    });
  }
}
