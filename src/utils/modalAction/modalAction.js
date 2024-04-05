import { clearInputs } from "../clearInput/clearInput";
export function closeModal(item) {
  const addForm = document.getElementById("form");
  clearInputs(addForm);
  item.classList.add("invisible");
}

export function openModal(item, isEdit = false) {
  const addForm = document.getElementById("form");
  if (isEdit === false) {
    clearInputs(addForm);
  }
  item.classList.remove("invisible");
}
