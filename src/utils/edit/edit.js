import { closeModal, openModal } from "../modalAction/modalAction";
import { editTaskApi, fetchTasks } from "../../api/axios";
import { renderTasks } from "../render/render";
import { preFillInputs } from "../preFillInput/preFillInput";

export function editRow(e, selectedRowId) {
  const loading = document.getElementById("loading");
  const modalBox = document.getElementById("modal-box");

  let editActive = localStorage.getItem("editActive")
    ? JSON.parse(localStorage.getItem("editActive"))
    : "";

  let toEdit = localStorage.getItem("toEdit")
    ? JSON.parse(localStorage.getItem("toEdit"))
    : "";

  if (editActive === false) {
    e.preventDefault();
    localStorage.setItem("isEdit", JSON.stringify(true));

    const selectedRow = document.getElementById(`${selectedRowId}`);

    // get button id as index of the object that should edited
    const idToEdit = +selectedRow.id;
    toEdit = idToEdit;
    localStorage.setItem("toEdit", JSON.stringify(idToEdit));

    // Fetch all tasks and find the task to be edited
    openModal(loading);
    fetchTasks().then((response) => {
      closeModal(loading);
      const tasks = response.data;
      const taskToEdit = tasks.find((task) => task.id === idToEdit);
      preFillInputs(taskToEdit);
      openModal(modalBox, isEdit);
    });
  } else {
    // Get updated data from the form inputs
    const task = e.target.querySelector('input[name="task-name"]').value;
    const priority = e.target.querySelector(
      'input[name="priority"]:checked'
    ).value;
    const status = e.target.querySelector('input[name="status"]:checked').value;
    const deadline = e.target.querySelector('input[name="deadline"]').value;
    const desc = e.target.querySelector('textarea[name="description"]').value;

    // Fetch updated tasks, replace the specific task, and re-render the tasks
    openModal(loading);
    fetchTasks().then((response) => {
      closeModal(loading);
      const tasks = response.data;
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

      editTaskApi(toEdit, newTask).then(() => {
        openModal(loading);
        fetchTasks().then((response) => {
          closeModal(loading);
          localStorage.setItem("editActive", JSON.stringify(false));
          closeModal(modalBox);
          renderTasks(response.data);
        });
      });
    });
  }
}
