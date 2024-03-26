import { clearInputs } from "./components";

const addForm = document.getElementById("form");
// open or close modals
export function closeModal(item) {
  clearInputs(addForm);
  item.classList.add("invisible");
}

export function openModal(item, isEdit = false) {
  if (isEdit === false) {
    clearInputs(addForm);
  }
  item.classList.remove("invisible");
}
