import { closeModal, openModal } from "../modalAction/modalAction";
import { deleteTaskApi, fetchTasks } from "../../api/axios";
import { pagination } from "../pagination/pagination";
import { renderTasks } from "../render/render";

export function confirmAndDelete(e, selectedRowId) {
  const loading = document.getElementById("loading");
  e.preventDefault();

  const deleteConfirmSec = document.getElementById("delete-section");
  openModal(deleteConfirmSec);

  const deleteBtn = document.getElementById("delete-content-delete");

  // Remove the previous event listener from the delete button
  deleteBtn.removeEventListener("click", handleDeleteClick);

  // Add the new event listener to the delete button
  deleteBtn.addEventListener("click", handleDeleteClick);

  function handleDeleteClick() {
    closeModal(deleteConfirmSec);
    // remove the selected section
    const selectedRow = document.getElementById(`${selectedRowId}`);
    selectedRow.remove();

    // get button id as index of the object that should removed
    const idToDelete = +selectedRow.id;
    deleteTaskApi(idToDelete).then(() => {
      // Render tasks after adding the new task
      closeModal(deleteConfirmSec);
      openModal(loading);
      fetchTasks().then((response) => {
        pagination();
        closeModal(loading);
        renderTasks(response.data);
      });
    });
  }

  // cancel button
  const cancelBtn = document.getElementById("delete-content-cancel");
  cancelBtn.addEventListener("click", () => {
    closeModal(deleteConfirmSec);
    deleteBtn.removeEventListener("click", handleDeleteClick);
  });

  window.addEventListener("click", (event) => {
    if (event.target === deleteConfirmSec) {
      closeModal(deleteConfirmSec);
      deleteBtn.removeEventListener("click", handleDeleteClick);
    }
  });
}
