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
