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
